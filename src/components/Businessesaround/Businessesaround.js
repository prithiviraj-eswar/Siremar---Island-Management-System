import React, { PureComponent } from 'react'
import './Businessesaround.css'
export class Businessesaround extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isfetching: false,
      business: []
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
    fetch('http://localhost:8000/get_business')
      .then(response => response.json())
      .then(result => {
        this.setState({ business: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };


  render() {
    return (
      <table>
        <tr>
          <th>S.No</th>
          <th>Business Name</th>
          <th>Business Address</th>
          <th>Business Type</th>
          <th>Additional Information</th>
          <th>Contact Details</th>
        </tr>
        <p>{this.state.isFetching ? 'Fetching benefits...' : ''}</p>
        {

          this.state.business.map(function (bu, idx) {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{bu.bname}</td>
                <td>{bu.baddress}</td>
                <td>{bu.btype}</td>
                <td>{bu.addinfo}</td>
                <td>{bu.email},{bu.mnum}</td>
              </tr>
            )
          })
        }
        {/* <tr>
        <td>1</td>
        <td>Air marga</td>
        <td>Capital A margarita, operating as AIR Chang is a margarita multinational low-cost airline headquartered near Margarita, Malaysia. It is the largest airline in Margarita by fleet size and destinations. Air marg operates scheduled domestic and international flights to more than 165 destinations spanning 25 countries.  </td>
        <td>369 Chestnut Lane
Hillsborough, 08844</td>
      </tr>
      <tr>
        <td>2</td>
        <td>AIR Chang</td>
        <td>China Airlines is the state-owned flag carrier of the Republic of China, and one of its two major airlines along with EVA Air. It is headquartered in Taipei Taoyuan International Airport and operates over 1,400 flights weekly to 102 cities across Asia, Europe, North America, and Oceania</td>
        <td>Guang Zhou Shi Huan Shi Dong Lu 474hao Dong Huan Da Xia Xi Men 4ceng

</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Kroger MAR</td>
         <td>he Kroger Company, or simply Kroger, is an American retail company that operates (either directly or through its subsidiaries) supermarkets and multi-department stores throughout the United States.[1][5]

 of Columbia[5] with store formats that include hypermarkets, supermarkets, superstores, department stores, and 137 jewelry stores (782 convenience stores were sold to EG Group in 2018). </td>
<td>The Kroger Co.
Customer Relations
1014 Vine Street
Cincinnati, Ohio 45202-1100
(513) 762-4000</td>
      </tr>
      <tr>
        <td>4</td>
        <td>WalStores</td>
        <td>Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores from the United States, headquartered in Bentonville, Arkansas</td>
        <td>Bentonville, AR</td>
     </tr>
      <tr>
        <td>5</td>
        <td>Marg Hospitals</td>
        <td>Marg hospitals is the initiative by the island for keeping the residents health needs</td>
        <td> Downtown , Margarita</td>
      </tr> */}
      </table>
    )
  }
}

export default Businessesaround
