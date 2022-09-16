import React from "react";
import Layout from "../../components/Layout";
import NotFound from "../notFound/NotFound";
import ViewListings from "./ViewListings";
import fetch from "../../core/fetch";

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
  const getHostListingDetailsById = `
    query getHostListingDetailsById($id: Int!) {
      getHostListingDetailsById(id: $id) {
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
        state,
        city,
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

  const getUsersProfile = `
    query getUsersProfile($profileId: Int!) {
      getUsersProfile(profileId: $profileId) {
        profileId
        firstName
    }
  }
  `;

  const listingId = Number(params.listId);
  const resp = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getHostListingDetailsById,
      variables: { id: listingId },
    }),
  });
  const { data } = await resp.json();

  // const userId = data.getHostListingDetailsById.userId;
  const res = await fetch("/graphql", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getUsersProfile,
      variables: { profileId: 3 },
    }),
  });
  const { data: usersProfile } = await res.json();
  console.log(usersProfile);
  return {
    title: title,
    component: (
      <Layout>
        <ViewListings
          title={title}
          details={data?.getHostListingDetailsById || []}
        />
      </Layout>
    ),
  };
}
