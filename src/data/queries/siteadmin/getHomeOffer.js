import { GraphQLList as List } from "graphql";

// Models
import { Offer } from "../../models";

// Types
import OfferType from "../../types/siteadmin/OfferType";

const getHomeOffer = {
  type: new List(OfferType),

  async resolve({ request }) {
    return await Offer.findAll({});
  },
};

export default getHomeOffer;

/**

query getPopularLocation {
  getPopularLocation{
    id
    location
    locationAddress
    image
    isEnable
    createdAt
    updatedAt
  }
}

**/
