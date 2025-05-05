import React from "react";
import Card from "./Card";

const CardRow = () => {
    return (
<>
<div className="row">
    <div className="col-1"></div>
<div className="col-10 mt-4 d-flex justify-content-between">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
</div>
<div className="col-1"></div>
</div>
</>
    )
}




export default CardRow;