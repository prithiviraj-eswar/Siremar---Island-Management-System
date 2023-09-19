import React, { PureComponent } from 'react'
import './RCounty.css'
export class RCounty extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cname:null,
            cboundaries:null,
            pcount:null,
            addinfo: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
      
      }
      
       handelSubmit = (e) => {
        alert('COUNTY DETAILS ARE SUCCESSFULLY SUBMITTED!!!')
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'cname': this.state.cname,
            'cboundaries': this.state.cboundaries,
            'pcount': this.state.pcount,
            'addinfo': this.state.addinfo
            })}
            fetch('http://localhost:8000/add_counties', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register County :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange}  type="text" name="cname"  className="font-roboto" placeholder="County Name" required/>
                          <textarea onChange={this.handleInputChange} id="Cb" className="font-roboto" name="cboundaries" placeholder="County Boundaries"></textarea>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange} name="pcount" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Number Of People</option>
                              <option value="500-1000" >500-1000</option>
                              <option value="1000-5000">1000-5000</option>
                              <option value="5000-10000">5000-10000</option>
                              <option value=">10000">greater than 10000</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange} id="Instruction" className="font-roboto" name="addinfo" placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto"  />
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register County</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default RCounty
