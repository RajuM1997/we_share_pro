import { GraphQLList as List } from "graphql";

// Models
import { Category } from "../../models";

// Types
import CategoryType from "../../types/siteadmin/CategoryType";

const getCategory = {
  type: new List(CategoryType),

  async resolve({ request }) {
    return await Category.findAll({});
  },
};

export default getCategory;

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
