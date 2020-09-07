require("dotenv").config();

module.exports = {
   type: "mysql",
   entities: ["src/entity/*.ts"],
   migrations: ["src/migration/*.ts"],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
   },
};
