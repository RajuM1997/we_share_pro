import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import AddOffer from "./AddOffer";
// import { restrictUrls } from "../../../helpers/adminPrivileges";

// const title = "Add Popular Location";

export default async function action({ store }) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges =
    store.getState().adminPrevileges.privileges &&
    store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return { redirect: "/siteadmin/login" };
  }

  // Admin restriction
  //   if (!restrictUrls("/siteadmin/popularlocation/add", adminPrivileges)) {
  //     return { redirect: "/siteadmin" };
  //   }

  return {
    component: (
      <AdminLayout>
        <AddOffer />
      </AdminLayout>
    ),
  };
}
