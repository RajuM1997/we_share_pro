import SubCategoryType from "../../../types/siteadmin/SubCategoryType";
import { SubCategory } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const uploadSubCategory = {
  type: SubCategoryType,

  args: {
    image: { type: StringType },
    id: { type: IntType },
  },

  async resolve({ request }, { image, id }) {
    if (request.user && request.user.admin == true) {
      let updateSubCategory = await SubCategory.update(
        {
          image: image,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updateSubCategory) {
        return {
          status: "success",
        };
      } else {
        return {
          status: "failed",
        };
      }
    } else {
      return {
        status: "not logged in",
      };
    }
  },
};

export default uploadSubCategory;
