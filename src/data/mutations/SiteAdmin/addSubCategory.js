import SubCategoryType from "../../types/siteadmin/SubCategoryType";
import { SubCategory } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const addSubCategory = {
  type: SubCategoryType,
  args: {
    title: { type: StringType },
    description: { type: StringType },
    address: { type: StringType },
    subCategory: { type: StringType },
    primaryCategory: { type: StringType },
    guests: { type: StringType },
    bedrooms: { type: StringType },
    beds: { type: StringType },
    baths: { type: StringType },
    image: { type: StringType },
  },
  async resolve(
    { request },
    {
      title,
      description,
      address,
      subCategory,
      primaryCategory,
      guests,
      bedrooms,
      beds,
      baths,
      image,
    }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await SubCategory.create({
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
      });
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
export default addSubCategory;
