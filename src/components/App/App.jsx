import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { BiDownload,BiStar } from 'react-icons/bi';

const App = () => {
    const allApps = useLoaderData().slice(0, 8);
    return (
        <div className='bg-gray-100 lg:px-15 px-5 space-y-5'>
            <div className='text-center pt-10 '>
                <h1 className='text-5xl font-bold'>Trending Apps</h1>
                <p className='text-sm text-gray-500 mt-5'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="divider divider-secondary w-1/30 mx-auto"></div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    allApps.map(app => 
                        <Link to={`/appDetails/${app.id}`} key={app.id}>
                            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    className='lg:h-48 lg:w-1/3 w-1/2 pt-5'
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
                </div>
                        </Link>
                    )
                }

            </div>
            <div>
                 <Link to={'/apps'}><button className="btn bg-linear-to-r from-[#5e1afc] to-[#9F62F2] text-white text-lg">All Apps</button></Link>
            </div>
        </div>
    );
};

export default App;