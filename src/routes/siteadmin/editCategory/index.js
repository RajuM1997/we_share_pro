import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";

import { restrictUrls } from "../../../helpers/adminPrivileges";
import EditCategory from "./EditCategory";

const title = "Edit Category";

export default async function action({ store, params }) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges =
    store.getState().adminPrevileges.privileges &&
    store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return { redirect: "/siteadmin/login" };
  }

  // Admin restriction
  if (!restrictUrls("/siteadmin/edit/category/", adminPrivileges)) {
    return { redirect: "/siteadmin" };
  }

  const id = Number(params.id);

  return {
    title,
    component: (
      <AdminLayout>
        <EditCategory title={title} id={id} />
      </AdminLayout>
    ),
  };
}
