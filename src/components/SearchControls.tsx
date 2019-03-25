// @ts-ignore
import React from 'react'

interface SearchControlsParams {
  searchVal: string;
  onChange: any;
  onSubmit: any;
}

const SearchControls = ({ searchVal, onChange, onSubmit  }: SearchControlsParams) => {
  return (
    <div>
      <h2>Controls</h2>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          type="text"
          value={searchVal}
        /> <button type="submit">Search</button>
      </form>
    </div>
  )
};

export default SearchControls;