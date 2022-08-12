import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

// Models
import { PageField } from "../../models";

// Types
import PageFieldType from "../../types/siteadmin/PageFieldType";

const editPageField = {
  type: PageFieldType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request }, { id }) {
    // Get All User Profile Data
    const PageFieldData = await PageField.find({
      attributes: ["id", "title", "step", "pageId", "isEnable"],
      where: {
        id: id,
      },
    });

    return PageFieldData;
  },
};

export default editPageField;

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
