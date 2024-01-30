import React from "react";
import { useState } from "react";
import '../CSS Sheet/main.css';

function JobInfo() {
    const [jobData, setJobData] = useState({});
    const [error, setError] = useState({});

    const addData = (event) => {
        event.preventDefault();
        console.log(jobData);
        localStorage.setItem("JobInfo", JSON.stringify(jobData));
        setTimeout(() => {
            window.location.replace('./lastpage');
        }, 5000);
    }

    return (
        <>
        <div className="fade-in-text">
                <h1> Registration Form </h1>
                <h3>Job Details </h3>
            </div>
            <div className="main-form">
            <form onSubmit={addData} autoComplete="off" className="user-form">
                <label>Job Title</label>
                <input type="text" id="job" name="job-title"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, job: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, jobtitle: event.target.value }))
                        };
                    }} />
                <p className = "form-error">{error.job}</p>

                <label>Company Name</label>
                <input type="text" id="company" name="company-name"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, company: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, companyname: event.target.value }))
                        };
                    }} />
                <p className = "form-error">{error.company}</p>

                <label>Experiance ( In Years)</label>
                <input type="text" id="exp" name="exp"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, exp: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, experiance: event.target.value }))
                        };
                    }} />
                <p className = "form-error">{error.exp}</p>

                <label>Joining Date</label>
                <input type="date" id="joindate" name="joindate"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, date: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, joindate: event.target.value }))
                        };
                    }} />
                <p className = "form-error">{error.date}</p>

                <button type="submit" className="form-btn">Submit</button>
            </form>
            </div>
        </>
    )
}

export default JobInfo;;