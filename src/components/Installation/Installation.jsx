import React, { useEffect, useState } from 'react';
import { getStoredApp } from '../../pages/AddToDB/AddToDB';
import { Link, useLoaderData } from 'react-router';
import App from '../App/App';
import downloadsIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';

import { BiDownload,BiStar } from 'react-icons/bi';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState([]);
   
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
}
    return (
        <div className='px-20 bg-gray-100'>
            <div className='flex justify-between items-center text-xl py-5'>
               <div>
                 <h1>({installedApp.length})Installed Apps</h1>
               </div>
               <div>Filter</div>
            </div>
            <div>
                {
                 installedApp.map(app=>  
                 <div className='flex md:flex-row flex-col justify-between gap-10 items-center bg-white p-5 rounded-lg mt-5'>
                            <div className="flex justify-center items-center gap-10 ">
                            <div>
                                <img
                            src={app.image}
                            className="w-[100px]  rounded-lg shadow-2xl"
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
                            
                             <div className=''>
                                <button onClick={()=>handleUninstall(app.id)} className='btn bg-green-500 text-white rounded-md'>Uninstall
                                </button>
                            </div>
                        </div>)
                }
                
            </div>
        </div>
    );
};

export default Installation;