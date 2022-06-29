// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";
import history from "../../../core/history";
async function submit(values, dispatch) {
  const mutation = `
  mutation updateSubCategory(
     $id: Int,
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
    updateSubCategory(
       id: $id,
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
  console.log(data);
  const { data } = await resp.json();

  if (data.updateSubCategory.status === "success") {
    toastr.success("Update Sub Category", "Changes are updated!");
    history.push("/siteadmin/subCategory");
  } else {
    toastr.error("Update Sub Category", "Updating Sub category failed");
  }
}

export default submit;
