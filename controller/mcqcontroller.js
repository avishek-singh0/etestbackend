const MCQQuestion = require('../models/MCQQuestion'); // Assuming you have the MCQQuestion model

// Controller function to create an MCQ question
const createMCQQuestion = async (req, res) => {
    try {
        // Extract question data from request body
        const { text, options, correctAnswer } = req.body;

        // Create a new MCQ question instance
        const newMCQQuestion = new MCQQuestion.create({
            text,
            options,
            correctAnswer
        });

        // Save the new MCQ question to the database
       

        res.status(201).json(newMCQQuestion); // Send response with the created MCQ question
    } catch (error) {
        console.error('Error creating MCQ question:', error);
        res.status(500).json({ message: 'Failed to create MCQ question' });
    }
};

module.exports = { createMCQQuestion };
