async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }
  
  export async function signup(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/accounts/signup", payload)
    return body
  }
  
  export async function login(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/accounts/get-token", payload)
    return body.token
  }
  
  export async function getBakeries(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://localhost:8000/restaurants/", payload)
    return body
  }

  export async function getMenuData(token, restaurant_id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://localhost:8000/restaurants/" + restaurant_id + "/", payload)
    return body
  }

  export async function getCustomerData(token, customer_id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://localhost:8000/customers/" + customer_id + "/", payload)
    return body
  }

  export async function getCalories(item) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'x-app-id': "",
        'x-app-key': ""
      },  
      body: JSON.stringify({
        "query": item
      })
    }
    const body = await basicFetch("https://trackapi.nutritionix.com/v2/natural/nutrients", payload)
    return body["foods"][0].nf_calories
  }