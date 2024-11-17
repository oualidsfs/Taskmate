import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header'
import {ShowTask} from './components/ShowTask'
import AddTask from './components/AddTask'

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || [
    {
        id: 1,
        name: 'Task A',
        time: 'xx xxx xxx'
    },
    {
        id: 2,
        name: 'Task B',
        time: 'xx xxx xxx'
    },
    {
        id: 3,
        name: 'Task C',
        time: 'xx xxx xxx'
    }
]);
const [task, setTask] = useState({});

useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist)); }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} task= {task} setTask={setTask} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} task= {task} setTask={setTask}/>
    </div>
  );
}

export default App;
