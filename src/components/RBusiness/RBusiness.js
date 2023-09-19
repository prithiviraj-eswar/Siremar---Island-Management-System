import React, { PureComponent } from 'react'
import './RBusiness.css'
export class RRBusiness extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          bname:null,
          email:null,
          mnum:null,
          address: null,
          btype: null,
          baddinfo: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
      
      }
      
       handelSubmit = (e) => {
        alert('BUSINESS DETAILS ARE SUCCESSFULLY SUBMITTED!!!')
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'bname': this.state.bname,
            'email': this.state.email,
            'mnum': this.state.mnum,
            'baddress': this.state.baddress,
            'btype':this.state.btype,
            'addinfo':this.state.addinfo
            })}
            fetch('http://localhost:8000/add_business', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register Business :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center"  onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange} type="text" name="bname"  className="font-roboto" placeholder="Business Name" required/>
                          <input onChange={this.handleInputChange} type="text" name="email" className="font-roboto"  placeholder="Contact Email" required/>
                           <input onChange={this.handleInputChange} type="text" name="mnum" className="font-roboto"  placeholder="Contact Phone Number" required/>
                          <textarea onChange={this.handleInputChange} name="baddress" className="font-roboto"  placeholder="Business Addresss"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange} name="btype"  className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Business Type</option>
                              <option value="medical" >Medical</option>
                              <option value="education">Education</option>
                              <option value="transport">Transport</option>
                              <option value="other">Other</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange} id="Instruction" className="font-roboto" name="Instruction" placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto"   />
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register Business</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RRBusiness
