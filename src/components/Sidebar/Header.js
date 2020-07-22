import React from 'react'
import { Link } from "react-router-dom";
import perfil from './../../assets/perfil.png'


export default function Header() {

    return (
        <>

            <div className="sidebar-title">
                <Link to="/"> System </Link>

                <div id="close-sidebar">
                    <i className="fa fa-times"></i>
                </div>
            </div>
            <div className="sidebar-h">
                <div className="user-pic">
                    <img alt="Perfil"  src={perfil} />
                </div>
                <div className="user-info">
                    <span className="user-name">
                        <strong className="text-white"></strong>
                    </span>
                    <span className="user-role text-white">Administrator</span>
                    <span className="user-status">
                        <i className="fa fa-circle"></i>
                        <span>Online</span>
                    </span>
                </div>
            </div>

        </>
    )
}