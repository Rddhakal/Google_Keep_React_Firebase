import React from 'react'
import '../styles/SideBarOption.css'
import { Link } from "react-router-dom";

const SideBarOption = ({ title, link, icon }) => {
    return (
        <>
            <Link className="sidebar_option" to={link}>
                {icon}
                <p className="title">{title}</p>
            </Link>
        </>
    )
}

export default SideBarOption
