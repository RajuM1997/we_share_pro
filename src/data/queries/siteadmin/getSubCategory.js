import { GraphQLList as List } from "graphql";

// Models
import { SubCategory } from "../../models";

// Types
import SubCategoryType from "../../types/siteadmin/SubCategoryType";

const getSubCategory = {
  type: new List(SubCategoryType),

  async resolve({ request }) {
    return await SubCategory.findAll({});
  },
};

export default getSubCategory;

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
