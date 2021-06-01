import React,{ useEffect, useState} from 'react';
import EditTask from '../modals/editTask';
import OpenTask from '../modals/openTask';
import axios from 'axios';

const Card = ({taskObj,index,deleteTask,updateListArray}) => {
    const[modal,setModal]=useState(false);
    const[modal2,setModal2]=useState(false);
    const [checked, setChecked] = React.useState(true);
    const [word,setWord] = useState('');

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    
    const updateTask = (obj) =>{
        updateListArray(taskObj.id,obj)
    }

    const handleDelete = () =>{
        deleteTask(taskObj.id)
    }
   
    const handlerChange = () =>{
        axios.put(`http://localhost:8080/api/${taskObj.id}`)
        setChecked(!checked)
        window.location.reload()
    }
    useEffect(()=>{
        if(taskObj.process===true){setWord("line-through")}
        console.log(taskObj.process)
    },[taskObj.process,word])
    
    return (
        <div>
    <div class="card-wrapper mr-5">
    <div class="card-top" style={{"background-color":colors[index%5].primaryColor}}></div>
    <div class="task-holder">
        <div class="card-headera" onClick={()=>setModal2(true)} style={{"cursor":"pointer","text-decoration":word,"background-color":colors[index%5].secondaryColor,"border-radius":"10px"}}>
            {taskObj.task_name}</div>
        <p></p>

        <div style={{"position":"absolute","right":"20px","bottom":"20px"}}>
            <input type="checkbox" defaultChecked={taskObj.process} onChange={handlerChange} style={{"color":colors[index%5].primaryColor,"margin-right":"10px","cursor":"pointer","height":"12px"}}/>
            <i class = "far fa-edit mr-3" style={{"color":colors[index%5].primaryColor,"margin-right":"10px","cursor":"pointer"}} onClick={()=>setModal(true)}></i>
            <i class = "fas fa-trash-alt" style={{"color":colors[index%5].primaryColor,"cursor":"pointer"}} onClick={handleDelete}></i>
        </div>
    </div>
    <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
    <OpenTask modal={modal2} toggle={toggle2} taskObj={taskObj}/>
</div>






        </div>
    )
}

export default Card;