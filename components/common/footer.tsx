import React from 'react';

export const Footer = () => {
    return (
        <div>
            <section className="newslettre">
                <div className="container-fluid">
                    <div className="newslettre-width text-center">
                        <div className="social-icones">
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100047428539037"
                                        target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f" />Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram" />Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCVN_pgMImGW_kPyL_VjpIQQ" target="_blank" rel="noreferrer">
                                        <i className="fab fa-youtube" />Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright">
                                <p>© Copyright 2021 <a href="#">TTH-BLOG</a>, Codetoanbug06@gmail.com.</p>
                            </div>
                            <div className="back">
                                <a href="#" className="back-top">
                                    <i className="arrow_up" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
}

