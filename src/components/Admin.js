import React from 'react'
import Inspector from './Inspector';
import Register from './Register';
import { Route, Link, Routes } from 'react-router-dom';
import Viewreports from './Viewreports/Viewreports';
import Registerinspector from './Registerinspector/Registerinpsector';
import './admin.css'
import Visualize from './Visualize/Visualize';

const Admin = () => {

    return (
        <>
            <section>
                <div className='showcase banner'>
                    <div className='showcase-overlay banner-overlay'>
                        <h1>Administration</h1>
                        <p>
                            Hello Admin, Manage all your activities here !!!
                        </p>
                    </div>
                </div>
            </section>
            <div>
                <div class="admin-side-bar">
                    <ul>
                        <li><Link to="/admin/viewreports">VIEW/DOWNLOAD REPORTS</Link></li>
                        <li><Link to="/admin/registerinspector">REGISTER INSPECTOR</Link></li>
                        <li><Link to="/inspector">MANAGE SERVICES</Link></li>
                        <li><Link to="/admin/visualize">VISUALIZE DATA</Link></li>
                    </ul>

                    <div class="admin-side-bar-description">
                        <Routes>
                            <Route path='/viewreports' element={<Viewreports />}>
                            </Route>
                            <Route path='/registerinspector' element={<Registerinspector />}>
                            </Route>
                            <Route path='/visualize' element={<Visualize />}>
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
