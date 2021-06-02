import React from 'react'
import '../styles/SideBar.css'
import SideBarOption from './SideBarOption'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const SideBar = () => {
    return (
        <>
            <div className="sidebr_container">
                <SideBarOption title="Notes" link="/" icon={<EmojiObjectsOutlinedIcon />} />
                <SideBarOption title="Reminders" link="/Reminders" icon={<NotificationsNoneOutlinedIcon />} />
                <SideBarOption title="Edit labels" link="/Reminders" icon={<CreateOutlinedIcon />} />
                <SideBarOption title="Archive" link="/Archive" icon={<ArchiveOutlinedIcon />} />
                <SideBarOption title="Trash" link="/Trash" icon={<DeleteOutlinedIcon />} />
            </div>
        </>
    )
}

export default SideBar
