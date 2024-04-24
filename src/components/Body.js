import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mock_data";

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

export default Body;