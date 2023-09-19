import React, { PureComponent } from 'react'
import './Registerinspector.css'
export class Registerinspector extends PureComponent {




    constructor(props) {
        super(props);
        this.state = {
            fname:null,
            lname:null,
            email:null,
            mnum:null,
            gender:null,
            stayperiod:null,
            dob:null,
            raddress:null,
            county:null,
            isborn:null,
            isres:null,
            isins:null,
            isadm:null,
            usrname:null,
            pwd:null,
            addinfo:null,
            workexp:null

        };
      
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
       handelSubmit = (e) => {
        alert('Successfully Registered Inspector to Siremar Portal!!!')
        const requestOptions = {
          method:'POST',
          body: JSON.stringify({
            'fname':this.state.fname,
            'email':this.state.email,
            'mnum':this.state.mnum,
            'raddress':this.state.raddress,
            'usrname':this.state.usrname,
            'workexp':this.state.workexp,
            'addinfo':this.state.addinfo
            })}
            fetch('http://localhost/siremar_be/register_inspector.php', requestOptions).then(response => {
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
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Register Inspector :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange} type="text" name="fname"  className="font-roboto" placeholder="Inspector Name" required/>
                          <input onChange={this.handleInputChange} type="text" name="email" className="font-roboto"  placeholder="Contact Email" required/>
                           <input onChange={this.handleInputChange} type="number" name="mnum" className="font-roboto"   placeholder="Contact Phone Number" required/>
                          <textarea onChange={this.handleInputChange} name="raddress" className="font-roboto" placeholder="Inspector Addresss"></textarea>
                          <input onChange={this.handleInputChange} type="text" name="usrname" className="font-roboto"  placeholder="usrname" required/>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <select onChange={this.handleInputChange} name="workexp" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Years Of Experience </option>
                              <option value="one" >1</option>
                              <option value="two">2</option>
                              <option value="three">3</option>
                              <option value="greater than four">greater than 4</option>
                          </select>
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                          <textarea onChange={this.handleInputChange} name="addinfo" className="font-roboto"  placeholder="Additional Information"></textarea>
                          <pre><b>Supporting Documents </b></pre>
                          <input type="file" id="phoneNumber" className="font-roboto" />
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                           <button className="btn clear" type="reset">Clear</button>
                          <button className="btn orderButton" type="submit">Register Inspector</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    )
  }
}

export default Registerinspector
