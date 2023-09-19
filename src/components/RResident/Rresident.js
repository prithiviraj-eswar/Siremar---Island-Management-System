import React, { PureComponent } from 'react'
import './rresident.css'
export class Rresident extends PureComponent {

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
        pwd:null
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
   handelSubmit = (e) => {
    alert('Successfully Registered Resident to Siremar Portal!!!')
    const requestOptions = {
      method:'POST',
      body: JSON.stringify({
        'fname':this.state.fname,
        'lname':this.state.lname,
        'email':this.state.email,
        'mnum':this.state.mnum,
        'gender':this.state.gender,
        'stayperiod':this.state.stayperiod,
        'dob':this.state.dob,
        'raddress':this.state.raddress,
        'county':this.state.county,
        'isborn':this.state.isborn,
        'usrname':this.state.usrname,
        'pwd':this.state.pwd
       
        })}
        fetch('http://localhost/siremar_be/register_resident.php', requestOptions).then(response => {
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
      <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"><b><u> Resident Registration:</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" onSubmit={this.handelSubmit} encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <input onChange={this.handleInputChange} type="text" name="fname"  className="font-roboto" placeholder="First Name" required/>
                          <input onChange={this.handleInputChange}  type="text" name="lname"  className="font-roboto" placeholder="Last Name" required/>
                          <input onChange={this.handleInputChange} type="text" name="usrname" className="font-roboto"   placeholder="User Name" required/>
                          <input onChange={this.handleInputChange} type="number" name="mnum" className="font-roboto" placeholder="Phone Number" required/>
                          <input onChange={this.handleInputChange} type="text" name="email" className="font-roboto" placeholder="Email" required/>
                          <input onChange={this.handleInputChange} type="radio" id="male" name="gender" value="male"/>Male  
                          <input onChange={this.handleInputChange} type="radio" id="female" name="gender" value="female"/>Female
                      </div>
                      <div className="d-flex flex-direction-row justify-center media">
                      <pre><b>  Duration Of Stay:</b></pre> <input onChange={this.handleInputChange} type="number" name="stayperiod" className="font-roboto"   placeholder="Number Of Years of Stay" required/>
                       <b>Date Of Birth: <span></span></b><input onChange={this.handleInputChange} type="Date" id="dob" name="dob" /><br></br>
                       <textarea onChange={this.handleInputChange} name="raddress" className="font-roboto"  placeholder="address"></textarea><br></br>
                       <input onChange={this.handleInputChange} type="text" name="county"  className="font-roboto" placeholder="County" required/>
                        <input onChange={this.handleInputChange} type="radio" id="bornhere" name="isborn" value="yes"/>Born in Island  
                      <input onChange={this.handleInputChange} type="radio" id="notbornhere" name="isborn" value="no"/>Not Born in Island<br></br>
                      <pre><b>  Supporting Documents:</b></pre><br></br><input onChange={this.handleInputChange} type="file" id="file"  className="font-roboto" placeholder="Suppporting Documents" />
                      <br></br><input onChange={this.handleInputChange} type="file" id="file"  className="font-roboto" placeholder="Suppporting Documents" />
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
    )
  }
}

export default Rresident
