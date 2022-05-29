import SubCategoryType from "../../../types/siteadmin/SubCategoryType";
import { SubCategory } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const removeSubCategory = {
  type: SubCategoryType,

  args: {
    id: { type: IntType },
    image: { type: StringType },
  },

  async resolve({ request }, { id, image }) {
    if (request.user && request.user.admin == true) {
      let updateSubCategory = await SubCategory.update(
        {
          image: null,
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

export default removeSubCategory;
