
import express from 'express';

import Config from "./config/srvConfig.js";
import cors from "cors";
import indexRoute from "./routes/index.route.js";
import taskRoute from "./routes/task.route.js";

const PORT = Config.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoute);
app.use(taskRoute);


app.listen(PORT, () => console.log(`Server up on port: ${PORT} - http://localhost:${PORT}`))
