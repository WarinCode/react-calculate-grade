// import react
import React from "react";

// import style
import { footer , li , i} from "../style/style";
function Footer(){
    return(
        <>
            <section style={{marginBottom: '120px'}}></section>
                {/* Credit: bootstrap5  (source: https://getbootstrap.com/docs/5.0/examples/) */}
                <footer id="footer" class="footer">
                    <div class="container">
                        <footer class="py-3 my-4" style={footer}>
                            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                <li class="nav-item" style={li}><a href="mailto:warinsaipanya471@protonmail.com" class="nav-link px-2 text-muted"><i class="ri-mail-unread-fill" style={i}></i></a></li>
                                <li className="nav-item" style={li}><a href="https://add-friend-instagram.netlify.app/" className="nav-link px-2 text-dark"><i className="ri-instagram-fill" style={i}></i></a></li>
                                <li className="nav-item" style={li}><a href="https://add-friend-line.netlify.app/"   className="nav-link px-2 text-dark"><i className="ri-line-fill" style={i}></i></a></li>
                                <li className="nav-item" style={li}><a href="https://add-friend-github.netlify.app/"  className="nav-link px-2 text-dark"><i className="ri-github-fill" style={i}></i></a></li>
                                <li className="nav-item" style={li}><a href="https://discord-invite-029wedw.netlify.app/"  className="nav-link px-2 text-dark"><i className="ri-discord-fill" style={i}></i></a></li>
                            </ul>
                            <p class="text-center text-dark">&copy; 2022 All Rights Reserved.</p>
                        </footer>
                    </div>
                </footer>
        </>     
    )
}

export default Footer;