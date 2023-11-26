# Setup

TODO

## Environment variables

### General settings

| Variable        | Data type | Default value | Description                                                                       |
| --------------- | --------- | ------------- | --------------------------------------------------------------------------------- |
| NODE_ENV        | string    | -             | Sets node environment. Setting to 'production' will disable swagger documentation |
| SERVER_PORT     | number    | 2000          | Sets backend port                                                                 |
| VERSION         | string    | -             | Sets version when GET/status/version                                              |
| FRONTEND_DOMAIN | string    | -             | Sets frontend url                                                                 |
| LINE_SPLIT      | string    | \r\n          | Line split char for seeding data                                                  |

### Database settings

| Variable           | Data type | Default value | Description           |
| ------------------ | --------- | ------------- | --------------------- |
| DB_HOST            | string    | localhost     | Database host         |
| DB_PORT            | number    | 5432          | Database port         |
| DB_DIALECT         | string    | postgres      | Database type         |
| DB_USER            | string    | postgres      | Username for access   |
| DB_PASSWORD        | string    | -             | Password for access   |
| DB_NAME            | string    | postgres      | Name of db to use     |
| DB_LOGGING         | string    | false         | Logging enabled       |
| TYPEORM_MIGRATIONS | string    | -             | Path to migrations    |
| TZ                 | string    | UTC           | Timezone for database |

### Test database settings

| Variable | Data type | Default value | Description |
| -------- | --------- | ------------- | ----------- |
