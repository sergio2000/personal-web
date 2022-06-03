import React from "react";
import "./error.css";
import error from "./error.mp4";
function Error() {
    return(
        <video autoplay muted loop id="myVideo">
        <source src={error} type="video/mp4" /> 
        
     </video>
    );
}
export default Error;