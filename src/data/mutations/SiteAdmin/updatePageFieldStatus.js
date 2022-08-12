import PageFieldType from "../../types/siteadmin/PageFieldType";
import { PageField } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateCategoryStatus = {
  type: PageFieldType,
  args: {
    id: { type: IntType },
    isEnable: { type: StringType },
  },
  async resolve({ request }, { id, isEnable }) {
    if (request.user && request.user.admin == true) {
      const Update = await PageField.update(
        {
          isEnable: isEnable == "true" ? 0 : 1,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return {
        status: "success",
      };
    } else {
      return {
        status: "failed",
      };
    }
  },
};
export default updateCategoryStatus;
