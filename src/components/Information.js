import React from 'react'
import image1 from '../assets/image-1.jpg'
import awards from '../assets/awards.jpeg'
import image3 from '../assets/image-3.jpg'

const Information = () => {
  return (
    <section className='informations'>
      <div className='grid'>
        <div>
          <img src={image1} alt='news' />
          <h4>News Highlights</h4>
          <ul>
            <li>New budget approved for  island recreation from USA</li>
            <li>We are ranked as top 1 island in  GDP Management  </li>
            <li>Tika our resident got top in USA SAT scores released </li>
            <li>979 new people categorized as resident in last month</li> 
            <li>We have recorded 3 moveout from the island to USA </li>
            </ul>
        </div>

        <div>
          <img src={awards} alt='forms' />
          <h4>Awards & Recognitions</h4>
          <ul>
            <li>Head of IT was awarded for the recent startup initiatives taken </li>
            <li>Margarita resident kiatar nominated for nobel awards 2022</li>
            <li>Bank of Margarita CEO was recognised for best initiatives taken by USA goverment </li>


            </ul>
        </div>

        <div>
          <img src={image3} alt='activities' />
          <h4>Activities & Initiatives</h4>
          <ul>
            <li>More than 10,000 new plants were planted as part of government initiative in last month </li>
            <li>NGOS taking part in buidling the plastic free island movement </li>
            <li>Startup culture initiative from goverment got more response from young leaders</li>

            </ul>
        </div>
      </div>
    </section>
  )
}

export default Information
