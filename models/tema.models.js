import mongoose from "mongoose";

const temaSchema = mongoose.Schema({
    idThema:{
        type: String,
        required: true
    },
    thema:{
        type: String,
        required: true
    }    
});

const Tema = mongoose.model("Tema", temaSchema);
export default Tema;