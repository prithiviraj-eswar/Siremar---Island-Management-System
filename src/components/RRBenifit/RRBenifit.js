import React, { PureComponent } from 'react'
import './RRBenifit.css'
export class RRBenifit extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          bname:null,
          email:null,
          mnum:null,
          bdetails: null,
          btype: null,
          addinfo: null
        };
      
        this.handleInputChange = this.handleInputChange.bind(this);
      }
       handelSubmit = (e) => {
         alert('BENEFIT IS SUCCESSFULLY REGISTERED IN SYSTEM!!!')
        const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
            bname: this.state.bname,
            email: this.state.email,
            mnum: this.state.mnum,
            bdetails: this.state.bdetails,
            btype:this.state.btype,
            addinfo:this.state.addinfo
            })}
            fetch('http://localhost:8000/add_benefits', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register Resident Benifit :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} >
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange} type="text" name="bname"  className="font-roboto" placeholder="Benefit Name" required/>
                          <input onChange={this.handleInputChange} type="text" name="email" className="font-roboto"  placeholder="Contact Email" required/>
                           <input onChange={this.handleInputChange} type="text" name="mnum" className="font-roboto"   placeholder="Contact Phone Number" required/>
                          <textarea onChange={this.handleInputChange} name="bdetails" className="font-roboto"  placeholder="Benifit Details"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange}  name="btype" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Benifit Type</option>
                              <option value="Monetory" >Monetory</option>
                              <option value="Health">Health</option>
                              <option value="Social Service">Social Service</option>
                              <option value="other">Other</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange} className="font-roboto" name="addinfo" placeholder="Additional Information"></textarea>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register Benifit</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RRBenifit
