//npm modules
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//css
import './StarshipDetails.css'

//services
import { getStarshipDetails } from "../../services/sw-api"


const StarshipDetails = () => {
  const[starshipDetails, setStarshipDetails] = useState({})
  const {starshipId} = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      //API Call
      const starshipData = await getStarshipDetails(starshipId)
      //set state
      setStarshipDetails(starshipData)
      console.log(starshipData)
    }
    fetchDetails()
    console.log('components here')
  }, [starshipId])

if(!starshipDetails.length) return <h1>Rebooting defense systems...please wait</h1>

  return (
    <div className="starship-container">
      <div className="starship-details-container">
      <h1>Model: {starshipDetails.model}</h1>
      <h1>Name: {starshipDetails.name}</h1>
      <Link to='/'>Back To The Ship Hanger</Link>
      </div>
      
    </div>
  )
}

export default StarshipDetails 