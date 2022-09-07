import React from "react";
import Layout from "../../components/Layout";
import fetch from "../../core/fetch";
import ViewCategory from "./ViewCategory";

const title = "View Category";

export default async function action({ params }) {
  const getHostListingByCategory = `
    query getHostListingByCategory($categoryId: Int!) {
      getHostListingByCategory(categoryId: $categoryId) {
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
  const categoryId = Number(params.id);
  const resp = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getHostListingByCategory,
      variables: { categoryId },
    }),
  });

  const {data} = await resp.json();
  const listing = data?.getHostListingByCategory || [];
  return {
    title: title,
    component: (
      <Layout>
        <ViewCategory listing={listing} title={title} />
      </Layout>
    ),
  };
}
