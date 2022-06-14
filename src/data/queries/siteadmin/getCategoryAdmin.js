import { GraphQLList as List } from "graphql";

// Models
import { Category } from "../../models";

import sequelize from "../../sequelize";

// Types
import CategoryType from "../../types/siteadmin/CategoryType";

const getCategoryAdmin = {
  type: new List(CategoryType),

  async resolve({ request }) {
    return await Category.findAll({
      where: {
        isEnable: true,
      },
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
