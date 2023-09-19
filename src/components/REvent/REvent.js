import React, { PureComponent } from 'react'
import './REvent.css'
export class REvent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            orgname:null,
            evename:null,
            positions:null,
            elocation: null,
            etype: null,
            addinfo: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
       handelSubmit = (e) => {
        alert('EVENT DETAILS ARE SUCCESSFULLY SUBMITTED!!!')
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'orgname': this.state.orgname,
            'evename': this.state.evename,
            'positions': this.state.positions,
            'elocation': this.state.elocation,
            'etype':this.state.etype,
            'addinfo':this.state.addinfo
            })}
            fetch('http://localhost:8000/add_events', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register Event :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange}  type="text" name="orgname"  className="font-roboto" placeholder="Event Organizer" required/>
                          <input onChange={this.handleInputChange}  type="text" name="evename" className="font-roboto"   placeholder="Event Name" required/>
                           <input onChange={this.handleInputChange}  type="number" name="positions" className="font-roboto"  placeholder="Number of seats" required/>
                          <textarea onChange={this.handleInputChange}  id="address" className="font-roboto" name="elocation" placeholder="Event Location"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange}  name="etype" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Event Type</option>
                              <option value="first" >Entertainment</option>
                              <option value="second">Business</option>
                              <option value="third">Informational</option>
                              <option value="other">Other</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange}  id="Instruction" className="font-roboto" name="addinfo" placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto"/>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register Event</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default REvent
