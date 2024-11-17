import React from 'react'

const AddTask = ({tasklist,setTasklist,task,setTask}) => {

   const handleSubmit = (e) => {
    e.preventDefault();


    if (task.id) {
        const date = new Date();
        const updateTask = tasklist.map((taskss) => (
            taskss.id === task.id ? {...task, name: e.target.task.value, time: date.toDateString() + ' ' + date.toLocaleTimeString()} : taskss
        ));
           setTasklist(updateTask);
           e.target.task.value = '';
           setTask({});

        
    } else {
        const date = new Date();
        const formattedDate = date.toDateString() + ' ' + date.toLocaleTimeString();
        const newTask = {
            id: date.getTime(), 
            name: e.target.task.value, 
            time: formattedDate};
        
            setTasklist([...tasklist, newTask])
            e.target.task.value = '';
            console.log('add task')
        }
    }
   
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' autoComplete='off' placeholder='add task' maxLength={25} />
            <button type='submit'> {task.id ? 'Update' : 'Add'}</button>
        </form>
    </section>
  )
}



export default AddTask
