// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  // console.log("HomeBanner", values);
  const mutation = `
  mutation updateHomeBanner(
    $id: Int,
    $description: String,
    $title: String,
    $colorText: String,
    $bottomText: String,
    $category: String,
    $image: String,
  ) {
    updateHomeBanner(
      id: $id,
      description: $description,
      title: $title,
      colorText: $colorText,
      bottomText: $bottomText,
      category: $category,
      image: $image,

    ) {
        status
    }
  }
  `;

  const resp = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: mutation,
      variables: values,
    }),
    credentials: "include",
  });

  const { data } = await resp.json();
  console.log(data);

  if (data.updateHomeBanner.status === "success") {
    toastr.success("Update Field", "Changes are updated!");
    history.push(`/siteadmin/banner`);
  } else {
    toastr.error("Update Field", "Updating category failed");
  }
}

export default submit;
