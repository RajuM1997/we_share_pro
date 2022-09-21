import ShowUserProfileType from "../types/ShowUserProfileType";
import { UserProfile } from "../models";

import { GraphQLString as StringType } from "graphql";

const getUserProfile = {
  type: ShowUserProfileType,

  args: {
    userId: { type: StringType },
  },

  async resolve({ request }, { userId }) {
    return await UserProfile.findOne({
      where: { userId },
    });
  },
};

export default getUserProfile;
