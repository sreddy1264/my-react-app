import React, { useState } from 'react';
import { Countries } from './dropdown.const';
import './dropdown.css';

const DropDownList = () => {
     const [selectedCountry, setSelectedCountry] = useState("");
     const sortedContriesListAscending = Countries.sort((a,b) => a.name.localeCompare(b.name));

     const test = Countries.sort((a,b) => a.name.localeCompare(b.name));

const displayCountriesList = <select onChange={(e) => setSelectedCountry(e.target.value)}>
  {sortedContriesListAscending.map((country) => <option key={country.value}>{country.name}</option>)}
  </select>;


  const findStateList = selectedCountry && Countries.find((country) => country.name === selectedCountry);

 const displayStateList = findStateList && <select>{findStateList.states.map((item, index) => 
 <option key={index}>{item}</option>)}
 </select>

    return(
      <div className='container'>
      <p>Please select</p>
      <div>{displayCountriesList}</div>
      <div>{displayStateList}</div>
      </div>
    );
 
}

export { DropDownList };

