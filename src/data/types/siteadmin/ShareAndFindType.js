import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from "graphql";

const ShareAndFindType = new ObjectType({
  name: "ShareAndFind",
  fields: {
    id: { type: IntType },
    mainTitle: { type: StringType },
    subTitle: { type: StringType },
    btnText: { type: StringType },
    image: { type: StringType },
    isEnable: { type: StringType },
    createdAt: { type: StringType },
    updatedAt: { type: StringType },
    status: { type: StringType },
  },
});

export default ShareAndFindType;
