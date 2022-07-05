import axios from "axios";
import { useEffect, useState } from "react";

const url = 'http://localhost:4003/task'
export function useFetch(){
  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)
    const [taskList, setTaskList] = useState();
    
    // buscar sobre stale while revalidation
    useEffect(()=> {
      axios.get(url).then(res => {
          setTaskList(res.data.tasks)
      })
      .catch(err => {
          setError(err);
      })
      .finally(()=> {
          setIsLoading(false);
      })
  }, [taskList]);

    return {  
        isLoading, error, taskList, setTaskList
    };
}