import OfferType from "../../../types/siteadmin/OfferType";
import { Offer } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const uploadOffer = {
  type: OfferType,

  args: {
    image: { type: StringType },
    id: { type: IntType },
  },

  async resolve({ request }, { image, id }) {
    if (request.user && request.user.admin == true) {
      let updateOffer = await Offer.update(
        {
          image: image,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updateOffer) {
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

export default uploadOffer;
