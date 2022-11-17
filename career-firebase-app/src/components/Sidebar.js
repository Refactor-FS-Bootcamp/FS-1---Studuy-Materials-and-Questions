import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const recentItem = topic => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="background.jpg" alt="Background" /> 
                <Avatar className="sidebar__avatar" /> 
                <h2>Nabendu Biswas</h2> <h4>nabendu.biswas@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,544</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,300</p> </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p> 
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("developer")}
                {recentItem("javascript")}
                {recentItem("design")}
            </div>
        </div>
    )
}

export default Sidebar