
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router'; 
import { BiDownload, BiStar } from 'react-icons/bi';
import appError from '../../assets/App-Error.png';
import logo from '../../../public/logo.png';


const Apps = () => {
    const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const searchedApps = apps.filter(app => 
        app.title.toLowerCase().includes(search.toLowerCase())
    );
    const counterText = search 
        ? `(${searchedApps.length}) Matching Apps` 
        : `(${apps.length}) All Apps`;
        const navigation  = useNavigation();
    if(navigation.state === 'loading'){
        return (
            <div className='flex  justify-center items-center mt-10'>
            <img className='animate-spin w-1/15' src={logo} alt="Loading.." />
             <h1 className='text-7xl font-bold'>Loading...</h1>
            </div>
        )
    }

    return (
        <div className='bg-gray-100 px-15 space-y-5'>
            <div className='flex justify-between items-center font-semibold text-xl pt-10'>
                
                <div>
                    <h1>{counterText}</h1>
                </div>
                <div>
                    <div className="input-group"> 
                        <label className="input input-bordered flex items-center gap-2">
                            <svg className="h-[1em] opacity-50 w-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input 
                                type="search" 
                                value={search} 
                                onChange={e => setSearch(e.target.value)} 
                                required 
                                placeholder="Search" 
                                className="w-full"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 gap-5'>
                {
                    searchedApps.length > 0 ? (
                        searchedApps.map(app => (
                            <Link to={`/appDetails/${app.id}`} key={app.id}>
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img
                                            className='h-48 w-1/3'
                                            src={app.image}
                                            alt={app.title}
                                        />
                                    </figure>
                                    <div className="card-body text-center">
                                        <h2 className="card-title items-center justify-center">
                                            {app.title}
                                        </h2>
                                        <div className="card-actions justify-between">
                                            <div className="badge badge-outline text-green-500 bg-gray-200 font-semibold flex items-center gap-1">
                                                <BiDownload /> {app.downloads}
                                            </div>
                                            <div className="badge badge-outline bg-orange-500 text-yellow-300 font-semibold flex items-center gap-1">
                                                <BiStar /> {app.ratingAvg}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className='col-span-4 text-center py-10 text-gray-500 text-lg flex flex-col items-center gap-5'>
                            <img src={appError} alt="" />
                            No apps found matching "{search}".
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Apps;