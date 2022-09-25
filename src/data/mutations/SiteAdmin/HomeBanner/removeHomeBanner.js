import BannerType from "../../../types/siteadmin/BannerType";
import { NewBannerHome } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const removeHomeBanner = {
  type: BannerType,

  args: {
    id: { type: IntType },
    image: { type: StringType },
  },

  async resolve({ request }, { id, image }) {
    if (request.user && request.user.admin == true) {
      let updateHomeBanner = await NewBannerHome.update(
        {
          image: null,
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

export default removeHomeBanner;
