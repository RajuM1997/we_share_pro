import FieldsType from "../../types/FieldsType";
import { Fields } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const addFields = {
  type: FieldsType,
  args: {
    name: { type: StringType },
    title: { type: StringType },
    subTitle: { type: StringType },
    step: { type: StringType },
    types: { type: StringType },
    option: { type: StringType },
    pageId: { type: IntType },
  },
  async resolve(
    { request },
    { name, title, subTitle, step, types, option, pageId }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await Fields.create({
        name: name,
        title: title,
        subTitle: subTitle,
        step: step,
        option: option,
        types: types,
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
