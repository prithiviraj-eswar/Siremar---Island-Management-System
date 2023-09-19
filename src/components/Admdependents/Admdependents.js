import React, { PureComponent } from 'react'
import './Admdependents.css'
export class Admdependents extends PureComponent {
  render() {
    return (
      <>
      <div>
      <div id="place-order" className="info-content">
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Add/Manage  :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <select name="service" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">New born baby</option>
                              <option value="first" >Newly Married</option>
                              <option value="second">Divorced</option>
                          </select>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                          <button  type="submit">Add/Manage</button>
                      </div>
                  </div>
              </form>
          </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input type="text" id="fname"  className="font-roboto" placeholder="First Name" required/>
                          <input type="text" id="lane"  className="font-roboto" placeholder="Last Name" required/>
                          <input type="text" id="email" className="font-roboto"  name="email" placeholder="Email" required/>
                          <input type="number" id="phoneNumber" className="font-roboto"  name="phoneNumber" placeholder="Phone Number" required/>
                          <input type="radio" id="male" name="gender" value="male"/>Male  
                          <input type="radio" id="female" name="gender" value="female"/>Female
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                      <pre><b>  Number of Days since even happend:</b></pre> <input type="number" id="numofyears" className="font-roboto"  name="numberOfYearsOfStay" placeholder="Number Of Years of Stay" required/>
                       <b>Date Of Birth: <span></span></b><input type="Date" id="dob" name="dob" /><br></br>
                       <textarea id="Address" className="font-roboto" name="address" placeholder="address"></textarea><br></br>
                       <input type="text" id="fname"  className="font-roboto" placeholder="County" required/>
                        <input type="radio" id="bornhere" name="born" value="male"/>Born in Island  
                      <input type="radio" id="notbornhere" name="born" value="female"/>Not Born in Island<br></br>
                      <pre><b>  Supporting Documents:</b></pre><br></br><input type="file" id="file"  className="font-roboto" placeholder="Suppporting Documents" required/>
                      <br></br><input type="file" id="file"  className="font-roboto" placeholder="Suppporting Documents" required/>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Raise Request</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>


  </>
    )
  }
}

export default Admdependents
