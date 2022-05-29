import OfferType from "../../types/siteadmin/OfferType";
import { Offer } from "../../models";
import { GraphQLString as StringType } from "graphql";

const addOffer = {
  type: OfferType,
  args: {
    title: { type: StringType },
    dec: { type: StringType },
    image: { type: StringType },
  },
  async resolve({ request }, { title, dec, image }) {
    if (request.user && request.user.admin == true) {
      const Update = await Offer.create({
        title: title,
        dec: dec,
        image: image,
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
export default addOffer;
