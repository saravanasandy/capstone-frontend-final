import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FaCartPlus} from 'react-icons/fa'
import { createFlight } from '../features/flights/flightSlice';

const FlightForm = () => {
    
    const [bookingData, setBookingData] = useState({
        Destination_From:"",
        Destination_To :"",
        Journey_Date:"",
        Guests:"",
        ClassType:"",
      });
      
      const dispatch = useDispatch()
  

      const {Destination_From, Destination_To , Journey_Date, Guests, ClassType} = bookingData;

      const onChange = (e)=>{
        setBookingData((prevState)=>({
          ...prevState,
          [e.target.name] : e.target.value,
        }))
      }
  
      const onSubmit = (e)=>{
        e.preventDefault();
        const bookingDetails = {
          Destination_From,
          Destination_To,
          Journey_Date,
          Guests,
          ClassType,
        }
        console.log(bookingDetails);
        dispatch(createFlight(bookingDetails))
        // setBookingData('')
  
  
      }



  return (
   <>
   <div className='container-form'>
      <form className='form' onSubmit={onSubmit}>
        <div className = "form-content">
          <p>Destination From</p>
          <div>
            <select className='select-option from-select' name='Destination_From' id='Destination_From' value={Destination_From} onChange={onChange} required>
              <option value='' hidden className='option'>Please Select</option>
              <option className='option'>New York</option>
              <option className='option'>London</option>
              <option className='option'>France</option>
              <option className='option'>Germany</option>
              <option className='option'>India</option>
              <option className='option'>Brazil</option>
              <option className='option'>Malaysia</option>
              <option className='option'>Sri Lanka</option>
              <option className='option'>Kuwait</option>
              <option className='option'>Austria</option>
              <option className='option'>Mexico</option>
              <option className='option'>Uzbekistan</option>
              <option className='option'>Poland</option>
              <option className='option'>Switzerland</option>
            </select>
          </div>
        </div>

        <div className = "form-content">
          <p>Destination To</p>
          <div>
            <select className='select-option to-select' name='Destination_To' id='Destination_To' value={Destination_To} onChange={onChange} required>
              <option value="" hidden>Please select</option>
              <option> Pakistan</option>
              <option> Bangladesh</option>
              <option> Qatar</option>
              <option> Australia</option>
              <option> Italy</option>
              <option> Turkey</option>
              <option> Iran</option>
              <option> Zimbabwe</option>
              <option> Sweden</option>
              <option> India</option>
              <option> Canada</option>
              <option> Colombia</option>
              <option> China</option>
            </select>
          </div>
        </div>

        <div className = "form-content">
          <p>Journey Date</p>
          <input type='date' className='select-option' name='Journey_Date' id='Journey_Date' value={Journey_Date} onChange={onChange} required />
        </div>

        <div className = "form-content">
          <p>Guests</p>
          <div>
            <select className='select-option' name='Guests' id='Guests' value={Guests} onChange={onChange} required>
              <option value="" hidden> Please select</option>
              <option value="1"> 1 Person </option>
              <option value="2"> 2 Person </option>
              <option value="3"> 3 Person </option>
              <option value="4"> 4 Person </option>
            </select>
          </div>
        </div>

        <div className = "form-content">
          <p>Class Type</p>
          <div>
            <select className='select-option' name='ClassType' id='ClassType' value={ClassType} onChange={onChange} required>
              <option value="" hidden> Please Select</option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>
        </div>


        <div className = "form-content">
          <button className='select-option book'> 
               <FaCartPlus/>
             Booking 
         </button>
        </div>
        
      </form>
    </div>
   </>
  )
}

export default FlightForm