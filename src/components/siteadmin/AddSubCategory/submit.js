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
    $description: String,
    $address: String,
    $subCategory: String,
    $guests: String,
    $bedrooms: String,
    $beds: String,
    $baths: String,
    $image: String,
    $primaryCategory: String,
  ) {
    addSubCategory(
      title: $title,
      description: $description,
      address: $address,
      subCategory: $subCategory,
      guests: $guests,
      bedrooms: $bedrooms,
      beds: $beds,
      baths: $baths,
      image: $image,
      primaryCategory: $primaryCategory,
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

    if (data.addSubCategory.status === "success") {
      toastr.success("Added Sub Category", "Successfully Added!");
      // history.push("/siteadmin/popularlocation");
    } else {
      toastr.error("Added Category", "Failed to create");
    }
  }
}

export default submit;
