// Fetch Request
import fetch from "../../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";

// Redux
import { closeListSettingsModal } from "../../../actions/siteadmin/modalActions";
import { getAdminListingSettings } from "../../../actions/siteadmin/getAdminListingSettings";

async function submit(values, dispatch) {
  const query = `
    query (
        $name:String,
        $type:String,
         $pageID:Int,
         $isEnable: String,
      ) {
          addNewListSettings (
            name:$name,
            type:$type,
            pageID:$pageID,
            isEnable: $isEnable,
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
      query: query,
      variables: values,
    }),
    credentials: "include",
  });

  const { data } = await resp.json();

  if (data.addNewListSettings.status === "success") {
    dispatch(closeListSettingsModal());
    dispatch(getAdminListingSettings(values.typeId));
    toastr.success(
      "Add New List Settings",
      "List Setting is created successfully!"
    );
  } else {
    toastr.error("Add New List Settings", "Creating List Setting is failed");
  }
}

export default submit;
