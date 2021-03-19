import React from "react";
import "./Sidebar.css";
import {
  Twitter as TwitterIcon,
  ArrowLeftOutlined as LeftArrowIcon,
  ArrowRightOutlined as RightArrowIcon,
} from "@material-ui/icons";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import SidebarOption from "./SidebarOption";
import { Button, IconButton } from "@material-ui/core";
import classNames from 'classnames'

function Sidebar() {
  const [activeType, setActiveType] = React.useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  return (
    <div className={classNames('sidebar', { sidebar__shrinked: isSidebarOpen})}>
      {/* TwitterIcon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOptions />

      {/** Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <LeftArrow />
    </div>
  );

  function SidebarOptions() {
    return [
      "home",
      "explore",
      "notifications",
      "messages",
      "bookmarks",
      "lists",
      "profile",
      "more",
    ].map((type, index) => (
      <SidebarOption
        key={index}
        type={type}
        onClick={() => handleOptionClick(type)}
        active={activeType === type}
      />
    ));
  }

  function LeftArrow(props) {
    return (
      <IconButton onClick={()=>setIsSidebarOpen(p=>!p)}>
        <LeftArrowIcon />
      </IconButton>
    );
  }

  function handleOptionClick(type) {
    setActiveType(type);
  }
}

export default Sidebar;
