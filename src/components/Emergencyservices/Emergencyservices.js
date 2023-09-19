import React, { PureComponent } from 'react'
import './Emergencyservices.css'
export class Emergencyservices extends PureComponent {
  render() {
    return (
     <div style={{backgroundImage: `url("https://www.phoenixaustralia.org/wp-content/uploads/2021/03/19-118545-emergency-services.jpeg")`}}> 
     <table>
       <tr>
         <th>S.No</th>
         <th>Service Name</th>
         <th>Service Details</th>
         <th>Dial Details</th>
       </tr>
       <tr>
         <td>1</td>
         <td>Fire Service</td>
         <td>A fire department or fire brigade, also known as a fire authority, fire district, fire and rescue, or fire service in some areas, is an organization that provides fire prevention, fire suppression, rescue, and hazardous materials mitigation</td>
         <td> 147</td>
       </tr>
       <tr>
         <td></td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>2</td>
         <td>Medical Service</td>
          <td>Emergency medical services, also known as ambulance services or paramedic services, are emergency services that provide urgent pre-hospital treatment and stabilisation for serious illness and injuries and transport to definitive care</td>
          <td>148</td>
       </tr>
       <tr>
       <td></td>
         <td></td>
         <td></td>
         </tr>
       <tr>
         <td>3</td>
         <td>Cop services</td>
         <td>The Emergency Service Unit is part of the Special Operations Bureau of the New York City Police Department. The unit provides specialized support and advanced equipment to other NYPD units. Members of ESU are cross-trained in multiple disciplines for police, first aid, and rescue work.</td>
         <td> 149</td>
       </tr>
       <tr>
          <td></td>
         <td></td>
         <td></td>
       </tr>
     </table>
     
     </div>
    )
  }
}

export default Emergencyservices
