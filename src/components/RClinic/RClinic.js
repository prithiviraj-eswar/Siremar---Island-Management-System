import React, { PureComponent } from 'react'
import './RClinic.css'
export class RClinic extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cliname:null,
            email:null,
            mnum:null,
            caddress: null,
            ctype: null,
            addinfo: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
       handelSubmit = (e) => {
        alert('CLINIC DETAILS ARE SUCCESSFULLY SUBMITTED!!!')
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'cliname': this.state.cliname,
            'email': this.state.email,
            'mnum': this.state.mnum,
            'caddress': this.state.caddress,
            'ctype':this.state.ctype,
            'addinfo':this.state.addinfo
            })}
            fetch('http://localhost:8000/add_clinic', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register Clinic :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange} type="text" name="cliname"  className="font-roboto" placeholder="Clinic Name" required/>
                          <input onChange={this.handleInputChange} type="text" name="email" className="font-roboto"  placeholder="Contact Email" required/>
                           <input onChange={this.handleInputChange} type="number" name="mnum" className="font-roboto"   placeholder="Contact Phone Number" required/>
                          <textarea onChange={this.handleInputChange} name="caddress" className="font-roboto"  placeholder="Clinic Addresss"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange} name="ctype" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Clinic Type</option>
                              <option value="first" >Basic</option>
                              <option value="second">Intermediatory</option>
                              <option value="third">Advanced</option>
                              <option value="other">Research</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange} id="Additional information" className="font-roboto" name="addinfo" placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto"/>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register Clinic</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RClinic
