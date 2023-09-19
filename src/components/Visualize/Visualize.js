import React, { PureComponent } from 'react'
import './Visualize.css'
export class Visualize extends PureComponent {
  render() {
    return (
        <>
        <div><u><h3>REQUESTS RAISED :</h3></u></div><br></br>
        <div>From: <input type="Date"></input></div>
        <div>To: <input type="Date"></input></div>
        <div class="wrapper">
  <div class="d1"><div><span><b>60% Requests Raised for residency</b></span></div></div>
  <div class="d2"><div><span><b>22% New Business Requests</b></span></div></div>
  <div class="d3"><div><span><b>8% New Hospital</b></span></div></div>
  <div class="d4"><div><span><b>7% Moveout Requests</b></span></div></div>
  <div class="d5"><div><span><b>3% New Schools</b></span></div></div>
</div>
        </>
    )
  }
}

export default Visualize
 