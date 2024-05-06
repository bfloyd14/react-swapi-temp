//npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//css
import './Starships.css'

//services
import { getAllStarships } from "../../services/sw-api"

const Starships = () => {
  const[allStarships, setAllStarships] = useState([])
  
  useEffect(() => {
    //API Call
    const fetchAllStarships = async () => {
      const starshipsData = await getAllStarships()
      console.log(starshipsData)
      //Set State
      setAllStarships(starshipsData.results)
      console.log('component has landed')
    }
      fetchAllStarships()
  }, [allStarships])

if(!allStarships.length) return <h1>Please wait, ships are refueling..</h1>

  return ( 

    <div className="starships-container">
      <div className="card-container">
        {allStarships.map((starship,idx) => {
        return <div className="starship-card" key={idx}>
            <Link>{starship.name}</Link>
          </div>
        })}
      </div>
    </div>

  )
}

export default Starships 