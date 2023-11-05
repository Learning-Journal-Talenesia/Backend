import mongoose from "mongoose";

const qnaSchema = mongoose.Schema({
    q:{
        type: [String],
        required: true
    },
    a:{
        type: [String],
        required: true
    }
}, {_id : false});

const usersSchema = mongoose.Schema({
  idThema:{
    type: String,
    required: true
  },
  thema: {
    type: String,
    required: true,
  },
  idUser:{
    type: String,
    required: true,
  },  
  userName:{
    type: String,
    required: true,
  },
  qna:
    [qnaSchema],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("UserQna", usersSchema);

export default Users;