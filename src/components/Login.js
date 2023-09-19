import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login_response = null
    this.state = {
      usrname: null ,
      pwd: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  view = '';

  handleInputChange(event) { 
    const target = event.target;
    const name = target.name
    const value = target.value
    this.setState({
      [name]:value
    });
  }

  handleSubmit(event) {
    const requestOptions = {
      method:'POST',
      body: JSON.stringify({
        'usrname': this.state.usrname,
        })}
        fetch('http://localhost/siremar_be/login.php', requestOptions).then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
          
      }).then(data =>{
          this.setdata(data)
      })

    
   
  }

setdata(data){
  
  this.login_response = data
  if (this.login_response[0].pwd == this.state.pwd){
    if (this.login_response[0].isins == 'Y'){
      window.location.href = '/inspector';
    }
    else if (this.login_response[0].isadm == 'Y'){
      window.location.href = '/admin';
    }
    else{
      window.location.href = '/resident';
    }
    
  }
  else{
    alert("INVALID CREDENTIALS ENTERED")
  }
}

  render() {
    return (
      <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='text'
              name='usrname'
              placeholder='user Name'
              required
              onChange={this.handleInputChange}
            />
            <input type='password' name='pwd' placeholder='Your password' onChange={this.handleInputChange}  />
            <button type='button' onClick={this.handleSubmit}>Log In</button>
          </form>
        </div>
      </section>
    </>
    );
  }
}

export default Login