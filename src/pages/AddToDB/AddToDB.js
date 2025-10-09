import { toast } from "react-toastify";

const getStoredApp = ()=>{
    const storedApp = localStorage.getItem('app-list');
    if(storedApp){
        const storedAppData = JSON.parse(storedApp);
        return storedAppData;
    }
    else{
        return [];
    }
}
const addToDB = id =>{
    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)){
    toast.error('App already installed!', {id});
    
    }
    else{
        storedAppData.push(id);
        localStorage.setItem('app-list', JSON.stringify(storedAppData));
        toast.success('App installed successfully!');
    }
    
}


export {addToDB, getStoredApp};