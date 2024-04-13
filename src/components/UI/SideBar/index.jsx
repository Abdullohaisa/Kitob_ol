import s from "./style.module.scss";
import React, { useState } from "react";

// ICON
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Link from "next/link";

const SideBar = ({ bar, close }) => {
  return (
    <div className={bar ? s.openBar : s.bar}>
      <div>
        <ul>
          <img src="/images/logo.svg" alt="Logo" />
          <button onClick={() => close()}>
            {bar ? <ClearIcon /> : <MenuIcon />}
          </button>
        </ul>
       <Link onClick={() => close()} href='publisher-registration'><p onClick={() => close()}><span>E’lon berish</span></p>
       </Link>
        <p onClick={() => close()}>
          <FavoriteBorderIcon />
          <span>Sevimlilar</span>
        </p>
        <p onClick={() => close()}>
          <NotificationsNoneIcon />
          <span>Bildirishnomalar</span>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
