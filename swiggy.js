import React from "react";
import { createRoot } from "react-dom/client";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/




const Header = () => {
  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"></img>
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
  );
};

const RestaurantCard = (props) => {
  const {resData} = props
  const {
    name,
    cuisines,
    avgRating,
    costForTwo
  } = resData?.info

  const {deliveryTime} = resData?.info.sla

  return (
    <div className="res-card">
      <img 
      className="res-logo"
      alt="res-logo"
      src=
      {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

const resList =  [
                                    {
                                        "info": {
                                            "id": "655020",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6bd0c928-d526-4bae-9dd3-0c0ccd7ec4df_655020.jpg",
                                            "locality": "Urban Estate Phase II",
                                            "areaName": "PATIALA",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "166",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "6.3K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-19 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹120 OFF",
                                                "subHeader": "ABOVE ₹199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.5",
                                                    "ratingCount": "5.4K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/burger-king-urban-estate-phase-ii-patiala-rest655020",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "364440",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/c7227f36-5619-4f5c-a940-658c4e43e74c_364440.JPG",
                                            "locality": "Rajkamal Square",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "721",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "2.9K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-19 04:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/pizza-hut-rajkamal-square-model-town-rest364440",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "253995",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/74b29c8e-cdcd-43a2-bd8c-2ad4e1eb85f0_253995.JPG",
                                            "locality": "Moti Bagh",
                                            "areaName": "Lahori Gate",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "American"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "630",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 6.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "6.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-19 01:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹125",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/mcdonalds-moti-bagh-lahori-gate-rest253995",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "428369",
                                            "name": "Faasos - Wraps, Rolls & Shawarma",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/db59eaf3-5730-499e-91a3-03a7d21a32be_428369.JPG",
                                            "locality": "Bhupindra Road",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Kebabs",
                                                "Fast Food",
                                                "Snacks",
                                                "American",
                                                "Healthy Food",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "21809",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "2.6K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹90"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/faasos-wraps-rolls-and-shawarma-bhupindra-road-model-town-rest428369",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "499776",
                                            "name": "NIC Ice Creams",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/612c2332-c266-4709-b093-ac91e9236771_499776.jpg",
                                            "locality": "Bank colony",
                                            "areaName": "Lahori Gate",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "6249",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "1.8K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 7.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "7.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹125",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/nic-ice-creams-bank-colony-lahori-gate-rest499776",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "428375",
                                            "name": "The Good Bowl",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/804736f2-b892-4d8a-9a3e-f19077a23789_428375.jpg",
                                            "locality": "Bhupindra Road",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "North Indian",
                                                "Pastas",
                                                "Punjabi",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "7918",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "762",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹165 OFF",
                                                "subHeader": "ABOVE ₹499",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/the-good-bowl-bhupindra-road-model-town-rest428375",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "99916",
                                            "name": "Neelgiri Hot Meals Services ",
                                            "cloudinaryImageId": "o30tv1uaqiacxk4jcupy",
                                            "locality": "Arya Smaj Chowk",
                                            "areaName": "Lahori Gate",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "North Indian"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "315472",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "3.9K+",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 7.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "7.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹89"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/neelgiri-hot-meals-services-arya-smaj-chowk-lahori-gate-rest99916",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "332569",
                                            "name": "Kwality Walls Ice Cream and More",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/decf499f-1408-4f67-9e38-26072b2fe760_332569.JPG",
                                            "locality": "Lehal Colony",
                                            "areaName": "Tripuri",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream",
                                                "Ice Cream Cakes"
                                            ],
                                            "avgRating": 4.7,
                                            "veg": true,
                                            "parentId": "582",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "2.4K+",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 4.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹150 OFF",
                                                "subHeader": "ABOVE ₹449",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/kwality-walls-ice-cream-and-more-lehal-colony-tripuri-rest332569",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "428373",
                                            "name": "Sweet Truth - Cake and Desserts",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/b8da1f6c-6e8e-41e3-a2a9-dba6677f3a69_428373.jpg",
                                            "locality": "Bhupindra Road",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream",
                                                "Bakery",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "4444",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "823",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹90"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/sweet-truth-cake-and-desserts-bhupindra-road-model-town-rest428373",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "719908",
                                            "name": "Tim Hortons",
                                            "cloudinaryImageId": "0e9756fa964177a65d0b61a3f0a87280",
                                            "locality": "Badunagar Tehsil",
                                            "areaName": "Patiala",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Coffee",
                                                "Beverages",
                                                "Cafe",
                                                "Desserts",
                                                "sandwich",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.8,
                                            "parentId": "420703",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "519",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/tim-hortons-badunagar-tehsil-patiala-rest719908",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "673445",
                                            "name": "Pizza Wings",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/ebdf270d-8e2b-43de-ae89-03bdfd6ece46_673445.JPG",
                                            "locality": "Urban Estate Market",
                                            "areaName": "Urban Estate 2",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Rolls & Wraps",
                                                "Italian",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "159048",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "3.6K+",
                                            "sla": {
                                                "deliveryTime": 43,
                                                "lastMileTravel": 11.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "11.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-19 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹165 OFF",
                                                "subHeader": "ABOVE ₹449",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/pizza-wings-urban-estate-market-urban-estate-2-rest673445",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "92466",
                                            "name": "Jaggi's Restaurant",
                                            "cloudinaryImageId": "v1oonpszmopqdzn836m5",
                                            "locality": "Bhupindra Road",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Italian",
                                                "Sweets",
                                                "Desserts",
                                                "Continental",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "586576",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "20K+",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/jaggis-restaurant-bhupindra-road-model-town-rest92466",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "502369",
                                            "name": "Jaggi Sweets",
                                            "cloudinaryImageId": "vbjt0nq5fqahggzgqe3g",
                                            "locality": "Bhupindra Road",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Sweets"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "108242",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "2.8K+",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹29"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/jaggi-sweets-bhupindra-road-model-town-rest502369",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "112968",
                                            "name": "Old Madrasi Dosa",
                                            "cloudinaryImageId": "tmvy4g3jko9syrwsooad",
                                            "locality": "Sherawala Gate",
                                            "areaName": "Lahori Gate",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "South Indian"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "374065",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "8.7K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 6.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "6.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹130",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/old-madrasi-dosa-sherawala-gate-lahori-gate-rest112968",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "123296",
                                            "name": "Live Pasta",
                                            "cloudinaryImageId": "dtetuc3vqrba8rywbprq",
                                            "locality": "Arya Samaj",
                                            "areaName": "Lahori Gate",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Pastas",
                                                "Burgers",
                                                "Italian",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "125630",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "9.0K+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 6.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "6.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹130",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/live-pasta-arya-samaj-lahori-gate-rest123296",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "145890",
                                            "name": "Sant Sweets",
                                            "cloudinaryImageId": "smannymv0eastszkabwf",
                                            "locality": "Anand Nagar",
                                            "areaName": "Patiala City",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Sweets",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "15949",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "1.8K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 3.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 21:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/sant-sweets-anand-nagar-patiala-city-rest145890",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "87261",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/811cd6b8-0e64-42f0-8b8f-1d7a3f253939_87261.JPG",
                                            "locality": "Bank Colony",
                                            "areaName": "Model Town",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "547",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "11K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-19 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹125",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/kfc-bank-colony-model-town-rest87261",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "499777",
                                            "name": "Grameen Kulfi",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/70836912-41b0-4a5d-b0fa-213ddefc473e_499777.jpg",
                                            "locality": "Leela Bhawan Complex",
                                            "areaName": "Lahori Gate",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.7,
                                            "veg": true,
                                            "parentId": "12175",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "426",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 7.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "7.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹125",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/grameen-kulfi-leela-bhawan-complex-lahori-gate-rest499777",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "89605",
                                            "name": "Kohli Sweets (Tripuri)",
                                            "cloudinaryImageId": "34bf792918abc5f83ea1516686368475",
                                            "locality": "Tripuri",
                                            "areaName": "Tripuri",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Bakery",
                                                "Chinese",
                                                "Desserts",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "119674",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "13K+",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 5.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "5.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹55"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "2.4K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/kohli-sweets-tripuri-tripuri-rest89605",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "534093",
                                            "name": "Malhotra Sweets",
                                            "cloudinaryImageId": "lxxwmqvlxflwzolsangx",
                                            "locality": "Gur Mandi",
                                            "areaName": "Nabha Gate",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Snacks",
                                                "Punjabi",
                                                "Chaat",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "321201",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1.1K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 8.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "8.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-06-18 21:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-fe9bb32f-3ff5-41d9-aeee-d8d25f80d88c"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/patiala/malhotra-sweets-gur-mandi-nabha-gate-rest534093",
                                            "type": "WEBLINK"
                                        }
                                    }
                                ]

const Body = () => {
  return (
    <div className="Body">

      <div className="search">search</div>

      <div className="outer-container">
        <div className="res-container">

        {resList.map((restaurant)=> (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}  
   
        </div>
      </div>
     
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"))
root.render(<AppLayout/>)