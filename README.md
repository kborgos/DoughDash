# DoughDash

## Description

DoughDash is a food delivery service that allows users to schedule weekly deliveries of fresh baked goods from participating local bakeries.

## Features

### Core

- [ ] Customers can sign up for an account.
- [ ] Customers can navigate participating bakeries.
- [ ] Customers can navigate a participating bakery's menu offering
- [ ] Customers can add items to cart.
- [ ] Customers can place orders.

### Stretch goals

- [ ] Drivers can sign up for an account.
- [ ] Drivers can get orders assigned to them for delivery.

## Technologies

### React.js

The front-end for this project will be developed using React.

### Django

#### Models

To support service capabilities, the following models are needed:

1. Customer (first_name, last_name_email, address, phone_number)
2. Driver (first_name, last_name, email, address, phone_number)
3. Address (relationship_id, street, city, state, zip_code)
   - relationship_id: id of the customer, driver or restaurant this address is associated with
4. Order (date, customer_id, associated_restaurant_id, assigned_driver_id, chosen_delivery_day, status)
   - chosen_delivery_day: day of the week customer desires to have their items delivered
   - status: whether this service is active, paused or canceled
5. Restaurant (restaurant_name, address)
6. MenuItem (associated_restaurant_id, menu_item_name, item_description, item_price, item_category)

#### API

All models will require functions that support get, post, put and delete requests. The following routes are supported:

##### /customers/ returns all customers signed up to the service

##### /drivers/ returns all drivers signed up to the service

##### /addresses/ returns all addresses associated with accounts signed up to the service

##### /orders/ returns all orders placed across customers

##### /restaurants/ returns all participating bakeries

##### /menuitems/ returns all menu items available across participating bakeries

All routes will support obtaining instances by ID by following the naming convention /route/{int}ID. For instance, /customers/1 will return data related to customer of ID 1.

### 3rd Party APIs

DoughDash will leverage the [Nutritonix]{https://www.nutritionix.com/} API to obtain calories information for menu items. It will also use [Google Places]{https://developers.google.com/maps} API to locate bakeries within a customer-provided zip code.
