import React from 'react';

const Stats = () => {
    return (
       <div className='bg-linear-to-r from-[#5e1afc] to-[#9F62F2] text-white text-lg'  >
        <div className='lg:text-5xl text-4xl text-wrap font-bold py-10'>
            <h1>Trusted by Millions, Built for You</h1>
        </div>
         <div className="stats stats-vertical lg:stats-horizontal shadow mb-10">
  <div className="stat ">
    <div className="stat-title">Total Downloads</div>
    <div className="stat-value">29.6M</div>
    <div className="stat-desc text-white">21% More Than Last Month</div>
  </div>

  <div className="stat">
    <div className="stat-title ">Total Reviews</div>
    <div className="stat-value text-white">906K</div>
    <div className="stat-desc text-white">46% More Than Last Month</div>
  </div>

  <div className="stat">
    <div className="stat-title">Active Apps</div>
    <div className="stat-value">132+</div>
    <div className="stat-desc text-white">31 More Will Launch</div>
  </div>
</div>
       </div>
    );
};

export default Stats;