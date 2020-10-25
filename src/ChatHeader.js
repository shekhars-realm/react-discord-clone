import React from "react";
import "./ChatHeader.css";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded"
import HelpRoundedIcon from "@material-ui/icons/HelpRounded"
import { useSelector } from "react-redux";
import {selectChannelName} from "./features/appSlice"

function ChatHeader() {
  const channelName = useSelector(selectChannelName);
  return (
    <div class="chatHeader">
      <div class="chatHeader__left">
        <h3>
          <span class="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div class="chatHeader__right">
        <NotificationIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div class="chatHeader__search">
          <input placeholder="Search" type="text" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
