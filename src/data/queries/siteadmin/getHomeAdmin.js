import { GraphQLList as List } from "graphql";

// Models
import { NewBannerHome } from "../../models";

import sequelize from "../../sequelize";

// Types
import BannerType from "../../types/siteadmin/BannerType";

const getHomeAdmin = {
  type: new List(BannerType),

  async resolve({ request }) {
    return await NewBannerHome.findAll({
      where: {
        isEnable: true,
      },
    });
  },
};

export default getHomeAdmin;

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
