import { useState, useEffect, useContext } from 'react'
import UserContext from '../contexts/UserContext';
import { Link } from "react-router-dom";
import RestaurantTile from "../components/RestaurantTile";
import { getBakeries } from '../api/authApi';

export default function Home() {
  const userToken = useContext(UserContext)
  
  const [bakeries, setBakeries] = useState([]);

  const createBakeriesList = () => {
    return bakeries.map((bakery, index) => (
      <div className="col py-3">
        <Link to={`/bakeries/${bakery.id}`} state={{ bakery: bakery }}>
          <RestaurantTile key={index} name={bakery.name} address={bakery.address} />
        </Link>
      </div>
    ))
  }

  useEffect( () => {
    async function performGetBakeries() { // get all bakeries API call
      console.log("Getting bakeries...")
      const bakeries = await getBakeries(userToken)
      setBakeries(bakeries)
      console.log(bakeries)
    }
    if(userToken) {
      performGetBakeries()
    } 
  }, [userToken])

    return (
      createBakeriesList()
    );
  }