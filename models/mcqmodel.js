const mongoose = require('mongoose');

// Define schema for the MCQQuestion model
const mcqQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String], // Array of strings representing options
    required: true
  },
  correctAnswer: {
    type: Number, // Index of the correct option in the options array
    required: true
  }
});

// Create MCQQuestion model
const MCQQuestion = mongoose.model('MCQQuestion', mcqQuestionSchema);

module.exports = MCQQuestion;
