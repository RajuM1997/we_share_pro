import { GraphQLList as List } from "graphql";

// Models
import { Fields, PageField } from "../../models";

// Types
import FieldsType from "../../types/FieldsType";
import {GraphQLInt as IntType} from "graphql/type/scalars";

const getFieldsGroupByPages = {
    type: new List(FieldsType),
    args: {
        subCategoryId: { type: IntType}
    },
    async resolve({ request }, { subCategoryId }) {
        // return await Fields.findAll({
        //     where: {subCategoryId},
        // });
        return await Fields.findAll({
            include: [{
                model: PageField,
                where: { subCategoryId: subCategoryId },
                right: true // has no effect, will create an inner join
            }]
        });
    },
};
export default getFieldsGroupByPages;

