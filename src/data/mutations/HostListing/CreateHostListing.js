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
import {GraphQLFloat as FloatType} from "graphql/type/scalars";

const createHostListing = {

    type: HostListingType,

    async resolve({ request, response }, {
        userId,
        categoryId,
        subCategoryId,
        personCapacity,
        itemTitle,
        itemDescription,
        fullAddress,
        buildingName,
        country,
        street,
        city,
        state,
        zipcode,
        lat,
        lng,
        serviceUnit,
        bookingNoticeTime,
        bookingNoticeCheckInStart,
        bookingNoticeCheckInEnd,
        maxDaysNotice,
        cancellationPolicy,
        minUnit,
        maxUnit,
        basePrice,
        currency,
        coverPhoto,
        weeklyDiscount,
        monthlyDiscount,
        bookingType,
        dynamicFields,
        availabilityStart,
        availabilityEnd,
    }) {


        if (request.user || request.user.admin) {
            const createHostListing = await HostListing.create({
                userId,
                categoryId,
                subCategoryId,
                personCapacity,
                itemTitle,
                itemDescription,
                fullAddress,
                buildingName,
                country,
                street,
                city,
                state,
                zipcode,
                lat,
                lng,
                serviceUnit,
                bookingNoticeTime,
                bookingNoticeCheckInStart,
                bookingNoticeCheckInEnd,
                maxDaysNotice,
                cancellationPolicy,
                minUnit,
                maxUnit,
                basePrice,
                currency,
                coverPhoto,
                weeklyDiscount,
                monthlyDiscount,
                bookingType,
                dynamicFields,
                availabilityStart,
                availabilityEnd,
            })
            if (createHostListing) {
                return {
                    ...createHostListing?.dataValues,
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

    args: {
        userId: {type: StringType },
        categoryId: { type: IntType },
        subCategoryId: { type: IntType },
        personCapacity: { type: IntType },
        itemTitle: { type: StringType },
        itemDescription: { type: StringType },
        fullAddress: { type: StringType },
        buildingName: { type: StringType },
        country: { type: StringType },
        street: { type: StringType },
        city: { type: StringType },
        state: { type: StringType },
        zipcode: { type: StringType },
        lat: { type: FloatType },
        lng: { type: FloatType },
        serviceUnit: { type: StringType },
        bookingNoticeTime: { type: StringType },
        bookingNoticeCheckInStart: { type: StringType },
        bookingNoticeCheckInEnd: { type: StringType },
        maxDaysNotice: { type: StringType },
        cancellationPolicy: { type: StringType },
        minUnit: { type: IntType },
        maxUnit: { type: IntType },
        basePrice: { type: IntType },
        currency: { type: StringType },
        coverPhoto: { type: StringType },
        weeklyDiscount: { type: IntType },
        monthlyDiscount: { type: IntType },
        bookingType: { type: StringType },
        dynamicFields: { type: StringType },
        availabilityStart: { type: StringType },
        availabilityEnd: { type: StringType },
    },
};

export default createHostListing;

