import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import SubField from "./SubField";

const title = "Car";

export default async function action({ store, params }) {
  console.log(params);
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
    title,
    component: (
      <AdminLayout>
        <SubField title={title} />
      </AdminLayout>
    ),
  };
}