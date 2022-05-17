import { useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);


  const {isLoading, error, sendRequest} = useHttp();

  const transformData = (taskText, data) => {

    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendRequest({
      'url': 'https://react-http-1c4c2-default-rtdb.asia-southeast1.firebasedatabase.app/task.json',
      'method': 'POST',
      'body': {text: taskText}
    }, transformData.bind(null, taskText)) //preconfigure transformData function
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
