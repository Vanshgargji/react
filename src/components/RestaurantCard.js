import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="res-card">
      <img
        className="w-[273px] h-[182px] object-cover rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="m-0 font-semibold text-[18px] leading-[22px] tracking-[-0.45px]  text-[rgba(2,6,12,0.92)] overflow-hidden text-ellipsis whitespace-nowrap">
        {name}
      </h3>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

// higher order component 
// input restaurant card ==>> restaurant card promoted

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
    <div>
      <label className="absolute bg-black text-white  ml-[-4px] mt-2 p-2">Promoted</label>
      <RestaurantCard {...props} />
    </div>
    )
  }
}

export default RestaurantCard;
