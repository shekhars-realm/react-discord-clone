import React from "react";
import "./ChatHeader.css";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded"
import HelpRoundedIcon from "@material-ui/icons/HelpRounded"

function ChatHeader() {
  return (
    <div class="chatHeader">
      <div class="chatHeader__left">
        <h3>
          <span class="chatHeader__hash">#</span>
          Channel Name
        </h3>
      </div>
      <div class="chatHeader__right">
        <NotificationIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div class="chatHeader__search">
          <input placeholder="Search" type="text"/>
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
