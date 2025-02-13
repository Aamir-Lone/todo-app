
const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

router.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({ title, description });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'To-Do not found' });
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/todos/:id', async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true } 
        );
        if (!updatedTodo) return res.status(404).json({ message: 'To-Do not found' });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/todos/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) return res.status(404).json({ message: 'To-Do not found' });
        res.json({ message: 'To-Do deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
