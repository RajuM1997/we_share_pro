// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  console.log(values);
  if (values.image == null) {
    toastr.error("Error Occured", "Please Add category Image");
  } else {
    const mutation = `
  mutation addCategory(
    $title: String,
    $subTitle: String,
    $category: String,
    $image: String
  ) {
    addCategory(
      title: $title,
      subTitle: $subTitle,
      category: $category,
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
    console.log(data);

    if (data.addCategory.status === "success") {
      toastr.success("Added Category", "Successfully Added!");
      // history.push("/siteadmin/category");
    } else {
      toastr.error("Added Category", "Failed to create");
    }
  }
}

export default submit;
