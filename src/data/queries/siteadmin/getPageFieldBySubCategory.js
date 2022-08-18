import { GraphQLList as List } from "graphql";

// Models
import { PageField } from "../../models";

// Types
import PageFieldType from "../../types/siteadmin/PageFieldType";
import {GraphQLInt as IntType} from "graphql/type/scalars";

const getPageFieldBySubCategory = {
  type: new List(PageFieldType),
  args: {
    subCategoryId: { type: IntType}
  },
  async resolve({ request }, { subCategoryId }) {
    return await PageField.findAll({
      where: {subCategoryId},
    });
  },
};
export default getPageFieldBySubCategory;

