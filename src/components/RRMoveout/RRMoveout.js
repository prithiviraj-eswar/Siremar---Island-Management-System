import React, { PureComponent } from 'react'
import './RRMoveout.css'
export class RRMoveout extends PureComponent {
  render() {
    return (
      <div>
      <div id="place-order" className="info-content">
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Resident Moveout :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input type="text" id="rname"  className="font-roboto" placeholder="Resident Name" required/>
                          <input type="text" id="email" className="font-roboto"  name="email" placeholder="Contact Email" required/>
                           <input type="number" id="phoneNumber" className="font-roboto"  name="phoneNumber" placeholder="Contact Phone Number" required/>
                           <input type="number" id="phoneNumber" className="font-roboto"  name="phoneNumber" placeholder="Resident Id" required/>
                          <textarea id="address" className="font-roboto" name="Instruction" placeholder="Current Addresss"></textarea>
                          <textarea id="address" className="font-roboto" name="Instruction" placeholder="New Addresss"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select name="service" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Reason For Moveout</option>
                              <option value="first" >Medical</option>
                              <option value="second">Education</option>
                              <option value="third">Job opportunity</option>
                              <option value="other">Other</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea id="Instruction" className="font-roboto" name="Instruction" placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto"   required/>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Raise  Moveout</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RRMoveout
