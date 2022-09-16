import ShowUserProfileType from "../types/ShowUserProfileType";
import { User, UserLogin, UserClaim, UserProfile } from "../../data/models";

import { GraphQLBoolean as String } from "graphql";

const getUsersProfile = {
  type: ShowUserProfileType,
  args: {
    id: { type: String },
  },
  async resolve({ request }, { id }) {
    return await UserProfile.findById(id);
  },

  // Get All User Profile Data
  //     const userData = await UserProfile.find({
  //       attributes: [
  //         "userId",
  //         "profileId",
  //         "firstName",
  //         "lastName",
  //         "dateOfBirth",
  //         "gender",
  //         "phoneNumber",
  //         "preferredLanguage",
  //         "preferredCurrency",
  //         "location",
  //         "info",
  //         "createdAt",
  //         "picture",
  //       ],
  //       where,
  //     });

  //     return userData;
  //   },
  // };
};
export default getUsersProfile;
