import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FlightForm from '../Components/FlightForm'
import { getFlights, reset } from '../features/flights/flightSlice'
import Spinner from '../Components/Spinner'
import FlightItem from '../Components/FlightItem'


const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=> state.auth)
    const {flights, isLoading, isError,message} = useSelector((state)=>state.flights)

    
     useEffect(() => {
      if (isError) {
        console.log(message);
      }
       
        if (!user) {
            navigate('/login')
        }

     dispatch(getFlights())
     
       return () => {
         dispatch(reset())
       }
     }, [])
     
    
     
     if (isLoading) {
      return <Spinner/>
     }

  return (
    <>
     <section className='heading'>
     <h1 className='heading-content'>welcome  	&nbsp; {user && user.name}</h1>
     <p>Flight Booking App</p>
    </section>

       <FlightForm/>
    
       <section className='content'>
      {flights.length > 0 ? 
      (<>
         <div className='goals'>
           {flights.map((flight)=>{
            return <FlightItem  key={flight._id} flight={flight}/>
           })}   
         </div>
      </> ) 
      :
       (<>
          <h3> you have not create any flight Booking</h3>
       </>)}
    </section>

    </>
  )
}

export default Dashboard