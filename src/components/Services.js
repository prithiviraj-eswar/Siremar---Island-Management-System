import React from 'react'
import flight from '../assets/flight.jpeg'
import school from '../assets/school.jpeg'
import ticket from '../assets/ticket.jpeg'
import business from '../assets/business.jpeg'
import event from '../assets/event.jpeg'
import appointment from '../assets/appointment.jpeg'


const Services = () => {
    return (
        <section>
            <div className='showcase banner'>
                <div className='showcase-overlay banner-overlay'>
                    <h1>Services</h1>
                    <p>
                        Checkout our wide range of services!
                    </p>
                </div>
            </div>
            <div className='informations services-grid'>
                <div className='grid'>
                    <div>
                        <img src={flight} alt='news' />
                        <h4>Getting discounts on Flights</h4>
                        <div>We offer wide range of discounts for our residents.Avail special discount during festivals. Business class discounts for registered businessess</div>
                    </div>

                    <div>
                        <img src={ticket} alt='forms' />
                        <h4>Getting Tickets to the Ferry and its discounts</h4>
                        <div>You can avail the tickets to the ferry by following a standard process. We provide exclusive discounts. Book a ferry on a long weekend and enjoy!</div>
                    </div>

                    <div>
                        <img src={school} alt='activities' />
                        <h4>Getting into schools</h4>
                        <div>Getting into schools is now very simple through our website. Special preference for your children</div>
                    </div>
                </div>
                <div className='grid'>
                    <div>
                        <img src={business} alt='news' />
                        <h4>Getting discounts in businesses</h4>
                        <div>Avail special discounts in our businesses.</div>
                    </div>

                    <div>
                        <img src={appointment} alt='forms' />
                        <h4>Booking Appointment for Office</h4>
                        <div>No more long waiting list.</div>
                    </div>

                    <div>
                        <img src={event} alt='activities' />
                        <h4>Getting discounts on all Events</h4>
                        <div>We offer discounts on concerts, ballads and many other shows that take place in our island</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
