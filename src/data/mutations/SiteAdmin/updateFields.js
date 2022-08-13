import FieldsType from "../../types/FieldsType";
import { Fields } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const updateFields = {
  type: FieldsType,
  args: {
    name: { type: StringType },
    title: { type: StringType },
    type: { type: StringType },
    subCategoryId: { type: StringType },
    pageId: { type: IntType },
  },

  async resolve({ request }, { id, title, name, type, subCategoryId, pageId }) {
    if (request.user && request.user.admin == true) {
      const Update = await Fields.update(
        {
          name: name,
          title: title,
          type: type,
          subCategoryId: subCategoryId,
          pageId: pageId,
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
export default updateFields;
