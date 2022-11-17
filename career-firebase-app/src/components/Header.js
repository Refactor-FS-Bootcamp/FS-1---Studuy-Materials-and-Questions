import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="logo192.png" alt="logo" />
                <div className="header__search">
                    <Search />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption
                    avatar="https://pbs.twimg.com/profile_images/1429995288240934915/lfOMumLI_400x400.jpg" title="me" />
            </div>
        </div>
    )
}

export default Header