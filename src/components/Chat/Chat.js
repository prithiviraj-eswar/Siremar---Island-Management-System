import React, { PureComponent } from 'react'
import './Chat.css'
export class Chat extends PureComponent {




      setdata(){
  
            window.location.href = 'http://localhost:3000/';
      }


  render() {
    return (
        <>

            <a href="http://localhost:3000/" target={"_blank"}>Interact in Chat</a>
        
      </>
      );
  }
}

export default Chat
