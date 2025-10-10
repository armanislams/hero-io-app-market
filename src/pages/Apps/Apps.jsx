import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { BiDownload, BiStar } from 'react-icons/bi';
import appError from '../../assets/App-Error.png';
import logo from '../../../public/logo.png';

const Apps = () => {
    const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false); 
    const searchTerm = isSearching ? '' : search;
    const searchedApps = apps.filter(app => 
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const counterText = search 
        ? `(${searchedApps.length}) Matching Apps` 
        : `(${apps.length}) All Apps`;
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.length > 0) {
            setIsSearching(true);
            setTimeout(() => {
                setIsSearching(false);
            }, 300); 
        } else {
            setIsSearching(false);
        }
    };
    
    return (
        <div className='bg-gray-100 lg:px-15 px-5 space-y-5'>
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
                                onChange={handleSearchChange}
                                required 
                                placeholder="Search" 
                                className="w-full"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 gap-5 min-h-[50vh]'> 
                {
                    isSearching ? (
                        <div className='col-span-4 flex justify-center items-center py-20'>
                            <img className='animate-spin w-20 h-20' src={logo} alt="Loading.." />
                            <p className="ml-4 text-xl text-blue-500">Searching...</p>
                        </div>
                    ) : searchedApps.length > 0 ? (
                        searchedApps.map(app => (
                            <Link to={`/appDetails/${app.id}`} key={app.id}>
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img className='h-48 w-1/3' src={app.image} alt={app.title} />
                                    </figure>
                                    <div className="card-body text-center">
                                        <h2 className="card-title items-center justify-center">{app.title}</h2>
                                        <div className="card-actions justify-between">
                                            <div className="badge badge-outline text-green-500 bg-gray-200 font-semibold flex items-center gap-1"><BiDownload /> {app.downloads}</div>
                                            <div className="badge badge-outline bg-orange-500 text-yellow-300 font-semibold flex items-center gap-1"><BiStar /> {app.ratingAvg}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className='col-span-4 text-center py-10 text-gray-500 text-lg flex flex-col items-center gap-5'>
                            <img className='w-40 h-40' src={appError} alt="No Apps Found" />
                            <p>No apps found matching "{search}".</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Apps;