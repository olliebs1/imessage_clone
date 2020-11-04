import {IconButton} from '@material-ui/core'
import MicNoneIcon from '@material-ui/icons/MicNone'
import React, { useEffect, useState } from 'react'
import Message from './Message.js'

import './Chat.css'
import { useSelector } from 'react-redux'
import { selectchatId, selectchatName } from './features/chatSlice.js'
import db from './firebase.js'

function Chat() {
    const [input, setInput] = useState("");
    const chatName = useSelector(selectchatName);
    const chatId = useSelector(selectchatId);
    const [messages, setMessages] = useState([])


    useEffect(() => {
        if(chatId) {
            db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            });
        }
    }, [chatId]);

    const sendMessage = (e) => {
        e.preventDefault();
        //Firebase

        setInput('');
    }

    return (
        <div className='chat'>
            {/* chat header  */}
            <div className="chat_header">
                <h4>To: <span className='chat_name'>{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}
            <div className="chat_messages">
                {messages.map(({ id, data }) => {
                    <Message key={id} contents={data}/>
                })}
            </div>
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
