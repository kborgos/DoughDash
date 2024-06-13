import { useState, useEffect, useContext } from 'react'
import CartContext from '../contexts/CartContext'
import { useLocation } from "react-router-dom";
import MenuItemTile from "../components/MenuItemTile";

export default function BakeryPage({handleCart}) {

  const [items, setItems] = useState([]);
  const location = useLocation()
  const { bakery } = location.state

  // get all bakeries API call
  useEffect(() => {
    const fetchMenuData = async () => {
      // function to get API data
      const apiData = await fetch("http://localhost:8000/restaurants/" + bakery.id + "/"); // get Response from API
      const menuItemsJSON = await apiData.json(); // Response --> JSON
      setItems(menuItemsJSON["fields"]["menu_items"]);
      console.log(items)
    };

    fetchMenuData(); // run API data getter
  }, []);
  
    return (
      <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">{ bakery.name }</h1>
          { bakery.address }
          <h2 className="display-10 my-4 fw-bold">Menu Items</h2>
          <div className="menu-item-grid container">
            <div className="row">
              { items.map((item, index) => (
                <div className="col py-3">
                  <MenuItemTile key={index} name={item.name} description={item.description} price={item.price} category={item.category} handleCart={handleCart} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }