import React from "react";
import Layout from "../../components/Layout";
import fetch from "../../core/fetch";
import ViewCategory from "./ViewCategory";

const title = "View Category";

export default async function action({ params }) {
  const getHostListingBySubCategory = `
    query getHostListingBySubCategory($subCategoryId: Int!) {
      getHostListingBySubCategory(subCategoryId: $subCategoryId) {
        id,
        itemTitle,
        subCategoryId,
        coverPhoto,
        itemDescription,
        basePrice,
        currency
    }
  }
  `;
  let subCategoryId = Number(params.id);
  const resp = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getHostListingBySubCategory,
      variables: { subCategoryId },
    }),
  });

  const {data} = await resp.json();
  // console.log(params);
  const listing = data?.getHostListingBySubCategory || [];
  return {
    title: title,
    component: (
      <Layout>
        <ViewCategory listing={listing} title={title} />
      </Layout>
    ),
  };
}
