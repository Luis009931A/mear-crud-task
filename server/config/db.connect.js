
import { createPool } from "mysql2/promise";

const myPool = createPool({
  host: "192.168.3.100",
  user: "layadmin",
  password: "L00993124@.Y",
  database: "taskdb",
  port: 3306
});

async function connect() {
  let conSQL;
  try {
    conSQL = await myPool.getConnection();
    console.log("Conexión exitosa a la base de datos");
    return conSQL;  // Retorna la conexión para su uso
  } catch (err) {
    console.error(`Ocurrió un error al conectar a la base de datos: ${err}`);
  } finally {
    if (conSQL) conSQL.release();  // Libera la conexión después del uso
  }
}

export default myPool;
