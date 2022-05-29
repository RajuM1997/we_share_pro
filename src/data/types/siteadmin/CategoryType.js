import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const CategoryType = new ObjectType({
  name: "CategoryInit",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    subTitle: { type: StringType },
    category: { type: StringType },
    image: { type: StringType },
    isEnable: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default CategoryType;
