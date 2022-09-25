import BannerType from "../../../types/siteadmin/BannerType";
import { NewBannerHome } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const uploadHomeBanner = {
  type: BannerType,

  args: {
    image: { type: StringType },
    id: { type: IntType },
  },

  async resolve({ request }, { image, id }) {
    if (request.user && request.user.admin == true) {
      let updateHomeBanner = await NewBannerHome.update(
        {
          image: image,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updateHomeBanner) {
        return {
          status: "success",
        };
      } else {
        return {
          status: "failed",
        };
      }
    } else {
      return {
        status: "not logged in",
      };
    }
  },
};

export default uploadHomeBanner;
