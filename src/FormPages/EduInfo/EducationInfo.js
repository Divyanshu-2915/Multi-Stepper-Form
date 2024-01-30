import React from "react";
import { useState } from "react";
import '../CSS Sheet/main.css';
import ScreenLoading from "../Loading/loadingscreen";

function EducationInfo() {
    const [eduData, setEduData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    const addData = (event) => {
        event.preventDefault();
        console.log(eduData);
        localStorage.setItem("EduInfo", JSON.stringify(eduData));
        setTimeout(() => {
            setLoading(true);
            <ScreenLoading/>
            window.location.replace('./JobInfo');
        }, 2000);
    }

    return (
        <>
            <div className="fade-in-text">
                <h1> Registration Form </h1>
                <h3>Education Details </h3>
            </div>
            {loading ? <ScreenLoading/> : 
            <div className="main-form">
                <form onSubmit={addData} autoComplete="off" className="user-form">
                    <label>School/University</label>
                    <input type="text" id="school" name="school"
                        onBlur={(event) => {
                            if (!event.target.value) { setError(prevError => ({ ...prevError, schoolname: 'This feild is required' })); }
                            else {
                                setError({})
                                setEduData(prevData => ({ ...prevData, school: event.target.value }))
                            };
                        }} />
                    <p className = "form-error">{error.schoolname}</p>

                    <label>Degree/Course</label>
                    <input type="text" id="degree" name="degree"
                        onBlur={(event) => {
                            if (!event.target.value) { setError(prevError => ({ ...prevError, course: 'This feild is required' })); }
                            else {
                                setError({})
                                setEduData(prevData => ({ ...prevData, degree: event.target.value }))
                            };
                        }} />
                    <p className = "form-error">{error.course}</p>

                    <label>Major/Field of Study</label>
                    <input type="text" id="major" name="major"
                        onBlur={(event) => {
                            if (!event.target.value) { setError(prevError => ({ ...prevError, field: 'This feild is required' })); }
                            else {
                                setError({})
                                setEduData(prevData => ({ ...prevData, field: event.target.value }))
                            };
                        }} />
                    <p className = "form-error">{error.field}</p>

                    <label>Graduation Year:</label>
                    <input type="date" id="graduationYear" name="graduationYear" min="1997" max="2024"
                        onBlur={(event) => {
                            if (!event.target.value) { setError(prevError => ({ ...prevError, year: 'This feild is required' })); }
                            else {
                                setError({})
                                setEduData(prevData => ({ ...prevData, year: event.target.value }))
                            };
                        }} />
                    <p className = "form-error">{error.year}</p>

                    <label >GPA/CGPA/Percentage</label>
                    <input type="text" id="gpa" name="gpa" pattern="\d+(\.\d{1,2})?" title="Enter a valid GPA"
                        onBlur={(event) => {
                            if (!event.target.value) { setError(prevError => ({ ...prevError, cgpa: 'This feild is required' })); }
                            else {
                                setError({})
                                setEduData(prevData => ({ ...prevData, cgpa: event.target.value }))
                            };
                        }} />
                    <p className = "form-error">{error.cgpa}</p>
                    <button type="submit" className="form-btn">Submit</button>
                </form>
            </div>
}
        </>
    )
}

export default EducationInfo;