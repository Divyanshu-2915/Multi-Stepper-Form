import React, { useState } from "react";
import StateData from './UserState.json';
import './UserInfo.css';

function UserDetails() {
    const [selectedState, setSelectedState] = useState('');
    //const [disable, setDisable] = useState(true);
    let [stateCities, setStateCities] = useState([]);
    const [pageError, setPageError] = useState({});
    const [codeError, setCodeError] = useState(false);
    const [userData, setUserData] = useState({});

    const SelectState = (event) => {
        const StateName = event.target.value;
        const StateSelected = StateData.States.find((state) => state.name === StateName);
        console.log(StateSelected);
        setSelectedState(StateName);

        const showCity = StateSelected.city;
        //console.log(showCity);
        setStateCities(showCity);
        console.log(stateCities);
    }
    /*
        const checkData = (event) => {
            const userInfo = event.target.value;
            console.log(userInfo);
            if(!userInfo){
                setIsVisible((current) => !current);
            } else {
                setIsVisible((current) => current);
            }
        }
    */
    const checkCode = (event) => {
        const userCode = event.target.value;
        console.log(userCode.length);
        if (userCode.length !== 6) {
            setCodeError((current) => !current);
        }
        // if (userCode.length > 5 || userCode.length < 5) {
        //     setCodeError((current) => !current);

        // } else {
        //     // setCodeError((current) => !current);
        // }
    }

    const submitData = (event) => {
        event.preventDefault();
        console.log(userData);
        localStorage.setItem("formData", JSON.stringify(userData));
    }

    return (
        <>
            <form>
                <label> First Name </label>
                <input type="text" name="First-name" placeholder="First Name" onBlur={(event) => {
                    if (!event.target.value) { setPageError(prevError => ({ ...prevError, firstname: 'This feild is required' })); }
                    else { setPageError({})
                    setUserData(prevData => ({...prevData, firstname: event.target.value})) };
                }} />
                <p>{pageError.firstname}</p>
                <label> Last Name </label>
                <input type="text" name="Last-name" placeholder="Last Name" onBlur={(event) => {
                    if (!event.target.value) { setPageError(prevError => ({ ...prevError, lastname: 'This feild is required' })); }
                    else { setPageError({})
                     setUserData(prevData => ({...prevData, lastname: event.target.value}))};
                }} />
                <p>{pageError.lastname}</p>
                <label> Email </label>
                <input type="email" name="email" placeholder="E-Mail" onBlur={(event) => {
                    if (!event.target.value) { setPageError(prevError => ({ ...prevError, email: 'This feild is required' })); }
                    else { setPageError({}) 
                    setUserData(prevData => ({...prevData, email: event.target.value}))};
                }} />
                <p>{pageError.email}</p>
                <label> Number </label>
                <input type="tel" name="number" placeholder="Phone Number" onBlur={(event) => {
                    if (!event.target.value) { setPageError(prevError => ({ ...prevError, number: 'This feild is required' })); }
                    else { setPageError({})
                    setUserData(prevData => ({...prevData, number: event.target.value})) };
                }} />
                <p>{pageError.number}</p>
                <label> Address </label>
                <input type="text" name="address" placeholder="Address" onBlur={(event) => {
                    if (!event.target.value) { setPageError(prevError => ({ ...prevError, address: 'This feild is required' })); }
                    else { setPageError({}) 
                    setUserData(prevData => ({...prevData, address: event.target.value}))};
                }} />
                <p>{pageError.address}</p>
                <label> State </label>
                <select onChange={SelectState} value={selectedState}> Select State
                    {StateData.States.map((states) => {
                        return <option value={states.name}> {states.name} </option>
                    })}
                </select>
                <label> City </label>
                <select> Select City
                    {stateCities.map((city, index) => (
                        <option key={index} value={city}> {city}</option>
                    ))}
                </select>
                <label> Pin </label>
                <input type="tel" name="pincode" placeholder="Enter Pin Code " onBlur={checkCode} />
                {codeError && <p>Invalid Postal Code ( Length should not more than 5 numbers )</p>}
                <button onClick={submitData}> Submit </button>
            </form>
        </>
    )
}

export default UserDetails;

//---
