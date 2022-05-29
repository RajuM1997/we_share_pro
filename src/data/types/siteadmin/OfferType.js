import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const OfferType = new ObjectType({
  name: "OfferInit",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    dec: { type: StringType },
    image: { type: StringType },
    isEnable: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default OfferType;
