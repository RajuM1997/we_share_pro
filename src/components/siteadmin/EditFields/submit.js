// Fetch Request
import fetch from "../../../core/fetch/fetch.server";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  console.log(values);
  const mutation = `
  mutation updateFields(
    $name: String,
    $title: String,
    $type: String,
    $pageId: Int,
  ) {
    updateFields(
      name: $name,
      title: $title,
      type: $type,
      pageId: $pageId,
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

  if (data.updateFields.status === "success") {
    toastr.success("Update Fields", "Changes are updated!");
    history.push("/siteadmin/");
  } else {
    toastr.error("Update Fields", "Updating Fields failed");
  }
}

export default submit;
