// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";

const submit = (subCategoryId) => async (values, dispatch) => {
  console.log(values);
  if (values == null) {
    toastr.error("Error Occured", "Please Add page Field");
  } else {
    const mutation = `
  mutation addPageField(
    $title: String,
    $step: String,
    $pageId: String,
    $subCategoryId: String,
  ) {
    addPageField(
      title: $title,
      step: $step,
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
        variables: { ...values, subCategoryId: Number(subCategoryId) },
      }),
      credentials: "include",
    });

    const { data } = await resp.json();
    console.log(data);

    if (data.addPageField.status === "success") {
      toastr.success("Page Field", "Successfully Added!");
      history.push(`/siteadmin/pageField/${subCategoryId}`);
    } else {
      toastr.error("Page Field", "Failed to create");
    }
  }
};

export default submit;
