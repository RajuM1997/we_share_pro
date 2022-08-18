// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";

const submit = (subCategoryId) => async (values, dispatch) => {
  console.log("values", values);
  if (values == null) {
    toastr.error("Error Occured", "Please Add page Field");
  } else {
    const mutation = `
  mutation addPageField(
    $title: String,
    $step: Int,
    $pageId: Int,
    $subCategoryId: Int,
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
        variables: { subCategoryId: Number(subCategoryId), pageId: Number(values?.pageId), step: Number(values?.step), title: values?.title },
      }),
      credentials: "include",
    });

    const { data } = await resp.json();
    console.log(data);

    if (data?.addPageField?.status === "success") {
      toastr.success("Page Field", "Successfully Added!");
      history.push(`/siteadmin/fieldSetting/${subCategoryId}`);
    } else {
      toastr.error("Page Field", data?.addPageField?.status || "Failed to create");
    }
  }
};

export default submit;
