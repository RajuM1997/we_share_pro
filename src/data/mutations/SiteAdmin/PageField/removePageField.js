import PageFieldType from "../../../types/siteadmin/PageFieldType";
import { PageField } from "../../../models";

import { GraphQLInt as IntType } from "graphql";

const removePageField = {
  type: PageFieldType,

  args: {
    id: { type: IntType },
  },

  async resolve({ request }, { id, image }) {
    if (request.user && request.user.admin == true) {
      let updatePageField = await PageField.update({
        where: {
          id: id,
        },
      });

      if (updatePageField) {
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

export default removePageField;
