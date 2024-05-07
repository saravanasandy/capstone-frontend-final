import axios from 'axios'

const API_URL = 'https://capstone-backend-final.onrender.com/api/flights'


// Create new Flight
const createFlight = async (flightData,token)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, flightData, config)

    return response.data

}

// Get user Flights
const getFlights = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }
  
  // Delete user Flight
  const deleteFlight = async (id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL +"/"+ id, config)
  
    return response.data
  }

const flightService = {
    createFlight,
    getFlights,
    deleteFlight
}

export default flightService