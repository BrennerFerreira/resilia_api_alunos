const Task = require("../models/Task");
const TaskDb = require("../db/taskDb")

class TaskController { 
    constructor (db){
        this.db = db
    }

    show = async (req,res)=>{
        const id = req.params.id
        const task = await this.db.findTask(id)
    }
       
    update = async (req,res)=>{
        const id = req.params.id;
        const task = await this.db.updateTask(id)        
    }   

}

module.exports = new TaskController(TaskDb)