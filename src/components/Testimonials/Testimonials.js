import React from 'react'
import "./Testimonials.css"
import photo from "../Image.svg"

import photo1 from "../images/image 25.svg"
import photo2 from "../images/image 27.svg"
import photo3 from "../images/image 28.svg"
import photo4 from "../images/image 29.svg"
import photo5 from "../images/image 30.svg"
import photo6 from "../images/image 31.svg"
import email from "../images/Group 46.svg"
function Testimonials() {
  return (
    <>
<div className="testimonials">
    <div className="container">
<div className="left-testimonials">
<h4 className='title-testimonials'>Testimonials</h4>
<h2 className='title2-testimonials'>What People Say
About Us.</h2>
</div>

<div className="right">
    <div className="card">
    <img src={photo} className='img-testimonials' alt="" />
        <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
        <h5>Mike taylor</h5>
        <h3>Lahore, Pakistan</h3>
    </div>
    {/* <img src={photo} className='img-testimonials' alt="" /> */}
    <div className="info-bottom">
    <p>Chris Thomas</p>
    <p>CEO of Red Button</p>
</div>
</div>

    </div>
    <div className="loading">
    <span></span>
    <div></div>
    <div></div>
</div>
</div>
<div className="photos">
    <img src={photo1} alt="" />
    <img src={photo2} alt="" />
    <img src={photo3} alt="" />
    <img src={photo4} alt="" />
    <img src={photo5} alt="" />
    <img src={photo6} alt="" />
</div>
<div className="subscripe">
   <div className="container">
 
        <p>Subscribe to get information, latest news and other
interesting offers about Cobham</p>


   <div className="input-search">
 <div className="input">
 <input type="text" placeholder='Your email' />
   <img src={email} alt="" />
 </div>
   <button>Subscribe</button>
   </div>
   </div>
</div>

</>
  )
}



export default Testimonials