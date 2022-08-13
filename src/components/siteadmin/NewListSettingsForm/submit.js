// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";

// Redux
import { closeListSettingsModal } from "../../../actions/siteadmin/modalActions";
import { getAdminListingSettings } from "../../../actions/siteadmin/getAdminListingSettings";

async function submit(values, dispatch, fields) {
  console.log(values);
  if (values == null) {
    toastr.error("Error Occured", "Please Add page Field");
  } else {
    const mutation = `
  mutation addFields(
    $name: String,
    $title: String,
    $type: String,
    $fields: String,
    $subCategoryId: Int,
    $pageId: Int,
  ) {
    addFields(
      name: $name,
      title: $title,
      type: $type,
      fields: $fields,
      subCategoryId: $subCategoryId,
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
    console.log(data);

    if (data.addFields.status === "success") {
      toastr.success("Page Field", "Successfully Added!");
      // history.push("/siteadmin/category");
    } else {
      toastr.error("Page Field", "Failed to create");
    }
  }
}

export default submit;
