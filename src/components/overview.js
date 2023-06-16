import React from 'react';
import "./overview.css";
import image from './user.png';

  const RectangleBox = () => {
    return(
       
        <div className="rectangle-box">
            <div className='user-details'>
                <img className='image-user' src={image}></img>
                <h5>Total Users</h5>
                <p>2500</p>


            </div>
        </div>
    );
  }

 

function overView(){
    return(
        <div>
            <h1 className="underline" >Over view</h1>
            <div className='grid-container'>
          <RectangleBox></RectangleBox>
          <RectangleBox></RectangleBox>
          <RectangleBox></RectangleBox>
          </div>
        </div>
    );
}


export default overView;



