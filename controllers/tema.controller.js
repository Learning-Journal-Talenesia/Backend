import temaModel from '../models/tema.models.js';

export const getAllTema = async (req, res) => {
    try {
        const tema = await temaModel.find();
        res.status(200).json(tema);
    }catch (err) {
        res.status(400).json({message: err.message});
    }
};

export const createTema = async (req, res) => {
    const {idThema, thema} = req.body;
    const existingTema = await temaModel.findOne({idThema});
    if(existingTema){
        return res.status(409).json({message: 'Tema already exists'});        
    }

    const newTema = new temaModel({
        idThema,
        thema
    });

    try{
        await newTema.save();
        res.status(201).json(newTema);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}

export const deleteTema = async (req, res)=>{
    const {idThema} = req.params;
    try{
        const tema = await temaModel.findOne({idThema});
        if(!tema){
            return res.status(404).json({message: 'Tema not Found'});            
        }

        await tema.deleteOne();
        res.json({message: 'Tema delete successfully.'});
    }catch (error) {        
        res.status(500).json({ message: 'Internal Server Error' });
    }
};