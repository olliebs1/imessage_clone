import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar />
                <div className="sidebar_input">
                    <SearchIcon/>
                    <input placeholder='Search'/>
                </div>

                <IconButton >
                    <RateReviewOutlinedIcon/>
                </IconButton>
            </div>

            <div className='sidebar_chats'>
            </div>
        </div>  
    )
}

export default Sidebar;
