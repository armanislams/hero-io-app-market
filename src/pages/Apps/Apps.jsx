import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../../components/App/App';

import { BiDownload,BiStar } from 'react-icons/bi';

const Apps = () => {
    const apps = useLoaderData();
    // const {title, downloads, image, ratingAvg} = apps;
    return (
        <div className='bg-gray-100 px-15 space-y-5'>
            <div className='flex justify-between items-center font-semibold text-xl pt-10'>
                <div>
                    <h1>({apps.length}) All app</h1>
                </div>
                <div>
                    <p>search bar</p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                apps.map(app => <div key={app.id} className="card bg-base-100 shadow-sm">
                                <figure>
                                    <img
                                    className='h-48 w-1/3'
                                    src={app.image}
                                    alt={app.title} />
                                </figure>
                                <div className="card-body text-center">
                                    <h2 className="card-title items-center justify-center">
                                    {app.title}
                                    </h2>
                                    <div className="card-actions justify-between">
                                    <div className="badge badge-outline text-green-500 bg-gray-200 font-semibold"><BiDownload></BiDownload> {app.downloads}</div>
                                    <div className="badge badge-outline bg-orange-500 text-yellow-300 font-semibold"><BiStar></BiStar> {app.ratingAvg}</div>
                                    </div>
                                </div>
                                </div>)
            }
            </div>
        </div>
    );
};

export default Apps;