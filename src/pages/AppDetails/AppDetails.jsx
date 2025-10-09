import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadsIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { addToDB, getStoredApp } from '../AddToDB/AddToDB';

const AppDetails = () => {
const {id} = useParams();
   const app = useLoaderData();
   const singleApp = app.find(app => app.id == id);
   const {title,ratings, image, description,companyName,ratingAvg, downloads,reviews,size} = singleApp;
   const ratingsData = ratings;
   if(!singleApp){
    return(
         <div className='text-center py-20'>
                <h1 className='text-4xl text-red-600'>App Not Found</h1>
            </div>
    );
   }
   
    const [isInstalled, setIsInstalled] = useState(false);
   const handleInstall = id =>{
    addToDB(id);
    setIsInstalled(true);
    
   }

    useEffect(() => {
        const installedApps = getStoredApp();
        if (installedApps.includes(id)) {
            setIsInstalled(true);
        }
        else{
            setIsInstalled(false);
        }
    }, [id]);

    return (
        <div className=" pt-10 px-20 bg-gray-100">
        <div className='flex md:flex-row flex-col gap-10 items-center'>
            <div className="">
            <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
            />
            </div>
            <div className='flex flex-col items-center lg:items-start gap-5'>
                <div className='w-full lg:text-left'>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className='text-gray-400'>Developed by <span className='text-blue-600'>{companyName}</span></p>
            <div className="divider"></div>
            </div>
            <div className='flex gap-5 text-left'>
                <div>
                    <img src={downloadsIcon} alt="" />
                    <p>Downloads</p>
                    <h2 className='font-bold text-2xl'>{downloads}</h2>
                </div>
                <div>
                    <img src={ratingIcon} alt="" />
                    <p>Average Ratings</p>
                    <h2 className='font-bold text-2xl'>{ratingAvg}</h2>
                </div>
                <div>
                    <img src={reviewIcon} alt="" />
                    <p>Total Reviews</p>
                    <h2 className='font-bold text-2xl'>{reviews}</h2>
                </div>
                
            </div>
            <div>
                <button
                    onClick={() => {
                        handleInstall(id);
                        setIsInstalled(true);
                    }}
                    className='btn text-white item bg-green-600'
                    disabled={isInstalled}
                >
                    {isInstalled ? 'Installed' : `Install Now (${size}MB)`}
                </button>
            </div>
             </div>
        </div>
             <div>
                <h1 className='text-xl text-left'>Ratings</h1>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={ratingsData} 
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <YAxis 
                                dataKey="name" 
                                type="category"
                                width={80}
                            /> 
                            <XAxis 
                                type="number"
                            /> 
                            
                            <Tooltip />
                            <Legend />
                            <Bar 
                                dataKey="count" 
                                name="Number of Reviews" 
                                fill="#fd7e14"
                                activeBar={<Rectangle fill="#ffc107" stroke="#fd7e14" />} 
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>
             <div className="divider divider-secondary w-1/30 mx-auto"></div>
             <div className="divider"></div>
             <div className="divider divider-secondary w-1/30 mx-auto"></div>
             <div>
                <h1 className='text-2xl font-bold text-left mt-10 mb-5'>About this app</h1>
                <p className='text-left text-gray-600'>{description}</p>
             </div>
            
        
        </div>
    );
};

export default AppDetails;