import React, { PureComponent } from 'react'
import './RSchool.css'
export class RSchool extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          sname:null,
          email:null,
          mnum:null,
          saddress: null,
          led: null,
          baddinfo: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
      
      }
      
       handelSubmit = (e) => {
        alert('SCHOOL DETAILS ARE SUCCESSFULLY SUBMITTED!!!')
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'sname': this.state.sname,
            'email': this.state.email,
            'mnum': this.state.mnum,
            'saddress': this.state.saddress,
            'led':this.state.led,
            'addinfo':this.state.addinfo
            })}
            fetch('http://localhost:8000/add_school', requestOptions).then(response => {
            if (response.ok){
              return response.json()
            }
            throw response
              
          })
      }
      
      handleInputChange(event) {
        const target = event.target;
        const name = target.name
        const value = target.value
        this.setState({
          [name]: value
        });
      }


  render() {
    return (
      <div>
      <div id="place-order" className="info-content">
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register School :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange}  type="text" name="sname"  className="font-roboto" placeholder="School Name" required/>
                          <input onChange={this.handleInputChange}   type="text" name="email" className="font-roboto"  placeholder="Contact Email" required/>
                           <input onChange={this.handleInputChange}   type="number" name="mnum" className="font-roboto"   placeholder="Contact Phone Number" required/>
                          <textarea onChange={this.handleInputChange}    className="font-roboto" name="saddress" placeholder="School Addresss"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange}   name='led' className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Level Of Education</option>
                              <option value="first" >Pre school</option>
                              <option value="second">High School</option>
                              <option value="third">College</option>
                              <option value="other">University</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea  onChange={this.handleInputChange}  name="addinfo" className="font-roboto" placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto"   />
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register School</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RSchool
