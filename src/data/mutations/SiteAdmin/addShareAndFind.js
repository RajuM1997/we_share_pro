import ShareAndFindType from "../../types/siteadmin/ShareAndFindType";
import { ShareAndFind } from "../../../data/models";
import { GraphQLID as IntType, GraphQLString as StringType } from "graphql";
const addShareAndFind = {
  type: ShareAndFindType,
  args: {
    mainTitle: { type: StringType },
    subTitle: { type: StringType },
    btnText: { type: StringType },
    image: { type: StringType },
  },
  async resolve({ request }, { mainTitile, subTitle, btnText, image }) {
    if (request.user && request.user.admin == true) {
      const Update = await ShareAndFind.create({
        mainTitile: mainTitile,
        subTitle: subTitle,
        btnText: btnText,
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
export default addShareAndFind;
