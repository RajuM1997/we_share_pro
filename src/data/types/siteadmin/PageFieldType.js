import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const PageFieldType = new ObjectType({
  name: "PageField",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    step: { type: StringType },
    PageId: { type: IntType },
    isEnable: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default PageFieldType;
