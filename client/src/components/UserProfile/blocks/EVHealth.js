// variables line 17 and line 47
import React, { useState, useEffect } from 'react';
import "./EVHealth.css";

  
const RatingComponent = ({valueused}) => {

    const clr = (valueused<20)? '#f00': (valueused<40)? '#ff8000': (valueused<60)? '#ffcc00': '#00ff00';

    const [ratingBlocks, setRatingBlocks] = useState([]);
  
    useEffect(() => {
      const blocks = [];
      for (let i = 1; i <= 100; i++) {
        const ratingBlockStyle = {
          transform: `rotate(${3.6 * i}deg)`,
        //   animationDelay: `${i / 40}s`,
        };
  
        if (i <= (valueused)) {
          ratingBlockStyle.background = clr;
          ratingBlockStyle.boxShadow = '0 0 15px ' + clr + ', 0 0 30px ' + clr;
          //  #0f0, 0 0 30px #0f0';
        }
  
        blocks.push(
          <div
            key={i}
            className="ev_block"
            style={ratingBlockStyle}
          ></div>
        );
      }
      setRatingBlocks(blocks);
    }, []);
    return (
      <div>
        <div className="ev_rating">
          {ratingBlocks}
        </div>
      </div>
    );
};


const EVHealth = ({healthvalue}) => {
    return (
      <div className="evhealth">
        <div className="ev_card">
            <div className="ev_rating">
                <RatingComponent valueused={healthvalue}/>
                <h2><span className="ev_counter" data-target="">{healthvalue}% <br/> Health</span></h2>
                <div className="ev_block"></div>
            </div>
        </div>
      </div>
    );
}
export default EVHealth;

