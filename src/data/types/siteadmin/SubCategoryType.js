import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const SubCategoryType = new ObjectType({
  name: "SubCategoryInit",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    description: { type: StringType },
    address: { type: StringType },
    subCategory: { type: StringType },
    primaryCategory: { type: StringType },
    guests: { type: StringType },
    bedrooms: { type: StringType },
    beds: { type: StringType },
    baths: { type: StringType },
    image: { type: StringType },
    isEnable: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default SubCategoryType;
