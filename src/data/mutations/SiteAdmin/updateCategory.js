import CategoryType from "../../types/siteadmin/CategoryType";
import { Category } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateCategory = {
  type: CategoryType,
  args: {
    id: { type: IntType },
    title: { type: StringType },
    subTitle: { type: StringType },
    image: { type: StringType },
    category: { type: StringType },
  },
  async resolve({ request }, { id, title, subTitle, image, category }) {
    if (request.user && request.user.admin == true) {
      const Update = await Category.update(
        {
          title: title,
          subTitle: subTitle,
          image: image,
          category: category,
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
export default updateCategory;
