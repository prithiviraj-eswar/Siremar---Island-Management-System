import React, { PureComponent } from 'react'
import './Disavailable.css'
export class Disavailable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isfetching : false,
      benefits : []
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
  this.setState({...this.state, isFetching: true});
  fetch('http://localhost:8000/get_benefits')
      .then(response => response.json())
      .then(result => {
          this.setState({benefits: result, isFetching: false})
      })
      .catch(e => {
          console.log(e);
          this.setState({...this.state, isFetching: false});
      });
};

   
  render() {
    return (
      <>
     <table>
       <tr>
         <th>S.No</th>
         <th>Company Name</th>
         <th>Benefit name</th>
         <th>Benefit type</th>
         <th>Additional Information</th>
         <th>Contact Details</th>
       </tr>
       <p>{this.state.isFetching ? 'Fetching benefits...' : ''}</p>
       {
          this.state.benefits.map(function(benefit, idx) {
            return (
                <tr>
                  <td>{idx+1}</td>
                  <td>{benefit.bname}</td>
                  <td>{benefit.bdetails}</td>
                  <td>{benefit.btype}</td>
                  <td>{benefit.addinfo}</td>
                  <td>{benefit.email},{benefit.mnum}</td>
                  </tr>
            )
          })
        }
        {/* <tr>
         <td>1</td>
         <td>Air marga</td>
         <td>Coupon Code: AIR2785 applicable on all flights till 20th April * offer upto 40% </td>
       </tr>
       <tr>
         <td>2</td>
         <td>AIR Chang</td>
         <td>Coupon Code: SIN4857 applicable on all flights lasts till end of month * offer upto 35% </td>
       </tr>
       <tr>
         <td>3</td>
         <td>Grocery MAR</td>
          <td>Avail upto 10%<sup>*</sup> discount by showing your residency proof at the stores </td>
       </tr>
       <tr>
         <td>4</td>
         <td>WalStores</td>
         <td>Avail upto 15 % <sup>*</sup> discount on all the items across all stores with your resident card proof</td>
       </tr>
       <tr>
         <td>5</td>
         <td>Marg Hospitals</td>
         <td>Avail upt 10% on all the Tests performed at Hospital premises by showin your resident card</td>
       </tr>
       <tr>
         <td>6</td>
         <td>Water Rovelli</td>
         <td>Avail flat 30% discount by showing your school id at the park entrance</td>
       </tr> */}
     </table>
     </>
    )
  }
}

export default Disavailable
