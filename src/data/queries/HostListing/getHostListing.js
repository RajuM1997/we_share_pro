import { GraphQLList as List } from "graphql";

// Models
import { HostListing } from "../../models";

// Types
import HostListingType from "../../types/HostListingType";

const getHostListing = {
  type: new List(HostListingType),

  async resolve({ request }) {
    return await HostListing.findAll({});
  },
};

export default getHostListing;

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
