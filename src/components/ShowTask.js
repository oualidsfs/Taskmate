import React from 'react'
import { useState } from 'react'

export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {
    


   


    const handleAdd = (id) => {
    const taskToEdit = tasklist.find((tasks) => tasks.id === id);
    setTask(taskToEdit);    

    }


    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter((tasks) => tasks.id !== id);
        setTasklist(updatedTaskList);
    }






  return (
   <section className="showTask">
    <div className="head">
        <div>
            <span className='title'>Todo</span>
            <span className='count'>{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className='clearAll'>Clear</button>
    </div>
    <ul>
        {
            tasklist.map((taskss) => { 

                return (
                    <li key={taskss.id}>
            <p>
                <span className='name'>{taskss.name}</span>
                <span className='time'>{taskss.time}</span>
            </p>
            <i className='bi bi-pencil-square' onClick={() => handleAdd(taskss.id)}></i>
            <i className='bi bi-trash' onClick={() => handleDelete(taskss.id)}></i>
                     </li>

                )
        })
    }
        
    </ul>
   </section>
  )


}
