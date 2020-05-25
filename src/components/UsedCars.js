import React from 'react';

export default function UsedCars (props) {
  // console.log(props.usedCars)
  return (
    <div>
        <div>
        <h1>USED CARS</h1>
          {props.usedCars.map(car => {
            return <h1 key={car.vin} >{car.heading}</h1>
          })}
        </div>
    </div>
  );
};

