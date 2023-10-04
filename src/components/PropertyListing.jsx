import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import propertyList from '../property-data.json';

const propertiesData = propertyList;

const PropertyListing = ({ activeCity }) => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const filteredProperties = propertiesData.filter(property => property.city === activeCity);
        setProperties(filteredProperties.slice(0, 6));

    }, [activeCity]);
  
  
    const loadMoreProperties = () => {
        const currentLength = properties.length;
        const newProperties = propertiesData.filter(property => property.city === activeCity).slice(currentLength, currentLength + 3);

        setProperties([...properties, ...newProperties]);
      };

    return (
      <div className='text-center'>
        <div className="text-start property-list grid grid-cols-3 w-max gap-4 m-auto mt-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        <button className='my-8 mx-auto py-2 px-4 rounded-full bg-blue-700 text-white font-semibold' onClick={loadMoreProperties}>Show More</button>
      </div>
    );
  };
  
  export default PropertyListing;