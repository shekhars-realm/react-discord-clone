import React from 'react'
import './Sidebar.css'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'

function Sidebar() {
    return (
      <div class="sidebar">
        <div class="sidebar__top">
          <h3>Discord</h3>
          <ExpandIcon />
        </div>
        <div class="sidebar__channels">
          <div class="sidebar__channelHeader">
            <div class="sidebar__header">
              <ExpandIcon />
              <h4>Text channels</h4>
            </div>
            <AddIcon className="sidebar__addChannel" />
          </div>
          <div class="sidebar__channelList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
        </div>
      </div>
    );
}

export default Sidebar
