import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import UsedCars from './components/UsedCars'

const App = () => {

  const [ usedCars, setUsedCars] = useState([])
  useEffect(() => {
    // KufE7jT5GG3ybq89qHyNbrVPk4JGK2Xz
    axios
      .get(`https://marketcheck-prod.apigee.net/v2/search/car/active?api_key=KufE7jT5GG3ybq89qHyNbrVPk4JGK2Xz&zip=97267&car_type=used&year=2005&rows=100&start=0&facet_sort=count&country=US`)
      .then(res => setUsedCars(res.data.listings))
      // .then(res => console.log(res))
      .catch(error => {
        console.log("error", error);
      });
  }, []);
 
  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total />
      </div>
      <div className="box">
        <UsedCars usedCars={usedCars} />
      </div>
    </div>
  );
};

export default App;
