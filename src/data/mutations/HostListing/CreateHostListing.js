// GrpahQL
import {
    GraphQLInt as IntType,
    GraphQLString as StringType,
} from 'graphql';

// GraphQL Type
import HostListingType from '../../types/HostListingType';

// Sequelize models
import {
    HostListing
} from '../../models';

const createHostListing = {

    type: HostListingType,

    args: {
        userId: {type: IntType },
        categoryId: { type: IntType },
        subCategoryId: { type: IntType },
        personCapacity: { type: IntType },
        itemTitle: { type: StringType },
        itemDescription: { type: StringType },
        country: { type: StringType },
        street: { type: StringType },
        city: { type: StringType },
        state: { type: StringType },
        zipcode: { type: StringType },
        status: { type: StringType },
        lat: { type: FloatType },
        lng: { type: FloatType },
        serviceUnit: { type: StringType },
        minUnit: { type: IntType },
        maxUnit: { type: IntType },
        basePrice: { type: FloatType },
        currency: { type: StringType },
        coverPhoto: { type: IntType },
        discountType: { type: StringType },
        discount: { type: IntType },
        dynamicFields: { type: StringType },
    },

    async resolve({ request, response }, {
        userId,
        categoryId,
        subCategoryId,
        personCapacity,
        itemTitle,
        itemDescription,
        country,
        street,
        city,
        state,
        zipcode,
        status,
        lat,
        lng,
        serviceUnit,
        minUnit,
        maxUnit,
        basePrice,
        currency,
        coverPhoto,
        discountType,
        discount,
        dynamicFields,
    }) {


        if (request.user || request.user.admin) {
            const createHostListing = await HostListing.create({
                userId,
                categoryId,
                subCategoryId,
                personCapacity,
                itemTitle,
                itemDescription,
                country,
                street,
                city,
                state,
                zipcode,
                status,
                lat,
                lng,
                serviceUnit,
                minUnit,
                maxUnit,
                basePrice,
                currency,
                coverPhoto,
                discountType,
                discount,
                dynamicFields,
            })

            if (createHostListing) {
                return {
                    status: "200"
                }
            } else {
                return {
                    status: "400"
                }
            }

        } else {
            return {
                status: "500",
            };
        }

    },
};

export default createHostListing;

