import { useState } from 'react';
const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = async(reqConfig, sendData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(reqConfig.url, {
                method: reqConfig.method ? reqConfig.method : 'GET',
                headers: reqConfig.headers ? reqConfig.headers : {},
                body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
                contentType: reqConfig.contentType ? reqConfig.contentType : 'application/json'
            });

            if(!response.ok) {
                throw new Error('request fails');
            }
            const data = await response.json();

            sendData(data);

        } catch (error) {
            setError(error.message || 'something went wrong');
        }
        setIsLoading(false);


    }

    // const fetchTasks = async (taskText) => {
        
    //     try {
    //       const response = await fetch(
    //         'https://react-http-1c4c2-default-rtdb.asia-southeast1.firebasedatabase.app/task.json'
    //       );
    
    //       if (!response.ok) {
    //         throw new Error('Request failed!');
    //       }
    
    //       const data = await response.json();
    
    //       const loadedTasks = [];
    
    //       for (const taskKey in data) {
    //         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    //       }
    
    //       setTasks(loadedTasks);
    //     } catch (err) {
    //       setError(err.message || 'Something went wrong!');
    //     }
    //     setIsLoading(false);
    //   };

      return {
        isLoading,
        error,
        sendRequest
      }

};

export default useHttp;