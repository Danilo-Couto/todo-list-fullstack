import axios from "axios";
import { useEffect, useState } from "react";

export function useFeth<Response = unknown>(url: string){
    const [taskList, setTaskList] = useState<Response | null[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)

    useEffect(()=> {
        axios.get(url).then(res => {
            setTaskList(res.data)
        })
        .catch(err => {
            setError(err);
        })
        .finally(()=> {
            setIsLoading(false);
        })
    }, [url])
    
    return { taskList, isLoading, error };
}