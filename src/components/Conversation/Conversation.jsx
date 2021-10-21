import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './conversation.css'
export default function Conversation({conversation,currentUser,online,socket}) {
    const [user, setUser] = useState(null)
    const [unseenMessage, setUnseenMessage] = useState(0)
    useEffect(() => {
        socket?.on('getMessage',data=>{
           
            setUnseenMessage(prev=>prev+1)
        })
       
    }, [socket])
   // let buffer;
    useEffect(() => {
        const correspondantId=conversation.members.find(m=>m !==currentUser.pubId)
        
        const getCorrespondant=async()=>{
            try{
               const res=await axios.get('http://localhost:3005/api/users?userId='+correspondantId)
                setUser(res.data)
                console.log(res.data)
                 //buffer = Buffer.from( new Uint8Array(res.data.picture.data) );
               // console.log(typeof buffer)
            }

            catch(err){
                console.log(err)
            }
           
        }
        getCorrespondant()
    }, [currentUser,conversation])
    
   useEffect(() => {
    const getUnseenMessages=async()=>{
        try{
            const res=await axios.get('http://localhost:3005/api/messages/'+conversation.pubId)
           
             for(let message of res.data){
                 if (message.status==="not seen"){
                    setUnseenMessage(prev=>prev+1)
                 }
             }

         }
         catch(err){
             console.log(err)
         }
    }
         !online && conversation && getUnseenMessages()
        
         
     }, [conversation])
     const toggleUnseen=async()=>{
         
         try{
            const res=await axios.put('http://localhost:3005/api/messages/'+conversation.pubId,{status:"seen"})
            console.log(res.data)
            setUnseenMessage(0)
        }
         catch(err){
             console.log(err)
         }
     }
    return (
        
        <div className="conversation" onClick={toggleUnseen}>
            {user && <>
            <div className="imageContainer">
            <img src="https://via.placeholder.com/350x150"  alt="conversation image" className="conversationImage" />
            { online &&<div className="chatOnlineBadge"></div>}
            </div>
            
            <span className="conversationName">{user.username}</span>
           {unseenMessage>0 && !online&& <span className="unssen">{unseenMessage} nouveaux messages</span>}
        </>  }           
        </div>
    )
}
//src="https://via.placeholder.com/350x150"
//src={"data:image/png;base64,"+buffer?.toString('base64')}