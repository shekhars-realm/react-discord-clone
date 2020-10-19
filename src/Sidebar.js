import React from 'react'
import './Sidebar.css'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import MicIcon from "@material-ui/icons/Mic"
import CallIcon from "@material-ui/icons/Call";
import SettingsIcon from "@material-ui/icons/Settings";
import HeadsetIcon from "@material-ui/icons/Headset";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Avatar from "@material-ui/core/Avatar"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'

function Sidebar() {
  const user = useSelector(selectUser)
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

        <div class="sidebar__voice">
          <SignalCellularAltIcon className="sidebar__voiceIcons" fontSize="large"/>
          <div class="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div class="sidebar__voiceIcons">
            <InfoOutlinedIcon/>
            <CallIcon/>
          </div>
        </div>
        <div class="sidebar__profile">
          <Avatar onClick={() => auth.signOut()} src={user.photo}/>
          <div class="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0,5)}</p> 
          </div>
          <div class="sidebar__profileIcons">
            <MicIcon/>
            <HeadsetIcon/>
            <SettingsIcon/>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
