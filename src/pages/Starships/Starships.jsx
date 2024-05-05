//npm modules
import { useState, useEffect } from "react"

//services
import { getAllStarships } from "../../services/sw-api"

const Starships = () => {
  const[allStarships, setAllStarships] = useState([])
  
  useEffect(() => {
    //API Call
    const fetchAllStarships = async () => {
      const starshipsData = await getAllStarships()
      //Set State
      setAllStarships(starshipsData)
      console.log(starshipsData)
    }
      fetchAllStarships()
      console.log('component received')
  }, [])

if(!allStarships.length) return <h1>Please wait, ships are refueling..</h1>

  return ( 

    <div className="starships-container">
      All Starships
    </div>

  )
}

export default Starships 