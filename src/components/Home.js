import React from 'react'




export default function Home() {

  
    const routeToShop = () => {
        
    }
  
    return (
      <div className='home-wrapper'>
        <img
          className='home-image'
          src={""}
          alt=''
        />
        <button
          onClick={routeToShop}
          className='md-button shop-button'
        >
          Order now!
        </button>
      </div>
    )
  }