import React from "react";
import Layout from "../../components/Layout";
import fetch from "../../core/fetch";
import ViewCategory from "./ViewCategory";
import { url, fileuploadDir } from "../../config.js";
import NotFound from "../notFound/NotFound";

export default async function action({ params }) {
  let listTitle,
    listDescription,
    listPhoto,
    singleCategory,
    lng,
    startDate,
    endDate,
    guests;
  const getSingleCategoryquery = `
    query GetSingleCategory($id: Int!) {
      getSingleCategory(id: $id) {
        id
        title
        category
    }
  }
  `;
  let id = params.id;
  const resp = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getSingleCategoryquery,
      variables: { id },
    }),
  });
  const { data } = await resp.json();
  // console.log(data);
  console.log(params);
  return {
    component: (
      <Layout>
        {/* <pre>{JSON.stringify(context)}</pre> */}
        <ViewCategory singleCategory={data} />
      </Layout>
    ),
  };
}
