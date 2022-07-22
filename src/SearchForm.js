import React from 'react';
import './SearchForm.css';
export default function SearchForm() {
  return (
    <div className='SearchForm'>
      <input
        type='text'
        placeholder='Input city'
        autocomplete='off'
        autofocus='on'
      />
      <input type='submit' value='Search' />
    </div>
  );
}
