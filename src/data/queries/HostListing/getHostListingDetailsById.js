import { GraphQLList as List } from "graphql";

// Models
import { HostListing } from "../../models";

// Types
import HostListingType from "../../types/HostListingType";
import {GraphQLInt as IntType} from "graphql/type/scalars";

const getHostListingDetailsById = {
    type: HostListingType,
    args: {
        id: { type: IntType},
    },
    async resolve({ request }, { id }) {
        return await HostListing.findById(id);
    },
};
export default getHostListingDetailsById;

