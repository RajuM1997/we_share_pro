// GrpahQL
import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

import PageFieldType from "../../types/siteadmin/PageFieldType";

// Sequelize models
import { PageField } from "../../models";

const deletePageField = {
  type: PageFieldType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request, response }, { id }) {
    if (request.user.admin) {
      const PageFieldDetails = await PageField.findById(id);
      if (!PageFieldDetails) {
        return {
          status: "404",
        };
      }

      const deletePageField = await Category.destroy({
        where: {
          id: id,
        },
      });

      if (deletePageField) {
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

export default deletePageField;
