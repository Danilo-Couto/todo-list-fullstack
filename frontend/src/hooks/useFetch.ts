import axios from "axios";
import { useEffect, useState } from "react";
const url = 'http://localhost:4003/task'

export function useFetch<Response = unknown>(){
  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)
  
    const [taskList, setTaskList] = useState<Response | null[]>([]);
    const [title, setTitle] = useState('');  
    const [content, setContent] = useState(''); 
    const [owner, setOwner] = useState('Danilo'); 
    const [isEditing, setIsEditing] = useState(false);
    
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
    }, [taskList]);

    const newTask = {
      name: title, content, id_user: owner 
    }
    
    const submitTask = async (event: any) => {
      event.preventDefault(); 
      try {
        await axios.post(url, newTask); // incluir via backend rota para usar owner
        } catch (error) {
        console.log(error) //tratar erro
        } finally {
          setTitle(''); 
          setContent('');
        }
    }

    const submitEdition = async (event: any) => {
      event.preventDefault(); 
      try {
        await axios.put(`${url}/${event.target.value}`, newTask)
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
   
    return {  
        isLoading, error, taskList,
        title, setTitle,
        content, setContent,
        owner, setOwner,
        submitTask, deleteAll,
        deleteOne,
        isEditing, setIsEditing, submitEdition
    };
}