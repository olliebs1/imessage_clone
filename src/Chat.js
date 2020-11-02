import {IconButton} from '@material-ui/core'
import MicNoneIcon from '@material-ui/icons/MicNone'
import React, { useState } from 'react'

import './Chat.css'

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        //Firebase

        setInput('');
    }

    return (
        <div className='chat'>
            {/* chat header  */}
            <div className="chat_header">
                <h4>To: <span className='chat_name'>Channel name</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}
            <div className="chat_input">
                <form>
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder='iMessage' type='text'/>
                    <button onClick={sendMessage} >Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className='chat_mic'/>
                </IconButton>
            </div>

            {/* chat input */}
            
        </div>
    )
}

export default Chat
