import PageFieldType from "../../types/siteadmin/PageFieldType";
import { PageField } from "../../models";
import { GraphQLString as StringType, GraphQLString as IntType } from "graphql";

const addPageField = {
  type: PageFieldType,
  args: {
    title: { type: StringType },
    step: { type: StringType },
    pageId: { type: IntType },
    subCategoryId: { type: IntType },
  },
  async resolve({ request }, { title, step, pageId, subCategoryId }) {
    if (request.user && request.user.admin == true) {
      const Update = await PageField.create({
        title: title,
        step: step,
        pageId: pageId,
        subCategoryId: subCategoryId,
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
export default addPageField;
