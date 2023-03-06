import React from 'react'
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import { BsInstagram } from "react-icons/bs";

import img1 from '../../images/carousel/carousel1.jpg';
import img2 from '../../images/carousel/carousel2.jpg';
import img3 from '../../images/carousel/carousel3.jpg';
import img4 from '../../images/carousel/carousel4.jpg';
import img5 from '../../images/carousel/carousel5.jpg';
import img6 from '../../images/carousel/carousel6.jpg';
import img7 from '../../images/carousel/carousel7.jpg';
import img8 from '../../images/carousel/carousel8.jpg';
import img9 from '../../images/carousel/carousel9.jpg';
import img10 from '../../images/carousel/carousel10.jpg';
import img11 from '../../images/carousel/carousel11.jpg';
import img12 from '../../images/carousel/carousel12.jpg';
import img13 from '../../images/carousel/carousel13.jpg';
import img14 from '../../images/carousel/carousel14.jpg';
import img15 from '../../images/carousel/carousel15.jpg';
import img16 from '../../images/carousel/carousel16.jpg';
import img17 from '../../images/carousel/carousel17.jpg';
import img18 from '../../images/carousel/carousel18.jpg';
import img19 from '../../images/carousel/carousel19.jpg';
import img20 from '../../images/carousel/carousel20.jpg';
import bryan from '../../images/bryan1.png';
import tanya from '../../images/tanya.png';
import el_em from '../../images/el-em.png';


function Slider()  {
  return (
    <div className='main-container'>
    <div className='slider-block1'>
        <h1 className='session_title' id='photos'>Chamber V7 Feb 2023</h1>
<Carousel 
    className='slider-container'>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img1}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img2}
          alt="SChamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img
          className="custom-img"
          src={img3}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img
          className="custom-img"
          src={img4}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img5}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img6}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img7}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img8}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img9}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img10}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img11}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img12}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img13}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img14}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img15}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img16}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img17}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img18}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img19}
          alt="Chamber"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="custom-img"
          src={img20}
          alt="Chamber"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='slider-block2'>
      <h1 className='session_title'>Teachers:</h1>
      <div className='name-card'>
        <div className='card-img'>
          <img className='teacher-img' src={bryan} alt='Bryan'/>
        </div>
        <div className='card-info'>
        <div className='info-text-link'>
          <h2>Bryan Quiaoit</h2> 
          <a class="footer_link" href="https://www.instagram.com/bryan.quiaoit/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className='insta_icon' /></a>
          </div>
          <p>Choreography: Sticky by Drake</p>
        </div>
      </div>
      <div className='name-card'>
        <div className='card-img'>
          <img className='teacher-img' src={tanya} alt='Bryan'/>
        </div>
        <div className='card-info'>
        <div className='info-text-link'>
          <h2>Tanya</h2>
          <a class="footer_link" href="https://www.instagram.com/terehovate/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className='insta_icon' /></a>
        </div>
          <p>Waving: Freestyle and Concepts</p>
        </div>
      </div>
      <div className='name-card'>
        <div className='card-img'>
          <img className='teacher-img img3' src={el_em} alt='Bryan'/>
        </div>
        <div className='card-info'>
        <div className='info-text-link e_m_block'>
        <div className='e_m_tag1'>
          <h2>Ellaine Manuel</h2>
            <a class="footer_link" href="https://www.instagram.com/ellaine.manuel/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className='insta_icon' />
            </a>
        </div>
        <div className='e_m_tag2'>
          <h2>Emjay Mendez</h2>
          <a class="footer_link" href="https://www.instagram.com/emjaymendez/" target="_blank" rel="noopener noreferrer">
            <BsInstagram className='insta_icon' />
          </a>
        </div>
      </div>    
          <p className='e_m_text'>Collab Choreography: Talk by Khalid</p>
        </div>
      </div>
    </div>

</div>
  )
}
export default Slider;
