// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  const mutation = `
  mutation updateCategory(
    $id: Int,
    $title: String,
    $subTitle: String,
    $image: String,
    $category: String,
  ) {
    updateCategory(
      id: $id,
      title: $title,
      subTitle: $subTitle,
      image: $image,
      category: $category,
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
  console.log("category", resp);

  if (data.updateCategory.status === "success") {
    toastr.success("Update Category", "Changes are updated!");
    history.push("/siteadmin/categorys");
  } else {
    toastr.error("Update Category", "Updating category failed");
  }
}

export default submit;
