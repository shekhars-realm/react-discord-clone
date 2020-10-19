import React from 'react'
import './SidebarChannel.css'

function SidebarChannel({ id, channelName }) {
    return (
        <div id={id} className="sidebarChannel">
            <h4>
                <span class="sidebarChannel__hash">#</span>{channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
