import React from 'react'
import './Chat.css'

function Chat() {

    const sendMessage = (e) => {
        e.preventDefault();

        //Firebase
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
                    <input placeholder='iMessage' type='text'/>
                    <button onClick={sendMessage} >Send Message</button>
                </form>
            </div>

            {/* chat input */}
            
        </div>
    )
}

export default Chat
