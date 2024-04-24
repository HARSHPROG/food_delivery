import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Img
 *      - Name of res, star rating, cuisines
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resData}) => {

    const {name, cuisines, avgRating, costforTwo, deliveryTime} = resData?.data;

    return (
        <div className="restaurant-card">
            <img
                className="res-logo"
                alt="meghana-foods"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" 
            />
            <h3> {name} </h3>
            <h4> {cuisines} </h4>
            <h4> {avgRating} </h4>
            <h4> {costforTwo / 100} </h4>
            <h4> {deliveryTime} </h4>
        </div>
    )
}

const resArray = [{
    data: {
        name: "KFC",
        cuisines: "biryani",
        avgRating: 4.4,
        costforTwo: 40000,
        deliveryTime: 36,
        id: 1
    }
}]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {resArray.map((rest) => {
                    return (
                        <RestaurantCard key={rest.data.id} resData={rest} />
                    )
                })}
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);