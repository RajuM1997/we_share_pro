import React from "react";
import Layout from "../../components/Layout";
import NotFound from "../notFound/NotFound";
import ViewListings from "./ViewListings";

const title = "View Listing";

function renderNotFound() {
  return {
    title,
    component: (
      <Layout>
        <NotFound title={title} />
      </Layout>
    ),
    status: 404,
  };
}

export default async function action({ params, store, query }) {
  console.log(params);
  return {
    title: title,
    component: (
      <Layout>
        <ViewListings title={title} />
      </Layout>
    ),
  };
}
