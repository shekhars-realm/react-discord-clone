import React, {useState} from 'react'
import './Chat.css'
import Message from "./Message"
import ChatHeader from './ChatHeader'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { useSelector } from 'react-redux'
import { selectChannelName, selectChannelId } from './features/appSlice'
import { selectUser } from './features/userSlice'
import { useEffect } from 'react'
import db from "./firebase"
import firebase from "firebase"

function Chat() {
  const channelName = useSelector(selectChannelName)
  const channelId = useSelector(selectChannelId)
  const user = useSelector(selectUser)
  const [input, setInput]  = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() =>  {
    if(channelId){
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs.map((doc) => doc.data()));
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("")

  }

    return (
      <div class="chat">
        <ChatHeader />
        <div class="chat__messages">
          {
            messages.map(message =>  (
              <Message message={message}/>
            ))
          }
        </div>
        <div class="chat__input">
          <AddCircleIcon fontSize="large" />
          <form action="">
            <input disabled={!channelId} valuee={input} onChange={(e) => setInput(e.target.value)} placeholder={"Message Channel"} />
            <button onClick={sendMessage} class="chat__inputButton" type="submit">
              Send Message
            </button>
          </form>
          <div class="chat__inputIcons">
            <CardGiftcardIcon fontSize="large" />
            <GifIcon fontSize="large" />
            <EmojiEmotionsIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
}

export default Chat
