import { doUpdateImageBanner } from "../../../actions/siteadmin/manageImageBanner";

async function submit(values, dispatch) {
  console.log(values);
  await dispatch(doUpdateImageBanner(values));
}

export default submit;
