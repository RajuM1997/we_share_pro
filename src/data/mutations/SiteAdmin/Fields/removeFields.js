import FieldsType from "../../../types/FieldsType";
import { Fields } from "../../../models";

import { GraphQLInt as IntType } from "graphql";

const removeFields = {
  type: FieldsType,

  args: {
    id: { type: IntType },
  },

  async resolve({ request }, { id, image }) {
    if (request.user && request.user.admin == true) {
      let updateFields = await Fields.update({
        where: {
          id: id,
        },
      });

      if (updateFields) {
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

export default removeFields;
