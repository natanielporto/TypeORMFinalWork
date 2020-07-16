console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
console.log('process.env.DATABASE_URL :>> ', process.env.ENTITIES);
console.log('process.env.DATABASE_URL :>> ', process.env.MIGRATIONS);
module.exports = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  // host: 'localhost',
  // port: 5433,
  // username: 'postgres',
  // password: 'docker',
  // database: 'grind',
  sincronize: false,
  logging: true,
  entities: [process.env.ENTITIES],
  migrations: [process.env.MIGRATIONS],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models/',
  },
};
