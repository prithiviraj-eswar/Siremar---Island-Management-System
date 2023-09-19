import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import './register.css'
import Rresident from './RResident/Rresident';
import   RFlights  from './RFlights/RFlights'
import RBusiness from './RBusiness/RBusiness'
import RSchool from './RSchool/RSchool'
import RCounty from './RCoounty/RCounty'
import REvent from './REvent/REvent'
import RRBenifit from './RRBenifit/RRBenifit'
import RRMoveout from './RRMoveout/RRMoveout'
import RClinic from './RClinic/RClinic'
function Register () {
    return (
            <div class="register">
                <ul>
                    <li><Link  to="/register/rresident">REGISTER RESIDENT</Link></li>
                    <li><Link  to="/register/rflights">REGISTER FLIGHTS</Link></li>
                    <li><Link  to="/register/rbusiness">REGISTER BUSINESS</Link></li>
                    <li><Link  to="/register/rschool">REGISTER SCHOOLS</Link></li>
                    <li><Link  to="/register/rcounty">REGISTER COUNTIES</Link></li>
                    <li><Link  to="/register/revent">REGISTER EVENTS</Link></li>
                    <li><Link  to="/register/rrbenifit">REGISTER RESIDENT BENEFITS</Link></li>
                    <li><Link  to="/register/rrmoveout">REGISTER RESIDENT MOVEOUTS</Link></li>
                    <li><Link  to="/register/rclinic">REGISTER CLINICS</Link></li>
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
                    </Routes>
                </div>
            </div>
    )
}

export default Register