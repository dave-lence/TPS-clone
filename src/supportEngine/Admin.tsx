import React from 'react'
import {ChatEngine} from "react-chat-engine"

export default function ChatAdmin() {
  return (
   
      <ChatEngine
        projectID={process.env.REACT_APP_TPS_CE_ID}
        userName="Dave from TPS"
        userSecret="235523"
      />

  )
}
