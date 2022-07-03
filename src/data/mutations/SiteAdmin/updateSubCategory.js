import SubCategoryType from "../../types/siteadmin/SubCategoryType";
import { SubCategory } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateSubCategory = {
  type: SubCategoryType,
  args: {
    id: { type: IntType },
    title: { type: StringType },
    description: { type: StringType },
    address: { type: StringType },
    subCategory: { type: StringType },
    guests: { type: StringType },
    bedrooms: { type: StringType },
    beds: { type: StringType },
    baths: { type: StringType },
    image: { type: StringType },
    primaryCategory: { type: StringType },
  },
  async resolve(
    { request },
    {
      id,
      title,
      description,
      address,
      subCategory,
      guests,
      bedrooms,
      beds,
      baths,
      image,
      primaryCategory,
    }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await SubCategory.update(
        {
          title: title,
          description: description,
          address: address,
          subCategory: subCategory,
          guests: guests,
          bedrooms: bedrooms,
          beds: beds,
          baths: baths,
          image: image,
          primaryCategory: primaryCategory,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return {
        status: "success",
      };
    } else {
      return {
        status: "failed",
      };
    }
  },
};
export default updateSubCategory;
