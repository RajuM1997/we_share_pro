import {GraphQLList as List, GraphQLObjectType as ObjectType} from "graphql/type/definition";
import {
    GraphQLBoolean as BooleanType,
    GraphQLFloat as FloatType,
    GraphQLInt as IntType,
    GraphQLString as StringType
} from "graphql/type/scalars";

// const HostListing = new ObjectType({
//     name: 'HostListing',
//     description: "HostListing",
//     fields: {
//         id: {type: IntType },
//         userId: {type: StringType },
//         categoryId: { type: StringType },
//         subCategoryId: { type: IntType },
//         personCapacity: { type: IntType },
//         itemTitle: { type: StringType },
//         itemDescription: { type: StringType },
//         fullAddress: { type: StringType },
//         buildingName: { type: StringType },
//         country: { type: StringType },
//         street: { type: StringType },
//         city: { type: StringType },
//         state: { type: StringType },
//         zipcode: { type: StringType },
//         status: { type: StringType },
//         lat: { type: FloatType },
//         lng: { type: FloatType },
//         serviceUnit: { type: StringType },
//         bookingNoticeTime: { type: StringType },
//         bookingNoticeCheckInStart: { type: StringType },
//         bookingNoticeCheckInEnd: { type: StringType },
//         maxDaysNotice: { type: StringType },
//         cancellationPolicy: { type: StringType },
//         minUnit: { type: IntType },
//         maxUnit: { type: IntType },
//         basePrice: { type: IntType },
//         currency: { type: StringType },
//         coverPhoto: { type: StringType },
//         weeklyDiscount: { type: IntType },
//         monthlyDiscount: { type: IntType },
//         bookingType: { type: StringType },
//         dynamicFields: { type: StringType },
//     }
// });

const HostListingType = new ObjectType({
    name: 'HostListingType',
    description: "HostListingType",
    fields: {
        id: {type: IntType },
        userId: {type: StringType },
        categoryId: { type: StringType },
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
        status: { type: StringType },
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
        // Listing: {
        //     type: new List(HostListing),
        //     resolve (HostListingType) {
        //         return HostListingType.getListing();
        //     }
        // },
    },
});

export default HostListingType;
