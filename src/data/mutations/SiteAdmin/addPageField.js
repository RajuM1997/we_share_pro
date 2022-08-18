import PageFieldType from "../../types/siteadmin/PageFieldType";
import { PageField } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const addPageField = {
  type: PageFieldType,
  args: {
    title: { type: StringType },
    step: { type: IntType },
    pageId: { type: IntType },
    subCategoryId: { type: IntType },
  },
  async resolve({ request }, { title, step, pageId, subCategoryId }) {
    if (request.user && request.user.admin === true) {
      const data = await PageField.findOne({ where: { pageId, subCategoryId } });
      if (data) {
        return {
          status: `Page Id ${pageId} already inserted`,
        };
      }
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
