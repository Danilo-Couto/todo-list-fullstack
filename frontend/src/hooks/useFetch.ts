import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<Response = unknown>(url: string){
    const [taskList, setTaskList] = useState<Response | null[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)

    // buscar sobre stale while revalidation
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