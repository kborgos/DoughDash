import { useState, useEffect, useContext } from 'react'
import CartContext from '../contexts/CartContext'
import { Link } from "react-router-dom";
import RestaurantTile from "../components/RestaurantTile";

export default function Home() {
  
  const cart = useContext(CartContext)
  const [bakeries, setBakeries] = useState([]);

  // get all bakeries API call
  useEffect(() => {
    const fetchBakeryData = async () => {
      // function to get API data
      const apiData = await fetch("http://localhost:8000/restaurants/"); // get Response from API
      const bakeriesApiJSON = await apiData.json(); // Response --> JSON
      setBakeries(bakeriesApiJSON);
      console.log(bakeries)
    };

    fetchBakeryData(); // run API data getter
  }, []);

    return (
      <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">Home Page</h1>
          <div className="restaurant-grid container">
            <div className="row">
              { bakeries.map((bakery, index) => (
                <div className="col py-3">
                  <Link to={`/bakeries/${bakery.id}`} state={{ bakery: bakery }}>
                    <RestaurantTile key={index} name={bakery.name} address={bakery.address} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }