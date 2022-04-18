// Models
import { ShareAndFind } from "../../models";

import sequelize from "../../sequelize";

// Types
import ShareAndFindType from "../../types/siteadmin/ShareAndFindType";

const getShareAndFindAdmin = {
  type: new List(ShareAndFindType),

  async resolve({ request }) {
    return await ShareAndFind.findAll({
      where: {
        isEnable: true,
      },
      order: [[sequelize.literal("RAND()")]],
    });
  },
};

export default getShareAndFindAdmin;
