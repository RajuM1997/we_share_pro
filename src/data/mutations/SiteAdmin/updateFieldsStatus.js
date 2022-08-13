import FieldsType from "../../types/FieldsType";
import { Fields } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateFieldsStatus = {
  type: FieldsType,
  args: {
    id: { type: IntType },
    isEnable: { type: StringType },
  },
  async resolve({ request }, { id, isEnable }) {
    if (request.user && request.user.admin == true) {
      const Update = await Fields.update(
        {
          isEnable: isEnable == "true" ? 0 : 1,
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
export default updateFieldsStatus;
