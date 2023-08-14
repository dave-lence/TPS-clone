import React, { useState } from 'react'
import { BsFillChatDotsFill, BsX, BsCaretDown } from 'react-icons/bs'
import axios from 'axios'
import { Socket, ChatEngineWrapper, ChatFeed } from "react-chat-engine"

const SupportEngine = () => {

    const [showSupportMessege, setshowSupportMessege] = useState(true)
    const [showWindow, setShowWindow] = useState(false)


    return (
        <div>
            <SupportWindow displayWindow={showWindow} handleClose={() => setShowWindow(false)} />

            {showSupportMessege ? <SupportMessege handleClick={() => { setshowSupportMessege(false) }} /> : <div></div>}

            <SupportMessegeIcon displayWindow={showWindow} handleClose={() => setShowWindow(!showWindow)} />
        </div>


    )
}

export default SupportEngine

//
type wondowProps = {
    handleClose: () => void,
    displayWindow: boolean,
}
const SupportWindow = (props: wondowProps) => {
    const [email, setEmail] = useState("")
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)


    const getUser = (callback: any) => {
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": email,
                "email": email,
                "secret": email,
            },
            { headers: { "Private-Key": process.env.REACT_APP_TPS_CE_PRIVATE_KEY } }
        ).then((r) => callback(r.data))
    }

    const getChat = (callback: any) => {
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                "usernames": ["Dave from TPS", email],
                "is_direct_chat": true
            },
            { headers: { "Private-Key": process.env.REACT_APP_TPS_CE_PRIVATE_KEY } }
        ).then((r) => callback(r.data))
    }


    function handleSubmit(event: any) {
        event.preventDefault()
        console.log("sending email", email)

         
        getUser((user:any) => {
            setUser(user.email)
            getChat((chat: any) => console.log("success", setChat(chat.id)))
        }
        )
    }


    return (
        <div className=''>
            {
                props.displayWindow && (

                    <div className="top-10 mx-auto ml-10 fixed bottom-28 w-5/6 h-2/2 md:w-80 md:h-5/6  md:mr-5 md:top-4 md:bottom-32 md:right-20 z-50 rounded bg-white shadow-xl  ">
                        <div className="bg-blue-900  relative h-8 text-right py-2">
                            <BsX color='#fff' onClick={props.handleClose} size={20} className='absolute cursor-pointer right-3' />
                        </div>
                        {
                            user === null || chat == null ? (

                                <div className="space-y-5 px-7  mt-8 ">
                                    <p className='text-sm text-left'>Hello! 👋
                                        Welcome to CIS!
                                    </p >
                                    <p className='text-sm text-left'>Start a conversation now for an instant response from one of our real human operators!</p>
                                    <p className='text-sm text-left'>By chatting with us you agree to our privacy policy.</p>

                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <input className='border-2 text-center border-blue-400 outline-none px-1 text-sm w-full rounded-full p-2' placeholder='enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                                        <p className="text-sm mt-5">Enter your email to send a message!</p>
                                    </form>

                                </div>
                            )
                                :
                                (
                                    <ChatField chat={chat} user={user} />
                                )
                        }
                    </div>
                )
            }
        </div>
    )
}

//chat field
type chatProps = {
    chat: any,
    user: any
}
const ChatField = (props: chatProps) => {



    return (
        <div>
            <ChatEngineWrapper>
                <Socket
                    projectID={process.env.REACT_APP_TPS_CE_ID}
                    userName={props.user}
                    userSecret={props.user}
                />
                <ChatFeed
                    activeChat={props.chat}
                />
            </ChatEngineWrapper>
        </div>
    )
}


// support messege icon
type messegeIconProps = {
    handleClose: () => void
    displayWindow: boolean,
}
const SupportMessegeIcon = (props: messegeIconProps) => {
    return (
        <div className="text-7xl bg-blue-400 font-extrabold fixed hover:animate-pulse rounded-full p-4 shadow-lg shadow-black bottom-10 right-6">
            {
                props.displayWindow ?
                    (<BsCaretDown
                        onClick={props.handleClose}
                        size={30}
                        className="text-white hover:animate-bounce duration-200 transition cursor-pointer"
                    />
                    )

                    : (<BsFillChatDotsFill
                        onClick={props.handleClose}
                        size={30}
                        className="text-white hover:animate-bounce duration-200 transition cursor-pointer"
                    />
                    )
            }
        </div>
    )
}


// surpprt messege

type supportMessegeProps = {
    handleClick: () => void,
}
const SupportMessege = (props: supportMessegeProps) => {


    return (

        <div className="bg-white w-56 md:w-72 fixed  rounded-md p-4 shadow-lg shadow-black bottom-40 right-10">
            <div className="absolute w-10 h-10 bg-white -top-5 left-20 md:left-28 p-0.5 rounded-full">
                <img src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Neil-Lawson-Smith.jpg" alt="" className="rounded-full object-fill" />
            </div>
            <div className="absolute w-10 h-10 bg-white -top-5 left-10 md:left-20 p-0.5 rounded-full">
                <img src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Dan-Hadland.jpg" alt="" className="rounded-full object-fill" />
            </div>
            <div className="absolute w-10 h-10 bg-white -top-5 left-28 md:left-36 p-0.5 rounded-full">
                <img src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Matt-Grantham.jpg" alt="" className="rounded-full object-fill" />
            </div>
            <div onClick={props.handleClick} className="bg-gray-500 cursor-pointer p-1 absolute -top-2 -right-2 rounded-full">
                <BsX size={20} className="text-white hover:animate-spin" />
            </div>
            <p className="mt-2 text-xm md:text-base">Hi our real human operators are available to chat with, so if you have any question or help, just ask!</p>
        </div>
    )

}
