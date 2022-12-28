import React from 'react';
import { BsInstagram } from "react-icons/bs";
import './footer.css'

const currentDate = new Date();

function Footer() {
    return (
        <section className='Footer'>


            <div className="footer_follow">
                <div className='footer_block1'>
                    <h5>Chamber /ˈCHāmbər/</h5>
                    <p>A mindset to evolve and push boundaries in an atmosphere for focus, intention and growth.</p>
                </div>

                <div className='footer_block2'>
                    <h5>NFT Collection</h5>
                    <a className="link_highlight" href="https://foundation.app/@chamber.io" target="_blank" rel="noopener noreferrer">SOULs on FOUNDATION </a>
                </div>

                <div className='footer_block3'>
                    <h5>Social Media</h5>
                    <a class="footer_link" href="https://www.instagram.com/chamber.io/" target="_blank" rel="noopener noreferrer">
                        <div className='footer_icon_bg'>
                            <BsInstagram className='ig_icon' /></div>
                    </a></div>
            </div>

            <p className="copyright">© {currentDate.getFullYear()} Chamber.IO LLC | Chicago, IL </p>

        </section >
    )
}

export default Footer;
