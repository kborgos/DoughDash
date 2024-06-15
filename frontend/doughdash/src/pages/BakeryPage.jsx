import { useState, useEffect, useContext } from 'react'
import UserContext from '../contexts/UserContext';
import { useLocation } from "react-router-dom";
import MenuItemTile from "../components/MenuItemTile";
import { getMenuData } from '../api/authApi';

export default function BakeryPage({handleCart}) {
  const userToken = useContext(UserContext)

  const [items, setItems] = useState([]);
  const location = useLocation()
  const { bakery } = location.state

  const createMenuItemsList = () => {
    return items.map((item, index) => (
      <div className="col py-3">
        <MenuItemTile key={index} name={item.name} description={item.description} price={item.price} category={item.category} handleCart={handleCart} />
      </div>
    ))
  }

  // get all bakeries API call
  useEffect(() => {
    async function performGetMenuItems() { // get all menu items API call
      console.log("Getting menu items...")
      const data = await getMenuData(userToken, bakery.id)
      setItems(data["fields"]["menu_items"]);
      console.log(items)
    }
    if(userToken) {
      performGetMenuItems()
    }
  }, [userToken]);
  
    return (
      <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">{ bakery.name }</h1>
          { bakery.address }
          <h2 className="display-10 my-4 fw-bold">Menu Items</h2>
          <div className="menu-item-grid container">
            <div className="row">
              { createMenuItemsList() }
            </div>
          </div>
        </div>
      </main>
    );
  }