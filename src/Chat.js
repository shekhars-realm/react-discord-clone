import React from 'react'
import './Chat.css'
import Message from "./Message"
import ChatHeader from './ChatHeader'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

function Chat() {
    return (
      <div class="chat">
        <ChatHeader />
        <div class="chat__messages">
          <Message />
          <Message />
          <Message />
        </div>
        <div class="chat__input">
          <AddCircleIcon fontSize="large" />
          <form action="">
            <input placeholder={"Message Channel"} />
            <button class="chat__inputButton" type="submit">
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
