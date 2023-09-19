import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import Register from './Register';
import './Inspector.css'
import Rresident from './RResident/Rresident';
import   RFlights  from './RFlights/RFlights'
import RBusiness from './RBusiness/RBusiness'
import RSchool from './RSchool/RSchool'
import RCounty from './RCoounty/RCounty'
import REvent from './REvent/REvent'
import RRBenifit from './RRBenifit/RRBenifit'
import RRMoveout from './RRMoveout/RRMoveout'
import RClinic from './RClinic/RClinic'
import Chat from './Chat/Chat'
import Pendingrequests from './Pendingrequests/Pendingrequests';
const Inspector = () => {
  return (
    <>
      <section>
        <div className='showcase banner'>
          <div className='showcase-overlay banner-overlay'>
            <h1>Hello, Manage your Inspector duties here</h1>
            <p>
               fulfill the resident requests and needs !!!!!
            </p>
          </div>
        </div>
      </section>
      <div class="register">
                <ul>
                    <li><Link  to="/inspector/rresident">REGISTER RESIDENT</Link></li>
                    <li><Link  to="/inspector/rflights">REGISTER FLIGHTS</Link></li>
                    <li><Link  to="/inspector/rbusiness">REGISTER BUSINESS</Link></li>
                    <li><Link  to="/inspector/rschool">REGISTER SCHOOLS</Link></li>
                    <li><Link  to="/inspector/rcounty">REGISTER COUNTIES</Link></li>
                    <li><Link  to="/inspector/revent">REGISTER EVENTS</Link></li>
                    <li><Link  to="/inspector/rrbenifit">REGISTER RESIDENT BENEFITS</Link></li>
                    <li><Link  to="/inspector/rrmoveout">REGISTER RESIDENT MOVEOUTS</Link></li>
                    <li><Link  to="/inspector/rclinic">REGISTER CLINICS</Link></li>
                    <li><Link  to="/inspector/chat">CHAT WITH USER</Link></li>
                    <li><Link  to="/inspector/pendingrequests">PENDING REQUESTS</Link></li>
                </ul>

                <div class="register-description">
                    <Routes>
                        <Route path='/rresident' element={<Rresident/>}>
                        </Route>
                        <Route path='/rflights' element={<RFlights/>}>
                        </Route>
                        <Route path='/rbusiness' element={<RBusiness/>}>
                        </Route>
                        <Route path='/rschool' element={<RSchool/>}>
                        </Route>
                        <Route path='/rcounty' element={<RCounty/>}>
                        </Route>
                        <Route path='/revent' element={<REvent/>}>
                        </Route>
                        <Route path='/rrbenifit' element={<RRBenifit/>}>
                        </Route>
                        <Route path='/rrmoveout' element={<RRMoveout/>}>
                        </Route>
                        <Route path='/rclinic' element={<RClinic/>}>
                        </Route>
                        <Route path='/chat' element={<Chat/>}>
                        </Route>
                        <Route path='/pendingrequests' element={<Pendingrequests/>}>
                        </Route>
                    </Routes>
                </div>
            </div>
    </>
  );
}

export default Inspector