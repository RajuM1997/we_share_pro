export const Field = [
  {
    pageId: 1,
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
    pageId: 2,
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
    pageId: 3,
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
    pageId: 4,
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
    pageId: 5,
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
    pageId: 6,
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
    pageId: 7,
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
    pageId: 8,
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
];
