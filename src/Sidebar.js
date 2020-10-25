import React, { useEffect } from 'react'
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
import db, { auth } from './firebase'
import { useState } from 'react'
import { selectChannelName } from './features/appSlice'

function Sidebar() {
  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel . name.")
    if(channelName) {
      db.collection("channels").add({
        channelName: channelName
      }).then(res => {
        console.log(res)
      })
    }

  }

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>  setChannels(snapshot.docs.map(doc => ({
      id:  doc.id,
      channel:  doc.data(),
    }))))
  }, [])

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
            <AddIcon onClick={() => handleAddChannel()} className="sidebar__addChannel" />
          </div>
          <div class="sidebar__channelList">
          {
            channels.map(channel =>{
              return <SidebarChannel key={channel.channel.id} id={channel.id} channelName={channel.channel.channelName} />
            })
          }
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
