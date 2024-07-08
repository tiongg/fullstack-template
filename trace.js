const { nodeFileTrace } = require('@vercel/nft');
const fse = require('fs-extra');
const path = require('path');
const { argv } = require('process');

/**
 * This script traces required files by looking at js files in the base path (subdirectories not included)
 * and copies them to the destination
 * trace.js <trace base path> <dependency destination directory>
 * Example usage: node trace.js packages/backend/dist/src ./deps
 */
function log(message, ...args) {
  if(typeof message === 'string') {
    console.log(`[trace.js] ${message}`, ...args);
  } else {
    console.log(message, ...args);
  }
}

async function main() {
  const destinationDirectory =
    argv.length >= 4 ? argv[argv.length - 1] : undefined;
  const basePaths = argv.slice(2, destinationDirectory ? -1 : undefined);
  const requiredDependencies = await trace(basePaths);
  if(!destinationDirectory) {
    log('No target destination specified, skipping copy step');
    return;
  }
  copyDependencies(requiredDependencies, destinationDirectory);
}

async function trace(basePaths) {
  if(!basePaths) {
    throw new Error('Base path not specified!');
  }
  log('Starting trace');
  let fileSet = new Set();
  for(const basePath of basePaths) {
    const jsFiles = fse
      .readdirSync(basePath)
      .filter((filename) => filename.endsWith('.js'))
      .map((filename) => path.join(basePath, filename));
    log('Tracing these js files:', jsFiles);
    const { fileList: newFileList } = await nodeFileTrace(jsFiles, {
      processCwd: basePath,
    });
    fileSet = new Set([...fileSet, ...newFileList]);
  }

  // For debugging purposes only
  fse.writeFileSync('trace-output.txt', Array.from(fileSet).join('\n'));
  log('Trace completed');
  return Array.from(fileSet);
}

async function copyDependencies(files, destinationDirectory) {
  log('Copying to', destinationDirectory);
  fse.ensureDirSync(destinationDirectory);
  for(const filename of files) {
    if(!filename || !filename.startsWith('node_modules/')) {
      continue;
    }
    const destPath = path.join(destinationDirectory, filename);
    fse.copySync(filename, destPath, {
      overwrite: true,
      recursive: true,
      dereference: true,
    });
  }
  log('Copy completed');
}

main();
