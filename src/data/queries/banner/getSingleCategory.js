// GrpahQL
import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

import SingleCategoryType from "../../types/SingleCategoryType";
import { SingleCategory } from "../../models";

const getSingleCategory = {
  type: SingleCategoryType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request }, { id }) {
    return await SingleCategory.findOne({
      where: { id: id },
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
