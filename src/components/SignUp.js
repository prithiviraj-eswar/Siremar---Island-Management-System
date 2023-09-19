import React from 'react'






class SignUp extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    usrname:null,
    email:null,
    pwd:null
  };

  this.handleInputChange = this.handleInputChange.bind(this);
}

 handelSubmit = (e) => {
  alert('Successfully Registered for SIREMAR please login now!!!')
  const requestOptions = {
    method:'POST',
    body: JSON.stringify({
      'usrname': this.state.usrname,
      'email': this.state.email,
      'pwd': this.state.pwd,
      })}
      fetch('http://localhost/siremar_be/signup.php', requestOptions).then(response => {
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
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={this.handelSubmit}>
            <input
              type='text'
              name='usrname'
              placeholder='Username'
              required
              onChange={this.handleInputChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Your email address'
              required
              onChange={this.handleInputChange}
            />
            <input
              type='password'
              name='pwd'
              placeholder='Choose your password'
              onChange={this.handleInputChange}
            />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  );
}
}

export default SignUp
