import sql from "../config/db.connect.js";

class TaskController {
  async getAllTask(req, res) {
    try {
      const [result] = await sql.query("SELECT * FROM tasks");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: err.message});
    }
  }

  async getTask(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      const [result] = await sql.query(
        "SELECT * FROM tasks WHERE id_task = ?",
        [id]
      );
      if (result.length === 0) {
        return res.status(404).json({ mgs: "No se encontro esta tarea" });
      }
      res.status(200).json([result][0]);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  }

  async createTask(req, res) {
    try {
      const { title, description } = req.body;
      const [result] = await sql.query(
        "INSERT INTO tasks (title, description) VALUES (?, ?)",
        [title, description]
      );
      console.log("Tarea creada con exito");
      res.status(200).json({
        msg: "Tarea creada con exito",
        id: result.insertId,
        title,
        description,
      });
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  }

  async updateTask(req, res) {
    try {
      const id = req.params.id;
      const response = await sql.query("UPDATE tasks SET ? WHERE id_task = ?", [req.body, id]);
      res.status(200).json({response});
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  }

  async deleteTask(req, res) {
    try {
      const id = req.params.id;
      const [result] = await sql.query("DELETE FROM tasks WHERE id_task = ?", [
        id,
      ]);

      if (result.affectedRows === 0) {
        return res.status(404).json({
          error: "La tarea no existe",
        });
      }

      return res.sendStatus(204);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  }
}

export default TaskController;
