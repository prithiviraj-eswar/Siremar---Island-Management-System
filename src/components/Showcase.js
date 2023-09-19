import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>SIREMAR</h1>
        <p>
        Margarita  Resource Management System!
        Your search of benefits and joy ends here
        </p>
      </div>
    </section>
  )
}

export default Showcase
