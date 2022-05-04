// react
import React from "react";


function Footer(){

    return(
        <>

            <section style={{marginBottom: '120px'}}></section>


                {/* Credit: bootstrap5  (source: https://getbootstrap.com/docs/5.0/examples/) */}
                <footer id="footer" class="footer">
                    <div class="container">
                        <footer class="py-3 my-4">
                            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                <li class="nav-item"><a href="mailto:warinsaipanya471@protonmail.com" class="nav-link px-2 text-muted"><i class="ri-mail-unread-fill"></i></a></li>
                                <li class="nav-item"><a href="https://follow-my-ig.web.app/" class="nav-link px-2 text-muted"><i class="ri-instagram-fill"></i></a></li>
                                <li class="nav-item"><a href="https://add-friends-7eead.web.app/" class="nav-link px-2 text-muted"><i class="ri-line-fill"></i></a></li>
                                <li class="nav-item"><a href="https://add-friend-github.web.app/" class="nav-link px-2 text-muted"><i class="ri-github-fill"></i></a></li>
                                <li class="nav-item"><a href="https://join-group-discord.web.app/" class="nav-link px-2 text-muted"><i class="ri-discord-fill"></i></a></li>
                            </ul>
                            <p class="text-center text-dark">&copy; 2022 All Rights Reserved.</p>
                        </footer>
                    </div>
                </footer>

        </>     
    );
};

export{ Footer };