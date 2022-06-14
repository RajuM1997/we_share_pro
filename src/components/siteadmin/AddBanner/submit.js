// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  console.log(values);
  if (values.image == null) {
    toastr.error("Error Occured", "Please Add Banner Image");
  } else {
    const mutation = `
  mutation addBanner(
    $title: String,
    $description: String,
    $image: String,
    $colorText: String,
    $bottomText: String,
    $category: String
  ) {
    addBanner(
      title: $title,
      description: $description,
      image: $image
      colorText: $colorText,
      bottomText: $bottomText,
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
    console.log(data);

    if (data.addBanner.status === "success") {
      toastr.success("Added Banner", "Successfully Added!");
      // history.push("/siteadmin/category");
    } else {
      toastr.error("Added Banner", "Failed to create");
    }
  }
}

export default submit;
