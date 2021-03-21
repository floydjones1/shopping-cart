# Assignment Website

This is a shopping cart website using Picsum api to pull in images that can be use to simulate products.
You can select the type of image you would like (small, medium, large, x-large) with different prices and can
view your cart. Number of items are tracked in the navbar.

This app uses localstorage to keep user data between reloads.

One test available in Navbar component

Please note only reload on home route works because Github pages tried to find a file like /cart
Visit the link [here](https://floydjones1.github.io/shopping-cart/)

#### Routes

```
/ ---> Home
/product/{id} ---> Item page can add to cart
/cart ----> Can view your cart
```

## Geting started

```
yarn <--- Install dependencies
yarn start <--- Run Development server
yarn build <--- Build Prodiction code
yarn test <--- Test Project
```

## Used Plugins

```
babel (react, typescript)
webpack-bundle-analyzer <--- analyzing js bundles
fork-ts-checker-webpack-plugin <--- typechecking
css (css-loader, sass-loader)
html (html-webpack-plugin)
testing (jest, ts-jest, react-testing-library)

React: ^17.0.1
Webpack: ^5.21.2
```
