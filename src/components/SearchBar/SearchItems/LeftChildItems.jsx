import React from 'react'
import './css/LeftChildItems.css'
const LeftChildItems = () => {
  return (
  <>
	<div className="leftChildItems">
	        <h1>
	           <span className="Search-logo">R</span>Rarible
	        </h1>
	   
	    <div className="left-search-bar">
	            <div className="left-search-div">
	            <input type="text" name="Search-bar" id="Search-bar" placeholder="Search Web3"/>
	            <p>esc</p>
	            </div>
	    </div>
	    
	      <div className="features">
	         <p className="Explore">Explore</p>
	         <p className="Create">Create</p>
	         <p className="Sell">Sell</p>
	      </div>
	
	</div>
  
  
  </>
  )
}

export default LeftChildItems
