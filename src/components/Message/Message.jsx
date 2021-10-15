import React from 'react'
import './message.css'
export default function Message({own}) {
    return (
        <div className={own? "message own":"message"}>
            <div className="messageTop">
                <img src="https://via.placeholder.com/350x150" alt="message image" className="messageImage" />
                <p className="messageText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis i</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
