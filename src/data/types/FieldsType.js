import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLBoolean as BooleanType,
} from "graphql";

const FieldsType = new ObjectType({
  name: "Fields",
  fields: {
    id: {
      type: IntType,
    },
    name: {
      type: StringType,
    },
    title: {
      type: StringType,
    },
    fields: {
      type: StringType,
    },
    subCategoryId: {
      type: IntType,
    },
    type: {
      type: StringType,
    },
    pageId: {
      type: IntType,
    },

    isEnable: {
      type: BooleanType,
    },
    status: {
      type: StringType,
    },
  },
});

export default FieldsType;
