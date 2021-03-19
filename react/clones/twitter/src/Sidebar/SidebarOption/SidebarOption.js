import React from "react";
import classNames from 'classnames'
import "./SidebarOption.css";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  MailOutline as MailOutlineIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ListAlt as ListAltIcon,
  PermIdentity as PermIdentityIcon,
  MoreHoriz as MoreHorizIcon
} from "@material-ui/icons";

function SidebarOption({ type,  active, ...rest }) {
  const [text, Icon] = getOptionDetails(type);
  return (
    <div className={classNames("sidebarOption", {'sidebarOption__active': active})} {...rest}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

function getOptionDetails(type) {
  switch (type) {
    case "home":
      return ["Home", HomeIcon];
    case "explore":
        return ['Explore', SearchIcon]
    case "notifications":
        return ['Notifications', NotificationsNoneIcon]
    case 'messages':
        return ['Messages', MailOutlineIcon]
    case 'bookmarks':
        return ['Bookmarks', BookmarkBorderIcon]
    case 'lists':
        return ['Lists', ListAltIcon]
    case 'profile':
        return ['Profile', PermIdentityIcon]
    case 'more':
        return ['More', MoreHorizIcon]
  }
}
