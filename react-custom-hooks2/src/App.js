import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const {isLoading, error, sendRequest} = useHttp();

  const requestConfig = {
    'url': 'https://react-http-1c4c2-default-rtdb.asia-southeast1.firebasedatabase.app/task.json',
    'method': 'GET'
  }

  const transformData = (data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }
 
  const fetchTasks = () => {
    
    sendRequest(requestConfig, transformData)
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
