import React, { useState, useEffect, useRef } from 'react'
import db, { auth } from '../../config/firebase.config'
import SendMessage from './SendMessage'
import './Chat.css'
import { TextEditor } from '../post-page/Editor'
import Editor from '../post-page/temp'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='chat-left'>
                <div className='chat-left-top'>
                    
                    <div>
                        <h3>Messages</h3>
                    </div>
                    <div className='chat-left-new'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="icon_svg-fill_as_stroke" d="M4.5 6.5V5.75C4.08579 5.75 3.75 6.08579 3.75 6.5H4.5ZM19.5 6.5H20.25C20.25 6.08579 19.9142 5.75 19.5 5.75V6.5ZM19.5 18.5V19.25C19.9142 19.25 20.25 18.9142 20.25 18.5H19.5ZM3.75 13C3.75 13.4142 4.08579 13.75 4.5 13.75C4.91421 13.75 5.25 13.4142 5.25 13H3.75ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25V17.75ZM4.5 7.25H19.5V5.75H4.5V7.25ZM18.75 6.5V18.5H20.25V6.5H18.75ZM5.25 13V6.5H3.75V13H5.25ZM19.5 17.75H10V19.25H19.5V17.75Z" fill="blue"></path><path class="icon_svg-stroke" d="M4.5 7.5L12 14L19.5 7.5" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-stroke" d="M7 18.5H2M4.5 16V21" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                        <div style={{color: 'blue'}}>New</div>
                    </div>
                </div>
                <div className="chat-left-bottom">
                    <div className="chat-left-img">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14Gg0kJ_5yUHzwbioPpj010sKYOHJpTySS9XKzz7r=s96-c" alt="avatart" />
                    </div>
                    <div className="chat-left-text">
                        <div><h3>Ananthu Asokkumar
</h3></div>
                        <div>Thur</div>
                    </div>
                </div>
            </div>
            <div className='chat-right'>
                <div className='chat-right-top'>
                    
                        <div className="chat-left-img">
                            <img src="https://lh3.googleusercontent.com/a-/AOh14Gg0kJ_5yUHzwbioPpj010sKYOHJpTySS9XKzz7r=s96-c" alt="avatart" />
                        </div>
                        <div className="chat-left-text">
                            <div><h3>Ananthu Asokkumar
</h3></div>
                            <div><svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" class="icon_svg-stroke" stroke-width="1.5" stroke="#666" fill="none"></path></svg></div>
                        </div>
                    
                </div>
                <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img id="avatar" src={photoURL} alt="" />
                            <p id="message-text">{text}</p>
                        </div>
                    </div>
                ))}
                </div>
                <SendMessage scroll={scroll} />
                <div ref={scroll}></div>
            </div>
            
        </div>
    )
}

export default Chat