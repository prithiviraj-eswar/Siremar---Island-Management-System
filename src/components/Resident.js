import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import Register from './Register';
import './resident.css'
import Chat from './Chat/Chat'
import Disavailable from './Disavailable/Disavailable'
import Businessesaround from './Businessesaround/Businessesaround'
import Schoolsandregistration from './Schoolsandregistration/Schoolsandregistration'
import Eventdetails from './Eventdetails/Eventdetails'
import Moveoutrequest from './Moveoutrequest/Moveoutrequest'
import Emergencyservices from './Emergencyservices/Emergencyservices'
import Rresident from './RResident/Rresident';
import RRMoveout from './RRMoveout/RRMoveout';
import Registerinspector from './Registerinspector/Registerinpsector'
import Admdependents from './Admdependents/Admdependents';
const Resident = () => {
  return (
    <>
      <section>
        <div className='showcase banner'>
          <div className='showcase-overlay banner-overlay'>
            <h1>Hello, Resident</h1>
            <p>
               Avail our servicces !!!!!
            </p>
          </div>
        </div>
      </section>
      <div class="resident">
                <ul>
                    <li><Link  to="/resident/rrforres">RAISE REQUEST FOR RESIDENCY</Link></li>
                    <li><Link  to="/resident/registerinspector">REGISTER AS AN INSPECTOR</Link></li>
                    <li><Link  to="/resident/disavailable">RESIDENT  BENEFITS</Link></li>
                    <li><Link  to="/resident/businessesaround">BUSINESSES AROUND</Link></li>
                    <li><Link  to="/resident/schooolsandregistration">SCHOOLS AND REGISTRATION</Link></li>
                    <li><Link  to="/resident/eventdetails">EVENTS DETAILS</Link></li>
                    <li><Link  to="/resident/moveoutrequest">MOVEOUT REQUEST</Link></li>
                    <li><Link  to="/resident/emergencyservices">EMERGENCY SERVICES</Link></li>
                    <li><Link  to="/resident/admdependents">ADD OR MANAGE DEPENDENTS</Link></li>
                    <li><Link  to="/resident/chat">CHAT WITH INSPECTOR</Link></li>
                </ul>

                <div class="resident-description">
                    <Routes>
                        <Route path='/rrforres' element={<Rresident/>}>
                        </Route>
                        <Route path='/registerinspector' element={<Registerinspector/>}>
                        </Route>
                        <Route path='/disavailable' element={<Disavailable/>}>
                        </Route>
                        <Route path='/businessesaround' element={<Businessesaround/>}>
                        </Route>
                        <Route path='/schooolsandregistration' element={<Schoolsandregistration/>}>
                        </Route>
                        <Route path='/eventdetails' element={<Eventdetails/>}>
                        </Route>
                        <Route path='/moveoutrequest' element={<RRMoveout/>}>
                        </Route>
                        <Route path='/emergencyservices' element={<Emergencyservices/>}>
                        </Route>
                        <Route path='/admdependents' element={<Admdependents/>}>
                        </Route>
                        <Route path='/chat' element={<Chat/>}>
                        </Route>
                    </Routes>
                </div>
            </div>
    </>
  );
}

export default Resident