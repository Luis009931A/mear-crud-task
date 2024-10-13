
import { Router } from "express";
import TaskControllers from "../controllers/task.controllers.js";

const router = Router();
const taskControllers = new TaskControllers();

  // Method CRUD :
  
router.get("/api/task", async (req, res) => {

  taskControllers.getAllTask(req, res)
})

router.get("/api/task/:id", async (req, res) => {
  
  taskControllers.getTask(req, res)
})

router.post("/api/task", async (req, res) => {
  
  taskControllers.createTask(req, res)
})

router.put("/api/task/:id", async (req, res) => {
  
  taskControllers.updateTask(req, res)
})

router.delete("/api/task/:id", async (req, res) => {
  
  taskControllers.deleteTask(req, res)
})

export default router;
