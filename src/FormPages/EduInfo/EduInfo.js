import React from "react";
import { useState } from "react";
import './EduInfo.css';

function EducationInfo() {
    const [eduData, setEduData] = useState({});
    const [error, setError] = useState({});

    const addData = (event) => {
        event.preventDefault();
        console.log(eduData);
        localStorage.setItem("EduInfo", JSON.stringify(eduData));
    }

    return (
        <>
            <form onSubmit={addData}>
                <label>School/University</label>
                <input type="text" id="school" name="school"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, schoolname: 'This feild is required' })); }
                        else {
                            setError({})
                            setEduData(prevData => ({ ...prevData, school: event.target.value }))
                        };
                    }} />
                <p>{error.schoolname}</p>

                <label>Degree/Course</label>
                <input type="text" id="degree" name="degree"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, course: 'This feild is required' })); }
                        else {
                            setError({})
                            setEduData(prevData => ({ ...prevData, degree: event.target.value }))
                        };
                    }} />
                <p>{error.course}</p>

                <label>Major/Field of Study</label>
                <input type="text" id="major" name="major"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, field: 'This feild is required' })); }
                        else {
                            setError({})
                            setEduData(prevData => ({ ...prevData, field: event.target.value }))
                        };
                    }} />
                <p>{error.field}</p>

                <label>Graduation Year:</label>
                <input type="date" id="graduationYear" name="graduationYear" min="1997" max="2024"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, year: 'This feild is required' })); }
                        else {
                            setError({})
                            setEduData(prevData => ({ ...prevData, year: event.target.value }))
                        };
                    }} />
                <p>{error.year}</p>

                <label >GPA/CGPA/Percentage</label>
                <input type="text" id="gpa" name="gpa" pattern="\d+(\.\d{1,2})?" title="Enter a valid GPA"
                    onBlur={(event) => {
                        if (!event.target.value) { setError(prevError => ({ ...prevError, cgpa: 'This feild is required' })); }
                        else {
                            setError({})
                            setEduData(prevData => ({ ...prevData, cgpa: event.target.value }))
                        };
                    }} />
                <p>{error.cgpa}</p>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EducationInfo;