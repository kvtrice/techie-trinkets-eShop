![](/docs/wishlist.jpg)

# Techie Trinkets e-Shop

## Table of Contents
* [View the live site](https://techie-trinkets.vercel.app/)
* [Overview](#overview)
* [Key Features](#key-features)
* [Tech Stack](#tech-stack)
* [Next Steps](#next-steps)

## Overview
Techie Trinkets is an e-commerce website where users are able to browse, favourite and purchase* various tech gadgets. The site is built using React (Vite) and Firestore and has a focus on delivering a smooth intuitive interface to users.

*Currently the purchasing flow is simulated, a payment service provider is yet to be implemented.

## Key Features
### Browse Products and Product Styles
Users are able to browse all products across the site, and when clicking on a product are able to further browse the different styles that product comes in, such as colours or sizes.

### Wishlist
Users are able to add products to a wishlist through clicking a heart icon. This process favourites the specific style that user has chosen, allowing them to add multiple different styles of the same product to their wishlist. 

Within the wishlist, the user can see at a glance the styles they've chosen, and when clicking an item in their wishlist this will navigate them back to that particular product variant ready for them to add it to their cart if they wish.

Users are also able to easily remove an item from their favourites by again clicking the heart icon from the wishlist screen for the specific item.

### Shopping Cart
Users are able to add product variants to their shopping cart and 'checkout' those items. In this simulated example the cart is persisted through the use of localStorage, and implements the following features:

* **Inventory Management:** When adding a product to the cart, users can only add as many products as their are in stock. If the product is out of stock, the user is notified and cannot add that item to their cart.
* **Cart Management:** Users are able to remove products from their cart, if they do this, the stock level of the item will return to it's previous stock level.
* **Prevention of duplication:** If a user has an item in their cart, then adds another of the same item to their cart, the application will manage this elegantly through simply increasing the quantity of the item in the cart.
* **Clear or CHeckout Cart:** Users are able to clear their entire cart, or checkout their cart. In this simulated example both actions will result in all item levels being returned to their original state.


## Tech Stack
* **Frontend:** React (Vite), SCSS with BEM methodology and Routing using React-Router
* **Backend:** Firebase firestore database

## Next Steps
1. Payment Service Provider
    - Integrate a payment provider such as Stripe in dev mode to provide a more realistic checkout experience.

2. Cart notifications
    - Display to the user the current number of items in the cart so there's a clear visual clue that there are cart items ready to be checked out.

3. Mobile / Tablet Responsiveness
    - Add mobile and tablet breakpoints to ensure complete responsiveness on all device sizes.

4. Inline Cart Updates
    - Enable the user to adjust the item quantity on the checkout screen through an increment / decrement button and provide real time stock and cart updates based on this