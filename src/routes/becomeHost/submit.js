// Fetch Request
import fetch from "../../core/fetch";

// Toaster
import { toastr } from "react-redux-toastr";

const submit = async (values) => {
  console.log("values", values);
  if (values == null) {
    toastr.error("Error Occurred", "Failed to add new listing");
  } else {
    const mutation = `
          mutation createHostListing(
            $userId: String,
            $categoryId: String,
            $subCategoryId: Int,
            $personCapacity: Int,
            $itemTitle: String,
            $itemDescription: String,
            $fullAddress: String,
            $buildingName: String,
            $country: String,
            $street: String,
            $city: String,
            $state: String,
            $zipcode: String,
            $lat: Float,
            $lng: Float,
            $serviceUnit: String ,
            $bookingNoticeTime: String,
            $bookingNoticeCheckInStart: String,
            $bookingNoticeCheckInEnd: String,
            $maxDaysNotice: String,
            $cancellationPolicy: String,
            $minUnit: Int,
            $maxUnit: Int,
            $basePrice: Int,
            $currency: String,
            $coverPhoto: String,
            $weeklyDiscount: Int,
            $monthlyDiscount: Int,
            $bookingType: String,
            $dynamicFields: String,
          ) {
            createHostListing(
                userId: $userId,
                categoryId: $categoryId,
                subCategoryId: $subCategoryId,
                personCapacity: $personCapacity,
                itemTitle: $itemTitle,
                itemDescription: $itemDescription,
                fullAddress: $fullAddress,
                buildingName: $buildingName,
                country: $country,
                street: $street,
                city: $city,
                state: $state,
                zipcode: $zipcode,
                lat: $lat,
                lng: $lng,
                serviceUnit: $serviceUnit ,
                bookingNoticeTime: $bookingNoticeTime,
                bookingNoticeCheckInStart: $bookingNoticeCheckInStart,
                bookingNoticeCheckInEnd: $bookingNoticeCheckInEnd,
                maxDaysNotice: $maxDaysNotice,
                cancellationPolicy: $cancellationPolicy,
                minUnit: $minUnit,
                maxUnit: $maxUnit,
                basePrice: $basePrice,
                currency: $currency,
                coverPhoto: $coverPhoto,
                weeklyDiscount: $weeklyDiscount,
                monthlyDiscount: $monthlyDiscount,
                bookingType: $bookingType,
                dynamicFields: $dynamicFields,
            ) {
                status
            }
          }
        `;

    const resp = await fetch("/graphql", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          ...values,
          dynamicFields: JSON.stringify(values?.dynamicFields),
          coverPhoto: JSON.stringify(values?.coverPhoto),
          basePrice: Number(values?.basePrice),
          subCategoryId: Number(values?.subCategoryId),
          weeklyDiscount: Number(values?.weeklyDiscount),
          monthlyDiscount: Number(values?.monthlyDiscount),
          currency: values?.currency || "USD",
          maxUnit: Number(values?.maxUnit || 0),
          minUnit: Number(values?.minUnit || 0),
          country: values?.country || "US",
        },
      }),
      credentials: "include",
    });

    const { data } = await resp.json();
    console.log(data);
    if (data?.createHostListing.status === "success") {
      toastr.success("Listing", "Successfully Added!");
      // history.push("/siteadmin/category");
    } else {
      toastr.error("Listing", "Failed to Added");
    }
  }
};

export default submit;
