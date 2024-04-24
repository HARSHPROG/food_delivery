import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const {name, cuisines, avgRating, costforTwo, deliveryTime} = resData?.data;

    return (
        <div className="restaurant-card">
            <img
                className="res-logo"
                alt="meghana-foods"
                src={CDN_URL}
            />
            <h3> {name} </h3>
            <h4> {cuisines} </h4>
            <h4> {avgRating} </h4>
            <h4> {costforTwo / 100} </h4>
            <h4> {deliveryTime} </h4>
        </div>
    )
}

export default RestaurantCard;