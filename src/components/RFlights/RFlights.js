import React, { PureComponent } from 'react'
import './RFlights.css'
export class RFlights extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          fsp:null,
          fnum:null,
          ffrom:null,
          fto: null,
          depdate: null,
          addinfo: null,
          discode:null
        };
      
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
       handelSubmit = (e) => {
        alert('FLIGHT DETAILS ARE SUCCESSFULLY SUBMITTED!!!')
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'fsp': this.state.fsp,
            'fnum': this.state.fnum,
            'ffrom': this.state.ffrom,
            'fto': this.state.fto,
            'depdate':this.state.depdate,
            'addinfo':this.state.addinfo,
            'discode':this.state.discode
            })}
            fetch('http://localhost:8000/add_flights', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register  Flight Details:</u> </b></div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit}  encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange} type="text" name="fsp"  className="font-roboto" placeholder="Flight Service Provider" required/>
                          <input onChange={this.handleInputChange}  type="text" name="fnum"  className="font-roboto" placeholder="Flight Number" required/>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                      <input onChange={this.handleInputChange} type="text" name="ffrom"  className="font-roboto" placeholder="FROM" required/>
                      <input onChange={this.handleInputChange} type="text" name="fto"  className="font-roboto" placeholder="TO" required/>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                      <input onChange={this.handleInputChange} type="text" name="discode"  className="font-roboto" placeholder="Discount Code" required/>
                      <b>Departure Date</b><input onChange={this.handleInputChange} type="Date" name="depdate"/><br></br>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange}  className="font-roboto" name="addinfo" placeholder="Special Instruction"></textarea>
                          
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register Flight</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RFlights
