import { GraphQLList as List } from "graphql";

// Models
import { PageField } from "../../models";

import sequelize from "../../sequelize";

// Types
import PageFieldType from "../../types/siteadmin/PageFieldType";

const getPageField = {
  type: new List(PageFieldType),

  async resolve({ request }) {
    return await PageField.findAll({
      where: {
        isEnable: true,
      },
    });
  },
};

export default getPageField;

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
