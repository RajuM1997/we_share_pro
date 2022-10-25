import FieldsType from "../../types/FieldsType";
import { Fields } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const updateFields = {
  type: FieldsType,
  args: {
    id: { type: IntType },
    name: { type: StringType },
    title: { type: StringType },
    type: { type: StringType },
    pageId: { type: IntType },
    fields: { type: StringType },
    subCategoryId: { type: IntType },
  },

  async resolve(
    { request },
    { id, name, title, type, pageId, fields, subCategoryId }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await Fields.update(
        {
          name: name,
          title: title,
          type: type,
          pageId: pageId,
          fields: fields,
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
export default updateFields;
