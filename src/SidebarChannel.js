import React from 'react'
import './SidebarChannel.css'
import {setChannelInfo} from './features/appSlice'
import { useDispatch } from 'react-redux'

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch()
    return (
        <div id={id} className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4>
                <span class="sidebarChannel__hash">#</span>{channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
