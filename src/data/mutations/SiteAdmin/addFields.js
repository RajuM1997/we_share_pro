import FieldsType from "../../types/FieldsType";
import { Fields } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const addFields = {
  type: FieldsType,
  args: {
    name: { type: StringType },
    title: { type: StringType },
    type: { type: StringType },
    fields: { type: StringType },
    subCategoryId: { type: IntType },
    pageId: { type: IntType },
  },
  async resolve(
    { request },
    { name, title, type, fields, pageId, subCategoryId }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await Fields.create({
        name: name,
        title: title,
        fields: fields,
        type: type,
        subCategoryId: subCategoryId,
        pageId: pageId,
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
export default addFields;
