import React, { useState } from 'react';
import PropertyListing from './PropertyListing';

const cities = ['New York', 'Mumbai', 'Paris', 'London'];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=' w-max m-auto'>
        <h1 className='my-6 mx-auto w-max font-extrabold text-4xl'>RentMyHouse</h1>

        <div className="tab-bar flex gap-2">
            {cities.map((city, index) => (
                <div key={index} className={index === activeTab ? 'btn-tab-active' : 'btn-tab'} onClick={() => handleTabClick(index)}>
                    {city}
                </div>
            ))}
        </div>

        <PropertyListing activeCity={cities[activeTab]} />
    </div>
  );
};

export default TabComponent;
