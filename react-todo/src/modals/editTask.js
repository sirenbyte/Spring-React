import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTaskPopup = ({modal,toggle,updateTask,taskObj}) =>{
    const [Task_name,setTaskName]=useState('');
    const [Description,setDescription]=useState('');
    const [Deadline,setTime]=useState('');

    const handleChange = (e) =>{
        const {name,value} = e.target
        if(name==="task_name"){
            setTaskName(value)
        }
        if(name==="description"){
            setDescription(value)    
        }
        if(name==="deadline"){
            setTime(value)
        }
    }
    
    useEffect( ()=>{
        setTaskName(taskObj.task_name)
        setTime(taskObj.deadline)
        setDescription(taskObj.description)
    },[taskObj.task_name,taskObj.deadline,taskObj.description])




    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["task_name"]=Task_name
        tempObj["Description"]=Description
        tempObj["deadline"]=Deadline
        updateTask(tempObj)
       
    }

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
           <form>
               <div className="form-group">
                   <label>Task Name</label>
                   <input type="text" className="form-control" value={Task_name} onChange={handleChange} name="task_name"/>
               </div>
               
               <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" value={Description} onChange={handleChange} name="description"></textarea>
               </div>

               <div className="form-group">
                    <label>Time</label>
                    <input type="date" className="form-control" value={Deadline} onChange={handleChange} name="deadline"/>
               </div>

           </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;