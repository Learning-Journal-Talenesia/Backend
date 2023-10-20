import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  thema: {
    type: String,
    required: true,
  },
  typeInput: {
    type: String,
    required: true,
  },
  question: {
    type: [Object],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Questions = mongoose.model("Questions", questionSchema);

export default Questions;
