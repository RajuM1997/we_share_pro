// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  const mutation = `
  mutation updatePageField(
    $id: Int,
    $title: String,
    $step: String,
    $pageId: String,
  ) {
    updatePageField(
      id: $id,
      title: $title,
      step: $step,
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

  if (data.updatePageField.status === "success") {
    toastr.success("Update Page Field", "Changes are updated!");
    history.push("/siteadmin/fieldSetting");
  } else {
    toastr.error("Update Page Field", "Updating category failed");
  }
}

export default submit;
