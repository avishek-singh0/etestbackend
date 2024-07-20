

const CTest = require('../models/createmodel'); // Assuming you have the CTest model

// Controller function to create a test
exports.createTest = async (req, res) => {
    try {
        // Extract test data from request body
        const { title, startTime, endTime, totalMarks, numberOfQuestions } = req.body;

        // Create a new test document using CTest.create()
        const createdTest = await CTest.create({
            title,
            startTime,
            endTime,
            questionMarks,
            numberOfQuestions
        });

        res.status(201).json(createdTest); // Send response with the created test
    } catch (error) {
        console.error('Error creating test:', error);
        res.status(500).json({ message: 'Failed to create test' });
    }
};


