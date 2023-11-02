import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  idtema:{
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  questions: {
    type: [Object],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Questions = mongoose.model("Questions", questionSchema);

export default Questions;
