const Task = require("../models/Task");

class TaskDb {
    findTask = async (id)=>{
         try {
            const findTask = await Task.findAll({where: {id: req.params.id}});
            return findTask;
        } catch (err) {
            return null;
        }
    }
    updateTask = async (id) =>{
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { name, status } = req.body;
        const oldTask = await TaskDb.findAll({where: {id: req.params.id}})
        try {
            if (oldTask){
                const newTask = await Task.update({status}, {where: {id: {[Op.eq]: id }}});
                return newTask;
            }
            else{
                return oldTask;
            }
            
        } catch (err) {
            return null;            
        }
    }
}

module.exports = new TaskDb()