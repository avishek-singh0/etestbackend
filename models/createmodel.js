const { mongoose, model } = require("mongoose");


const createSchema = new mongoose.Schema({

      title: {
        type: String,
        required: true
       },
    //   teacher: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Teacher',
    //     required: true
    //   },
      startTime: {
        type: Date,
        required: true
      },
      endTime: {
        type: Date,
        required: true
      },
      questionMarks: {
        type: Number,
        required: true
      },
      numberOfQuestions: {
        type: Number,
        required: true
      },
      questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MCQQuestion'
      }]


})

const CTest = mongoose.model('CTest' ,createSchema);

model.exports = CTest;