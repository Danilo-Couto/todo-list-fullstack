import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<Response = unknown>(url: string){
    const [taskList, setTaskList] = useState<Response | null[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)

    const [title, setTitle] = useState('');  
    const [content, setContent] = useState(''); 
    const [owner, setOwner] = useState('Danilo'); 
    
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
    }, [taskList, url])
    
    const submitTask = async (event: any) => {
      event.preventDefault(); 
      try {
        await axios.post(url, {
          name: title, content, id_user: owner // incluir via backend rota para usar owner
        });
        } catch (error) {
        console.log(error) //tratar erro
        } finally {
          setTitle(''); 
          setContent('');
        }
    }

    const deleteAll = async () => {
      try {
        await axios.delete(url);
      } catch (error) {
        console.log(error) //tratar erro
      }
    }
    const deleteOne = async ({target}: any) => {
      try {
        await axios.delete(`${url}/${target.value}`)
      } catch (error) {
        console.log(error)
      }
    }

    const editOne = async ({target}: any) => {
      try {
        await axios.put(`${url}/${target.value}`, {
          name: title, content, id_user: owner 
        });
        } catch (error) {
        console.log(error) 
      }
    }

    return {  
        isLoading, error, taskList,
        title, setTitle,
        content, setContent,
        owner, setOwner,
        submitTask, deleteAll,
        deleteOne, editOne 
    };
}