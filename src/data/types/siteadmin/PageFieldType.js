import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLBoolean as BooleanType,
} from "graphql";

const PageFieldType = new ObjectType({
  name: "PageFields",
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    step: { type: IntType },
    subCategoryId: { type: IntType },
    pageId: { type: IntType },
    isEnable: { type: BooleanType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default PageFieldType;
