import { useEffect, useState } from "react";


function useCounter(forward=true) {
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        const intervalId = setInterval(()=>{
            setCounter((prevCounter)=>{
                return forward ? ++prevCounter : --prevCounter;
            })
        }, 1000);

        return () => clearInterval(intervalId);

    }, [forward]);


    return counter;

}

export default useCounter;