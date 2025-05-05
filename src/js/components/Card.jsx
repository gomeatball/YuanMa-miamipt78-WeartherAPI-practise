import React from "react";



const Card = () => {
  return ( 
    <>
<div className="card" style={{ width: '16rem', height: '25rem' }}>
  <img src="..." class="card-img-top" alt="..." style={{height: '10rem' }} />
  <div className="card-body text-center">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
)
}



export default Card;