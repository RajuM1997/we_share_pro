import { GraphQLInt as IntType, GraphQLNonNull as NonNull } from "graphql";

// Models
import { NewBannerHome } from "../../models";

// Types
import BannerType from "../../types/siteadmin/BannerType";

const editHomeBanner = {
  type: BannerType,

  args: {
    id: { type: new NonNull(IntType) },
  },

  async resolve({ request }, { id }) {
    // Get All User Profile Data
    const BannerData = await NewBannerHome.find({
      attributes: [
        "id",
        "title",
        "description",
        "image",
        "colorText",
        "bottomText",
        "isEnable",
        "category",
      ],
      where: {
        id: id,
      },
    });
    return BannerData;
  },
};

export default editHomeBanner;

/*

query editPopularLocation ($id: Int!) {
    editPopularLocation (id: $id) {
        id
        location
        locationAddress
        isEnable
        image
    }
}

*/
