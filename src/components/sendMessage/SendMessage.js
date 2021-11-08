import React, { useState } from 'react'
import db, { auth } from '../../config/firebase.config'
import firebase from 'firebase/compat/app'
import { Input, Button } from '@material-ui/core'
import './Chat.css'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <div>
                <form onSubmit={sendMessage}>
                    <div className="sendMsg">
                        <Input style={{width: '70%',  fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <Button style={{ width: '30%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', backgroundColor: 'blue', color: 'white'}} type="submit">Send</Button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default SendMessage