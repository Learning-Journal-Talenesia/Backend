import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  thema: {
    type: String,
    required: true,
  },
  question: {
    type: [String],
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Questions = mongoose.model("Questions", questionSchema);

export default Questions;
