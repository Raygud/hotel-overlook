import React,{useState, useEffect} from 'react'
import {DateMaxMin} from '../../utility/Functions'
import './Booking.scss'
import axios from 'axios'

const Booking = () => {
    console.log(DateMaxMin("Min"))
    const [getArrivalDate, setArrivalDate] = useState(DateMaxMin("Min"))
    const [getDepartureDate, setDepartureDate] = useState();
    const [getDestination, setDestination] = useState()
    const [getGuestAmount, setGuestAmount] = useState(1)
    const [getData, setData] = useState([])
    const [fetchCountries, setFetchCountries] = useState();
    
    console.log(getArrivalDate)

    
    useEffect(() => {
        axios.get('https://api.mediehuset.net/overlook/countries')
          .then(function (response) {
            console.log(response)
            setFetchCountries(response.data.items)
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []); 
    


      const handleRequest = () => {
        if(getArrivalDate && getDepartureDate && getDestination && getGuestAmount){
            const destination = getDestination.slice(0,getDestination.length-1)
            const id = getDestination.slice(getDestination.length-1,getDestination.length)
        const data = [getArrivalDate,getDepartureDate,destination,getGuestAmount]
        console.log(data)
        axios.get(`https://api.mediehuset.net/overlook/cities/by_country/${id}`)
          .then(function (response) {
            console.log(response.data.items)
          })
          .catch(function (error) {
            console.log(error);
          });
        
        
        }
    }
    const handleArrival = (e) => {
        console.log(e.target.value)
        setArrivalDate(e.target.value)
    }
    const handleGuestAmount = (e) => {
        console.log(e.target.value)
        setGuestAmount(e.target.value)
    }
    const handleDeparture = (e) => {
        console.log(e.target.value)
        setDepartureDate(e.target.value)
    }
    const handleDestination = (e) => {
        console.log(e.target.value)
        setDestination(e.target.value)
    }

  return (
    <div className="BookingContainer">

    <div className="BookingContainerInfo">
        <h2>Find dit værelse</h2>
        <p>Hvor vil du hen og hvornår vil du det?</p>
    </div>

    <div>
    <label for="cars">Destination:</label>
        <select name="Destination" id="Destination" onChange={handleDestination}>
            <option disabled="disabled" selected="selected" hidden="hidden">Vælg destination</option>
        {fetchCountries? <>{fetchCountries.map((Country, index) => (
            <option value={Country.name+Country.id}>{Country.name}</option>
            ))}</>:<option>Loading..</option>}
        </select>
    </div>

    <div>
    <label for="cars">Check-in:</label>
        <input onChange={handleArrival} type="date" value={getArrivalDate? getArrivalDate:getDepartureDate} 
       min={DateMaxMin("Min")} max={getDepartureDate? getDepartureDate:DateMaxMin("Max")}></input>
    </div>

    <div>
    <label for="cars">Check-ud:</label>
    <input onChange={handleDeparture} type="date" value={getDepartureDate? getDepartureDate:getArrivalDate} 
       min={getArrivalDate? getArrivalDate:DateMaxMin("Min")} max={DateMaxMin("Max")}></input>
    </div>

    <div>
    <label for="GuestAmount">Antal personer:</label>
        <input value={getGuestAmount} onChange={handleGuestAmount}></input>
    </div>

    <div>
    <label for="GuestAmount">&nbsp;</label>

        <button onClick={handleRequest}>Søg</button>
    </div>
    </div>
  )
}

export default Booking
