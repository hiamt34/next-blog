/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { NavLink, INavLink } from '.';
import Link from 'next/link'
const navLink = process.env.navLink as unknown as INavLink[]
export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                {/*logo*/}
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src="assets/img/logo-dark.png" alt="TTH BLOG" className="logo-dark" />
                        </a>
                    </Link>
                </div>
                {/*/*/}
                {/*navbar-collapse*/}
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav ml-auto mr-auto">
                        {
                            navLink.map((value, key) => {
                                return (
                                    <li className="nav-item" key={key}>
                                        <NavLink value={value} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/*/*/}
                {/*navbar-right*/}
                <div className="navbar-right ml-auto">

                    <div className="social-icones">
                        <ul className="list-inline">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100047428539037"
                                    target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCVN_pgMImGW_kPyL_VjpIQQ" target="_blank" rel="noreferrer">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="search-icon">
                        <i className="icon_search" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </div>
        </nav>

    );
}
