import React, { PureComponent } from 'react'
import './Viewreports.css'
export class Viewreports extends PureComponent {
  render() {
    return (
      <>
      <div>
      <div id="place-order" className="info-content">
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>View reports  :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <select name="service" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Population report</option>
                              <option value="first" >List of request served </option>
                              <option value="second">Number of Moveout requests made</option>
                              <option value="other">List of New businesses added </option>
                              <option value="other">List of New Schools added </option>
                              <option value="other">List of New Hospitals added </option>
                          </select>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                          <button className="btn orderButton" type="submit">Search</button>
                      </div>
                  </div>
              </form>
          </div>
          <table>
       <tr>
         <th>S.No</th>
         <th>Report Name</th>
         <th>Date From</th>
         <th>Peform Action</th>
       </tr>
       <tr>
         <td>1</td>
         <td>Moveout  Requests</td>
          <td><input type="Date"></input> </td>
          <td><u><a>Download report</a><br></br><a>View report</a></u></td>
       </tr>
       <tr>
         <td>2</td>
         <td>New Residency Request</td>
          <td><input type="Date"></input> </td>
          <td><u><a>Download report</a><br></br><a>View report</a></u></td>
       </tr>
       <tr>
         <td>3</td>
         <td>New Business Requests</td>
          <td><input type="Date"></input> </td>
          <td><u><a>Download report</a><br></br><a>View report</a></u></td>
       </tr>
       <tr>
         <td>3</td>
         <td>New offeers Listed</td>
          <td><input type="Date"></input> </td>
          <td><u><a>Download report</a><br></br><a>View report</a></u></td>
       </tr>
     </table>
      </div>
  </div>


  </>
    )
  }
}

export default Viewreports
