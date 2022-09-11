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
      userId,
      categoryId,
      subCategoryId,
      personCapacity,
      itemTitle,
      itemDescription,
      fullAddress,
      buildingName,
      country,
      street,
      zipcode,
      lat,
      lng,
      serviceUnit,
      bookingNoticeTime,
      bookingNoticeCheckInStart,
      bookingNoticeCheckInEnd,
      maxDaysNotice,
      cancellationPolicy,
      minUnit,
      basePrice,
      currency,
      coverPhoto,
      weeklyDiscount,
      monthlyDiscount,
      bookingType,
      dynamicFields,
    }
  }
  `;

  const id = Number(params.id);

  const getSingleCategory = `
    query getSingleCategory($id: Int!) {
     getSingleCategory(id: $id) {
        id
        category
    }
  }
  `;
  const res = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getSingleCategory,
      variables: { id },
    }),
  });

  const { data: singleCategory } = await res.json();
  const singleCategoryData = singleCategory?.getSingleCategory || [];
  console.log("single category", singleCategoryData);
  // console.log(data);

  const categoryId = Number(params.id);

  console.log(id);
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
  const { data } = await resp.json();
  const listing = data?.getHostListingByCategory || [];

  return {
    title: title,
    component: (
      <Layout>
        <ViewCategory
          listing={listing}
          title={title}
          singleCategoryData={singleCategoryData}
        />
      </Layout>
    ),
  };
}
