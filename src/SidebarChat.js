import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core'


function SidebarChat() {
    return (
        <div className='sidebarChat'>
           <Avatar /> 
           <div className='sidebaChat_info'>
               <h3>Channel name</h3>
               <p>Last message sent..</p>
               <small>timestamp</small>
           </div>
        </div>
    )
}

export default SidebarChat;
