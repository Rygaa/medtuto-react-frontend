import React from 'react'
import './chatOnline.css'
export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImageContainer">
                    <img className="chatOnlineImage" src="https://via.placeholder.com/350x150" alt="image" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Hadi DIDI</span>
            </div>
        </div>
    )
}
