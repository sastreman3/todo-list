import { Router } from "express";
import Task from "../models/Task";

export const tasksApi = (app) => {
  const router = Router();
  app.use("/api/tasks", router);

  router.get("/", async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(201).json({
        data: tasks,
        message: "tasks listed",
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/:taskId", async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await Task.findById(taskId);

      res.status(200).json({
        data: task,
        message: "task retrivered",
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/", async (req, res) => {
    const task = Task(req.body);
    try {
      await task.save();
      res.status(201).json({
        data: task,
        message: "task created",
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.put("/:taskId", async (req, res) => {
    const { taskId } = req.params;
    const task = req.body;
    try {
      await Task.findByIdAndUpdate(taskId, task);

      res.status(200).json({
        data: taskId,
        message: "task updated",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:taskId", async (req, res) => {
    const { taskId } = req.params;

    try {
      await Task.findByIdAndDelete(taskId);

      res.status(200).json({
        data: taskId,
        message: "task deleted",
      });
    } catch (err) {
      next(err);
    }
  });
};
