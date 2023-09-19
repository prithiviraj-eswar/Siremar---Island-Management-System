import React, { PureComponent } from 'react'
import './Schoolsandregistration.css'
export class Schoolsandregistration extends PureComponent {



  constructor(props) {
    super(props);
    this.state = {
      isfetching: false,
      schools: []
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
    fetch('http://localhost:8000/get_school')
      .then(response => response.json())
      .then(result => {
        this.setState({ schools: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };



  render() {
    return (
     <>
     <table>
       <tr>
         <th>S.No</th>
         <th>School Name</th>
         <th>School Address</th>
         <th>Level of Education</th>
         <th>Additional Information</th>
         <th>Contact Details</th>
         <th>Register</th>
       </tr>
       <p>{this.state.isFetching ? 'Fetching benefits...' : ''}</p>
        {

          this.state.schools.map(function (school, idx) {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{school.sname}</td>
                <td>{school.saddress}</td>
                <td>{school.led}</td>
                <td>{school.addinfo}</td>
                <td>{school.email},{school.mnum}</td>
                <td><button>Register</button></td>
              </tr>
            )
          })
        }
       {/* <tr>
         <td>1</td>
         <td>DASUP University</td>
         <td>DASUP is an elite private, Christian university located in Durham, North margarita in the Raleigh Area. It is a mid-size institution with an enrollment of 6,597 undergraduate students. Admissions is extremely competitive as the Duke acceptance rate is only 8%. Popular majors include Computer Science, Economics, and Public Policy Analysis. Graduating 95% of students, Duke alumni go on to earn a starting salary of $76,300.</td>
         <td><button>Register</button></td>
       </tr>
       <tr>
         <td>2</td>
         <td>Wadoor Forest University</td>
         <td>Wadoor Forest is a highly rated private university located in Winston-Salem, North Carolina in the Greensboro Area. It is a mid-size institution with an enrollment of 5,240 undergraduate students. Admissions is competitive as the Wake Forest acceptance rate is 30%. Popular majors include Economics, Communications, and Psychology. Graduating 88% of students, Wake Forest alumni go on to earn a starting salary of $51,100 </td>
         <td><button>Register</button></td>
       </tr>
       <tr>
         <td>3</td>
         <td>University of Marg Carto at Chapel Hill</td>
          <td>UNC is a highly rated public university located in Chapel Hill, North Carolina in the Raleigh Area. It is a large institution with an enrollment of 18,528 undergraduate students. Admissions is competitive as the UNC acceptance rate is 23%. Popular majors include Communications, Biology, and Psychology. Graduating 91% of students, UNC alumni go on to earn a starting salary of $41,000.</td>
          <td><button>Register</button></td>
       </tr> */}
     </table>
     </>
    )
  }
}

export default Schoolsandregistration
