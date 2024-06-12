import { useState, useEffect } from 'react'

export default function LogInSignUp() {
  const [items, setItems] = useState([]);

  // get all bakeries API call
//   useEffect(() => {
//     const fetchMenuData = async () => {
//       // function to get API data
//       const apiData = await fetch("http://localhost:8000/restaurants/"); // get Response from API
//       const menuItemsJSON = await apiData.json(); // Response --> JSON
//       setItems(menuItemsJSON["fields"]["menu_items"]);
//       console.log(items)
//     };

//     fetchMenuData(); // run API data getter
//   }, []);
  
    return (
      <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">Log In</h1>
        </div>
      </main>
    );
  }