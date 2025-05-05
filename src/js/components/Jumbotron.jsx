import React from "react";

const Jumbotron = () => {
    return (
        <>
        <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-10 bg-body-secondary pt-4">
               <h1>A Warm Welcome!</h1>
        
              <p>
              "Lorem ipsum" is a placeholder text, a standard dummy text used in design and publishing industries to fill in spaces where actual content isn't yet available. It's a Latin-like text that serves as a visual aid, allowing designers and developers to focus on the layout and typography without being distracted by actual content. 
              </p>
               <a href="#" className="btn btn-primary mb-3">Call to action!</a>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}



export default Jumbotron;