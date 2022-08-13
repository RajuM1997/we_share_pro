// GrpahQL
import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

import FieldsType from "../../types/FieldsType";
import { Fields } from "../../models";

const deleteFields = {
  type: FieldsType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request, response }, { id }) {
    if (request.user.admin) {
      const FieldsDetails = await Fields.findById(id);
      if (!FieldsDetails) {
        return {
          status: "404",
        };
      }

      const deleteFields = await Fields.destroy({
        where: {
          id: id,
        },
      });

      if (deleteFields) {
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

export default deleteFields;
