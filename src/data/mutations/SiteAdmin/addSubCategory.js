import SubCategoryType from "../../types/siteadmin/SubCategoryType";
import { SubCategory } from "../../models";
import { GraphQLString as StringType } from "graphql";

const addSubCategory = {
  type: SubCategoryType,
  args: {
    title: { type: StringType },
    subCategory: { type: StringType },
    primaryCategory: { type: StringType },
    image: { type: StringType },
  },
  async resolve({ request }, { title, subCategory, primaryCategory, image }) {
    if (request.user && request.user.admin == true) {
      const Update = await SubCategory.create({
        title: title,
        subCategory: subCategory,
        image: image,
        primaryCategory: primaryCategory,
      });
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
export default addSubCategory;
