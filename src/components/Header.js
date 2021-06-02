import React from 'react'
import '../styles/Header.css'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Header = () => {
    return (
        <>
            <header>
                <div className="header_left">
                    <Button>
                        <MenuIcon />
                    </Button>
                    <div className="logo_container">
                        <img src={logo} alt="" className="logo" />
                        <h1 className="logo_title">RD Keep</h1>
                    </div>
                </div>
                <div className="search_container">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search in Drive" />
                </div>
                <div className="header_center">
                    <Button>
                        <RefreshOutlinedIcon />
                    </Button>
                    <Button>
                        <DnsOutlinedIcon />
                    </Button>
                    <Button>
                        <SettingsOutlinedIcon />
                    </Button>
                </div>
                <div className="header_right">
                    <Button>
                        <AppsOutlinedIcon />
                    </Button>
                    <Button>
                        <AccountCircleOutlinedIcon />
                    </Button>
                </div>
            </header>
        </>
    )
}

export default Header
