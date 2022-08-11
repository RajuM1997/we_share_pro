import { GraphQLList as List } from "graphql";

// Models
import { Fields } from "../../models";

import sequelize from "../../sequelize";

// Types
import FieldsType from "../../types/FieldsType";

const getFields = {
  type: new List(FieldsType),

  async resolve({ request }) {
    return await Fields.findAll({
      where: {
        isEnable: true,
      },
    });
  },
};

export default getFields;

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
