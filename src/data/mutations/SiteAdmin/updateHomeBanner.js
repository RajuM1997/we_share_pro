import BannerType from "../../types/siteadmin/BannerType";
import { NewBannerHome } from "../../../data/models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const updateHomeBanner = {
  type: BannerType,
  args: {
    id: { type: IntType },
    title: { type: StringType },
    description: { type: StringType },
    image: { type: StringType },
    colorText: { type: StringType },
    bottomText: { type: StringType },
    category: { type: StringType },
  },
  async resolve(
    { request },
    { id, title, description, image, colorText, bottomText, category }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await NewBannerHome.update(
        {
          title: title,
          description: description,
          image: image,
          colorText: colorText,
          bottomText: bottomText,
          category: category,
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
export default updateHomeBanner;
