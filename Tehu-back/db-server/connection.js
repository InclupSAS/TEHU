const { Sequelize } = require("sequelize");

 //local
//   const db = new Sequelize(
//    "TEHU",
//    "root",
//    "Tehu12345*",
//    {
//      host: "localhost",
//      dialect: "mysql",
//      define: { freezeTableName: false },
//      timezone: "-05:00",  //Establecer la zona horaria deseada para las consultas
//      dialectOptions: {
//        dateStrings: true,
//        typeCast: true,
//        timezone: "-05:00",  //Establecer la zona horaria deseada para la conexión
//      },
//    }
//  );

 //servidor

/* const db = new Sequelize(
  "piwdzivo_tehuapi",
  "piwdzivo_theuadmin",
  "jabondemanos23",
  {
    host: "216.246.112.154",
    dialect: "mysql",
    define: { freezeTableName: true },
    timezone: "-05:00",  //Establecer la zona horaria deseada para las consultas
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: "-05:00", // Establecer la zona horaria deseada para la conexión
    },
  }
); */

const db = new Sequelize(
  "tehudb",
  "tehudb_user",
  "FHnIGkCsntBUjiI8tTJOOAIGc5jkuztQ",
  {
    host: "dpg-cugedv5svqrc738fiqv0-a",
    dialect: "postgres",
    port: 5432,
    define: { freezeTableName: true },
    timezone: "-05:00",  //Establecer la zona horaria deseada para las consultas
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: "-05:00",  //Establecer la zona horaria deseada para la conexión
    },
  }
); 

module.exports = db;
