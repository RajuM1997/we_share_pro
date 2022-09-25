import BannerType from "../../types/BannerType";
import { NewBannerHome } from "../../models";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
const updateHomeBannerStatus = {
  type: BannerType,
  args: {
    id: { type: IntType },
    isEnable: { type: StringType },
  },
  async resolve({ request }, { id, isEnable }) {
    if (request.user && request.user.admin == true) {
      const Update = await NewBannerHome.update(
        {
          isEnable: isEnable == "true" ? 0 : 1,
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
export default updateHomeBannerStatus;
