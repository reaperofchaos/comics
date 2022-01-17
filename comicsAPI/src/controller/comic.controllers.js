const fs = require("fs");
const dotenv = require('dotenv')
dotenv.config();
const baseUrl = `http://localhost:${process.env.PORT}`;
const rename = require('../utils/helper')

var mongoose = require('mongoose'),
    Comic = mongoose.model('Comic');

const listAll = (req, res) => {
    Comic.find({}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

const create = async (req, res) => {
    result = await Comic.findOne(
        {
            "title": req.body.title.trim(),
            "issue": req.body.issue.trim(),
            "cover": req.body.cover.trim(),
            "year": req.body.year.trim(),
        }
    ); 
    if(!result){
        let comicData = new Comic(req.body);
        if(req.file !== undefined){
                const title = rename(req.body.title); 
                const character = rename(req.body.character);
                const year = req.body.year;
                const path = `/covers/${character}/${year}/${title}/${req.file.originalname}`
                const new_comic = Object.assign(comicData, {'coverImage': path});
                comicData = new_comic;
        }
    
        comicData.save(function(err, task){
            if(err)
                res.json({error: err.message, 
                          request: req.body, 
                          files: (req.files!== undefined)? req.files.originalname: ''});
            res.json(task);
        });
    }else{
        res.send({message: `The comic ${req.body.title} issue ${req.body.issue} (cover ${req.body.cover}) already exists at ${result._id}`,
                 found:  `${baseUrl}/comics/${result._id}`})
    }
    
};

const getById  = (req, res) => {
    Comic.findById(req.params.comicId, function(err, comic){
        if(err)
            res.send(err);
        res.json(comic);
    });
};

const updateById = (req, res) => {
    Comic.findOneAndUpdate({_id: req.params.comicId}, req.body, {new: true}, 
        function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
const deleteById = async (req, res)=>{
    const id = req.params.comicId
    const result = await Comic.findOne(
        {
            _id: id
        });
    console.log(result);
    if(result){
        if(result.coverImage){
            console.log(__basedir + result.coverImage);
            fs.unlinkSync(__basedir + result.coverImage);
            console.log('deleted');
            res.json({ message: `${result.title} issue  ${result.issue} has been removed, and ${result.coverImage} has been deleted`})
        }
    }
}

const deleteAll = (req, res)=>{
    console.log(process.env.DELETE_KEY);
    if(req.body.key === process.env.DELETE_KEY)
    {

        Comic.collection.drop();
        console.log(__basedir + '/covers');
        fs.rmSync(__basedir + '/covers', { recursive: true, force: true });

            res.json({message: "The Comics table has been deleted"})
    }else{
        res.json({message: "You are not authorized to delete all comics"})

    }
}

module.exports = {
    listAll,
    create,
    getById,
    updateById,
    deleteById,
    deleteAll
}