export const Field = [
  {
    pageId: 1,
    step: "STEP 1",
    label: "Choose Category to list",
    fields: [
      {
        id: 1,
        type: "select",
        name: "category",
        options: [
          {
            value: "house",
            label: "House",
          },
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
    label: "What kind of place do you have?",
    step: "STEP 1",
    fields: [
      {
        id: 1,
        type: "select",
        name: "sub-category",
        options: [
          {
            value: "house",
            label: "Sub-Category",
          },
          {
            value: "house",
            label: "Sub-Category",
          },
        ],
      },
      {
        id: 2,
        type: "select",

        name: "personCapacity",
        options: [
          {
            value: "for 1 guest",
            label: "for 1 guest",
          },
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
    step: "STEP 1",
    label: "What kind of place are you listing?",
    fields: [
      {
        id: 1,
        label: "What type of property is this?",
        name: "houseType",
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
        label: "What will guests have?",
        type: "select",
        name: "roomType",
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
        name: "buildingSize",
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
        type: "radio",
        name: "residenceType",
        options: [
          {
            value: 1,
            label: "Yes",
          },
          {
            value: 0,
            label: "No",
          },
        ],
      },
    ],
  },
  {
    pageId: 4,
    step: "STEP 1",
    label: "How many guests can your place accommodate?",
    fields: [
      {
        id: 1,
        type: "select",
        name: "personCapacity",
        options: [
          {
            value: "1 guest",
            label: "1 Guest",
          },
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
        name: "bedrooms",
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
        step: "STEP 1",
        label: "How many beds can guests use?",
        type: "select",
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
    step: "STEP 1",
    label: "How many bathrooms?",
    fields: [
      {
        id: 1,
        type: "select",
        name: "bathrooms",
        options: [
          {
            value: "1 bathroom",
            label: "1 Bathroom",
          },
        ],
      },
      {
        id: 2,
        type: "select",
        name: "bathroomType",
        options: [
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
    step: "STEP 1",
    label: "Where’s your place located?",
    name: "location",
    fields: [
      {
        id: 1,
        type: "textInput",
        options: [
          {
            placeholder: "Your Full Address",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    pageId: 7,
    step: "STEP 1",
    label: "Where’s your place located?",
    fields: [
      {
        id: 1,
        type: "select",
        label: "Country",
        name: "country",
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
        name: "street",
        options: [
          {
            placeholder: "Street Address",
            label: "Street Address",
            type: "text",
          },
        ],
      },
      {
        id: 3,
        step: "STEP 1",
        type: "textInput",
        name: "buildingName,",
        options: [
          {
            placeholder: "Apt, Suite, Bldg. (optional)",
            label: "Apt, Suite, Bldg. (optional)",
            type: "text",
          },
        ],
      },
      {
        id: 4,
        type: "textInput",
        name: "city",
        options: [
          {
            label: "City",
            type: "text",
          },
        ],
      },
      {
        id: 5,
        type: "textInput",

        name: "state",
        options: [
          {
            label: "State / Province",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    pageId: 8,
    step: "STEP 1",
    label: "Where’s your place located?",
    fields: [
      {
        id: 1,
        type: "map",
        name: "map",
      },
    ],
  },
  {
    pageId: 9,
    step: "STEP 1",
    label: "What amenities do you offer?",
    type: "checkboxImage",
    fields: [
      {
        id: 1,
        type: "checkboxImage",
        label: "essentialsAmenities",
        name: "amenities",
        options: [
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
      },
      {
        id: 2,
        type: "checkbox",
        name: "safetyAmenities",
        options: [
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
    ],
  },
  {
    pageId: 10,
    step: "STEP 1",
    label: "What spaces can guests use?",
    type: "checkbox",
    fields: [
      {
        id: 1,
        type: "checkbox",
        name: "spaces",
        options: [
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
    ],
  },
  {
    pageId: 11,
    step: "Step 2: Set the scene",
    label: "Photos",
    type: "image",
    fields: [
      {
        id: 1,
        type: "image",
        name: "photo",
      },
    ],
  },
  {
    pageId: 12,
    step: "Step 2: Set the scene",
    label: "Choose a photo for cover image",
    type: "coverImage",
    fields: [
      {
        id: 1,
        type: "coverImage",
        name: "coverPhoto",
      },
    ],
  },
  {
    pageId: 13,
    step: "Step 2: Set the scene",
    label: "Edit your description",
    type: "textarea",
    fields: [
      {
        id: 1,
        label: "Summary",
        type: "textarea",
        name: "description",
      },
    ],
  },
  {
    pageId: 14,
    step: "Step 2: Set the scene",
    label: "Name your place",
    fields: [
      {
        id: 1,
        type: "textInput",
        name: "title",
        options: [
          {
            placeholder: "testing",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    pageId: 15,
    step: "Step 3: Get ready for guests",
    label: "Review guests requirements",
    fields: [
      {
        id: 1,
        type: "checkbox",
        name: "guest-requirements",
        options: [
          {
            id: 1,
            value: "Agree to your house rules",
            label: "Agree to your house rules",
          },
        ],
      },
    ],
  },
  {
    pageId: 16,
    step: "Step 3: Get ready for guests",
    label: "Set house rules for your guests",
    type: "checkbox",
    fields: [
      {
        id: 1,
        type: "checkbox",
        name: "houseRules",
        options: [
          {
            id: 1,
            value: "Suitable for children (2-14year)",
            label: "Suitable for children (2-14year)",
          },
        ],
      },
    ],
  },
  {
    pageId: 17,
    step: "Step 3: Get ready for guests",
    label: "How guests book: Instantly",
    fields: [
      {
        id: 1,
        type: "checkbox",
        name: "review-how-guests-book",
        options: [
          {
            value: "Agree to your house rules",
            label: "Agree to your house rules",
          },
        ],
      },
    ],
  },
  {
    pageId: 18,
    step: "Step 3: Get ready for guests",
    label: "How much notice do you need before a guests arrives",
    fields: [
      {
        id: 1,
        type: "select",
        name: "bookingNoticeTime",
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
        label: "When can guests check in?",
        name: "checkInStart",
        options: [
          {
            label: "Flexible",
            value: "Flexible",
          },
        ],
      },
      {
        id: 3,
        type: "select",
        label: "To :",
        name: "checkInEnd ",
        options: [
          {
            label: "Flexible",
            value: "Flexible",
          },
        ],
      },
    ],
  },
  {
    pageId: 19,
    step: "Step 3: Get ready for guests",
    label: "Booking Window",
    fields: [
      {
        id: 1,
        type: "select",
        name: "maxDaysNotice",
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
        name: "cancellationPolicy",
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
    label: "Trip Length",
    step: "Step 3: Get ready for guests",
    fields: [
      {
        id: 1,
        type: "select",
        name: "minNight",
        options: [
          {
            value: "1 Night min",
            label: "1 Night min",
          },
        ],
      },
      {
        id: 2,
        type: "select",
        name: "maxNight",
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
    label: "Base Price",
    subLabel: "Your base price is your default nightly rate",
    fields: [
      {
        id: 1,
        type: "textInput",
        label: "Base Price",
        name: "basePrice",
        options: [
          {
            type: "number",
          },
        ],
      },
      {
        id: 2,
        type: "textInput",
        label: "Cleaning Price",
        name: "cleaningPrice",
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
        name: "currency",
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
    label: "Calendar",
    fields: [
      {
        id: 1,
        type: "calendar",
        label: "calendar",
        name: "calendar",
      },
    ],
  },
  {
    pageId: 22,
    step: "Step 3: Get ready for guests",
    label: "Discounts",
    subLabel: "Discounts for logner stay",
    fields: [
      {
        id: 1,
        type: "textInput",
        label: "Weekly discount",
        name: "weeklyDiscount",
        options: [
          {
            type: "number",
          },
        ],
      },
      {
        id: 2,
        type: "textInput",
        label: "Monthly discount",
        name: "monthlyDiscount",
        options: [
          {
            type: "number",
          },
        ],
      },
    ],
  },
  {
    pageId: 23,
    step: "Step 3: Get ready for guests",
    label: "Increase your earning with instant Book",
    subLabel:
      "Instant book can give you listing an odge. Not only do gusets prefer to book instantly, we're promoting Book listings in search result.",
    label2: "Who can book instantly",
    fields: [
      {
        id: 1,
        type: "checkbox",
        name: "bookingType",
        label: "CHOOSE WHO CAN AVAILABLE DAYS WITHOUT REQUESTING APPROVAL",
        options: [
          {
            type: "checkbox",
            label:
              "Guests who your requirements and agree to your rules Anyone else must send a reservation request ",
            value:
              "Guests who your requirements and agree to your rules Anyone else must send a reservation request ",
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
    label: "Your local laws and taxes",
    name: "local-laws",
    subLabel:
      "Take a moment to review your local laws. We want to make sure you've got everything you need to get off a great start.",
    fields: [
      {
        id: 1,
        type: "text",
        description:
          "Please educate yourself about the laws in your jurisdiction before listing your space.",
        description2:
          "Most cities have rules covering homesharing, and the specific codes and ordinances can appear in many places (such as zoning, building, licensing or tax codes). In most places, you must register, get a permit, or obtain a license before you list your property or accept guests. You may also be responsible for collecting and remitting certain taxes. In some places, short-term rentals could be prohibited altogether.",
        description3:
          "Since you are responsible for your own decision to list or book, you should get comfortable with the applicable rules before listing on Your Site. To get you started, we offer some helpful resources under “Your City Laws.” ",
        description4:
          "By accepting our Terms of Service and listing your space, you certify that you will follow applicable laws and regulations.",
      },
    ],
  },
];
