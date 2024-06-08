# DoughDash

## Description

DoughDash is a food delivery service that allows users to schedule weekly deliveries of fresh baked goods from participating local bakeries.

## Technologies

### Django

#### Models

In its simplest form, DoughDash should allow customers to sign up for an account, navigate participating bakeries/menu offerings and place orders. It should also allow drivers to sign up for an account and get orders assigned to them for delivery.

To support these capabilities, the following models are needed:

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

All models will require functions that support get, post, put and delete requests.

##### /customers/

##### /drivers/

##### /addresses/

##### /orders/

##### /restaurants/

##### /menuitems/