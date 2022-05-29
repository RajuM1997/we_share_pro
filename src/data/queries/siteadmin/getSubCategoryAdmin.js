import { GraphQLList as List } from "graphql";

// Models
import { SubCategory } from "../../models";

import sequelize from "../../sequelize";

// Types
import SubCategoryType from "../../types/siteadmin/SubCategoryType";

const getCategoryAdmin = {
  type: new List(SubCategoryType),

  async resolve({ request }) {
    return await SubCategory.findAll({
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
