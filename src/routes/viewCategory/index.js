import React from "react";
import Layout from "../../components/Layout";
import ViewCategory from "./ViewCategory";
// import NotFound from "../notFound/NotFound";

export default async function action() {
  return {
    component: (
      <Layout>
        <ViewCategory />
      </Layout>
    ),
  };
}
