import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import scr from './style.module.scss';

// ikonlar
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PublicIcon from '@mui/icons-material/Public';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearIcon from '@mui/icons-material/Clear';

const Header = ({ open, bar }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollDirection(currentPosition > scrollPosition ? "down" : "up");
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`${scrollDirection === "down" ? `${scr.header} ${scr.headerDown}` : ""} ${scrollDirection === "up" ? `${scr.header} ${scr.headerUp}` : ""}`}>
      <div className="container">
        <nav>
          <img src='/images/logo.svg' alt="" />
          <ul>
            <li><Link href='favourite'><FavoriteBorderIcon /></Link></li>
            <li><Link href='favourite'><NotificationsNoneOutlinedIcon /></Link></li>
            <li><Link href='favourite'><PersonOutlineOutlinedIcon /></Link></li>
            <li><Link href='favourite'><PublicIcon /></Link></li>
            <Link href='publisher-registration'><button>E'lon berish</button></Link>
          </ul>
          <p onClick={() => open()}>{bar ? <ClearIcon /> : <MenuOutlinedIcon />}</p>
        </nav>
      </div>
    </div>
  );
};

export default Header;
