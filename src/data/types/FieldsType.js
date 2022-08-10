import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLBoolean as BooleanType,
} from "graphql";

const FieldsType = new ObjectType({
  name: "fields",
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
    subTitle: {
      type: StringType,
    },
    step: {
      type: StringType,
    },
    option: {
      type: StringType,
    },
    types: {
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
