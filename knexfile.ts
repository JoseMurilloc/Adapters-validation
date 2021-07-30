interface KnexConfig {
  [key: string]: object | string;
};

const development = {
  client: 'pg',
  connection: {
    database: "my_trainings",
    user: "postgres",
    password: "123"
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
}

const knexConfig: KnexConfig = {
  development,
  client: 'pg',
};

export default knexConfig;
