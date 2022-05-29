import CategoryType from "../../../types/siteadmin/CategoryType";
import { Category } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const uploadCategory = {
  type: CategoryType,

  args: {
    image: { type: StringType },
    id: { type: IntType },
  },

  async resolve({ request }, { image, id }) {
    if (request.user && request.user.admin == true) {
      let updateCategory = await Category.update(
        {
          image: image,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updateCategory) {
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

export default uploadCategory;
