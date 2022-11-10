import React from 'react'
import {Date} from '../../utility/Functions'
import './Booking.scss'

const Booking = () => {
    console.log(Date(2,3))
  return (
    <div className="BookingContainer">

    <div className="BookingContainerInfo">
        <h2>Find dit værelse</h2>
        <p>Hvor vil du hen og hvornår vil du det?</p>
    </div>

    <div>
    <label for="cars">Destination:</label>
        <select name="Destination" id="Destination">
            <option value="volvo">test1</option>
            <option value="saab">test2</option>
            <option value="opel">test3</option>
            <option value="audi">test4</option>
        </select>
    </div>

    <div>
    <label for="cars">Check-in:</label>
        <input type="date" value={"2018-07-22"}
       min="2018-01-01" max="2018-12-31"></input>
    </div>

    <div>
    <label for="cars">Check-ud:</label>
    <input type="date"></input>

    </div>

    <div>
    <label for="cars">Antal personer:</label>
        <select name="Destination" id="Destination">
            <option value="volvo">test1</option>
            <option value="saab">test2</option>
            <option value="opel">test3</option>
            <option value="audi">test4</option>
        </select>
    </div>
    </div>
  )
}

export default Booking
