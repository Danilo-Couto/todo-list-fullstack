import axios from "axios";
import { useEffect, useState } from "react";

const url = 'http://localhost:4003/task'

export function useFetch<Response = unknown>(){
  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)
    const [isEditing, setIsEditing] = useState(false);
    
    const [taskList, setTaskList] = useState<Response | null[]>([]);
    const [title, setTitle] = useState('');  
    const [content, setContent] = useState(''); 
    const [owner, setOwner] = useState(null); 
       
    const newTask = {
      name: title, content, id_user: Number(owner) 
    }
    
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

            
    const createTask = async (event: any) => {
      event.preventDefault(); 
      try {
        await axios.post(url, newTask); // incluir via backend rota para usar owner
      } catch (error) {
      console.log(error) //tratar erro
      } finally {
        setTitle(''); 
        setContent('');
        setOwner(null);
      }
    }

    const editTask = async (event: any) => {
      // event.preventDefault(); 
      console.log(event.target.value)
      // try {
      //   await axios.put(`${url}/${event.target.value}`, newTask)
      //   } catch (error) {
      //   console.log(error) //tratar erro
      //   } finally {
      //     setTitle(''); 
      //     setContent('');
      //   }
    }

    const deleteAllTasks = async () => {
      try {
        await axios.delete(url);
      } catch (error) {
        console.log(error) //tratar erro
      }
    }
    const deleteTask = async ({target}: any) => {
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
        createTask, deleteAllTasks,
        deleteTask,
        isEditing, setIsEditing, editTask
    };
}