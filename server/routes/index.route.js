
import { Router } from "express";

const router = Router();
  
router.get("/", async (req, res) => res.send("Server Express is ok"))

router.all("/isAlive", (req, res) =>  res.send("Server is alive"))

export default router;