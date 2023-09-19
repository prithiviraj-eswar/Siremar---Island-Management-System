// https://stackblitz.com/edit/react-http-post-request-examples-fetch?file=App%2FPostRequest.jsx
import './Contactus.css'
import React from 'react'
class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname:null,
      lname:null,
      mnum:null,
      email:null,
      content:null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

   handelSubmit = (e) => {
    alert('Successfully sent the message to the administrator')
    const requestOptions = {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'fname': this.state.fname,
        'lname': this.state.lname,
        'mnum': this.state.mnum,
        'email': this.state.email,
        'content': this.state.content,
        'isreplied':'N'    })}
        fetch('http://localhost:8000/add_contactus', requestOptions).then(response => {
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
                placeholder='First Name'
                required
                name='fname'
                onChange={this.handleInputChange}
              />
              <input
                type='text'
                placeholder='Last Name'
                required
                name='lname'
                onChange={this.handleInputChange}
              />
              <input
                type='tel'
                placeholder='Phone Number'
                required
                name='mnum'
                onChange={this.handleInputChange}
              />
              <input type='email' name='email' placeholder='Your email address' onChange={this.handleInputChange} required/>
              <textarea name='content' placeholder='Please enter you query ' onChange={this.handleInputChange} required />
              <button type='submit'>Send Request</button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Contactus