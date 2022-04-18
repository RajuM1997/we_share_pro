import { GraphQLList as List } from "graphql";

// Models
import { ShareAndFind } from "../../models";

// Types
import ShareAndFindType from "../../types/siteadmin/ShareAndFindType";

const getShareAndFind = {
  type: new List(ShareAndFindType),

  async resolve({ request }) {
    return await ShareAndFind.findAll({});
  },
};

export default getShareAndFind;

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
