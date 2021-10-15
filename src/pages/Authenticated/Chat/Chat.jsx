import React from 'react'
import ChatOnline from '../../../components/ChatOnline/ChatOnline'
import Conversation from '../../../components/Conversation/Conversation'
import Message from '../../../components/Message/Message'
import './chat.css'
export default function Chat() {
    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" className="chatMenuInput" placeholder="Search for friends" />
                    <Conversation></Conversation>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message own={true}></Message>
                        <Message/>
                        <Message/>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea  className="chatMessageInput" placeholder="ecrivez votre message ..."></textarea>
                        <button className="chatSubmitButton">Envoyer</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
            </div>
            
        </div>
    )
}
