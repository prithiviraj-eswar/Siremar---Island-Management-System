import React, { PureComponent } from 'react'
import './Eventdetails.css'
export class Eventdetails extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      isfetching: false,
      events: []
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
    fetch('http://localhost:8000/get_events')
      .then(response => response.json())
      .then(result => {
        this.setState({ events: result, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };



  render() {
    return (
      <>
     <div style={{backgroundImage: `url("https://www.mybucketlistevents.com/wp-content/uploads/2017/09/motiv-detail.jpg")`}}> 
     <table>
       <tr>
         <th>S.No</th>
         <th>Organizatin  Name</th>
         <th>Event Name</th>
         <th>Number Of Seats</th>
         <th>Location </th>
         <th>Event Type</th>
         <th>Additional Information</th>
       </tr>
       <p>{this.state.isFetching ? 'Fetching benefits...' : ''}</p>
        {

          this.state.events.map(function (event, idx) {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{event.orgname}</td>
                <td>{event.evename}</td>
                <td>{event.positions}</td>
                <td>{event.elocation}</td>
                <td>{event.etype}</td>
                <td>{event.addinfo}</td>
              </tr>
            )
          })
        }
       {/* <tr>
         <td>1</td>
         <td>The Masters, Augusta, GA</td>
         <td>
The Masters tournament is one of the four major golf tournaments held per year at the professional level. Unlike the other three, whose locales change annually,
the Masters tournament is held at the same location every year – in Augusta, Georgia. It’s a tournament that has been made famous by the iconic green jacket of the Augusta National Golf Club

</td>
       </tr>
       <tr>
         <td></td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>2</td>
         <td>Kentucky Derby, Louisville, KY</td>
          <td>The Kentucky Derby is one of America’s major horse races held every year in the vibrant city of Louisville, Kentucky. The race is known as “The Most Exciting Two Minutes in Sports,” but the race itself is almost secondary to the atmosphere and rituals of the event.  Mint juleps galore, the audience dressed in their Spring-in-the-South finest, a large and vibrant hat tradition, the Kentucky Derby provides some excellent people watching and parties. The Kentucky Derby is one of the best events in the world to see and be seen. </td>
       </tr>
       <tr>
       <td></td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>3</td>
         <td>The US Open, New York, NY</td>
         <td>One of four Grand Slam tournaments held annually across the world, the US Open is a grueling tennis championship played on hard courts.  For a chance to watch the greatest tennis talent in the world competing for some high-stakes prize money and name recognition, all in the bustling metropolis of New York City, the US Open makes for an enthralling event for spectators.</td>
       </tr>
       <tr>
       <td></td>
         <td></td>
         <td></td>
       </tr> */}
     </table>
     </div>
     </>
    )
  }
}

export default Eventdetails
