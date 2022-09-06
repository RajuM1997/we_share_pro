// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  console.log("editField", values);
  const mutation = `
  mutation updateFields(
    $name: String,
    $title: String,
    $type: String,
    $pageId: Int,
    $subCategoryId: Int,
  ) {
    updateFields(
      name: $name,
      title: $title,
      type: $type,
      pageId: $pageId,
      subCategoryId: $subCategoryId,
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

  if (data.updateFields.status === "success") {
    toastr.success("Update Field", "Changes are updated!");
    history.push(`/siteadmin/fields/${values.subCategoryId}`);
  } else {
    toastr.error("Update Field", "Updating category failed");
  }
}

export default submit;
