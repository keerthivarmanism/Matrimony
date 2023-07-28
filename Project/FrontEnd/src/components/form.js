import React, { useState } from 'react';
import '../assets/form.css';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className='form1'>
      <div className='form2'>
    {/* <form onSubmit={handleSubmit}>
      <label htmlFor="dropdown" ></label>
      <select id="look" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Gender </option>
        <option value="option1">Male</option>
        <option value="option2">Female</option>
      </select>

      <label htmlFor="dropdown">Matrimony Profile For</label>
      <select id="age" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Profile</option>
        <option value="option1">Myself</option>
        <option value="option2">Daughter</option>
        <option value="option2">Son</option>
        <option value="option2">Sister</option>
        <option value="option2">Brother</option>
        <option value="option2">Relative</option>
        <option value="option2">Friend</option>
      </select>

      <input type="text" placeholder="Location"/>

      <button type="submit">Submit</button>
    </form> */}
    </div>


</div>
  );
};

export default DropdownForm;
