import { GraphQLList as List } from "graphql";

// Models
import { HostListing } from "../../models";

// Types
import HostListingType from "../../types/HostListingType";
import {GraphQLInt as IntType} from "graphql/type/scalars";

const getHostListingByCategory = {
    type: new List(HostListingType),
    args: {
        categoryId: { type: IntType},
    },
    async resolve({ request }, { categoryId }) {
        return await HostListing.findAll({
            where: {categoryId},
        });
    },
};
export default getHostListingByCategory;

