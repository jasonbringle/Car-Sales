import React from 'react';

export default function UsedCars (props) {
  return (
    <div>
        <div>
        <h1>USED CARS</h1>
          {props.usedCars.map(car => {
            // console.log(car.media.photo_links)
            return  <div key={car.vin} className='box'>
            <h1>{car.heading}</h1>
            <h2>${car.price}</h2>
            <h2>{car.miles} miles</h2>
            <h2>Color: {car.exterior_color}</h2>
            <img src={car.media ? `${car.media.photo_links[0]}`: ''} alt='car-pic'/>
            </div>
          })}
        </div>
    </div>
  );
};

