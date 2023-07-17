import React from 'react';
import css from "../Body/style.module.css";
import Bar from "../../resources/images/Group 6/Group 6.png";
import image1 from "../../resources/images/17391/17391.png";
import image2 from "../../resources/images/17391 (1)/17391.png";
import image3 from "../../resources/images/17391 (2)/17391.png";


const Body = () => {
  return (
    <div>
        <div className={css.hero}>
        <h1 className={css.heading}>GROUP TRIPS FOR 18-32 YEAR-OLDS</h1>
        <h4 className={css.subheading}>Travel with Like-Minded People</h4>
        <button className={css.button}> UPCOMING TRIPS</button>
        </div>
        <div className={css.flex1}>
            <div>
                <img src={Bar} alt='bar'/>
                <h4>WHAT WE DO</h4>
            </div>
            <p>When in City organizes group trips for 18 to 32 year-olds. We are a catalyst for fun, active and outdoorsy travel. Our itineraries are crafted on the premise of livin' it up, bringing to you the best of experiences.</p>
            <div>
                <img src={image1} alt='image1'/>
                <img src={image2} alt='image2'/>
                <img src={image3} alt='image3'/>
            </div>
        </div>
        
    </div>
  )
}

export default Body