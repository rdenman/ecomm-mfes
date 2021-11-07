# App Design & Architecture

The repo consists of several micro frontends which interact with one another to form a unified platform experience.

## Container (react)

This is the top-level app which houses page-level micro frontends. It handles most routing concerns.

## Products (react) - `/`

The landing page for the platform. Includes the landing page, which lists products.

#### Routes

1. `/` - landing page

## Product Details (react) - `/details`

The details module. It contains the product detail page and a product detail summary component.

1. `/{id}` - detail page

## Auth (ng) - `/auth`

The authentication module. It contains the login and registration pages.

#### Routes

1. `/login` - login page
2. `/register` - registration page

## Search (ng) - `/search`

The search module. It contains the search results page and a search component.

#### Routes

1. `/` - search results page

## Account (react) - `/account`

The account module. It includes several account-related pages.

#### Routes

1. `/` - account landing page
2. `/orders` - orders page
3. `/wishlist` - wishlist page
4. `/profile` - profile page

## Cart (react) - `/cart`

The cart module. It includes a cart page, a cart button component, and a cart preview component.

#### Routes

1. `/` - cart list page
