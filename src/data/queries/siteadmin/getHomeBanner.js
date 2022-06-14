import { GraphQLList as List } from "graphql";

// Models
import { NewBannerHome } from "../../models";

// Types
import BannerType from "../../types/siteadmin/BannerType";

const getHomeBanner = {
  type: new List(BannerType),

  async resolve({ request }) {
    return await NewBannerHome.findAll({});
  },
};

export default getHomeBanner;

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
