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
                        <Input style={{width: '82%',  fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <Button style={{borderRadius: '40px', width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 1% -13px 5%', backgroundColor: 'blue', color: 'white'}} type="submit">Send<div style={{marginTop: '5px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="icon_svg-fill_as_stroke" d="M21.106 11.553L5.08 3.54001C4.681 3.34101 4.241 3.72301 4.382 4.14501L6.53 10.588L12.041 11.507C12.598 11.6 12.598 12.401 12.041 12.493L6.53 13.412L4.382 19.855C4.241 20.278 4.682 20.66 5.08 20.46L21.106 12.447C21.474 12.263 21.474 11.737 21.106 11.553Z" fill="white"></path></svg></div></Button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default SendMessage