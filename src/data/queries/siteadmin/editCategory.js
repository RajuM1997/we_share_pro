import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

// Models
import { Category } from "../../models";

// Types
import CategoryType from "../../types/siteadmin/CategoryType";

const editCategory = {
  type: CategoryType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request }, { id }) {
    // Get All User Profile Data
    const CategoryData = await Category.find({
      attributes: ["id", "title", "subTitle", "image", "isEnable", "category"],
      where: {
        id: id,
      },
    });

    return CategoryData;
  },
};

export default editCategory;

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
