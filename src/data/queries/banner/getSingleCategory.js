// GrpahQL
import { GraphQLInt as IntType, GraphQLList as List } from "graphql";

import SingleCateogryTypes from "../../types/SingleCateogryTypes";
import { SingleCategory } from "../../models";

const getSingleCategory = {
  type: new List(SingleCateogryTypes),
  args: {
    id: { type: IntType },
  },

  async resolve({ request }, { id }) {
    return await SingleCategory.findAll({
      where: { id },
    });
  },
};

export default getSingleCategory;

/**
query GetListMeta($listId: Int!) {
  getListMeta(listId: $listId) {
    id
    title
    description
    status
  }
}
 */
