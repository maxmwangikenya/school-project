import React, { useRef } from 'react';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import './Testimonials.css';

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;

  // Function to slide forward
  const slideForward = () => {
    if (tx > -75) { // Adjust based on number of slides (each slide is 25% width)
      tx -= 25; // Move by 25% for each click
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  // Function to slide backward
  const slideback = () => {
    if (tx < 0) { // Allow sliding back only if tx is less than 0
      tx += 25; // Move back by 25%
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideback} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
