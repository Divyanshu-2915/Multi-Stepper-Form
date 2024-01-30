import React, { useState } from "react";
import './lastpage.css';
import ScreenLoading from "../Loading/loadingscreen";

function Greeting() {

    const [pageLoad, setPageLoad] = useState(true);

    setTimeout(() => {
        setPageLoad(false)
    }, 2000);

    const redirectPage = () => {
        setTimeout(() => {
            window.location.replace('./UserInfo')
        }, 2000);
    }
    return (
        <>

            <div className="main-box">
                <h1>Thank You For The Information</h1>
                <h4>Your details has been submitted to us </h4>
            </div>
            {pageLoad ? <ScreenLoading /> :
                <div className="semi-box">
                    <h4>Want to fill another form </h4>
                    <button onClick={redirectPage} className="main-btn"> Main Page </button>
                </div>
            }
        </>
    )
}

export default Greeting;