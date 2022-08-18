import { GraphQLList as List } from "graphql";

// Models
import { Fields } from "../../models";

// Types
import FieldsType from "../../types/FieldsType";
import {GraphQLInt as IntType} from "graphql/type/scalars";

const getFieldsBySubCategory = {
    type: new List(FieldsType),
    args: {
        subCategoryId: { type: IntType}
    },
    async resolve({ request }, { subCategoryId }) {
        return await Fields.findAll({
            where: {subCategoryId},
        });
    },
};
export default getFieldsBySubCategory;

