import CategoryType from "../../types/siteadmin/CategoryType";
import { Category } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateCategoryStatus = {
  type: CategoryType,
  args: {
    id: { type: IntType },
    isEnable: { type: StringType },
  },
  async resolve({ request }, { id, isEnable }) {
    if (request.user && request.user.admin == true) {
      const Update = await Category.update(
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
