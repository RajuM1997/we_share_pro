import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const SingleCategoryTypes = new ObjectType({
  name: "SingleCategories",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    subTitle: { type: StringType },
    image: { type: StringType },
    category: { type: StringType },
  },
});

export default SingleCategoryTypes;
