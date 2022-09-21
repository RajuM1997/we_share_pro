import { GraphQLList as List } from "graphql";

// Models
import { HostListing } from "../../models";

// Types
import HostListingType from "../../types/HostListingType";
import { GraphQLString as StringType } from "graphql/type/scalars";

const getHostListingByUserId = {
  type: new List(HostListingType),
  args: {
    userId: { type: StringType },
  },
  async resolve({ request }, { userId }) {
    return await HostListing.findAll({
      where: { userId },
    });
  },
};
export default getHostListingByUserId;
