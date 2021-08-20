import React from 'react'
import { NavLink } from 'react-router-dom'




export default function Home() {

  
    const routeToShop = () => {
        
    }
  
    return (
      <div className='home-wrapper'>
        <img
          className='home-image'
          src="https://i.imgur.com/4WfYY38.jpeg"
          alt=''
        />
        <NavLink to="/pizza" style={{ textDecoration: 'none', color: 'black' }}>
          <button
            onClick={routeToShop}
            className='md-button shop-button'
          >
            Order now!
          </button>
        </NavLink>
      </div>
    )
  }