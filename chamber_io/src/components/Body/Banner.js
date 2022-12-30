import React from 'react'
import './banner.css';
import { Parallax } from 'react-parallax';
function Banner() {
    return (
        <>
            <Parallax strength={-600} >

                <div className='banner'>

                    <h3>A creative coalition focused on art development and movement for an artist's journey</h3>
                    <h5>• s o l i t u d e • c e n t e r • r e l e a s e • </h5>

                </div>
            </Parallax>
        </>
    )
}

export default Banner