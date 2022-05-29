import CategoryType from "../../../types/siteadmin/CategoryType";
import { Category } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const removeCategory = {
  type: CategoryType,

  args: {
    id: { type: IntType },
    image: { type: StringType },
  },

  async resolve({ request }, { id, image }) {
    if (request.user && request.user.admin == true) {
      let updateCategory = await Category.update(
        {
          image: null,
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

export default removeCategory;
