// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  console.log(values);
  if (values == null) {
    toastr.error("Error Occured", "Please Add Location Image");
  } else {
    const mutation = `
  mutation addOffer(
    $title: String,
    $dec: String,
    $image: String
  ) {
    addOffer(
      title: $title,
      dec: $dec,
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

    if (data.addOffer.status === "success") {
      toastr.success("Added Category", "Successfully Added!");
      // history.push("/siteadmin/category");
    } else {
      toastr.error("Added Category", "Failed to create");
    }
  }
}

export default submit;
