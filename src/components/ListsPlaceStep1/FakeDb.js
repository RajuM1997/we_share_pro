export const Field = [
  {
    pageId: 1,
    title: "Choose Category to list",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "select",
        options: [
          {
            value: "house",
            label: "House",
          },
        ],
      },
    ],
  },
  {
    pageId: 2,
    title: "What kind of place do you have?",
    step: "STEP 1",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "select",
        options: [
          {
            value: "house",
            label: "Sub-Category",
          },
        ],
      },
      {
        id: 2,
        type: "select",
        options: [
          {
            value: "for 1 guest",
            label: "for 1 guest",
          },
        ],
      },
    ],
  },
  {
    pageId: 3,
    title: "What kind of place are you listing?",
    type: "dropdown",
    fields: [
      {
        id: 1,
        label: "What type of property is this?",
        type: "select",
        options: [
          {
            value: "house",
            label: "House",
          },
          {
            value: "apartment",
            label: "Apartment",
          },
          {
            value: "bed & breakfast",
            label: "Bed & Breakfast",
          },
        ],
      },
      {
        id: 2,
        title: "What will guests have?",
        type: "select",
        options: [
          {
            value: "private room",
            label: "Private Room",
          },
          {
            value: "entire place",
            label: "Entire Place",
          },
          {
            value: "shared room",
            label: "Shared Room",
          },
        ],
      },
      {
        id: 3,
        label: "How many total rooms does your property have?",
        type: "select",
        options: [
          {
            value: "1-5 rooms",
            label: "1-5 Rooms",
          },
          {
            value: "6-25 rooms",
            label: "6-25 Rooms",
          },
          {
            value: "25-50 rooms",
            label: "25-50 Rooms",
          },
          {
            value: "50-100 rooms",
            label: "50-100 Rooms",
          },
          {
            value: "100+ rooms",
            label: "100+ Rooms",
          },
        ],
      },
      {
        id: 4,
        label: "Is this your personal home?",
        type: "checkbox",
        options: [
          {
            value: "yes",
            label: "Yes",
          },
          {
            value: "no",
            label: "No",
          },
        ],
      },
    ],
  },
  {
    pageId: 4,
    title: "How many guests can your place accommodate?",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "increment",
        options: [
          {
            value: "1 guest",
            label: "1 Guest",
          },
        ],
      },
      {
        id: 2,
        label: "How many bedrooms can guests use?",
        type: "select",
        options: [
          {
            value: "1 bedroom",
            label: "1 Bedroom",
          },
          {
            value: "2 bedroom",
            label: "2 Bedroom",
          },
          {
            value: "3 bedroom",
            label: "3 Bedroom",
          },
          {
            value: "4 bedroom",
            label: "4 Bedroom",
          },
          {
            value: "5 bedroom",
            label: "5 Bedroom",
          },
          {
            value: "6 bedroom",
            label: "6 Bedroom",
          },
          {
            value: "7 bedroom",
            label: "7 Bedroom",
          },
          {
            value: "8 bedroom",
            label: "8 Bedroom",
          },

          {
            value: "9 bedroom",
            label: "9 Bedroom",
          },
          {
            value: "10 bedroom",
            label: "10 Bedroom",
          },
        ],
      },
      {
        id: 3,
        label: "How many beds can guests use?",
        type: "increment",
        options: [
          {
            value: "1 bed",
            label: "1 Bed",
          },
        ],
      },
      {
        id: 4,
        label: "Single",
        type: "select",
        options: [
          {
            value: "single",
            label: "Single",
          },
          {
            value: "double",
            label: "Double",
          },
          {
            value: "queen",
            label: "Queen",
          },
          {
            value: "king",
            label: "King",
          },
          {
            value: "bunk bed",
            label: "Bunk Bed",
          },
        ],
      },
    ],
  },
  {
    pageId: 5,
    title: "How many bathrooms?",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "increment",
        option: [
          {
            value: "1 bathroom",
            label: "1 Bathroom",
          },
        ],
      },
      {
        id: 2,
        type: "select",
        option: [
          {
            value: "Private Room",
            label: "private room",
          },
          {
            value: "shared room",
            label: "Shared Room",
          },
          {
            value: "other",
            label: "Other",
          },
        ],
      },
    ],
  },
  {
    pageId: 6,
    title: "Where’s your place located?",
    type: "textInput",
    fields: [
      {
        id: 1,
        placeholder: "Your Full Address",
        type: "textInput",
      },
    ],
  },
  {
    pageId: 7,
    title: "Where’s your place located?",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "select",
        label: "Country",
        options: [
          {
            value: "",
            label: "Choose Country ",
          },
        ],
      },
      {
        id: 2,
        type: "textInput",
        placeholder: "Street Address",
        label: "Street Address",
      },
      {
        id: 3,
        type: "textInput",
        placeholder: "Apt, Suite, Bldg. (optional)",
        label: "Apt, Suite, Bldg. (optional)",
      },
      {
        id: 4,
        type: "textInput",
        label: "City",
      },
      {
        id: 5,
        type: "textInput",
        label: "State / Province",
      },
    ],
  },
  {
    pageId: 8,
    title: "Where’s your place located?",
    type: "map",
    fields: [
      {
        id: 1,
        type: "map",
      },
    ],
  },
  {
    pageId: 9,
    title: "What amenities do you offer?",
    title2: "essentialsAmenities",
    type: "checkbox",
    essentialsAmenities: [
      {
        id: 2,
        value: "wifi",
        label: "Wifi",
        type: "checkbox",
      },
      {
        id: 3,
        value: "shampoo",
        label: "Shampoo",
        type: "checkbox",
      },
      {
        id: 4,
        value: "closet/drawers",
        label: "Closet/drawers",
        type: "checkbox",
      },
      {
        id: 5,
        value: "hair dryer",
        label: "Hair dryer",
        type: "checkbox",
      },
      {
        id: 6,
        value: "	parking",
        label: "	Parking",
        type: "checkbox",
      },
      {
        id: 7,
        value: "swimming Pool",
        label: "Swimming Pool",
        type: "checkbox",
      },
    ],
    safetyAmenities: [
      {
        id: 1,
        value: "smoke detector",
        label: "Smoke detector",
        type: "checkbox",
      },
      {
        id: 2,
        value: "carbon monoxide detector",
        label: "Carbon monoxide detector",
        type: "checkbox",
      },
      {
        id: 3,
        value: "first aid kit",
        label: "First aid kit",
        type: "checkbox",
      },
      {
        id: 4,
        value: "safety card",
        label: "Safety card",
        type: "checkbox",
      },
    ],
  },
  {
    pageId: 10,
    title: "What spaces can guests use?",
    type: "checkbox",
    spaces: [
      {
        id: 1,
        value: "kitchen",
        label: "Kitchen",
        type: "checkobx",
      },
      {
        id: 2,
        value: "laundry – washer",
        label: "Laundry – washer",
        type: "checkobx",
      },
      {
        id: 3,
        value: "laundry – dryer",
        label: "Laundry – dryer",
        type: "checkobx",
      },
      {
        id: 4,
        value: "parking",
        label: "Parking",
        type: "checkobx",
      },
    ],
  },
  {
    pageId: 11,
    step: "Step 2: Set the scene",
    title: "Photos",
    type: "image",
    fields: [
      {
        id: 1,
        type: "image",
      },
    ],
  },
  {
    pageId: 12,
    step: "Step 2: Set the scene",
    title: "Choose a photo for cover image",
    type: "image",
    fields: [
      {
        id: 1,
        type: "image",
      },
    ],
  },
  {
    pageId: 13,
    step: "Step 2: Set the scene",
    title: "Edit your description",
    type: "textarea",
    fields: [
      {
        id: 1,
        label: "Summary",
        type: "textarea",
      },
    ],
  },
  {
    pageId: 14,
    step: "Step 2: Set the scene",
    title: "Name your place",
    type: "textInput",
    fields: [
      {
        id: 1,
        type: "textInput",
      },
    ],
  },
  {
    pageId: 15,
    step: "Step 3: Get ready for guests",
    title: "Review guests requirements",
    type: "checkbox",
    fields: [
      {
        id: 1,
        value: "Agree to your house rules",
        type: "checkbox",
      },
    ],
  },
  {
    pageId: 16,
    step: "Step 3: Get ready for guests",
    title: "Set house rules for your guests",
    type: "checkbox",
    fields: [
      {
        id: 1,
        value: "Suitable for children (2-14year)",
        type: "checkbox",
      },
    ],
  },
  {
    pageId: 17,
    step: "Step 3: Get ready for guests",
    title: "How guests book: Instantly",
    type: "checkbox",
    fields: [
      {
        id: 1,
        value: "Agree to your house rules",
        type: "checkbox",
      },
    ],
  },
  {
    pageId: 18,
    step: "Step 3: Get ready for guests",
    title: "How much notice do you need before a guests arrives",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "select",
        options: [
          {
            value: "2 Days",
            label: "2 Days",
          },
        ],
      },
      {
        id: 2,
        type: "select",
        options: [
          {
            label: "When can guests check in?",
            value: "Flexible",
          },
        ],
      },
      {
        id: 3,
        type: "select",
        options: [
          {
            label: "To :",
            value: "Flexible",
          },
        ],
      },
    ],
  },
  {
    pageId: 19,
    step: "Step 3: Get ready for guests",
    title: "Booking Window",
    type: "dropdown",
    fields: [
      {
        id: 1,
        type: "select",
        options: [
          {
            value: "All future dates",
            label: "All future dates",
          },
        ],
      },
      {
        id: 2,
        type: "select",
        label: "Cancellation Policy",
        options: [
          {
            value: "Flexible",
            label: "Flexible",
          },
        ],
      },
    ],
  },
  {
    pageId: 20,
    title: "Trip Length",
    step: "Step 3: Get ready for guests",
    type: "increment",
    fields: [
      {
        id: 1,
        type: "increment",
        options: [
          {
            value: "1 Night min",
            label: "1 Night min",
          },
        ],
      },
      {
        id: 2,
        type: "increment",
        options: [
          {
            value: "1 bedroom",
            label: "1 Bedroom",
          },
          {
            value: "1 Night max",
            label: "1 Night max",
          },
        ],
      },
    ],
  },
  {
    pageId: 21,
    step: "Step 3: Get ready for guests",
    title: "Base Price",
    subTitle: "Your base price is your default nightly rate",
    type: "numberInput",
    fields: [
      {
        id: 1,
        type: "numberInput",
        label: "Base Price",
        options: [
          {
            type: "Number",
          },
        ],
      },
      {
        id: 2,
        type: "numberInput",
        label: "Cleaning Price",
        options: [
          {
            type: "number",
          },
        ],
      },
      {
        id: 3,
        type: "select",
        label: "Currency",
        options: [
          {
            value: "USD",
            label: "USD",
          },
        ],
      },
    ],
  },
  {
    pageId: 22,
    step: "Step 3: Get ready for guests",
    title: "Calendar",
    type: "Calendar",
    fields: [
      {
        id: 1,
        type: "calendar",
        label: "calendar",
      },
    ],
  },
  {
    pageId: 22,
    step: "Step 3: Get ready for guests",
    title: "Discounts",
    subTitle: "Discounts for logner stay",
    type: "numberInput",
    fields: [
      {
        id: 1,
        type: "numberInput",
        label: "Weekly discount",
        options: [
          {
            type: "Number",
          },
        ],
      },
      {
        id: 2,
        type: "numberInput",
        label: "Monthly discount",
        options: [
          {
            type: "Number",
          },
        ],
      },
    ],
  },
  {
    pageId: 23,
    step: "Step 3: Get ready for guests",
    title: "Increase your earning with instant Book",
    subTitle: "Discounts for logner stay",
    type: "numberInput",
    fields: [
      {
        id: 1,
        type: "numberInput",
        label: "Weekly discount",
        options: [
          {
            type: "Number",
          },
        ],
      },
      {
        id: 2,
        type: "numberInput",
        label: "Monthly discount",
        options: [
          {
            type: "Number",
          },
        ],
      },
    ],
  },
  {
    pageId: 24,
    step: "Step 3: Get ready for guests",
    title: "Increase your earning with instant Book",
    subTitle:
      "Instant book can give you listing an odge. Not only do gusets prefer to book instantly, we're promoting Book listings in search result.",
    title2: "Who can book instantly",
    type: "checkbox",
    fields: [
      {
        id: 1,
        type: "checkbox",
        label: "CHOOSE WHO CAN AVAILABLE DAYS WITHOUT REQUESTING APPROVAL",
        options: [
          {
            type: "checkbox",
            label:
              "Guests who your requirements and agree to your rules Anyone else must send a reservation request ",
            value:
              "Guests who your requirements and agree to your rules Anyone else must send a reservation request ",
          },
        ],
      },
      {
        id: 2,
        type: "checkbox",
        options: [
          {
            type: "checkbox",
            label: "No one. All guests must send reservation requests.",
            value: "No one. All guests must send reservation requests.",
          },
        ],
      },
    ],
  },
  {
    pageId: 24,
    step: "Step 3: Get ready for guests",
    title: "Your local laws and taxes",
    subTitle:
      "Take a moment to review your local laws. We want to make sure you've got everything you need to get off a great start.",
    type: "text",
    subTitle2: "",
  },
];
