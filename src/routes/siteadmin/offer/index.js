import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import Offer from "./Offer";

// const title = "Offer";

export default async function action({ store }) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges =
    store.getState().adminPrevileges.privileges &&
    store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return {
      redirect: "/siteadmin/login",
    };
  }

  // Admin restriction
  // if (!restrictUrls("/siteadmin/categorys", adminPrivileges)) {
  //   return {
  //     redirect: "/siteadmin",
  //   };
  // }
  return {
    component: (
      <AdminLayout>
        <Offer />
      </AdminLayout>
    ),
  };
}