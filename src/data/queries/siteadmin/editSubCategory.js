import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

// Models
import { SubCategory } from "../../models";

// Types
import SubCategoryType from "../../types/siteadmin/SubCategoryType";

const editSubCategory = {
  type: SubCategoryType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request }, { id }) {
    // Get All User Profile Data
    const SubCategoryData = await SubCategory.find({
      attributes: [
        "id",
        "title",
        "address",
        "image",
        "isEnable",
        "description",
        "subCategory",
        "primaryCategory",
        "guests",
        "bedrooms",
        "beds",
        "baths",
      ],
      where: {
        id: id,
      },
    });

    return SubCategoryData;
  },
};

export default editSubCategory;

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
