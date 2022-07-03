// GrpahQL
import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

import CategoryType from "../../types/siteadmin/CategoryType";

// Sequelize models
import { Category } from "../../models";

const deleteCategory = {
  type: CategoryType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request, response }, { id }) {
    if (request.user.admin) {
      const CategoryDetails = await Category.findById(id);
      if (!CategoryDetails) {
        return {
          status: "404",
        };
      }

      const deleteCategory = await Category.destroy({
        where: {
          id: id,
        },
      });

      if (deleteCategory) {
        return {
          status: "200",
        };
      } else {
        return {
          status: "400",
        };
      }
    } else {
      return {
        status: "notLoggedIn",
      };
    }
  },
};

export default deleteCategory;
