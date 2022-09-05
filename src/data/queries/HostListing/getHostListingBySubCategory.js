import { GraphQLList as List } from "graphql";

// Models
import { HostListing } from "../../models";

// Types
import HostListingType from "../../types/HostListingType";
import {GraphQLInt as IntType} from "graphql/type/scalars";

const getHostListingBySubCategory = {
    type: new List(HostListingType),
    args: {
        subCategoryId: { type: IntType},
    },
    async resolve({ request }, { subCategoryId }) {
        return await HostListing.findAll({
            where: {subCategoryId},
        });
    },
};
export default getHostListingBySubCategory;

