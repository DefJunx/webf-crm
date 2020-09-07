const dotenv = require("dotenv");

dotenv.config();

module.exports = {
   entities: ["src/entity/**/*.ts"],
   migrations: ["src/migration/**/*.ts"],
   subscribers: ["src/subscriber/**/*.ts"],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
   },
};
