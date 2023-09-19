import React, { PureComponent } from 'react'
import './Pendingrequests.css'
export class Pendingrequests extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      isfetching: false,
      requests: [],
      reply: null,
      email:null
    };

  }
  componentDidMount() {
    this.fetchUsersWithFetchAPI();
    this.timer = setInterval(() => this.fetchUsersWithFetchAPI(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  fetchUsersWithFetchAPI = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch('http://localhost:8000/get_contactus')
      .then(response => response.json())
      .then(result => {
        this.setState({ requests: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

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
      <div>
      <div id="place-order" className="info-content">
          <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> <b><u>Pendingrequests  :</u></b> </div>
          <div className="form">
              <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" encType="text/plain">
                  <div className="d-flex flex-direction-column order-Container">
                      <div className="d-flex flex-direction-row justify-center media">
                          <select name="service" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                              <option  value="DEFAULT">Request Type</option>
                              <option value="first" >ResidencyRequest</option>
                              <option value="second">Moveout request</option>
                              <option value="other">Other</option>
                          </select>
                      </div>
                      <div className="d-flex w-100  flex-direction-row justify-center ">
                          <button className="btn orderButton" type="submit">Search</button>
                      </div>
                  </div>
              </form>
          </div>
          <table>
       <tr>
         <th>S.No</th>
         <th>Requestor Name</th>
         <th>Requestor Mobile Number</th>
         <th>Requestor Email Id </th>
         <th>Additional Information</th>
         <th> Answer </th>
         <th> Action </th>
       </tr>
       <p>{this.state.isFetching ? 'Fetching benefits...' : ''}</p>
        {
          this.state.requests.map(function (request, idx) {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{request.fname}</td>
                <td>{request.mnum}</td>
                <td>{request.email}</td>
                <td>{request.content}</td>
                <td><textarea  name="reply"  ></textarea></td>
                <td><button>send</button></td>
              </tr>
            )
          })
        }
       {/* <tr>
         <td>1</td>
         <td>New Residency Request</td>
         <td>
Naveen Kumar Parasala
</td>
<td>Will fetch the key details of the application and display here. The fetching will be done from the database</td>
<td><textarea ></textarea></td>
<td><button>send</button></td>
       </tr>
       <tr>
         <td>2</td>
         <td>New Residency Request</td>
          <td>Prithiviraj Eswaramoorthy </td>
          <td>Will fetch the key details of the application and display here. The fetching will be done from the database</td>
          <td><textarea ></textarea></td>
          <td><button>send</button></td>
       </tr>
       <tr>
         <td>3</td>
         <td>Moveout Request</td>
         <td>Mahendra</td>
         <td>Will fetch the key details of the application and display here. The fetching will be done from the database</td>
         <td><textarea ></textarea></td>
         <td><button>send</button></td>
       </tr> */}
     </table>
      </div>
  </div>


  </>
    )
  }
}

export default Pendingrequests
