import React from 'react'
import about_vid from '../../images/about_vid.mp4'
import './about.css'

function About() {
    return (
        <>
            <div id='about'> </div>
            <div className='about' >

                <div className="about_block1">
                    <video className="about_vid" autoPlay loop muted playsInline>
                        <source src={about_vid} type="video/mp4" />
                    </video>
                </div>
                <div className="about_block2">
                    <p> <span className='chamber_about'>[CHAMBER]</span> was formed to bridge the movement world and the art world, but is quickly becoming much more than just that; it's a mindset to evolve and push boundaries in an atmosphere for focus, intention and growth. We provide a curation of teachers from around the nation who bring with them their own customized lesson plans, training methods, and teaching philosophies to maximize your potential.</p>
                </div>
            </div>

        </>
    )
}

export default About