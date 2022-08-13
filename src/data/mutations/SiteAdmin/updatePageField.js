import PageFieldType from "../../types/siteadmin/PageFieldType";
import { PageField } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updatePageField = {
  type: PageFieldType,
  args: {
    id: { type: IntType },
    title: { type: StringType },
    step: { type: StringType },
    pageId: { type: StringType },
    subCategoryId: { type: IntType },
  },
  async resolve({ request }, { id, title, step, pageId, subCategoryId }) {
    if (request.user && request.user.admin == true) {
      const Update = await PageField.update(
        {
          title: title,
          step: step,
          pageId: pageId,
          subCategoryId: subCategoryId,
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
export default updatePageField;
