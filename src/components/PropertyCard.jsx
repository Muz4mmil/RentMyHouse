import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card bg-white rounded-xl w-72 p-2">
      <img src={property.image} alt={property.name} className=' h-44 w-full object-cover bg-slate-300 rounded-xl' />

      <div className="property-info text-slate-800 px-4 py-2">
        <div className="property-location text-xs text-slate-800 font-semibold"><span class="material-symbols-rounded text-sm mr-1 text-yellow-500">location_on</span>{property.location}</div>
        <div className="property-name my-2 text-lg w-[80%] font-semibold">{property.name}</div>

        <div className="property-features flex justify-between">
          <p className='p-1 text-xs font-semibold text-slate-700'><span class="material-symbols-rounded text-lg">location_city</span> <br /> {property.rooms} Room</p>
          <p className='p-1 text-xs font-semibold text-slate-700'><span class="material-symbols-rounded text-lg">bed</span> <br /> {property.bedrooms} Bed</p>
          <p className='p-1 text-xs font-semibold text-slate-700'><span class="material-symbols-rounded text-lg">bathtub</span> <br /> {property.bathrooms} Bath</p>
          <p className='p-1 text-xs font-semibold text-slate-700'><span class="material-symbols-rounded text-lg">open_with</span> <br /> {property.area} sqft</p>
        </div>

        <div className="card-bottom flex justify-between items-center mt-4">
            <div className="property-price text-blue-700 font-semibold text-lg">{property.price} <span className='text-sm text-black'>/month</span></div>
            <Link to={`/property/${property.id}`} className='text-blue-700 rounded-full border border-blue-700 text-sm font-bold px-4 py-2'>Read More</Link>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;
