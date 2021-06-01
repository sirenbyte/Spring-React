import React,{useEffect, useState} from 'react';
import CreateTask from '../modals/createTask';
import axios from 'axios';
import Card from './Card';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const TaskList = () =>{
    
    const [modal, setModal] = useState(false);
    const [taskList,setTaskList] = useState([]);
    const startDate = useState('');
  
    const toggle = () => setModal(!modal);
   
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle2 = () => setDropdownOpen(!dropdownOpen);

  
  

    useEffect(()=>{
        axios.get("http://localhost:8080/api/")
        .then((res) =>setTaskList(res.data))
    }, [])
    
    const all = () =>{
        axios.get("http://localhost:8080/api/")
        .then((res) =>setTaskList(res.data))
    }

    const deleteTask = (index) =>{
        axios.delete(`http://localhost:8080/api/${index}`)
        window.location.reload()
    }

    const saveTask = (taskObj) =>{
       axios.post("http://localhost:8080/api/",{
        task_name:taskObj.task_name,
        deadline:taskObj.deadline,
        description:taskObj.description
       })
       axios.get("http://localhost:8080/api/")
        .then((res) =>setTaskList(res.data))
        window.location.reload()

    }
    
    const updateListArray = (ido,obj) =>{
        axios.put("http://localhost:8080/api/",{
            id:ido,
            task_name:obj.task_name,
            deadline:obj.deadline,
            description:obj.description
        })
        window.location.reload()

    }
    const today = () => {
        axios.get("http://localhost:8080/api/today")
        .then((res) =>setTaskList(res.data))
    
    }
    const dateChange = (e) =>{
           axios.get(`http://localhost:8080/api/cday/${e.target.value}`)
        .then((res) =>setTaskList(res.data))
    
    }


    return (
        // style={{"position":"absolute","top":"140px","left":"120px","width":"70px"}}
        <>  

       
        <div className="header text-center">
            <h3>Hello</h3> 
        <div style={{"display":"flex","flex-direction":"row","justifyContent":"center"}}>  
            <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Task</button>
            <Dropdown className="mt-2" style={{"margin-left":"20px"}} isOpen={dropdownOpen} toggle={toggle2}>
      <DropdownToggle caret>
        Function
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Base</DropdownItem>
        <DropdownItem  onClick={all}>All</DropdownItem>
        <DropdownItem onClick={today}>Today</DropdownItem>
        <DropdownItem divider />
        <DropdownItem toggle={!toggle2}><input name="trip-start" type="date" value={startDate} onChange={dateChange}/></DropdownItem>
       
      </DropdownMenu>
    </Dropdown>
    </div>
        </div>
        
        <div class="task-container"> 
 
            {taskList && taskList.map((obj,index)=><Card taskObj={obj} index=
            {index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
    );
};

export default TaskList;