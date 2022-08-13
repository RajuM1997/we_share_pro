import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

// Models
import { Fields } from "../../models";

import sequelize from "../../sequelize";

// Types
import FieldsType from "../../types/FieldsType";

const editFields = {
  type: FieldsType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request }, { id }) {
    // Get All User Profile Data
    const FieldsData = await Fields.find({
      attributes: [
        "id",
        "title",
        "name",
        "type",
        "pageId",
        "subCategoryId",
        "isEnable",
      ],
      where: {
        id: id,
      },
    });

    return FieldsData;
  },
};

export default editFields;

/*

query editPopularLocation ($id: Int!) {
    editPopularLocation (id: $id) {
        id
        location
        locationAddress
        isEnable
        image
    }
}

*/
