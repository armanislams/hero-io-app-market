import React, { useEffect, useState } from 'react';
import { getStoredApp } from '../../pages/AddToDB/AddToDB';
import { Link, useLoaderData } from 'react-router';

import { BiDownload,BiStar } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState([]);
    const [sort, setSort] = useState('');
   
    const apps = useLoaderData();
    
    useEffect(()=> {
         const dbData = getStoredApp();
    const dataNumber = dbData.map(id=> parseInt(id)) 
        const installedApps = apps.filter(app => dataNumber.includes(app.id))
        setInstalledApp(installedApps)
    },[apps])
const handleUninstall = (id) => {
    const stored = JSON.parse(localStorage.getItem('app-list'));
    const updated = stored.filter(appId => Number(appId) !== Number(id));
    localStorage.setItem('app-list', JSON.stringify(updated));
    setInstalledApp(installedApp.filter(app => app.id !== id));
    toast.success('App uninstalled successfully')
}
const handleSort = (type) =>{
    setSort(type);
    if(type === 'HIGH-LOW'){
        const sortedByLow = [...installedApp].sort((a,b)=>b.downloads-a.downloads);
    setInstalledApp(sortedByLow)
    }
    if(type === 'LOW-HIGH'){
        
    const sortedByHigh = [...installedApp].sort((a,b)=>a.downloads - b.downloads);
    setInstalledApp(sortedByHigh)
    }

}
    return (
        <div className='px-5 lg:px-20 bg-gray-100'>
            <div className='flex justify-between items-center text-xl py-5'>
               <div>
                 <h1>({installedApp.length})Installed Apps</h1>
               </div>
               <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sort?sort:''} </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort('HIGH-LOW')}>HIGH-LOW</a></li>
                        <li><a onClick={()=>handleSort('LOW-HIGH')}>LOW-HIGH</a></li>
                    </ul>
                    </div>
                    </div>
            </div>
            <div>
                {
                 installedApp.map(app=>  
                    
                 <div key={app.id} className='flex md:flex-row flex-col justify-between gap-10 items-center bg-white p-5 rounded-lg mt-5'>
                    <Link to={`/appDetails/${app.id}`} >
                            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
                            <div>
                                <img
                            src={app.image}
                            className="lg:w-[100px]  rounded-lg shadow-2xl"
                            />
                            </div>
                            <div className='flex flex-col items-center lg:items-start gap-5'>
                                <div className='w-full lg:text-left'>
                            <h1 className="text-3xl font-bold">{app.title}</h1>
                            </div>
                            <div className='flex justify-center items-center gap-5 text-left'>
                               <div className="badge badge-outline text-green-500 bg-gray-200 font-semibold"><BiDownload></BiDownload> {app.downloads}</div>
                                <div className="badge badge-outline bg-orange-500 text-yellow-300 font-semibold"><BiStar></BiStar> {app.ratingAvg}</div>
                                <div>{app.size}MB</div>
                                
                            </div>
                            
                             </div>
                            </div>
                            </Link>
                            
                             <div className=''>
                                <button onClick={()=>handleUninstall(app.id)} className='btn bg-green-500 text-white rounded-md'>Uninstall
                                </button>
                            </div>
                        </div>
                        )
                }
                
            </div>
        </div>
    );
};

export default Installation;