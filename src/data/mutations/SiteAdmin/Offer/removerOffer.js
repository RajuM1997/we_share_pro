import OfferType from "../../../types/siteadmin/OfferType";
import { Offer } from "../../../models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const removeOffer = {
  type: OfferType,

  args: {
    id: { type: IntType },
    image: { type: StringType },
  },

  async resolve({ request }, { id, image }) {
    if (request.user && request.user.admin == true) {
      let updateOffer = await Offer.update(
        {
          image: null,
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

export default removeOffer;
