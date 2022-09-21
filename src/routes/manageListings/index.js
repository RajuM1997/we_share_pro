import React from "react";
import ManageListings from "./ManageListings";
import UserLayout from "../../components/Layout/UserLayout";
import {
  getListingSteps,
  resetListingSteps,
} from "../../actions/getListingSteps";

const title = "Manage Listing";

export default async function action({ params, store }) {
  // From Redux Store
  // let isAuthenticated = store.getState().runtime.isAuthenticated;

  // store.dispatch(resetListingSteps());
  // await store.dispatch(getListingSteps());

  // if (!isAuthenticated) {
  //   return { redirect: '/login' };
  // }

  return {
    title,
    component: (
      <UserLayout>
        <ManageListings />
      </UserLayout>
    ),
  };
}
