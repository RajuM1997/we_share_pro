// Fetch Request
import fetch from "../../../core/fetch/fetch.server";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  console.log(values);
  if (values.image == null) {
    toastr.error("Error Occured", "Please Add Sub Category Image");
  } else {
    const mutation = `
  mutation addSubCategory(
    $title: String,
    $subCategory: String,
    $primaryCategory: String,
    $image: String,
   
  ) {
    addSubCategory(
      title: $title,
      subCategory: $subCategory,
      primaryCategory: $primaryCategory,
      image: $image
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

    if (data.addSubCategory.status === "success") {
      toastr.success("Added Sub Category", "Successfully Added!");
      // history.push("/siteadmin/popularlocation");
    } else {
      toastr.error("Added Category", "Failed to create");
    }
  }
}

export default submit;
