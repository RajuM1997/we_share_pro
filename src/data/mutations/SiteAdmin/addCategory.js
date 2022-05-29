import CategoryType from "../../types/siteadmin/CategoryType";
import { Category } from "../../models";
import { GraphQLString as StringType } from "graphql";

const addCategory = {
  type: CategoryType,
  args: {
    title: { type: StringType },
    subTitle: { type: StringType },
    category: { type: StringType },
    image: { type: StringType },
  },
  async resolve({ request }, { title, subTitle, category, image }) {
    if (request.user && request.user.admin == true) {
      const Update = await Category.create({
        title: title,
        subTitle: subTitle,
        image: image,
        category: category,
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
export default addCategory;
