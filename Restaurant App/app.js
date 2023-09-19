import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import useState from "react";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *     - RestaurantCard
 *        - Img
 *        - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - CopyRight
 *  - Links
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
        />
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
  const {resData} = props;
  return (
    <div className="RestaurantCard">
      <img
        className="res-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.card.card.info.cloudinaryImageId}
      />
            <h3 className="RestaurantName">{resData.card.card.info.name}</h3>
            <h4 className="Cusine">{resData.card.card.info.cuisines.join(", ")}</h4>
            <h4 className="Ratings">{resData.card.card.info.avgRating} ratings</h4>
            <h4 className="ETA">{resData.card.card.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};



const carts = [

  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "575113",
          "name": "Veg Daawat by Behrouz",
          "cloudinaryImageId": "kghazvatw9in1fm1pycd",
          "locality": "Kuvempu Nagar",
          "areaName": "Vivekananda Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
            "restaurantId": "575113",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "344904",
          "avgRatingString": "4.3",
          "totalRatingsString": "20+",
          "promoted": true,
          "adTrackingId": "cid=8381617~p=1~eid=0000018a-a6bf-50cb-028c-b90800ee0155~srvts=1695014670539~83649",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-18 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹449",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=575113&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "378303",
          "name": "1983 Kerala Restaurant (Veg & Non Veg)",
          "cloudinaryImageId": "ezqn8e0igo2tf8ymxzz7",
          "locality": "Sawday Road",
          "areaName": "Mandi Mohalla",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "North Indian",
            "South Indian",
            "Biryani"
          ],
          "avgRating": 3.5,
          "feeDetails": {
            "restaurantId": "378303",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "22987",
          "avgRatingString": "3.5",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=8317636~p=2~eid=0000018a-a6bf-50cb-028c-b90900ee022d~srvts=1695014670539~83649",
          "sla": {
            "deliveryTime": 59,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "59 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-18 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=378303&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "122778",
          "name": "Kitchens Kerala Family Restaurant",
          "cloudinaryImageId": "kwvskeblw9fgfdp503lt",
          "locality": "Sawday Road",
          "areaName": "Mandi Mohalla",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Chinese",
            "North Indian",
            "South Indian",
            "Biryani"
          ],
          "avgRating": 3.7,
          "feeDetails": {
            "restaurantId": "122778",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "21360",
          "avgRatingString": "3.7",
          "totalRatingsString": "5K+",
          "promoted": true,
          "adTrackingId": "cid=8317801~p=3~eid=0000018a-a6bf-50cb-028c-b90a00ee0375~srvts=1695014670539~83649",
          "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "51 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-19 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=122778&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "198464",
          "name": "The Biryani Life",
          "cloudinaryImageId": "qjagm7c1w14h1seog44x",
          "locality": "Kuvempu Nagar",
          "areaName": "Vivekananda Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "198464",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "8496",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-18 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=198464&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "185765",
          "name": "Behrouz Biryani",
          "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
          "locality": "Kuvempu Nagar",
          "areaName": "Vivekananda Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "185765",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "1803",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-18 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹449",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=185765&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "579186",
          "name": "Sharief Bhai",
          "cloudinaryImageId": "5e827b65581cc15ca0d4d7f3c7ef3f62",
          "locality": "Sayyaji Rao Road",
          "areaName": "Tilak Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Arabian",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "579186",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "5734",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "38 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-18 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "ABOVE ₹900",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=579186&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "185776",
          "name": "The Good Bowl",
          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
          "locality": "Kuvempu Nagar",
          "areaName": "Vivekananda Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "185776",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "7918",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-18 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "badgeType": "BADGE_TYPE_OFFER_PACK",
            "offerSubText": "with offer pack",
            "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=185776&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }]

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="RestroContainer">
      <RestaurantCard resData={carts[0]} />
      <RestaurantCard resData={carts[1]} />
        <RestaurantCard resData={carts[2]} />
      </div>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
