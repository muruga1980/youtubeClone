import React from 'react'
import './sidebar.css'
import { categoreis } from '../utils/Categories'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  
  return (
    <>    
    <div className="d-flex  flex-column p-3  navbar-expand-lg " >  
    <h5>Explore</h5>    
    <div class="collapse navbar-collapse" id="navbarNav">
     
      <ul className="nav nav-pills flex-column mb-auto  " data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
    {categoreis.map((category, index)=>{
      return(
        <li onClick={()=>setSelectedCategory( category.name)}>
            <a href="#" className="nav-link link-body-emphasis" aria-current="page">         
          <span className='me-2'> {category.icon}</span> 
          <span > {category.name} </span>
            </a>
          </li>
      )
    })}
</ul> 

</div>

 
  </div>






 
    </>
  )
}

export default Sidebar