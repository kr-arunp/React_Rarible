import React from 'react'
import LeftChildItems from './SearchItems/LeftChildItems.jsx'
import RightChildItems from './SearchItems/RightChildItems'
import "./SearchItems/css/SearchBar.css"

const SearchBar = () => {
  return (
     <>
     {/* Main Search Components */}
       <div className="Main-SearchComponents">
        {/* this Div for  left child items eg icon,Search Bar and Features */}
          <div className="left_items">
               <LeftChildItems/>
          </div>
          {/* this div for right child items */}
          <div className="right_items">
            <RightChildItems/>
          </div>
       </div>
     </>
  )
}

export default SearchBar
