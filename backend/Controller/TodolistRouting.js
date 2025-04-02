const express = require("express");
const rute = express.Router();
const Todolist = require("../Schema/TodolistSchema");

// Get all todos
rute.get("/todo", async (req, res) => {
    try {
        const user = await Todolist.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get todo by ID
rute.get("/todo/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const dtId = await Todolist.findById(id);

        if (!dtId) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
        res.status(200).json(dtId);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create new todo
rute.post("/todo", async (req, res) => {
    try {
        const todo = new Todolist(req.body);
        const saveTodo = await todo.save();
        res.status(201).json(saveTodo);
    } catch (err) {
        res.status(409).json(err);
    }
});

// Update todo by ID
rute.patch("/todo/:id", async (req, res) => {
    try {
        const updateData = await Todolist.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updateData) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
        res.status(200).json(updateData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete todo by ID
rute.delete("/todo/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const delTodo = await Todolist.findByIdAndDelete(id);

        if (!delTodo) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
        res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = rute;
