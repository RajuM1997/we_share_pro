// GrpahQL
import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

import SubCategoryType from "../../types/siteadmin/SubCategoryType";

// Sequelize models
import { SubCategory } from "../../models";

const deleteSubCategory = {
  type: SubCategoryType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request, response }, { id }) {
    if (request.user.admin) {
      const CategoryDetails = await SubCategory.findById(id);
      if (!CategoryDetails) {
        return {
          status: "404",
        };
      }

      const deleteSubCategory = await SubCategory.destroy({
        where: {
          id: id,
        },
      });

      if (deleteSubCategory) {
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

export default deleteSubCategory;
