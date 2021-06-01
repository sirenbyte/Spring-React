import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTaskPopup = ({modal,toggle,save}) =>{
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
    const handleSave = () => {
        let taskObj = {}
        taskObj["task_name"]=Task_name
        taskObj["description"]=Description
        taskObj["deadline"]=Deadline
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;