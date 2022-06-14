import BannerType from "../../types/siteadmin/BannerType";
import { NewBannerHome } from "../../models";
import { GraphQLString as StringType } from "graphql";

const addBanner = {
  type: BannerType,
  args: {
    title: { type: StringType },
    description: { type: StringType },
    image: { type: StringType },
    colorText: { type: StringType },
    bottomText: { type: StringType },
    category: { type: StringType },
  },
  async resolve(
    { request },
    { title, description, image, colorText, bottomText, category }
  ) {
    if (request.user && request.user.admin == true) {
      const Update = await NewBannerHome.create({
        title: title,
        description: description,
        image: image,
        colorText: colorText,
        bottomText: bottomText,
        category: category,
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
export default addBanner;
