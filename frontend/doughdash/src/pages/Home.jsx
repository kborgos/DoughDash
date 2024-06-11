import { useState, useEffect } from 'react'
import RestaurantTile from "../components/RestaurantTile";

export default function Home() {
  const [bakeries, setBakeries] = useState([]);

  // get all bakeries API call
  useEffect(() => {
    const fetchCarData = async () => {
      // function to get API data
      const apiData = await fetch("http://localhost:8000/restaurants/"); // get Response from API
      const bakeriesApiJSON = await apiData.json(); // Response --> JSON
      setBakeries(bakeriesApiJSON);
      console.log(bakeries)
    };

    fetchCarData(); // run API data getter
  }, []);

    return (
      <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">Home Page</h1>
          <div className="restaurant-grid container">
            <div className="row">
              <RestaurantTile />
              <RestaurantTile />
              <RestaurantTile />
              <RestaurantTile />
              <RestaurantTile />
              <RestaurantTile />
              <RestaurantTile />
              <RestaurantTile />
            </div>
          </div>
        </div>
      </main>
    );
  }