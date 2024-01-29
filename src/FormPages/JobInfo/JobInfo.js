import React from "react";
import { useState } from "react";
import './JobInfo.css';

function JobInfo() {
    const [jobData, setJobData] = useState({});
    const [error, setError] = useState({});

    const addData = (event) => {
        event.preventDefault();
        console.log(jobData);
        localStorage.setItem("JobInfo", JSON.stringify(jobData));
    }

    return (
        <>
            <form onSubmit={addData}>
                <label>Job Title</label>
                <input type="text" id="job" name="job-title"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, job: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, jobtitle: event.target.value }))
                        };
                    }} />
                <p>{error.job}</p>

                <label>Company Name</label>
                <input type="text" id="company" name="company-name"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, company: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, companyname: event.target.value }))
                        };
                    }} />
                <p>{error.company}</p>

                <label>Experiance ( In Years)</label>
                <input type="text" id="exp" name="exp"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, exp: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, experiance: event.target.value }))
                        };
                    }} />
                <p>{error.exp}</p>

                <label>Joining Date</label>
                <input type="date" id="joindate" name="joindate"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, date: 'This feild is required' })); }
                        else {
                            setError({})
                            setJobData(prevData => ({ ...prevData, joindate: event.target.value }))
                        };
                    }} />
                <p>{error.date}</p>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default JobInfo;;