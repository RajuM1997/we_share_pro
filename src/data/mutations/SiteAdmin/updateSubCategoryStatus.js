import SubCategoryType from "../../types/siteadmin/SubCategoryType";
import { SubCategory } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateSubCategoryStatus = {
  type: SubCategoryType,
  args: {
    id: { type: IntType },
    isEnable: { type: StringType },
  },
  async resolve({ request }, { id, isEnable }) {
    if (request.user && request.user.admin == true) {
      const Update = await SubCategory.update(
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
export default updateSubCategoryStatus;
