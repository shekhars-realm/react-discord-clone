import React from 'react'
import './Message.css'
import {Avatar} from '@material-ui/core'

function Message() {
    return (
        <div class="message">
            <Avatar />
            <div class="message__info">
                <h4>
                    username
                    <span class="message__timestamp">timestamp</span>
                </h4>
                <p>This is a message.</p>
            </div>
        </div>
    )
}

export default Message
