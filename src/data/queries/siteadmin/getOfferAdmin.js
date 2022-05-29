import { GraphQLList as List } from "graphql";

// Models
import { Offer } from "../../models";

import sequelize from "../../sequelize";

// Types
import OfferType from "../../types/siteadmin/OfferType";

const getCategoryAdmin = {
  type: new List(OfferType),

  async resolve({ request }) {
    return await Offer.findAll({
      where: {
        isEnable: true,
      },
      order: [[sequelize.literal("RAND()")]],
    });
  },
};

export default getCategoryAdmin;

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
