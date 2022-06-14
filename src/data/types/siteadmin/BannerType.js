import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const BannerType = new ObjectType({
  name: "BannerInit",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    description: { type: StringType },
    image: { type: StringType },
    colorText: { type: StringType },
    bottomText: { type: StringType },
    category: { type: StringType },
    isEnable: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default BannerType;
