(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPayout~addPayoutFailure~admin~becomeHost~blog~book~cancel~cancellationPolicies~changePassword~con~df58e5c9"],{

/***/ "Q7QM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JRPe");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  home: {
    id: "app.home",
    defaultMessage: "Home",
    description: "Menu item"
  },
  becomeAHost: {
    id: "app.becomeAHost",
    defaultMessage: "Become a host",
    description: "Menu item"
  },
  becomeAHost2: {
    id: "app.becomeAHost2",
    defaultMessage: "Become a hosts",
    description: "Menu item"
  },
  howItWork: {
    id: "app.howItWork",
    defaultMessage: "How It Work",
    description: "Menu item"
  },
  help: {
    id: "app.help",
    defaultMessage: "Help",
    description: "Menu item"
  },
  login: {
    id: "app.login",
    defaultMessage: "Login",
    description: "Menu item"
  },
  signup: {
    id: "app.signup",
    defaultMessage: "Sign up",
    description: "Menu item"
  },
  host: {
    id: "app.host",
    defaultMessage: "Host",
    description: "Menu item"
  },
  hosts: {
    id: "app.hosts",
    defaultMessage: "Hosts",
    description: "Menu item"
  },
  manageHostListing: {
    id: "app.manageHostListing",
    defaultMessage: "Manage host Listings",
    description: "Menu item"
  },
  manageListing: {
    id: "app.manageListing",
    defaultMessage: "Manage Listings",
    description: "Menu item"
  },
  listYourSpace: {
    id: "app.listYourSpace",
    defaultMessage: "List Your Space",
    description: "Menu item"
  },
  yourReservations: {
    id: "app.yourReservations",
    defaultMessage: "Your Reservations",
    description: "Menu item"
  },
  transactionHistory: {
    id: "app.transactionHistory",
    defaultMessage: "Transaction History",
    description: "Menu item"
  },
  profile: {
    id: "app.profile",
    defaultMessage: "Profile",
    description: "Menu item"
  },
  accountSettings: {
    id: "app.accountSettings",
    defaultMessage: "Account Settings",
    description: "Menu item"
  },
  trips: {
    id: "app.trips",
    defaultMessage: "Trips",
    description: "Menu item"
  },
  messages: {
    id: "app.messages",
    defaultMessage: "Messages",
    description: "Menu item"
  },
  dashboard: {
    id: "app.dashboard",
    defaultMessage: "Dashboard",
    description: "Menu item"
  },
  editProfile: {
    id: "app.editProfile",
    defaultMessage: "Edit Profile",
    description: "Menu item"
  },
  logout: {
    id: "app.logout",
    defaultMessage: "Logout",
    description: "Menu item"
  },
  about: {
    id: "app.about",
    defaultMessage: "About",
    description: "Menu item"
  },
  careers: {
    id: "app.careers",
    defaultMessage: "Careers",
    description: "Menu item"
  },
  press: {
    id: "app.press",
    defaultMessage: "Press",
    description: "Menu item"
  },
  policies: {
    id: "app.policies",
    defaultMessage: "Policies",
    description: "Menu item"
  },
  discover: {
    id: "app.discover",
    defaultMessage: "Discover",
    description: "Menu item"
  },
  trustSafety: {
    id: "app.trustSafety",
    defaultMessage: "Trust & Safety",
    description: "Menu item"
  },
  travelCredit: {
    id: "app.travelCredit",
    defaultMessage: "Travel Credit",
    description: "Menu item"
  },
  citizen: {
    id: "app.citizen",
    defaultMessage: "Citizen",
    description: "Menu item"
  },
  businessTravel: {
    id: "app.businessTravel",
    defaultMessage: "Business Travel",
    description: "Menu item"
  },
  guidebooks: {
    id: "app.guidebooks",
    defaultMessage: "Guidebooks",
    description: "Menu item"
  },
  hosting: {
    id: "app.hosting",
    defaultMessage: "Hosting",
    description: "Menu item"
  },
  whyHost: {
    id: "app.whyHost",
    defaultMessage: "Why Host",
    description: "Menu item"
  },
  hospitality: {
    id: "app.hospitality",
    defaultMessage: "Hospitality",
    description: "Menu item"
  },
  responsibleHosting: {
    id: "app.responsibleHosting",
    defaultMessage: "Responsible Hosting",
    description: "Menu item"
  },
  termsPrivacy: {
    id: "app.termsPrivacy",
    defaultMessage: "Terms & Privacy",
    description: "Menu item"
  },
  appsAvailableOn: {
    id: "app.appsAvailableOn",
    defaultMessage: "Apps available on",
    description: "Apps available on"
  },
  or: {
    id: "app.or",
    defaultMessage: "or",
    description: "or"
  },
  signUp: {
    id: "app.signUp",
    defaultMessage: "Sign Up",
    description: "Sign Up Button"
  },
  noAccount: {
    id: "app.noAccount",
    defaultMessage: "Don’t have an account?",
    description: "Don’t have an account?"
  },
  firstNameInvalid: {
    id: "app.firstNameInvalid",
    defaultMessage: "First Name Invalid",
    description: "First Name is Invalid"
  },
  lastNameInvalid: {
    id: "app.lastNameInvalid",
    defaultMessage: "Last Name Invalid",
    description: "Last Name is Invalid"
  },
  emailNotExists: {
    id: "app.emailNotExists",
    defaultMessage: "No account exists for this email. Make sure it's typed in correctly, or “sign up” instead",
    description: "Email Address is not exist"
  },
  logoHeight: {
    id: "app.logoHeight",
    defaultMessage: "Logo height must be numeric value",
    description: "Logo height must be numeric value"
  },
  logoWidth: {
    id: "app.logoWidth",
    defaultMessage: "Logo width must be numeric value",
    description: "Logo width must be numeric value"
  },
  urlInvalid: {
    id: "app.urlInvalid",
    defaultMessage: "Invalid URL",
    description: "URL invalid"
  },
  metaDescription: {
    id: "app.metaDescription",
    defaultMessage: "Description must be 255 characters or less",
    description: "Description must be 255 characters or less"
  },
  metaKeyword: {
    id: "app.metaKeyword",
    defaultMessage: "Keyword must be 255 characters or less",
    description: "Keyword must be 255 characters or less"
  },
  metaTitle: {
    id: "app.metaTitle",
    defaultMessage: "Meta Title must be 255 characters or less",
    description: "Meta Title T must be 255 characters or less"
  },
  password: {
    id: "app.password",
    defaultMessage: "Password",
    description: "Your Password to Login"
  },
  passwordRequired: {
    id: "app.passwordRequired",
    defaultMessage: "Password is required",
    description: "Password is required"
  },
  passwordInvalid: {
    id: "app.passwordInValid",
    defaultMessage: "Your password must be at least 8 characters. Please try again",
    description: "Invalid Password"
  },
  passwordWrong: {
    id: "app.passwordWrong",
    defaultMessage: "Wrong Password. Please try again",
    description: "Wrong Password"
  },
  userBanned: {
    id: "app.userBanned",
    defaultMessage: "You are banned by admin. Please contact admin for Unban",
    description: "You are Banned"
  },
  userBannedTitle: {
    id: "app.userBannedTitle",
    defaultMessage: "We're Sorry!",
    description: "Not Found"
  },
  userBannedSubTitle: {
    id: "app.userBannedSubTitle",
    defaultMessage: " It looks like your account is blocked for some reason. If you need further information, please ",
    description: "Not Found"
  },
  cantLogin: {
    id: "app.cantLogin",
    defaultMessage: "Can’t Login?",
    description: "No se puede iniciar sesión?"
  },
  terms1: {
    id: "app.terms1",
    defaultMessage: "By signing up, I agree to ",
    description: "Terms content part1"
  },
  terms2: {
    id: "app.terms2",
    defaultMessage: "Terms of Service, Nondiscrimination Policy, Payments Terms of Service, Privacy Policy, Guest Refund Policy, and Host Guarantee Terms.",
    description: "Terms content part1"
  },
  signupWithEmail: {
    id: "app.signupWithEmail",
    defaultMessage: "Signup with Email",
    description: "Login Modal title"
  },
  facebook: {
    id: "app.facebook",
    defaultMessage: "Facebook",
    description: "sign up with facebook"
  },
  twitter: {
    id: "app.twitter",
    defaultMessage: "Twitter",
    description: "sign up with twitter"
  },
  google: {
    id: "app.google",
    defaultMessage: "Google",
    description: "Signup with Google"
  },
  signupWith: {
    id: "app.signupWith",
    defaultMessage: "Sign up with",
    description: "Signup with"
  },
  alreadyHaveAccount: {
    id: "app.alreadyHaveAccount",
    defaultMessage: "Already have an account?",
    description: "alreadyHaveAccount"
  },
  termsOfService: {
    id: "app.termsOfService",
    defaultMessage: "Terms of Service",
    description: "Terms of Service"
  },
  nonDiscriminationPolicy: {
    id: "app.nonDiscriminationPolicy",
    defaultMessage: "NonDiscrimination Policy",
    description: "NonDiscrimination Policy"
  },
  dayRequired: {
    id: "app.dayRequired",
    defaultMessage: "Day is required",
    description: "Day is required"
  },
  monthRequired: {
    id: "app.monthRequired",
    defaultMessage: "Month is required",
    description: "Month is required"
  },
  yearRequired: {
    id: "app.yearRequired",
    defaultMessage: "Year is required",
    description: "Year is required"
  },
  birthDay: {
    id: "app.birthDay",
    defaultMessage: "Birthday",
    description: "Birthday"
  },
  paymentTerms: {
    id: "app.paymentTerms",
    defaultMessage: "Payments Terms of Service",
    description: "Payments Terms of Service"
  },
  privacyPolicy: {
    id: "app.privacyPolicy",
    defaultMessage: "Privacy Policy",
    description: "Privacy Policy"
  },
  guestRefundPolicy: {
    id: "app.guestRefundPolicy",
    defaultMessage: "Guest Refund Policy",
    description: "Guest Refund Policy"
  },
  and: {
    id: "app.and",
    defaultMessage: "and",
    description: "And"
  },
  hostGuaranteeTerms: {
    id: "app.hostGuaranteeTerms",
    defaultMessage: "Host Guarantee Terms",
    description: "Host Guarantee Terms"
  },
  forgotPassword: {
    id: "app.forgotPassword",
    defaultMessage: "Forgot Password",
    description: "Forgot Password"
  },
  forgotPasswordInfo: {
    id: "app.forgotPasswordInfo",
    defaultMessage: "Enter the email address associated with your account, and we’ll email you a link to reset your password.",
    description: "Forgot password info"
  },
  backToLogin: {
    id: "app.backToLogin",
    defaultMessage: "Back to login",
    description: "Back to login"
  },
  sendLink: {
    id: "app.sendLink",
    defaultMessage: "Send Link",
    description: "Send Link"
  },
  inbox: {
    id: "app.inbox",
    defaultMessage: "Inbox",
    description: "Inbox"
  },
  yourListings: {
    id: "app.yourListings",
    defaultMessage: "Your Listings",
    description: "Your Listings"
  },
  yourTrips: {
    id: "app.yourTrips",
    defaultMessage: "Your Trips",
    description: "Your Trips"
  },
  account: {
    id: "app.account",
    defaultMessage: "Account",
    description: "Account"
  },
  addListing: {
    id: "app.addListing",
    defaultMessage: "Add New Listings",
    description: " Add New Listings Button"
  },
  profilePhoto: {
    id: "app.profilePhoto",
    defaultMessage: "Profile Photo",
    description: "Profile Photo"
  },
  trustAndVerification: {
    id: "app.trustAndVerification",
    defaultMessage: "Trust and Verification",
    description: "Trust and Verification"
  },
  reviews: {
    id: "app.reviews",
    defaultMessage: "Reviews",
    description: "Reviews"
  },
  viewProfile: {
    id: "app.viewProfile",
    defaultMessage: "View Profile",
    description: "View Profile"
  },
  payoutPreferences: {
    id: "app.payoutPreferences",
    defaultMessage: "Payout Preferences",
    description: "Payout Preferences"
  },
  security: {
    id: "app.security",
    defaultMessage: "Security",
    description: "Security"
  },
  where: {
    id: "app.where",
    defaultMessage: "Where",
    description: "Where"
  },
  when: {
    id: "app.when",
    defaultMessage: "When",
    description: "When"
  },
  guest: {
    id: "app.guest",
    defaultMessage: "Guest",
    description: "Guests"
  },
  search: {
    id: "app.search",
    defaultMessage: "Search",
    description: "Search"
  },
  homeWhere: {
    id: "app.homeWhere",
    defaultMessage: "Destination, city, address",
    description: "Destination, city, address"
  },
  checkIn: {
    id: "app.checkIn",
    defaultMessage: "Check In",
    description: "Check In"
  },
  checkOut: {
    id: "app.checkOut",
    defaultMessage: "Check Out",
    description: "Check Out"
  },
  recommended: {
    id: "app.recommended",
    defaultMessage: "Recommended",
    description: "Recommended Home page Slider title"
  },
  mostViewed: {
    id: "app.mostViewed",
    defaultMessage: "Most Viewed",
    description: "Most Viewed Home page Slider title"
  },
  popularLocation: {
    id: "app.popularLocation",
    defaultMessage: "Popular Location",
    description: "Popular Locations Home page Slider title"
  },
  // category message defiend
  categoryId: {
    id: "app.categoryId",
    defaultMessage: "ID",
    description: "ID"
  },
  categoryName: {
    id: "app.categoryName",
    defaultMessage: "Category name",
    description: "Category name"
  },
  categoryStatus: {
    id: "app.categoryStatus",
    defaultMessage: "Status",
    description: "Status"
  },
  categoryOperation: {
    id: "app.categoryOperation",
    defaultMessage: "Operation",
    description: "Operation"
  },
  category: {
    id: "app.category",
    defaultMessage: "Category Type",
    description: "Category Home page Slider title"
  },
  fieldName: {
    id: "app.fieldName",
    defaultMessage: "Name",
    description: "Name"
  },
  fieldType: {
    id: "app.fieldType",
    defaultMessage: "Type",
    description: "Type"
  },
  fieldTitle: {
    id: "app.fieldTitle",
    defaultMessage: "Title",
    description: "Title"
  },
  editField: {
    id: "app.editField",
    defaultMessage: "Edit Fields",
    description: "Edit"
  },
  fieldPageId: {
    id: "app.fieldPageId",
    defaultMessage: "Page ID",
    description: "Page ID"
  },
  fieldEnabled: {
    id: "app.fieldEnabled",
    defaultMessage: "Enabled",
    description: "Enabled"
  },
  banner: {
    id: "app.banner",
    defaultMessage: "banner Type",
    description: "Category Home page Slider title"
  },
  categoryE: {
    id: "app.categoryE",
    defaultMessage: "Category",
    description: "Cocation"
  },
  addCategory: {
    id: "app.addCategory",
    defaultMessage: "Add Category",
    description: "Add Category"
  },
  addBanner: {
    id: "app.addBanner",
    defaultMessage: "Add Banner",
    description: "Add Banner"
  },
  categoryTypeInputText: {
    id: "app.categoryTypeInputText",
    defaultMessage: "Title",
    description: "Title"
  },
  categorySub: {
    id: "app.categorySub",
    defaultMessage: "Sub Title",
    description: "Sub Title"
  },
  categoryType: {
    id: "app.categoryType",
    defaultMessage: "Category Type",
    description: "Category Type"
  },
  editBanner: {
    id: "app.editBanner",
    defaultMessage: "Edit Banner",
    description: "Title"
  },
  // category
  editCategory: {
    id: "app.editCategory",
    defaultMessage: "Edit Category",
    description: "Title"
  },
  editSubCategory: {
    id: "app.editSubCategory",
    defaultMessage: "Edit Sub Category",
    description: "Edit Sub Category"
  },
  categoryAdminTitle: {
    id: "app.categoryAdminTitle",
    defaultMessage: "Title",
    description: "Title"
  },
  pageFieldTitle: {
    id: "app.pageFieldTitle",
    defaultMessage: "Title",
    description: "Title"
  },
  pageFieldStep: {
    id: "app.pageFieldStep",
    defaultMessage: "Step",
    description: "Step"
  },
  pageFieldPageId: {
    id: "app.pageFieldPageId",
    defaultMessage: "Page Id",
    description: "Page Id"
  },
  adminPageFieldPageId: {
    id: "app.adminPageFieldPageId",
    defaultMessage: "Page Id",
    description: "Page Id"
  },
  categoryAdminDescription: {
    id: "app.categoryAdminDescription",
    defaultMessage: "Description",
    description: "Description"
  },
  categoryAdminCategory: {
    id: "app.categoryAdminCategory",
    defaultMessage: "Category",
    description: "Category"
  },
  editPageField: {
    id: "app.editPageField",
    defaultMessage: "Edit Page Field",
    description: "Edit Page Field"
  },
  // sub category message defiend
  subCategoryId: {
    id: "app.subCategoryId",
    defaultMessage: "ID",
    description: "ID"
  },
  subCategoryName: {
    id: "app.subCategoryName",
    defaultMessage: "Sub Category",
    description: "Category name"
  },
  subCategoryStatus: {
    id: "app.subCategoryStatus",
    defaultMessage: "Status",
    description: "Status"
  },
  subCategoryOperation: {
    id: "app.subCategoryOperation",
    defaultMessage: "Operation",
    description: "Operation"
  },
  primaryCategory: {
    id: "app.primaryCategory",
    defaultMessage: "Primary Category",
    description: "Sub Category Home page Slider title"
  },
  subCategory: {
    id: "app.subCategory",
    defaultMessage: "Sub Category",
    description: "Sub Category Home page Slider title"
  },
  subCategorys: {
    id: "app.subCategorys",
    defaultMessage: "Sub Category Type",
    description: "Sub Category Home page Slider title"
  },
  addNew: {
    id: "app.addNew",
    defaultMessage: "Add New",
    description: "add new Home page Slider title"
  },
  subTitleAdmin: {
    id: "app.subTitleAdmin",
    defaultMessage: "Title",
    description: "Title"
  },
  subAdminDescription: {
    id: "app.subAdminDescription",
    defaultMessage: "Description",
    description: "Description"
  },
  subAdminAddress: {
    id: "app.subAdminAddress",
    defaultMessage: "Address",
    description: "Address"
  },
  subAdminSubCategory: {
    id: "app.subAdminSubCategory",
    defaultMessage: "Sub Category",
    description: "Sub Category"
  },
  subAdminGuests: {
    id: "app.subAdminGuests",
    defaultMessage: "Guests",
    description: "Guests"
  },
  subAdminBedrooms: {
    id: "app.subAdminBedrooms",
    defaultMessage: "Bedrooms",
    description: "Bedrooms"
  },
  subAdminBaths: {
    id: "app.subAdminBaths",
    defaultMessage: "Baths",
    description: "Baths"
  },
  subAdminBeds: {
    id: "app.subAdminBeds",
    defaultMessage: "Beds",
    description: "Beds"
  },
  //Home offer
  addOffer: {
    id: "app.addOffer",
    defaultMessage: "Add Offer",
    description: "Add Offer"
  },
  location: {
    id: "app.location",
    defaultMessage: "Location",
    description: "Location"
  },
  dates: {
    id: "app.dates",
    defaultMessage: "Dates",
    description: "Dates"
  },
  roomType: {
    id: "app.roomType",
    defaultMessage: "Room Type",
    description: "Type of Room"
  },
  priceRange: {
    id: "app.priceRange",
    defaultMessage: "Price Range",
    description: "Price Range"
  },
  instantBook: {
    id: "app.instantBook",
    defaultMessage: "Instant Book",
    description: "Instant Book"
  },
  instantBookInfo: {
    id: "app.instantBookInfo",
    defaultMessage: "Listings you can book without waiting for host approval.",
    description: "instant Book Information"
  },
  size: {
    id: "app.size",
    defaultMessage: "Size",
    description: "Size"
  },
  anyBed: {
    id: "app.anyBed",
    defaultMessage: "Any bedrooms",
    description: "Any bedrooms"
  },
  anyBath: {
    id: "app.anyBath",
    defaultMessage: "Any bathrooms",
    description: "Any bathrooms"
  },
  anyBeds: {
    id: "app.anyBeds",
    defaultMessage: "Any beds",
    description: "Any beds"
  },
  filter: {
    id: "app.filter",
    defaultMessage: "Filter",
    description: "Filter button"
  },
  seeHomes: {
    id: "app.seeHomes",
    defaultMessage: "See Homes",
    description: "See Homes"
  },
  rentals: {
    id: "app.rentals",
    defaultMessage: "Rentals",
    description: "Rentals"
  },
  aminities: {
    id: "app.aminities",
    defaultMessage: "Amenities",
    description: "Amenities"
  },
  facilities: {
    id: "app.facilities",
    defaultMessage: "Facilities",
    description: "Facilities"
  },
  houseRules: {
    id: "app.houseRules",
    defaultMessage: "House Rules",
    description: "House Rules"
  },
  cancel: {
    id: "app.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button"
  },
  applyFilters: {
    id: "app.applyFilters",
    defaultMessage: "Apply filters",
    description: "Apply filters button"
  },
  map: {
    id: "app.map",
    defaultMessage: "Map",
    description: "Map button for mobile"
  },
  filters: {
    id: "app.filters",
    defaultMessage: "Filters",
    description: "Filters button for mobile"
  },
  results: {
    id: "app.results",
    defaultMessage: "Results",
    description: "Results button for mobile"
  },
  noResultsTitle: {
    id: "app.noResultsTitle",
    defaultMessage: "No Results",
    description: "No results message for search listing"
  },
  noResultsSubTitle: {
    id: "app.noResultsSubTitle",
    defaultMessage: "Try adjusting your search. Here are some ideas:",
    description: "No results message for search listing"
  },
  noResultsTerms1: {
    id: "app.noResultsTerms1",
    defaultMessage: "Change your filters or dates",
    description: "No results message for search listing"
  },
  noResultsTerms2: {
    id: "app.noResultsTerms2",
    defaultMessage: "Zoom out on the map",
    description: "No results message for search listing"
  },
  noResultsTerms3: {
    id: "app.noResultsTerms3",
    defaultMessage: "Search for a specific city, address",
    description: "No results message for search listing"
  },
  aboutListing: {
    id: "app.aboutListing",
    defaultMessage: "About this listing",
    description: "View listing description"
  },
  contactHost: {
    id: "app.contactHost",
    defaultMessage: "Contact Host",
    description: "Contact host button and link"
  },
  theSpace: {
    id: "app.theSpace",
    defaultMessage: "The space",
    description: "The space"
  },
  accommodates: {
    id: "app.accommodates",
    defaultMessage: "Accommodates",
    description: "The space accommodates"
  },
  bedrooms: {
    id: "app.bedrooms",
    defaultMessage: "Bedrooms",
    description: "The space bedrooms"
  },
  bathrooms: {
    id: "app.bathrooms",
    defaultMessage: "Bathrooms",
    description: "The space bathrooms"
  },
  beds: {
    id: "app.beds",
    defaultMessage: "Beds",
    description: "The space beds"
  },
  propertyType: {
    id: "app.propertyType",
    defaultMessage: "Property type",
    description: "The space property type"
  },
  sharedSpaces: {
    id: "app.sharedSpaces",
    defaultMessage: "Shared Spaces",
    description: "View listing shared spaces"
  },
  prices: {
    id: "app.prices",
    defaultMessage: "Prices",
    description: "View listing prices"
  },
  extraPeople: {
    id: "app.extraPeople",
    defaultMessage: "Extra people",
    description: "View listing extra people"
  },
  noCharge: {
    id: "app.noCharge",
    defaultMessage: "No Charge",
    description: "Extra people no charge"
  },
  cancellations: {
    id: "app.cancellations",
    defaultMessage: "Cancellations",
    description: "View listing cancellations"
  },
  viewDetails: {
    id: "app.viewDetails",
    defaultMessage: "View details",
    description: "Cancellations view details"
  },
  safetyFeatures: {
    id: "app.safetyFeatures",
    defaultMessage: "Safety features",
    description: "View listing Safety features"
  },
  availability: {
    id: "app.availability",
    defaultMessage: "Availability",
    description: "View listing availability"
  },
  "in": {
    id: "app.in",
    defaultMessage: "in",
    description: "in"
  },
  guests: {
    id: "app.guests",
    defaultMessage: "Guests",
    description: "Guests"
  },
  bedroom: {
    id: "app.bedroom",
    defaultMessage: "Bedroom",
    description: "Bedroom"
  },
  bed: {
    id: "app.bed",
    defaultMessage: "Bed",
    description: "Bed"
  },
  noReviewTitle: {
    id: "app.noReviewTitle",
    defaultMessage: "This place would love your review",
    description: "View listing no review title"
  },
  noReviewInfo: {
    id: "app.noReviewInfo",
    defaultMessage: "When you book this place, here’s where your review will show up!",
    description: "View listing no review info"
  },
  loadMore: {
    id: "app.loadMore",
    defaultMessage: "Load More",
    description: "Load more button"
  },
  viewCountInfo: {
    id: "app.viewCountInfo",
    defaultMessage: "This home is on people minds.",
    description: "View listing view count details"
  },
  viewCountTotal1: {
    id: "app.viewCountTotal1",
    defaultMessage: "It’s been viewed",
    description: "View listing view count details"
  },
  viewCountTotal2: {
    id: "app.viewCountTotal2",
    defaultMessage: "times in the past week.",
    description: "View listing view count details"
  },
  neighborhood: {
    id: "app.neighborhood",
    defaultMessage: "The neighborhood",
    description: "View listing neighborhood"
  },
  neighborhoodInfo: {
    id: "app.neighborhoodInfo",
    defaultMessage: "Exact location information is provided after a booking is confirmed.",
    description: "View listing neighborhoodInfo"
  },
  yourHost: {
    id: "app.yourHost",
    defaultMessage: "Your Host",
    description: "View listing your host"
  },
  responseRate: {
    id: "app.responseRate",
    defaultMessage: "Response rate",
    description: "View listing response rate"
  },
  responseTime: {
    id: "app.responseTime",
    defaultMessage: "Response time",
    description: "View listing response time"
  },
  joinedIn: {
    id: "app.joinedIn",
    defaultMessage: "Joined in",
    description: "View listing host joining date"
  },
  contactHostinfo1: {
    id: "app.contactHostinfo1",
    defaultMessage: "Make sure you share the following",
    description: "Contact host instructions"
  },
  contactHostinfo2: {
    id: "app.contactHostinfo2",
    defaultMessage: "Tell",
    description: "Contact host instructions"
  },
  contactHostinfo3: {
    id: "app.contactHostinfo3",
    defaultMessage: "a little about yourself",
    description: "Contact host instructions"
  },
  contactHostinfo4: {
    id: "app.contactHostinfo4",
    defaultMessage: "What brings you to",
    description: "Contact host instructions"
  },
  contactHostinfo5: {
    id: "app.contactHostinfo5",
    defaultMessage: "Who’s joining you",
    description: "Contact host instructions"
  },
  contactHostinfo6: {
    id: "app.contactHostinfo6",
    defaultMessage: "What do you love about this listing? Mention it",
    description: "Contact host instructions"
  },
  contactHostDate: {
    id: "app.contactHostDate",
    defaultMessage: "When are you travelling",
    description: "Contact host dates title"
  },
  hostErrorMessage1: {
    id: "app.hostErrorMessage1",
    defaultMessage: "Please specify check in and check out",
    description: "Contact host error message"
  },
  hostErrorMessage2: {
    id: "app.hostErrorMessage2",
    defaultMessage: "Those dates are not available",
    description: "Contact host error message"
  },
  hostErrorMessage3: {
    id: "app.hostErrorMessage3",
    defaultMessage: "You can contact the host now",
    description: "Contact host error message"
  },
  chooseGuests: {
    id: "app.chooseGuests",
    defaultMessage: "Choose Guests",
    description: "Contact host choose guests dropdown"
  },
  textBoxMessage: {
    id: "app.textBoxMessage",
    defaultMessage: "Start your message",
    description: "Contact host text box start your message"
  },
  sendMessage: {
    id: "app.sendMessage",
    defaultMessage: "Send message",
    description: "Contact host button"
  },
  contacthostError1: {
    id: "app.contacthostError1",
    defaultMessage: "You must select number of guests",
    description: "Contact host error message"
  },
  contacthostError2: {
    id: "app.contacthostError2",
    defaultMessage: "Message is required",
    description: "Contact host error message"
  },
  maximumCharcter: {
    id: "app.maximumCharcter",
    defaultMessage: "(Allows Maximum 50 characters)",
    description: "maximumCharcter"
  },
  emptySpace: {
    id: "app.emptySpace",
    defaultMessage: "Invalid input ",
    description: "emptySpace"
  },
  maximumCharcterLeft: {
    id: "app.maximumCharcterLeft",
    defaultMessage: "characters left.",
    description: "maximumCharcterLeft"
  },
  serviceFee: {
    id: "app.serviceFee",
    defaultMessage: "Service fee",
    description: "Bill details"
  },
  cleaningFee: {
    id: "app.cleaningFee",
    defaultMessage: "Cleaning fee",
    description: "Bill details"
  },
  total: {
    id: "app.total",
    defaultMessage: "Total",
    description: "Bill details"
  },
  nights: {
    id: "app.nights",
    defaultMessage: "nights",
    description: "Bill details"
  },
  checkAvailability: {
    id: "app.checkAvailability",
    defaultMessage: "Check Availability",
    description: "Booking button"
  },
  viewOtherListings: {
    id: "app.viewOtherListings",
    defaultMessage: "View Other Listings",
    description: "Booking button"
  },
  book: {
    id: "app.book",
    defaultMessage: "Book",
    description: "Booking button"
  },
  requestToBook: {
    id: "app.requestToBook",
    defaultMessage: "Request to Book",
    description: "Booking button"
  },
  maximumStay: {
    id: "app.maximumStay",
    defaultMessage: "Maximum stay is",
    description: "Maximum day error"
  },
  perNight: {
    id: "app.perNight",
    defaultMessage: "Per Night",
    description: "Per Night"
  },
  bookingInfo: {
    id: "app.bookingInfo",
    defaultMessage: "You won’t be charged yet",
    description: "You won’t be charged yet"
  },
  viewPhotos: {
    id: "app.viewPhotos",
    defaultMessage: "View Photos",
    description: "View photos button"
  },
  cancellationPolicies: {
    id: "app.cancellationPolicies",
    defaultMessage: "Cancellation Policies",
    description: "Cancellation Policies"
  },
  flexible: {
    id: "app.flexible",
    defaultMessage: "Flexible",
    description: "Flexible"
  },
  moderate: {
    id: "app.moderate",
    defaultMessage: "Moderate",
    description: "Moderate"
  },
  strict: {
    id: "app.strict",
    defaultMessage: "Strict",
    description: "Strict"
  },
  addProfilePhoto: {
    id: "app.addProfilePhoto",
    defaultMessage: "Add your profile photo",
    description: "Avatar upload title"
  },
  uploadInfo: {
    id: "app.uploadInfo",
    defaultMessage: "This helps your host recognize you when you meet, so make sure it shows your face.",
    description: "Avatar upload info"
  },
  "continue": {
    id: "app.continue",
    defaultMessage: "Continue",
    description: "Continue button"
  },
  dropzoneUpload: {
    id: "app.dropzoneUpload",
    defaultMessage: "Upload a file from your computer",
    description: "Dropzone upload info"
  },
  dropzoneUploadError: {
    id: "app.dropzoneUploadError",
    defaultMessage: "Remove the existing image and try upload again",
    description: "Dropzone upload error message"
  },
  meetupTitle: {
    id: "app.meetupTitle",
    defaultMessage: "Get ready to book with",
    description: "Get ready to book with"
  },
  meetupInfo1: {
    id: "app.meetupInfo1",
    defaultMessage: "We ask everyone to confirm a few things before travelling or hosting.",
    description: "Meetup information"
  },
  meetupInfo2: {
    id: "app.meetupInfo2",
    defaultMessage: "You’ll only have to do this once.",
    description: "Meetup information"
  },
  next: {
    id: "app.next",
    defaultMessage: "Next",
    description: "Next button"
  },
  checkEmail: {
    id: "app.checkEmail",
    defaultMessage: "Check your email",
    description: "Email verification title"
  },
  verificationInfo1: {
    id: "app.verificationInfo1",
    defaultMessage: "Tap the link in the email we sent you.",
    description: "Verification info"
  },
  verificationInfo2: {
    id: "app.verificationInfo2",
    defaultMessage: "Confirming your email address helps us send you trip information.",
    description: "Verification info"
  },
  resendEmail: {
    id: "app.resendEmail",
    defaultMessage: "Resend email",
    description: "Resend email button"
  },
  changeEmail: {
    id: "app.changeEmail",
    defaultMessage: "Change email address",
    description: "Change email address"
  },
  aboutYourTrip: {
    id: "app.aboutYourTrip",
    defaultMessage: "About Your Trip",
    description: "Payment About Your Trip"
  },
  whoComing: {
    id: "app.whoComing",
    defaultMessage: "Who's Coming",
    description: "Who's Coming"
  },
  sayHello: {
    id: "app.sayHello",
    defaultMessage: "Say hello to your host and tell them why you’re coming",
    description: "Payment page info"
  },
  descriptionInfo: {
    id: "app.descriptionInfo",
    defaultMessage: "Visiting family or friends? Sight seeing? This helps your host plan for your trip.",
    description: "Payment description information"
  },
  payment: {
    id: "app.payment",
    defaultMessage: "Payment",
    description: "Payment"
  },
  paymentInfo: {
    id: "app.paymentInfo",
    defaultMessage: "You’ll only be charged if your request is accepted by the host.They’ll have 24 hours to accept or decline.",
    description: "Payment information"
  },
  paymentCurrency: {
    id: "app.paymentCurrency",
    defaultMessage: "Payment Currency",
    description: "Payment currency"
  },
  chooseCurrency: {
    id: "app.chooseCurrency",
    defaultMessage: "Choose Currency",
    description: "Choose Currency"
  },
  paymentType: {
    id: "app.paymentType",
    defaultMessage: "Payment Type",
    description: "Payment Type"
  },
  paypal: {
    id: "app.paypal",
    defaultMessage: "PayPal",
    description: "Paypal"
  },
  loginInfo: {
    id: "app.loginInfo",
    defaultMessage: "Log into PayPal. You will be able to review your request before it is final.",
    description: "Login information"
  },
  currencyError: {
    id: "app.currencyError",
    defaultMessage: "Choose a payment currency",
    description: "Currency Error"
  },
  hostedBy: {
    id: "app.hostedBy",
    defaultMessage: "Hosted by",
    description: "Hosted by"
  },
  cancellationPolicy: {
    id: "app.cancellationPolicy",
    defaultMessage: "Cancellation policy",
    description: "Cancellation policy"
  },
  deleteListing: {
    id: "app.deleteListing",
    defaultMessage: "Delete this Listing",
    description: "Manage listing delete this listing"
  },
  deleteListingInfo: {
    id: "app.deleteListingInfo",
    defaultMessage: "Are you sure you want to delete this listing? You cannot reverse this action.",
    description: "Manage listing delete listing information"
  },
  "delete": {
    id: "app.delete",
    defaultMessage: "Delete",
    description: "Manage listing Delete button"
  },
  goBack: {
    id: "app.goBack",
    defaultMessage: "Go Back",
    description: "Manage listing Go back button"
  },
  progressBarText1: {
    id: "app.progressBarText1",
    defaultMessage: "You’re",
    description: "Manage listing Progress bar text"
  },
  progressBarText2: {
    id: "app.progressBarText2",
    defaultMessage: "done with your listing",
    description: "Manage listing Progress bar text"
  },
  listingUpdateInfo: {
    id: "app.listingUpdateInfo",
    defaultMessage: "Last updated on",
    description: "Manage listing update info"
  },
  editListing: {
    id: "app.editListing",
    defaultMessage: "Edit listing",
    description: "Manage listing button"
  },
  finishListing: {
    id: "app.finishListing",
    defaultMessage: "Finish the Listings",
    description: "Manage listing button"
  },
  preview: {
    id: "app.preview",
    defaultMessage: "Preview",
    description: "Manage listing button"
  },
  listed: {
    id: "app.listed",
    defaultMessage: "Listed",
    description: "Manage listing dropdown"
  },
  unListed: {
    id: "app.unListed",
    defaultMessage: "Unlisted",
    description: "Manage listing dropdown"
  },
  title: {
    id: "app.title",
    defaultMessage: "You don't have any listings!",
    description: "You don't have any listings!"
  },
  content: {
    id: "app.content",
    defaultMessage: "Make money by renting out your extra space. You'll also get to meet interesting travellers from around the world!",
    description: "content"
  },
  button: {
    id: "app.button",
    defaultMessage: "Post a new listing",
    description: "Post a new listing"
  },
  noTripTitle1: {
    id: "app.noTripTitle1",
    defaultMessage: "You don't have any upcoming trips!",
    description: "No trips title"
  },
  noTripTitle2: {
    id: "app.noTripTitle2",
    defaultMessage: "Choose your next adventure right away!",
    description: "No trips title"
  },
  noTripsButton: {
    id: "app.noTripsButton",
    defaultMessage: "Search listings",
    description: "No trips button"
  },
  noReservation: {
    id: "app.noReservation",
    defaultMessage: "You don't have any upcoming reservations!",
    description: "No reservation"
  },
  status: {
    id: "app.status",
    defaultMessage: "Status",
    description: "Status"
  },
  dateLocation: {
    id: "app.dateLocation",
    defaultMessage: "Dates and Location",
    description: "Dates and Location"
  },
  details: {
    id: "app.details",
    defaultMessage: "Details",
    description: "Details"
  },
  noList: {
    id: "app.noList",
    defaultMessage: "No List Found",
    description: "No List Found"
  },
  notexist: {
    id: "app.notexist",
    defaultMessage: "Guest profile doesn't exist",
    description: "Guest profile not exist"
  },
  messageHistroy: {
    id: "app.messageHistroy",
    defaultMessage: "Message History",
    description: "Message History"
  },
  contactSupport: {
    id: "app.contactSupport",
    defaultMessage: "Contact Support",
    description: "Contact Support"
  },
  viewItinerary: {
    id: "app.viewItinerary",
    defaultMessage: "View Itinerary",
    description: "View Itinerary"
  },
  viewReceipt: {
    id: "app.viewReceipt",
    defaultMessage: "View Receipt",
    description: "View Receipt"
  },
  approve: {
    id: "app.approve",
    defaultMessage: "Approve",
    description: "Approve"
  },
  decline: {
    id: "app.decline",
    defaultMessage: "Decline",
    description: "Decline"
  },
  firstName: {
    id: "app.firstName",
    defaultMessage: "First Name",
    description: "Your First name to Register"
  },
  firstNameRequired: {
    id: "app.firstNameRequired",
    defaultMessage: "First name is required",
    description: "First name Required"
  },
  lastName: {
    id: "app.lastName",
    defaultMessage: "Last Name",
    description: "Your Last name to Register"
  },
  lastNameRequired: {
    id: "app.lastNameRequired",
    defaultMessage: "Last name is required",
    description: "Last name Required"
  },
  email: {
    id: "app.email",
    defaultMessage: "Email Address",
    description: "Your Email Address to Login"
  },
  emailRequired: {
    id: "app.emailRequired",
    defaultMessage: "Email is required",
    description: "Email is required"
  },
  emailInvalid: {
    id: "app.emailInValid",
    defaultMessage: "Invalid Email Address",
    description: "Invalid Email Address"
  },
  emailAlreadyExists: {
    id: "app.emailAlreadyExists",
    defaultMessage: "That email address is already in use. Please choose different one!",
    description: "Email Address is already exist"
  },
  iAm: {
    id: "app.iam",
    defaultMessage: "I am",
    description: "Gender Label"
  },
  gender: {
    id: "app.gender",
    defaultMessage: "Gender",
    description: "Gender Field"
  },
  genderMale: {
    id: "app.genderMale",
    defaultMessage: "Male",
    description: "Gender Male"
  },
  genderFemale: {
    id: "app.genderFemale",
    defaultMessage: "Female",
    description: "Gender Female"
  },
  genderOther: {
    id: "app.genderOther",
    defaultMessage: "Other",
    description: "Gender Other"
  },
  genderRequired: {
    id: "app.genderRequired",
    defaultMessage: "Gender is required",
    description: "Gender is required"
  },
  preferredLanguage: {
    id: "app.preferredLanguage",
    defaultMessage: "Preferred Language",
    description: "Preferred Language"
  },
  preferredLanguageRequired: {
    id: "app.preferredLanguageRequired",
    defaultMessage: "Preferred language is required",
    description: "Preferred language is required"
  },
  preferredCurrency: {
    id: "app.preferredCurrency",
    defaultMessage: "Preferred Currency",
    description: "Preferred Currency"
  },
  preferredCurrencyRequired: {
    id: "app.preferredCurrencyRequired",
    defaultMessage: "Preferred currency is required",
    description: "Preferred currency is required"
  },
  phoneNumber: {
    id: "app.phoneNumber",
    defaultMessage: "Phone Number",
    description: "Phone Number"
  },
  phoneNumberRequired: {
    id: "app.phoneNumberRequired",
    defaultMessage: "Phone number is required",
    description: "Phone number is required"
  },
  phoneNumberInvalid: {
    id: "app.phoneNumberInvalid",
    defaultMessage: "Invalid Phone Number",
    description: "Phone Number is Invalid"
  },
  phoneNumberLengthInvalid: {
    id: "app.phoneNumberLengthInvalid",
    defaultMessage: "Mobile Number must be 30 digits or less",
    description: "Mobile Number must be 30 digits or less"
  },
  liveLocation: {
    id: "app.liveLocation",
    defaultMessage: "Where You Live",
    description: "location"
  },
  info: {
    id: "app.info",
    defaultMessage: "Describe Yourself",
    description: "Describe Yourself"
  },
  infoRequired: {
    id: "app.infoRequired",
    defaultMessage: "Profile info is required",
    description: "Describe Yourself is Required"
  },
  infoRequiredone: {
    id: "app.infoRequiredone",
    defaultMessage: "Describe yourself is required",
    description: "Describe Yourself is Required"
  },
  notLoggedIn: {
    id: "app.notLoggedIn",
    defaultMessage: "You are not logged In. Please login to continue!",
    description: "Wrong went wrong"
  },
  dateOfBirth: {
    id: "app.dateOfBirth",
    defaultMessage: "Birthday",
    description: "Your Birthday to Register"
  },
  dateOfBirthRequired: {
    id: "app.dateOfBirthRequired",
    defaultMessage: "Birthday is required",
    description: "Birthday Required"
  },
  save: {
    id: "app.save",
    defaultMessage: "Save",
    description: "Save Button"
  },
  month: {
    id: "app.month",
    defaultMessage: "Month",
    description: "Month of birthday"
  },
  year: {
    id: "app.year",
    defaultMessage: "Year",
    description: "Year of birthday"
  },
  day: {
    id: "app.day",
    defaultMessage: "Day",
    description: "Day of birthday"
  },
  birthDayRequired: {
    id: "app.birthDayRequired",
    defaultMessage: "Select your birth date to continue",
    description: "birthDayRequired"
  },
  mustBe18OrOld: {
    id: "app.mustBe18OrOld",
    defaultMessage: "You must be at least 18 years old",
    description: "You must at least 18 years old"
  },
  WrongDayChosen: {
    id: "app.WrongDayChosen",
    defaultMessage: "Wrong day chosen for the month",
    description: "Wrong day chosen for the month"
  },
  Required: {
    id: "app.Required",
    defaultMessage: "*Required",
    description: "Required Heading"
  },
  RequiredDetails: {
    id: "app.RequiredDetails",
    defaultMessage: "Profile information",
    description: "Required Heading"
  },
  lastNameInfo: {
    id: "app.lastNameInfo",
    defaultMessage: "Your public profile only shows your first name. When you request a booking, your host will see your first and last name.",
    description: "lastNameInfo"
  },
  genderInfo: {
    id: "app.genderInfo",
    defaultMessage: "We use this data for analysis and never share it with other users.",
    description: "genderInfo"
  },
  emailInfo: {
    id: "app.emailInfo",
    defaultMessage: "We won’t share your private email address with other users.",
    description: "emailInfo"
  },
  learnMore: {
    id: "app.learnMore",
    defaultMessage: "Learn More",
    description: "learnMore"
  },
  phoneNumberInfo: {
    id: "app.phoneNumberInfo",
    defaultMessage: "This is only shared once you have a confirmed booking with another user. This is how we can all get in touch.",
    description: "phoneNumberInfo"
  },
  preferredLanguageInfo: {
    id: "app.preferredLanguageInfo",
    defaultMessage: "We’ll send you messages in this language.",
    description: "preferredLanguageInfo"
  },
  preferredCurrencyInfo: {
    id: "app.preferredCurrencyInfo",
    defaultMessage: "We’ll show you prices in this currency.",
    description: "preferredCurrencyInfo"
  },
  info1: {
    id: "app.info1",
    defaultMessage: "Help other people get to know you.",
    description: "info1"
  },
  info2: {
    id: "app.info2",
    defaultMessage: "Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.",
    description: "info2"
  },
  info3: {
    id: "app.info3",
    defaultMessage: "Tell them what it’s like to have you as a guest or host: What’s your style of traveling? Of hosting?",
    description: "info3"
  },
  info4: {
    id: "app.info4",
    defaultMessage: "Tell them about you: Do you have a life motto?",
    description: "info4"
  },
  profilePhotoInfo: {
    id: "app.profilePhotoInfo",
    defaultMessage: "Clear frontal face photos are an important way for hosts and guests to learn about each other. It’s not much fun to host a landscape! Please upload a photo that clearly shows your face.",
    description: "Profile photo upload information"
  },
  verifiedInfo: {
    id: "app.verifiedInfo",
    defaultMessage: "Verified Info",
    description: "Verified Info"
  },
  verifiedEmail: {
    id: "app.verifiedEmail",
    defaultMessage: "You have verified your email address",
    description: "You have verified your email address"
  },
  facebookInfo: {
    id: "app.facebookInfo",
    defaultMessage: "Sign in with Facebook and discover your trusted connections to hosts and guests all over the world.",
    description: "Facebook information"
  },
  disconnect: {
    id: "app.disconnect",
    defaultMessage: "Disconnect",
    description: "Disconnect button"
  },
  googleInfo: {
    id: "app.googleInfo",
    defaultMessage: "Connect your account to your Google account for simplicity and ease.",
    description: "Google information"
  },
  notVerifiedDetails: {
    id: "app.notVerifiedDetails",
    defaultMessage: "You haven't verified any of the below items",
    description: "Not verified information"
  },
  notVerifiedInfo: {
    id: "app.notVerifiedInfo",
    defaultMessage: "Not Verified Info",
    description: "Not Verified Info"
  },
  pleaseVerify: {
    id: "app.pleaseVerify",
    defaultMessage: "Please verify your email address.",
    description: "Verify your email address."
  },
  verifyEmail: {
    id: "app.verifyEmail",
    defaultMessage: "Verify Email",
    description: "Verify Email"
  },
  connect: {
    id: "app.connect",
    defaultMessage: "Connect",
    description: "Connect button"
  },
  reviewTitle: {
    id: "app.reviewTitle",
    defaultMessage: "Thank you for reviewing",
    description: "Review"
  },
  reviewTitle2: {
    id: "app.reviewTitle2",
    defaultMessage: "Thank you for reviewing your guest. Your review will be visible on their profile.",
    description: "Review"
  },
  finish: {
    id: "app.finish",
    defaultMessage: "Finish",
    description: "Finish button"
  },
  reviewPageTitle: {
    id: "app.reviewPageTitle",
    defaultMessage: "Describe your experience (required)",
    description: "Review"
  },
  reviewPageTitle1: {
    id: "app.reviewPageTitle1",
    defaultMessage: "Your review will be public on your guest profile",
    description: "Review"
  },
  reviewTextArea: {
    id: "app.reviewTextArea",
    defaultMessage: "What was it like to host this guest",
    description: "Review"
  },
  reviewRating: {
    id: "app.reviewRating",
    defaultMessage: "Overall Rating",
    description: "Review"
  },
  submit: {
    id: "app.submit",
    defaultMessage: "Submit",
    description: "Submit button"
  },
  reviewError1: {
    id: "app.reviewError1",
    defaultMessage: "Please write your review!",
    description: "Review"
  },
  reviewError2: {
    id: "app.reviewError2",
    defaultMessage: "Please rate your review!",
    description: "Review"
  },
  pastReviewTitle: {
    id: "app.pastReviewTitle",
    defaultMessage: "Past Reviews You’ve Written",
    description: "Review"
  },
  noReview: {
    id: "app.noReview",
    defaultMessage: "There are no reviews about you yet.",
    description: "Review"
  },
  noReviewPast: {
    id: "app.noReviewPast",
    defaultMessage: "There are no reviews published by you.",
    description: "Review"
  },
  response: {
    id: "app.response",
    defaultMessage: "Response",
    description: "Review"
  },
  reviewPanelTitle1: {
    id: "app.reviewPanelTitle",
    defaultMessage: "Reviews About you",
    description: "Review"
  },
  reviewPanelTitle2: {
    id: "app.reviewPanelTitle2",
    defaultMessage: "Reviews By you",
    description: "Review"
  },
  reviewContent: {
    id: "app.reviewContent",
    defaultMessage: "Nobody to review right now. Looks like it’s time for another trip!",
    description: "Review"
  },
  submitReviewFor: {
    id: "app.submitReviewFor",
    defaultMessage: "Submit a public review for",
    description: "Review"
  },
  writeReview: {
    id: "app.writeReview",
    defaultMessage: "Write a Review",
    description: "Review"
  },
  viewLitneray: {
    id: "app.viewLitneray",
    defaultMessage: "View Itinerary",
    description: "Review"
  },
  reviewWritten: {
    id: "app.reviewWritten",
    defaultMessage: "Reviews are written at the end of a reservation. Reviews you’ve received will be visible both here and on your public profile.",
    description: "Review"
  },
  hey: {
    id: "app.hey",
    defaultMessage: "Hey I’m",
    description: "View profile"
  },
  reportUser: {
    id: "app.reportUser",
    defaultMessage: "Report this user",
    description: "View profile"
  },
  noVerifications: {
    id: "app.noVerifications",
    defaultMessage: "No verifications yet",
    description: "View profile"
  },
  addVerifications: {
    id: "app.addVerifications",
    defaultMessage: "Add Verifications",
    description: "View profile"
  },
  emailConfirmed: {
    id: "app.emailConfirmed",
    defaultMessage: "Email Confirmed",
    description: "View profile"
  },
  fbConnected: {
    id: "app.fbConnected",
    defaultMessage: "Facebook Connected",
    description: "View profile"
  },
  googleConnected: {
    id: "app.googleConnected",
    defaultMessage: "Google Connected",
    description: "View profile"
  },
  moreVerifications: {
    id: "app.moreVerifications",
    defaultMessage: "Add More Verifications",
    description: "View profile"
  },
  addPayout: {
    id: "app.addPayout",
    defaultMessage: "Add Payout Method",
    description: "Payout"
  },
  address1: {
    id: "app.address1",
    defaultMessage: "Address Line 1",
    description: "Payout Form"
  },
  address2: {
    id: "app.address2",
    defaultMessage: "Address Line 2",
    description: "Payout Form"
  },
  city: {
    id: "app.city",
    defaultMessage: "City",
    description: "Payout Form"
  },
  state: {
    id: "app.state",
    defaultMessage: "State / Province",
    description: "Payout Form"
  },
  zipCode: {
    id: "app.zipCode",
    defaultMessage: "ZIP Code / Postal Code",
    description: "Payout Form"
  },
  payoutError1: {
    id: "app.payoutError1",
    defaultMessage: "Country is required",
    description: "Payout Form"
  },
  payoutError2: {
    id: "app.payoutError2",
    defaultMessage: "City is required",
    description: "Payout Form"
  },
  payoutError3: {
    id: "app.payoutError3",
    defaultMessage: "State / Province is required",
    description: "Payout Form"
  },
  payoutError4: {
    id: "app.payoutError4",
    defaultMessage: "ZIP Code / Postal Code is required",
    description: "Payout Form"
  },
  payoutError5: {
    id: "app.payoutError5",
    defaultMessage: "Enter valid email address",
    description: "Payout Form"
  },
  payoutError6: {
    id: "app.payoutError6",
    defaultMessage: "Currency is required",
    description: "Payout Form"
  },
  country: {
    id: "app.country",
    defaultMessage: "Country",
    description: "Payout Form"
  },
  chooseCountry: {
    id: "app.chooseCountry",
    defaultMessage: "Choose Country",
    description: "Payout Form"
  },
  back: {
    id: "app.back",
    defaultMessage: "Back",
    description: "Back button"
  },
  paypalIntro1: {
    id: "app.paypalIntro1",
    defaultMessage: "PayPal is an online payment processing service that allows you to receive payments from",
    description: "Paypal intro"
  },
  paypalIntro2: {
    id: "app.paypalIntro2",
    defaultMessage: "To use PayPal with",
    description: "Paypal intro"
  },
  paypalIntro3: {
    id: "app.paypalIntro3",
    defaultMessage: "you must have an existing account with PayPal.",
    description: "Paypal intro"
  },
  paypalIntro4: {
    id: "app.paypalIntro4",
    defaultMessage: "Learn more about PayPal",
    description: "Paypal intro"
  },
  paypalEmail: {
    id: "app.paypalEmail",
    defaultMessage: "Enter the email address associated with your existing PayPal account.",
    description: "Paypal email"
  },
  paypalCurrency: {
    id: "app.paypalCurrency",
    defaultMessage: "In what currency would you like to be paid?",
    description: "Paypal currency"
  },
  payoutIntro1: {
    id: "app.payoutIntro1",
    defaultMessage: "Payouts for reservations are released to you the day after your guest checks in, and it takes some additional time for the money to arrive depending on your payout method.",
    description: "Payout intro"
  },
  payoutIntro2: {
    id: "app.payoutIntro2",
    defaultMessage: "We can send money to people in United States with these payout methods. Which do you prefer?",
    description: "Payout intro"
  },
  payoutTitle: {
    id: "app.payoutTitle",
    defaultMessage: "Method",
    description: "Payout header"
  },
  payoutTitle1: {
    id: "app.payoutTitle1",
    defaultMessage: "Processed in",
    description: "Payout header"
  },
  payoutTitle2: {
    id: "app.payoutTitle2",
    defaultMessage: "Fees",
    description: "Payout header"
  },
  payoutTitle3: {
    id: "app.payoutTitle3",
    defaultMessage: "Currency",
    description: "Payout header"
  },
  payoutTitle4: {
    id: "app.payoutTitle4",
    defaultMessage: "Details",
    description: "Payout header"
  },
  noPaymentFound: {
    id: "app.noPaymentFound",
    defaultMessage: "No Payment method found",
    description: "No payment"
  },
  payoutMethod: {
    id: "app.payoutMethod",
    defaultMessage: "Payout Methods",
    description: "Payout Method"
  },
  addPayoutMethod: {
    id: "app.addPayoutMethod",
    defaultMessage: "To get paid, you need to set up a payout method",
    description: "Payout Method"
  },
  paymentReleaseInfo1: {
    id: "app.paymentReleaseInfo1",
    defaultMessage: "releases payouts about 24 hours after a guest’s scheduled check-in time.",
    description: "Payout Method"
  },
  paymentReleaseInfo2: {
    id: "app.paymentReleaseInfo2",
    defaultMessage: "The time it takes for the funds to appear in your account depends on your payout method.",
    description: "Payout Method"
  },
  payoutTitleBlock1: {
    id: "app.payoutTitleBlock1",
    defaultMessage: "When you receive a payment for a reservation, we call that payment to you a “payout”. Our secure payment system supports several payout methods, which can be setup and edited here. Your available payout options and currencies differ by country.",
    description: "Payout Method"
  },
  payoutFaq: {
    id: "app.payoutFaq",
    defaultMessage: "Visit the Payout FAQ",
    description: "Payout Method"
  },
  options: {
    id: "app.options",
    defaultMessage: "Options",
    description: "Payout Method"
  },
  "default": {
    id: "app.default",
    defaultMessage: "Default",
    description: "Payout Method"
  },
  ready: {
    id: "app.ready",
    defaultMessage: "Ready",
    description: "Payout Method"
  },
  setDefault: {
    id: "app.setDefault",
    defaultMessage: "Set Default",
    description: "Payout Method"
  },
  remove: {
    id: "app.remove",
    defaultMessage: "Remove",
    description: "Payout Method"
  },
  directDeposit: {
    id: "app.directDeposit",
    defaultMessage: "Direct Deposit, Paypal, etc..",
    description: "Payout Method"
  },
  transactionPayout: {
    id: "app.transactionPayout",
    defaultMessage: "Payout",
    description: "Transaction history"
  },
  transferTo: {
    id: "app.transferTo",
    defaultMessage: "Transfer to",
    description: "Transaction history"
  },
  transferDate: {
    id: "app.transferDate",
    defaultMessage: "Date",
    description: "Date"
  },
  transferType: {
    id: "app.transferType",
    defaultMessage: "Type",
    description: "Type"
  },
  transferAmount: {
    id: "app.transferAmount",
    defaultMessage: "Amount",
    description: "Amount"
  },
  paidOut: {
    id: "app.paidOut",
    defaultMessage: "Paid Out",
    description: "Paid Out"
  },
  reservation: {
    id: "app.reservation",
    defaultMessage: "Reservation",
    description: "Reservation"
  },
  payTo: {
    id: "app.payTo",
    defaultMessage: "Pay to",
    description: "Pay to"
  },
  grossEarnings: {
    id: "app.grossEarnings",
    defaultMessage: "Gross Earnings",
    description: "Gross Earnings"
  },
  allListings: {
    id: "app.allListings",
    defaultMessage: "All listings",
    description: "All listings"
  },
  noTransactions: {
    id: "app.noTransactions",
    defaultMessage: "No Transactions",
    description: "No Transactions"
  },
  transactionsAddPayout: {
    id: "app.transactionsAddPayout",
    defaultMessage: "Add Payout",
    description: "Transaction payout"
  },
  completedTransactions: {
    id: "app.completedTransactions",
    defaultMessage: "Completed Transactions",
    description: "Completed Transactions"
  },
  futureTransactions: {
    id: "app.futureTransactions",
    defaultMessage: "Future Transactions",
    description: "Completed Transactions"
  },
  exportCSV: {
    id: "app.exportCSV",
    defaultMessage: "Export to CSV",
    description: "Export to CSV"
  },
  changePassword: {
    id: "app.changePassword",
    defaultMessage: "Change Your Password",
    description: "Change Your Password"
  },
  oldPassword: {
    id: "app.oldPassword",
    defaultMessage: "Old Password",
    description: "Old Password"
  },
  newPassword: {
    id: "app.newPassword",
    defaultMessage: "New Password",
    description: "New Password"
  },
  confirmPassword: {
    id: "app.confirmPassword",
    defaultMessage: "Confirm Password",
    description: "Confirm Password"
  },
  updatePassword: {
    id: "app.updatePassword",
    defaultMessage: "Update Password",
    description: "Update Password"
  },
  passwordError1: {
    id: "app.passwordError1",
    defaultMessage: "Old Password is required",
    description: "Password Error"
  },
  passwordError2: {
    id: "app.passwordError2",
    defaultMessage: "New Password is required",
    description: "Password Error"
  },
  passwordError3: {
    id: "app.passwordError3",
    defaultMessage: "New Password must be minimum 8 characters",
    description: "Password Error"
  },
  passwordError4: {
    id: "app.passwordError4",
    defaultMessage: "Confirm Password is required",
    description: "Password Error"
  },
  passwordError5: {
    id: "app.passwordError5",
    defaultMessage: "Confirm Password must be minimum 8 characters",
    description: "Password Error"
  },
  noMessagesTitle: {
    id: "app.noMessagesTitle",
    defaultMessage: "No Messages yet.",
    description: "Inbox"
  },
  noMessagesTitle1: {
    id: "app.noMessagesTitle1",
    defaultMessage: "When hosts respond to your inquiries or booking requests, you'll see their messages here.",
    description: "Inbox"
  },
  noMessagesTitle2: {
    id: "app.noMessagesTitle2",
    defaultMessage: "When guests respond to your inquiries or booking requests, you'll see their messages here.",
    description: "Inbox"
  },
  traveling: {
    id: "app.traveling",
    defaultMessage: "Travelling",
    description: "Traveling"
  },
  errorMessage: {
    id: "app.errorMessage",
    defaultMessage: "Oops something went wrong, refresh or check back later",
    description: "Error message"
  },
  receipt: {
    id: "app.receipt",
    defaultMessage: "Receipt",
    description: "Receipt"
  },
  customerReceipt: {
    id: "app.customerReceipt",
    defaultMessage: "Customer Receipt",
    description: "Customer Receipt"
  },
  confirmationCode: {
    id: "app.confirmationCode",
    defaultMessage: "Confirmation Code",
    description: "Confirmation Code"
  },
  name: {
    id: "app.name",
    defaultMessage: "Name",
    description: "Name"
  },
  travelDestination: {
    id: "app.travelDestination",
    defaultMessage: "Travel Destination",
    description: "Travel Destination"
  },
  duration: {
    id: "app.duration",
    defaultMessage: "Duration",
    description: "Duration"
  },
  accommodationType: {
    id: "app.accommodationType",
    defaultMessage: "Accommodation Type",
    description: "Accommodation Type"
  },
  accommodationAddress: {
    id: "app.accommodationAddress",
    defaultMessage: "Accommodation Address",
    description: "Accommodation Address"
  },
  accommodationHost: {
    id: "app.accommodationHost",
    defaultMessage: "Accommodation Host",
    description: "Accommodation Host"
  },
  reservationCharges: {
    id: "app.reservationCharges",
    defaultMessage: "Reservation Charges",
    description: "Reservation Charges"
  },
  paymentReceived: {
    id: "app.paymentReceived",
    defaultMessage: "Payment Received:",
    description: "Payment Received:"
  },
  receiptInfo1: {
    id: "app.receiptInfo1",
    defaultMessage: "is authorized to accept accomodation fees on behalf of the Host as their limited agent.",
    description: "Receipt information"
  },
  receiptInfo2: {
    id: "app.receiptInfo2",
    defaultMessage: "This means that your payment obligation to the Host is satisfied by your payment to",
    description: "Receipt information"
  },
  receiptInfo3: {
    id: "app.receiptInfo3",
    defaultMessage: "Any of the Host's disagreements by the Host regarding that payment must be settled between the Host and",
    description: "Receipt information"
  },
  itinerayTitle: {
    id: "app.itinerayTitle",
    defaultMessage: "You’re going to",
    description: "Itinerary"
  },
  reservationCode: {
    id: "app.reservationCode",
    defaultMessage: "Reservation code:",
    description: "Itinerary"
  },
  address: {
    id: "app.address",
    defaultMessage: "Address",
    description: "Itinerary"
  },
  viewListing: {
    id: "app.viewListing",
    defaultMessage: "View Listing",
    description: "View Listing"
  },
  messageHost: {
    id: "app.messageHost",
    defaultMessage: "Message Host",
    description: "Itinerary"
  },
  billing: {
    id: "app.billing",
    defaultMessage: "Billing",
    description: "Itinerary"
  },
  messageAction1: {
    id: "app.messageAction1",
    defaultMessage: "You messaged",
    description: "View message"
  },
  messageAction2: {
    id: "app.messageAction2",
    defaultMessage: "about their listing",
    description: "View message"
  },
  messageActionInfo: {
    id: "app.messageActionInfo",
    defaultMessage: "Most hosts respond within 24 hours. If this listing is your top choice, enter your payment information to officially request a reservation.",
    description: "View message"
  },
  RequestToBook: {
    id: "app.RequestToBook",
    defaultMessage: "Request to book",
    description: "Request to book"
  },
  messageAction3: {
    id: "app.messageAction3",
    defaultMessage: "Your booking request sent to",
    description: "View message"
  },
  messageAction4: {
    id: "app.messageAction4",
    defaultMessage: "for their listing",
    description: "View message"
  },
  cancelInfo: {
    id: "app.cancelInfo",
    defaultMessage: "Most hosts respond within 24 hours. If you don't want to continue with this host further, you can cancel this request.",
    description: "View message"
  },
  cancelReservation: {
    id: "app.cancelReservation",
    defaultMessage: "Cancel Reservation",
    description: "Cancel Reservation"
  },
  requestDeclined: {
    id: "app.requestDeclined",
    defaultMessage: "Request declined",
    description: "Request declined"
  },
  guestDeclinedInfo: {
    id: "app.guestDeclinedInfo",
    defaultMessage: "Your request is declined by host. You can choose different dates or search for other listing.",
    description: "Request declined"
  },
  requestApprovedAction1: {
    id: "app.requestApprovedAction1",
    defaultMessage: "Your booking request approved by",
    description: "Request approved"
  },
  requestTimeInfo1: {
    id: "app.requestTimeInfo1",
    defaultMessage: "You have to book within",
    description: "Request approved"
  },
  requestTimeInfo2: {
    id: "app.requestTimeInfo2",
    defaultMessage: "or it will expire.",
    description: "Request approved"
  },
  bookingConfirmedInfo1: {
    id: "app.bookingConfirmedInfo1",
    defaultMessage: "Your booking is confirmed with",
    description: "Booking confirmed"
  },
  bookingCanceledInfo: {
    id: "app.bookingCanceledInfo",
    defaultMessage: "You can contact your host and do necessary arrangements or you can cancel your reservation.",
    description: "Booking canceld"
  },
  bookingExpiredTitle: {
    id: "app.bookingExpiredTitle",
    defaultMessage: "Your booking request has expired",
    description: "Booking expired"
  },
  bookingExpiredInfo: {
    id: "app.bookingExpiredInfo",
    defaultMessage: "Try sending request again or send an inquiry to get in touch with the host",
    description: "Booking expired"
  },
  gotoListing: {
    id: "app.gotoListing",
    defaultMessage: "Go to Listing",
    description: "Go to Listing"
  },
  bookingRequestCancel1: {
    id: "app.bookingRequestCancel",
    defaultMessage: "Booking request canceled",
    description: "Booking request canceled"
  },
  bookingRequestCancel2: {
    id: "app.bookingRequestCance2",
    defaultMessage: "Your booking request has been canceled.",
    description: "Your booking request has been canceled."
  },
  hostAction1: {
    id: "app.hostAction1",
    defaultMessage: "Invite",
    description: "Host Action Block."
  },
  hostAction2: {
    id: "app.hostAction2",
    defaultMessage: "to book by pre-approving this trip",
    description: "Host Action Block."
  },
  hostAction3: {
    id: "app.hostAction3",
    defaultMessage: "Let",
    description: "Host Action Block."
  },
  hostAction4: {
    id: "app.hostAction4",
    defaultMessage: "know these dates are available by pre-approving them.",
    description: "Host Action Block."
  },
  hostResponseTime1: {
    id: "app.hostResponseTime1",
    defaultMessage: "Respond within",
    description: "Host Action Block."
  },
  hostResponseTime2: {
    id: "app.hostResponseTime2",
    defaultMessage: "to maintain your response rate.",
    description: "Host Action Block."
  },
  preApprove: {
    id: "app.preApprove",
    defaultMessage: "Pre-approve",
    description: "Pre-approve"
  },
  guestRequest: {
    id: "app.guestRequest",
    defaultMessage: "sent a request to booking for your listing",
    description: "Guest Request"
  },
  requestApproved: {
    id: "app.requestApproved",
    defaultMessage: "Request Approved",
    description: "Request Approved"
  },
  timeToExpire: {
    id: "app.timeToExpire",
    defaultMessage: "Your guest have 24 hours to respond to this or it will get expired",
    description: "Time To Expire"
  },
  declinedInfo: {
    id: "app.declinedInfo",
    defaultMessage: "Make sure your calendar is up-to-date and that your listing page accurately reflects your house rules and requirements.",
    description: "Declined Info"
  },
  bookingIsConfirmed: {
    id: "app.bookingIsConfirmed",
    defaultMessage: "Booking is confirmed",
    description: "Booking is confirmed"
  },
  contactGuest: {
    id: "app.contactGuest",
    defaultMessage: "You can contact your guest and do necessary arrangements or you can cancel.",
    description: "Contact Guest"
  },
  bookingIsExpired: {
    id: "app.bookingIsExpired",
    defaultMessage: "Booking request is expired",
    description: "Booking request is expired"
  },
  bookingIsExpired1: {
    id: "app.bookingIsExpired1",
    defaultMessage: "booking request is expired.",
    description: "booking request is expired."
  },
  bookingRequestCancel3: {
    id: "app.bookingRequestCance3",
    defaultMessage: "booking request is cancelled.",
    description: "booking request is cancelled."
  },
  writeMessage: {
    id: "app.writeMessage",
    defaultMessage: "Write your message...",
    description: "Write your message"
  },
  loadMoreMsg: {
    id: "app.loadMoreMsg",
    defaultMessage: "Load More Messages",
    description: "Load More Messages"
  },
  noItmesFound: {
    id: "app.noItmesFound",
    defaultMessage: "No items found",
    description: "No items found"
  },
  messageStatus1: {
    id: "app.messageStatus1",
    defaultMessage: "Inquiry",
    description: "Message Status"
  },
  earnedAmount: {
    id: "app.earnedAmount",
    defaultMessage: "Earned Amount",
    description: "Payment details"
  },
  missedEarnings: {
    id: "app.missedEarnings",
    defaultMessage: "Missed Earnings",
    description: "Missed Earnings"
  },
  refundAmount: {
    id: "app.refundAmount",
    defaultMessage: "Refund Amount",
    description: "Refund Amount"
  },
  cleaningPrice: {
    id: "app.cleaningPrice",
    defaultMessage: "Cleaning Price",
    description: "Payment details"
  },
  subTotal: {
    id: "app.subTotal",
    defaultMessage: "Subtotal",
    description: "Payment details"
  },
  youEarn: {
    id: "app.youEarn",
    defaultMessage: "You earn",
    description: "Payment details"
  },
  tripDetails: {
    id: "app.tripDetails",
    defaultMessage: "Trip details",
    description: "Trip details"
  },
  noThreadFound: {
    id: "app.noThreadFound",
    defaultMessage: "No thread found! If you think something went wrong, please refresh the page",
    description: "View Message"
  },
  dashBoardHeader: {
    id: "app.dashBoardHeader",
    defaultMessage: "Welcome to",
    description: "Dashboard"
  },
  dashBoardInfo: {
    id: "app.dashBoardInfo",
    defaultMessage: "Check your messages, view upcoming trip information, and find travel inspiration all from your dashboard. Before booking your first stay, make sure to:",
    description: "Dashboard"
  },
  dashBoardInfo1: {
    id: "app.dashBoardInfo1",
    defaultMessage: "Upload a photo and write a short bio to help hosts get to know you before inviting you into their home.",
    description: "Dashboard"
  },
  completeYourProfile: {
    id: "app.completeYourProfile",
    defaultMessage: "Complete Your Profile",
    description: "Dashboard"
  },
  allMessages: {
    id: "app.allMessages",
    defaultMessage: "All Messages",
    description: "Dashboard"
  },
  hi: {
    id: "app.hi",
    defaultMessage: "Hi",
    description: "Hi"
  },
  letYouGetReady: {
    id: "app.letYouGetReady",
    defaultMessage: "Let’s get you ready to become a host",
    description: "Let You Get Ready"
  },
  chooseCategory: {
    id: "app.chooseCategory",
    defaultMessage: "Choose Category to list",
    description: "Choose Category to list"
  },
  whatKindOfPlace: {
    id: "app.whatKindOfPlace",
    defaultMessage: "What kind of place do you have?",
    description: "What Kind Of Place"
  },
  change: {
    id: "app.change",
    defaultMessage: "Change",
    description: "Change Link"
  },
  whatKindOfPlaceListing: {
    id: "app.whatKindOfPlaceListing",
    defaultMessage: "What kind of place are you listing?",
    description: "What Kind Of Place Listing"
  },
  whatTypeOfProperty: {
    id: "app.whatTypeOfProperty",
    defaultMessage: "What type of property is this?",
    description: "What Type Of Property"
  },
  whatGuestHave: {
    id: "app.whatGuestHave",
    defaultMessage: "What will guests have?",
    description: "What will guests have"
  },
  howManyRooms: {
    id: "app.howManyRooms",
    defaultMessage: "How many total rooms does your property have?",
    description: "How many total rooms does your property have?"
  },
  isPersonalHome: {
    id: "app.isPersonalHome",
    defaultMessage: "Is this your personal home?",
    description: "Is this your personal home?"
  },
  isPersonalHomeInfo: {
    id: "app.isPersonalHomeInfo",
    defaultMessage: "Guests like to know if this is a place you live and keep your personal belongings in.",
    description: "Personal Home Info"
  },
  skip: {
    id: "app.skip",
    defaultMessage: "Skip now",
    description: "Skip Button"
  },
  howManyGuests: {
    id: "app.howManyGuests",
    defaultMessage: "How many guests can your place accommodate?",
    description: "How many guests can your place accommodate?"
  },
  howManyBeds: {
    id: "app.howManyBeds",
    defaultMessage: "How many beds can guests use?",
    description: "How many beds can guests use?"
  },
  howManyBedrooms: {
    id: "app.howManyBedrooms",
    defaultMessage: "How many bedrooms can guests use?",
    description: "How many bedrooms can guests use?"
  },
  howManyGuestsStay: {
    id: "app.howManyGuestsStay",
    defaultMessage: "How many guests can stay?",
    description: "How many guests can stay?"
  },
  howManyBathrooms: {
    id: "app.howManyBathrooms",
    defaultMessage: "How many bathrooms?",
    description: "How many bathrooms?"
  },
  whereLocated: {
    id: "app.whereLocated",
    defaultMessage: "Where’s your place located?",
    description: "Where’s your place located?"
  },
  bathroom: {
    id: "app.bathroom",
    defaultMessage: "bathroom",
    description: "Bathroom"
  },
  yourFullAddress: {
    id: "app.yourFullAddress",
    defaultMessage: "Your Full Address",
    description: "Your Full Address"
  },
  street: {
    id: "app.street",
    defaultMessage: "Street Address",
    description: "Street Address"
  },
  buildingName: {
    id: "app.buildingName",
    defaultMessage: "Apt, Suite, Bldg. (optional)",
    description: "Building Name"
  },
  zipcode: {
    id: "app.zipcode",
    defaultMessage: "ZIP Code",
    description: "ZIP Code"
  },
  countryRequired: {
    id: "app.countryRequired",
    defaultMessage: "Country is Required",
    description: "countryRequired"
  },
  stateRequired: {
    id: "app.stateRequired",
    defaultMessage: "State is Required",
    description: "stateRequired"
  },
  cityRequired: {
    id: "app.cityRequired",
    defaultMessage: "City is Required",
    description: "cityRequired"
  },
  streetRequired: {
    id: "app.streetRequired",
    defaultMessage: "Street is Required",
    description: "streetRequired"
  },
  zipcodeRequired: {
    id: "app.zipcodeRequired",
    defaultMessage: "Zip Code is Required",
    description: "zipcodeRequired"
  },
  houseTypeRequired: {
    id: "app.houseTypeRequired",
    defaultMessage: "House Type is Required",
    description: "House Type is Required"
  },
  somethingWentWrong: {
    id: "app.somethingWentWrong",
    defaultMessage: "Sorry, something went wrong. Please try again",
    description: "Wrong went wrong"
  },
  adminLoggedIn: {
    id: "app.adminLoggedIn",
    defaultMessage: "You are logged in as admin, you can't perform this action!",
    description: "adminLoggedIn"
  },
  whatamenities: {
    id: "app.whatamenities",
    defaultMessage: "What amenities do you offer?",
    description: "Amenities Headline"
  },
  safetyamenities: {
    id: "app.safetyamenities",
    defaultMessage: "Safety amenities",
    description: "Safety amenities Headline"
  },
  whatSpace: {
    id: "app.whatSpace",
    defaultMessage: "What spaces can guests use?",
    description: "What spaces can guests use?"
  },
  step1Heading: {
    id: "app.step1Heading",
    defaultMessage: "Become a host",
    description: "STEP 1 Heading"
  },
  step2Heading: {
    id: "app.step2Heading",
    defaultMessage: "STEP 2",
    description: "STEP 2 Heading"
  },
  step3Heading: {
    id: "app.step3Heading",
    defaultMessage: "STEP 3",
    description: "STEP 3 Heading"
  },
  step1SubHeading: {
    id: "app.step1SubHeading",
    defaultMessage: "Start with the basics",
    description: "STEP 1 Sub Heading"
  },
  step2SubHeading: {
    id: "app.step2SubHeading",
    defaultMessage: "Set the scene",
    description: "STEP 2 Sub Heading"
  },
  step3SubHeading: {
    id: "app.step3SubHeading",
    defaultMessage: "Get ready for guests",
    description: "STEP 3 Sub Heading"
  },
  step1HeadingContent: {
    id: "app.step1HeadingContent",
    defaultMessage: "Category, SubCategory,  and more",
    description: "STEP 1 Heading Content"
  },
  step2HeadingContent: {
    id: "app.step2HeadingContent",
    defaultMessage: "Photos, short description, title",
    description: "STEP 2 Heading Content"
  },
  step3HeadingContent: {
    id: "app.step3HeadingContent",
    defaultMessage: "Booking settings, calendar, price",
    description: "STEP 3 Heading Content"
  },
  mapWarning: {
    id: "app.mapWarning",
    defaultMessage: "Drag the pin to set your location.",
    description: "Map Warning"
  },
  mapSuccess: {
    id: "app.mapSuccess",
    defaultMessage: "Great! Thank you!",
    description: "Map Success"
  },
  photos: {
    id: "app.photos",
    defaultMessage: "Photos",
    description: "Photos"
  },
  placeTitle: {
    id: "app.placeTitle",
    defaultMessage: "Name your place",
    description: "Title"
  },
  titleLabel: {
    id: "app.titleLabel",
    defaultMessage: "Listing title",
    description: "Title"
  },
  titleRequired: {
    id: "app.titleRequired",
    defaultMessage: "Oops! We need a title for your place.",
    description: "Title is required"
  },
  description: {
    id: "app.description",
    defaultMessage: "Edit your description",
    description: "Description"
  },
  descriptionRequired: {
    id: "app.descriptionRequired",
    defaultMessage: "Description is required",
    description: "Description"
  },
  guestRequirementsTitle: {
    id: "app.guestRequirementsTitle",
    defaultMessage: "Review guest requirements",
    description: "Guest Requirements Title"
  },
  guestRequirementsDescription: {
    id: "app.guestRequirementsDescription",
    defaultMessage: "Require all guests to submit the following before they can book:",
    description: "Guest Requirements Description"
  },
  setHouseRules: {
    id: "app.setHouseRules",
    defaultMessage: "Set house rules for your guests",
    description: "House Rules"
  },
  reviewGuestBookTitle: {
    id: "app.reviewGuestBookTitle",
    defaultMessage: "How guests book: Instantly",
    description: "How guests book: Instantly"
  },
  reviewGuestBookDescription: {
    id: "app.reviewGuestBookDescription",
    defaultMessage: "Guests can book available days instantly as long as they:",
    description: "Guests can book available"
  },
  reviewGuestBookNote: {
    id: "app.reviewGuestBookNote",
    defaultMessage: "Guests who don’t meet your requirements must send a reservation request.",
    description: "Review Guests Note"
  },
  advanceNoticeTitle: {
    id: "app.advanceNoticeTitle",
    defaultMessage: "How much notice do you need before a guest arrives?",
    description: "Advance Notice Title"
  },
  advanceNoticeCheckInTitle: {
    id: "app.advanceNoticeCheckInTitle",
    defaultMessage: "When can guests check in?",
    description: "Advance Notice Check In Title"
  },
  advanceNoticeFrom: {
    id: "app.advanceNoticeFrom",
    defaultMessage: "From:",
    description: "From"
  },
  advanceNoticeTo: {
    id: "app.advanceNoticeTo",
    defaultMessage: "To:",
    description: "To"
  },
  advanceNoticeError: {
    id: "app.advanceNoticeError",
    defaultMessage: "From time should be earlier than To time",
    description: "Error Message"
  },
  advanceNoticeInvalid: {
    id: "app.advanceNoticeInvalid",
    defaultMessage: "Invalid input value",
    description: "Error Message"
  },
  MaxDaysNoticeTitle: {
    id: "app.MaxDaysNoticeTitle",
    defaultMessage: "How far in advance can guests book?",
    description: "How far in advance can guests book?"
  },
  MinMaxNightsTitle: {
    id: "app.MinMaxNightsTitle",
    defaultMessage: "How long can guests stay?",
    description: "How long can guests stay?"
  },
  calendar: {
    id: "app.calendar",
    defaultMessage: "Update your availability on calendar",
    description: "calendar title"
  },
  pricing: {
    id: "app.pricing",
    defaultMessage: "Base price",
    description: "pricing title"
  },
  pricingDescription: {
    id: "app.pricingDescription",
    defaultMessage: "Your base price is your default nightly rate.",
    description: "pricing description"
  },
  basePrice: {
    id: "app.basePrice",
    defaultMessage: "Base price",
    description: "Base price"
  },
  basePriceLabel: {
    id: "app.basePriceLabel",
    defaultMessage: "Price per night",
    description: "Base price Label"
  },
  basePriceInvalid: {
    id: "app.basePriceInvalid",
    defaultMessage: "Invalid Base Price, only numbers(eg: 25) are allowed",
    description: "Base price Invalid"
  },
  basePriceRequired: {
    id: "app.basePriceRequired",
    defaultMessage: "Base Price is required",
    description: "Base Price is required"
  },
  cleaningPriceInvalid: {
    id: "app.cleaningPriceInvalid",
    defaultMessage: "Invalid Cleaning Price, only numbers(eg: 25) are allowed",
    description: "Cleaning price Invalid"
  },
  currency: {
    id: "app.currency",
    defaultMessage: "Currency",
    description: "Currency"
  },
  discount: {
    id: "app.discount",
    defaultMessage: "Discounts",
    description: "Discounts"
  },
  discountLabel: {
    id: "app.discountLabel",
    defaultMessage: "% off",
    description: "Discount Label"
  },
  discountWeekly: {
    id: "app.discountWeekly",
    defaultMessage: "Weekly discount",
    description: "Weekly discount"
  },
  discountInvalid: {
    id: "app.discountInvalid",
    defaultMessage: "Invalid discount. The discount must be between 0% and 99%.",
    description: "Invalid discount"
  },
  discountMonthly: {
    id: "app.discountMonthly",
    defaultMessage: "Monthly discount",
    description: "Monthly discount"
  },
  summary: {
    id: "app.summary",
    defaultMessage: "Based on your settings, here’s what you could expect",
    description: "Summary Title"
  },
  localLaws: {
    id: "app.localLaws",
    defaultMessage: "Your local laws and taxes",
    description: "Local Laws"
  },
  setCoverPhoto: {
    id: "app.setCoverPhoto",
    defaultMessage: "Choose a photo for cover image",
    description: "setCoverPhoto"
  },
  photosPlaceholder: {
    id: "app.photosPlaceholder",
    defaultMessage: "Click here to upload photos or drag them in",
    description: "Photos Placeholder"
  },
  descriptionLabel: {
    id: "app.descriptionLabel",
    defaultMessage: "Describe the decor, light, what's nearby, etc...",
    description: "Description Placeholder"
  },
  descriptionSubheading: {
    id: "app.descriptionSubheading",
    defaultMessage: "Summary",
    description: "Description Subheading"
  },
  instantBookingTitle: {
    id: "app.instantBookingTitle",
    defaultMessage: "Increase your earnings with Instant Book",
    description: "Instant booking"
  },
  instantBookingInfo: {
    id: "app.instantBookingInfo",
    defaultMessage: "Instant Book can give your listing an edge.Not only do guests prefer to book instantly, we’re promoting Instant Book listings in search results.",
    description: "Instant booking"
  },
  whoCanBook: {
    id: "app.whoCanBook",
    defaultMessage: "Who can book instantly",
    description: "Instant booking"
  },
  whoCanBookInfo: {
    id: "app.whoCanBookInfo",
    defaultMessage: "Choose who can book available days without requesting approval.",
    description: "Instant booking"
  },
  whoCanBookInfo1: {
    id: "app.whoCanBookInfo1",
    defaultMessage: "Guests who meet your requirements and agree to your rules.",
    description: "Instant booking"
  },
  whoCanBookInfo2: {
    id: "app.whoCanBookInfo2",
    defaultMessage: "Anyone else must send a reservation request.",
    description: "Instant booking"
  },
  whoCanBookInfo3: {
    id: "app.whoCanBookInfo3",
    defaultMessage: "No one. All guests must send reservation requests.",
    description: "Instant booking"
  },
  maxDaysTitle: {
    id: "app.maxDaysTitle",
    defaultMessage: "Booking Window",
    description: "Booking Window"
  },
  datesDropDown: {
    id: "app.datesDropDown",
    defaultMessage: "Dates unavailable by default",
    description: "Booking Dropdown"
  },
  datesOption1: {
    id: "app.datesOption1",
    defaultMessage: "3 months into the future",
    description: "Booking Dropdown"
  },
  datesOption2: {
    id: "app.datesOption2",
    defaultMessage: "6 months into the future",
    description: "Booking Dropdown"
  },
  datesOption3: {
    id: "app.datesOption3",
    defaultMessage: "9 months into the future",
    description: "Booking Dropdown"
  },
  datesOption4: {
    id: "app.datesOption4",
    defaultMessage: "12 months into the future",
    description: "Booking Dropdown"
  },
  datesOption5: {
    id: "app.datesOption5",
    defaultMessage: "All future dates",
    description: "Booking Dropdown"
  },
  syncCalendars: {
    id: "app.syncCalendars",
    defaultMessage: "Sync calendars",
    description: "Sync calendars"
  },
  tripLength: {
    id: "app.tripLength",
    defaultMessage: "Trip length",
    description: "Trip length"
  },
  tripLengthError1: {
    id: "app.tripLengthError1",
    defaultMessage: "Minimum nights can't be higher than maximum nights",
    description: "Trip length"
  },
  tabPlaceType: {
    id: "app.tabPlaceType",
    defaultMessage: "Place type",
    description: "Tab bar"
  },
  baths: {
    id: "app.baths",
    defaultMessage: "Baths",
    description: "Tab bar"
  },
  setCover: {
    id: "app.setCover",
    defaultMessage: "Set Cover Photo",
    description: "Set Cover Photo"
  },
  tabDescription: {
    id: "app.tabDescription",
    defaultMessage: "Description",
    description: "Tab bar"
  },
  tabTitle: {
    id: "app.tabTitle",
    defaultMessage: "Title",
    description: "Tab bar"
  },
  guestRequirements: {
    id: "app.guestRequirements",
    defaultMessage: "Guest Requirements",
    description: "Tab bar"
  },
  reviewGuestBook: {
    id: "app.reviewGuestBook",
    defaultMessage: "Review GuestBook",
    description: "Tab bar"
  },
  advanceNotice: {
    id: "app.advanceNotice",
    defaultMessage: "Advance Notice",
    description: "Tab bar"
  },
  bookingWindow: {
    id: "app.bookingWindow",
    defaultMessage: "Booking window",
    description: "Tab bar"
  },
  minMaxNights: {
    id: "app.minMaxNights",
    defaultMessage: "Min Max Nights",
    description: "Tab bar"
  },
  tabCalendar: {
    id: "app.tabCalendar",
    defaultMessage: "Calendar",
    description: "Tab bar"
  },
  tabPricing: {
    id: "app.tabPricing",
    defaultMessage: "Pricing",
    description: "Tab bar"
  },
  tabDiscount: {
    id: "app.tabDiscount",
    defaultMessage: "Discount",
    description: "Tab bar"
  },
  tabBooking: {
    id: "app.tabBooking",
    defaultMessage: "Booking",
    description: "Tab bar"
  },
  tabLocalLaws: {
    id: "app.tabLocalLaws",
    defaultMessage: "Local Laws",
    description: "Tab bar"
  },
  headerText: {
    id: "app.headerText",
    defaultMessage: "Step",
    description: "Header Text"
  },
  readyToPublish: {
    id: "app.readyToPublish",
    defaultMessage: "Your listing is ready to be published!",
    description: "Listing inde"
  },
  listingSubmitVerification: {
    id: "app.listingSubmitVerification",
    defaultMessage: "Your listing is submitted for verification",
    description: "for verification"
  },
  adminApproval: {
    id: "app.adminApproval",
    defaultMessage: "Waiting for admin approval",
    description: "admin approval"
  },
  hostPreviewListing: {
    id: "app.hostPreviewListing",
    defaultMessage: "Preview Listing",
    description: "Preview Listing"
  },
  publishNow: {
    id: "app.publishNow",
    defaultMessage: "Publish Now",
    description: "Listing index"
  },
  previewListing: {
    id: "app.previewListing",
    defaultMessage: "Preview Listing",
    description: "Listing index"
  },
  listingPublished: {
    id: "app.listingPublished",
    defaultMessage: "Your listing is ready to be published!",
    description: "Listing index"
  },
  unPublishNow: {
    id: "app.unPublishNow",
    defaultMessage: "UnPublish Now",
    description: "Listing index"
  },
  signUpTitle: {
    id: "app.signUpTitle",
    defaultMessage: "New User Registration",
    description: "Signup Title"
  },
  panelReservation: {
    id: "app.panelReservation",
    defaultMessage: "Reservations",
    description: "Reservations"
  },
  transactions: {
    id: "app.transactions",
    defaultMessage: "Transactions",
    description: "Transactions"
  },
  notFoundTitle: {
    id: "app.notFoundTitle",
    defaultMessage: "Uh-oh!",
    description: "Not Found"
  },
  notFoundSubTitle: {
    id: "app.notFoundSubTitle",
    defaultMessage: "We can't seem to find the page you're looking for!",
    description: "Not Found"
  },
  errorCode: {
    id: "app.errorCode",
    defaultMessage: "Error code: 404",
    description: "Not Found"
  },
  linksTitle: {
    id: "app.linksTitle",
    defaultMessage: "Here are some helpful links instead:",
    description: "Not Found"
  },
  hostingOn: {
    id: "app.hostingOn",
    defaultMessage: "Hosting on",
    description: "Not Found"
  },
  pageError: {
    id: "app.pageError",
    defaultMessage: "Error",
    description: "Page Error"
  },
  pageErrorInfo: {
    id: "app.pageErrorInfo",
    defaultMessage: "Sorry, a critical error occurred on this page.",
    description: "Page Error"
  },
  messageStatus2: {
    id: "app.messageStatus2",
    defaultMessage: "Pre Approved",
    description: "Message Status"
  },
  messageStatus3: {
    id: "app.messageStatus3",
    defaultMessage: "Declined",
    description: "Message Status"
  },
  messageStatus4: {
    id: "app.messageStatus4",
    defaultMessage: "Approved",
    description: "Message Status"
  },
  messageStatus5: {
    id: "app.messageStatus5",
    defaultMessage: "Pending",
    description: "Message Status"
  },
  messageStatus6: {
    id: "app.messageStatus6",
    defaultMessage: "Cancelled by host",
    description: "Message Status"
  },
  messageStatus7: {
    id: "app.messageStatus7",
    defaultMessage: "Cancelled by guest",
    description: "Message Status"
  },
  messageStatus8: {
    id: "app.messageStatus8",
    defaultMessage: "Approved",
    description: "Message Status"
  },
  messageStatus9: {
    id: "app.messageStatus9",
    defaultMessage: "Expired",
    description: "Message Status"
  },
  messageStatus10: {
    id: "app.messageStatus10",
    defaultMessage: "Request to book",
    description: "Message Status"
  },
  panelHeader1: {
    id: "app.panelHeader1",
    defaultMessage: "In progress",
    description: "Panel Header"
  },
  panelHeader2: {
    id: "app.panelHeader2",
    defaultMessage: "Completed",
    description: "Panel Header"
  },
  messageStatus11: {
    id: "app.messageStatus11",
    defaultMessage: "Cancelled",
    description: "Message Status"
  },
  messagesNew: {
    id: "app.messagesNew",
    defaultMessage: "New",
    description: "New"
  },
  facebookLogin: {
    id: "app.facebookLogin",
    defaultMessage: "Continue with Facebook",
    description: "Continue with Facebook"
  },
  googleLogin: {
    id: "app.googleLogin",
    defaultMessage: "Continue with Google",
    description: "Continue with Google"
  },
  reviewToWrite: {
    id: "app.reviewToWrite",
    defaultMessage: "Reviews to Write",
    description: "Reviews Panel"
  },
  cancellationNote: {
    id: "app.cancellationNote",
    defaultMessage: "A personal note can help",
    description: "Cancellation Notes"
  },
  cancellationNoteForHost: {
    id: "app.cancellationNoteForHost",
    defaultMessage: "understand why you can't host them",
    description: "Cancellation Notes"
  },
  saveAndContinue: {
    id: "app.saveAndContinue",
    defaultMessage: "Save & Continue",
    description: "Save & Continue"
  },
  saveAndExit: {
    id: "app.saveAndExit",
    defaultMessage: "Save and Exit",
    description: "Save and Exit"
  },
  reservationCancel: {
    id: "app.reservationCancel",
    defaultMessage: "The reservation will be cancelled immediately",
    description: "Cancel your trip"
  },
  nonRefundable: {
    id: "app.nonRefundable",
    defaultMessage: "Non-Refundable",
    description: "Cancel your trip"
  },
  refundable: {
    id: "app.refundable",
    defaultMessage: "Refundable",
    description: "Cancel your trip"
  },
  refundCost: {
    id: "app.refundCost",
    defaultMessage: "You will be refunded the above cost.",
    description: "Cancel your trip"
  },
  keepReservation: {
    id: "app.keepReservation",
    defaultMessage: "Keep reservation",
    description: "Keep reservation"
  },
  cancelYourReservation: {
    id: "app.cancelYourReservation",
    defaultMessage: "Cancel your reservation",
    description: "Cancel your reservation"
  },
  cleaningMinusServiceFee: {
    id: "app.cleaningMinusServiceFee",
    defaultMessage: "cleaning fees, minus service fees.",
    description: "Cleaning fee and service fee"
  },
  earnings: {
    id: "app.earnings",
    defaultMessage: "Earnings",
    description: "Earnings"
  },
  cleaningPlusServiceFee: {
    id: "app.cleaningPlusServiceFee",
    defaultMessage: "plus cleaning fees, minus host service fees.",
    description: "plus cleaning fees, plus host service fees."
  },
  willBeRefund: {
    id: "app.willBeRefund",
    defaultMessage: "will be refunded the",
    description: "will be refunded the"
  },
  reservationCost: {
    id: "app.reservationCost",
    defaultMessage: "reservation cost.",
    description: "Reservation cost"
  },
  cancelYourTrip: {
    id: "app.cancelYourTrip",
    defaultMessage: "Cancel your trip",
    description: "Cancel your Trip"
  },
  consider: {
    id: "app.consider",
    defaultMessage: "Consider",
    description: "Consider"
  },
  tripBeforeCanceling: {
    id: "app.tripBeforeCanceling",
    defaultMessage: "trip before canceling",
    description: "Trip before canceling"
  },
  cancellingInfo: {
    id: "app.cancellingInfo",
    defaultMessage: "Cancelling a guest's reservation can disrupt their plans and have serious implications on their trip.",
    description: "Trip before canceling"
  },
  started: {
    id: "app.started",
    defaultMessage: "Started",
    description: "Started"
  },
  startIn: {
    id: "app.startIn",
    defaultMessage: "Starts in",
    description: "Starts in"
  },
  travelingWith: {
    id: "app.travelingWith",
    defaultMessage: "Travelling With",
    description: "Traveling With"
  },
  needToCancel: {
    id: "app.needToCancel",
    defaultMessage: "why you need to cancel",
    description: "why you need to cancel"
  },
  stayingFor: {
    id: "app.stayingFor",
    defaultMessage: "Staying for",
    description: "Staying for"
  },
  propertyLocated: {
    id: "app.propertyLocated",
    defaultMessage: "property is located in",
    description: "Property is located in"
  },
  responseFrom: {
    id: "app.responseFrom",
    defaultMessage: "Response from",
    description: "Response from"
  },
  savingButton: {
    id: "app.savingButton",
    defaultMessage: "Saving",
    description: "Saving Button"
  },
  night: {
    id: "app.night",
    defaultMessage: "night",
    description: "Bill Details"
  },
  minimumStay: {
    id: "app.minimumStay",
    defaultMessage: "minimum stay",
    description: "Minimum stay"
  },
  minimumNightStay: {
    id: "app.minimumNightStay",
    defaultMessage: "Minimum stay is",
    description: "Minimum stay"
  },
  maximumNightStay: {
    id: "app.maximumNightStay",
    defaultMessage: "maximum stay",
    description: "Maximum stay"
  },
  review: {
    id: "app.review",
    defaultMessage: "Review",
    description: "Review"
  },
  verifications: {
    id: "app.verifications",
    defaultMessage: "Verifications",
    description: "Verifications"
  },
  verification: {
    id: "app.verification",
    defaultMessage: "Verification",
    description: "Verification"
  },
  guestCapcity: {
    id: "app.guestCapcity",
    defaultMessage: "guest",
    description: "Guest"
  },
  guestsCapcity: {
    id: "app.guestsCapcity",
    defaultMessage: "guests",
    description: "Guests"
  },
  monthlyDiscount: {
    id: "app.monthlyDiscount",
    defaultMessage: "monthly price discount",
    description: "Monthly Discount"
  },
  weeklyDiscount: {
    id: "app.weeklyDiscount",
    defaultMessage: "weekly price discount",
    description: "Weekly Discount"
  },
  flexibleCheckIn: {
    id: "app.flexibleCheckIn",
    defaultMessage: "Flexible check in time",
    description: "Flexible check in time"
  },
  cancellationNoteForGuest: {
    id: "app.cancellationNoteForGuest",
    defaultMessage: "understand why you want to cancel your reservation",
    description: "Cancellation notes fot guest"
  },
  howManyday: {
    id: "app.howManyday",
    defaultMessage: "day",
    description: "day"
  },
  howManydays: {
    id: "app.howManydays",
    defaultMessage: "days",
    description: "days"
  },
  howManyGuest: {
    id: "app.howManyGuest",
    defaultMessage: "Guests",
    description: "Guest"
  },
  reviewFor: {
    id: "app.reviewFor",
    defaultMessage: "Review for",
    description: "Review for"
  },
  your: {
    id: "app.your",
    defaultMessage: "Your",
    description: "Your"
  },
  chooseCancellationPolicy: {
    id: "app.chooseCancellationPolicy",
    defaultMessage: "Cancellation Policy",
    description: "Cancellation Policy"
  },
  pendingPayouts: {
    id: "app.pendingPayouts",
    defaultMessage: "Pending Payouts",
    description: "Pending Payouts"
  },
  allPayoutMethod: {
    id: "app.allPayoutMethod",
    defaultMessage: "All payout methods",
    description: "All payout methods"
  },
  inboxCompleted: {
    id: "app.inboxCompleted",
    defaultMessage: "Completed",
    description: "Message Status - Inbox Item"
  },
  loginConfirmation: {
    id: "app.loginConfirmation",
    defaultMessage: "Sorry, you must login to confirm your email. Please login and try clicking the link from your email again!",
    description: "Login confirmation"
  },
  upcomingReservations: {
    id: "app.upcomingReservations",
    defaultMessage: "Upcoming Reservations",
    description: "Upcoming Reservations"
  },
  previousReservations: {
    id: "app.previousReservations",
    defaultMessage: "Previous Reservations",
    description: "Previous Reservations"
  },
  upcomingTrips: {
    id: "app.upcomingTrips",
    defaultMessage: "Upcoming Trips",
    description: "Upcoming Trips"
  },
  previousTrips: {
    id: "app.previousTrips",
    defaultMessage: "Previous Trips",
    description: "Previous Trips"
  },
  noUpcomingReservation: {
    id: "app.noUpcomingReservation",
    defaultMessage: "You don't have any upcoming reservations!",
    description: "noUpcomingReservation"
  },
  noPreviousReservation: {
    id: "app.noPreviousReservation",
    defaultMessage: "You don't have any previous reservations!",
    description: "noPreviousReservation"
  },
  noUpcomingTrips: {
    id: "app.noUpcomingTrips",
    defaultMessage: "You don't have any upcoming trips!",
    description: "noUpcomingTrips"
  },
  noPreviousTrips: {
    id: "app.noPreviousTrips",
    defaultMessage: "You don't have any previous trips!",
    description: "noPreviousTrips"
  },
  payNow: {
    id: "app.paynow",
    defaultMessage: "Pay now",
    description: "Pay now"
  },
  creditCard: {
    id: "app.creditCard",
    defaultMessage: "Credit Card",
    description: "Credit Card"
  },
  payPal: {
    id: "app.payPal",
    defaultMessage: "Pay Pal",
    description: "payPal"
  },
  fullName: {
    id: "app.fullName",
    defaultMessage: "Full Name",
    description: "fullName"
  },
  cardNumber: {
    id: "app.cardNumber",
    defaultMessage: "Credit Card Number",
    description: "cardNumber"
  },
  cvv: {
    id: "app.cvv",
    defaultMessage: "CVV",
    description: "cvv"
  },
  expiryDate: {
    id: "app.expiryDate",
    defaultMessage: "Month",
    description: "expiryDate"
  },
  expiryYear: {
    id: "app.expiryYear",
    defaultMessage: "Year",
    description: "expiryYear"
  },
  cardExpires: {
    id: "app.Expires",
    defaultMessage: "Expires",
    description: "Expires"
  },
  required: {
    id: "app.required",
    defaultMessage: "*Required",
    description: "*Required"
  },
  invalid: {
    id: "app.invalid",
    defaultMessage: "*Invalid",
    description: "*Invalid"
  },
  payoutFirstName: {
    id: "app.payoutFirstName",
    defaultMessage: "Account holder first name",
    description: "payoutFirstName"
  },
  payoutLastName: {
    id: "app.payoutLastName",
    defaultMessage: "Account holder last name",
    description: "payoutLastName"
  },
  payoutRouting: {
    id: "app.payoutRouting",
    defaultMessage: "Routing number",
    description: "payoutRouting"
  },
  accountNumber: {
    id: "app.accountNumber",
    defaultMessage: "Account number",
    description: "accountNumber"
  },
  confirmAccountNumber: {
    id: "app.confirmAccountNumber",
    defaultMessage: "Confirm account number",
    description: "confirmAccountNumber"
  },
  ssn4Digits: {
    id: "app.ssn4Digits",
    defaultMessage: "SSN last 4 digits",
    description: "ssn4Digits"
  },
  payoutFirstNameRequired: {
    id: "app.payoutFirstNameRequired",
    defaultMessage: "First name is required",
    description: "payoutFirstNameRequired"
  },
  payoutLastNameRequired: {
    id: "app.payoutLastNameRequired",
    defaultMessage: "Last name is required",
    description: "payoutLastNameRequired"
  },
  payoutRoutingRequired: {
    id: "app.payoutRoutingRequired",
    defaultMessage: "Routing number is required",
    description: "payoutRoutingRequired"
  },
  payoutRoutingInvalid: {
    id: "app.payoutRoutingInvalid",
    defaultMessage: "Invalid routing number",
    description: "payoutRoutingInvalid"
  },
  accountNumberRequired: {
    id: "app.accountNumberRequired",
    defaultMessage: "Account number is required",
    description: "accountNumberRequired"
  },
  accountNumberInvalid: {
    id: "app.accountNumberInvalid",
    defaultMessage: "Invalid account number",
    description: "accountNumberInvalid"
  },
  confirmAccountNumberRequired: {
    id: "app.confirmAccountNumberRequired",
    defaultMessage: "Confirm account number is required",
    description: "confirmAccountNumberRequired"
  },
  confirmAccountNumberInvalid: {
    id: "app.confirmAccountNumberInvalid",
    defaultMessage: "Invalid confirm account number",
    description: "confirmAccountNumberInvalid"
  },
  confirmAccountNumberMismatch: {
    id: "app.confirmAccountNumberMismatch",
    defaultMessage: "Account number mismatch",
    description: "confirmAccountNumberMismatch"
  },
  ssn4DigitsRequired: {
    id: "app.ssn4DigitsRequired",
    defaultMessage: "SSN number is required",
    description: "ssn4DigitsRequired"
  },
  ssn4DigitsInvalid: {
    id: "app.ssn4DigitsInvalid",
    defaultMessage: "Invalid SSN number",
    description: "ssn4DigitsInvalid"
  },
  verifiedBy: {
    id: "app.verifiedBy",
    defaultMessage: "Verified By",
    description: "verifiedBy"
  },
  saved: {
    id: "app.saved",
    defaultMessage: "Saved",
    description: "saved"
  },
  wishList: {
    id: "app.wishList",
    defaultMessage: "Wish List",
    description: "wishList"
  },
  wishLists: {
    id: "app.wishLists",
    defaultMessage: "Wish Lists",
    description: "wishLists"
  },
  createWishList: {
    id: "app.createWishList",
    defaultMessage: "Create Wish List",
    description: "createWishList"
  },
  list: {
    id: "app.list",
    defaultMessage: "List",
    description: "list"
  },
  lists: {
    id: "app.lists",
    defaultMessage: "Lists",
    description: "lists"
  },
  yourLists: {
    id: "app.yourLists",
    defaultMessage: "Your lists",
    description: "yourLists"
  },
  homes: {
    id: "app.homes",
    defaultMessage: "Homes",
    description: "homes"
  },
  nameRequired: {
    id: "app.nameRequired",
    defaultMessage: "Name is required",
    description: "Name Required"
  },
  privacySettings: {
    id: "app.privacySettings",
    defaultMessage: "Privacy Settings",
    description: "Privacy Settings"
  },
  wishListAdded: {
    id: "app.wishListAdded",
    defaultMessage: "Wish list added successfully.",
    description: "Wish list added"
  },
  wishListUpdated: {
    id: "app.wishListUpdated",
    defaultMessage: "Wish list updated successfully.",
    description: "Wish list updated"
  },
  editWishList: {
    id: "app.editWishList",
    defaultMessage: "Edit Wish List",
    description: "editWishList"
  },
  yourHomes: {
    id: "app.yourHomes",
    defaultMessage: "Your Homes",
    description: "hoyourHomesmes"
  },
  deleteWishList: {
    id: "app.deleteWishList",
    defaultMessage: "Delete this list",
    description: "deleteWishList"
  },
  noWishlists: {
    id: "app.noWishlists",
    defaultMessage: "Sorry, you don't have any homes wishlisted.",
    description: "noWishlists"
  },
  "public": {
    id: "app.public",
    defaultMessage: "Public",
    description: "public"
  },
  "private": {
    id: "app.private",
    defaultMessage: "Private",
    description: "private"
  },
  goToAllLists: {
    id: "app.goToAllLists",
    defaultMessage: "Go to All Lists",
    description: "Go to All Lists"
  },
  noWishlistsHomes: {
    id: "app.noWishlistsHomes",
    defaultMessage: "Sorry, You don't have any wishlist homes!",
    description: "noWishlistsHomes"
  },
  areYouSureDeleteWishList: {
    id: "app.areYouSureDeleteWishList",
    defaultMessage: "Are you sure you want to delete this?",
    description: "areYouSureDeleteWishList"
  },
  confirmDelete: {
    id: "app.confirmDelete",
    defaultMessage: "Confirm Delete",
    description: "confirmDelete"
  },
  similarListings: {
    id: "app.similarListings",
    defaultMessage: "Similar Listings",
    description: "similarListings"
  },
  overview: {
    id: "app.overview",
    defaultMessage: "Overview",
    description: "Overview"
  },
  theHost: {
    id: "app.theHost",
    defaultMessage: "The Host",
    description: "The Host"
  },
  //ID verification
  documentverificaiton: {
    id: "app.documentverificaiton",
    defaultMessage: "Document Verification",
    description: "documentverificaiton"
  },
  documentverified: {
    id: "app.documentverified",
    defaultMessage: "Documents verified",
    description: "Documents verified"
  },
  verificationdocument: {
    id: "app.verificationdocument",
    defaultMessage: "Documents Verified",
    description: "verificationdocument"
  },
  documentverificaitonDetails: {
    id: "app.documentverificaitonDetails",
    defaultMessage: "Your document have been verified",
    description: "documentverificaitonDetails"
  },
  documentApproveRejectMessage: {
    id: "app.documentApproveRejectMessage",
    defaultMessage: "Type Your Message",
    description: "documentApproveRejectMessage"
  },
  documentApprove: {
    id: "app.documentApprove",
    defaultMessage: "Approve",
    description: "documentApprove"
  },
  documentReject: {
    id: "app.documentReject",
    defaultMessage: "Reject",
    description: "documentReject"
  },
  documentAppRejRequried: {
    id: "app.documentAppRejRequried",
    defaultMessage: "Please Fill Required",
    description: "documentAppRejRequried"
  },
  documentUploadPlaceholder: {
    id: "app.documentUploadPlaceholder",
    defaultMessage: "Click here to upload document or drag them in",
    description: "Document Upload Placeholder"
  },
  documentVerificaitonInfo: {
    id: "app.documentVerificaitonInfo",
    defaultMessage: "Please upload your documents for ID verification. Eg: Passport, Driving License",
    description: "Document Verification Info"
  },
  searchAsIMove: {
    id: "app.searchAsIMove",
    defaultMessage: "Search as I move the map",
    description: "Search as I move the map"
  },
  ContactMessage: {
    id: "app.ContactMessage",
    defaultMessage: "Message",
    description: "ContactMessage"
  },
  contactForm: {
    id: "app.contactForm",
    defaultMessage: "Contact Us",
    description: "contactForm"
  },
  Nameincontact: {
    id: "app.Nameincontact",
    defaultMessage: "Name",
    description: "Nameincontact"
  },
  recaptchaRequired: {
    id: "app.recaptchaRequired",
    defaultMessage: "Recaptcha Required",
    description: "recaptchaRequired"
  },
  sendmail: {
    id: "app.sendmail",
    defaultMessage: "Send",
    description: "Send"
  },
  nameYourList: {
    id: "app.nameYourList",
    defaultMessage: "Name your list",
    description: "List Name"
  },
  createButton: {
    id: "app.createButton",
    defaultMessage: "Create",
    description: "Wish list button"
  },
  flexibleCheckOut: {
    id: "app.flexibleCheckOut",
    defaultMessage: "Flexible check out time",
    description: "Flexible check out time"
  },
  helpFirstTitle: {
    id: "app.helpFirstTitle",
    defaultMessage: "Create your listing",
    description: "Title"
  },
  helpSecondTitle: {
    id: "app.helpSecondTitle",
    defaultMessage: "Welcome your guests",
    description: "Title"
  },
  helpThirdTitle: {
    id: "app.helpThirdTitle",
    defaultMessage: "Getting paid safely",
    description: "Title"
  },
  helpFirstDesc1: {
    id: "app.helpFirstDesc1",
    defaultMessage: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    description: "Description"
  },
  helpFirstDesc2: {
    id: "app.helpFirstDesc2",
    defaultMessage: "Maecenas non scelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus posuere placerat. Sed et libero eu nibh tristique mollis a eget lectus",
    description: "Description"
  },
  helpSecondDesc1: {
    id: "app.helpSecondDesc1",
    defaultMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    description: "Description"
  },
  helpSecondDesc2: {
    id: "app.helpSecondDesc2",
    defaultMessage: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. ",
    description: "Description"
  },
  helpSecondDesc3: {
    id: "app.helpSecondDesc3",
    defaultMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    description: "Description"
  },
  helpThirdDesc1: {
    id: "app.helpThirdDesc1",
    defaultMessage: " Morbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae placerat tempus, mauris sem elementum ipsum. ",
    description: "Description"
  },
  helpThirdDesc2: {
    id: "app.helpThirdDesc2",
    defaultMessage: "Fusce quis varius nulla. Nullam nisi nisi, suscipit ut magna quis, feugiat porta nibh. ",
    description: "Description"
  },
  helpThirdDesc3: {
    id: "app.helpThirdDesc3",
    defaultMessage: "Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem hendrerit aliquam. Integer eu varius orci.",
    description: "Description"
  },
  processFlowHeading: {
    id: "app.processFlowHeading",
    defaultMessage: "Earn Extra Money and Become a Host with app",
    description: "Process Flow Heading"
  },
  processFlowSubHeading: {
    id: "app.processFlowSubHeading",
    defaultMessage: "Explorez le site à la recherche du photographe idéal et profitez des bons moments en toute sereinité",
    description: "Process Flow Heading"
  },
  stepOneHeading: {
    id: "app.stepOneHeading",
    defaultMessage: "Why host with app?",
    description: "Step 1"
  },
  stepTwoHeading: {
    id: "app.stepTwoHeading",
    defaultMessage: "Stay in Control",
    description: "Step 2"
  },
  stepThreeHeading: {
    id: "app.stepThreeHeading",
    defaultMessage: "Stay Confident",
    description: "Step 3"
  },
  stepOneFlow: {
    id: "app.stepOneFlow",
    defaultMessage: "Share your villa, condo or apartment and earn yourself an extra income. With over 12 years of experience, we make it simple and safe to reach guests that are looking for fun and unique Places to stay across Thailand and Bali.",
    description: "Step 1"
  },
  stepTwoFlow: {
    id: "app.stepTwoFlow",
    defaultMessage: "Stay in control with app. You have full control of your availability, rates and rules. You can, block dates, set check-in times and manage your own communications directly with your guests through the system.",
    description: "Step 2"
  },
  stepThreeFlow: {
    id: "app.stepThreeFlow",
    defaultMessage: "We offer all the right tools to allow you to host in confidence. From a flexible booking system through to a secure payment system. Stay connected and confident with the latest technology.",
    description: "Step 3"
  },
  anonymousMessage: {
    id: "app.anonymousMessage",
    defaultMessage: "Do you want to report this User?",
    description: "Report User"
  },
  reportUserInfo: {
    id: "app.reportUserInfo",
    defaultMessage: "If so, please choose one of the following reasons.",
    description: "Report User"
  },
  reportContent1: {
    id: "app.reportContent1",
    defaultMessage: "This profile should not be on",
    description: "Report User"
  },
  reportContent2: {
    id: "app.reportContent2",
    defaultMessage: "Attempt to share contact information",
    description: "Report User"
  },
  close: {
    id: "app.close",
    defaultMessage: "Close",
    description: "Report User"
  },
  reportContent3: {
    id: "app.reportContent3",
    defaultMessage: "Inappropriate content of spam",
    description: "Report User"
  },
  thankyouInfo1: {
    id: "app.thankyouInfo1",
    defaultMessage: "Thanks for taking the time to report this user. These reports help make better for everyone, so we take them seriously. We will reach out if we have questions about your report.",
    description: "Report User"
  },
  thankyouTitle: {
    id: "app.thankyouTitle",
    defaultMessage: "Thank You",
    description: "Report User"
  },
  messageHistroyLabel: {
    id: "app.messageHistroyLabel",
    defaultMessage: "View",
    description: "Report User"
  },
  titleRequiredLabel: {
    id: "app.titleRequiredLabel",
    defaultMessage: "Message History",
    description: "Report User"
  },
  topBannerTitle: {
    id: "app.topBannerTitle",
    defaultMessage: "It's simple to become a app host",
    description: "Report User"
  },
  footerTerms: {
    id: "app.footerTerms",
    defaultMessage: "Terms, Privacy, Currency & More",
    description: "Footer Button"
  },
  footerClose: {
    id: "app.footerClose",
    defaultMessage: "Close",
    description: "Footer Button"
  },
  myHostSpaces: {
    id: "app.myHostSpaces",
    defaultMessage: "Spaces",
    description: "Menu Item"
  },
  mySpace: {
    id: "app.mySpace",
    defaultMessage: "Space",
    description: "Menu Item"
  },
  clear: {
    id: "app.clear",
    defaultMessage: "Clear",
    description: "clear"
  },
  apply: {
    id: "app.apply",
    defaultMessage: "Apply",
    description: "apply"
  },
  homeType: {
    id: "app.homeType",
    defaultMessage: "Home type",
    description: "homeType"
  },
  price: {
    id: "app.price",
    defaultMessage: "Price",
    description: "price"
  },
  moreFilters: {
    id: "app.moreFilters",
    defaultMessage: "More filters",
    description: "moreFilters"
  },
  showAmenities: {
    id: "app.showAmenities",
    defaultMessage: "Show all amenities",
    description: "Toggle Button"
  },
  closeAmenities: {
    id: "app.closeAmenities",
    defaultMessage: "Close all amenities",
    description: "Toggle Button"
  },
  showMore: {
    id: "app.showMore",
    defaultMessage: "Show More",
    description: "Toggle Button"
  },
  showLess: {
    id: "app.showLess",
    defaultMessage: "Show Less",
    description: "Toggle Button"
  },
  showAll: {
    id: "app.showAll",
    defaultMessage: "Show all",
    description: "Toggle Button"
  },
  closeSafetyFeatures: {
    id: "app.closeSafetyFeatures",
    defaultMessage: "Close safety features",
    description: "Toggle Button"
  },
  closeSharedSpaces: {
    id: "app.closeSharedSpaces",
    defaultMessage: "Close Shared Spaces",
    description: "Toggle Button"
  },
  spacesInfo: {
    id: "app.spacesInfo",
    defaultMessage: "Spaces",
    description: "Spaces"
  },
  neighbourHood: {
    id: "app.neighbourHood",
    defaultMessage: "Neighbourhood",
    description: "Become Host Form"
  },
  readMoreAboutSpaces: {
    id: "app.readMoreAboutSpaces",
    defaultMessage: "Read more about the space",
    description: "View Listing"
  },
  hideButton: {
    id: "app.hideButton",
    defaultMessage: "Hide",
    description: "View Listing"
  },
  showNeighbourHood: {
    id: "app.showNeighbourHood",
    defaultMessage: "Show NeighbourHood",
    description: "Toggle Button"
  },
  gettingAround: {
    id: "app.gettingAround",
    defaultMessage: "Getting Around",
    description: "View Listing"
  },
  bookNow: {
    id: "app.bookNow",
    defaultMessage: "Book Now",
    description: "Booking button"
  },
  bedTypes: {
    id: "app.bedTypes",
    defaultMessage: "Bed Types",
    description: "Bed Types"
  },
  contactAdmin: {
    id: "app.contactAdmin",
    defaultMessage: " contact us.",
    description: "Contact Admin"
  },
  roomsAndBeds: {
    id: "app.roomsAndBeds",
    defaultMessage: "Rooms and Beds",
    description: "Rooms and Beds"
  },
  showAllFacilities: {
    id: "app.showAllFacilities",
    defaultMessage: "Show all facilities",
    description: "Show all facilities text"
  },
  closeFacilities: {
    id: "app.closeFacilities",
    defaultMessage: "Close all facilities",
    description: "Close facilities text"
  },
  showAllHouseRules: {
    id: "app.showAllHouseRules",
    defaultMessage: "Show all house rules",
    description: "Show all house rules text"
  },
  closeHouseRules: {
    id: "app.closeHouseRules",
    defaultMessage: "Close all house rules",
    description: "Close house rules text"
  },
  chooseACountry: {
    id: "app.chooseACountry",
    defaultMessage: "Choose a country",
    description: "Choose a country"
  },
  addPhoneNumber: {
    id: "app.addPhoneNumber",
    defaultMessage: "Add phone number",
    description: "Add phone number"
  },
  addAPhoneNumber: {
    id: "app.addAPhoneNumber",
    defaultMessage: "Add a phone number",
    description: "Add a phone number"
  },
  verifyViaSms: {
    id: "app.verifyViaSms",
    defaultMessage: "Verify via SMS",
    description: "Verify via SMS"
  },
  mobileNumberRequired: {
    id: "app.mobileNumberRequired",
    defaultMessage: "Please enter a phone number.",
    description: "Please enter a phone number."
  },
  weHaveSentVerificationCode: {
    id: "app.weHaveSentVerificationCode",
    defaultMessage: "We sent a verification code to",
    description: "We sent a verification code to"
  },
  verificationCodeLabel: {
    id: "app.verificationCodeLabel",
    defaultMessage: "Please enter the 4-digit code",
    description: "Please enter the 4-digit code"
  },
  verificationCodeRequired: {
    id: "app.verificationCodeRequired",
    defaultMessage: "Please enter a verification code.",
    description: "Please enter a verification code."
  },
  seeAll: {
    id: "app.seeAll",
    defaultMessage: "See All",
    description: "seeAll"
  },
  locationRequired: {
    id: "app.locationRequired",
    defaultMessage: "Location is required",
    description: "Location is required"
  },
  locationAddressRequired: {
    id: "app.locationAddressRequired",
    defaultMessage: "Location Address is required",
    description: "Location Address is required"
  },
  listNotFoundTitle: {
    id: "app.listNotFoundTitle",
    defaultMessage: "It looks like this listing may deleted or unpublished.",
    description: "Not Found"
  },
  userDeleted: {
    id: "app.userDeleted",
    defaultMessage: "You are deleted by admin.",
    description: "You are deleted user"
  },
  cancelInfoBooking: {
    id: "app.cancelInfoBooking",
    defaultMessage: "Most hosts respond within 24 hours.",
    description: "View message"
  },
  cookiesDisclaimer: {
    id: "app.cookiesDisclaimer",
    defaultMessage: "uses cookies to understand how you use our site and to improve your experience. By using our site, you accept our use of cookies. To learn more, go to our",
    description: "extraGuestIncluded"
  },
  gotIt: {
    id: "app.gotIt",
    defaultMessage: "GOT IT",
    description: " cookies Disclaimer Button"
  },
  step1HeadingNew: {
    id: "app.step1HeadingNew",
    defaultMessage: "STEP 1",
    description: "STEP 2 Heading"
  },
  Maximumupload: {
    id: "app.Maximumupload",
    defaultMessage: "Maximum upload size:1MB",
    description: "Photos Upload"
  },
  cookiePolicy: {
    id: "app.cookiePolicy",
    defaultMessage: "Cookie policy",
    description: " cookies Disclaimer Link"
  },
  blockDates: {
    id: "app.blockedDates",
    defaultMessage: "Block dates",
    description: "Listing Step3"
  },
  deSelect: {
    id: "app.deSelect",
    defaultMessage: "Cancel",
    description: "Cancel deSelect button"
  },
  selectedDatesSuccess: {
    id: "app.selectedDatesSuccess",
    defaultMessage: "Your calendar has been updated successfully",
    description: "Your calendar has been updated successfully."
  },
  selectedDatesError: {
    id: "app.selectedDatesError",
    defaultMessage: "Something went wrong, please try again.",
    description: "Something went wrong, please try again."
  },
  selectedDates: {
    id: "app.selectedDates",
    defaultMessage: "Selected dates",
    description: "Selected dates"
  },
  makeDateAvailable: {
    id: "app.makeDateAvailable",
    defaultMessage: "Special Price",
    description: "Listing Step3"
  },
  sessionPrice: {
    id: "app.sessionPrice",
    defaultMessage: "Special Price",
    description: "sessionPrice"
  },
  selectedDatesBlocked: {
    id: "app.selectedDatesBlocked",
    defaultMessage: "Selected dates will be blocked.",
    description: "Selected dates will be blocked."
  },
  availablilityterm: {
    id: "app.availablilityterm",
    defaultMessage: "Availability term",
    description: "Availability term"
  },
  contactFormInformation: {
    id: "app.contactFormInformation",
    defaultMessage: " Contact & Support",
    description: "contactForm"
  },
  contactFormEmail: {
    id: "app.contactFormEmail",
    defaultMessage: "Email Us",
    description: "contactForm"
  },
  contactFormCall: {
    id: "app.contactFormCall",
    defaultMessage: "Call Us",
    description: "contactForm"
  },
  whyblockTitle1: {
    id: "app.whyblockTitle1",
    defaultMessage: " What is Lorem Ipsum?",
    description: "why block Title"
  },
  whyblockTitle2: {
    id: "app.whyblockTitle2",
    defaultMessage: " This tool for our day to day work and our clients?",
    description: "why block title"
  },
  whyblockdesc1: {
    id: "app.whyblockdesc1",
    defaultMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description: "why block description"
  },
  whyblockdesc2: {
    id: "app.whyblockdesc2",
    defaultMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    description: "why block description"
  },
  hostingBlocktitle: {
    id: "app.hostingBlocktitle",
    defaultMessage: "There are 3 Lorem Ipsum generators",
    description: "Hosting Block title"
  },
  hostingBlockheading1: {
    id: "app.hostingBlockheading1",
    defaultMessage: " Lorem Ipsum",
    description: "Hosting Block heading"
  },
  hostingBlockheading2: {
    id: "app.hostingBlockheading2",
    defaultMessage: " Lorem Ipsum",
    description: "Hosting Block heading"
  },
  hostingBlockheading3: {
    id: "app.hostingBlockheading3",
    defaultMessage: " Lorem Ipsum",
    description: "Hosting Block heading"
  },
  hostingBlockdesc1: {
    id: "app.hostingBlockdesc1",
    defaultMessage: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    description: "Hosting Block Description"
  },
  hostingBlockdesc2: {
    id: "app.hostingBlockdesc2",
    defaultMessage: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    description: "Hosting Block Description"
  },
  hostingBlockdesc3: {
    id: "app.hostingBlockdesc3",
    defaultMessage: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    description: "Hosting Block Description"
  },
  coverSectiontitle: {
    id: "app.coverSectiontitle",
    defaultMessage: "Use our generator to get your own",
    description: "Cover Section Title"
  },
  coverSectiondesc1: {
    id: "app.coverSectiondesc1",
    defaultMessage: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Cover Section Description"
  },
  coverSectiondesc2: {
    id: "app.coverSectiondesc2",
    defaultMessage: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Cover Section Description"
  },
  coverSectionlistItem1: {
    id: "app.coverSectionlistItem1",
    defaultMessage: "Excepteur sint occaecat cupidatat non proident",
    description: "Cover Section List Item"
  },
  coverSectionlistItem2: {
    id: "app.coverSectionlistItem2",
    defaultMessage: "quis nostrud exercitation ullamco laboris nisi",
    description: "Cover Section List Item"
  },
  coverSectionlistItem3: {
    id: "app.coverSectionlistItem3",
    defaultMessage: "Sed ut perspiciatis unde omnis iste natus error sit",
    description: "Cover Section List Item"
  },
  coverSectionlistItem4: {
    id: "app.coverSectionlistItem4",
    defaultMessage: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur ",
    description: "Cover Section List Item"
  },
  coverSectionlistItem5: {
    id: "app.coverSectionlistItem5",
    defaultMessage: " Ut enim ad minima veniam, quis nostrum exercitationem",
    description: "Cover Section List Item"
  },
  coverSectionlistItem6: {
    id: "app.coverSectionlistItem6",
    defaultMessage: " Excepteur sint occaecat cupidatat non proident",
    description: "Cover Section List Item"
  },
  paymentContenttitle: {
    id: "app.paymentContenttitle",
    defaultMessage: "It to make a type specimen book",
    description: "payment Content title"
  },
  paymentContentheading1: {
    id: "app.paymentContentheading1",
    defaultMessage: "Sed ut perspiciatis",
    description: "payment Content Heading"
  },
  paymentContentheading2: {
    id: "app.paymentContentheading2",
    defaultMessage: "Nemo enim ipsam",
    description: "payment Content Heading"
  },
  paymentContentheading3: {
    id: "app.paymentContentheading3",
    defaultMessage: "Neque porro",
    description: "payment Content Heading"
  },
  paymentContentdesc1: {
    id: "app.paymentContentdesc1",
    defaultMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    description: "payment Content Description"
  },
  paymentContentdesc2: {
    id: "app.paymentContentdesc2",
    defaultMessage: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    description: "payment Content Description"
  },
  paymentContentdesc3: {
    id: "app.paymentContentdesc3",
    defaultMessage: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    description: "payment Content Description"
  },
  quoteText1: {
    id: "app.quoteText1",
    defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    description: "Quote text"
  },
  quotetagline1: {
    id: "app.quotetagline1",
    defaultMessage: " software like Aldus PageMaker including versions of Lorem Ipsum.",
    description: "Quote Tag Line"
  },
  quotebutton1: {
    id: "app.quotebutton1",
    defaultMessage: "Lorem Ipsum Text",
    description: "Quote Button"
  },
  quoteText2: {
    id: "app.quoteText2",
    defaultMessage: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description: "Quote text"
  },
  quotetagline2: {
    id: "app.quotetagline2",
    defaultMessage: " software like Aldus PageMaker including versions of Lorem Ipsum.",
    description: "Quote Tag Line"
  },
  quotebutton3: {
    id: "app.quotebutton3",
    defaultMessage: " Lorem Ipsum Text",
    description: "Quote Button"
  },
  countingSectiontitle: {
    id: "app.countingSectiontitle",
    defaultMessage: "Lorem Ipsum as their default model text",
    description: "Counting Section Title "
  },
  countingSectiontagline1: {
    id: "app.countingSectiontagline1",
    defaultMessage: " Lorem ipsum dolor sit amet",
    description: "Counting Section Tagline "
  },
  countingSectiontagline2: {
    id: "app.countingSectiontagline2",
    defaultMessage: " quis nostrud exercitation ullamco",
    description: "Counting Section Tagline "
  },
  countingSectiontagline3: {
    id: "app.countingSectiontagline3",
    defaultMessage: "Neque porro quisquam ",
    description: "Counting Section Tagline "
  },
  aboutSectiontitle: {
    id: "app.aboutSectiontitle",
    defaultMessage: " Lorem Ipsum ",
    description: "About Section Title "
  },
  aboutSectionheading1: {
    id: "app.aboutSectionheading1",
    defaultMessage: " What is Lorem Ipsum?",
    description: "About Section Heading "
  },
  aboutSectiondesc1: {
    id: "app.aboutSectiondesc1",
    defaultMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description: "About Section Description "
  },
  aboutSectionheading2: {
    id: "app.aboutSectionheading2",
    defaultMessage: "This tool for our day to day work and our clients?",
    description: "About Section Heading "
  },
  aboutSectiondesc2: {
    id: "app.aboutSectiondesc2",
    defaultMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    description: "About Section Description "
  },
  faqtitle: {
    id: "app.faqtitle",
    defaultMessage: " FAQ",
    description: "Faq  title "
  },
  faqcollapsetitle1: {
    id: "app.faqcollapsetitle1",
    defaultMessage: "Lorem ipsum dolor sit amet, consecteturt",
    description: "Faq collapse title "
  },
  faqcollapseContent1: {
    id: "app.faqcollapseContent1",
    defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle2: {
    id: "app.faqcollapsetitle2",
    defaultMessage: " sed do eiusmod tempor incididunt ut labore et",
    description: "Faq collapse title "
  },
  faqcollapseContent2: {
    id: "app.faqcollapseContent2",
    defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle3: {
    id: "app.faqcollapsetitle3",
    defaultMessage: " Ut enim ad minim veniam",
    description: "Faq collapse title "
  },
  faqcollapseContent3: {
    id: "app.faqcollapseContent3",
    defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle4: {
    id: "app.faqcollapsetitle4",
    defaultMessage: " Lorem ipsum dolor sit amet, consecteturt",
    description: "Faq collapse title "
  },
  faqcollapseContent4: {
    id: "app.faqcollapseContent4",
    defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle5: {
    id: "app.faqcollapsetitle5",
    defaultMessage: "Lorem ipsum dolor sit amet, consecteturt",
    description: "Faq collapse title "
  },
  faqcollapseContent5: {
    id: "app.faqcollapseContent5",
    defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle6: {
    id: "app.faqcollapsetitle6",
    defaultMessage: "sed do eiusmod tempor incididunt ut labore et",
    description: "Faq collapse title "
  },
  faqcollapseContent6: {
    id: "app.faqcollapseContent6",
    defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle7: {
    id: "app.faqcollapsetitle7",
    defaultMessage: " Ut enim ad minim veniam",
    description: "Faq collapse title "
  },
  faqcollapseContent7: {
    id: "app.faqcollapseContent7",
    defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  faqcollapsetitle8: {
    id: "app.faqcollapsetitle8",
    defaultMessage: "Lorem ipsum dolor sit amet, consecteturt",
    description: "Faq collapse title "
  },
  faqcollapseContent8: {
    id: "app.faqcollapseContent8",
    defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    description: "Faq collapse Content "
  },
  contactFormAddress: {
    id: "app.contactFormAddress",
    defaultMessage: "Contact Address",
    description: "Contact Address"
  },
  showDescription: {
    id: "app.showDescription",
    defaultMessage: "Show description",
    description: "View Listing"
  },
  hideDescription: {
    id: "app.hideDescription",
    defaultMessage: "Hide description",
    description: "View Listing"
  },
  showAllSafetyFeatures: {
    id: "app.showAllSafetyFeatures",
    defaultMessage: "Show all safety features",
    description: "Toggle Button"
  },
  showAllSharedSpaces: {
    id: "app.showAllSharedSpaces",
    defaultMessage: "Show all shared spaces",
    description: "Toggle Button"
  },
  closeAllSharedSpaces: {
    id: "app.closeAllSharedSpaces",
    defaultMessage: "Close all shared spaces",
    description: "Toggle Button"
  },
  nightOf: {
    id: "app.nightOf",
    defaultMessage: "Night of",
    description: "Night of"
  },
  Youhadreviewsfor: {
    id: "app.Youhadreviewsfor",
    defaultMessage: "You reviewed",
    description: "You reviewed"
  },
  sreview: {
    id: "app.sreview",
    defaultMessage: "s review",
    description: "s review"
  },
  youLabel: {
    id: "app.youLabel",
    defaultMessage: "You",
    description: "Review"
  },
  removeDateError: {
    id: "app.removeDateError",
    defaultMessage: "Please choose the blocked or special pricing dates to make them available.",
    description: "Remove date from special pricing error message"
  },
  unBlockInfo: {
    id: "app.unBlockInfo",
    defaultMessage: "Note: To unblock a date, select any blocked or available date and save without giving special price.",
    description: "calendar unblock info"
  },
  zipcodeOne: {
    id: "app.zipcodeOne",
    defaultMessage: "ZIP",
    description: "ZIP Code"
  },
  cancellationPoliciesOne: {
    id: "app.cancellationPoliciesOne",
    defaultMessage: "allows hosts to choose among three standardized cancellation policies (Flexible, Moderate, and Strict) Will be enforced to protect both guest and host alike.",
    description: "Cancellation Policies"
  },
  cancellationPoliciesTwo: {
    id: "app.cancellationPoliciesTwo",
    defaultMessage: "Each listing and reservation on our site will clearly state the cancellation policy. Guests while viewing their travel plans are able to review any penalties and also cancel by clicking  ‘Cancel’ on the respective reservation.",
    description: "Cancellation Policies"
  },
  cancellationPoliciesThree: {
    id: "app.cancellationPoliciesThree",
    defaultMessage: "A host will be able to see the number of reservations a guest has Cancelled Over the past 12 months when the guest submits Booking request.",
    description: "Cancellation Policies"
  },
  localLawsOne: {
    id: "app.localLawsOne",
    defaultMessage: "Take a moment to review your local laws. We want to make sure you’ve got everything you need to get off to a great start.",
    description: "Lowcal Law"
  },
  localLawsTwo: {
    id: "app.localLawsTwo",
    defaultMessage: "Please educate yourself about the laws in your jurisdiction before listing your space.",
    description: "Lowcal Law"
  },
  localLawsThree: {
    id: "app.localLawsThree",
    defaultMessage: "Most cities have rules covering homesharing, and the specific codes and ordinances can appear in many places (such as zoning, building, licensing or tax codes). In most places, you must register, get a permit, or obtain a license before you list your property or accept guests. You may also be responsible for collecting and remitting certain taxes. In some places, short-term rentals could be prohibited altogether.",
    description: "Lowcal Law"
  },
  localLawsFour: {
    id: "app.localLawsFour",
    defaultMessage: "Most cities have rules covering homesharing, and the specific codes and ordinances can appear in many places (such as zoning, building, licensing or tax codes). In most places, you must register, get a permit, or obtain a license before you list your property or accept guests. You may also be responsible for collecting and remitting certain taxes. In some places, short-term rentals could be prohibited altogether.",
    description: "Lowcal Law"
  },
  localLawsFive: {
    id: "app.localLawsFive",
    defaultMessage: "Since you are responsible for your own decision to list or book, you should get comfortable with the applicable rules before listing on",
    description: "Lowcal Law"
  },
  localLawsSix: {
    id: "app.localLawsSix",
    defaultMessage: "To get you started, we offer some helpful resources under “Your City Laws.”",
    description: "Lowcal Law"
  },
  localLawsSeven: {
    id: "app.localLawsSeven",
    defaultMessage: "By accepting our Terms of Service and listing your space, you certify that you will follow applicable laws and regulations.",
    description: "Lowcal Law"
  },
  flexibleTitle: {
    id: "app.flexibleTitle",
    defaultMessage: "Flexible: Full refund 1 day prior to arrival",
    description: "Flexible"
  },
  cancelDetailsOne: {
    id: "app.flexibleOne",
    defaultMessage: "Cleaning fees are always refunded if the guest did not check in.",
    description: "Flexible"
  },
  cancelDetailsTwo: {
    id: "app.flexibleTwo",
    defaultMessage: "The",
    description: "Flexible"
  },
  cancelDetailsThree: {
    id: "app.flexibleThree",
    defaultMessage: "service fee is refundable if the guest cancels before the trip starts. If a guest books a reservation that overlaps with any part of an existing reservation, we won’t refund the",
    description: "Flexible"
  },
  cancelDetailsFour: {
    id: "app.flexibleFour",
    defaultMessage: "service fee if they decide to cancel.",
    description: "Flexible"
  },
  cancelDetailsFive: {
    id: "app.flexibleFive",
    defaultMessage: "Accommodation fees (the total nightly rate you're charged) are refundable in certain circumstances as outlined below.",
    description: "Flexible"
  },
  cancelDetailsSix: {
    id: "app.flexibleSix",
    defaultMessage: "If there is a complaint from either party, notice must be given to",
    description: "Flexible"
  },
  cancelDetailsSeven: {
    id: "app.flexibleSeven",
    defaultMessage: "within 24 hours of check-in.",
    description: "Flexible"
  },
  cancelDetailsEight: {
    id: "app.flexibleEight",
    defaultMessage: "will mediate when necessary, and has the final say in all disputes.",
    description: "Flexible"
  },
  cancelDetailsNine: {
    id: "app.flexibleNine",
    defaultMessage: "A reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page, which they can find in Dashboard > Your Trips > Cancel.",
    description: "Flexible"
  },
  cancelDetailsTen: {
    id: "app.flexibleTen",
    defaultMessage: "Cancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations by",
    description: "Flexible"
  },
  cancelDetailsEleven: {
    id: "app.flexibleEleven",
    defaultMessage: "Applicable taxes will be retained and remitted.",
    description: "Flexible"
  },
  cancelDetailsTwelve: {
    id: "app.cancelDetailsTwelve",
    defaultMessage: "for any other reason permitted under the Terms of Service. Please review these exceptions.",
    description: "Flexible"
  },
  dayPrior: {
    id: "app.dayPrior",
    defaultMessage: "day Prior",
    description: "Flexible"
  },
  months: {
    id: "app.months",
    defaultMessage: "Thu, Jun",
    description: "Flexible"
  },
  flexibleTime: {
    id: "app.flexibleTime",
    defaultMessage: "PM",
    description: "Flexible"
  },
  flexibleTwelve: {
    id: "app.flexibleTwelve",
    defaultMessage: "For a full refund of accommodation fees, cancellation must be made a full 24 hours prior to listing’s local check in time (or 3:00 PM if not specified) on the day of check in. For example, if check-in is on Friday, cancel by Thursday of that week before check in time.",
    description: "Flexible"
  },
  flexibleThirteen: {
    id: "app.flexibleThirteen",
    defaultMessage: "If the guest cancels less than 24 hours before check-in, the first night is non-refundable.",
    description: "Flexible"
  },
  flexibleFourteen: {
    id: "app.flexibleFourteen",
    defaultMessage: "If the guest arrives and decides to leave early, the accommodation fees for the nights not spent 24 hours after the official cancellation are fully refunded.",
    description: "Flexible"
  },
  example: {
    id: "app.example",
    defaultMessage: "Example",
    description: "Flexible"
  },
  flexibleSecondMonths: {
    id: "app.flexibleSecondMonths",
    defaultMessage: "Fri, Jun",
    description: "Flexible"
  },
  flexibleSecondTime: {
    id: "app.flexibleSecondTime",
    defaultMessage: "AM",
    description: "Flexible"
  },
  flexibleThirdMonths: {
    id: "app.flexibleThirdMonths",
    defaultMessage: "Mon, Jun",
    description: "Flexible"
  },
  flexibleThirdMonthsNumberOne: {
    id: "app.flexibleThirdMonthsNumberOne",
    defaultMessage: "08",
    description: "Flexible"
  },
  flexibleThirdMonthsNumberTwo: {
    id: "app.flexibleThirdMonthsNumberTwo",
    defaultMessage: "09",
    description: "Flexible"
  },
  flexibleThirdMonthsNumberThree: {
    id: "app.flexibleThirdMonthsNumberThree",
    defaultMessage: "12",
    description: "Flexible"
  },
  flexibleThirdMonthsTimeOne: {
    id: "app.flexibleThirdMonthsTimeOne",
    defaultMessage: "3:00",
    description: "Flexible"
  },
  flexibleThirdMonthsTimeTwo: {
    id: "app.flexibleThirdMonthsTimeTwo",
    defaultMessage: "11.00",
    description: "Flexible"
  },
  moderateTitle: {
    id: "app.moderateTitle",
    defaultMessage: "Moderate: Full refund 5 days prior to arrival",
    description: "Moderate"
  },
  daysPrior: {
    id: "app.daysPrior",
    defaultMessage: "days Prior",
    description: "Moderate"
  },
  moderateOne: {
    id: "app.moderateOne",
    defaultMessage: "For a full refund of accommodation fees, cancellation must be made five full days prior to listing’s local check in time (or 3:00 PM if not specified) on the day of check in. For example, if check-in is on Friday, cancel by the previous Sunday before check in time.",
    description: "Moderate"
  },
  moderateTwo: {
    id: "app.moderateTwo",
    defaultMessage: "If the guest cancels less than 5 days in advance, the first night is non-refundable but 50% of the accommodation fees for remaining nights will be refunded.",
    description: "Moderate"
  },
  moderateThree: {
    id: "app.moderateThree",
    defaultMessage: "If the guest arrives and decides to leave early, 50% of the accommodation fees for the nights not spent 24 hours after the cancellation occurs are refunded.",
    description: "Moderate"
  },
  moderateMonthsNumberOne: {
    id: "app.moderateMonthsNumberOne",
    defaultMessage: "13",
    description: "Flexible"
  },
  moderateMonthsNumberTwo: {
    id: "app.moderateMonthsNumberTwo",
    defaultMessage: "16",
    description: "Flexible"
  },
  strictTitle: {
    id: "app.strictTitle",
    defaultMessage: "Strict: 50% refund up until 1 week prior to arrival",
    description: "Moderate"
  },
  strictOne: {
    id: "app.strictOne",
    defaultMessage: "For a 50% refund of accommodation fees, cancellation must be made seven full days prior to listing’s local check in time (or 3:00 PM if not specified) on the day of check in, otherwise no refund. For example, if check-in is on Friday, cancel by Friday of the previous week before check in time.",
    description: "Moderate"
  },
  strictTwo: {
    id: "app.strictTwo",
    defaultMessage: "If the guest cancels less than 7 days in advance, the remaining nights are not refunded.",
    description: "Moderate"
  },
  strictThree: {
    id: "app.strictThree",
    defaultMessage: "If the guest arrives and decides to leave early, the remaining nights are not refunded.",
    description: "Moderate"
  },
  strictMonthsOne: {
    id: "app.strictMonthsOne",
    defaultMessage: "15",
    description: "Moderate"
  },
  strictMonthsTwo: {
    id: "app.strictMonthsTwo",
    defaultMessage: "18",
    description: "Moderate"
  },
  spaceFreeOne: {
    id: "app.spaceFreeOne",
    defaultMessage: "Find out how much you could earn hosting your place",
    description: "Space Free"
  },
  spaceFreeTwo: {
    id: "app.spaceFreeTwo",
    defaultMessage: "Turn your extra space into extra income.",
    description: "Space Free"
  },
  freeOutMore: {
    id: "app.freeOutMore",
    defaultMessage: "Find out more",
    description: "Space Free"
  },
  ListPlaceTipOne: {
    id: "app.ListPlaceTipOne",
    defaultMessage: "Entire place",
    description: "List Plce Tips"
  },
  ListPlaceTipsTwo: {
    id: "app.ListPlaceTipsTwo",
    defaultMessage: "Guests will rent the entire place. Includes in-law units.",
    description: "List Plce Tips"
  },
  ListPlaceTip3: {
    id: "app.ListPlaceTip3",
    defaultMessage: "Lorem Ipsum Text",
    description: "List Plce Tips"
  },
  ListPlaceTips4: {
    id: "app.ListPlaceTips4",
    defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "List Plce Tips"
  },
  ListPlaceTip5: {
    id: "app.ListPlaceTip5",
    defaultMessage: "Excepteur sint occaecat",
    description: "List Plce Tips"
  },
  ListPlaceTips6: {
    id: "app.ListPlaceTips6",
    defaultMessage: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "List Plce Tips"
  },
  removeFile: {
    id: "app.removeFile",
    defaultMessage: "Remove file",
    description: "Remove file"
  },
  Sayyourspace: {
    id: "app.Sayyourspace",
    defaultMessage: "Say your space",
    description: "Sayyourspace"
  },
  aboutDescPayment: {
    id: "app.aboutDescPayment",
    defaultMessage: "Tell your expectations and the number of guests you are bringing with you so that the host can make your trip an organized and a perfect trip you ever had!",
    description: "Sayyourspace"
  },
  availableLabel: {
    id: "app.availableLabel",
    defaultMessage: "Available",
    description: "Listing Step3"
  },
  blockLabel: {
    id: "app.blockLabel",
    defaultMessage: "Block",
    description: "Listing Step3"
  },
  fieldPage: {
    id: "app.fieldPage",
    defaultMessage: "Page",
    description: "Page"
  },
  coverLabel: {
    id: "app.coverLabel",
    defaultMessage: "Cover",
    description: "Listing Step2"
  },
  warningLabel: {
    id: "app.warningLabel",
    defaultMessage: "Something went wrong!",
    description: "Warning"
  },
  completeRequest: {
    id: "app.completeRequest",
    defaultMessage: "We couldn't complete your request",
    description: "Warning"
  },
  errorCodeWarning: {
    id: "app.errorCodeWarning",
    defaultMessage: "Error code:",
    description: "Warning"
  },
  helpfulLinks: {
    id: "app.helpfulLinks",
    defaultMessage: "Here are some helpful links instead:",
    description: "Warning"
  },
  chooseLanguage: {
    id: "app.chooseLanguage",
    defaultMessage: "Choose a Language",
    description: "Choose a Language"
  },
  chooseACurrency: {
    id: "app.chooseACurrency",
    defaultMessage: "Choose a Currency",
    description: "Choose a Currency"
  },
  payoutFailure: {
    id: "app.payoutFailure",
    defaultMessage: "Oops! We are sorry!",
    description: "Uh-oh, the registration has failed."
  },
  payoutFailureSubtitle: {
    id: "app.payoutFailureSubtitle",
    defaultMessage: "Connecting your bank account with the platform verification is failed.",
    description: "Please add a valid SSN."
  },
  payoutFailureContent: {
    id: "app.payoutFailureContent",
    defaultMessage: 'Please try again to add your bank account with the platform by clickting the "Retry" option or Add a new payout account by clicking the "Add Payout Method".',
    description: "Please add a valid SSN."
  },
  paymentCardNumber: {
    id: "app.paymentCardNumber",
    defaultMessage: "Card Number",
    description: "cardNumber"
  },
  payoutType: {
    id: "app.payoutType",
    defaultMessage: "Account Type",
    description: "payout Account Type"
  },
  payoutIndividual: {
    id: "app.payoutIndividual",
    defaultMessage: "Individual",
    description: "Individual text"
  },
  payoutCompany: {
    id: "app.payoutCompany",
    defaultMessage: "Company",
    description: "Company text"
  },
  payoutCompanyName: {
    id: "app.payoutCompanyName",
    defaultMessage: "Company Name",
    description: "Company text"
  },
  payoutStripeInfo: {
    id: "app.payoutStripeInfo",
    defaultMessage: 'We use Stripe to make sure you get paid on time and to keep your personal bank and details secure. Click "Finish" to set up your payments on Stripe.',
    description: "Stripe text info"
  },
  notReady: {
    id: "app.notReady",
    defaultMessage: "Not Ready",
    description: "Payout Method"
  },
  payoutVerify: {
    id: "app.payoutVerify",
    defaultMessage: "Verify",
    description: "Payout Method"
  },
  payoutRetry: {
    id: "app.payoutRetry",
    defaultMessage: "Retry",
    description: "Payout Method"
  },
  payoutVerifyStripeInfo: {
    id: "app.payoutVerifyStripeInfo",
    defaultMessage: "We use Stripe to make sure you get paid on time safe and secure. It requires additional verification to connect your bank account with the platform.",
    description: "Payout Method"
  },
  reservationIsCompleted: {
    id: "app.reservationIsCompleted",
    defaultMessage: "Reservation is completed",
    description: "View message action"
  },
  reservationIsCompletedDescription: {
    id: "app.reservationIsCompletedDescription",
    defaultMessage: "Reservation of your listing is completed.",
    description: "View message action"
  },
  averagePricePerNight: {
    id: "app.averagePricePerNight",
    defaultMessage: "Average rate per night for your trip.",
    description: "Tooltip"
  },
  exportCalendar: {
    id: "app.exportCalendar",
    defaultMessage: "Export Calendar",
    description: "exportCalendar"
  },
  exportCalendarDescription: {
    id: "app.exportCalendarDescription",
    defaultMessage: "Copy and paste the link into other ICAL applications",
    description: "exportCalendar"
  },
  importCalendar: {
    id: "app.importCalendar",
    defaultMessage: "Import a New Calendar",
    description: "importCalendar"
  },
  importCalendarDesc: {
    id: "app.importCalendarDesc",
    defaultMessage: "Import other calendars you use and we’ll automatically keep this listing’s availability up-to-date.",
    description: "importCalendar"
  },
  importCalendarDesc1: {
    id: "app.importCalendarDesc1",
    defaultMessage: "Calendar Address (URL)",
    description: "importCalendar"
  },
  importCalendarDesc2: {
    id: "app.importCalendarDesc2",
    defaultMessage: "Calendar Address (URL)",
    description: "importCalendar"
  },
  importCalendarBtn: {
    id: "app.importCalendarBtn",
    defaultMessage: "Import Calendar",
    description: "importCalendar"
  },
  booked: {
    id: "app.booked",
    defaultMessage: "Booked",
    description: "Calendar"
  },
  notAvailable: {
    id: "app.notAvailable",
    defaultMessage: "Not Available",
    description: "Calendar"
  },
  discountStays: {
    id: "app.discountStays",
    defaultMessage: "Discount for longer stay",
    description: "Discount"
  },
  yesText: {
    id: "app.yesText",
    defaultMessage: "Yes",
    description: "yes"
  },
  noText: {
    id: "app.noText",
    defaultMessage: "No",
    description: "No"
  },
  verificationDesc: {
    id: "app.verificationDesc",
    defaultMessage: "If it doesn't arrive, click cancel and try again.",
    description: "Verification"
  },
  confirmedLabel: {
    id: "app.confirmedLabel",
    defaultMessage: "Confirmed",
    description: "Confirmed"
  },
  confirmLabel: {
    id: "app.confirmLabel",
    defaultMessage: "Confirm",
    description: "Confirm"
  },
  uploadSizedLabel: {
    id: "app.uploadSizedLabel",
    defaultMessage: "Maximum upload size:",
    description: "uploadSizedLabel"
  },
  recepitInfoDesc: {
    id: "app.recepitInfoDesc",
    defaultMessage: "Average rate per night for your trip.",
    description: "Receipt Info"
  },
  showMap: {
    id: "app.showMap",
    defaultMessage: "Show Map",
    description: "showMap"
  },
  shareModal: {
    id: "app.shareModal",
    defaultMessage: "Modal",
    description: "shareModal"
  },
  shareLabel: {
    id: "app.shareLabel",
    defaultMessage: "Share",
    description: "shareLabel"
  },
  emailLabel: {
    id: "app.emailLabel",
    defaultMessage: "Email",
    description: "emailLabel"
  },
  inLabel: {
    id: "app.inLabel",
    defaultMessage: "in",
    description: "inLabel"
  },
  socialShareDesc: {
    id: "app.socialShareDesc",
    defaultMessage: "Check out this awesome listing on",
    description: "socialShareDesc"
  },
  tripCompleted: {
    id: "app.tripCompleted",
    defaultMessage: "Trip is completed",
    description: "tripCompleted"
  },
  countingSectionNumberOne: {
    id: "app.countingSectionNumberOne",
    defaultMessage: "2.9M",
    description: "2.9M"
  },
  countingSectionNumberTwo: {
    id: "app.countingSectionNumberTwo",
    defaultMessage: "800K",
    description: "800K"
  },
  countingSectionNumberThree: {
    id: "app.countingSectionNumberThree",
    defaultMessage: "14K",
    description: "14K"
  },
  readyToEarn: {
    id: "app.readyToEarn",
    defaultMessage: "Ready to earn?",
    description: "Ready to earn?"
  },
  readyToEarnDesc: {
    id: "app.readyToEarnDesc",
    defaultMessage: "Get started",
    description: "Ready to earn?"
  },
  taxRate: {
    id: "app.taxRate",
    defaultMessage: "Tax Rate",
    description: "Tax Rate"
  },
  taxRateLabel: {
    id: "app.taxRateLabel",
    defaultMessage: "Please add in the appropriate tax rate to cover any local and state taxes you may be responsible for.",
    description: "Tax Rate Label"
  },
  taxRateInvalidError: {
    id: "app.taxRateInvalidError",
    defaultMessage: "Invalid tax rate. The tax rate must be between 1% and 99%.",
    description: "Invalid discount"
  },
  emailAddressLabel: {
    id: "app.emailAddressLabel",
    defaultMessage: "Email address",
    description: "Email address"
  },
  houseRulesLabel: {
    id: "app.houseRulesLabel",
    defaultMessage: "'s House Rules",
    description: "'s House Rules"
  },
  contentLabel: {
    id: "app.contentLabel",
    defaultMessage: "Content",
    description: "Content"
  },
  ChooseFooterCategory: {
    id: "app.ChooseFooterCategory",
    defaultMessage: "Choose Footer Category",
    description: "Choose Footer Category"
  },
  metaTitleLabel: {
    id: "app.metaTitleLabel",
    defaultMessage: "Meta Title",
    description: "Meta Title"
  },
  metaDescriptionLabel: {
    id: "app.metaDescriptionLabel",
    defaultMessage: "Meta Description",
    description: "Meta Description"
  },
  pageTitleLabel: {
    id: "app.pageTitleLabel",
    defaultMessage: "Page Title",
    description: "Page Title"
  },
  pageUrl: {
    id: "app.pageUrl",
    defaultMessage: "Page URL",
    description: "Page URL"
  },
  pageUrlExample: {
    id: "app.pageUrlExample",
    defaultMessage: "Page URL  eg.(pageURL)",
    description: "Page URL  eg.(pageURL)"
  },
  footerCategoryLabel: {
    id: "app.footerCategoryLabel",
    defaultMessage: "Footer Category",
    description: "Footer Category"
  },
  pageLabel: {
    id: "app.pageLabel",
    defaultMessage: "/page/",
    description: "/page/"
  },
  loadingLabel: {
    id: "app.loadingLabel",
    defaultMessage: "Loading...",
    description: "Loading..."
  },
  imageLabel: {
    id: "app.imageLabel",
    defaultMessage: "Image",
    description: "Image"
  },
  locationAddress: {
    id: "app.locationAddress",
    defaultMessage: "Location Address",
    description: "Location Address"
  },
  subTitle: {
    id: "app.subTitle",
    defaultMessage: "Sub Title",
    description: "Sub Title"
  },
  totalUsers: {
    id: "app.totalUsers",
    defaultMessage: "Total Users",
    description: "Total Users"
  },
  last24Hours: {
    id: "app.last24Hours",
    defaultMessage: "Last 24 hours Users",
    description: "Last 24 hours Users"
  },
  last30Days: {
    id: "app.last30Days",
    defaultMessage: "Last 30 days Users",
    description: "Last 30 days Users"
  },
  last30DaysListing: {
    id: "app.last30DaysListing",
    defaultMessage: "Last 30 days Listings",
    description: "Last 30 days Listings"
  },
  last24HoursListing: {
    id: "app.last24HoursListing",
    defaultMessage: "Last 24 hours Listings",
    description: "Last 24 hours Listings"
  },
  totalListings: {
    id: "app.totalListings",
    defaultMessage: "Total Listings",
    description: "Total Listings"
  },
  year2020: {
    id: "app.year2020",
    defaultMessage: "Year - 2020",
    description: "Year - 2020"
  },
  totalReservation: {
    id: "app.totalReservation",
    defaultMessage: "Total Reservations",
    description: "Total Reservations"
  },
  last24HoursReservation: {
    id: "app.last24HoursReservation",
    defaultMessage: "Last 24 hours Reservations",
    description: "Last 24 hours Reservations"
  },
  last30DaysReservation: {
    id: "app.last30DaysReservation",
    defaultMessage: "Last 30 days  Reservations",
    description: "Last 30 days  Reservations"
  },
  copyRightLabel: {
    id: "app.copyRightLabel",
    defaultMessage: "Copyright",
    description: "Copyright"
  },
  copyRightLabelDesc: {
    id: "app.copyRightLabelDesc",
    defaultMessage: "All rights reserved.",
    description: "All rights reserved."
  },
  logInLabel: {
    id: "app.logInLabel",
    defaultMessage: "Log in",
    description: "Log in"
  },
  adminlogInLabel: {
    id: "app.adminlogInLabel",
    defaultMessage: "Admin Login",
    description: "Admin Login"
  },
  listId: {
    id: "app.listId",
    defaultMessage: "List ID",
    description: "List ID"
  },
  reviewContentLabel: {
    id: "app.reviewContentLabel",
    defaultMessage: "Review Content",
    description: "Review Content"
  },
  goToMainSite: {
    id: "app.goToMainSite",
    defaultMessage: "Go To Main Site",
    description: "Go To Main Site"
  },
  addNewLabel: {
    id: "app.addNewLabel",
    defaultMessage: "Add New",
    description: "Add New"
  },
  editLabel: {
    id: "app.editLabel",
    defaultMessage: "Edit",
    description: "Edit"
  },
  reject: {
    id: "app.reject",
    defaultMessage: " Reject",
    description: "Edit"
  },
  approves: {
    id: "app.approves",
    defaultMessage: " Approve",
    description: "Edit"
  },
  hostTitle: {
    id: "app.hostTitle",
    defaultMessage: " Title",
    description: "Title"
  },
  hostHostName: {
    id: "app.hostHostName",
    defaultMessage: " Host Name",
    description: "HostName"
  },
  hostHostEmail: {
    id: "app.hostHostEmail",
    defaultMessage: " Host Email",
    description: "HostEmail"
  },
  hostAddress: {
    id: "app.hostAddress",
    defaultMessage: " Address",
    description: "Address"
  },
  hostCity: {
    id: "app.hostCity",
    defaultMessage: " City",
    description: "City"
  },
  hostState: {
    id: "app.hostState",
    defaultMessage: " State",
    description: "State"
  },
  hostCountry: {
    id: "app.hostCountry",
    defaultMessage: " Country",
    description: "Country"
  },
  hostCreatedDate: {
    id: "app.hostCreatedDate",
    defaultMessage: "Created Date",
    description: "	Created Date"
  },
  adminRoleLabel: {
    id: "app.adminRoleLabel",
    defaultMessage: "Admin Role",
    description: "Admin Role"
  },
  adminUserLabel: {
    id: "app.adminUserLabel",
    defaultMessage: "Admin User",
    description: "Admin User"
  },
  addPageLabel: {
    id: "app.addPageLabel",
    defaultMessage: "Add Page",
    description: "Add Page"
  },
  enabledLabel: {
    id: "app.enabledLabel",
    defaultMessage: "Enabled",
    description: "Enabled"
  },
  disabledLabel: {
    id: "app.disabledLabel",
    defaultMessage: "Disabled",
    description: "Disabled"
  },
  hostListingStatus: {
    id: "app.hostListingStatus",
    defaultMessage: "Pending",
    description: "Pending"
  },
  enableLabel: {
    id: "app.enableLabel",
    defaultMessage: "Enable",
    description: "Enable"
  },
  disableLabel: {
    id: "app.disableLabel",
    defaultMessage: "Disable",
    description: "Disable"
  },
  addLabel: {
    id: "app.addLabel",
    defaultMessage: "Add",
    description: "Add"
  },
  setBaseCurrency: {
    id: "app.setBaseCurrency",
    defaultMessage: "Set as base currency",
    description: "Set as base currency"
  },
  dateOfBirthLabel: {
    id: "app.dateOfBirthLabel",
    defaultMessage: "Date Of Birth",
    description: "Date Of Birth"
  },
  infoLabel: {
    id: "app.infoLabel",
    defaultMessage: "Info",
    description: "Info"
  },
  titleAdminLabel: {
    id: "app.titleAdminLabel",
    defaultMessage: "Title",
    description: "Title"
  },
  bannerImage: {
    id: "app.bannerImage",
    defaultMessage: "Banner Image",
    description: "Banner Image"
  },
  descriptionAdminLabel: {
    id: "app.descriptionAdminLabel",
    defaultMessage: "Description",
    description: "Description"
  },
  buttonLabel: {
    id: "app.buttonLabel",
    defaultMessage: "Button Label",
    description: "Button Label"
  },
  bottomText: {
    id: "app.bottomText",
    defaultMessage: "Bottom Text",
    description: "Bottom Text"
  },
  IconLabel: {
    id: "app.IconLabel",
    defaultMessage: "Icon",
    description: "Icon"
  },
  manageLabel: {
    id: "app.manageLabel",
    defaultMessage: "Manage",
    description: "Manage"
  },
  listSettings: {
    id: "app.listSettings",
    defaultMessage: "List Settings",
    description: "List Settings"
  },
  reservationId: {
    id: "app.reservationId",
    defaultMessage: "Reservation ID",
    description: "Reservation ID"
  },
  adminListTitle: {
    id: "app.adminListTitle",
    defaultMessage: "List Title",
    description: "List Title"
  },
  codeLabel: {
    id: "app.codeLabel",
    defaultMessage: "Code",
    description: "Code"
  },
  hostNameLabel: {
    id: "app.hostNameLabel",
    defaultMessage: "Host Name",
    description: "Host Name"
  },
  payoutLabel: {
    id: "app.payoutLabel",
    defaultMessage: "Payout Amount",
    description: "Payout Amount"
  },
  reservationStatus: {
    id: "app.reservationStatus",
    defaultMessage: "Reservation Status",
    description: "Reservation Status"
  },
  payoutStatus: {
    id: "app.payoutStatus",
    defaultMessage: "Payout Status",
    description: "Payout Status"
  },
  holdPayout: {
    id: "app.holdPayout",
    defaultMessage: "Hold Payout",
    description: "Hold Payout"
  },
  live: {
    id: "app.live",
    defaultMessage: "Live",
    description: "Live"
  },
  sandbox: {
    id: "app.sandbox",
    defaultMessage: "Sandbox",
    description: "Sandbox"
  },
  apiUserId: {
    id: "app.apiUserId",
    defaultMessage: "API User Id",
    description: "API User Id"
  },
  apiPassword: {
    id: "app.apiPassword",
    defaultMessage: "API Password",
    description: "API Password"
  },
  apiSecret: {
    id: "app.apiSecret",
    defaultMessage: "API Secret",
    description: "API Secret"
  },
  addId: {
    id: "app.addId",
    defaultMessage: "App Id",
    description: "App Id"
  },
  paymentMode: {
    id: "app.paymentMode",
    defaultMessage: "Payment Mode",
    description: "Payment Mode"
  },
  paymentStatus: {
    id: "app.paymentStatus",
    defaultMessage: "Payment Status",
    description: "Payment Status"
  },
  paymentName: {
    id: "app.paymentName",
    defaultMessage: "Payment Name",
    description: "Payment Name"
  },
  addPopularLocation: {
    id: "app.addPopularLocation",
    defaultMessage: "Add Popular Location",
    description: "Add Popular Location"
  },
  profilePicture: {
    id: "app.profilePicture",
    defaultMessage: "Profile Picture",
    description: "Profile Picture"
  },
  language: {
    id: "app.language",
    defaultMessage: "Language",
    description: "Language"
  },
  bioInfo: {
    id: "app.bioInfo",
    defaultMessage: "Bio Info",
    description: "Bio Info"
  },
  userDeletedLabel: {
    id: "app.userDeletedLabel",
    defaultMessage: "User Deleted",
    description: "User Deleted"
  },
  payoutRefund: {
    id: "app.payoutRefund",
    defaultMessage: "Payout/Refund",
    description: "Payout/Refund"
  },
  noPayoutMethod: {
    id: "app.noPayoutMethod",
    defaultMessage: "No Payout method",
    description: "No Payout method"
  },
  closedLabel: {
    id: "app.closedLabel",
    defaultMessage: "Closed",
    description: "Closed"
  },
  processingLabel: {
    id: "app.processingLabel",
    defaultMessage: "Processing...",
    description: "Processing..."
  },
  completedLabel: {
    id: "app.completedLabel",
    defaultMessage: "Completed",
    description: "Completed"
  },
  transactionNotfound: {
    id: "app.transactionNotfound",
    defaultMessage: "Transaction not found",
    description: "Transaction not found"
  },
  notEligible: {
    id: "app.notEligible",
    defaultMessage: "Not Eligible",
    description: "Not Eligible"
  },
  proceedRefund: {
    id: "app.proceedRefund",
    defaultMessage: "Proceed Refund",
    description: "Proceed Refund"
  },
  viewLabel: {
    id: "app.viewLabel",
    defaultMessage: "View",
    description: "View"
  },
  exportDataIntoCSV: {
    id: "app.exportDataIntoCSV",
    defaultMessage: "Export Data into CSV",
    description: "Export Data into CSV"
  },
  receiverLabel: {
    id: "app.receiverLabel",
    defaultMessage: "Receiver",
    description: "Receiver"
  },
  minimumPrice: {
    id: "app.minimumPrice",
    defaultMessage: "Minimum Price",
    description: "Minimum Price"
  },
  maximumPrice: {
    id: "app.maximumPrice",
    defaultMessage: "Maximum Price",
    description: "Maximum Price"
  },
  priceRangeCurrency: {
    id: "app.priceRangeCurrency",
    defaultMessage: "Price Range Currency",
    description: "Price Range Currency"
  },
  guestFeeType: {
    id: "app.guestFeeType",
    defaultMessage: "Guest Fee Type",
    description: "Guest Fee Type"
  },
  fixedPrice: {
    id: "app.fixedPrice",
    defaultMessage: "Fixed Price",
    description: "Fixed Price"
  },
  percentage: {
    id: "app.percentage",
    defaultMessage: "Percentage",
    description: "Percentage"
  },
  guestServiceFee: {
    id: "app.guestServiceFee",
    defaultMessage: "Guest Service Fee",
    description: "Guest Service Fee"
  },
  guestServiceFeePlacehold: {
    id: "app.guestServiceFeePlacehold",
    defaultMessage: "Amount/Percentage",
    description: "Amount/Percentage"
  },
  hostFeeType: {
    id: "app.hostFeeType",
    defaultMessage: "Host Fee Type",
    description: "Host Fee Type"
  },
  hostServiceFeeType: {
    id: "app.hostServiceFeeType",
    defaultMessage: "Host Service Fee",
    description: "Host Service Fee"
  },
  submitLabel: {
    id: "app.submitLabel",
    defaultMessage: "Submit",
    description: "Submit"
  },
  add: {
    id: "app.add",
    defaultMessage: "Add",
    description: "Add Button"
  },
  update: {
    id: "app.update",
    defaultMessage: "Update",
    description: "Update Button"
  },
  addItemNew: {
    id: "app.addItemNew",
    defaultMessage: "Item name",
    description: "Item name"
  },
  addName: {
    id: "app.addName",
    defaultMessage: "Name",
    description: "Name"
  },
  pageTitle: {
    id: "app.pageTitle",
    defaultMessage: "Page Title",
    description: "Page Title"
  },
  pageSubTitle: {
    id: "app.pageSubTitle",
    defaultMessage: "Page Sub Title (Optional)",
    description: "Page Sub Title"
  },
  hostingStep: {
    id: "app.hostingStep",
    defaultMessage: "How many Step",
    description: "Step"
  },
  fieldsType: {
    id: "app.fieldsType",
    defaultMessage: "Type",
    description: "Name"
  },
  fieldsPageId: {
    id: "app.fieldsPageId",
    defaultMessage: "Page ID",
    description: "Page ID"
  },
  fieldsOption: {
    id: "app.fieldsOption",
    defaultMessage: "Options",
    description: "Options"
  },
  labelOption: {
    id: "app.labelOption",
    defaultMessage: "Label",
    description: "Label"
  },
  valueOption: {
    id: "app.valueOption",
    defaultMessage: "Value",
    description: "Value"
  },
  addNewDescription: {
    id: "app.addNewDescription",
    defaultMessage: "Item description",
    description: "Item description"
  },
  addOtherItem: {
    id: "app.addOtherItem",
    defaultMessage: "Other Item name",
    description: "Other Item name"
  },
  addOptions: {
    id: "app.addOptions",
    defaultMessage: "Add Options",
    description: "add Options"
  },
  startValue: {
    id: "app.startValue",
    defaultMessage: "Start value",
    description: "Start value"
  },
  endValue: {
    id: "app.endValue",
    defaultMessage: "End value",
    description: "Add end value here ...."
  },
  enable: {
    id: "app.enable",
    defaultMessage: "Enable",
    description: "Enable"
  },
  disable: {
    id: "app.disable",
    defaultMessage: "Disable",
    description: "Disable"
  },
  itemNameIsRequired: {
    id: "app.itemNameIsRequired",
    defaultMessage: "Item name is required",
    description: "itemNameIsRequired"
  },
  otherItemNameIsRequired: {
    id: "app.otherItemNameIsRequired",
    defaultMessage: "Other item name is required",
    description: "otherItemNameIsRequired"
  },
  startValueIsInvalid: {
    id: "app.startValueIsInvalid",
    defaultMessage: "Invalid Start value, provide a valid number",
    description: "startValueIsInvalid"
  },
  endValueIsInvalid: {
    id: "app.endValueIsInvalid",
    defaultMessage: "Invalid End value, provide a valid number",
    description: "endValueIsInvalid"
  },
  endValueGreater: {
    id: "app.endValueGreater",
    defaultMessage: "End value must be greater than Start value",
    description: "endValueGreater"
  },
  descriptionEmpty: {
    id: "app.descriptionEmpty",
    defaultMessage: "Empty spaces are not allowed",
    description: "Wrong went wrong"
  },
  blankSpace: {
    id: "app.blankSpace",
    defaultMessage: "Input is Blank",
    description: "blankSpace"
  },
  exceedLimit: {
    id: "app.exceedLimit",
    defaultMessage: "Limit Exceeded",
    description: "exceedLimit"
  },
  logoLabel: {
    id: "app.logoLabel",
    defaultMessage: "Logo",
    description: "Logo"
  },
  HomelogoLabel: {
    id: "app.HomelogoLabel",
    defaultMessage: "Home Page Logo",
    description: "Home Page Logo"
  },
  EmaillogoLabel: {
    id: "app.EmaillogoLabel",
    defaultMessage: "Email Logo",
    description: "Email Logo"
  },
  logoHeightLabel: {
    id: "app.logoHeightLabel",
    defaultMessage: "Logo Height",
    description: "Logo Height"
  },
  logoWidthLabel: {
    id: "app.logoWidthLabel",
    defaultMessage: "Logo Width",
    description: "Logo Width"
  },
  homelogoHeight: {
    id: "app.homelogoHeight",
    defaultMessage: "Home Logo Height",
    description: "Home Logo Height"
  },
  homelogoWidth: {
    id: "app.homelogoWidth",
    defaultMessage: "Home Logo Width",
    description: "Home Logo Width"
  },
  siteName: {
    id: "app.siteName",
    defaultMessage: "Site Name",
    description: "Site Name"
  },
  siteTitle: {
    id: "app.siteTitle",
    defaultMessage: "Site Title",
    description: "Site Title"
  },
  metaKeywordLabel: {
    id: "app.metaKeywordLabel",
    defaultMessage: "Meta Keyword",
    description: "Meta Keyword"
  },
  metaKeywordLabelDesc: {
    id: "app.metaKeywordLabelDesc",
    defaultMessage: "Meta Description",
    description: "Meta Description"
  },
  facebookURL: {
    id: "app.facebookURL",
    defaultMessage: "Facebook URL",
    description: "Facebook URL"
  },
  twitterURL: {
    id: "app.twitterURL",
    defaultMessage: "Twitter URL",
    description: "Twitter URL"
  },
  instagramURL: {
    id: "app.instagramURL",
    defaultMessage: "Instagram URL",
    description: "Instagram URL"
  },
  homePageLayout: {
    id: "app.homePageLayout",
    defaultMessage: "Home Page Layout",
    description: "Home Page Layout"
  },
  homePageLayoutDesc: {
    id: "app.homePageLayoutDesc",
    defaultMessage: "Banner Text with Image Slider Layout",
    description: "Banner Text with Image Slider Layout"
  },
  homePageLayoutDesc1: {
    id: "app.homePageLayoutDesc1",
    defaultMessage: "Banner Text Only Layout",
    description: "Banner Text Only Layout"
  },
  homePageLayoutDesc2: {
    id: "app.homePageLayoutDesc2",
    defaultMessage: "Banner Text Layout with Detailed Search form",
    description: "Banner Text Layout with Detailed Search form"
  },
  homePageLayoutDesc3: {
    id: "app.homePageLayoutDesc3",
    defaultMessage: "Single Banner Image Layout with Detailed Search form",
    description: "Single Banner Image Layout with Detailed Search form"
  },
  phoneNumberFormat: {
    id: "app.phoneNumberFormat",
    defaultMessage: "Phone Number Format",
    description: "Phone Number Format"
  },
  twilioSMS: {
    id: "app.twilioSMS",
    defaultMessage: "Twilio SMS",
    description: "Twilio SMS"
  },
  normalPhoneNumber: {
    id: "app.normalPhoneNumber",
    defaultMessage: "Normal Phone Number",
    description: "Normal Phone Number"
  },
  appAvailable: {
    id: "app.appAvailable",
    defaultMessage: "App Available",
    description: "App Available"
  },
  playStoreUrl: {
    id: "app.playStoreUrl",
    defaultMessage: "Play store URL",
    description: "Play store URL"
  },
  appStoreUrl: {
    id: "app.appStoreUrl",
    defaultMessage: "App store URL",
    description: "App store URL"
  },
  emailIdLabel: {
    id: "app.emailIdLabel",
    defaultMessage: "Email Id",
    description: "Email Id"
  },
  mobileNumberLabel: {
    id: "app.mobileNumberLabel",
    defaultMessage: "Mobile Number",
    description: "Mobile Number"
  },
  headerTitle: {
    id: "app.headerTitle",
    defaultMessage: "Header Title",
    description: "Header Title"
  },
  headerTitleContent: {
    id: "app.headerTitleContent",
    defaultMessage: "Header Content",
    description: "Header Content"
  },
  isActive: {
    id: "app.isActive",
    defaultMessage: "Is Active",
    description: "Is Active"
  },
  blockTitleLabel: {
    id: "app.blockTitleLabel",
    defaultMessage: "Block Title",
    description: "Block Title"
  },
  blockContentLabel: {
    id: "app.blockContentLabel",
    defaultMessage: "Block Content",
    description: "Block Content"
  },
  blockImageLabel: {
    id: "app.blockImageLabel",
    defaultMessage: "Block Image",
    description: "Block Image"
  },
  aboutUsLabel: {
    id: "app.aboutUsLabel",
    defaultMessage: "About Us",
    description: "About Us"
  },
  setToEnable: {
    id: "app.setToEnable",
    defaultMessage: "Set to enable",
    description: "Set to enable"
  },
  setToDisable: {
    id: "app.setToDisable",
    defaultMessage: "Set to disable",
    description: "Set to disable"
  },
  cancelledLabel: {
    id: "app.cancelledLabel",
    defaultMessage: "Cancelled by",
    description: "Cancelled by"
  },
  bookingType: {
    id: "app.bookingType",
    defaultMessage: "Booking Type",
    description: "Booking Type"
  },
  amountPaid: {
    id: "app.amountPaid",
    defaultMessage: "Amount Paid",
    description: "Amount Paid"
  },
  guestName: {
    id: "app.guestName",
    defaultMessage: "Guest Name",
    description: "Guest Name"
  },
  guestPhoneNumber: {
    id: "app.guestPhoneNumber",
    defaultMessage: "Guest Phone Number",
    description: "Guest Phone Number"
  },
  guestEmail: {
    id: "app.guestEmail",
    defaultMessage: "Guest Email",
    description: "Guest Email"
  },
  hostName: {
    id: "app.hostName",
    defaultMessage: "Host Name",
    description: "Host Name"
  },
  hostPhoneNumber: {
    id: "app.hostPhoneNumber",
    defaultMessage: "Host Phone Number",
    description: "Host Phone Number"
  },
  hostEmail: {
    id: "app.hostEmail",
    defaultMessage: "Host Email",
    description: "Host Email"
  },
  cancelDate: {
    id: "app.cancelDate",
    defaultMessage: "Cancel Date",
    description: "Cancel Date"
  },
  hostBannerTitle: {
    id: "app.hostBannerTitle",
    defaultMessage: "Host Banner Title",
    description: "Host Banner Title"
  },
  hostBannerLabel: {
    id: "app.hostBannerLabel",
    defaultMessage: "Host Banner",
    description: "Host Banner"
  },
  whyBlockTitleLabel: {
    id: "app.whyBlockTitleLabel",
    defaultMessage: "Why Block Title",
    description: "Why Block Title"
  },
  whyBlockContentLabel: {
    id: "app.whyBlockContentLabel",
    defaultMessage: "Why Block Content",
    description: "Why Block Content"
  },
  hostingBlockTitleHeading: {
    id: "app.hostingBlockTitleHeading",
    defaultMessage: "Hosting Block Title Heading",
    description: "Hosting Block Title Heading"
  },
  hostingBlockTitleLabel: {
    id: "app.hostingBlockTitleLabel",
    defaultMessage: "Hosting Block Title",
    description: "Hosting Block Title"
  },
  hostingBlockContentLabel: {
    id: "app.hostingBlockContentLabel",
    defaultMessage: "Hosting Block Content",
    description: "Hosting Block Content"
  },
  coverSectionTitleLabel: {
    id: "app.coverSectionTitleLabel",
    defaultMessage: "Cover Section Title",
    description: "Cover Section Title"
  },
  coverSectionContentLabel: {
    id: "app.coverSectionContentLabel",
    defaultMessage: "Cover Section Content",
    description: "Cover Section Content"
  },
  coverSectionFeatureLabel: {
    id: "app.coverSectionFeatureLabel",
    defaultMessage: "Cover Section Feature",
    description: "Cover Section Feature"
  },
  coverSectionBannerLabel: {
    id: "app.coverSectionBannerLabel",
    defaultMessage: "Cover Section Banner",
    description: "Cover Section Banner"
  },
  paymentTitleHeadingLabel: {
    id: "app.paymentTitleHeadingLabel",
    defaultMessage: "Payment Title Heading",
    description: "Payment Title Heading"
  },
  paymentTitleLabel: {
    id: "app.paymentTitleLabel",
    defaultMessage: "Payment Title",
    description: "Payment Title"
  },
  paymentContentLabel: {
    id: "app.paymentContentLabel",
    defaultMessage: "Payment Content",
    description: "Payment Content"
  },
  quoteSectionTitle: {
    id: "app.quoteSectionTitle",
    defaultMessage: "Quote Section Title",
    description: "Quote Section Title"
  },
  quoteSectionContent: {
    id: "app.quoteSectionContent",
    defaultMessage: "Quote Section Content",
    description: "Quote Section Content"
  },
  quoteSectionButton: {
    id: "app.quoteSectionButton",
    defaultMessage: "Quote Section Button",
    description: "Quote Section Button"
  },
  quoteSectionBanner: {
    id: "app.quoteSectionBanner",
    defaultMessage: "Quote Section Banner",
    description: "Quote Section Banner"
  },
  faqBlockTitle: {
    id: "app.faqBlockTitle",
    defaultMessage: "FAQ Block Title",
    description: "FAQ Block Title"
  },
  faqBlockContent: {
    id: "app.faqBlockContent",
    defaultMessage: "FAQ Block Content",
    description: "FAQ Block Content"
  },
  siteSettings: {
    id: "app.siteSettings",
    defaultMessage: "Site Settings",
    description: "Site Settings"
  },
  manageAdmin: {
    id: "app.manageAdmin",
    defaultMessage: "Manage Admins",
    description: "Manage Admins"
  },
  manageAdminUsers: {
    id: "app.manageAdminUsers",
    defaultMessage: "Manage Admin Users",
    description: "Manage Admin Users"
  },
  manageAdminRoles: {
    id: "app.manageAdminRoles",
    defaultMessage: "Manage Admin Roles",
    description: "Manage Admin Roles"
  },
  manageUser: {
    id: "app.manageUser",
    defaultMessage: "Manage Users",
    description: "Manage Users"
  },
  manageReservations: {
    id: "app.manageReservations",
    defaultMessage: "Manage Reservations",
    description: "Manage Reservations"
  },
  reviewManagement: {
    id: "app.reviewManagement",
    defaultMessage: "Reviews Management",
    description: "Reviews Management"
  },
  adminReviews: {
    id: "app.adminReviews",
    defaultMessage: "Admin Reviews",
    description: "Admin Reviews"
  },
  welcomeAdmin: {
    id: "app.welcomeAdmin",
    defaultMessage: "Welcome, Admin",
    description: "Welcome, Admin"
  },
  manageReviwes: {
    id: "app.manageReviwes",
    defaultMessage: "Manage Reviews",
    description: "Manage Reviews"
  },
  writeReviwes: {
    id: "app.writeReviwes",
    defaultMessage: "Write a review",
    description: "Write Review"
  },
  manageServiceFee: {
    id: "app.manageServiceFee",
    defaultMessage: "Manage Service Fee",
    description: "Manage Service Fee"
  },
  reportManagement: {
    id: "app.reportManagement",
    defaultMessage: "Report Management",
    description: "Report Management"
  },
  managePayout: {
    id: "app.managePayout",
    defaultMessage: "Manage Payout",
    description: "Manage Payout"
  },
  manageCurrency: {
    id: "app.manageCurrency",
    defaultMessage: "Manage Currency",
    description: "Manage Currency"
  },
  searchSettings: {
    id: "app.searchSettings",
    defaultMessage: "Search Settings",
    description: "Search Settings"
  },
  changePasswordLabel: {
    id: "app.changePasswordLabel",
    defaultMessage: "Change Password",
    description: "Change Password"
  },
  staticContentManagement: {
    id: "app.staticContentManagement",
    defaultMessage: "Static Content Management",
    description: "Static Content Management"
  },
  contentManagementLabel: {
    id: "app.contentManagementLabel",
    defaultMessage: "Content Management",
    description: "Content Management"
  },
  maximumNightsLabel: {
    id: "app.maximumNightsLabel",
    defaultMessage: "Maximum Nights",
    description: "Maximum Nights"
  },
  minimumNightsLabel: {
    id: "app.minimumNightsLabel",
    defaultMessage: "Minimum Nights",
    description: "Minimum Nights"
  },
  bookingNoticeTime: {
    id: "app.bookingNoticeTime",
    defaultMessage: "Booking Notice Time",
    description: "Booking Notice Time"
  },
  reviewHowGuestBook: {
    id: "app.reviewHowGuestBook",
    defaultMessage: "Review How Guests Book",
    description: "Review How Guests Book"
  },
  listSettingStep: {
    id: "app.listSettingStep",
    defaultMessage: "List Settings for Step",
    description: "List Settings for Step"
  },
  essentialAmenities: {
    id: "app.essentialAmenities",
    defaultMessage: "Essential Amenities",
    description: "Essential Amenities"
  },
  bathroomType: {
    id: "app.bathroomType",
    defaultMessage: "Bathroom Type",
    description: "Bathroom Type"
  },
  bedTypeLabel: {
    id: "app.bedTypeLabel",
    defaultMessage: "Bed Type",
    description: "Bed Type"
  },
  bedRoomsLabel: {
    id: "app.bedRoomsLabel",
    defaultMessage: "Bed Rooms",
    description: "Bed Rooms"
  },
  buildingSize: {
    id: "app.buildingSize",
    defaultMessage: "Building Size",
    description: "Building Size"
  },
  houseTypeLabel: {
    id: "app.houseTypeLabel",
    defaultMessage: "House Type",
    description: "House Type"
  },
  personCapacity: {
    id: "app.personCapacity",
    defaultMessage: "Person Capacity",
    description: "Person Capacity"
  },
  whyBecomeHostPage: {
    id: "app.whyBecomeHostPage",
    defaultMessage: "Why Become Host Page",
    description: "Why Become Host Page"
  },
  pageSetting: {
    id: "app.pageSetting",
    defaultMessage: "Fields Setting",
    description: "Page Setting"
  },
  homeBannerLabel: {
    id: "app.homeBannerLabel",
    defaultMessage: "Home Banner",
    description: "Home Banner"
  },
  homeOffer: {
    id: "app.homeOffer",
    defaultMessage: "Home Offer",
    description: "Home Banner"
  },
  fieldCar: {
    id: "app.fieldCar",
    defaultMessage: "Car",
    description: "Car"
  },
  staticInfoBlock: {
    id: "app.staticInfoBlock",
    defaultMessage: "Static Info Block",
    description: "Static Info Block"
  },
  managePopularLocations: {
    id: "app.managePopularLocations",
    defaultMessage: "Manage Popular Locations",
    description: "Manage Popular Locations"
  },
  footerBlockLabel: {
    id: "app.footerBlockLabel",
    defaultMessage: "Footer Block",
    description: "Footer Block"
  },
  imageBannerLabel: {
    id: "app.imageBannerLabel",
    defaultMessage: "Image Banner",
    description: "Image Banner"
  },
  bannerCaptionLabel: {
    id: "app.bannerCaptionLabel",
    defaultMessage: "Banner Caption",
    description: "Banner Caption"
  },
  homePageSettings: {
    id: "app.homePageSettings",
    defaultMessage: "Home Page Settings",
    description: "Home Page Settings"
  },
  roleLabel: {
    id: "app.roleLabel",
    defaultMessage: "Role",
    description: "Role"
  },
  adminUserDesc: {
    id: "app.adminUserDesc",
    defaultMessage: "Provide new password only. Ignore this field to use the existing password for this user.",
    description: "Provide new password only. Ignore this field to use the existing password for this user."
  },
  selectroleLabel: {
    id: "app.selectroleLabel",
    defaultMessage: "Select Role",
    description: "Select Role"
  },
  roleNameLabel: {
    id: "app.roleNameLabel",
    defaultMessage: "Role Name",
    description: "Role Name"
  },
  privilagesLabel: {
    id: "app.privilagesLabel",
    defaultMessage: "Privileges",
    description: "Privileges"
  },
  adminTitleLabel: {
    id: "app.adminTitleLabel",
    defaultMessage: "Title",
    description: "Title"
  },
  invalidPageUrl: {
    id: "app.invalidPageUrl",
    defaultMessage: "Invalid Page URL",
    description: "Invalid Page URL"
  },
  loggedIn: {
    id: "app.loggedIn",
    defaultMessage: "You are already logged in!",
    description: "You are already Logged-in"
  },
  userLoggedIn: {
    id: "app.userLoggedIn",
    defaultMessage: "You are already logged in as User, please logout in the main site to continue!",
    description: "You are already Logged-in as user"
  },
  provideListId: {
    id: "app.provideListId",
    defaultMessage: "Provide list ID",
    description: "Provide list ID"
  },
  onlyNumericKey: {
    id: "app.onlyNumericKey",
    defaultMessage: "Only numeric values are allowed",
    description: "Only numeric values are allowed"
  },
  noRecordFound: {
    id: "app.noRecordFound",
    defaultMessage: "No matching records found.",
    description: "No matching records found."
  },
  ratingReviewLabel: {
    id: "app.ratingReviewLabel",
    defaultMessage: "Review Rating",
    description: "Review Rating"
  },
  deleteReviewLabel: {
    id: "app.deleteReviewLabel",
    defaultMessage: "Deleting Review",
    description: "Deleting Review"
  },
  exceedLimit255: {
    id: "app.exceedLimit255",
    defaultMessage: "Maximum allowed character is 255.",
    description: "exceedLimit"
  },
  idLabel: {
    id: "app.idLabel",
    defaultMessage: "ID",
    description: "ID"
  },
  emailBlankSpaceAdmin: {
    id: "app.emailBlankSpaceAdmin",
    defaultMessage: "Email should not be blank spaces",
    description: "email address error"
  },
  passwordInvalidAdmin: {
    id: "app.passwordInvalidAdmin",
    defaultMessage: "Password should be minimum 8 characters.",
    description: "Password minimum characters error"
  },
  passwordBlankSpaceAdmin: {
    id: "app.passwordBlankSpaceAdmin",
    defaultMessage: "Password should not be blank space.",
    description: "Password error"
  },
  sNoLabel: {
    id: "app.sNoLabel",
    defaultMessage: "S.No",
    description: "S.No"
  },
  deletingPageDetails: {
    id: "app.deletingPageDetails",
    defaultMessage: "Deleting Page Details",
    description: "Deleting Page Details"
  },
  changeAdminPasswordDesc: {
    id: "app.changeAdminPasswordDesc",
    defaultMessage: "Leave email address field blank if you don't want to change the email",
    description: "Leave email address field blank if you don't want to change the email"
  },
  passWordMismatch: {
    id: "app.passWordMismatch",
    defaultMessage: "Password is mismatching with Confirm password",
    description: "Password is mismatching with Confirm password"
  },
  passWordMinimum: {
    id: "app.passWordMinimum",
    defaultMessage: "Password must be minimum 8 characters",
    description: "Password must be minimum 8 characters"
  },
  symbolLabel: {
    id: "app.symbolLabel",
    defaultMessage: "Symbol",
    description: "Symbol"
  },
  baseCurrencyLabel: {
    id: "app.baseCurrencyLabel",
    defaultMessage: "Base Currency",
    description: "Base Currency"
  },
  setEnableDisable: {
    id: "app.setEnableDisable",
    defaultMessage: "Set Enable / Disable",
    description: "Set Enable / Disable"
  },
  setCurrencyLabel: {
    id: "app.setCurrencyLabel",
    defaultMessage: "Set Base Currency",
    description: "Set Base Currency"
  },
  allowedPaymentCurrency: {
    id: "app.allowedPaymentCurrency",
    defaultMessage: "Allowed Payment Currency",
    description: "Allowed Payment Currency"
  },
  hostEMailLabel: {
    id: "app.hostEMailLabel",
    defaultMessage: "Host Email",
    description: "Host Email"
  },
  RequestedFiles: {
    id: "app.RequestedFiles",
    defaultMessage: "Requested Files",
    description: "Requested Files"
  },
  actionLabel: {
    id: "app.actionLabel",
    defaultMessage: "Action",
    description: "Action"
  },
  createdDate: {
    id: "app.createdDate",
    defaultMessage: "Created Date",
    description: "Created Date"
  },
  stateLabel: {
    id: "app.stateLabel",
    defaultMessage: "State",
    description: "State"
  },
  recommendLabel: {
    id: "app.recommendLabel",
    defaultMessage: "Recommend",
    description: "Recommend"
  },
  setLabel: {
    id: "app.setLabel",
    defaultMessage: "Set",
    description: "Set"
  },
  publishedLabel: {
    id: "app.publishedLabel",
    defaultMessage: "Published",
    description: "Published"
  },
  deletingListingTitle: {
    id: "app.deletingListingTitle",
    defaultMessage: "Deleting Listing",
    description: "Deleting Listing"
  },
  settingsIDLabel: {
    id: "app.settingsIDLabel",
    defaultMessage: "Settings ID",
    description: "Settings ID"
  },
  operationLabel: {
    id: "app.operationLabel",
    defaultMessage: "Operation",
    description: "Operation"
  },
  payoutsLabel: {
    id: "app.payoutsLabel",
    defaultMessage: "Payouts",
    description: "Payouts"
  },
  dataMissing: {
    id: "app.dataMissing",
    defaultMessage: "List is missing",
    description: "List is missing"
  },
  hostEmailIdLabel: {
    id: "app.hostEmailIdLabel",
    defaultMessage: "Host Email ID",
    description: "Host Email ID"
  },
  guestEmailIdLabel: {
    id: "app.guestEmailIdLabel",
    defaultMessage: "Guest Email ID",
    description: "Guest Email ID"
  },
  messagesLabel: {
    id: "app.messagesLabel",
    defaultMessage: "Messages",
    description: "Messages"
  },
  deletePopularLocationLabel: {
    id: "app.deletePopularLocationLabel",
    defaultMessage: "Deleting Popular Location",
    description: "Deleting Popular Location"
  },
  reporterName: {
    id: "app.reporterName",
    defaultMessage: "Reporter Name",
    description: "Reporter Name"
  },
  reporterEmail: {
    id: "app.reporterEmail",
    defaultMessage: "Reporter Email",
    description: "Reporter Email"
  },
  userNameLabel: {
    id: "app.userNameLabel",
    defaultMessage: "User Name",
    description: "User Name"
  },
  userEmailLabel: {
    id: "app.userEmailLabel",
    defaultMessage: "User Email",
    description: "User Email"
  },
  reportType: {
    id: "app.reportType",
    defaultMessage: "Report Type",
    description: "Report Type"
  },
  refundToGuest: {
    id: "app.refundToGuest",
    defaultMessage: "Refund to Guest",
    description: "Refund to Guest"
  },
  subTotalLabel: {
    id: "app.subTotalLabel",
    defaultMessage: "Sub Total",
    description: "Sub Total"
  },
  payoutLabelAdmin: {
    id: "app.payoutLabelAdmin",
    defaultMessage: "Payout",
    description: "Payout"
  },
  pleaseChooseCurreny: {
    id: "app.pleaseChooseCurreny",
    defaultMessage: "Please choose a currency",
    description: "Please choose a currency"
  },
  provideFixedGuestFee: {
    id: "app.provideFixedGuestFee",
    defaultMessage: "Provide fixed amount or percentage for Guest Fee",
    description: "Provide fixed amount or percentage for Guest Fee"
  },
  provideFixedHostFee: {
    id: "app.provideFixedHostFee",
    defaultMessage: "Provide fixed amount or percentage for Host Fee",
    description: "Provide fixed amount or percentage for Host Fee"
  },
  currencyRequiredLabel: {
    id: "app.currencyRequiredLabel",
    defaultMessage: "Currency is required when you use fixed price",
    description: "Currency is required when you use fixed price"
  },
  choosePresentageValue: {
    id: "app.choosePresentageValue",
    defaultMessage: "Choose percentage value between 1 to 99",
    description: "Choose percentage value between 1 to 99"
  },
  reason: {
    id: "app.reason",
    defaultMessage: "Reason",
    description: "Reason"
  },
  allLabel: {
    id: "app.allLabel",
    defaultMessage: "All",
    description: "All"
  },
  profileID: {
    id: "app.profileID",
    defaultMessage: "Profile ID",
    description: "Profile ID"
  },
  selectLabel: {
    id: "app.selectLabel",
    defaultMessage: "Select",
    description: "Select"
  },
  banLabel: {
    id: "app.banLabel",
    defaultMessage: "Ban",
    description: "Ban"
  },
  unBanLabel: {
    id: "app.unBanLabel",
    defaultMessage: "UnBan",
    description: "UnBan"
  },
  deletingUser: {
    id: "app.deletingUser",
    defaultMessage: "Deleting User",
    description: "Deleting User"
  },
  usersLabel: {
    id: "app.usersLabel",
    defaultMessage: "Users",
    description: "Users"
  },
  pageName: {
    id: "app.pageName",
    defaultMessage: "Page Name",
    description: "Page Name"
  },
  reservationConfirmCode: {
    id: "app.reservationConfirmCode",
    defaultMessage: "Reservation Confirmation Code",
    description: "Reservation Confirmation Code"
  },
  CheckInDate: {
    id: "app.CheckInDate",
    defaultMessage: "Check-in Date",
    description: "Check-in Date"
  },
  CheckOutDate: {
    id: "app.CheckOutDate",
    defaultMessage: "Check-out Date",
    description: "Check-out Date"
  },
  SenderLabel: {
    id: "app.SenderLabel",
    defaultMessage: "Sender",
    description: "Sender"
  },
  reviewStatusLabel: {
    id: "app.reviewStatusLabel",
    defaultMessage: "Review Status",
    description: "Review Status"
  },
  reviewActionLabel: {
    id: "app.reviewActionLabel",
    defaultMessage: "Review Action",
    description: "Review Action"
  },
  writeSomethigs: {
    id: "app.writeSomethigs",
    defaultMessage: "write something.......",
    description: "write something......."
  },
  cookieStaticPolicy: {
    id: "app.cookieStaticPolicy",
    defaultMessage: "Cookie Policy",
    description: "Cookie Policy"
  },
  wishListSave: {
    id: "app.wishListSave",
    defaultMessage: "Save",
    description: "Save Button"
  },
  noPhoneNumberEntered: {
    id: "app.noPhoneNumberEntered",
    defaultMessage: "No phone number entered.",
    description: "No phone number entered."
  },
  welcomeAdminLabel: {
    id: "app.welcomeAdminLabel",
    defaultMessage: "Welcome Admin !!!",
    description: "Welcome Admin !!!"
  },
  sideMenu: {
    id: "app.sideMenu",
    defaultMessage: "Become Host Static Block",
    description: "Side Menu"
  },
  exceedLimit35: {
    id: "app.exceedLimit35",
    defaultMessage: "Maximum 35 characters",
    description: "Maximum 35 characters"
  },
  exceedLimit70: {
    id: "app.exceedLimit70",
    defaultMessage: "Maximum 70 characters",
    description: "Maximum 70 characters"
  },
  listDeleted: {
    id: "app.listDeleted",
    defaultMessage: "User deleted",
    description: "User deleted"
  },
  verifiedLabel: {
    id: "app.verifiedLabel",
    defaultMessage: "Verified",
    description: "verifiedBy"
  },
  linkCopiedLabel: {
    id: "app.linkCopiedLabel",
    defaultMessage: "Link Copied",
    description: "Link Copied"
  },
  copyLinkLabel: {
    id: "app.copyLinkLabel",
    defaultMessage: "Copy Link",
    description: "Copy Link"
  },
  todayLabel: {
    id: "app.todayLabel",
    defaultMessage: "Today",
    description: "todayLabel"
  },
  ibanNumber: {
    id: "app.ibanNumber",
    defaultMessage: "IBAN number",
    description: "ibanNumber"
  },
  confirmIbanNumber: {
    id: "app.confirmIbanNumber",
    defaultMessage: "Confirm IBAN number",
    description: "confirmIbanNumber"
  },
  ibanNumberInvalid: {
    id: "app.ibanNumberInvalid",
    defaultMessage: "Invalid IBAN number",
    description: "ibanNumberInvalid"
  },
  confirmIbanNumberInvalid: {
    id: "app.confirmIbanNumberInvalid",
    defaultMessage: "Invalid confirm IBAN number",
    description: "confirmIbanNumberInvalid"
  },
  confirmIbanNumberMismatch: {
    id: "app.confirmIbanNumberMismatch",
    defaultMessage: "IBAN number mismatch",
    description: "confirmIbanNumberMismatch"
  },
  stripeTokenInfo1: {
    id: "app.stripeTokenInfo1",
    defaultMessage: "By clicking, you agree to our terms and the ",
    description: "stripeTokenInfo1"
  },
  stripeTokenInfo2: {
    id: "app.stripeTokenInfo2",
    defaultMessage: "Stripe Connected Account Agreement",
    description: "stripeTokenInfo2"
  },
  PaginationOfContent: {
    id: "app.PaginationOfContent",
    defaultMessage: "of",
    description: "of"
  },
  adminDashboard: {
    id: "app.adminDashboard",
    defaultMessage: "Admin Dashboard",
    description: "of"
  },
  clickHeretoUploadLogo: {
    id: "app.clickHeretoUploadLogo",
    defaultMessage: "Click here to upload the logo",
    description: "clickHeretoUploadLogo"
  },
  userManagement: {
    id: "app.userManagement",
    defaultMessage: "User Management",
    description: "userManagement"
  },
  profileVerifiedView: {
    id: "app.profileVerifiedView",
    defaultMessage: "Profile Verified View",
    description: "profileVerifiedView"
  },
  listingsManagement: {
    id: "app.listingsManagement",
    defaultMessage: "Listings Management",
    description: "listingsManagement"
  },
  hostListingsManagement: {
    id: "app.hostListingsManagement",
    defaultMessage: "Host Listings Management",
    description: "listingsManagement"
  },
  readyTopay: {
    id: "app.readyTopay",
    defaultMessage: "Ready To Pay",
    description: "readyTopay"
  },
  usersReviews: {
    id: "app.usersReviews",
    defaultMessage: "Users Reviews",
    description: "usersReviews"
  },
  servicefeesSettings: {
    id: "app.servicefeesSettings",
    defaultMessage: "Service Fees Settings",
    description: "servicefeesSettings"
  },
  documentVerificationManagement: {
    id: "app.documentVerificationManagement",
    defaultMessage: "Document Verification Management",
    description: "Document Verification Management"
  },
  pdf: {
    id: "app.pdf",
    defaultMessage: "PDF",
    description: "pdf"
  },
  reportUserMessage: {
    id: "app.reportUserMessage",
    defaultMessage: "Report User",
    description: "reportUser"
  },
  payoutManagement: {
    id: "app.payoutManagement",
    defaultMessage: "Payout Management",
    description: "payoutManagement"
  },
  currencyManagement: {
    id: "app.currencyManagement",
    defaultMessage: "Currency Management",
    description: "Currency Management"
  },
  active: {
    id: "app.active",
    defaultMessage: "Active",
    description: "Active"
  },
  changeAdminEmailPassword: {
    id: "app.changeAdminEmailPassword",
    defaultMessage: "Change Admin Email/Password",
    description: "changeAdminEmailPassword"
  },
  bannerSettings: {
    id: "app.bannerSettings",
    defaultMessage: "Banner Settings",
    description: "bannerSettings"
  },
  homepageBannererSettings: {
    id: "app.homepageBannererSettings",
    defaultMessage: "Home page Banner",
    description: "banHome page BannernerSettings"
  },
  clickHeretoUploadImage: {
    id: "app.clickHeretoUploadImage",
    defaultMessage: "Click Here to Upload Image",
    description: "Click Here to Upload Image"
  },
  whyBecomeHostBlock1: {
    id: "app.whyBecomeHostBlock1",
    defaultMessage: "Why Become Host Block 1",
    description: "Why Become Host Block 1"
  },
  whyBecomeHostBlock2: {
    id: "app.whyBecomeHostBlock2",
    defaultMessage: "Why Become Host Block 2",
    description: "whyBecomeHostBlock2"
  },
  whyBecomeHostBlock3: {
    id: "app.whyBecomeHostBlock3",
    defaultMessage: "Why Become Host Block 3",
    description: "whyBecomeHostBlock3"
  },
  whyBecomeHostBlock4: {
    id: "app.whyBecomeHostBlock4",
    defaultMessage: "Why Become Host Block 4",
    description: "whyBecomeHostBlock4"
  },
  whyBecomeHostBlock5: {
    id: "app.whyBecomeHostBlock5",
    defaultMessage: "Why Become Host Block 5",
    description: "whyBecomeHostBlock5"
  },
  whyBecomeHostBlock6: {
    id: "app.whyBecomeHostBlock6",
    defaultMessage: "Why Become Host Block 6",
    description: "whyBecomeHostBlock6"
  },
  whyBecomeHostBlock7: {
    id: "app.whyBecomeHostBlock7",
    defaultMessage: "Why Become Host Block 7",
    description: "whyBecomeHostBlock7"
  },
  contentManagementSystem: {
    id: "app.contentManagementSystem",
    defaultMessage: "Content Management System",
    description: "contentManagementSystem"
  },
  editPageDetails: {
    id: "app.editPageDetails",
    defaultMessage: "Edit Page Details",
    description: "editPageDetails"
  },
  staticPageManagement: {
    id: "app.staticPageManagement",
    defaultMessage: "Static Page Management",
    description: "staticPageManagement"
  },
  adminCategory: {
    id: "app.adminCategory",
    defaultMessage: "Category",
    description: "Category"
  },
  fieldCategory: {
    id: "app.fieldCategory",
    defaultMessage: "Field",
    description: "Category"
  },
  field: {
    id: "app.field",
    defaultMessage: "Field",
    description: "Field"
  },
  failed: {
    id: "app.failed",
    defaultMessage: "Failed",
    description: "Failed Payout status"
  },
  managementReviews: {
    id: "app.managementReviews",
    defaultMessage: "Management Reviews",
    description: "managementReviews"
  },
  payoutDetails: {
    id: "app.payoutDetails",
    defaultMessage: "Payout Details",
    description: "payoutDetails"
  },
  UploadImage: {
    id: "app.UploadImage",
    defaultMessage: "Upload Image",
    description: "Upload Image"
  },
  editPopularLocation: {
    id: "app.editPopularLocation",
    defaultMessage: "Edit Popular Location",
    description: "Edit Popular Location"
  },
  reservationDetails: {
    id: "app.reservationDetails",
    defaultMessage: "Reservation Details",
    description: "Reservation Details Header"
  },
  urlRequired: {
    id: "app.urlRequired",
    defaultMessage: "URL is required",
    description: "Reservation Details Header"
  },
  calendarAddress: {
    id: "app.calendarAddress",
    defaultMessage: "Paste Calendar Address (URL) here",
    description: "calendarAddress"
  },
  calendarCustomName: {
    id: "app.calendarCustomName",
    defaultMessage: "Custom name for this calendar",
    description: "calendarCustomName"
  },
  maxPriceGreater: {
    id: "app.maxPriceGreater",
    defaultMessage: "Maximum Price must be greater than Minimum Price",
    description: "maxPriceGreater"
  },
  payoutSortNumber: {
    id: "app.payoutSortNumber",
    defaultMessage: "Sort Number",
    description: "Sort Number for United Kingdom(GB)"
  },
  payoutInvalidSortNumber: {
    id: "app.payoutInvalidSortNumber",
    defaultMessage: "Invalid sort number",
    description: "Invalid sort number"
  },
  stripePublishableKey: {
    id: "app.stripePublishableKey",
    defaultMessage: "Stripe Publishable Key",
    description: "Stripe Publishable Key"
  },
  submitForVerification: {
    id: "app.submitForVerification",
    defaultMessage: "Submit for verification",
    description: "Submit Verification button"
  },
  submitForAppeal: {
    id: "app.submitForAppeal",
    defaultMessage: "Submit for appeal",
    description: "Submit Appeal button"
  },
  waitingForAdmin: {
    id: "app.waitingForAdmin",
    defaultMessage: "Waiting for the admin approval.",
    description: "Waiting For Admin"
  },
  require: {
    id: "app.require",
    defaultMessage: "Required",
    description: "Required"
  },
  optional: {
    id: "app.optional",
    defaultMessage: "Optional",
    description: "Optional"
  },
  listingApproval: {
    id: "app.listingApproval",
    defaultMessage: "Listing Request",
    description: "Listing Request"
  },
  readyForApproval: {
    id: "app.readyForApproval",
    defaultMessage: "Your listing is submitted for verification",
    description: "Ready For Approval"
  },
  readyForVerification: {
    id: "app.readyForVerification",
    defaultMessage: "Your Listing is ready for verification",
    description: "Ready For Verification"
  },
  submittedOn: {
    id: "app.submittedOn",
    defaultMessage: "Submitted On",
    description: "submittedOn"
  },
  action: {
    id: "app.action",
    defaultMessage: "Action",
    description: "Action"
  },
  favIconlogoLabel: {
    id: "app.favIconlogoLabel",
    defaultMessage: "Fav Icon",
    description: "Fav Icon"
  },
  approved: {
    id: "app.approved",
    defaultMessage: "Approved",
    description: "approved"
  },
  declined: {
    id: "app.declined",
    defaultMessage: "Declined",
    description: "declined"
  },
  declinedReason: {
    id: "app.declinedReason",
    defaultMessage: "Declined reason",
    description: "declinedReason"
  },
  comment: {
    id: "app.comment",
    defaultMessage: "Comment",
    description: "Comment"
  },
  pngOnlyLabel: {
    id: "app.pngOnlyLabel",
    defaultMessage: "* png images only",
    description: "* png images only"
  },
  bookingConfirmed: {
    id: "app.bookingConfirmed",
    defaultMessage: "Booking Confirmed",
    description: "Booking Confirmed"
  },
  declineAdmin: {
    id: "app.declineAdmin",
    defaultMessage: "This Listing is declined",
    description: "declineAdmin"
  },
  weeklyPriceDiscount: {
    id: "app.weeklyPriceDiscount",
    defaultMessage: "% weekly price discount",
    description: "weeklyPriceDiscount"
  },
  monthlyPriceDiscount: {
    id: "app.monthlyPriceDiscount",
    defaultMessage: "% monthly price discount",
    description: "monthlyPriceDiscount"
  },
  history: {
    id: "app.history",
    defaultMessage: "History",
    description: "history"
  },
  listingRejected: {
    id: "app.listingRejected",
    defaultMessage: "Listing Rejected",
    description: "listingRejected"
  },
  requests: {
    id: "app.requests",
    defaultMessage: "Requests",
    description: "Listing Requests"
  },
  clickHeretoUploadFavIcon: {
    id: "app.clickHeretoUploadFavIcon",
    defaultMessage: "Click here to upload the favicon",
    description: "Click here to upload the favicon"
  },
  personalHome: {
    id: "app.personalHome",
    defaultMessage: "Personal home",
    description: "Personal home"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUGF5b3V0fmFkZFBheW91dEZhaWx1cmV+YWRtaW5+YmVjb21lSG9zdH5ibG9nfmJvb2t+Y2FuY2VsfmNhbmNlbGxhdGlvblBvbGljaWVzfmNoYW5nZVBhc3N3b3JkfmNvbn5kZjU4ZTVjOS5jaHVuay5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2xvY2FsZS9tZXNzYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVNZXNzYWdlcyB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgaG9tZToge1xuICAgIGlkOiBcImFwcC5ob21lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBiZWNvbWVBSG9zdDoge1xuICAgIGlkOiBcImFwcC5iZWNvbWVBSG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBhIGhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgYmVjb21lQUhvc3QyOiB7XG4gICAgaWQ6IFwiYXBwLmJlY29tZUFIb3N0MlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBhIGhvc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGhvd0l0V29yazoge1xuICAgIGlkOiBcImFwcC5ob3dJdFdvcmtcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3cgSXQgV29ya1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBoZWxwOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZWxwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGxvZ2luOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ2luXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9naW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgc2lnbnVwOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ251cFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpZ24gdXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgaG9zdDoge1xuICAgIGlkOiBcImFwcC5ob3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBob3N0czoge1xuICAgIGlkOiBcImFwcC5ob3N0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIG1hbmFnZUhvc3RMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZUhvc3RMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIGhvc3QgTGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgbWFuYWdlTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5tYW5hZ2VMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIExpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGxpc3RZb3VyU3BhY2U6IHtcbiAgICBpZDogXCJhcHAubGlzdFlvdXJTcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3QgWW91ciBTcGFjZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICB5b3VyUmVzZXJ2YXRpb25zOiB7XG4gICAgaWQ6IFwiYXBwLnlvdXJSZXNlcnZhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIFJlc2VydmF0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICB0cmFuc2FjdGlvbkhpc3Rvcnk6IHtcbiAgICBpZDogXCJhcHAudHJhbnNhY3Rpb25IaXN0b3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gSGlzdG9yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBwcm9maWxlOiB7XG4gICAgaWQ6IFwiYXBwLnByb2ZpbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcm9maWxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGFjY291bnRTZXR0aW5nczoge1xuICAgIGlkOiBcImFwcC5hY2NvdW50U2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvdW50IFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIHRyaXBzOiB7XG4gICAgaWQ6IFwiYXBwLnRyaXBzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJpcHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXNzYWdlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBkYXNoYm9hcmQ6IHtcbiAgICBpZDogXCJhcHAuZGFzaGJvYXJkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGFzaGJvYXJkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGVkaXRQcm9maWxlOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRQcm9maWxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdCBQcm9maWxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGxvZ291dDoge1xuICAgIGlkOiBcImFwcC5sb2dvdXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2dvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgYWJvdXQ6IHtcbiAgICBpZDogXCJhcHAuYWJvdXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBYm91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBjYXJlZXJzOiB7XG4gICAgaWQ6IFwiYXBwLmNhcmVlcnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYXJlZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIHByZXNzOiB7XG4gICAgaWQ6IFwiYXBwLnByZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgcG9saWNpZXM6IHtcbiAgICBpZDogXCJhcHAucG9saWNpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQb2xpY2llc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBkaXNjb3Zlcjoge1xuICAgIGlkOiBcImFwcC5kaXNjb3ZlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRpc2NvdmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIHRydXN0U2FmZXR5OiB7XG4gICAgaWQ6IFwiYXBwLnRydXN0U2FmZXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJ1c3QgJiBTYWZldHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgdHJhdmVsQ3JlZGl0OiB7XG4gICAgaWQ6IFwiYXBwLnRyYXZlbENyZWRpdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyYXZlbCBDcmVkaXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgY2l0aXplbjoge1xuICAgIGlkOiBcImFwcC5jaXRpemVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2l0aXplblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBidXNpbmVzc1RyYXZlbDoge1xuICAgIGlkOiBcImFwcC5idXNpbmVzc1RyYXZlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJ1c2luZXNzIFRyYXZlbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBndWlkZWJvb2tzOiB7XG4gICAgaWQ6IFwiYXBwLmd1aWRlYm9va3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWlkZWJvb2tzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGhvc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgd2h5SG9zdDoge1xuICAgIGlkOiBcImFwcC53aHlIb3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgaG9zcGl0YWxpdHk6IHtcbiAgICBpZDogXCJhcHAuaG9zcGl0YWxpdHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3NwaXRhbGl0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICByZXNwb25zaWJsZUhvc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAucmVzcG9uc2libGVIb3N0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzcG9uc2libGUgSG9zdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICB0ZXJtc1ByaXZhY3k6IHtcbiAgICBpZDogXCJhcHAudGVybXNQcml2YWN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGVybXMgJiBQcml2YWN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGFwcHNBdmFpbGFibGVPbjoge1xuICAgIGlkOiBcImFwcC5hcHBzQXZhaWxhYmxlT25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBcHBzIGF2YWlsYWJsZSBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcHMgYXZhaWxhYmxlIG9uXCIsXG4gIH0sXG4gIG9yOiB7XG4gICAgaWQ6IFwiYXBwLm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwib3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJvclwiLFxuICB9LFxuICBzaWduVXA6IHtcbiAgICBpZDogXCJhcHAuc2lnblVwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2lnbiBVcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ24gVXAgQnV0dG9uXCIsXG4gIH0sXG4gIG5vQWNjb3VudDoge1xuICAgIGlkOiBcImFwcC5ub0FjY291bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEb27igJl0IGhhdmUgYW4gYWNjb3VudD9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEb27igJl0IGhhdmUgYW4gYWNjb3VudD9cIixcbiAgfSxcbiAgZmlyc3ROYW1lSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5maXJzdE5hbWVJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmlyc3QgTmFtZSBJbnZhbGlkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlyc3QgTmFtZSBpcyBJbnZhbGlkXCIsXG4gIH0sXG4gIGxhc3ROYW1lSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5sYXN0TmFtZUludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMYXN0IE5hbWUgSW52YWxpZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgTmFtZSBpcyBJbnZhbGlkXCIsXG4gIH0sXG4gIGVtYWlsTm90RXhpc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmVtYWlsTm90RXhpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk5vIGFjY291bnQgZXhpc3RzIGZvciB0aGlzIGVtYWlsLiBNYWtlIHN1cmUgaXQncyB0eXBlZCBpbiBjb3JyZWN0bHksIG9yIOKAnHNpZ24gdXDigJ0gaW5zdGVhZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVtYWlsIEFkZHJlc3MgaXMgbm90IGV4aXN0XCIsXG4gIH0sXG4gIGxvZ29IZWlnaHQ6IHtcbiAgICBpZDogXCJhcHAubG9nb0hlaWdodFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvZ28gaGVpZ2h0IG11c3QgYmUgbnVtZXJpYyB2YWx1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ28gaGVpZ2h0IG11c3QgYmUgbnVtZXJpYyB2YWx1ZVwiLFxuICB9LFxuICBsb2dvV2lkdGg6IHtcbiAgICBpZDogXCJhcHAubG9nb1dpZHRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nbyB3aWR0aCBtdXN0IGJlIG51bWVyaWMgdmFsdWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dvIHdpZHRoIG11c3QgYmUgbnVtZXJpYyB2YWx1ZVwiLFxuICB9LFxuICB1cmxJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLnVybEludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIFVSTFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVSTCBpbnZhbGlkXCIsXG4gIH0sXG4gIG1ldGFEZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5tZXRhRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmlwdGlvbiBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIixcbiAgfSxcbiAgbWV0YUtleXdvcmQ6IHtcbiAgICBpZDogXCJhcHAubWV0YUtleXdvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJLZXl3b3JkIG11c3QgYmUgMjU1IGNoYXJhY3RlcnMgb3IgbGVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIktleXdvcmQgbXVzdCBiZSAyNTUgY2hhcmFjdGVycyBvciBsZXNzXCIsXG4gIH0sXG4gIG1ldGFUaXRsZToge1xuICAgIGlkOiBcImFwcC5tZXRhVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRhIFRpdGxlIG11c3QgYmUgMjU1IGNoYXJhY3RlcnMgb3IgbGVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1ldGEgVGl0bGUgVCBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIixcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXNzd29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgUGFzc3dvcmQgdG8gTG9naW5cIixcbiAgfSxcbiAgcGFzc3dvcmRSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5wYXNzd29yZFJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBwYXNzd29yZEludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRJblZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuIFBsZWFzZSB0cnkgYWdhaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHBhc3N3b3JkV3Jvbmc6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRXcm9uZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldyb25nIFBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV3JvbmcgUGFzc3dvcmRcIixcbiAgfSxcbiAgdXNlckJhbm5lZDoge1xuICAgIGlkOiBcImFwcC51c2VyQmFubmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGFyZSBiYW5uZWQgYnkgYWRtaW4uIFBsZWFzZSBjb250YWN0IGFkbWluIGZvciBVbmJhblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgQmFubmVkXCIsXG4gIH0sXG4gIHVzZXJCYW5uZWRUaXRsZToge1xuICAgIGlkOiBcImFwcC51c2VyQmFubmVkVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXZSdyZSBTb3JyeSFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgdXNlckJhbm5lZFN1YlRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnVzZXJCYW5uZWRTdWJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCIgSXQgbG9va3MgbGlrZSB5b3VyIGFjY291bnQgaXMgYmxvY2tlZCBmb3Igc29tZSByZWFzb24uIElmIHlvdSBuZWVkIGZ1cnRoZXIgaW5mb3JtYXRpb24sIHBsZWFzZSBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgY2FudExvZ2luOiB7XG4gICAgaWQ6IFwiYXBwLmNhbnRMb2dpblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbuKAmXQgTG9naW4/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gc2UgcHVlZGUgaW5pY2lhciBzZXNpw7NuP1wiLFxuICB9LFxuICB0ZXJtczE6IHtcbiAgICBpZDogXCJhcHAudGVybXMxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQnkgc2lnbmluZyB1cCwgSSBhZ3JlZSB0byBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUZXJtcyBjb250ZW50IHBhcnQxXCIsXG4gIH0sXG4gIHRlcm1zMjoge1xuICAgIGlkOiBcImFwcC50ZXJtczJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGVybXMgb2YgU2VydmljZSwgTm9uZGlzY3JpbWluYXRpb24gUG9saWN5LCBQYXltZW50cyBUZXJtcyBvZiBTZXJ2aWNlLCBQcml2YWN5IFBvbGljeSwgR3Vlc3QgUmVmdW5kIFBvbGljeSwgYW5kIEhvc3QgR3VhcmFudGVlIFRlcm1zLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRlcm1zIGNvbnRlbnQgcGFydDFcIixcbiAgfSxcbiAgc2lnbnVwV2l0aEVtYWlsOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ251cFdpdGhFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpZ251cCB3aXRoIEVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9naW4gTW9kYWwgdGl0bGVcIixcbiAgfSxcbiAgZmFjZWJvb2s6IHtcbiAgICBpZDogXCJhcHAuZmFjZWJvb2tcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGYWNlYm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNpZ24gdXAgd2l0aCBmYWNlYm9va1wiLFxuICB9LFxuICB0d2l0dGVyOiB7XG4gICAgaWQ6IFwiYXBwLnR3aXR0ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUd2l0dGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2lnbiB1cCB3aXRoIHR3aXR0ZXJcIixcbiAgfSxcbiAgZ29vZ2xlOiB7XG4gICAgaWQ6IFwiYXBwLmdvb2dsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvb2dsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ251cCB3aXRoIEdvb2dsZVwiLFxuICB9LFxuICBzaWdudXBXaXRoOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ251cFdpdGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaWduIHVwIHdpdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaWdudXAgd2l0aFwiLFxuICB9LFxuICBhbHJlYWR5SGF2ZUFjY291bnQ6IHtcbiAgICBpZDogXCJhcHAuYWxyZWFkeUhhdmVBY2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiYWxyZWFkeUhhdmVBY2NvdW50XCIsXG4gIH0sXG4gIHRlcm1zT2ZTZXJ2aWNlOiB7XG4gICAgaWQ6IFwiYXBwLnRlcm1zT2ZTZXJ2aWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGVybXMgb2YgU2VydmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRlcm1zIG9mIFNlcnZpY2VcIixcbiAgfSxcbiAgbm9uRGlzY3JpbWluYXRpb25Qb2xpY3k6IHtcbiAgICBpZDogXCJhcHAubm9uRGlzY3JpbWluYXRpb25Qb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb25EaXNjcmltaW5hdGlvbiBQb2xpY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb25EaXNjcmltaW5hdGlvbiBQb2xpY3lcIixcbiAgfSxcbiAgZGF5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZGF5UmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXkgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXkgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgbW9udGhSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5tb250aFJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9udGggaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb250aCBpcyByZXF1aXJlZFwiLFxuICB9LFxuICB5ZWFyUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAueWVhclJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWWVhciBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlllYXIgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgYmlydGhEYXk6IHtcbiAgICBpZDogXCJhcHAuYmlydGhEYXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCaXJ0aGRheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpcnRoZGF5XCIsXG4gIH0sXG4gIHBheW1lbnRUZXJtczoge1xuICAgIGlkOiBcImFwcC5wYXltZW50VGVybXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50cyBUZXJtcyBvZiBTZXJ2aWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudHMgVGVybXMgb2YgU2VydmljZVwiLFxuICB9LFxuICBwcml2YWN5UG9saWN5OiB7XG4gICAgaWQ6IFwiYXBwLnByaXZhY3lQb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcml2YWN5IFBvbGljeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByaXZhY3kgUG9saWN5XCIsXG4gIH0sXG4gIGd1ZXN0UmVmdW5kUG9saWN5OiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0UmVmdW5kUG9saWN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgUmVmdW5kIFBvbGljeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0IFJlZnVuZCBQb2xpY3lcIixcbiAgfSxcbiAgYW5kOiB7XG4gICAgaWQ6IFwiYXBwLmFuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImFuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuZFwiLFxuICB9LFxuICBob3N0R3VhcmFudGVlVGVybXM6IHtcbiAgICBpZDogXCJhcHAuaG9zdEd1YXJhbnRlZVRlcm1zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBHdWFyYW50ZWUgVGVybXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEd1YXJhbnRlZSBUZXJtc1wiLFxuICB9LFxuICBmb3Jnb3RQYXNzd29yZDoge1xuICAgIGlkOiBcImFwcC5mb3Jnb3RQYXNzd29yZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICB9LFxuICBmb3Jnb3RQYXNzd29yZEluZm86IHtcbiAgICBpZDogXCJhcHAuZm9yZ290UGFzc3dvcmRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIGFzc29jaWF0ZWQgd2l0aCB5b3VyIGFjY291bnQsIGFuZCB3ZeKAmWxsIGVtYWlsIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGb3Jnb3QgcGFzc3dvcmQgaW5mb1wiLFxuICB9LFxuICBiYWNrVG9Mb2dpbjoge1xuICAgIGlkOiBcImFwcC5iYWNrVG9Mb2dpblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhY2sgdG8gbG9naW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYWNrIHRvIGxvZ2luXCIsXG4gIH0sXG4gIHNlbmRMaW5rOiB7XG4gICAgaWQ6IFwiYXBwLnNlbmRMaW5rXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VuZCBMaW5rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZCBMaW5rXCIsXG4gIH0sXG4gIGluYm94OiB7XG4gICAgaWQ6IFwiYXBwLmluYm94XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5ib3hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmJveFwiLFxuICB9LFxuICB5b3VyTGlzdGluZ3M6IHtcbiAgICBpZDogXCJhcHAueW91ckxpc3RpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgTGlzdGluZ3NcIixcbiAgfSxcbiAgeW91clRyaXBzOiB7XG4gICAgaWQ6IFwiYXBwLnlvdXJUcmlwc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgVHJpcHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIFRyaXBzXCIsXG4gIH0sXG4gIGFjY291bnQ6IHtcbiAgICBpZDogXCJhcHAuYWNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjY291bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvdW50XCIsXG4gIH0sXG4gIGFkZExpc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAuYWRkTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkZCBOZXcgTGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCIgQWRkIE5ldyBMaXN0aW5ncyBCdXR0b25cIixcbiAgfSxcbiAgcHJvZmlsZVBob3RvOiB7XG4gICAgaWQ6IFwiYXBwLnByb2ZpbGVQaG90b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgUGhvdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9maWxlIFBob3RvXCIsXG4gIH0sXG4gIHRydXN0QW5kVmVyaWZpY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnRydXN0QW5kVmVyaWZpY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJ1c3QgYW5kIFZlcmlmaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRydXN0IGFuZCBWZXJpZmljYXRpb25cIixcbiAgfSxcbiAgcmV2aWV3czoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld3NcIixcbiAgfSxcbiAgdmlld1Byb2ZpbGU6IHtcbiAgICBpZDogXCJhcHAudmlld1Byb2ZpbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWaWV3IFByb2ZpbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IFByb2ZpbGVcIixcbiAgfSxcbiAgcGF5b3V0UHJlZmVyZW5jZXM6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0UHJlZmVyZW5jZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXQgUHJlZmVyZW5jZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgUHJlZmVyZW5jZXNcIixcbiAgfSxcbiAgc2VjdXJpdHk6IHtcbiAgICBpZDogXCJhcHAuc2VjdXJpdHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZWN1cml0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlY3VyaXR5XCIsXG4gIH0sXG4gIHdoZXJlOiB7XG4gICAgaWQ6IFwiYXBwLndoZXJlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hlcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGVyZVwiLFxuICB9LFxuICB3aGVuOiB7XG4gICAgaWQ6IFwiYXBwLndoZW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hlblwiLFxuICB9LFxuICBndWVzdDoge1xuICAgIGlkOiBcImFwcC5ndWVzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3RzXCIsXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGlkOiBcImFwcC5zZWFyY2hcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZWFyY2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2hcIixcbiAgfSxcbiAgaG9tZVdoZXJlOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVXaGVyZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc3RpbmF0aW9uLCBjaXR5LCBhZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzdGluYXRpb24sIGNpdHksIGFkZHJlc3NcIixcbiAgfSxcbiAgY2hlY2tJbjoge1xuICAgIGlkOiBcImFwcC5jaGVja0luXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hlY2sgSW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGVjayBJblwiLFxuICB9LFxuICBjaGVja091dDoge1xuICAgIGlkOiBcImFwcC5jaGVja091dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoZWNrIE91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrIE91dFwiLFxuICB9LFxuICByZWNvbW1lbmRlZDoge1xuICAgIGlkOiBcImFwcC5yZWNvbW1lbmRlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjb21tZW5kZWQgSG9tZSBwYWdlIFNsaWRlciB0aXRsZVwiLFxuICB9LFxuICBtb3N0Vmlld2VkOiB7XG4gICAgaWQ6IFwiYXBwLm1vc3RWaWV3ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb3N0IFZpZXdlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vc3QgVmlld2VkIEhvbWUgcGFnZSBTbGlkZXIgdGl0bGVcIixcbiAgfSxcbiAgcG9wdWxhckxvY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnBvcHVsYXJMb2NhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBvcHVsYXIgTG9jYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQb3B1bGFyIExvY2F0aW9ucyBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIC8vIGNhdGVnb3J5IG1lc3NhZ2UgZGVmaWVuZFxuICBjYXRlZ29yeUlkOiB7XG4gICAgaWQ6IFwiYXBwLmNhdGVnb3J5SWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklEXCIsXG4gIH0sXG4gIGNhdGVnb3J5TmFtZToge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYXRlZ29yeSBuYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2F0ZWdvcnkgbmFtZVwiLFxuICB9LFxuICBjYXRlZ29yeVN0YXR1czoge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeVN0YXR1c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXR1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXR1c1wiLFxuICB9LFxuICBjYXRlZ29yeU9wZXJhdGlvbjoge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeU9wZXJhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk9wZXJhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk9wZXJhdGlvblwiLFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhdGVnb3J5IFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeSBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIGZpZWxkTmFtZToge1xuICAgIGlkOiBcImFwcC5maWVsZE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTmFtZVwiLFxuICB9LFxuICBmaWVsZFR5cGU6IHtcbiAgICBpZDogXCJhcHAuZmllbGRUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlR5cGVcIixcbiAgfSxcbiAgZmllbGRUaXRsZToge1xuICAgIGlkOiBcImFwcC5maWVsZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuXG4gIGVkaXRGaWVsZDoge1xuICAgIGlkOiBcImFwcC5lZGl0RmllbGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IEZpZWxkc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVkaXRcIixcbiAgfSxcblxuICBmaWVsZFBhZ2VJZDoge1xuICAgIGlkOiBcImFwcC5maWVsZFBhZ2VJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgSURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIElEXCIsXG4gIH0sXG4gIGZpZWxkRW5hYmxlZDoge1xuICAgIGlkOiBcImFwcC5maWVsZEVuYWJsZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbmFibGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW5hYmxlZFwiLFxuICB9LFxuICBiYW5uZXI6IHtcbiAgICBpZDogXCJhcHAuYmFubmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYmFubmVyIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeSBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIGNhdGVnb3J5RToge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeUVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvY2F0aW9uXCIsXG4gIH0sXG4gIGFkZENhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmFkZENhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIENhdGVnb3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIENhdGVnb3J5XCIsXG4gIH0sXG4gIGFkZEJhbm5lcjoge1xuICAgIGlkOiBcImFwcC5hZGRCYW5uZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgQmFubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIEJhbm5lclwiLFxuICB9LFxuICBjYXRlZ29yeVR5cGVJbnB1dFRleHQ6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlUeXBlSW5wdXRUZXh0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBjYXRlZ29yeVN1Yjoge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeVN1YlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBUaXRsZVwiLFxuICB9LFxuICBjYXRlZ29yeVR5cGU6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2F0ZWdvcnkgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhdGVnb3J5IFR5cGVcIixcbiAgfSxcblxuICBlZGl0QmFubmVyOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRCYW5uZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IEJhbm5lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG5cbiAgLy8gY2F0ZWdvcnlcbiAgZWRpdENhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXQgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBlZGl0U3ViQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuZWRpdFN1YkNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdCBTdWIgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFZGl0IFN1YiBDYXRlZ29yeVwiLFxuICB9LFxuICBjYXRlZ29yeUFkbWluVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlBZG1pblRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBwYWdlRmllbGRUaXRsZToge1xuICAgIGlkOiBcImFwcC5wYWdlRmllbGRUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGl0bGVcIixcbiAgfSxcbiAgcGFnZUZpZWxkU3RlcDoge1xuICAgIGlkOiBcImFwcC5wYWdlRmllbGRTdGVwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RlcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXBcIixcbiAgfSxcbiAgcGFnZUZpZWxkUGFnZUlkOiB7XG4gICAgaWQ6IFwiYXBwLnBhZ2VGaWVsZFBhZ2VJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgSWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIElkXCIsXG4gIH0sXG4gIGFkbWluUGFnZUZpZWxkUGFnZUlkOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluUGFnZUZpZWxkUGFnZUlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFnZSBJZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhZ2UgSWRcIixcbiAgfSxcblxuICBjYXRlZ29yeUFkbWluRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlBZG1pbkRlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBjYXRlZ29yeUFkbWluQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlBZG1pbkNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeVwiLFxuICB9LFxuICBlZGl0UGFnZUZpZWxkOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRQYWdlRmllbGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IFBhZ2UgRmllbGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFZGl0IFBhZ2UgRmllbGRcIixcbiAgfSxcbiAgLy8gc3ViIGNhdGVnb3J5IG1lc3NhZ2UgZGVmaWVuZFxuICBzdWJDYXRlZ29yeUlkOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkNhdGVnb3J5SWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklEXCIsXG4gIH0sXG4gIHN1YkNhdGVnb3J5TmFtZToge1xuICAgIGlkOiBcImFwcC5zdWJDYXRlZ29yeU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdWIgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeSBuYW1lXCIsXG4gIH0sXG4gIHN1YkNhdGVnb3J5U3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkNhdGVnb3J5U3RhdHVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RhdHVzXCIsXG4gIH0sXG4gIHN1YkNhdGVnb3J5T3BlcmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkNhdGVnb3J5T3BlcmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3BlcmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3BlcmF0aW9uXCIsXG4gIH0sXG4gIHByaW1hcnlDYXRlZ29yeToge1xuICAgIGlkOiBcImFwcC5wcmltYXJ5Q2F0ZWdvcnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmltYXJ5IENhdGVnb3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3ViIENhdGVnb3J5IEhvbWUgcGFnZSBTbGlkZXIgdGl0bGVcIixcbiAgfSxcbiAgc3ViQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuc3ViQ2F0ZWdvcnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdWIgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdWIgQ2F0ZWdvcnkgSG9tZSBwYWdlIFNsaWRlciB0aXRsZVwiLFxuICB9LFxuICBzdWJDYXRlZ29yeXM6IHtcbiAgICBpZDogXCJhcHAuc3ViQ2F0ZWdvcnlzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3ViIENhdGVnb3J5IFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdWIgQ2F0ZWdvcnkgSG9tZSBwYWdlIFNsaWRlciB0aXRsZVwiLFxuICB9LFxuICBhZGROZXc6IHtcbiAgICBpZDogXCJhcHAuYWRkTmV3XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIE5ld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImFkZCBuZXcgSG9tZSBwYWdlIFNsaWRlciB0aXRsZVwiLFxuICB9LFxuICBzdWJUaXRsZUFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLnN1YlRpdGxlQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIHN1YkFkbWluRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuc3ViQWRtaW5EZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgc3ViQWRtaW5BZGRyZXNzOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkFkbWluQWRkcmVzc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGRyZXNzXCIsXG4gIH0sXG4gIHN1YkFkbWluU3ViQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuc3ViQWRtaW5TdWJDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBDYXRlZ29yeVwiLFxuICB9LFxuICBzdWJBZG1pbkd1ZXN0czoge1xuICAgIGlkOiBcImFwcC5zdWJBZG1pbkd1ZXN0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0c1wiLFxuICB9LFxuICBzdWJBZG1pbkJlZHJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkFkbWluQmVkcm9vbXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWRyb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZHJvb21zXCIsXG4gIH0sXG4gIHN1YkFkbWluQmF0aHM6IHtcbiAgICBpZDogXCJhcHAuc3ViQWRtaW5CYXRoc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhdGhzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmF0aHNcIixcbiAgfSxcbiAgc3ViQWRtaW5CZWRzOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkFkbWluQmVkc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCZWRzXCIsXG4gIH0sXG4gIC8vSG9tZSBvZmZlclxuXG4gIGFkZE9mZmVyOiB7XG4gICAgaWQ6IFwiYXBwLmFkZE9mZmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIE9mZmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIE9mZmVyXCIsXG4gIH0sXG5cbiAgbG9jYXRpb246IHtcbiAgICBpZDogXCJhcHAubG9jYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2NhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvY2F0aW9uXCIsXG4gIH0sXG5cbiAgZGF0ZXM6IHtcbiAgICBpZDogXCJhcHAuZGF0ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhdGVzXCIsXG4gIH0sXG4gIHJvb21UeXBlOiB7XG4gICAgaWQ6IFwiYXBwLnJvb21UeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUm9vbSBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHlwZSBvZiBSb29tXCIsXG4gIH0sXG4gIHByaWNlUmFuZ2U6IHtcbiAgICBpZDogXCJhcHAucHJpY2VSYW5nZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlIFJhbmdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpY2UgUmFuZ2VcIixcbiAgfSxcbiAgaW5zdGFudEJvb2s6IHtcbiAgICBpZDogXCJhcHAuaW5zdGFudEJvb2tcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnN0YW50IEJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IEJvb2tcIixcbiAgfSxcbiAgaW5zdGFudEJvb2tJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmluc3RhbnRCb29rSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3RpbmdzIHlvdSBjYW4gYm9vayB3aXRob3V0IHdhaXRpbmcgZm9yIGhvc3QgYXBwcm92YWwuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW5zdGFudCBCb29rIEluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIHNpemU6IHtcbiAgICBpZDogXCJhcHAuc2l6ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpemVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaXplXCIsXG4gIH0sXG4gIGFueUJlZDoge1xuICAgIGlkOiBcImFwcC5hbnlCZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbnkgYmVkcm9vbXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnkgYmVkcm9vbXNcIixcbiAgfSxcbiAgYW55QmF0aDoge1xuICAgIGlkOiBcImFwcC5hbnlCYXRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW55IGJhdGhyb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueSBiYXRocm9vbXNcIixcbiAgfSxcbiAgYW55QmVkczoge1xuICAgIGlkOiBcImFwcC5hbnlCZWRzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW55IGJlZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnkgYmVkc1wiLFxuICB9LFxuICBmaWx0ZXI6IHtcbiAgICBpZDogXCJhcHAuZmlsdGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmlsdGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlsdGVyIGJ1dHRvblwiLFxuICB9LFxuICBzZWVIb21lczoge1xuICAgIGlkOiBcImFwcC5zZWVIb21lc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlZSBIb21lc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlZSBIb21lc1wiLFxuICB9LFxuICByZW50YWxzOiB7XG4gICAgaWQ6IFwiYXBwLnJlbnRhbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZW50YWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVudGFsc1wiLFxuICB9LFxuICBhbWluaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuYW1pbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW1lbml0aWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW1lbml0aWVzXCIsXG4gIH0sXG4gIGZhY2lsaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuZmFjaWxpdGllc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZhY2lsaXRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYWNpbGl0aWVzXCIsXG4gIH0sXG4gIGhvdXNlUnVsZXM6IHtcbiAgICBpZDogXCJhcHAuaG91c2VSdWxlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdXNlIFJ1bGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG91c2UgUnVsZXNcIixcbiAgfSxcbiAgY2FuY2VsOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbCBidXR0b25cIixcbiAgfSxcbiAgYXBwbHlGaWx0ZXJzOiB7XG4gICAgaWQ6IFwiYXBwLmFwcGx5RmlsdGVyc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcGx5IGZpbHRlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBcHBseSBmaWx0ZXJzIGJ1dHRvblwiLFxuICB9LFxuICBtYXA6IHtcbiAgICBpZDogXCJhcHAubWFwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFwIGJ1dHRvbiBmb3IgbW9iaWxlXCIsXG4gIH0sXG4gIGZpbHRlcnM6IHtcbiAgICBpZDogXCJhcHAuZmlsdGVyc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpbHRlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaWx0ZXJzIGJ1dHRvbiBmb3IgbW9iaWxlXCIsXG4gIH0sXG4gIHJlc3VsdHM6IHtcbiAgICBpZDogXCJhcHAucmVzdWx0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3VsdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXN1bHRzIGJ1dHRvbiBmb3IgbW9iaWxlXCIsXG4gIH0sXG4gIG5vUmVzdWx0c1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vUmVzdWx0c1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gUmVzdWx0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIHJlc3VsdHMgbWVzc2FnZSBmb3Igc2VhcmNoIGxpc3RpbmdcIixcbiAgfSxcbiAgbm9SZXN1bHRzU3ViVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubm9SZXN1bHRzU3ViVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcnkgYWRqdXN0aW5nIHlvdXIgc2VhcmNoLiBIZXJlIGFyZSBzb21lIGlkZWFzOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIHJlc3VsdHMgbWVzc2FnZSBmb3Igc2VhcmNoIGxpc3RpbmdcIixcbiAgfSxcbiAgbm9SZXN1bHRzVGVybXMxOiB7XG4gICAgaWQ6IFwiYXBwLm5vUmVzdWx0c1Rlcm1zMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoYW5nZSB5b3VyIGZpbHRlcnMgb3IgZGF0ZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyByZXN1bHRzIG1lc3NhZ2UgZm9yIHNlYXJjaCBsaXN0aW5nXCIsXG4gIH0sXG4gIG5vUmVzdWx0c1Rlcm1zMjoge1xuICAgIGlkOiBcImFwcC5ub1Jlc3VsdHNUZXJtczJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJab29tIG91dCBvbiB0aGUgbWFwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcmVzdWx0cyBtZXNzYWdlIGZvciBzZWFyY2ggbGlzdGluZ1wiLFxuICB9LFxuICBub1Jlc3VsdHNUZXJtczM6IHtcbiAgICBpZDogXCJhcHAubm9SZXN1bHRzVGVybXMzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VhcmNoIGZvciBhIHNwZWNpZmljIGNpdHksIGFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyByZXN1bHRzIG1lc3NhZ2UgZm9yIHNlYXJjaCBsaXN0aW5nXCIsXG4gIH0sXG4gIGFib3V0TGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5hYm91dExpc3RpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBYm91dCB0aGlzIGxpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgZGVzY3JpcHRpb25cIixcbiAgfSxcbiAgY29udGFjdEhvc3Q6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250YWN0IEhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgYnV0dG9uIGFuZCBsaW5rXCIsXG4gIH0sXG4gIHRoZVNwYWNlOiB7XG4gICAgaWQ6IFwiYXBwLnRoZVNwYWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhlIHNwYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHNwYWNlXCIsXG4gIH0sXG4gIGFjY29tbW9kYXRlczoge1xuICAgIGlkOiBcImFwcC5hY2NvbW1vZGF0ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0ZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc3BhY2UgYWNjb21tb2RhdGVzXCIsXG4gIH0sXG4gIGJlZHJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLmJlZHJvb21zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVkcm9vbXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc3BhY2UgYmVkcm9vbXNcIixcbiAgfSxcbiAgYmF0aHJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLmJhdGhyb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhdGhyb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzcGFjZSBiYXRocm9vbXNcIixcbiAgfSxcbiAgYmVkczoge1xuICAgIGlkOiBcImFwcC5iZWRzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVkc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzcGFjZSBiZWRzXCIsXG4gIH0sXG4gIHByb3BlcnR5VHlwZToge1xuICAgIGlkOiBcImFwcC5wcm9wZXJ0eVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcm9wZXJ0eSB0eXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHNwYWNlIHByb3BlcnR5IHR5cGVcIixcbiAgfSxcbiAgc2hhcmVkU3BhY2VzOiB7XG4gICAgaWQ6IFwiYXBwLnNoYXJlZFNwYWNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNoYXJlZCBTcGFjZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3Rpbmcgc2hhcmVkIHNwYWNlc1wiLFxuICB9LFxuICBwcmljZXM6IHtcbiAgICBpZDogXCJhcHAucHJpY2VzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJpY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIHByaWNlc1wiLFxuICB9LFxuICBleHRyYVBlb3BsZToge1xuICAgIGlkOiBcImFwcC5leHRyYVBlb3BsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkV4dHJhIHBlb3BsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBleHRyYSBwZW9wbGVcIixcbiAgfSxcbiAgbm9DaGFyZ2U6IHtcbiAgICBpZDogXCJhcHAubm9DaGFyZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJObyBDaGFyZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHRyYSBwZW9wbGUgbm8gY2hhcmdlXCIsXG4gIH0sXG4gIGNhbmNlbGxhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbGxhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgY2FuY2VsbGF0aW9uc1wiLFxuICB9LFxuICB2aWV3RGV0YWlsczoge1xuICAgIGlkOiBcImFwcC52aWV3RGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXcgZGV0YWlsc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbnMgdmlldyBkZXRhaWxzXCIsXG4gIH0sXG4gIHNhZmV0eUZlYXR1cmVzOiB7XG4gICAgaWQ6IFwiYXBwLnNhZmV0eUZlYXR1cmVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2FmZXR5IGZlYXR1cmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIFNhZmV0eSBmZWF0dXJlc1wiLFxuICB9LFxuICBhdmFpbGFiaWxpdHk6IHtcbiAgICBpZDogXCJhcHAuYXZhaWxhYmlsaXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXZhaWxhYmlsaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIGF2YWlsYWJpbGl0eVwiLFxuICB9LFxuICBpbjoge1xuICAgIGlkOiBcImFwcC5pblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW5cIixcbiAgfSxcbiAgZ3Vlc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0c1wiLFxuICB9LFxuICBiZWRyb29tOiB7XG4gICAgaWQ6IFwiYXBwLmJlZHJvb21cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWRyb29tXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmVkcm9vbVwiLFxuICB9LFxuICBiZWQ6IHtcbiAgICBpZDogXCJhcHAuYmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmVkXCIsXG4gIH0sXG4gIG5vUmV2aWV3VGl0bGU6IHtcbiAgICBpZDogXCJhcHAubm9SZXZpZXdUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoaXMgcGxhY2Ugd291bGQgbG92ZSB5b3VyIHJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBubyByZXZpZXcgdGl0bGVcIixcbiAgfSxcbiAgbm9SZXZpZXdJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLm5vUmV2aWV3SW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXaGVuIHlvdSBib29rIHRoaXMgcGxhY2UsIGhlcmXigJlzIHdoZXJlIHlvdXIgcmV2aWV3IHdpbGwgc2hvdyB1cCFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3Rpbmcgbm8gcmV2aWV3IGluZm9cIixcbiAgfSxcbiAgbG9hZE1vcmU6IHtcbiAgICBpZDogXCJhcHAubG9hZE1vcmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2FkIE1vcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2FkIG1vcmUgYnV0dG9uXCIsXG4gIH0sXG4gIHZpZXdDb3VudEluZm86IHtcbiAgICBpZDogXCJhcHAudmlld0NvdW50SW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoaXMgaG9tZSBpcyBvbiBwZW9wbGUgbWluZHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIHZpZXcgY291bnQgZGV0YWlsc1wiLFxuICB9LFxuICB2aWV3Q291bnRUb3RhbDE6IHtcbiAgICBpZDogXCJhcHAudmlld0NvdW50VG90YWwxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSXTigJlzIGJlZW4gdmlld2VkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIHZpZXcgY291bnQgZGV0YWlsc1wiLFxuICB9LFxuICB2aWV3Q291bnRUb3RhbDI6IHtcbiAgICBpZDogXCJhcHAudmlld0NvdW50VG90YWwyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwidGltZXMgaW4gdGhlIHBhc3Qgd2Vlay5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgdmlldyBjb3VudCBkZXRhaWxzXCIsXG4gIH0sXG4gIG5laWdoYm9yaG9vZDoge1xuICAgIGlkOiBcImFwcC5uZWlnaGJvcmhvb2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGUgbmVpZ2hib3Job29kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIG5laWdoYm9yaG9vZFwiLFxuICB9LFxuICBuZWlnaGJvcmhvb2RJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLm5laWdoYm9yaG9vZEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRXhhY3QgbG9jYXRpb24gaW5mb3JtYXRpb24gaXMgcHJvdmlkZWQgYWZ0ZXIgYSBib29raW5nIGlzIGNvbmZpcm1lZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgbmVpZ2hib3Job29kSW5mb1wiLFxuICB9LFxuICB5b3VySG9zdDoge1xuICAgIGlkOiBcImFwcC55b3VySG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgSG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyB5b3VyIGhvc3RcIixcbiAgfSxcbiAgcmVzcG9uc2VSYXRlOiB7XG4gICAgaWQ6IFwiYXBwLnJlc3BvbnNlUmF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3BvbnNlIHJhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgcmVzcG9uc2UgcmF0ZVwiLFxuICB9LFxuICByZXNwb25zZVRpbWU6IHtcbiAgICBpZDogXCJhcHAucmVzcG9uc2VUaW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzcG9uc2UgdGltZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyByZXNwb25zZSB0aW1lXCIsXG4gIH0sXG4gIGpvaW5lZEluOiB7XG4gICAgaWQ6IFwiYXBwLmpvaW5lZEluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSm9pbmVkIGluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIGhvc3Qgam9pbmluZyBkYXRlXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0aW5mbzE6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RpbmZvMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1ha2Ugc3VyZSB5b3Ugc2hhcmUgdGhlIGZvbGxvd2luZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBpbnN0cnVjdGlvbnNcIixcbiAgfSxcbiAgY29udGFjdEhvc3RpbmZvMjoge1xuICAgIGlkOiBcImFwcC5jb250YWN0SG9zdGluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGVsbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBpbnN0cnVjdGlvbnNcIixcbiAgfSxcbiAgY29udGFjdEhvc3RpbmZvMzoge1xuICAgIGlkOiBcImFwcC5jb250YWN0SG9zdGluZm8zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYSBsaXR0bGUgYWJvdXQgeW91cnNlbGZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgaW5zdHJ1Y3Rpb25zXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0aW5mbzQ6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RpbmZvNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgYnJpbmdzIHlvdSB0b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBpbnN0cnVjdGlvbnNcIixcbiAgfSxcbiAgY29udGFjdEhvc3RpbmZvNToge1xuICAgIGlkOiBcImFwcC5jb250YWN0SG9zdGluZm81XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hv4oCZcyBqb2luaW5nIHlvdVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBpbnN0cnVjdGlvbnNcIixcbiAgfSxcbiAgY29udGFjdEhvc3RpbmZvNjoge1xuICAgIGlkOiBcImFwcC5jb250YWN0SG9zdGluZm82XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCBkbyB5b3UgbG92ZSBhYm91dCB0aGlzIGxpc3Rpbmc/IE1lbnRpb24gaXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgaW5zdHJ1Y3Rpb25zXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0RGF0ZToge1xuICAgIGlkOiBcImFwcC5jb250YWN0SG9zdERhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGVuIGFyZSB5b3UgdHJhdmVsbGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBkYXRlcyB0aXRsZVwiLFxuICB9LFxuICBob3N0RXJyb3JNZXNzYWdlMToge1xuICAgIGlkOiBcImFwcC5ob3N0RXJyb3JNZXNzYWdlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsZWFzZSBzcGVjaWZ5IGNoZWNrIGluIGFuZCBjaGVjayBvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgZXJyb3IgbWVzc2FnZVwiLFxuICB9LFxuICBob3N0RXJyb3JNZXNzYWdlMjoge1xuICAgIGlkOiBcImFwcC5ob3N0RXJyb3JNZXNzYWdlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRob3NlIGRhdGVzIGFyZSBub3QgYXZhaWxhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgaG9zdEVycm9yTWVzc2FnZTM6IHtcbiAgICBpZDogXCJhcHAuaG9zdEVycm9yTWVzc2FnZTNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgY2FuIGNvbnRhY3QgdGhlIGhvc3Qgbm93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgY2hvb3NlR3Vlc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUd1ZXN0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBHdWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgY2hvb3NlIGd1ZXN0cyBkcm9wZG93blwiLFxuICB9LFxuICB0ZXh0Qm94TWVzc2FnZToge1xuICAgIGlkOiBcImFwcC50ZXh0Qm94TWVzc2FnZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXJ0IHlvdXIgbWVzc2FnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCB0ZXh0IGJveCBzdGFydCB5b3VyIG1lc3NhZ2VcIixcbiAgfSxcbiAgc2VuZE1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAuc2VuZE1lc3NhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZW5kIG1lc3NhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgYnV0dG9uXCIsXG4gIH0sXG4gIGNvbnRhY3Rob3N0RXJyb3IxOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3Rob3N0RXJyb3IxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IG11c3Qgc2VsZWN0IG51bWJlciBvZiBndWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgZXJyb3IgbWVzc2FnZVwiLFxuICB9LFxuICBjb250YWN0aG9zdEVycm9yMjoge1xuICAgIGlkOiBcImFwcC5jb250YWN0aG9zdEVycm9yMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1lc3NhZ2UgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgZXJyb3IgbWVzc2FnZVwiLFxuICB9LFxuICBtYXhpbXVtQ2hhcmN0ZXI6IHtcbiAgICBpZDogXCJhcHAubWF4aW11bUNoYXJjdGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiKEFsbG93cyBNYXhpbXVtIDUwIGNoYXJhY3RlcnMpXCIsXG4gICAgZGVzY3JpcHRpb246IFwibWF4aW11bUNoYXJjdGVyXCIsXG4gIH0sXG4gIGVtcHR5U3BhY2U6IHtcbiAgICBpZDogXCJhcHAuZW1wdHlTcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgaW5wdXQgXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZW1wdHlTcGFjZVwiLFxuICB9LFxuICBtYXhpbXVtQ2hhcmN0ZXJMZWZ0OiB7XG4gICAgaWQ6IFwiYXBwLm1heGltdW1DaGFyY3RlckxlZnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJjaGFyYWN0ZXJzIGxlZnQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwibWF4aW11bUNoYXJjdGVyTGVmdFwiLFxuICB9LFxuICBzZXJ2aWNlRmVlOiB7XG4gICAgaWQ6IFwiYXBwLnNlcnZpY2VGZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXJ2aWNlIGZlZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgZGV0YWlsc1wiLFxuICB9LFxuICBjbGVhbmluZ0ZlZToge1xuICAgIGlkOiBcImFwcC5jbGVhbmluZ0ZlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsZWFuaW5nIGZlZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgZGV0YWlsc1wiLFxuICB9LFxuICB0b3RhbDoge1xuICAgIGlkOiBcImFwcC50b3RhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRvdGFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlsbCBkZXRhaWxzXCIsXG4gIH0sXG4gIG5pZ2h0czoge1xuICAgIGlkOiBcImFwcC5uaWdodHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJuaWdodHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCaWxsIGRldGFpbHNcIixcbiAgfSxcbiAgY2hlY2tBdmFpbGFiaWxpdHk6IHtcbiAgICBpZDogXCJhcHAuY2hlY2tBdmFpbGFiaWxpdHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGVjayBBdmFpbGFiaWxpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGJ1dHRvblwiLFxuICB9LFxuICB2aWV3T3RoZXJMaXN0aW5nczoge1xuICAgIGlkOiBcImFwcC52aWV3T3RoZXJMaXN0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXcgT3RoZXIgTGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGJ1dHRvblwiLFxuICB9LFxuICBib29rOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBidXR0b25cIixcbiAgfSxcbiAgcmVxdWVzdFRvQm9vazoge1xuICAgIGlkOiBcImFwcC5yZXF1ZXN0VG9Cb29rXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVxdWVzdCB0byBCb29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBidXR0b25cIixcbiAgfSxcbiAgbWF4aW11bVN0YXk6IHtcbiAgICBpZDogXCJhcHAubWF4aW11bVN0YXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIHN0YXkgaXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXhpbXVtIGRheSBlcnJvclwiLFxuICB9LFxuICBwZXJOaWdodDoge1xuICAgIGlkOiBcImFwcC5wZXJOaWdodFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBlciBOaWdodFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlciBOaWdodFwiLFxuICB9LFxuICBib29raW5nSW5mbzoge1xuICAgIGlkOiBcImFwcC5ib29raW5nSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSB3b27igJl0IGJlIGNoYXJnZWQgeWV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IHdvbuKAmXQgYmUgY2hhcmdlZCB5ZXRcIixcbiAgfSxcbiAgdmlld1Bob3Rvczoge1xuICAgIGlkOiBcImFwcC52aWV3UGhvdG9zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlldyBQaG90b3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHBob3RvcyBidXR0b25cIixcbiAgfSxcbiAgY2FuY2VsbGF0aW9uUG9saWNpZXM6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uUG9saWNpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsYXRpb24gUG9saWNpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsYXRpb24gUG9saWNpZXNcIixcbiAgfSxcbiAgZmxleGlibGU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGbGV4aWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIG1vZGVyYXRlOiB7XG4gICAgaWQ6IFwiYXBwLm1vZGVyYXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9kZXJhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBzdHJpY3Q6IHtcbiAgICBpZDogXCJhcHAuc3RyaWN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyaWN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RyaWN0XCIsXG4gIH0sXG4gIGFkZFByb2ZpbGVQaG90bzoge1xuICAgIGlkOiBcImFwcC5hZGRQcm9maWxlUGhvdG9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgeW91ciBwcm9maWxlIHBob3RvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXZhdGFyIHVwbG9hZCB0aXRsZVwiLFxuICB9LFxuICB1cGxvYWRJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnVwbG9hZEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGhpcyBoZWxwcyB5b3VyIGhvc3QgcmVjb2duaXplIHlvdSB3aGVuIHlvdSBtZWV0LCBzbyBtYWtlIHN1cmUgaXQgc2hvd3MgeW91ciBmYWNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF2YXRhciB1cGxvYWQgaW5mb1wiLFxuICB9LFxuICBjb250aW51ZToge1xuICAgIGlkOiBcImFwcC5jb250aW51ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbnRpbnVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGludWUgYnV0dG9uXCIsXG4gIH0sXG4gIGRyb3B6b25lVXBsb2FkOiB7XG4gICAgaWQ6IFwiYXBwLmRyb3B6b25lVXBsb2FkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXBsb2FkIGEgZmlsZSBmcm9tIHlvdXIgY29tcHV0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEcm9wem9uZSB1cGxvYWQgaW5mb1wiLFxuICB9LFxuICBkcm9wem9uZVVwbG9hZEVycm9yOiB7XG4gICAgaWQ6IFwiYXBwLmRyb3B6b25lVXBsb2FkRXJyb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZW1vdmUgdGhlIGV4aXN0aW5nIGltYWdlIGFuZCB0cnkgdXBsb2FkIGFnYWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRHJvcHpvbmUgdXBsb2FkIGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgbWVldHVwVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubWVldHVwVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHZXQgcmVhZHkgdG8gYm9vayB3aXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2V0IHJlYWR5IHRvIGJvb2sgd2l0aFwiLFxuICB9LFxuICBtZWV0dXBJbmZvMToge1xuICAgIGlkOiBcImFwcC5tZWV0dXBJbmZvMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXZSBhc2sgZXZlcnlvbmUgdG8gY29uZmlybSBhIGZldyB0aGluZ3MgYmVmb3JlIHRyYXZlbGxpbmcgb3IgaG9zdGluZy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZWV0dXAgaW5mb3JtYXRpb25cIixcbiAgfSxcbiAgbWVldHVwSW5mbzI6IHtcbiAgICBpZDogXCJhcHAubWVldHVwSW5mbzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3XigJlsbCBvbmx5IGhhdmUgdG8gZG8gdGhpcyBvbmNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lZXR1cCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBuZXh0OiB7XG4gICAgaWQ6IFwiYXBwLm5leHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZXh0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTmV4dCBidXR0b25cIixcbiAgfSxcbiAgY2hlY2tFbWFpbDoge1xuICAgIGlkOiBcImFwcC5jaGVja0VtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hlY2sgeW91ciBlbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVtYWlsIHZlcmlmaWNhdGlvbiB0aXRsZVwiLFxuICB9LFxuICB2ZXJpZmljYXRpb25JbmZvMToge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25JbmZvMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRhcCB0aGUgbGluayBpbiB0aGUgZW1haWwgd2Ugc2VudCB5b3UuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmVyaWZpY2F0aW9uIGluZm9cIixcbiAgfSxcbiAgdmVyaWZpY2F0aW9uSW5mbzI6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpY2F0aW9uSW5mbzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQ29uZmlybWluZyB5b3VyIGVtYWlsIGFkZHJlc3MgaGVscHMgdXMgc2VuZCB5b3UgdHJpcCBpbmZvcm1hdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZmljYXRpb24gaW5mb1wiLFxuICB9LFxuICByZXNlbmRFbWFpbDoge1xuICAgIGlkOiBcImFwcC5yZXNlbmRFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VuZCBlbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc2VuZCBlbWFpbCBidXR0b25cIixcbiAgfSxcbiAgY2hhbmdlRW1haWw6IHtcbiAgICBpZDogXCJhcHAuY2hhbmdlRW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGFuZ2UgZW1haWwgYWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoYW5nZSBlbWFpbCBhZGRyZXNzXCIsXG4gIH0sXG4gIGFib3V0WW91clRyaXA6IHtcbiAgICBpZDogXCJhcHAuYWJvdXRZb3VyVHJpcFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFib3V0IFlvdXIgVHJpcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgQWJvdXQgWW91ciBUcmlwXCIsXG4gIH0sXG4gIHdob0NvbWluZzoge1xuICAgIGlkOiBcImFwcC53aG9Db21pbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaG8ncyBDb21pbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaG8ncyBDb21pbmdcIixcbiAgfSxcbiAgc2F5SGVsbG86IHtcbiAgICBpZDogXCJhcHAuc2F5SGVsbG9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTYXkgaGVsbG8gdG8geW91ciBob3N0IGFuZCB0ZWxsIHRoZW0gd2h5IHlvdeKAmXJlIGNvbWluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgcGFnZSBpbmZvXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uSW5mbzoge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvbkluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVmlzaXRpbmcgZmFtaWx5IG9yIGZyaWVuZHM/IFNpZ2h0IHNlZWluZz8gVGhpcyBoZWxwcyB5b3VyIGhvc3QgcGxhbiBmb3IgeW91ciB0cmlwLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgZGVzY3JpcHRpb24gaW5mb3JtYXRpb25cIixcbiAgfSxcbiAgcGF5bWVudDoge1xuICAgIGlkOiBcImFwcC5wYXltZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnRcIixcbiAgfSxcbiAgcGF5bWVudEluZm86IHtcbiAgICBpZDogXCJhcHAucGF5bWVudEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiWW914oCZbGwgb25seSBiZSBjaGFyZ2VkIGlmIHlvdXIgcmVxdWVzdCBpcyBhY2NlcHRlZCBieSB0aGUgaG9zdC5UaGV54oCZbGwgaGF2ZSAyNCBob3VycyB0byBhY2NlcHQgb3IgZGVjbGluZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IGluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIHBheW1lbnRDdXJyZW5jeToge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q3VycmVuY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50IEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBjdXJyZW5jeVwiLFxuICB9LFxuICBjaG9vc2VDdXJyZW5jeToge1xuICAgIGlkOiBcImFwcC5jaG9vc2VDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBDdXJyZW5jeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNob29zZSBDdXJyZW5jeVwiLFxuICB9LFxuICBwYXltZW50VHlwZToge1xuICAgIGlkOiBcImFwcC5wYXltZW50VHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnQgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgVHlwZVwiLFxuICB9LFxuICBwYXlwYWw6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5UGFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsXCIsXG4gIH0sXG4gIGxvZ2luSW5mbzoge1xuICAgIGlkOiBcImFwcC5sb2dpbkluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTG9nIGludG8gUGF5UGFsLiBZb3Ugd2lsbCBiZSBhYmxlIHRvIHJldmlldyB5b3VyIHJlcXVlc3QgYmVmb3JlIGl0IGlzIGZpbmFsLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ2luIGluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIGN1cnJlbmN5RXJyb3I6IHtcbiAgICBpZDogXCJhcHAuY3VycmVuY3lFcnJvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBhIHBheW1lbnQgY3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW5jeSBFcnJvclwiLFxuICB9LFxuICBob3N0ZWRCeToge1xuICAgIGlkOiBcImFwcC5ob3N0ZWRCeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3RlZCBieVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RlZCBieVwiLFxuICB9LFxuICBjYW5jZWxsYXRpb25Qb2xpY3k6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uUG9saWN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsbGF0aW9uIHBvbGljeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbiBwb2xpY3lcIixcbiAgfSxcbiAgZGVsZXRlTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5kZWxldGVMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVsZXRlIHRoaXMgTGlzdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIGRlbGV0ZSB0aGlzIGxpc3RpbmdcIixcbiAgfSxcbiAgZGVsZXRlTGlzdGluZ0luZm86IHtcbiAgICBpZDogXCJhcHAuZGVsZXRlTGlzdGluZ0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Rpbmc/IFlvdSBjYW5ub3QgcmV2ZXJzZSB0aGlzIGFjdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBkZWxldGUgbGlzdGluZyBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBkZWxldGU6IHtcbiAgICBpZDogXCJhcHAuZGVsZXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVsZXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgRGVsZXRlIGJ1dHRvblwiLFxuICB9LFxuICBnb0JhY2s6IHtcbiAgICBpZDogXCJhcHAuZ29CYWNrXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR28gQmFja1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIEdvIGJhY2sgYnV0dG9uXCIsXG4gIH0sXG4gIHByb2dyZXNzQmFyVGV4dDE6IHtcbiAgICBpZDogXCJhcHAucHJvZ3Jlc3NCYXJUZXh0MVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdeKAmXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgUHJvZ3Jlc3MgYmFyIHRleHRcIixcbiAgfSxcbiAgcHJvZ3Jlc3NCYXJUZXh0Mjoge1xuICAgIGlkOiBcImFwcC5wcm9ncmVzc0JhclRleHQyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiZG9uZSB3aXRoIHlvdXIgbGlzdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIFByb2dyZXNzIGJhciB0ZXh0XCIsXG4gIH0sXG4gIGxpc3RpbmdVcGRhdGVJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RpbmdVcGRhdGVJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCB1cGRhdGVkIG9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgdXBkYXRlIGluZm9cIixcbiAgfSxcbiAgZWRpdExpc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAuZWRpdExpc3RpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IGxpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBidXR0b25cIixcbiAgfSxcbiAgZmluaXNoTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5maW5pc2hMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmluaXNoIHRoZSBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIGJ1dHRvblwiLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaWQ6IFwiYXBwLnByZXZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmV2aWV3XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgYnV0dG9uXCIsXG4gIH0sXG4gIGxpc3RlZDoge1xuICAgIGlkOiBcImFwcC5saXN0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBkcm9wZG93blwiLFxuICB9LFxuICB1bkxpc3RlZDoge1xuICAgIGlkOiBcImFwcC51bkxpc3RlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVubGlzdGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgZHJvcGRvd25cIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBpZDogXCJhcHAudGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgbGlzdGluZ3MhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IGRvbid0IGhhdmUgYW55IGxpc3RpbmdzIVwiLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRlbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTWFrZSBtb25leSBieSByZW50aW5nIG91dCB5b3VyIGV4dHJhIHNwYWNlLiBZb3UnbGwgYWxzbyBnZXQgdG8gbWVldCBpbnRlcmVzdGluZyB0cmF2ZWxsZXJzIGZyb20gYXJvdW5kIHRoZSB3b3JsZCFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb250ZW50XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGlkOiBcImFwcC5idXR0b25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQb3N0IGEgbmV3IGxpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQb3N0IGEgbmV3IGxpc3RpbmdcIixcbiAgfSxcbiAgbm9UcmlwVGl0bGUxOiB7XG4gICAgaWQ6IFwiYXBwLm5vVHJpcFRpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIGFueSB1cGNvbWluZyB0cmlwcyFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyB0cmlwcyB0aXRsZVwiLFxuICB9LFxuICBub1RyaXBUaXRsZTI6IHtcbiAgICBpZDogXCJhcHAubm9UcmlwVGl0bGUyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgbmV4dCBhZHZlbnR1cmUgcmlnaHQgYXdheSFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyB0cmlwcyB0aXRsZVwiLFxuICB9LFxuICBub1RyaXBzQnV0dG9uOiB7XG4gICAgaWQ6IFwiYXBwLm5vVHJpcHNCdXR0b25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZWFyY2ggbGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyB0cmlwcyBidXR0b25cIixcbiAgfSxcbiAgbm9SZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5ub1Jlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgYW55IHVwY29taW5nIHJlc2VydmF0aW9ucyFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyByZXNlcnZhdGlvblwiLFxuICB9LFxuICBzdGF0dXM6IHtcbiAgICBpZDogXCJhcHAuc3RhdHVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RhdHVzXCIsXG4gIH0sXG4gIGRhdGVMb2NhdGlvbjoge1xuICAgIGlkOiBcImFwcC5kYXRlTG9jYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXRlcyBhbmQgTG9jYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXRlcyBhbmQgTG9jYXRpb25cIixcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGlkOiBcImFwcC5kZXRhaWxzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGV0YWlsc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldGFpbHNcIixcbiAgfSxcbiAgbm9MaXN0OiB7XG4gICAgaWQ6IFwiYXBwLm5vTGlzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIExpc3QgRm91bmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyBMaXN0IEZvdW5kXCIsXG4gIH0sXG4gIG5vdGV4aXN0OiB7XG4gICAgaWQ6IFwiYXBwLm5vdGV4aXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgcHJvZmlsZSBkb2Vzbid0IGV4aXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgcHJvZmlsZSBub3QgZXhpc3RcIixcbiAgfSxcbiAgbWVzc2FnZUhpc3Ryb3k6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZUhpc3Ryb3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXNzYWdlIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIEhpc3RvcnlcIixcbiAgfSxcbiAgY29udGFjdFN1cHBvcnQ6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdFN1cHBvcnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250YWN0IFN1cHBvcnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IFN1cHBvcnRcIixcbiAgfSxcbiAgdmlld0l0aW5lcmFyeToge1xuICAgIGlkOiBcImFwcC52aWV3SXRpbmVyYXJ5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlldyBJdGluZXJhcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IEl0aW5lcmFyeVwiLFxuICB9LFxuICB2aWV3UmVjZWlwdDoge1xuICAgIGlkOiBcImFwcC52aWV3UmVjZWlwdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXcgUmVjZWlwdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgUmVjZWlwdFwiLFxuICB9LFxuICBhcHByb3ZlOiB7XG4gICAgaWQ6IFwiYXBwLmFwcHJvdmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBcHByb3ZlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXBwcm92ZVwiLFxuICB9LFxuXG4gIGRlY2xpbmU6IHtcbiAgICBpZDogXCJhcHAuZGVjbGluZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlY2xpbmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWNsaW5lXCIsXG4gIH0sXG4gIGZpcnN0TmFtZToge1xuICAgIGlkOiBcImFwcC5maXJzdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaXJzdCBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBGaXJzdCBuYW1lIHRvIFJlZ2lzdGVyXCIsXG4gIH0sXG4gIGZpcnN0TmFtZVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmZpcnN0TmFtZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmlyc3QgbmFtZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpcnN0IG5hbWUgUmVxdWlyZWRcIixcbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICBpZDogXCJhcHAubGFzdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMYXN0IE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIExhc3QgbmFtZSB0byBSZWdpc3RlclwiLFxuICB9LFxuICBsYXN0TmFtZVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmxhc3ROYW1lUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMYXN0IG5hbWUgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYXN0IG5hbWUgUmVxdWlyZWRcIixcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBpZDogXCJhcHAuZW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbCBBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBFbWFpbCBBZGRyZXNzIHRvIExvZ2luXCIsXG4gIH0sXG4gIGVtYWlsUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZW1haWxSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW1haWwgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgZW1haWxJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmVtYWlsSW5WYWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgRW1haWwgQWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkludmFsaWQgRW1haWwgQWRkcmVzc1wiLFxuICB9LFxuICBlbWFpbEFscmVhZHlFeGlzdHM6IHtcbiAgICBpZDogXCJhcHAuZW1haWxBbHJlYWR5RXhpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRoYXQgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZS4gUGxlYXNlIGNob29zZSBkaWZmZXJlbnQgb25lIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVtYWlsIEFkZHJlc3MgaXMgYWxyZWFkeSBleGlzdFwiLFxuICB9LFxuICBpQW06IHtcbiAgICBpZDogXCJhcHAuaWFtXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSSBhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdlbmRlciBMYWJlbFwiLFxuICB9LFxuICBnZW5kZXI6IHtcbiAgICBpZDogXCJhcHAuZ2VuZGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR2VuZGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2VuZGVyIEZpZWxkXCIsXG4gIH0sXG4gIGdlbmRlck1hbGU6IHtcbiAgICBpZDogXCJhcHAuZ2VuZGVyTWFsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHZW5kZXIgTWFsZVwiLFxuICB9LFxuICBnZW5kZXJGZW1hbGU6IHtcbiAgICBpZDogXCJhcHAuZ2VuZGVyRmVtYWxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmVtYWxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2VuZGVyIEZlbWFsZVwiLFxuICB9LFxuICBnZW5kZXJPdGhlcjoge1xuICAgIGlkOiBcImFwcC5nZW5kZXJPdGhlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk90aGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2VuZGVyIE90aGVyXCIsXG4gIH0sXG4gIGdlbmRlclJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmdlbmRlclJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR2VuZGVyIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2VuZGVyIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIHByZWZlcnJlZExhbmd1YWdlOiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZExhbmd1YWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlZmVycmVkIExhbmd1YWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJlZmVycmVkIExhbmd1YWdlXCIsXG4gIH0sXG4gIHByZWZlcnJlZExhbmd1YWdlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAucHJlZmVycmVkTGFuZ3VhZ2VSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZWZlcnJlZCBsYW5ndWFnZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByZWZlcnJlZCBsYW5ndWFnZSBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBwcmVmZXJyZWRDdXJyZW5jeToge1xuICAgIGlkOiBcImFwcC5wcmVmZXJyZWRDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZWZlcnJlZCBDdXJyZW5jeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByZWZlcnJlZCBDdXJyZW5jeVwiLFxuICB9LFxuICBwcmVmZXJyZWRDdXJyZW5jeVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZEN1cnJlbmN5UmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmVmZXJyZWQgY3VycmVuY3kgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmVmZXJyZWQgY3VycmVuY3kgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgcGhvbmVOdW1iZXI6IHtcbiAgICBpZDogXCJhcHAucGhvbmVOdW1iZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQaG9uZSBOdW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQaG9uZSBOdW1iZXJcIixcbiAgfSxcbiAgcGhvbmVOdW1iZXJSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5waG9uZU51bWJlclJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIHBob25lTnVtYmVySW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5waG9uZU51bWJlckludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIFBob25lIE51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob25lIE51bWJlciBpcyBJbnZhbGlkXCIsXG4gIH0sXG4gIHBob25lTnVtYmVyTGVuZ3RoSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5waG9uZU51bWJlckxlbmd0aEludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb2JpbGUgTnVtYmVyIG11c3QgYmUgMzAgZGlnaXRzIG9yIGxlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2JpbGUgTnVtYmVyIG11c3QgYmUgMzAgZGlnaXRzIG9yIGxlc3NcIixcbiAgfSxcbiAgbGl2ZUxvY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmxpdmVMb2NhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoZXJlIFlvdSBMaXZlXCIsXG4gICAgZGVzY3JpcHRpb246IFwibG9jYXRpb25cIixcbiAgfSxcbiAgaW5mbzoge1xuICAgIGlkOiBcImFwcC5pbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVzY3JpYmUgWW91cnNlbGZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmliZSBZb3Vyc2VsZlwiLFxuICB9LFxuICBpbmZvUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuaW5mb1JlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvZmlsZSBpbmZvIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpYmUgWW91cnNlbGYgaXMgUmVxdWlyZWRcIixcbiAgfSxcbiAgaW5mb1JlcXVpcmVkb25lOiB7XG4gICAgaWQ6IFwiYXBwLmluZm9SZXF1aXJlZG9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaWJlIHlvdXJzZWxmIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpYmUgWW91cnNlbGYgaXMgUmVxdWlyZWRcIixcbiAgfSxcbiAgbm90TG9nZ2VkSW46IHtcbiAgICBpZDogXCJhcHAubm90TG9nZ2VkSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgYXJlIG5vdCBsb2dnZWQgSW4uIFBsZWFzZSBsb2dpbiB0byBjb250aW51ZSFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXcm9uZyB3ZW50IHdyb25nXCIsXG4gIH0sXG4gIGRhdGVPZkJpcnRoOiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVPZkJpcnRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmlydGhkYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEJpcnRoZGF5IHRvIFJlZ2lzdGVyXCIsXG4gIH0sXG4gIGRhdGVPZkJpcnRoUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZGF0ZU9mQmlydGhSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJpcnRoZGF5IGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlydGhkYXkgUmVxdWlyZWRcIixcbiAgfSxcbiAgc2F2ZToge1xuICAgIGlkOiBcImFwcC5zYXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmUgQnV0dG9uXCIsXG4gIH0sXG4gIG1vbnRoOiB7XG4gICAgaWQ6IFwiYXBwLm1vbnRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9udGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb250aCBvZiBiaXJ0aGRheVwiLFxuICB9LFxuICB5ZWFyOiB7XG4gICAgaWQ6IFwiYXBwLnllYXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZZWFyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWWVhciBvZiBiaXJ0aGRheVwiLFxuICB9LFxuICBkYXk6IHtcbiAgICBpZDogXCJhcHAuZGF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGF5IG9mIGJpcnRoZGF5XCIsXG4gIH0sXG4gIGJpcnRoRGF5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuYmlydGhEYXlSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlbGVjdCB5b3VyIGJpcnRoIGRhdGUgdG8gY29udGludWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJiaXJ0aERheVJlcXVpcmVkXCIsXG4gIH0sXG4gIG11c3RCZTE4T3JPbGQ6IHtcbiAgICBpZDogXCJhcHAubXVzdEJlMThPck9sZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBtdXN0IGJlIGF0IGxlYXN0IDE4IHllYXJzIG9sZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBtdXN0IGF0IGxlYXN0IDE4IHllYXJzIG9sZFwiLFxuICB9LFxuICBXcm9uZ0RheUNob3Nlbjoge1xuICAgIGlkOiBcImFwcC5Xcm9uZ0RheUNob3NlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldyb25nIGRheSBjaG9zZW4gZm9yIHRoZSBtb250aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIGRheSBjaG9zZW4gZm9yIHRoZSBtb250aFwiLFxuICB9LFxuICBSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5SZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIipSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVpcmVkIEhlYWRpbmdcIixcbiAgfSxcbiAgUmVxdWlyZWREZXRhaWxzOiB7XG4gICAgaWQ6IFwiYXBwLlJlcXVpcmVkRGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgaW5mb3JtYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXF1aXJlZCBIZWFkaW5nXCIsXG4gIH0sXG4gIGxhc3ROYW1lSW5mbzoge1xuICAgIGlkOiBcImFwcC5sYXN0TmFtZUluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiWW91ciBwdWJsaWMgcHJvZmlsZSBvbmx5IHNob3dzIHlvdXIgZmlyc3QgbmFtZS4gV2hlbiB5b3UgcmVxdWVzdCBhIGJvb2tpbmcsIHlvdXIgaG9zdCB3aWxsIHNlZSB5b3VyIGZpcnN0IGFuZCBsYXN0IG5hbWUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwibGFzdE5hbWVJbmZvXCIsXG4gIH0sXG4gIGdlbmRlckluZm86IHtcbiAgICBpZDogXCJhcHAuZ2VuZGVySW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXZSB1c2UgdGhpcyBkYXRhIGZvciBhbmFseXNpcyBhbmQgbmV2ZXIgc2hhcmUgaXQgd2l0aCBvdGhlciB1c2Vycy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJnZW5kZXJJbmZvXCIsXG4gIH0sXG4gIGVtYWlsSW5mbzoge1xuICAgIGlkOiBcImFwcC5lbWFpbEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2Ugd29u4oCZdCBzaGFyZSB5b3VyIHByaXZhdGUgZW1haWwgYWRkcmVzcyB3aXRoIG90aGVyIHVzZXJzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVtYWlsSW5mb1wiLFxuICB9LFxuICBsZWFybk1vcmU6IHtcbiAgICBpZDogXCJhcHAubGVhcm5Nb3JlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGVhcm4gTW9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImxlYXJuTW9yZVwiLFxuICB9LFxuICBwaG9uZU51bWJlckluZm86IHtcbiAgICBpZDogXCJhcHAucGhvbmVOdW1iZXJJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRoaXMgaXMgb25seSBzaGFyZWQgb25jZSB5b3UgaGF2ZSBhIGNvbmZpcm1lZCBib29raW5nIHdpdGggYW5vdGhlciB1c2VyLiBUaGlzIGlzIGhvdyB3ZSBjYW4gYWxsIGdldCBpbiB0b3VjaC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwaG9uZU51bWJlckluZm9cIixcbiAgfSxcbiAgcHJlZmVycmVkTGFuZ3VhZ2VJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZExhbmd1YWdlSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldl4oCZbGwgc2VuZCB5b3UgbWVzc2FnZXMgaW4gdGhpcyBsYW5ndWFnZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwcmVmZXJyZWRMYW5ndWFnZUluZm9cIixcbiAgfSxcbiAgcHJlZmVycmVkQ3VycmVuY3lJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZEN1cnJlbmN5SW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldl4oCZbGwgc2hvdyB5b3UgcHJpY2VzIGluIHRoaXMgY3VycmVuY3kuXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJlZmVycmVkQ3VycmVuY3lJbmZvXCIsXG4gIH0sXG4gIGluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLmluZm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGVscCBvdGhlciBwZW9wbGUgZ2V0IHRvIGtub3cgeW91LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImluZm8xXCIsXG4gIH0sXG4gIGluZm8yOiB7XG4gICAgaWQ6IFwiYXBwLmluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRlbGwgdGhlbSBhYm91dCB0aGUgdGhpbmdzIHlvdSBsaWtlOiBXaGF0IGFyZSA1IHRoaW5ncyB5b3UgY2Fu4oCZdCBsaXZlIHdpdGhvdXQ/IFNoYXJlIHlvdXIgZmF2b3JpdGUgdHJhdmVsIGRlc3RpbmF0aW9ucywgYm9va3MsIG1vdmllcywgc2hvd3MsIG11c2ljLCBmb29kLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImluZm8yXCIsXG4gIH0sXG4gIGluZm8zOiB7XG4gICAgaWQ6IFwiYXBwLmluZm8zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRlbGwgdGhlbSB3aGF0IGl04oCZcyBsaWtlIHRvIGhhdmUgeW91IGFzIGEgZ3Vlc3Qgb3IgaG9zdDogV2hhdOKAmXMgeW91ciBzdHlsZSBvZiB0cmF2ZWxpbmc/IE9mIGhvc3Rpbmc/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW5mbzNcIixcbiAgfSxcbiAgaW5mbzQ6IHtcbiAgICBpZDogXCJhcHAuaW5mbzRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUZWxsIHRoZW0gYWJvdXQgeW91OiBEbyB5b3UgaGF2ZSBhIGxpZmUgbW90dG8/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW5mbzRcIixcbiAgfSxcbiAgcHJvZmlsZVBob3RvSW5mbzoge1xuICAgIGlkOiBcImFwcC5wcm9maWxlUGhvdG9JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNsZWFyIGZyb250YWwgZmFjZSBwaG90b3MgYXJlIGFuIGltcG9ydGFudCB3YXkgZm9yIGhvc3RzIGFuZCBndWVzdHMgdG8gbGVhcm4gYWJvdXQgZWFjaCBvdGhlci4gSXTigJlzIG5vdCBtdWNoIGZ1biB0byBob3N0IGEgbGFuZHNjYXBlISBQbGVhc2UgdXBsb2FkIGEgcGhvdG8gdGhhdCBjbGVhcmx5IHNob3dzIHlvdXIgZmFjZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9maWxlIHBob3RvIHVwbG9hZCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICB2ZXJpZmllZEluZm86IHtcbiAgICBpZDogXCJhcHAudmVyaWZpZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZpZWQgSW5mb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZlcmlmaWVkIEluZm9cIixcbiAgfSxcbiAgdmVyaWZpZWRFbWFpbDoge1xuICAgIGlkOiBcImFwcC52ZXJpZmllZEVtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGhhdmUgdmVyaWZpZWQgeW91ciBlbWFpbCBhZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IGhhdmUgdmVyaWZpZWQgeW91ciBlbWFpbCBhZGRyZXNzXCIsXG4gIH0sXG4gIGZhY2Vib29rSW5mbzoge1xuICAgIGlkOiBcImFwcC5mYWNlYm9va0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU2lnbiBpbiB3aXRoIEZhY2Vib29rIGFuZCBkaXNjb3ZlciB5b3VyIHRydXN0ZWQgY29ubmVjdGlvbnMgdG8gaG9zdHMgYW5kIGd1ZXN0cyBhbGwgb3ZlciB0aGUgd29ybGQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFjZWJvb2sgaW5mb3JtYXRpb25cIixcbiAgfSxcbiAgZGlzY29ubmVjdDoge1xuICAgIGlkOiBcImFwcC5kaXNjb25uZWN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzY29ubmVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2Nvbm5lY3QgYnV0dG9uXCIsXG4gIH0sXG4gIGdvb2dsZUluZm86IHtcbiAgICBpZDogXCJhcHAuZ29vZ2xlSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJDb25uZWN0IHlvdXIgYWNjb3VudCB0byB5b3VyIEdvb2dsZSBhY2NvdW50IGZvciBzaW1wbGljaXR5IGFuZCBlYXNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdvb2dsZSBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBub3RWZXJpZmllZERldGFpbHM6IHtcbiAgICBpZDogXCJhcHAubm90VmVyaWZpZWREZXRhaWxzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGhhdmVuJ3QgdmVyaWZpZWQgYW55IG9mIHRoZSBiZWxvdyBpdGVtc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCB2ZXJpZmllZCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBub3RWZXJpZmllZEluZm86IHtcbiAgICBpZDogXCJhcHAubm90VmVyaWZpZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm90IFZlcmlmaWVkIEluZm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgVmVyaWZpZWQgSW5mb1wiLFxuICB9LFxuICBwbGVhc2VWZXJpZnk6IHtcbiAgICBpZDogXCJhcHAucGxlYXNlVmVyaWZ5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmVyaWZ5IHlvdXIgZW1haWwgYWRkcmVzcy5cIixcbiAgfSxcbiAgdmVyaWZ5RW1haWw6IHtcbiAgICBpZDogXCJhcHAudmVyaWZ5RW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWZXJpZnkgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZnkgRW1haWxcIixcbiAgfSxcbiAgY29ubmVjdDoge1xuICAgIGlkOiBcImFwcC5jb25uZWN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29ubmVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbm5lY3QgYnV0dG9uXCIsXG4gIH0sXG4gIHJldmlld1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhhbmsgeW91IGZvciByZXZpZXdpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgcmV2aWV3VGl0bGUyOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1RpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJUaGFuayB5b3UgZm9yIHJldmlld2luZyB5b3VyIGd1ZXN0LiBZb3VyIHJldmlldyB3aWxsIGJlIHZpc2libGUgb24gdGhlaXIgcHJvZmlsZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgZmluaXNoOiB7XG4gICAgaWQ6IFwiYXBwLmZpbmlzaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpbmlzaFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpbmlzaCBidXR0b25cIixcbiAgfSxcbiAgcmV2aWV3UGFnZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1BhZ2VUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaWJlIHlvdXIgZXhwZXJpZW5jZSAocmVxdWlyZWQpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld1BhZ2VUaXRsZTE6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3UGFnZVRpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgcmV2aWV3IHdpbGwgYmUgcHVibGljIG9uIHlvdXIgZ3Vlc3QgcHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXZpZXdUZXh0QXJlYToge1xuICAgIGlkOiBcImFwcC5yZXZpZXdUZXh0QXJlYVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgd2FzIGl0IGxpa2UgdG8gaG9zdCB0aGlzIGd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld1JhdGluZzoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdSYXRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPdmVyYWxsIFJhdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBpZDogXCJhcHAuc3VibWl0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3VibWl0IGJ1dHRvblwiLFxuICB9LFxuICByZXZpZXdFcnJvcjE6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3RXJyb3IxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIHdyaXRlIHlvdXIgcmV2aWV3IVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXZpZXdFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3RXJyb3IyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIHJhdGUgeW91ciByZXZpZXchXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHBhc3RSZXZpZXdUaXRsZToge1xuICAgIGlkOiBcImFwcC5wYXN0UmV2aWV3VGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXN0IFJldmlld3MgWW914oCZdmUgV3JpdHRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICBub1Jldmlldzoge1xuICAgIGlkOiBcImFwcC5ub1Jldmlld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoZXJlIGFyZSBubyByZXZpZXdzIGFib3V0IHlvdSB5ZXQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIG5vUmV2aWV3UGFzdDoge1xuICAgIGlkOiBcImFwcC5ub1Jldmlld1Bhc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGVyZSBhcmUgbm8gcmV2aWV3cyBwdWJsaXNoZWQgYnkgeW91LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXNwb25zZToge1xuICAgIGlkOiBcImFwcC5yZXNwb25zZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3BvbnNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld1BhbmVsVGl0bGUxOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1BhbmVsVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXdzIEFib3V0IHlvdVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXZpZXdQYW5lbFRpdGxlMjoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdQYW5lbFRpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlld3MgQnkgeW91XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld0NvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3Q29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJOb2JvZHkgdG8gcmV2aWV3IHJpZ2h0IG5vdy4gTG9va3MgbGlrZSBpdOKAmXMgdGltZSBmb3IgYW5vdGhlciB0cmlwIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICBzdWJtaXRSZXZpZXdGb3I6IHtcbiAgICBpZDogXCJhcHAuc3VibWl0UmV2aWV3Rm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0IGEgcHVibGljIHJldmlldyBmb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgd3JpdGVSZXZpZXc6IHtcbiAgICBpZDogXCJhcHAud3JpdGVSZXZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXcml0ZSBhIFJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICB2aWV3TGl0bmVyYXk6IHtcbiAgICBpZDogXCJhcHAudmlld0xpdG5lcmF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlldyBJdGluZXJhcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgcmV2aWV3V3JpdHRlbjoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdXcml0dGVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlJldmlld3MgYXJlIHdyaXR0ZW4gYXQgdGhlIGVuZCBvZiBhIHJlc2VydmF0aW9uLiBSZXZpZXdzIHlvdeKAmXZlIHJlY2VpdmVkIHdpbGwgYmUgdmlzaWJsZSBib3RoIGhlcmUgYW5kIG9uIHlvdXIgcHVibGljIHByb2ZpbGUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIGhleToge1xuICAgIGlkOiBcImFwcC5oZXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZXkgSeKAmW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgcmVwb3J0VXNlcjoge1xuICAgIGlkOiBcImFwcC5yZXBvcnRVc2VyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVwb3J0IHRoaXMgdXNlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgcHJvZmlsZVwiLFxuICB9LFxuICBub1ZlcmlmaWNhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAubm9WZXJpZmljYXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gdmVyaWZpY2F0aW9ucyB5ZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgYWRkVmVyaWZpY2F0aW9uczoge1xuICAgIGlkOiBcImFwcC5hZGRWZXJpZmljYXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIFZlcmlmaWNhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgZW1haWxDb25maXJtZWQ6IHtcbiAgICBpZDogXCJhcHAuZW1haWxDb25maXJtZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbCBDb25maXJtZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgZmJDb25uZWN0ZWQ6IHtcbiAgICBpZDogXCJhcHAuZmJDb25uZWN0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGYWNlYm9vayBDb25uZWN0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgZ29vZ2xlQ29ubmVjdGVkOiB7XG4gICAgaWQ6IFwiYXBwLmdvb2dsZUNvbm5lY3RlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvb2dsZSBDb25uZWN0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgbW9yZVZlcmlmaWNhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAubW9yZVZlcmlmaWNhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgTW9yZSBWZXJpZmljYXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBwcm9maWxlXCIsXG4gIH0sXG4gIGFkZFBheW91dDoge1xuICAgIGlkOiBcImFwcC5hZGRQYXlvdXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgUGF5b3V0IE1ldGhvZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dFwiLFxuICB9LFxuICBhZGRyZXNzMToge1xuICAgIGlkOiBcImFwcC5hZGRyZXNzMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkZHJlc3MgTGluZSAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IEZvcm1cIixcbiAgfSxcbiAgYWRkcmVzczI6IHtcbiAgICBpZDogXCJhcHAuYWRkcmVzczJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRyZXNzIExpbmUgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIGNpdHk6IHtcbiAgICBpZDogXCJhcHAuY2l0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGlkOiBcImFwcC5zdGF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXRlIC8gUHJvdmluY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICB6aXBDb2RlOiB7XG4gICAgaWQ6IFwiYXBwLnppcENvZGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJaSVAgQ29kZSAvIFBvc3RhbCBDb2RlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IEZvcm1cIixcbiAgfSxcbiAgcGF5b3V0RXJyb3IxOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEVycm9yMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdW50cnkgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBwYXlvdXRFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0RXJyb3IyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2l0eSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIHBheW91dEVycm9yMzoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRFcnJvcjNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF0ZSAvIFByb3ZpbmNlIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IEZvcm1cIixcbiAgfSxcbiAgcGF5b3V0RXJyb3I0OiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEVycm9yNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlpJUCBDb2RlIC8gUG9zdGFsIENvZGUgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBwYXlvdXRFcnJvcjU6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0RXJyb3I1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW50ZXIgdmFsaWQgZW1haWwgYWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIHBheW91dEVycm9yNjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRFcnJvcjZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDdXJyZW5jeSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIGNvdW50cnk6IHtcbiAgICBpZDogXCJhcHAuY291bnRyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdW50cnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBjaG9vc2VDb3VudHJ5OiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUNvdW50cnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgQ291bnRyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIGJhY2s6IHtcbiAgICBpZDogXCJhcHAuYmFja1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYWNrIGJ1dHRvblwiLFxuICB9LFxuICBwYXlwYWxJbnRybzE6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsSW50cm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBheVBhbCBpcyBhbiBvbmxpbmUgcGF5bWVudCBwcm9jZXNzaW5nIHNlcnZpY2UgdGhhdCBhbGxvd3MgeW91IHRvIHJlY2VpdmUgcGF5bWVudHMgZnJvbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheXBhbCBpbnRyb1wiLFxuICB9LFxuICBwYXlwYWxJbnRybzI6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsSW50cm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG8gdXNlIFBheVBhbCB3aXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsIGludHJvXCIsXG4gIH0sXG4gIHBheXBhbEludHJvMzoge1xuICAgIGlkOiBcImFwcC5wYXlwYWxJbnRybzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ5b3UgbXVzdCBoYXZlIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCBQYXlQYWwuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsIGludHJvXCIsXG4gIH0sXG4gIHBheXBhbEludHJvNDoge1xuICAgIGlkOiBcImFwcC5wYXlwYWxJbnRybzRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMZWFybiBtb3JlIGFib3V0IFBheVBhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheXBhbCBpbnRyb1wiLFxuICB9LFxuICBwYXlwYWxFbWFpbDoge1xuICAgIGlkOiBcImFwcC5wYXlwYWxFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyBhc3NvY2lhdGVkIHdpdGggeW91ciBleGlzdGluZyBQYXlQYWwgYWNjb3VudC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlwYWwgZW1haWxcIixcbiAgfSxcbiAgcGF5cGFsQ3VycmVuY3k6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsQ3VycmVuY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbiB3aGF0IGN1cnJlbmN5IHdvdWxkIHlvdSBsaWtlIHRvIGJlIHBhaWQ/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsIGN1cnJlbmN5XCIsXG4gIH0sXG4gIHBheW91dEludHJvMToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRJbnRybzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiUGF5b3V0cyBmb3IgcmVzZXJ2YXRpb25zIGFyZSByZWxlYXNlZCB0byB5b3UgdGhlIGRheSBhZnRlciB5b3VyIGd1ZXN0IGNoZWNrcyBpbiwgYW5kIGl0IHRha2VzIHNvbWUgYWRkaXRpb25hbCB0aW1lIGZvciB0aGUgbW9uZXkgdG8gYXJyaXZlIGRlcGVuZGluZyBvbiB5b3VyIHBheW91dCBtZXRob2QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IGludHJvXCIsXG4gIH0sXG4gIHBheW91dEludHJvMjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRJbnRybzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2UgY2FuIHNlbmQgbW9uZXkgdG8gcGVvcGxlIGluIFVuaXRlZCBTdGF0ZXMgd2l0aCB0aGVzZSBwYXlvdXQgbWV0aG9kcy4gV2hpY2ggZG8geW91IHByZWZlcj9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaW50cm9cIixcbiAgfSxcbiAgcGF5b3V0VGl0bGU6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRob2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaGVhZGVyXCIsXG4gIH0sXG4gIHBheW91dFRpdGxlMToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUaXRsZTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcm9jZXNzZWQgaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaGVhZGVyXCIsXG4gIH0sXG4gIHBheW91dFRpdGxlMjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUaXRsZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGZWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IGhlYWRlclwiLFxuICB9LFxuICBwYXlvdXRUaXRsZTM6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VGl0bGUzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaGVhZGVyXCIsXG4gIH0sXG4gIHBheW91dFRpdGxlNDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUaXRsZTRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXRhaWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IGhlYWRlclwiLFxuICB9LFxuICBub1BheW1lbnRGb3VuZDoge1xuICAgIGlkOiBcImFwcC5ub1BheW1lbnRGb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIFBheW1lbnQgbWV0aG9kIGZvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcGF5bWVudFwiLFxuICB9LFxuICBwYXlvdXRNZXRob2Q6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0TWV0aG9kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5b3V0IE1ldGhvZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIGFkZFBheW91dE1ldGhvZDoge1xuICAgIGlkOiBcImFwcC5hZGRQYXlvdXRNZXRob2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUbyBnZXQgcGFpZCwgeW91IG5lZWQgdG8gc2V0IHVwIGEgcGF5b3V0IG1ldGhvZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcGF5bWVudFJlbGVhc2VJbmZvMToge1xuICAgIGlkOiBcImFwcC5wYXltZW50UmVsZWFzZUluZm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcInJlbGVhc2VzIHBheW91dHMgYWJvdXQgMjQgaG91cnMgYWZ0ZXIgYSBndWVzdOKAmXMgc2NoZWR1bGVkIGNoZWNrLWluIHRpbWUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICBwYXltZW50UmVsZWFzZUluZm8yOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRSZWxlYXNlSW5mbzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGhlIHRpbWUgaXQgdGFrZXMgZm9yIHRoZSBmdW5kcyB0byBhcHBlYXIgaW4geW91ciBhY2NvdW50IGRlcGVuZHMgb24geW91ciBwYXlvdXQgbWV0aG9kLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcGF5b3V0VGl0bGVCbG9jazE6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VGl0bGVCbG9jazFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2hlbiB5b3UgcmVjZWl2ZSBhIHBheW1lbnQgZm9yIGEgcmVzZXJ2YXRpb24sIHdlIGNhbGwgdGhhdCBwYXltZW50IHRvIHlvdSBhIOKAnHBheW91dOKAnS4gT3VyIHNlY3VyZSBwYXltZW50IHN5c3RlbSBzdXBwb3J0cyBzZXZlcmFsIHBheW91dCBtZXRob2RzLCB3aGljaCBjYW4gYmUgc2V0dXAgYW5kIGVkaXRlZCBoZXJlLiBZb3VyIGF2YWlsYWJsZSBwYXlvdXQgb3B0aW9ucyBhbmQgY3VycmVuY2llcyBkaWZmZXIgYnkgY291bnRyeS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHBheW91dEZhcToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRGYXFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWaXNpdCB0aGUgUGF5b3V0IEZBUVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGlkOiBcImFwcC5vcHRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3B0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgZGVmYXVsdDoge1xuICAgIGlkOiBcImFwcC5kZWZhdWx0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVmYXVsdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcmVhZHk6IHtcbiAgICBpZDogXCJhcHAucmVhZHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFkeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgc2V0RGVmYXVsdDoge1xuICAgIGlkOiBcImFwcC5zZXREZWZhdWx0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2V0IERlZmF1bHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHJlbW92ZToge1xuICAgIGlkOiBcImFwcC5yZW1vdmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZW1vdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIGRpcmVjdERlcG9zaXQ6IHtcbiAgICBpZDogXCJhcHAuZGlyZWN0RGVwb3NpdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRpcmVjdCBEZXBvc2l0LCBQYXlwYWwsIGV0Yy4uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICB0cmFuc2FjdGlvblBheW91dDoge1xuICAgIGlkOiBcImFwcC50cmFuc2FjdGlvblBheW91dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYW5zYWN0aW9uIGhpc3RvcnlcIixcbiAgfSxcbiAgdHJhbnNmZXJUbzoge1xuICAgIGlkOiBcImFwcC50cmFuc2ZlclRvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhbnNmZXIgdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFuc2FjdGlvbiBoaXN0b3J5XCIsXG4gIH0sXG4gIHRyYW5zZmVyRGF0ZToge1xuICAgIGlkOiBcImFwcC50cmFuc2ZlckRhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGF0ZVwiLFxuICB9LFxuICB0cmFuc2ZlclR5cGU6IHtcbiAgICBpZDogXCJhcHAudHJhbnNmZXJUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlR5cGVcIixcbiAgfSxcbiAgdHJhbnNmZXJBbW91bnQ6IHtcbiAgICBpZDogXCJhcHAudHJhbnNmZXJBbW91bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbW91bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbW91bnRcIixcbiAgfSxcbiAgcGFpZE91dDoge1xuICAgIGlkOiBcImFwcC5wYWlkT3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFpZCBPdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWlkIE91dFwiLFxuICB9LFxuICByZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzZXJ2YXRpb25cIixcbiAgfSxcbiAgcGF5VG86IHtcbiAgICBpZDogXCJhcHAucGF5VG9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXkgdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXkgdG9cIixcbiAgfSxcbiAgZ3Jvc3NFYXJuaW5nczoge1xuICAgIGlkOiBcImFwcC5ncm9zc0Vhcm5pbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Jvc3MgRWFybmluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHcm9zcyBFYXJuaW5nc1wiLFxuICB9LFxuICBhbGxMaXN0aW5nczoge1xuICAgIGlkOiBcImFwcC5hbGxMaXN0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFsbCBsaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbCBsaXN0aW5nc1wiLFxuICB9LFxuICBub1RyYW5zYWN0aW9uczoge1xuICAgIGlkOiBcImFwcC5ub1RyYW5zYWN0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIFRyYW5zYWN0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIFRyYW5zYWN0aW9uc1wiLFxuICB9LFxuICB0cmFuc2FjdGlvbnNBZGRQYXlvdXQ6IHtcbiAgICBpZDogXCJhcHAudHJhbnNhY3Rpb25zQWRkUGF5b3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIFBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYW5zYWN0aW9uIHBheW91dFwiLFxuICB9LFxuICBjb21wbGV0ZWRUcmFuc2FjdGlvbnM6IHtcbiAgICBpZDogXCJhcHAuY29tcGxldGVkVHJhbnNhY3Rpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29tcGxldGVkIFRyYW5zYWN0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbXBsZXRlZCBUcmFuc2FjdGlvbnNcIixcbiAgfSxcbiAgZnV0dXJlVHJhbnNhY3Rpb25zOiB7XG4gICAgaWQ6IFwiYXBwLmZ1dHVyZVRyYW5zYWN0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZ1dHVyZSBUcmFuc2FjdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZWQgVHJhbnNhY3Rpb25zXCIsXG4gIH0sXG4gIGV4cG9ydENTVjoge1xuICAgIGlkOiBcImFwcC5leHBvcnRDU1ZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeHBvcnQgdG8gQ1NWXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwb3J0IHRvIENTVlwiLFxuICB9LFxuICBjaGFuZ2VQYXNzd29yZDoge1xuICAgIGlkOiBcImFwcC5jaGFuZ2VQYXNzd29yZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoYW5nZSBZb3VyIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hhbmdlIFlvdXIgUGFzc3dvcmRcIixcbiAgfSxcbiAgb2xkUGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAub2xkUGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPbGQgUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPbGQgUGFzc3dvcmRcIixcbiAgfSxcbiAgbmV3UGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAubmV3UGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZXcgUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOZXcgUGFzc3dvcmRcIixcbiAgfSxcbiAgY29uZmlybVBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1QYXNzd29yZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25maXJtIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHVwZGF0ZVBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLnVwZGF0ZVBhc3N3b3JkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXBkYXRlIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXBkYXRlIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHBhc3N3b3JkRXJyb3IxOiB7XG4gICAgaWQ6IFwiYXBwLnBhc3N3b3JkRXJyb3IxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT2xkIFBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgRXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRFcnJvcjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZXcgUGFzc3dvcmQgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBFcnJvclwiLFxuICB9LFxuICBwYXNzd29yZEVycm9yMzoge1xuICAgIGlkOiBcImFwcC5wYXNzd29yZEVycm9yM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5ldyBQYXNzd29yZCBtdXN0IGJlIG1pbmltdW0gOCBjaGFyYWN0ZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgRXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRFcnJvcjQ6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRFcnJvcjRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb25maXJtIFBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgRXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRFcnJvcjU6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRFcnJvcjVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb25maXJtIFBhc3N3b3JkIG11c3QgYmUgbWluaW11bSA4IGNoYXJhY3RlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBFcnJvclwiLFxuICB9LFxuICBub01lc3NhZ2VzVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubm9NZXNzYWdlc1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gTWVzc2FnZXMgeWV0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluYm94XCIsXG4gIH0sXG4gIG5vTWVzc2FnZXNUaXRsZTE6IHtcbiAgICBpZDogXCJhcHAubm9NZXNzYWdlc1RpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXaGVuIGhvc3RzIHJlc3BvbmQgdG8geW91ciBpbnF1aXJpZXMgb3IgYm9va2luZyByZXF1ZXN0cywgeW91J2xsIHNlZSB0aGVpciBtZXNzYWdlcyBoZXJlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluYm94XCIsXG4gIH0sXG4gIG5vTWVzc2FnZXNUaXRsZTI6IHtcbiAgICBpZDogXCJhcHAubm9NZXNzYWdlc1RpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXaGVuIGd1ZXN0cyByZXNwb25kIHRvIHlvdXIgaW5xdWlyaWVzIG9yIGJvb2tpbmcgcmVxdWVzdHMsIHlvdSdsbCBzZWUgdGhlaXIgbWVzc2FnZXMgaGVyZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmJveFwiLFxuICB9LFxuICB0cmF2ZWxpbmc6IHtcbiAgICBpZDogXCJhcHAudHJhdmVsaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhdmVsbGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYXZlbGluZ1wiLFxuICB9LFxuICBlcnJvck1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAuZXJyb3JNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT29wcyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmVmcmVzaCBvciBjaGVjayBiYWNrIGxhdGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXJyb3IgbWVzc2FnZVwiLFxuICB9LFxuICByZWNlaXB0OiB7XG4gICAgaWQ6IFwiYXBwLnJlY2VpcHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWNlaXB0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdFwiLFxuICB9LFxuICBjdXN0b21lclJlY2VpcHQ6IHtcbiAgICBpZDogXCJhcHAuY3VzdG9tZXJSZWNlaXB0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3VzdG9tZXIgUmVjZWlwdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN1c3RvbWVyIFJlY2VpcHRcIixcbiAgfSxcbiAgY29uZmlybWF0aW9uQ29kZToge1xuICAgIGlkOiBcImFwcC5jb25maXJtYXRpb25Db2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uZmlybWF0aW9uIENvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25maXJtYXRpb24gQ29kZVwiLFxuICB9LFxuICBuYW1lOiB7XG4gICAgaWQ6IFwiYXBwLm5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTmFtZVwiLFxuICB9LFxuICB0cmF2ZWxEZXN0aW5hdGlvbjoge1xuICAgIGlkOiBcImFwcC50cmF2ZWxEZXN0aW5hdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyYXZlbCBEZXN0aW5hdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYXZlbCBEZXN0aW5hdGlvblwiLFxuICB9LFxuICBkdXJhdGlvbjoge1xuICAgIGlkOiBcImFwcC5kdXJhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkR1cmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRHVyYXRpb25cIixcbiAgfSxcbiAgYWNjb21tb2RhdGlvblR5cGU6IHtcbiAgICBpZDogXCJhcHAuYWNjb21tb2RhdGlvblR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0aW9uIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvbW1vZGF0aW9uIFR5cGVcIixcbiAgfSxcbiAgYWNjb21tb2RhdGlvbkFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAuYWNjb21tb2RhdGlvbkFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0aW9uIEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvbW1vZGF0aW9uIEFkZHJlc3NcIixcbiAgfSxcbiAgYWNjb21tb2RhdGlvbkhvc3Q6IHtcbiAgICBpZDogXCJhcHAuYWNjb21tb2RhdGlvbkhvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0aW9uIEhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvbW1vZGF0aW9uIEhvc3RcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25DaGFyZ2VzOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uQ2hhcmdlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VydmF0aW9uIENoYXJnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbiBDaGFyZ2VzXCIsXG4gIH0sXG4gIHBheW1lbnRSZWNlaXZlZDoge1xuICAgIGlkOiBcImFwcC5wYXltZW50UmVjZWl2ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50IFJlY2VpdmVkOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgUmVjZWl2ZWQ6XCIsXG4gIH0sXG4gIHJlY2VpcHRJbmZvMToge1xuICAgIGlkOiBcImFwcC5yZWNlaXB0SW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiaXMgYXV0aG9yaXplZCB0byBhY2NlcHQgYWNjb21vZGF0aW9uIGZlZXMgb24gYmVoYWxmIG9mIHRoZSBIb3N0IGFzIHRoZWlyIGxpbWl0ZWQgYWdlbnQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICByZWNlaXB0SW5mbzI6IHtcbiAgICBpZDogXCJhcHAucmVjZWlwdEluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRoaXMgbWVhbnMgdGhhdCB5b3VyIHBheW1lbnQgb2JsaWdhdGlvbiB0byB0aGUgSG9zdCBpcyBzYXRpc2ZpZWQgYnkgeW91ciBwYXltZW50IHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICByZWNlaXB0SW5mbzM6IHtcbiAgICBpZDogXCJhcHAucmVjZWlwdEluZm8zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkFueSBvZiB0aGUgSG9zdCdzIGRpc2FncmVlbWVudHMgYnkgdGhlIEhvc3QgcmVnYXJkaW5nIHRoYXQgcGF5bWVudCBtdXN0IGJlIHNldHRsZWQgYmV0d2VlbiB0aGUgSG9zdCBhbmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWNlaXB0IGluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIGl0aW5lcmF5VGl0bGU6IHtcbiAgICBpZDogXCJhcHAuaXRpbmVyYXlUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdeKAmXJlIGdvaW5nIHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXRpbmVyYXJ5XCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uQ29kZToge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbkNvZGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBjb2RlOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkl0aW5lcmFyeVwiLFxuICB9LFxuICBhZGRyZXNzOiB7XG4gICAgaWQ6IFwiYXBwLmFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXRpbmVyYXJ5XCIsXG4gIH0sXG4gIHZpZXdMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlldyBMaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBMaXN0aW5nXCIsXG4gIH0sXG4gIG1lc3NhZ2VIb3N0OiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VIb3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZSBIb3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXRpbmVyYXJ5XCIsXG4gIH0sXG4gIGJpbGxpbmc6IHtcbiAgICBpZDogXCJhcHAuYmlsbGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJpbGxpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJdGluZXJhcnlcIixcbiAgfSxcbiAgbWVzc2FnZUFjdGlvbjE6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZUFjdGlvbjFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgbWVzc2FnZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2VcIixcbiAgfSxcbiAgbWVzc2FnZUFjdGlvbjI6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZUFjdGlvbjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJhYm91dCB0aGVpciBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlXCIsXG4gIH0sXG4gIG1lc3NhZ2VBY3Rpb25JbmZvOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VBY3Rpb25JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1vc3QgaG9zdHMgcmVzcG9uZCB3aXRoaW4gMjQgaG91cnMuIElmIHRoaXMgbGlzdGluZyBpcyB5b3VyIHRvcCBjaG9pY2UsIGVudGVyIHlvdXIgcGF5bWVudCBpbmZvcm1hdGlvbiB0byBvZmZpY2lhbGx5IHJlcXVlc3QgYSByZXNlcnZhdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2VcIixcbiAgfSxcbiAgUmVxdWVzdFRvQm9vazoge1xuICAgIGlkOiBcImFwcC5SZXF1ZXN0VG9Cb29rXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVxdWVzdCB0byBib29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCB0byBib29rXCIsXG4gIH0sXG4gIG1lc3NhZ2VBY3Rpb24zOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VBY3Rpb24zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBib29raW5nIHJlcXVlc3Qgc2VudCB0b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbWVzc2FnZVwiLFxuICB9LFxuICBtZXNzYWdlQWN0aW9uNDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlQWN0aW9uNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImZvciB0aGVpciBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlXCIsXG4gIH0sXG4gIGNhbmNlbEluZm86IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJNb3N0IGhvc3RzIHJlc3BvbmQgd2l0aGluIDI0IGhvdXJzLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBjb250aW51ZSB3aXRoIHRoaXMgaG9zdCBmdXJ0aGVyLCB5b3UgY2FuIGNhbmNlbCB0aGlzIHJlcXVlc3QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlXCIsXG4gIH0sXG4gIGNhbmNlbFJlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbFJlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsIFJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIFJlc2VydmF0aW9uXCIsXG4gIH0sXG4gIHJlcXVlc3REZWNsaW5lZDoge1xuICAgIGlkOiBcImFwcC5yZXF1ZXN0RGVjbGluZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1ZXN0IGRlY2xpbmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBkZWNsaW5lZFwiLFxuICB9LFxuICBndWVzdERlY2xpbmVkSW5mbzoge1xuICAgIGlkOiBcImFwcC5ndWVzdERlY2xpbmVkSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJZb3VyIHJlcXVlc3QgaXMgZGVjbGluZWQgYnkgaG9zdC4gWW91IGNhbiBjaG9vc2UgZGlmZmVyZW50IGRhdGVzIG9yIHNlYXJjaCBmb3Igb3RoZXIgbGlzdGluZy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXF1ZXN0IGRlY2xpbmVkXCIsXG4gIH0sXG4gIHJlcXVlc3RBcHByb3ZlZEFjdGlvbjE6IHtcbiAgICBpZDogXCJhcHAucmVxdWVzdEFwcHJvdmVkQWN0aW9uMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgYm9va2luZyByZXF1ZXN0IGFwcHJvdmVkIGJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBhcHByb3ZlZFwiLFxuICB9LFxuICByZXF1ZXN0VGltZUluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLnJlcXVlc3RUaW1lSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgaGF2ZSB0byBib29rIHdpdGhpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgYXBwcm92ZWRcIixcbiAgfSxcbiAgcmVxdWVzdFRpbWVJbmZvMjoge1xuICAgIGlkOiBcImFwcC5yZXF1ZXN0VGltZUluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwib3IgaXQgd2lsbCBleHBpcmUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBhcHByb3ZlZFwiLFxuICB9LFxuICBib29raW5nQ29uZmlybWVkSW5mbzE6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0NvbmZpcm1lZEluZm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBib29raW5nIGlzIGNvbmZpcm1lZCB3aXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBjb25maXJtZWRcIixcbiAgfSxcbiAgYm9va2luZ0NhbmNlbGVkSW5mbzoge1xuICAgIGlkOiBcImFwcC5ib29raW5nQ2FuY2VsZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdSBjYW4gY29udGFjdCB5b3VyIGhvc3QgYW5kIGRvIG5lY2Vzc2FyeSBhcnJhbmdlbWVudHMgb3IgeW91IGNhbiBjYW5jZWwgeW91ciByZXNlcnZhdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGNhbmNlbGRcIixcbiAgfSxcbiAgYm9va2luZ0V4cGlyZWRUaXRsZToge1xuICAgIGlkOiBcImFwcC5ib29raW5nRXhwaXJlZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBib29raW5nIHJlcXVlc3QgaGFzIGV4cGlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGV4cGlyZWRcIixcbiAgfSxcbiAgYm9va2luZ0V4cGlyZWRJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdFeHBpcmVkSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJUcnkgc2VuZGluZyByZXF1ZXN0IGFnYWluIG9yIHNlbmQgYW4gaW5xdWlyeSB0byBnZXQgaW4gdG91Y2ggd2l0aCB0aGUgaG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgZXhwaXJlZFwiLFxuICB9LFxuICBnb3RvTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5nb3RvTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvIHRvIExpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHbyB0byBMaXN0aW5nXCIsXG4gIH0sXG4gIGJvb2tpbmdSZXF1ZXN0Q2FuY2VsMToge1xuICAgIGlkOiBcImFwcC5ib29raW5nUmVxdWVzdENhbmNlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tpbmcgcmVxdWVzdCBjYW5jZWxlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgcmVxdWVzdCBjYW5jZWxlZFwiLFxuICB9LFxuICBib29raW5nUmVxdWVzdENhbmNlbDI6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ1JlcXVlc3RDYW5jZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGJvb2tpbmcgcmVxdWVzdCBoYXMgYmVlbiBjYW5jZWxlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIGJvb2tpbmcgcmVxdWVzdCBoYXMgYmVlbiBjYW5jZWxlZC5cIixcbiAgfSxcbiAgaG9zdEFjdGlvbjE6IHtcbiAgICBpZDogXCJhcHAuaG9zdEFjdGlvbjFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEFjdGlvbiBCbG9jay5cIixcbiAgfSxcbiAgaG9zdEFjdGlvbjI6IHtcbiAgICBpZDogXCJhcHAuaG9zdEFjdGlvbjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ0byBib29rIGJ5IHByZS1hcHByb3ZpbmcgdGhpcyB0cmlwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBBY3Rpb24gQmxvY2suXCIsXG4gIH0sXG4gIGhvc3RBY3Rpb24zOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RBY3Rpb24zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBBY3Rpb24gQmxvY2suXCIsXG4gIH0sXG4gIGhvc3RBY3Rpb240OiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RBY3Rpb240XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwia25vdyB0aGVzZSBkYXRlcyBhcmUgYXZhaWxhYmxlIGJ5IHByZS1hcHByb3ZpbmcgdGhlbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEFjdGlvbiBCbG9jay5cIixcbiAgfSxcbiAgaG9zdFJlc3BvbnNlVGltZTE6IHtcbiAgICBpZDogXCJhcHAuaG9zdFJlc3BvbnNlVGltZTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNwb25kIHdpdGhpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgQWN0aW9uIEJsb2NrLlwiLFxuICB9LFxuICBob3N0UmVzcG9uc2VUaW1lMjoge1xuICAgIGlkOiBcImFwcC5ob3N0UmVzcG9uc2VUaW1lMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInRvIG1haW50YWluIHlvdXIgcmVzcG9uc2UgcmF0ZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEFjdGlvbiBCbG9jay5cIixcbiAgfSxcbiAgcHJlQXBwcm92ZToge1xuICAgIGlkOiBcImFwcC5wcmVBcHByb3ZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlLWFwcHJvdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmUtYXBwcm92ZVwiLFxuICB9LFxuICBndWVzdFJlcXVlc3Q6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RSZXF1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwic2VudCBhIHJlcXVlc3QgdG8gYm9va2luZyBmb3IgeW91ciBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgUmVxdWVzdFwiLFxuICB9LFxuICByZXF1ZXN0QXBwcm92ZWQ6IHtcbiAgICBpZDogXCJhcHAucmVxdWVzdEFwcHJvdmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVxdWVzdCBBcHByb3ZlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgQXBwcm92ZWRcIixcbiAgfSxcbiAgdGltZVRvRXhwaXJlOiB7XG4gICAgaWQ6IFwiYXBwLnRpbWVUb0V4cGlyZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJZb3VyIGd1ZXN0IGhhdmUgMjQgaG91cnMgdG8gcmVzcG9uZCB0byB0aGlzIG9yIGl0IHdpbGwgZ2V0IGV4cGlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaW1lIFRvIEV4cGlyZVwiLFxuICB9LFxuICBkZWNsaW5lZEluZm86IHtcbiAgICBpZDogXCJhcHAuZGVjbGluZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1ha2Ugc3VyZSB5b3VyIGNhbGVuZGFyIGlzIHVwLXRvLWRhdGUgYW5kIHRoYXQgeW91ciBsaXN0aW5nIHBhZ2UgYWNjdXJhdGVseSByZWZsZWN0cyB5b3VyIGhvdXNlIHJ1bGVzIGFuZCByZXF1aXJlbWVudHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVjbGluZWQgSW5mb1wiLFxuICB9LFxuICBib29raW5nSXNDb25maXJtZWQ6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0lzQ29uZmlybWVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyBpcyBjb25maXJtZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGlzIGNvbmZpcm1lZFwiLFxuICB9LFxuICBjb250YWN0R3Vlc3Q6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEd1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdSBjYW4gY29udGFjdCB5b3VyIGd1ZXN0IGFuZCBkbyBuZWNlc3NhcnkgYXJyYW5nZW1lbnRzIG9yIHlvdSBjYW4gY2FuY2VsLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgR3Vlc3RcIixcbiAgfSxcbiAgYm9va2luZ0lzRXhwaXJlZDoge1xuICAgIGlkOiBcImFwcC5ib29raW5nSXNFeHBpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyByZXF1ZXN0IGlzIGV4cGlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIHJlcXVlc3QgaXMgZXhwaXJlZFwiLFxuICB9LFxuICBib29raW5nSXNFeHBpcmVkMToge1xuICAgIGlkOiBcImFwcC5ib29raW5nSXNFeHBpcmVkMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImJvb2tpbmcgcmVxdWVzdCBpcyBleHBpcmVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImJvb2tpbmcgcmVxdWVzdCBpcyBleHBpcmVkLlwiLFxuICB9LFxuICBib29raW5nUmVxdWVzdENhbmNlbDM6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ1JlcXVlc3RDYW5jZTNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJib29raW5nIHJlcXVlc3QgaXMgY2FuY2VsbGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImJvb2tpbmcgcmVxdWVzdCBpcyBjYW5jZWxsZWQuXCIsXG4gIH0sXG4gIHdyaXRlTWVzc2FnZToge1xuICAgIGlkOiBcImFwcC53cml0ZU1lc3NhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXcml0ZSB5b3VyIG1lc3NhZ2UuLi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXcml0ZSB5b3VyIG1lc3NhZ2VcIixcbiAgfSxcbiAgbG9hZE1vcmVNc2c6IHtcbiAgICBpZDogXCJhcHAubG9hZE1vcmVNc2dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2FkIE1vcmUgTWVzc2FnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2FkIE1vcmUgTWVzc2FnZXNcIixcbiAgfSxcbiAgbm9JdG1lc0ZvdW5kOiB7XG4gICAgaWQ6IFwiYXBwLm5vSXRtZXNGb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIGl0ZW1zIGZvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gaXRlbXMgZm91bmRcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czE6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnF1aXJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgZWFybmVkQW1vdW50OiB7XG4gICAgaWQ6IFwiYXBwLmVhcm5lZEFtb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVhcm5lZCBBbW91bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IGRldGFpbHNcIixcbiAgfSxcbiAgbWlzc2VkRWFybmluZ3M6IHtcbiAgICBpZDogXCJhcHAubWlzc2VkRWFybmluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaXNzZWQgRWFybmluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNaXNzZWQgRWFybmluZ3NcIixcbiAgfSxcbiAgcmVmdW5kQW1vdW50OiB7XG4gICAgaWQ6IFwiYXBwLnJlZnVuZEFtb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlZnVuZCBBbW91bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWZ1bmQgQW1vdW50XCIsXG4gIH0sXG4gIGNsZWFuaW5nUHJpY2U6IHtcbiAgICBpZDogXCJhcHAuY2xlYW5pbmdQcmljZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsZWFuaW5nIFByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBkZXRhaWxzXCIsXG4gIH0sXG4gIHN1YlRvdGFsOiB7XG4gICAgaWQ6IFwiYXBwLnN1YlRvdGFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VidG90YWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IGRldGFpbHNcIixcbiAgfSxcbiAgeW91RWFybjoge1xuICAgIGlkOiBcImFwcC55b3VFYXJuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGVhcm5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IGRldGFpbHNcIixcbiAgfSxcbiAgdHJpcERldGFpbHM6IHtcbiAgICBpZDogXCJhcHAudHJpcERldGFpbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcmlwIGRldGFpbHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmlwIGRldGFpbHNcIixcbiAgfSxcbiAgbm9UaHJlYWRGb3VuZDoge1xuICAgIGlkOiBcImFwcC5ub1RocmVhZEZvdW5kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk5vIHRocmVhZCBmb3VuZCEgSWYgeW91IHRoaW5rIHNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgTWVzc2FnZVwiLFxuICB9LFxuICBkYXNoQm9hcmRIZWFkZXI6IHtcbiAgICBpZDogXCJhcHAuZGFzaEJvYXJkSGVhZGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2VsY29tZSB0b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhc2hib2FyZFwiLFxuICB9LFxuICBkYXNoQm9hcmRJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmRhc2hCb2FyZEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQ2hlY2sgeW91ciBtZXNzYWdlcywgdmlldyB1cGNvbWluZyB0cmlwIGluZm9ybWF0aW9uLCBhbmQgZmluZCB0cmF2ZWwgaW5zcGlyYXRpb24gYWxsIGZyb20geW91ciBkYXNoYm9hcmQuIEJlZm9yZSBib29raW5nIHlvdXIgZmlyc3Qgc3RheSwgbWFrZSBzdXJlIHRvOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhc2hib2FyZFwiLFxuICB9LFxuICBkYXNoQm9hcmRJbmZvMToge1xuICAgIGlkOiBcImFwcC5kYXNoQm9hcmRJbmZvMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJVcGxvYWQgYSBwaG90byBhbmQgd3JpdGUgYSBzaG9ydCBiaW8gdG8gaGVscCBob3N0cyBnZXQgdG8ga25vdyB5b3UgYmVmb3JlIGludml0aW5nIHlvdSBpbnRvIHRoZWlyIGhvbWUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGFzaGJvYXJkXCIsXG4gIH0sXG4gIGNvbXBsZXRlWW91clByb2ZpbGU6IHtcbiAgICBpZDogXCJhcHAuY29tcGxldGVZb3VyUHJvZmlsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbXBsZXRlIFlvdXIgUHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhc2hib2FyZFwiLFxuICB9LFxuICBhbGxNZXNzYWdlczoge1xuICAgIGlkOiBcImFwcC5hbGxNZXNzYWdlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFsbCBNZXNzYWdlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhc2hib2FyZFwiLFxuICB9LFxuICBoaToge1xuICAgIGlkOiBcImFwcC5oaVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSGlcIixcbiAgfSxcbiAgbGV0WW91R2V0UmVhZHk6IHtcbiAgICBpZDogXCJhcHAubGV0WW91R2V0UmVhZHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMZXTigJlzIGdldCB5b3UgcmVhZHkgdG8gYmVjb21lIGEgaG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxldCBZb3UgR2V0IFJlYWR5XCIsXG4gIH0sXG4gIGNob29zZUNhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIENhdGVnb3J5IHRvIGxpc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgQ2F0ZWdvcnkgdG8gbGlzdFwiLFxuICB9LFxuICB3aGF0S2luZE9mUGxhY2U6IHtcbiAgICBpZDogXCJhcHAud2hhdEtpbmRPZlBsYWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCBraW5kIG9mIHBsYWNlIGRvIHlvdSBoYXZlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoYXQgS2luZCBPZiBQbGFjZVwiLFxuICB9LFxuICBjaGFuZ2U6IHtcbiAgICBpZDogXCJhcHAuY2hhbmdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hhbmdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hhbmdlIExpbmtcIixcbiAgfSxcbiAgd2hhdEtpbmRPZlBsYWNlTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC53aGF0S2luZE9mUGxhY2VMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCBraW5kIG9mIHBsYWNlIGFyZSB5b3UgbGlzdGluZz9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0IEtpbmQgT2YgUGxhY2UgTGlzdGluZ1wiLFxuICB9LFxuICB3aGF0VHlwZU9mUHJvcGVydHk6IHtcbiAgICBpZDogXCJhcHAud2hhdFR5cGVPZlByb3BlcnR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCB0eXBlIG9mIHByb3BlcnR5IGlzIHRoaXM/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hhdCBUeXBlIE9mIFByb3BlcnR5XCIsXG4gIH0sXG4gIHdoYXRHdWVzdEhhdmU6IHtcbiAgICBpZDogXCJhcHAud2hhdEd1ZXN0SGF2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgd2lsbCBndWVzdHMgaGF2ZT9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0IHdpbGwgZ3Vlc3RzIGhhdmVcIixcbiAgfSxcbiAgaG93TWFueVJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlSb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IHRvdGFsIHJvb21zIGRvZXMgeW91ciBwcm9wZXJ0eSBoYXZlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBtYW55IHRvdGFsIHJvb21zIGRvZXMgeW91ciBwcm9wZXJ0eSBoYXZlP1wiLFxuICB9LFxuICBpc1BlcnNvbmFsSG9tZToge1xuICAgIGlkOiBcImFwcC5pc1BlcnNvbmFsSG9tZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklzIHRoaXMgeW91ciBwZXJzb25hbCBob21lP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklzIHRoaXMgeW91ciBwZXJzb25hbCBob21lP1wiLFxuICB9LFxuICBpc1BlcnNvbmFsSG9tZUluZm86IHtcbiAgICBpZDogXCJhcHAuaXNQZXJzb25hbEhvbWVJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkd1ZXN0cyBsaWtlIHRvIGtub3cgaWYgdGhpcyBpcyBhIHBsYWNlIHlvdSBsaXZlIGFuZCBrZWVwIHlvdXIgcGVyc29uYWwgYmVsb25naW5ncyBpbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25hbCBIb21lIEluZm9cIixcbiAgfSxcbiAgc2tpcDoge1xuICAgIGlkOiBcImFwcC5za2lwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2tpcCBub3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTa2lwIEJ1dHRvblwiLFxuICB9LFxuICBob3dNYW55R3Vlc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlHdWVzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3cgbWFueSBndWVzdHMgY2FuIHlvdXIgcGxhY2UgYWNjb21tb2RhdGU/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IG1hbnkgZ3Vlc3RzIGNhbiB5b3VyIHBsYWNlIGFjY29tbW9kYXRlP1wiLFxuICB9LFxuICBob3dNYW55QmVkczoge1xuICAgIGlkOiBcImFwcC5ob3dNYW55QmVkc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGJlZHMgY2FuIGd1ZXN0cyB1c2U/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IG1hbnkgYmVkcyBjYW4gZ3Vlc3RzIHVzZT9cIixcbiAgfSxcbiAgaG93TWFueUJlZHJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlCZWRyb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGJlZHJvb21zIGNhbiBndWVzdHMgdXNlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBtYW55IGJlZHJvb21zIGNhbiBndWVzdHMgdXNlP1wiLFxuICB9LFxuICBob3dNYW55R3Vlc3RzU3RheToge1xuICAgIGlkOiBcImFwcC5ob3dNYW55R3Vlc3RzU3RheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGd1ZXN0cyBjYW4gc3RheT9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3cgbWFueSBndWVzdHMgY2FuIHN0YXk/XCIsXG4gIH0sXG4gIGhvd01hbnlCYXRocm9vbXM6IHtcbiAgICBpZDogXCJhcHAuaG93TWFueUJhdGhyb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGJhdGhyb29tcz9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3cgbWFueSBiYXRocm9vbXM/XCIsXG4gIH0sXG4gIHdoZXJlTG9jYXRlZDoge1xuICAgIGlkOiBcImFwcC53aGVyZUxvY2F0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGVyZeKAmXMgeW91ciBwbGFjZSBsb2NhdGVkP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZXJl4oCZcyB5b3VyIHBsYWNlIGxvY2F0ZWQ/XCIsXG4gIH0sXG4gIGJhdGhyb29tOiB7XG4gICAgaWQ6IFwiYXBwLmJhdGhyb29tXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYmF0aHJvb21cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXRocm9vbVwiLFxuICB9LFxuICB5b3VyRnVsbEFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAueW91ckZ1bGxBZGRyZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBGdWxsIEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEZ1bGwgQWRkcmVzc1wiLFxuICB9LFxuICBzdHJlZXQ6IHtcbiAgICBpZDogXCJhcHAuc3RyZWV0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyZWV0IEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdHJlZXQgQWRkcmVzc1wiLFxuICB9LFxuICBidWlsZGluZ05hbWU6IHtcbiAgICBpZDogXCJhcHAuYnVpbGRpbmdOYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXB0LCBTdWl0ZSwgQmxkZy4gKG9wdGlvbmFsKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWxkaW5nIE5hbWVcIixcbiAgfSxcbiAgemlwY29kZToge1xuICAgIGlkOiBcImFwcC56aXBjb2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWklQIENvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJaSVAgQ29kZVwiLFxuICB9LFxuICBjb3VudHJ5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuY291bnRyeVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ291bnRyeSBpcyBSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvdW50cnlSZXF1aXJlZFwiLFxuICB9LFxuICBzdGF0ZVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnN0YXRlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF0ZSBpcyBSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0YXRlUmVxdWlyZWRcIixcbiAgfSxcbiAgY2l0eVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmNpdHlSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNpdHkgaXMgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjaXR5UmVxdWlyZWRcIixcbiAgfSxcbiAgc3RyZWV0UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuc3RyZWV0UmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdHJlZXQgaXMgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzdHJlZXRSZXF1aXJlZFwiLFxuICB9LFxuICB6aXBjb2RlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuemlwY29kZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWmlwIENvZGUgaXMgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ6aXBjb2RlUmVxdWlyZWRcIixcbiAgfSxcbiAgaG91c2VUeXBlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuaG91c2VUeXBlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3VzZSBUeXBlIGlzIFJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG91c2UgVHlwZSBpcyBSZXF1aXJlZFwiLFxuICB9LFxuICBzb21ldGhpbmdXZW50V3Jvbmc6IHtcbiAgICBpZDogXCJhcHAuc29tZXRoaW5nV2VudFdyb25nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV3Jvbmcgd2VudCB3cm9uZ1wiLFxuICB9LFxuICBhZG1pbkxvZ2dlZEluOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluTG9nZ2VkSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiWW91IGFyZSBsb2dnZWQgaW4gYXMgYWRtaW4sIHlvdSBjYW4ndCBwZXJmb3JtIHRoaXMgYWN0aW9uIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImFkbWluTG9nZ2VkSW5cIixcbiAgfSxcbiAgd2hhdGFtZW5pdGllczoge1xuICAgIGlkOiBcImFwcC53aGF0YW1lbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCBhbWVuaXRpZXMgZG8geW91IG9mZmVyP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFtZW5pdGllcyBIZWFkbGluZVwiLFxuICB9LFxuICBzYWZldHlhbWVuaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuc2FmZXR5YW1lbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2FmZXR5IGFtZW5pdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhZmV0eSBhbWVuaXRpZXMgSGVhZGxpbmVcIixcbiAgfSxcbiAgd2hhdFNwYWNlOiB7XG4gICAgaWQ6IFwiYXBwLndoYXRTcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgc3BhY2VzIGNhbiBndWVzdHMgdXNlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoYXQgc3BhY2VzIGNhbiBndWVzdHMgdXNlP1wiLFxuICB9LFxuICBzdGVwMUhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuc3RlcDFIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVjb21lIGEgaG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNURVAgMSBIZWFkaW5nXCIsXG4gIH0sXG4gIHN0ZXAySGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5zdGVwMkhlYWRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTVEVQIDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDIgSGVhZGluZ1wiLFxuICB9LFxuICBzdGVwM0hlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuc3RlcDNIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU1RFUCAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU1RFUCAzIEhlYWRpbmdcIixcbiAgfSxcbiAgc3RlcDFTdWJIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXAxU3ViSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXJ0IHdpdGggdGhlIGJhc2ljc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNURVAgMSBTdWIgSGVhZGluZ1wiLFxuICB9LFxuICBzdGVwMlN1YkhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuc3RlcDJTdWJIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2V0IHRoZSBzY2VuZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNURVAgMiBTdWIgSGVhZGluZ1wiLFxuICB9LFxuICBzdGVwM1N1YkhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuc3RlcDNTdWJIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR2V0IHJlYWR5IGZvciBndWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDMgU3ViIEhlYWRpbmdcIixcbiAgfSxcbiAgc3RlcDFIZWFkaW5nQ29udGVudDoge1xuICAgIGlkOiBcImFwcC5zdGVwMUhlYWRpbmdDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2F0ZWdvcnksIFN1YkNhdGVnb3J5LCAgYW5kIG1vcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDEgSGVhZGluZyBDb250ZW50XCIsXG4gIH0sXG4gIHN0ZXAySGVhZGluZ0NvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAuc3RlcDJIZWFkaW5nQ29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBob3Rvcywgc2hvcnQgZGVzY3JpcHRpb24sIHRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU1RFUCAyIEhlYWRpbmcgQ29udGVudFwiLFxuICB9LFxuICBzdGVwM0hlYWRpbmdDb250ZW50OiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXAzSGVhZGluZ0NvbnRlbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29raW5nIHNldHRpbmdzLCBjYWxlbmRhciwgcHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDMgSGVhZGluZyBDb250ZW50XCIsXG4gIH0sXG4gIG1hcFdhcm5pbmc6IHtcbiAgICBpZDogXCJhcHAubWFwV2FybmluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRyYWcgdGhlIHBpbiB0byBzZXQgeW91ciBsb2NhdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXAgV2FybmluZ1wiLFxuICB9LFxuICBtYXBTdWNjZXNzOiB7XG4gICAgaWQ6IFwiYXBwLm1hcFN1Y2Nlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHcmVhdCEgVGhhbmsgeW91IVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hcCBTdWNjZXNzXCIsXG4gIH0sXG4gIHBob3Rvczoge1xuICAgIGlkOiBcImFwcC5waG90b3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQaG90b3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQaG90b3NcIixcbiAgfSxcbiAgcGxhY2VUaXRsZToge1xuICAgIGlkOiBcImFwcC5wbGFjZVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmFtZSB5b3VyIHBsYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGl0bGVcIixcbiAgfSxcbiAgdGl0bGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC50aXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdGluZyB0aXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIHRpdGxlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAudGl0bGVSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk9vcHMhIFdlIG5lZWQgYSB0aXRsZSBmb3IgeW91ciBwbGFjZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZSBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXQgeW91ciBkZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZGVzY3JpcHRpb25SZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgZ3Vlc3RSZXF1aXJlbWVudHNUaXRsZToge1xuICAgIGlkOiBcImFwcC5ndWVzdFJlcXVpcmVtZW50c1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3IGd1ZXN0IHJlcXVpcmVtZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0IFJlcXVpcmVtZW50cyBUaXRsZVwiLFxuICB9LFxuICBndWVzdFJlcXVpcmVtZW50c0Rlc2NyaXB0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0UmVxdWlyZW1lbnRzRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiUmVxdWlyZSBhbGwgZ3Vlc3RzIHRvIHN1Ym1pdCB0aGUgZm9sbG93aW5nIGJlZm9yZSB0aGV5IGNhbiBib29rOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0IFJlcXVpcmVtZW50cyBEZXNjcmlwdGlvblwiLFxuICB9LFxuICBzZXRIb3VzZVJ1bGVzOiB7XG4gICAgaWQ6IFwiYXBwLnNldEhvdXNlUnVsZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXQgaG91c2UgcnVsZXMgZm9yIHlvdXIgZ3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG91c2UgUnVsZXNcIixcbiAgfSxcbiAgcmV2aWV3R3Vlc3RCb29rVGl0bGU6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3R3Vlc3RCb29rVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3cgZ3Vlc3RzIGJvb2s6IEluc3RhbnRseVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBndWVzdHMgYm9vazogSW5zdGFudGx5XCIsXG4gIH0sXG4gIHJldmlld0d1ZXN0Qm9va0Rlc2NyaXB0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld0d1ZXN0Qm9va0Rlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3RzIGNhbiBib29rIGF2YWlsYWJsZSBkYXlzIGluc3RhbnRseSBhcyBsb25nIGFzIHRoZXk6XCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3RzIGNhbiBib29rIGF2YWlsYWJsZVwiLFxuICB9LFxuICByZXZpZXdHdWVzdEJvb2tOb3RlOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld0d1ZXN0Qm9va05vdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiR3Vlc3RzIHdobyBkb27igJl0IG1lZXQgeW91ciByZXF1aXJlbWVudHMgbXVzdCBzZW5kIGEgcmVzZXJ2YXRpb24gcmVxdWVzdC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXcgR3Vlc3RzIE5vdGVcIixcbiAgfSxcbiAgYWR2YW5jZU5vdGljZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmFkdmFuY2VOb3RpY2VUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtdWNoIG5vdGljZSBkbyB5b3UgbmVlZCBiZWZvcmUgYSBndWVzdCBhcnJpdmVzP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkdmFuY2UgTm90aWNlIFRpdGxlXCIsXG4gIH0sXG4gIGFkdmFuY2VOb3RpY2VDaGVja0luVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuYWR2YW5jZU5vdGljZUNoZWNrSW5UaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoZW4gY2FuIGd1ZXN0cyBjaGVjayBpbj9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZHZhbmNlIE5vdGljZSBDaGVjayBJbiBUaXRsZVwiLFxuICB9LFxuICBhZHZhbmNlTm90aWNlRnJvbToge1xuICAgIGlkOiBcImFwcC5hZHZhbmNlTm90aWNlRnJvbVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZyb206XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRnJvbVwiLFxuICB9LFxuICBhZHZhbmNlTm90aWNlVG86IHtcbiAgICBpZDogXCJhcHAuYWR2YW5jZU5vdGljZVRvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG86XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9cIixcbiAgfSxcbiAgYWR2YW5jZU5vdGljZUVycm9yOiB7XG4gICAgaWQ6IFwiYXBwLmFkdmFuY2VOb3RpY2VFcnJvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZyb20gdGltZSBzaG91bGQgYmUgZWFybGllciB0aGFuIFRvIHRpbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFcnJvciBNZXNzYWdlXCIsXG4gIH0sXG4gIGFkdmFuY2VOb3RpY2VJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmFkdmFuY2VOb3RpY2VJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBpbnB1dCB2YWx1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVycm9yIE1lc3NhZ2VcIixcbiAgfSxcbiAgTWF4RGF5c05vdGljZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLk1heERheXNOb3RpY2VUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBmYXIgaW4gYWR2YW5jZSBjYW4gZ3Vlc3RzIGJvb2s/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IGZhciBpbiBhZHZhbmNlIGNhbiBndWVzdHMgYm9vaz9cIixcbiAgfSxcbiAgTWluTWF4TmlnaHRzVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuTWluTWF4TmlnaHRzVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3cgbG9uZyBjYW4gZ3Vlc3RzIHN0YXk/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IGxvbmcgY2FuIGd1ZXN0cyBzdGF5P1wiLFxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIGlkOiBcImFwcC5jYWxlbmRhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVwZGF0ZSB5b3VyIGF2YWlsYWJpbGl0eSBvbiBjYWxlbmRhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNhbGVuZGFyIHRpdGxlXCIsXG4gIH0sXG4gIHByaWNpbmc6IHtcbiAgICBpZDogXCJhcHAucHJpY2luZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhc2UgcHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwcmljaW5nIHRpdGxlXCIsXG4gIH0sXG4gIHByaWNpbmdEZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5wcmljaW5nRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGJhc2UgcHJpY2UgaXMgeW91ciBkZWZhdWx0IG5pZ2h0bHkgcmF0ZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwcmljaW5nIGRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGJhc2VQcmljZToge1xuICAgIGlkOiBcImFwcC5iYXNlUHJpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXNlIHByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFzZSBwcmljZVwiLFxuICB9LFxuICBiYXNlUHJpY2VMYWJlbDoge1xuICAgIGlkOiBcImFwcC5iYXNlUHJpY2VMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlIHBlciBuaWdodFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhc2UgcHJpY2UgTGFiZWxcIixcbiAgfSxcbiAgYmFzZVByaWNlSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5iYXNlUHJpY2VJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBCYXNlIFByaWNlLCBvbmx5IG51bWJlcnMoZWc6IDI1KSBhcmUgYWxsb3dlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhc2UgcHJpY2UgSW52YWxpZFwiLFxuICB9LFxuICBiYXNlUHJpY2VSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5iYXNlUHJpY2VSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhc2UgUHJpY2UgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXNlIFByaWNlIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIGNsZWFuaW5nUHJpY2VJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmNsZWFuaW5nUHJpY2VJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBDbGVhbmluZyBQcmljZSwgb25seSBudW1iZXJzKGVnOiAyNSkgYXJlIGFsbG93ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDbGVhbmluZyBwcmljZSBJbnZhbGlkXCIsXG4gIH0sXG4gIGN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLmN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW5jeVwiLFxuICB9LFxuICBkaXNjb3VudDoge1xuICAgIGlkOiBcImFwcC5kaXNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRpc2NvdW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2NvdW50c1wiLFxuICB9LFxuICBkaXNjb3VudExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmRpc2NvdW50TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIlIG9mZlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2NvdW50IExhYmVsXCIsXG4gIH0sXG4gIGRpc2NvdW50V2Vla2x5OiB7XG4gICAgaWQ6IFwiYXBwLmRpc2NvdW50V2Vla2x5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2Vla2x5IGRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2Vla2x5IGRpc2NvdW50XCIsXG4gIH0sXG4gIGRpc2NvdW50SW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5kaXNjb3VudEludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSW52YWxpZCBkaXNjb3VudC4gVGhlIGRpc2NvdW50IG11c3QgYmUgYmV0d2VlbiAwJSBhbmQgOTklLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkludmFsaWQgZGlzY291bnRcIixcbiAgfSxcbiAgZGlzY291bnRNb250aGx5OiB7XG4gICAgaWQ6IFwiYXBwLmRpc2NvdW50TW9udGhseVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vbnRobHkgZGlzY291bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb250aGx5IGRpc2NvdW50XCIsXG4gIH0sXG4gIHN1bW1hcnk6IHtcbiAgICBpZDogXCJhcHAuc3VtbWFyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhc2VkIG9uIHlvdXIgc2V0dGluZ3MsIGhlcmXigJlzIHdoYXQgeW91IGNvdWxkIGV4cGVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1bW1hcnkgVGl0bGVcIixcbiAgfSxcbiAgbG9jYWxMYXdzOiB7XG4gICAgaWQ6IFwiYXBwLmxvY2FsTGF3c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgbG9jYWwgbGF3cyBhbmQgdGF4ZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2NhbCBMYXdzXCIsXG4gIH0sXG4gIHNldENvdmVyUGhvdG86IHtcbiAgICBpZDogXCJhcHAuc2V0Q292ZXJQaG90b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBhIHBob3RvIGZvciBjb3ZlciBpbWFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNldENvdmVyUGhvdG9cIixcbiAgfSxcbiAgcGhvdG9zUGxhY2Vob2xkZXI6IHtcbiAgICBpZDogXCJhcHAucGhvdG9zUGxhY2Vob2xkZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGljayBoZXJlIHRvIHVwbG9hZCBwaG90b3Mgb3IgZHJhZyB0aGVtIGluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGhvdG9zIFBsYWNlaG9sZGVyXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZGVzY3JpcHRpb25MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaWJlIHRoZSBkZWNvciwgbGlnaHQsIHdoYXQncyBuZWFyYnksIGV0Yy4uLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIFBsYWNlaG9sZGVyXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uU3ViaGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvblN1YmhlYWRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdW1tYXJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gU3ViaGVhZGluZ1wiLFxuICB9LFxuICBpbnN0YW50Qm9va2luZ1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmluc3RhbnRCb29raW5nVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbmNyZWFzZSB5b3VyIGVhcm5pbmdzIHdpdGggSW5zdGFudCBCb29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBib29raW5nXCIsXG4gIH0sXG4gIGluc3RhbnRCb29raW5nSW5mbzoge1xuICAgIGlkOiBcImFwcC5pbnN0YW50Qm9va2luZ0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSW5zdGFudCBCb29rIGNhbiBnaXZlIHlvdXIgbGlzdGluZyBhbiBlZGdlLk5vdCBvbmx5IGRvIGd1ZXN0cyBwcmVmZXIgdG8gYm9vayBpbnN0YW50bHksIHdl4oCZcmUgcHJvbW90aW5nIEluc3RhbnQgQm9vayBsaXN0aW5ncyBpbiBzZWFyY2ggcmVzdWx0cy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IGJvb2tpbmdcIixcbiAgfSxcbiAgd2hvQ2FuQm9vazoge1xuICAgIGlkOiBcImFwcC53aG9DYW5Cb29rXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hvIGNhbiBib29rIGluc3RhbnRseVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgYm9va2luZ1wiLFxuICB9LFxuICB3aG9DYW5Cb29rSW5mbzoge1xuICAgIGlkOiBcImFwcC53aG9DYW5Cb29rSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJDaG9vc2Ugd2hvIGNhbiBib29rIGF2YWlsYWJsZSBkYXlzIHdpdGhvdXQgcmVxdWVzdGluZyBhcHByb3ZhbC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IGJvb2tpbmdcIixcbiAgfSxcbiAgd2hvQ2FuQm9va0luZm8xOiB7XG4gICAgaWQ6IFwiYXBwLndob0NhbkJvb2tJbmZvMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJHdWVzdHMgd2hvIG1lZXQgeW91ciByZXF1aXJlbWVudHMgYW5kIGFncmVlIHRvIHlvdXIgcnVsZXMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBib29raW5nXCIsXG4gIH0sXG4gIHdob0NhbkJvb2tJbmZvMjoge1xuICAgIGlkOiBcImFwcC53aG9DYW5Cb29rSW5mbzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbnlvbmUgZWxzZSBtdXN0IHNlbmQgYSByZXNlcnZhdGlvbiByZXF1ZXN0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgYm9va2luZ1wiLFxuICB9LFxuICB3aG9DYW5Cb29rSW5mbzM6IHtcbiAgICBpZDogXCJhcHAud2hvQ2FuQm9va0luZm8zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gb25lLiBBbGwgZ3Vlc3RzIG11c3Qgc2VuZCByZXNlcnZhdGlvbiByZXF1ZXN0cy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IGJvb2tpbmdcIixcbiAgfSxcbiAgbWF4RGF5c1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm1heERheXNUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tpbmcgV2luZG93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBXaW5kb3dcIixcbiAgfSxcbiAgZGF0ZXNEcm9wRG93bjoge1xuICAgIGlkOiBcImFwcC5kYXRlc0Ryb3BEb3duXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGF0ZXMgdW5hdmFpbGFibGUgYnkgZGVmYXVsdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgRHJvcGRvd25cIixcbiAgfSxcbiAgZGF0ZXNPcHRpb24xOiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVzT3B0aW9uMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjMgbW9udGhzIGludG8gdGhlIGZ1dHVyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgRHJvcGRvd25cIixcbiAgfSxcbiAgZGF0ZXNPcHRpb24yOiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVzT3B0aW9uMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjYgbW9udGhzIGludG8gdGhlIGZ1dHVyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgRHJvcGRvd25cIixcbiAgfSxcbiAgZGF0ZXNPcHRpb24zOiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVzT3B0aW9uM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjkgbW9udGhzIGludG8gdGhlIGZ1dHVyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgRHJvcGRvd25cIixcbiAgfSxcbiAgZGF0ZXNPcHRpb240OiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVzT3B0aW9uNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjEyIG1vbnRocyBpbnRvIHRoZSBmdXR1cmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIERyb3Bkb3duXCIsXG4gIH0sXG4gIGRhdGVzT3B0aW9uNToge1xuICAgIGlkOiBcImFwcC5kYXRlc09wdGlvbjVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbGwgZnV0dXJlIGRhdGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBEcm9wZG93blwiLFxuICB9LFxuICBzeW5jQ2FsZW5kYXJzOiB7XG4gICAgaWQ6IFwiYXBwLnN5bmNDYWxlbmRhcnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTeW5jIGNhbGVuZGFyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN5bmMgY2FsZW5kYXJzXCIsXG4gIH0sXG4gIHRyaXBMZW5ndGg6IHtcbiAgICBpZDogXCJhcHAudHJpcExlbmd0aFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyaXAgbGVuZ3RoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJpcCBsZW5ndGhcIixcbiAgfSxcbiAgdHJpcExlbmd0aEVycm9yMToge1xuICAgIGlkOiBcImFwcC50cmlwTGVuZ3RoRXJyb3IxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWluaW11bSBuaWdodHMgY2FuJ3QgYmUgaGlnaGVyIHRoYW4gbWF4aW11bSBuaWdodHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmlwIGxlbmd0aFwiLFxuICB9LFxuICB0YWJQbGFjZVR5cGU6IHtcbiAgICBpZDogXCJhcHAudGFiUGxhY2VUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxhY2UgdHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgYmF0aHM6IHtcbiAgICBpZDogXCJhcHAuYmF0aHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXRoc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgc2V0Q292ZXI6IHtcbiAgICBpZDogXCJhcHAuc2V0Q292ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXQgQ292ZXIgUGhvdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZXQgQ292ZXIgUGhvdG9cIixcbiAgfSxcbiAgdGFiRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAudGFiRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgdGFiVGl0bGU6IHtcbiAgICBpZDogXCJhcHAudGFiVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgZ3Vlc3RSZXF1aXJlbWVudHM6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RSZXF1aXJlbWVudHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdCBSZXF1aXJlbWVudHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWIgYmFyXCIsXG4gIH0sXG4gIHJldmlld0d1ZXN0Qm9vazoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdHdWVzdEJvb2tcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgR3Vlc3RCb29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICBhZHZhbmNlTm90aWNlOiB7XG4gICAgaWQ6IFwiYXBwLmFkdmFuY2VOb3RpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZHZhbmNlIE5vdGljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgYm9va2luZ1dpbmRvdzoge1xuICAgIGlkOiBcImFwcC5ib29raW5nV2luZG93XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyB3aW5kb3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWIgYmFyXCIsXG4gIH0sXG4gIG1pbk1heE5pZ2h0czoge1xuICAgIGlkOiBcImFwcC5taW5NYXhOaWdodHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaW4gTWF4IE5pZ2h0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgdGFiQ2FsZW5kYXI6IHtcbiAgICBpZDogXCJhcHAudGFiQ2FsZW5kYXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYWxlbmRhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgdGFiUHJpY2luZzoge1xuICAgIGlkOiBcImFwcC50YWJQcmljaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJpY2luZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgdGFiRGlzY291bnQ6IHtcbiAgICBpZDogXCJhcHAudGFiRGlzY291bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEaXNjb3VudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgdGFiQm9va2luZzoge1xuICAgIGlkOiBcImFwcC50YWJCb29raW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgdGFiTG9jYWxMYXdzOiB7XG4gICAgaWQ6IFwiYXBwLnRhYkxvY2FsTGF3c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvY2FsIExhd3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWIgYmFyXCIsXG4gIH0sXG4gIGhlYWRlclRleHQ6IHtcbiAgICBpZDogXCJhcHAuaGVhZGVyVGV4dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0ZXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIZWFkZXIgVGV4dFwiLFxuICB9LFxuICByZWFkeVRvUHVibGlzaDoge1xuICAgIGlkOiBcImFwcC5yZWFkeVRvUHVibGlzaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgbGlzdGluZyBpcyByZWFkeSB0byBiZSBwdWJsaXNoZWQhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdGluZyBpbmRlXCIsXG4gIH0sXG4gIGxpc3RpbmdTdWJtaXRWZXJpZmljYXRpb246IHtcbiAgICBpZDogXCJhcHAubGlzdGluZ1N1Ym1pdFZlcmlmaWNhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgbGlzdGluZyBpcyBzdWJtaXR0ZWQgZm9yIHZlcmlmaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImZvciB2ZXJpZmljYXRpb25cIixcbiAgfSxcblxuICBhZG1pbkFwcHJvdmFsOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluQXBwcm92YWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXYWl0aW5nIGZvciBhZG1pbiBhcHByb3ZhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImFkbWluIGFwcHJvdmFsXCIsXG4gIH0sXG5cbiAgaG9zdFByZXZpZXdMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RQcmV2aWV3TGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZXZpZXcgTGlzdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByZXZpZXcgTGlzdGluZ1wiLFxuICB9LFxuXG4gIHB1Ymxpc2hOb3c6IHtcbiAgICBpZDogXCJhcHAucHVibGlzaE5vd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlB1Ymxpc2ggTm93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdGluZyBpbmRleFwiLFxuICB9LFxuICBwcmV2aWV3TGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5wcmV2aWV3TGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZXZpZXcgTGlzdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgaW5kZXhcIixcbiAgfSxcbiAgbGlzdGluZ1B1Ymxpc2hlZDoge1xuICAgIGlkOiBcImFwcC5saXN0aW5nUHVibGlzaGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBsaXN0aW5nIGlzIHJlYWR5IHRvIGJlIHB1Ymxpc2hlZCFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIGluZGV4XCIsXG4gIH0sXG4gIHVuUHVibGlzaE5vdzoge1xuICAgIGlkOiBcImFwcC51blB1Ymxpc2hOb3dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVblB1Ymxpc2ggTm93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdGluZyBpbmRleFwiLFxuICB9LFxuICBzaWduVXBUaXRsZToge1xuICAgIGlkOiBcImFwcC5zaWduVXBUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5ldyBVc2VyIFJlZ2lzdHJhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ251cCBUaXRsZVwiLFxuICB9LFxuICBwYW5lbFJlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnBhbmVsUmVzZXJ2YXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25zOiB7XG4gICAgaWQ6IFwiYXBwLnRyYW5zYWN0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyYW5zYWN0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYW5zYWN0aW9uc1wiLFxuICB9LFxuICBub3RGb3VuZFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vdEZvdW5kVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVaC1vaCFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgbm90Rm91bmRTdWJUaXRsZToge1xuICAgIGlkOiBcImFwcC5ub3RGb3VuZFN1YlRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2UgY2FuJ3Qgc2VlbSB0byBmaW5kIHRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGZvciFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgZXJyb3JDb2RlOiB7XG4gICAgaWQ6IFwiYXBwLmVycm9yQ29kZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVycm9yIGNvZGU6IDQwNFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCBGb3VuZFwiLFxuICB9LFxuICBsaW5rc1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmxpbmtzVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZXJlIGFyZSBzb21lIGhlbHBmdWwgbGlua3MgaW5zdGVhZDpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgaG9zdGluZ09uOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RpbmdPblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3Rpbmcgb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgcGFnZUVycm9yOiB7XG4gICAgaWQ6IFwiYXBwLnBhZ2VFcnJvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVycm9yXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZSBFcnJvclwiLFxuICB9LFxuICBwYWdlRXJyb3JJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnBhZ2VFcnJvckluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb3JyeSwgYSBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBvbiB0aGlzIHBhZ2UuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZSBFcnJvclwiLFxuICB9LFxuICBtZXNzYWdlU3RhdHVzMjoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZSBBcHByb3ZlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXMzOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXMzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVjbGluZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1c1wiLFxuICB9LFxuICBtZXNzYWdlU3RhdHVzNDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcHJvdmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czU6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQZW5kaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czY6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsZWQgYnkgaG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXM3OiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXM3XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsbGVkIGJ5IGd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czg6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBcHByb3ZlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXM5OiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXM5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXhwaXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXMxMDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzMTBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1ZXN0IHRvIGJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1c1wiLFxuICB9LFxuICBwYW5lbEhlYWRlcjE6IHtcbiAgICBpZDogXCJhcHAucGFuZWxIZWFkZXIxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW4gcHJvZ3Jlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYW5lbCBIZWFkZXJcIixcbiAgfSxcbiAgcGFuZWxIZWFkZXIyOiB7XG4gICAgaWQ6IFwiYXBwLnBhbmVsSGVhZGVyMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbXBsZXRlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhbmVsIEhlYWRlclwiLFxuICB9LFxuICBtZXNzYWdlU3RhdHVzMTE6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czExXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsbGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZXNOZXc6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZXNOZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOZXdcIixcbiAgfSxcbiAgZmFjZWJvb2tMb2dpbjoge1xuICAgIGlkOiBcImFwcC5mYWNlYm9va0xvZ2luXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGludWUgd2l0aCBGYWNlYm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRpbnVlIHdpdGggRmFjZWJvb2tcIixcbiAgfSxcbiAgZ29vZ2xlTG9naW46IHtcbiAgICBpZDogXCJhcHAuZ29vZ2xlTG9naW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250aW51ZSB3aXRoIEdvb2dsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRpbnVlIHdpdGggR29vZ2xlXCIsXG4gIH0sXG4gIHJldmlld1RvV3JpdGU6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3VG9Xcml0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlld3MgdG8gV3JpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdzIFBhbmVsXCIsXG4gIH0sXG4gIGNhbmNlbGxhdGlvbk5vdGU6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uTm90ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkEgcGVyc29uYWwgbm90ZSBjYW4gaGVscFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbiBOb3Rlc1wiLFxuICB9LFxuICBjYW5jZWxsYXRpb25Ob3RlRm9ySG9zdDoge1xuICAgIGlkOiBcImFwcC5jYW5jZWxsYXRpb25Ob3RlRm9ySG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInVuZGVyc3RhbmQgd2h5IHlvdSBjYW4ndCBob3N0IHRoZW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsYXRpb24gTm90ZXNcIixcbiAgfSxcbiAgc2F2ZUFuZENvbnRpbnVlOiB7XG4gICAgaWQ6IFwiYXBwLnNhdmVBbmRDb250aW51ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhdmUgJiBDb250aW51ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmUgJiBDb250aW51ZVwiLFxuICB9LFxuICBzYXZlQW5kRXhpdDoge1xuICAgIGlkOiBcImFwcC5zYXZlQW5kRXhpdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhdmUgYW5kIEV4aXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYXZlIGFuZCBFeGl0XCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uQ2FuY2VsOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uQ2FuY2VsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhlIHJlc2VydmF0aW9uIHdpbGwgYmUgY2FuY2VsbGVkIGltbWVkaWF0ZWx5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIHlvdXIgdHJpcFwiLFxuICB9LFxuICBub25SZWZ1bmRhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vblJlZnVuZGFibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb24tUmVmdW5kYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbCB5b3VyIHRyaXBcIixcbiAgfSxcbiAgcmVmdW5kYWJsZToge1xuICAgIGlkOiBcImFwcC5yZWZ1bmRhYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVmdW5kYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbCB5b3VyIHRyaXBcIixcbiAgfSxcbiAgcmVmdW5kQ29zdDoge1xuICAgIGlkOiBcImFwcC5yZWZ1bmRDb3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IHdpbGwgYmUgcmVmdW5kZWQgdGhlIGFib3ZlIGNvc3QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIHlvdXIgdHJpcFwiLFxuICB9LFxuICBrZWVwUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAua2VlcFJlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiS2VlcCByZXNlcnZhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIktlZXAgcmVzZXJ2YXRpb25cIixcbiAgfSxcbiAgY2FuY2VsWW91clJlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbFlvdXJSZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbCB5b3VyIHJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIHlvdXIgcmVzZXJ2YXRpb25cIixcbiAgfSxcbiAgY2xlYW5pbmdNaW51c1NlcnZpY2VGZWU6IHtcbiAgICBpZDogXCJhcHAuY2xlYW5pbmdNaW51c1NlcnZpY2VGZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJjbGVhbmluZyBmZWVzLCBtaW51cyBzZXJ2aWNlIGZlZXMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2xlYW5pbmcgZmVlIGFuZCBzZXJ2aWNlIGZlZVwiLFxuICB9LFxuICBlYXJuaW5nczoge1xuICAgIGlkOiBcImFwcC5lYXJuaW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVhcm5pbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRWFybmluZ3NcIixcbiAgfSxcbiAgY2xlYW5pbmdQbHVzU2VydmljZUZlZToge1xuICAgIGlkOiBcImFwcC5jbGVhbmluZ1BsdXNTZXJ2aWNlRmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwicGx1cyBjbGVhbmluZyBmZWVzLCBtaW51cyBob3N0IHNlcnZpY2UgZmVlcy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwbHVzIGNsZWFuaW5nIGZlZXMsIHBsdXMgaG9zdCBzZXJ2aWNlIGZlZXMuXCIsXG4gIH0sXG4gIHdpbGxCZVJlZnVuZDoge1xuICAgIGlkOiBcImFwcC53aWxsQmVSZWZ1bmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ3aWxsIGJlIHJlZnVuZGVkIHRoZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndpbGwgYmUgcmVmdW5kZWQgdGhlXCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uQ29zdDoge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbkNvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJyZXNlcnZhdGlvbiBjb3N0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc2VydmF0aW9uIGNvc3RcIixcbiAgfSxcbiAgY2FuY2VsWW91clRyaXA6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsWW91clRyaXBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWwgeW91ciB0cmlwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIHlvdXIgVHJpcFwiLFxuICB9LFxuICBjb25zaWRlcjoge1xuICAgIGlkOiBcImFwcC5jb25zaWRlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbnNpZGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29uc2lkZXJcIixcbiAgfSxcbiAgdHJpcEJlZm9yZUNhbmNlbGluZzoge1xuICAgIGlkOiBcImFwcC50cmlwQmVmb3JlQ2FuY2VsaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwidHJpcCBiZWZvcmUgY2FuY2VsaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJpcCBiZWZvcmUgY2FuY2VsaW5nXCIsXG4gIH0sXG4gIGNhbmNlbGxpbmdJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxpbmdJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNhbmNlbGxpbmcgYSBndWVzdCdzIHJlc2VydmF0aW9uIGNhbiBkaXNydXB0IHRoZWlyIHBsYW5zIGFuZCBoYXZlIHNlcmlvdXMgaW1wbGljYXRpb25zIG9uIHRoZWlyIHRyaXAuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJpcCBiZWZvcmUgY2FuY2VsaW5nXCIsXG4gIH0sXG4gIHN0YXJ0ZWQ6IHtcbiAgICBpZDogXCJhcHAuc3RhcnRlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXJ0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGFydGVkXCIsXG4gIH0sXG4gIHN0YXJ0SW46IHtcbiAgICBpZDogXCJhcHAuc3RhcnRJblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXJ0cyBpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0cyBpblwiLFxuICB9LFxuICB0cmF2ZWxpbmdXaXRoOiB7XG4gICAgaWQ6IFwiYXBwLnRyYXZlbGluZ1dpdGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcmF2ZWxsaW5nIFdpdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmF2ZWxpbmcgV2l0aFwiLFxuICB9LFxuICBuZWVkVG9DYW5jZWw6IHtcbiAgICBpZDogXCJhcHAubmVlZFRvQ2FuY2VsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwid2h5IHlvdSBuZWVkIHRvIGNhbmNlbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeSB5b3UgbmVlZCB0byBjYW5jZWxcIixcbiAgfSxcbiAgc3RheWluZ0Zvcjoge1xuICAgIGlkOiBcImFwcC5zdGF5aW5nRm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RheWluZyBmb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF5aW5nIGZvclwiLFxuICB9LFxuICBwcm9wZXJ0eUxvY2F0ZWQ6IHtcbiAgICBpZDogXCJhcHAucHJvcGVydHlMb2NhdGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwicHJvcGVydHkgaXMgbG9jYXRlZCBpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb3BlcnR5IGlzIGxvY2F0ZWQgaW5cIixcbiAgfSxcbiAgcmVzcG9uc2VGcm9tOiB7XG4gICAgaWQ6IFwiYXBwLnJlc3BvbnNlRnJvbVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3BvbnNlIGZyb21cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNwb25zZSBmcm9tXCIsXG4gIH0sXG4gIHNhdmluZ0J1dHRvbjoge1xuICAgIGlkOiBcImFwcC5zYXZpbmdCdXR0b25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTYXZpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYXZpbmcgQnV0dG9uXCIsXG4gIH0sXG4gIG5pZ2h0OiB7XG4gICAgaWQ6IFwiYXBwLm5pZ2h0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwibmlnaHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCaWxsIERldGFpbHNcIixcbiAgfSxcbiAgbWluaW11bVN0YXk6IHtcbiAgICBpZDogXCJhcHAubWluaW11bVN0YXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJtaW5pbXVtIHN0YXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNaW5pbXVtIHN0YXlcIixcbiAgfSxcbiAgbWluaW11bU5pZ2h0U3RheToge1xuICAgIGlkOiBcImFwcC5taW5pbXVtTmlnaHRTdGF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWluaW11bSBzdGF5IGlzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWluaW11bSBzdGF5XCIsXG4gIH0sXG4gIG1heGltdW1OaWdodFN0YXk6IHtcbiAgICBpZDogXCJhcHAubWF4aW11bU5pZ2h0U3RheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIm1heGltdW0gc3RheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1heGltdW0gc3RheVwiLFxuICB9LFxuICByZXZpZXc6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpY2F0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZlcmlmaWNhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZmljYXRpb25zXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbjoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWZXJpZmljYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZmljYXRpb25cIixcbiAgfSxcbiAgZ3Vlc3RDYXBjaXR5OiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0Q2FwY2l0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3RcIixcbiAgfSxcbiAgZ3Vlc3RzQ2FwY2l0eToge1xuICAgIGlkOiBcImFwcC5ndWVzdHNDYXBjaXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiZ3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3RzXCIsXG4gIH0sXG4gIG1vbnRobHlEaXNjb3VudDoge1xuICAgIGlkOiBcImFwcC5tb250aGx5RGlzY291bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJtb250aGx5IHByaWNlIGRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9udGhseSBEaXNjb3VudFwiLFxuICB9LFxuICB3ZWVrbHlEaXNjb3VudDoge1xuICAgIGlkOiBcImFwcC53ZWVrbHlEaXNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIndlZWtseSBwcmljZSBkaXNjb3VudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlZWtseSBEaXNjb3VudFwiLFxuICB9LFxuICBmbGV4aWJsZUNoZWNrSW46IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVDaGVja0luXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmxleGlibGUgY2hlY2sgaW4gdGltZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlIGNoZWNrIGluIHRpbWVcIixcbiAgfSxcbiAgY2FuY2VsbGF0aW9uTm90ZUZvckd1ZXN0OiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvbk5vdGVGb3JHdWVzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInVuZGVyc3RhbmQgd2h5IHlvdSB3YW50IHRvIGNhbmNlbCB5b3VyIHJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIG5vdGVzIGZvdCBndWVzdFwiLFxuICB9LFxuICBob3dNYW55ZGF5OiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlkYXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJkYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkYXlcIixcbiAgfSxcbiAgaG93TWFueWRheXM6IHtcbiAgICBpZDogXCJhcHAuaG93TWFueWRheXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJkYXlzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGF5c1wiLFxuICB9LFxuICBob3dNYW55R3Vlc3Q6IHtcbiAgICBpZDogXCJhcHAuaG93TWFueUd1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3RcIixcbiAgfSxcbiAgcmV2aWV3Rm9yOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld0ZvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlldyBmb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXcgZm9yXCIsXG4gIH0sXG4gIHlvdXI6IHtcbiAgICBpZDogXCJhcHAueW91clwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyXCIsXG4gIH0sXG4gIGNob29zZUNhbmNlbGxhdGlvblBvbGljeToge1xuICAgIGlkOiBcImFwcC5jaG9vc2VDYW5jZWxsYXRpb25Qb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsYXRpb24gUG9saWN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIFBvbGljeVwiLFxuICB9LFxuICBwZW5kaW5nUGF5b3V0czoge1xuICAgIGlkOiBcImFwcC5wZW5kaW5nUGF5b3V0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBlbmRpbmcgUGF5b3V0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlbmRpbmcgUGF5b3V0c1wiLFxuICB9LFxuICBhbGxQYXlvdXRNZXRob2Q6IHtcbiAgICBpZDogXCJhcHAuYWxsUGF5b3V0TWV0aG9kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxsIHBheW91dCBtZXRob2RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsIHBheW91dCBtZXRob2RzXCIsXG4gIH0sXG4gIGluYm94Q29tcGxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLmluYm94Q29tcGxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29tcGxldGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXMgLSBJbmJveCBJdGVtXCIsXG4gIH0sXG4gIGxvZ2luQ29uZmlybWF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ2luQ29uZmlybWF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlNvcnJ5LCB5b3UgbXVzdCBsb2dpbiB0byBjb25maXJtIHlvdXIgZW1haWwuIFBsZWFzZSBsb2dpbiBhbmQgdHJ5IGNsaWNraW5nIHRoZSBsaW5rIGZyb20geW91ciBlbWFpbCBhZ2FpbiFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dpbiBjb25maXJtYXRpb25cIixcbiAgfSxcbiAgdXBjb21pbmdSZXNlcnZhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAudXBjb21pbmdSZXNlcnZhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVcGNvbWluZyBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGNvbWluZyBSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgcHJldmlvdXNSZXNlcnZhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAucHJldmlvdXNSZXNlcnZhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmV2aW91cyBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmV2aW91cyBSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgdXBjb21pbmdUcmlwczoge1xuICAgIGlkOiBcImFwcC51cGNvbWluZ1RyaXBzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXBjb21pbmcgVHJpcHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGNvbWluZyBUcmlwc1wiLFxuICB9LFxuICBwcmV2aW91c1RyaXBzOiB7XG4gICAgaWQ6IFwiYXBwLnByZXZpb3VzVHJpcHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmV2aW91cyBUcmlwc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByZXZpb3VzIFRyaXBzXCIsXG4gIH0sXG4gIG5vVXBjb21pbmdSZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5ub1VwY29taW5nUmVzZXJ2YXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgdXBjb21pbmcgcmVzZXJ2YXRpb25zIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm5vVXBjb21pbmdSZXNlcnZhdGlvblwiLFxuICB9LFxuICBub1ByZXZpb3VzUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAubm9QcmV2aW91c1Jlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgYW55IHByZXZpb3VzIHJlc2VydmF0aW9ucyFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJub1ByZXZpb3VzUmVzZXJ2YXRpb25cIixcbiAgfSxcbiAgbm9VcGNvbWluZ1RyaXBzOiB7XG4gICAgaWQ6IFwiYXBwLm5vVXBjb21pbmdUcmlwc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIGFueSB1cGNvbWluZyB0cmlwcyFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJub1VwY29taW5nVHJpcHNcIixcbiAgfSxcbiAgbm9QcmV2aW91c1RyaXBzOiB7XG4gICAgaWQ6IFwiYXBwLm5vUHJldmlvdXNUcmlwc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIGFueSBwcmV2aW91cyB0cmlwcyFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJub1ByZXZpb3VzVHJpcHNcIixcbiAgfSxcbiAgcGF5Tm93OiB7XG4gICAgaWQ6IFwiYXBwLnBheW5vd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheSBub3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXkgbm93XCIsXG4gIH0sXG4gIGNyZWRpdENhcmQ6IHtcbiAgICBpZDogXCJhcHAuY3JlZGl0Q2FyZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNyZWRpdCBDYXJkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3JlZGl0IENhcmRcIixcbiAgfSxcbiAgcGF5UGFsOiB7XG4gICAgaWQ6IFwiYXBwLnBheVBhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheSBQYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlQYWxcIixcbiAgfSxcbiAgZnVsbE5hbWU6IHtcbiAgICBpZDogXCJhcHAuZnVsbE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGdWxsIE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJmdWxsTmFtZVwiLFxuICB9LFxuICBjYXJkTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmNhcmROdW1iZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDcmVkaXQgQ2FyZCBOdW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjYXJkTnVtYmVyXCIsXG4gIH0sXG4gIGN2djoge1xuICAgIGlkOiBcImFwcC5jdnZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDVlZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjdnZcIixcbiAgfSxcbiAgZXhwaXJ5RGF0ZToge1xuICAgIGlkOiBcImFwcC5leHBpcnlEYXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9udGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJleHBpcnlEYXRlXCIsXG4gIH0sXG4gIGV4cGlyeVllYXI6IHtcbiAgICBpZDogXCJhcHAuZXhwaXJ5WWVhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlllYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJleHBpcnlZZWFyXCIsXG4gIH0sXG4gIGNhcmRFeHBpcmVzOiB7XG4gICAgaWQ6IFwiYXBwLkV4cGlyZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeHBpcmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwaXJlc1wiLFxuICB9LFxuICByZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5yZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIipSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIipSZXF1aXJlZFwiLFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIqSW52YWxpZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIipJbnZhbGlkXCIsXG4gIH0sXG4gIHBheW91dEZpcnN0TmFtZToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRGaXJzdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvdW50IGhvbGRlciBmaXJzdCBuYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0Rmlyc3ROYW1lXCIsXG4gIH0sXG4gIHBheW91dExhc3ROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dExhc3ROYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudCBob2xkZXIgbGFzdCBuYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0TGFzdE5hbWVcIixcbiAgfSxcbiAgcGF5b3V0Um91dGluZzoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRSb3V0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUm91dGluZyBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRSb3V0aW5nXCIsXG4gIH0sXG4gIGFjY291bnROdW1iZXI6IHtcbiAgICBpZDogXCJhcHAuYWNjb3VudE51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjY291bnQgbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYWNjb3VudE51bWJlclwiLFxuICB9LFxuICBjb25maXJtQWNjb3VudE51bWJlcjoge1xuICAgIGlkOiBcImFwcC5jb25maXJtQWNjb3VudE51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm0gYWNjb3VudCBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtQWNjb3VudE51bWJlclwiLFxuICB9LFxuICBzc240RGlnaXRzOiB7XG4gICAgaWQ6IFwiYXBwLnNzbjREaWdpdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTU04gbGFzdCA0IGRpZ2l0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNzbjREaWdpdHNcIixcbiAgfSxcbiAgcGF5b3V0Rmlyc3ROYW1lUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0Rmlyc3ROYW1lUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaXJzdCBuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0Rmlyc3ROYW1lUmVxdWlyZWRcIixcbiAgfSxcbiAgcGF5b3V0TGFzdE5hbWVSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRMYXN0TmFtZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCBuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0TGFzdE5hbWVSZXF1aXJlZFwiLFxuICB9LFxuICBwYXlvdXRSb3V0aW5nUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0Um91dGluZ1JlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUm91dGluZyBudW1iZXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRSb3V0aW5nUmVxdWlyZWRcIixcbiAgfSxcbiAgcGF5b3V0Um91dGluZ0ludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0Um91dGluZ0ludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIHJvdXRpbmcgbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0Um91dGluZ0ludmFsaWRcIixcbiAgfSxcbiAgYWNjb3VudE51bWJlclJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmFjY291bnROdW1iZXJSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjY291bnQgbnVtYmVyIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYWNjb3VudE51bWJlclJlcXVpcmVkXCIsXG4gIH0sXG4gIGFjY291bnROdW1iZXJJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmFjY291bnROdW1iZXJJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBhY2NvdW50IG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImFjY291bnROdW1iZXJJbnZhbGlkXCIsXG4gIH0sXG4gIGNvbmZpcm1BY2NvdW50TnVtYmVyUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybUFjY291bnROdW1iZXJSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm0gYWNjb3VudCBudW1iZXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtQWNjb3VudE51bWJlclJlcXVpcmVkXCIsXG4gIH0sXG4gIGNvbmZpcm1BY2NvdW50TnVtYmVySW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5jb25maXJtQWNjb3VudE51bWJlckludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIGNvbmZpcm0gYWNjb3VudCBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtQWNjb3VudE51bWJlckludmFsaWRcIixcbiAgfSxcbiAgY29uZmlybUFjY291bnROdW1iZXJNaXNtYXRjaDoge1xuICAgIGlkOiBcImFwcC5jb25maXJtQWNjb3VudE51bWJlck1pc21hdGNoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudCBudW1iZXIgbWlzbWF0Y2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtQWNjb3VudE51bWJlck1pc21hdGNoXCIsXG4gIH0sXG4gIHNzbjREaWdpdHNSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5zc240RGlnaXRzUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTU04gbnVtYmVyIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwic3NuNERpZ2l0c1JlcXVpcmVkXCIsXG4gIH0sXG4gIHNzbjREaWdpdHNJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLnNzbjREaWdpdHNJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBTU04gbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwic3NuNERpZ2l0c0ludmFsaWRcIixcbiAgfSxcbiAgdmVyaWZpZWRCeToge1xuICAgIGlkOiBcImFwcC52ZXJpZmllZEJ5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZpZWQgQnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ2ZXJpZmllZEJ5XCIsXG4gIH0sXG4gIHNhdmVkOiB7XG4gICAgaWQ6IFwiYXBwLnNhdmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzYXZlZFwiLFxuICB9LFxuICB3aXNoTGlzdDoge1xuICAgIGlkOiBcImFwcC53aXNoTGlzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldpc2ggTGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndpc2hMaXN0XCIsXG4gIH0sXG4gIHdpc2hMaXN0czoge1xuICAgIGlkOiBcImFwcC53aXNoTGlzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaXNoIExpc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2lzaExpc3RzXCIsXG4gIH0sXG4gIGNyZWF0ZVdpc2hMaXN0OiB7XG4gICAgaWQ6IFwiYXBwLmNyZWF0ZVdpc2hMaXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3JlYXRlIFdpc2ggTGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNyZWF0ZVdpc2hMaXN0XCIsXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBpZDogXCJhcHAubGlzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJsaXN0XCIsXG4gIH0sXG4gIGxpc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJsaXN0c1wiLFxuICB9LFxuICB5b3VyTGlzdHM6IHtcbiAgICBpZDogXCJhcHAueW91ckxpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBsaXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInlvdXJMaXN0c1wiLFxuICB9LFxuICBob21lczoge1xuICAgIGlkOiBcImFwcC5ob21lc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaG9tZXNcIixcbiAgfSxcbiAgbmFtZVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLm5hbWVSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOYW1lIFJlcXVpcmVkXCIsXG4gIH0sXG4gIHByaXZhY3lTZXR0aW5nczoge1xuICAgIGlkOiBcImFwcC5wcml2YWN5U2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcml2YWN5IFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpdmFjeSBTZXR0aW5nc1wiLFxuICB9LFxuICB3aXNoTGlzdEFkZGVkOiB7XG4gICAgaWQ6IFwiYXBwLndpc2hMaXN0QWRkZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaXNoIGxpc3QgYWRkZWQgc3VjY2Vzc2Z1bGx5LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldpc2ggbGlzdCBhZGRlZFwiLFxuICB9LFxuICB3aXNoTGlzdFVwZGF0ZWQ6IHtcbiAgICBpZDogXCJhcHAud2lzaExpc3RVcGRhdGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2lzaCBsaXN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldpc2ggbGlzdCB1cGRhdGVkXCIsXG4gIH0sXG4gIGVkaXRXaXNoTGlzdDoge1xuICAgIGlkOiBcImFwcC5lZGl0V2lzaExpc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IFdpc2ggTGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVkaXRXaXNoTGlzdFwiLFxuICB9LFxuICB5b3VySG9tZXM6IHtcbiAgICBpZDogXCJhcHAueW91ckhvbWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBIb21lc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImhveW91ckhvbWVzbWVzXCIsXG4gIH0sXG4gIGRlbGV0ZVdpc2hMaXN0OiB7XG4gICAgaWQ6IFwiYXBwLmRlbGV0ZVdpc2hMaXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVsZXRlIHRoaXMgbGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlbGV0ZVdpc2hMaXN0XCIsXG4gIH0sXG4gIG5vV2lzaGxpc3RzOiB7XG4gICAgaWQ6IFwiYXBwLm5vV2lzaGxpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU29ycnksIHlvdSBkb24ndCBoYXZlIGFueSBob21lcyB3aXNobGlzdGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm5vV2lzaGxpc3RzXCIsXG4gIH0sXG4gIHB1YmxpYzoge1xuICAgIGlkOiBcImFwcC5wdWJsaWNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQdWJsaWNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwdWJsaWNcIixcbiAgfSxcbiAgcHJpdmF0ZToge1xuICAgIGlkOiBcImFwcC5wcml2YXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJpdmF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInByaXZhdGVcIixcbiAgfSxcbiAgZ29Ub0FsbExpc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmdvVG9BbGxMaXN0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvIHRvIEFsbCBMaXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdvIHRvIEFsbCBMaXN0c1wiLFxuICB9LFxuICBub1dpc2hsaXN0c0hvbWVzOiB7XG4gICAgaWQ6IFwiYXBwLm5vV2lzaGxpc3RzSG9tZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb3JyeSwgWW91IGRvbid0IGhhdmUgYW55IHdpc2hsaXN0IGhvbWVzIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm5vV2lzaGxpc3RzSG9tZXNcIixcbiAgfSxcbiAgYXJlWW91U3VyZURlbGV0ZVdpc2hMaXN0OiB7XG4gICAgaWQ6IFwiYXBwLmFyZVlvdVN1cmVEZWxldGVXaXNoTGlzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcz9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJhcmVZb3VTdXJlRGVsZXRlV2lzaExpc3RcIixcbiAgfSxcbiAgY29uZmlybURlbGV0ZToge1xuICAgIGlkOiBcImFwcC5jb25maXJtRGVsZXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uZmlybSBEZWxldGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtRGVsZXRlXCIsXG4gIH0sXG4gIHNpbWlsYXJMaXN0aW5nczoge1xuICAgIGlkOiBcImFwcC5zaW1pbGFyTGlzdGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaW1pbGFyIExpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2ltaWxhckxpc3RpbmdzXCIsXG4gIH0sXG4gIG92ZXJ2aWV3OiB7XG4gICAgaWQ6IFwiYXBwLm92ZXJ2aWV3XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3ZlcnZpZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPdmVydmlld1wiLFxuICB9LFxuICB0aGVIb3N0OiB7XG4gICAgaWQ6IFwiYXBwLnRoZUhvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGUgSG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBIb3N0XCIsXG4gIH0sXG5cbiAgLy9JRCB2ZXJpZmljYXRpb25cblxuICBkb2N1bWVudHZlcmlmaWNhaXRvbjoge1xuICAgIGlkOiBcImFwcC5kb2N1bWVudHZlcmlmaWNhaXRvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRvY3VtZW50IFZlcmlmaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRvY3VtZW50dmVyaWZpY2FpdG9uXCIsXG4gIH0sXG4gIGRvY3VtZW50dmVyaWZpZWQ6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnR2ZXJpZmllZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRvY3VtZW50cyB2ZXJpZmllZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRvY3VtZW50cyB2ZXJpZmllZFwiLFxuICB9LFxuXG4gIHZlcmlmaWNhdGlvbmRvY3VtZW50OiB7XG4gICAgaWQ6IFwiYXBwLnZlcmlmaWNhdGlvbmRvY3VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG9jdW1lbnRzIFZlcmlmaWVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwidmVyaWZpY2F0aW9uZG9jdW1lbnRcIixcbiAgfSxcblxuICBkb2N1bWVudHZlcmlmaWNhaXRvbkRldGFpbHM6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnR2ZXJpZmljYWl0b25EZXRhaWxzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBkb2N1bWVudCBoYXZlIGJlZW4gdmVyaWZpZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkb2N1bWVudHZlcmlmaWNhaXRvbkRldGFpbHNcIixcbiAgfSxcblxuICBkb2N1bWVudEFwcHJvdmVSZWplY3RNZXNzYWdlOiB7XG4gICAgaWQ6IFwiYXBwLmRvY3VtZW50QXBwcm92ZVJlamVjdE1lc3NhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUeXBlIFlvdXIgTWVzc2FnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRvY3VtZW50QXBwcm92ZVJlamVjdE1lc3NhZ2VcIixcbiAgfSxcbiAgZG9jdW1lbnRBcHByb3ZlOiB7XG4gICAgaWQ6IFwiYXBwLmRvY3VtZW50QXBwcm92ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcHJvdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkb2N1bWVudEFwcHJvdmVcIixcbiAgfSxcbiAgZG9jdW1lbnRSZWplY3Q6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRSZWplY3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWplY3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkb2N1bWVudFJlamVjdFwiLFxuICB9LFxuXG4gIGRvY3VtZW50QXBwUmVqUmVxdXJpZWQ6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRBcHBSZWpSZXF1cmllZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsZWFzZSBGaWxsIFJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZG9jdW1lbnRBcHBSZWpSZXF1cmllZFwiLFxuICB9LFxuICBkb2N1bWVudFVwbG9hZFBsYWNlaG9sZGVyOiB7XG4gICAgaWQ6IFwiYXBwLmRvY3VtZW50VXBsb2FkUGxhY2Vob2xkZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGljayBoZXJlIHRvIHVwbG9hZCBkb2N1bWVudCBvciBkcmFnIHRoZW0gaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEb2N1bWVudCBVcGxvYWQgUGxhY2Vob2xkZXJcIixcbiAgfSxcbiAgZG9jdW1lbnRWZXJpZmljYWl0b25JbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmRvY3VtZW50VmVyaWZpY2FpdG9uSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJQbGVhc2UgdXBsb2FkIHlvdXIgZG9jdW1lbnRzIGZvciBJRCB2ZXJpZmljYXRpb24uIEVnOiBQYXNzcG9ydCwgRHJpdmluZyBMaWNlbnNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRG9jdW1lbnQgVmVyaWZpY2F0aW9uIEluZm9cIixcbiAgfSxcbiAgc2VhcmNoQXNJTW92ZToge1xuICAgIGlkOiBcImFwcC5zZWFyY2hBc0lNb3ZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VhcmNoIGFzIEkgbW92ZSB0aGUgbWFwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VhcmNoIGFzIEkgbW92ZSB0aGUgbWFwXCIsXG4gIH0sXG4gIENvbnRhY3RNZXNzYWdlOiB7XG4gICAgaWQ6IFwiYXBwLkNvbnRhY3RNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3RNZXNzYWdlXCIsXG4gIH0sXG4gIGNvbnRhY3RGb3JtOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RGb3JtXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGFjdCBVc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbnRhY3RGb3JtXCIsXG4gIH0sXG4gIE5hbWVpbmNvbnRhY3Q6IHtcbiAgICBpZDogXCJhcHAuTmFtZWluY29udGFjdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOYW1laW5jb250YWN0XCIsXG4gIH0sXG4gIHJlY2FwdGNoYVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnJlY2FwdGNoYVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVjYXB0Y2hhIFJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwicmVjYXB0Y2hhUmVxdWlyZWRcIixcbiAgfSxcbiAgc2VuZG1haWw6IHtcbiAgICBpZDogXCJhcHAuc2VuZG1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZFwiLFxuICB9LFxuICBuYW1lWW91ckxpc3Q6IHtcbiAgICBpZDogXCJhcHAubmFtZVlvdXJMaXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmFtZSB5b3VyIGxpc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0IE5hbWVcIixcbiAgfSxcbiAgY3JlYXRlQnV0dG9uOiB7XG4gICAgaWQ6IFwiYXBwLmNyZWF0ZUJ1dHRvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNyZWF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldpc2ggbGlzdCBidXR0b25cIixcbiAgfSxcbiAgZmxleGlibGVDaGVja091dDoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZUNoZWNrT3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmxleGlibGUgY2hlY2sgb3V0IHRpbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZSBjaGVjayBvdXQgdGltZVwiLFxuICB9LFxuICBoZWxwRmlyc3RUaXRsZToge1xuICAgIGlkOiBcImFwcC5oZWxwRmlyc3RUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNyZWF0ZSB5b3VyIGxpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBoZWxwU2Vjb25kVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuaGVscFNlY29uZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2VsY29tZSB5b3VyIGd1ZXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIGhlbHBUaGlyZFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBUaGlyZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR2V0dGluZyBwYWlkIHNhZmVseVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG5cbiAgaGVscEZpcnN0RGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaGVscEZpcnN0RGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5IHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcblxuICBoZWxwRmlyc3REZXNjMjoge1xuICAgIGlkOiBcImFwcC5oZWxwRmlyc3REZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJNYWVjZW5hcyBub24gc2NlbGVyaXNxdWUgcHVydXMsIGNvbmd1ZSBjdXJzdXMgYXJjdS4gRG9uZWMgdmVsIGRhcGlidXMgbWkuIE1hdXJpcyBtYXhpbXVzIHBvc3VlcmUgcGxhY2VyYXQuIFNlZCBldCBsaWJlcm8gZXUgbmliaCB0cmlzdGlxdWUgbW9sbGlzIGEgZWdldCBsZWN0dXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBoZWxwU2Vjb25kRGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaGVscFNlY29uZERlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBoZWxwU2Vjb25kRGVzYzI6IHtcbiAgICBpZDogXCJhcHAuaGVscFNlY29uZERlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yIGxvcmVtIGlwc3VtIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LiBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuXG4gIGhlbHBTZWNvbmREZXNjMzoge1xuICAgIGlkOiBcImFwcC5oZWxwU2Vjb25kRGVzYzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaGVscFRoaXJkRGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaGVscFRoaXJkRGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIE1vcmJpIHBlbGxlbnRlc3F1ZSB2ZW5lbmF0aXMgZmVsaXMgc2VkIGNvbnZhbGxpcy4gTnVsbGEgdmFyaXVzLCBuaWJoIHZpdGFlIHBsYWNlcmF0IHRlbXB1cywgbWF1cmlzIHNlbSBlbGVtZW50dW0gaXBzdW0uIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGhlbHBUaGlyZERlc2MyOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBUaGlyZERlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkZ1c2NlIHF1aXMgdmFyaXVzIG51bGxhLiBOdWxsYW0gbmlzaSBuaXNpLCBzdXNjaXBpdCB1dCBtYWduYSBxdWlzLCBmZXVnaWF0IHBvcnRhIG5pYmguIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGhlbHBUaGlyZERlc2MzOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBUaGlyZERlc2MzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBlbGxlbnRlc3F1ZSBzYWdpdHRpcyB2ZWhpY3VsYSBzZW0gcXVpcyBsdWN0dXMuIFByb2luIHNvZGFsZXMgbWFnbmEgaW4gbG9yZW0gaGVuZHJlcml0IGFsaXF1YW0uIEludGVnZXIgZXUgdmFyaXVzIG9yY2kuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgcHJvY2Vzc0Zsb3dIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnByb2Nlc3NGbG93SGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVhcm4gRXh0cmEgTW9uZXkgYW5kIEJlY29tZSBhIEhvc3Qgd2l0aCBhcHBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9jZXNzIEZsb3cgSGVhZGluZ1wiLFxuICB9LFxuICBwcm9jZXNzRmxvd1N1YkhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAucHJvY2Vzc0Zsb3dTdWJIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4cGxvcmV6IGxlIHNpdGUgw6AgbGEgcmVjaGVyY2hlIGR1IHBob3RvZ3JhcGhlIGlkw6lhbCBldCBwcm9maXRleiBkZXMgYm9ucyBtb21lbnRzIGVuIHRvdXRlIHNlcmVpbml0w6lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9jZXNzIEZsb3cgSGVhZGluZ1wiLFxuICB9LFxuICBzdGVwT25lSGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5zdGVwT25lSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBob3N0IHdpdGggYXBwP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgMVwiLFxuICB9LFxuICBzdGVwVHdvSGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5zdGVwVHdvSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXkgaW4gQ29udHJvbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgMlwiLFxuICB9LFxuICBzdGVwVGhyZWVIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXBUaHJlZUhlYWRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF5IENvbmZpZGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgM1wiLFxuICB9LFxuICBzdGVwT25lRmxvdzoge1xuICAgIGlkOiBcImFwcC5zdGVwT25lRmxvd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJTaGFyZSB5b3VyIHZpbGxhLCBjb25kbyBvciBhcGFydG1lbnQgYW5kIGVhcm4geW91cnNlbGYgYW4gZXh0cmEgaW5jb21lLiBXaXRoIG92ZXIgMTIgeWVhcnMgb2YgZXhwZXJpZW5jZSwgd2UgbWFrZSBpdCBzaW1wbGUgYW5kIHNhZmUgdG8gcmVhY2ggZ3Vlc3RzIHRoYXQgYXJlIGxvb2tpbmcgZm9yIGZ1biBhbmQgdW5pcXVlIFBsYWNlcyB0byBzdGF5IGFjcm9zcyBUaGFpbGFuZCBhbmQgQmFsaS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGVwIDFcIixcbiAgfSxcbiAgc3RlcFR3b0Zsb3c6IHtcbiAgICBpZDogXCJhcHAuc3RlcFR3b0Zsb3dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU3RheSBpbiBjb250cm9sIHdpdGggYXBwLiBZb3UgaGF2ZSBmdWxsIGNvbnRyb2wgb2YgeW91ciBhdmFpbGFiaWxpdHksIHJhdGVzIGFuZCBydWxlcy4gWW91IGNhbiwgYmxvY2sgZGF0ZXMsIHNldCBjaGVjay1pbiB0aW1lcyBhbmQgbWFuYWdlIHlvdXIgb3duIGNvbW11bmljYXRpb25zIGRpcmVjdGx5IHdpdGggeW91ciBndWVzdHMgdGhyb3VnaCB0aGUgc3lzdGVtLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgMlwiLFxuICB9LFxuICBzdGVwVGhyZWVGbG93OiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXBUaHJlZUZsb3dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2Ugb2ZmZXIgYWxsIHRoZSByaWdodCB0b29scyB0byBhbGxvdyB5b3UgdG8gaG9zdCBpbiBjb25maWRlbmNlLiBGcm9tIGEgZmxleGlibGUgYm9va2luZyBzeXN0ZW0gdGhyb3VnaCB0byBhIHNlY3VyZSBwYXltZW50IHN5c3RlbS4gU3RheSBjb25uZWN0ZWQgYW5kIGNvbmZpZGVudCB3aXRoIHRoZSBsYXRlc3QgdGVjaG5vbG9neS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGVwIDNcIixcbiAgfSxcbiAgYW5vbnltb3VzTWVzc2FnZToge1xuICAgIGlkOiBcImFwcC5hbm9ueW1vdXNNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG8geW91IHdhbnQgdG8gcmVwb3J0IHRoaXMgVXNlcj9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgVXNlclwiLFxuICB9LFxuICByZXBvcnRVc2VySW5mbzoge1xuICAgIGlkOiBcImFwcC5yZXBvcnRVc2VySW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklmIHNvLCBwbGVhc2UgY2hvb3NlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgcmVwb3J0Q29udGVudDE6IHtcbiAgICBpZDogXCJhcHAucmVwb3J0Q29udGVudDFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGlzIHByb2ZpbGUgc2hvdWxkIG5vdCBiZSBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBVc2VyXCIsXG4gIH0sXG4gIHJlcG9ydENvbnRlbnQyOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydENvbnRlbnQyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXR0ZW1wdCB0byBzaGFyZSBjb250YWN0IGluZm9ybWF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBpZDogXCJhcHAuY2xvc2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbG9zZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBVc2VyXCIsXG4gIH0sXG4gIHJlcG9ydENvbnRlbnQzOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydENvbnRlbnQzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5hcHByb3ByaWF0ZSBjb250ZW50IG9mIHNwYW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgVXNlclwiLFxuICB9LFxuICB0aGFua3lvdUluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLnRoYW5reW91SW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGhhbmtzIGZvciB0YWtpbmcgdGhlIHRpbWUgdG8gcmVwb3J0IHRoaXMgdXNlci4gVGhlc2UgcmVwb3J0cyBoZWxwIG1ha2UgYmV0dGVyIGZvciBldmVyeW9uZSwgc28gd2UgdGFrZSB0aGVtIHNlcmlvdXNseS4gV2Ugd2lsbCByZWFjaCBvdXQgaWYgd2UgaGF2ZSBxdWVzdGlvbnMgYWJvdXQgeW91ciByZXBvcnQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgdGhhbmt5b3VUaXRsZToge1xuICAgIGlkOiBcImFwcC50aGFua3lvdVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhhbmsgWW91XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgbWVzc2FnZUhpc3Ryb3lMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlSGlzdHJveUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBVc2VyXCIsXG4gIH0sXG4gIHRpdGxlUmVxdWlyZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC50aXRsZVJlcXVpcmVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXNzYWdlIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgVXNlclwiLFxuICB9LFxuICB0b3BCYW5uZXJUaXRsZToge1xuICAgIGlkOiBcImFwcC50b3BCYW5uZXJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0J3Mgc2ltcGxlIHRvIGJlY29tZSBhIGFwcCBob3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgZm9vdGVyVGVybXM6IHtcbiAgICBpZDogXCJhcHAuZm9vdGVyVGVybXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUZXJtcywgUHJpdmFjeSwgQ3VycmVuY3kgJiBNb3JlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9vdGVyIEJ1dHRvblwiLFxuICB9LFxuICBmb290ZXJDbG9zZToge1xuICAgIGlkOiBcImFwcC5mb290ZXJDbG9zZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9vdGVyIEJ1dHRvblwiLFxuICB9LFxuICBteUhvc3RTcGFjZXM6IHtcbiAgICBpZDogXCJhcHAubXlIb3N0U3BhY2VzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBJdGVtXCIsXG4gIH0sXG4gIG15U3BhY2U6IHtcbiAgICBpZDogXCJhcHAubXlTcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNwYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBJdGVtXCIsXG4gIH0sXG4gIGNsZWFyOiB7XG4gICAgaWQ6IFwiYXBwLmNsZWFyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xlYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjbGVhclwiLFxuICB9LFxuICBhcHBseToge1xuICAgIGlkOiBcImFwcC5hcHBseVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcGx5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiYXBwbHlcIixcbiAgfSxcbiAgaG9tZVR5cGU6IHtcbiAgICBpZDogXCJhcHAuaG9tZVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb21lIHR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJob21lVHlwZVwiLFxuICB9LFxuICBwcmljZToge1xuICAgIGlkOiBcImFwcC5wcmljZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJpY2VcIixcbiAgfSxcbiAgbW9yZUZpbHRlcnM6IHtcbiAgICBpZDogXCJhcHAubW9yZUZpbHRlcnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb3JlIGZpbHRlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJtb3JlRmlsdGVyc1wiLFxuICB9LFxuICBzaG93QW1lbml0aWVzOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dBbWVuaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbCBhbWVuaXRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIGNsb3NlQW1lbml0aWVzOiB7XG4gICAgaWQ6IFwiYXBwLmNsb3NlQW1lbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xvc2UgYWxsIGFtZW5pdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvZ2dsZSBCdXR0b25cIixcbiAgfSxcbiAgc2hvd01vcmU6IHtcbiAgICBpZDogXCJhcHAuc2hvd01vcmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IE1vcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIHNob3dMZXNzOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dMZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hvdyBMZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBzaG93QWxsOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dBbGxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvZ2dsZSBCdXR0b25cIixcbiAgfSxcbiAgY2xvc2VTYWZldHlGZWF0dXJlczoge1xuICAgIGlkOiBcImFwcC5jbG9zZVNhZmV0eUZlYXR1cmVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xvc2Ugc2FmZXR5IGZlYXR1cmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBjbG9zZVNoYXJlZFNwYWNlczoge1xuICAgIGlkOiBcImFwcC5jbG9zZVNoYXJlZFNwYWNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlIFNoYXJlZCBTcGFjZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIHNwYWNlc0luZm86IHtcbiAgICBpZDogXCJhcHAuc3BhY2VzSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNwYWNlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwYWNlc1wiLFxuICB9LFxuICBuZWlnaGJvdXJIb29kOiB7XG4gICAgaWQ6IFwiYXBwLm5laWdoYm91ckhvb2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZWlnaGJvdXJob29kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmVjb21lIEhvc3QgRm9ybVwiLFxuICB9LFxuICByZWFkTW9yZUFib3V0U3BhY2VzOiB7XG4gICAgaWQ6IFwiYXBwLnJlYWRNb3JlQWJvdXRTcGFjZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFkIG1vcmUgYWJvdXQgdGhlIHNwYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBMaXN0aW5nXCIsXG4gIH0sXG4gIGhpZGVCdXR0b246IHtcbiAgICBpZDogXCJhcHAuaGlkZUJ1dHRvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhpZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IExpc3RpbmdcIixcbiAgfSxcbiAgc2hvd05laWdoYm91ckhvb2Q6IHtcbiAgICBpZDogXCJhcHAuc2hvd05laWdoYm91ckhvb2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IE5laWdoYm91ckhvb2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIGdldHRpbmdBcm91bmQ6IHtcbiAgICBpZDogXCJhcHAuZ2V0dGluZ0Fyb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdldHRpbmcgQXJvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBMaXN0aW5nXCIsXG4gIH0sXG4gIGJvb2tOb3c6IHtcbiAgICBpZDogXCJhcHAuYm9va05vd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2sgTm93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBidXR0b25cIixcbiAgfSxcbiAgYmVkVHlwZXM6IHtcbiAgICBpZDogXCJhcHAuYmVkVHlwZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWQgVHlwZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCZWQgVHlwZXNcIixcbiAgfSxcbiAgY29udGFjdEFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RBZG1pblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBjb250YWN0IHVzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgQWRtaW5cIixcbiAgfSxcbiAgcm9vbXNBbmRCZWRzOiB7XG4gICAgaWQ6IFwiYXBwLnJvb21zQW5kQmVkc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJvb21zIGFuZCBCZWRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUm9vbXMgYW5kIEJlZHNcIixcbiAgfSxcbiAgc2hvd0FsbEZhY2lsaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuc2hvd0FsbEZhY2lsaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbCBmYWNpbGl0aWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2hvdyBhbGwgZmFjaWxpdGllcyB0ZXh0XCIsXG4gIH0sXG4gIGNsb3NlRmFjaWxpdGllczoge1xuICAgIGlkOiBcImFwcC5jbG9zZUZhY2lsaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbG9zZSBhbGwgZmFjaWxpdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3NlIGZhY2lsaXRpZXMgdGV4dFwiLFxuICB9LFxuICBzaG93QWxsSG91c2VSdWxlczoge1xuICAgIGlkOiBcImFwcC5zaG93QWxsSG91c2VSdWxlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNob3cgYWxsIGhvdXNlIHJ1bGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2hvdyBhbGwgaG91c2UgcnVsZXMgdGV4dFwiLFxuICB9LFxuICBjbG9zZUhvdXNlUnVsZXM6IHtcbiAgICBpZDogXCJhcHAuY2xvc2VIb3VzZVJ1bGVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xvc2UgYWxsIGhvdXNlIHJ1bGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2xvc2UgaG91c2UgcnVsZXMgdGV4dFwiLFxuICB9LFxuICBjaG9vc2VBQ291bnRyeToge1xuICAgIGlkOiBcImFwcC5jaG9vc2VBQ291bnRyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBhIGNvdW50cnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgYSBjb3VudHJ5XCIsXG4gIH0sXG4gIGFkZFBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmFkZFBob25lTnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIHBob25lIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBwaG9uZSBudW1iZXJcIixcbiAgfSxcbiAgYWRkQVBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmFkZEFQaG9uZU51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkZCBhIHBob25lIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBhIHBob25lIG51bWJlclwiLFxuICB9LFxuICB2ZXJpZnlWaWFTbXM6IHtcbiAgICBpZDogXCJhcHAudmVyaWZ5VmlhU21zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZ5IHZpYSBTTVNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZnkgdmlhIFNNU1wiLFxuICB9LFxuICBtb2JpbGVOdW1iZXJSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5tb2JpbGVOdW1iZXJSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBob25lIG51bWJlci5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQbGVhc2UgZW50ZXIgYSBwaG9uZSBudW1iZXIuXCIsXG4gIH0sXG4gIHdlSGF2ZVNlbnRWZXJpZmljYXRpb25Db2RlOiB7XG4gICAgaWQ6IFwiYXBwLndlSGF2ZVNlbnRWZXJpZmljYXRpb25Db2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2Ugc2VudCBhIHZlcmlmaWNhdGlvbiBjb2RlIHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2Ugc2VudCBhIHZlcmlmaWNhdGlvbiBjb2RlIHRvXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbkNvZGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25Db2RlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgdGhlIDQtZGlnaXQgY29kZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBsZWFzZSBlbnRlciB0aGUgNC1kaWdpdCBjb2RlXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbkNvZGVSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25Db2RlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSB2ZXJpZmljYXRpb24gY29kZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQbGVhc2UgZW50ZXIgYSB2ZXJpZmljYXRpb24gY29kZS5cIixcbiAgfSxcbiAgc2VlQWxsOiB7XG4gICAgaWQ6IFwiYXBwLnNlZUFsbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlZSBBbGxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzZWVBbGxcIixcbiAgfSxcbiAgbG9jYXRpb25SZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5sb2NhdGlvblJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9jYXRpb24gaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2NhdGlvbiBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBsb2NhdGlvbkFkZHJlc3NSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5sb2NhdGlvbkFkZHJlc3NSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvY2F0aW9uIEFkZHJlc3MgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2NhdGlvbiBBZGRyZXNzIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIGxpc3ROb3RGb3VuZFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3ROb3RGb3VuZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSXQgbG9va3MgbGlrZSB0aGlzIGxpc3RpbmcgbWF5IGRlbGV0ZWQgb3IgdW5wdWJsaXNoZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm90IEZvdW5kXCIsXG4gIH0sXG4gIHVzZXJEZWxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLnVzZXJEZWxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGFyZSBkZWxldGVkIGJ5IGFkbWluLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgZGVsZXRlZCB1c2VyXCIsXG4gIH0sXG4gIGNhbmNlbEluZm9Cb29raW5nOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbEluZm9Cb29raW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9zdCBob3N0cyByZXNwb25kIHdpdGhpbiAyNCBob3Vycy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2VcIixcbiAgfSxcbiAgY29va2llc0Rpc2NsYWltZXI6IHtcbiAgICBpZDogXCJhcHAuY29va2llc0Rpc2NsYWltZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwidXNlcyBjb29raWVzIHRvIHVuZGVyc3RhbmQgaG93IHlvdSB1c2Ugb3VyIHNpdGUgYW5kIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLiBCeSB1c2luZyBvdXIgc2l0ZSwgeW91IGFjY2VwdCBvdXIgdXNlIG9mIGNvb2tpZXMuIFRvIGxlYXJuIG1vcmUsIGdvIHRvIG91clwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4dHJhR3Vlc3RJbmNsdWRlZFwiLFxuICB9LFxuICBnb3RJdDoge1xuICAgIGlkOiBcImFwcC5nb3RJdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdPVCBJVFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIiBjb29raWVzIERpc2NsYWltZXIgQnV0dG9uXCIsXG4gIH0sXG4gIHN0ZXAxSGVhZGluZ05ldzoge1xuICAgIGlkOiBcImFwcC5zdGVwMUhlYWRpbmdOZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTVEVQIDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDIgSGVhZGluZ1wiLFxuICB9LFxuICBNYXhpbXVtdXBsb2FkOiB7XG4gICAgaWQ6IFwiYXBwLk1heGltdW11cGxvYWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIHVwbG9hZCBzaXplOjFNQlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob3RvcyBVcGxvYWRcIixcbiAgfSxcbiAgY29va2llUG9saWN5OiB7XG4gICAgaWQ6IFwiYXBwLmNvb2tpZVBvbGljeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvb2tpZSBwb2xpY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCIgY29va2llcyBEaXNjbGFpbWVyIExpbmtcIixcbiAgfSxcbiAgYmxvY2tEYXRlczoge1xuICAgIGlkOiBcImFwcC5ibG9ja2VkRGF0ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCbG9jayBkYXRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgU3RlcDNcIixcbiAgfSxcbiAgZGVTZWxlY3Q6IHtcbiAgICBpZDogXCJhcHAuZGVTZWxlY3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgZGVTZWxlY3QgYnV0dG9uXCIsXG4gIH0sXG4gIHNlbGVjdGVkRGF0ZXNTdWNjZXNzOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdGVkRGF0ZXNTdWNjZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBjYWxlbmRhciBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgY2FsZW5kYXIgaGFzIGJlZW4gdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsXG4gIH0sXG4gIHNlbGVjdGVkRGF0ZXNFcnJvcjoge1xuICAgIGlkOiBcImFwcC5zZWxlY3RlZERhdGVzRXJyb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgfSxcbiAgc2VsZWN0ZWREYXRlczoge1xuICAgIGlkOiBcImFwcC5zZWxlY3RlZERhdGVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VsZWN0ZWQgZGF0ZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWxlY3RlZCBkYXRlc1wiLFxuICB9LFxuICBtYWtlRGF0ZUF2YWlsYWJsZToge1xuICAgIGlkOiBcImFwcC5tYWtlRGF0ZUF2YWlsYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNwZWNpYWwgUHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIFN0ZXAzXCIsXG4gIH0sXG4gIHNlc3Npb25QcmljZToge1xuICAgIGlkOiBcImFwcC5zZXNzaW9uUHJpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTcGVjaWFsIFByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2Vzc2lvblByaWNlXCIsXG4gIH0sXG4gIHNlbGVjdGVkRGF0ZXNCbG9ja2VkOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdGVkRGF0ZXNCbG9ja2VkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VsZWN0ZWQgZGF0ZXMgd2lsbCBiZSBibG9ja2VkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlbGVjdGVkIGRhdGVzIHdpbGwgYmUgYmxvY2tlZC5cIixcbiAgfSxcbiAgYXZhaWxhYmxpbGl0eXRlcm06IHtcbiAgICBpZDogXCJhcHAuYXZhaWxhYmxpbGl0eXRlcm1cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBdmFpbGFiaWxpdHkgdGVybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF2YWlsYWJpbGl0eSB0ZXJtXCIsXG4gIH0sXG4gIGNvbnRhY3RGb3JtSW5mb3JtYXRpb246IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEZvcm1JbmZvcm1hdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBDb250YWN0ICYgU3VwcG9ydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbnRhY3RGb3JtXCIsXG4gIH0sXG4gIGNvbnRhY3RGb3JtRW1haWw6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEZvcm1FbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIFVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29udGFjdEZvcm1cIixcbiAgfSxcbiAgY29udGFjdEZvcm1DYWxsOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RGb3JtQ2FsbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbGwgVXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb250YWN0Rm9ybVwiLFxuICB9LFxuICB3aHlibG9ja1RpdGxlMToge1xuICAgIGlkOiBcImFwcC53aHlibG9ja1RpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBXaGF0IGlzIExvcmVtIElwc3VtP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeSBibG9jayBUaXRsZVwiLFxuICB9LFxuICB3aHlibG9ja1RpdGxlMjoge1xuICAgIGlkOiBcImFwcC53aHlibG9ja1RpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBUaGlzIHRvb2wgZm9yIG91ciBkYXkgdG8gZGF5IHdvcmsgYW5kIG91ciBjbGllbnRzP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeSBibG9jayB0aXRsZVwiLFxuICB9LFxuICB3aHlibG9ja2Rlc2MxOiB7XG4gICAgaWQ6IFwiYXBwLndoeWJsb2NrZGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aHkgYmxvY2sgZGVzY3JpcHRpb25cIixcbiAgfSxcbiAgd2h5YmxvY2tkZXNjMjoge1xuICAgIGlkOiBcImFwcC53aHlibG9ja2Rlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5IGJsb2NrIGRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGhvc3RpbmdCbG9ja3RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RpbmdCbG9ja3RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhlcmUgYXJlIDMgTG9yZW0gSXBzdW0gZ2VuZXJhdG9yc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgdGl0bGVcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NraGVhZGluZzE6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NraGVhZGluZzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIGhlYWRpbmdcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NraGVhZGluZzI6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NraGVhZGluZzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIGhlYWRpbmdcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NraGVhZGluZzM6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NraGVhZGluZzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIGhlYWRpbmdcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrZGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrZGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrZGVzYzI6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrZGVzYzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrZGVzYzM6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrZGVzYzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9udGl0bGU6IHtcbiAgICBpZDogXCJhcHAuY292ZXJTZWN0aW9udGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVc2Ugb3VyIGdlbmVyYXRvciB0byBnZXQgeW91ciBvd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIFRpdGxlXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmRlc2MxOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmRlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmRlc2MyOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmRlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmxpc3RJdGVtMToge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25saXN0SXRlbTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBMaXN0IEl0ZW1cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9ubGlzdEl0ZW0yOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmxpc3RJdGVtMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIExpc3QgSXRlbVwiLFxuICB9LFxuICBjb3ZlclNlY3Rpb25saXN0SXRlbTM6IHtcbiAgICBpZDogXCJhcHAuY292ZXJTZWN0aW9ubGlzdEl0ZW0zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBMaXN0IEl0ZW1cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9ubGlzdEl0ZW00OiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmxpc3RJdGVtNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtIHF1aWEgdm9sdXB0YXMgc2l0IGFzcGVybmF0dXIgXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBMaXN0IEl0ZW1cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9ubGlzdEl0ZW01OiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmxpc3RJdGVtNVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBVdCBlbmltIGFkIG1pbmltYSB2ZW5pYW0sIHF1aXMgbm9zdHJ1bSBleGVyY2l0YXRpb25lbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gTGlzdCBJdGVtXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmxpc3RJdGVtNjoge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25saXN0SXRlbTZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gTGlzdCBJdGVtXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50dGl0bGU6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnR0aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXltZW50IENvbnRlbnQgdGl0bGVcIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRoZWFkaW5nMToge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudGhlYWRpbmcxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VkIHV0IHBlcnNwaWNpYXRpc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW1lbnQgQ29udGVudCBIZWFkaW5nXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50aGVhZGluZzI6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRoZWFkaW5nMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5lbW8gZW5pbSBpcHNhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW1lbnQgQ29udGVudCBIZWFkaW5nXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50aGVhZGluZzM6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRoZWFkaW5nM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5lcXVlIHBvcnJvXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5bWVudCBDb250ZW50IEhlYWRpbmdcIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRkZXNjMToge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudGRlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkR1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5bWVudCBDb250ZW50IERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50ZGVzYzI6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRkZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXltZW50IENvbnRlbnQgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRkZXNjMzoge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudGRlc2MzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXltZW50IENvbnRlbnQgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgcXVvdGVUZXh0MToge1xuICAgIGlkOiBcImFwcC5xdW90ZVRleHQxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIHRleHRcIixcbiAgfSxcbiAgcXVvdGV0YWdsaW5lMToge1xuICAgIGlkOiBcImFwcC5xdW90ZXRhZ2xpbmUxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUXVvdGUgVGFnIExpbmVcIixcbiAgfSxcbiAgcXVvdGVidXR0b24xOiB7XG4gICAgaWQ6IFwiYXBwLnF1b3RlYnV0dG9uMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvcmVtIElwc3VtIFRleHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSBCdXR0b25cIixcbiAgfSxcbiAgcXVvdGVUZXh0Mjoge1xuICAgIGlkOiBcImFwcC5xdW90ZVRleHQyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSB0ZXh0XCIsXG4gIH0sXG4gIHF1b3RldGFnbGluZTI6IHtcbiAgICBpZDogXCJhcHAucXVvdGV0YWdsaW5lMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCIgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIFRhZyBMaW5lXCIsXG4gIH0sXG4gIHF1b3RlYnV0dG9uMzoge1xuICAgIGlkOiBcImFwcC5xdW90ZWJ1dHRvbjNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW0gVGV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIEJ1dHRvblwiLFxuICB9LFxuICBjb3VudGluZ1NlY3Rpb250aXRsZToge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb250aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdW50aW5nIFNlY3Rpb24gVGl0bGUgXCIsXG4gIH0sXG4gIGNvdW50aW5nU2VjdGlvbnRhZ2xpbmUxOiB7XG4gICAgaWQ6IFwiYXBwLmNvdW50aW5nU2VjdGlvbnRhZ2xpbmUxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ291bnRpbmcgU2VjdGlvbiBUYWdsaW5lIFwiLFxuICB9LFxuICBjb3VudGluZ1NlY3Rpb250YWdsaW5lMjoge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb250YWdsaW5lMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY29cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3VudGluZyBTZWN0aW9uIFRhZ2xpbmUgXCIsXG4gIH0sXG4gIGNvdW50aW5nU2VjdGlvbnRhZ2xpbmUzOiB7XG4gICAgaWQ6IFwiYXBwLmNvdW50aW5nU2VjdGlvbnRhZ2xpbmUzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmVxdWUgcG9ycm8gcXVpc3F1YW0gXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ291bnRpbmcgU2VjdGlvbiBUYWdsaW5lIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb250aXRsZToge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb250aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBMb3JlbSBJcHN1bSBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBYm91dCBTZWN0aW9uIFRpdGxlIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb25oZWFkaW5nMToge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb25oZWFkaW5nMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBXaGF0IGlzIExvcmVtIElwc3VtP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFib3V0IFNlY3Rpb24gSGVhZGluZyBcIixcbiAgfSxcbiAgYWJvdXRTZWN0aW9uZGVzYzE6IHtcbiAgICBpZDogXCJhcHAuYWJvdXRTZWN0aW9uZGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBYm91dCBTZWN0aW9uIERlc2NyaXB0aW9uIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb25oZWFkaW5nMjoge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb25oZWFkaW5nMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoaXMgdG9vbCBmb3Igb3VyIGRheSB0byBkYXkgd29yayBhbmQgb3VyIGNsaWVudHM/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWJvdXQgU2VjdGlvbiBIZWFkaW5nIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb25kZXNjMjoge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb25kZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFib3V0IFNlY3Rpb24gRGVzY3JpcHRpb24gXCIsXG4gIH0sXG4gIGZhcXRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmZhcXRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIEZBUVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSAgdGl0bGUgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNldGl0bGUxOiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNldGl0bGUxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSB0aXRsZSBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2VDb250ZW50MToge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZUNvbnRlbnQxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTI6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIHRpdGxlIFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZUNvbnRlbnQyOiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNlQ29udGVudDJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIEV4ZXJjaXRhdGlvbiBpbiBmdWdpYXQgZXN0IHV0IGFkIGVhIGN1cGlkYXRhdCB1dCBpbiBjdXBpZGF0YXQgb2NjYWVjYXQgdXQgb2NjYWVjYXQgY29uc2VxdWF0IGVzdCBtaW5pbSBtaW5pbSAgIGVzc2UgdGVtcG9yIGxhYm9ydW0gY29uc2VxdWF0IGVzc2UgYWRpcGlzaWNpbmcgZXUgcmVwcmVoZW5kZXJpdCBlbmltLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSBDb250ZW50IFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZXRpdGxlMzoge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZXRpdGxlM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSB0aXRsZSBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2VDb250ZW50Mzoge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZUNvbnRlbnQzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4ZXJjaXRhdGlvbiBpbiBmdWdpYXQgZXN0IHV0IGFkIGVhIGN1cGlkYXRhdCB1dCBpbiBjdXBpZGF0YXQgb2NjYWVjYXQgdXQgb2NjYWVjYXQgY29uc2VxdWF0IGVzdCBtaW5pbSBtaW5pbSAgIGVzc2UgdGVtcG9yIGxhYm9ydW0gY29uc2VxdWF0IGVzc2UgYWRpcGlzaWNpbmcgZXUgcmVwcmVoZW5kZXJpdCBlbmltLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSBDb250ZW50IFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZXRpdGxlNDoge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZXRpdGxlNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJ0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIHRpdGxlIFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZUNvbnRlbnQ0OiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNlQ29udGVudDRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRXhlcmNpdGF0aW9uIGluIGZ1Z2lhdCBlc3QgdXQgYWQgZWEgY3VwaWRhdGF0IHV0IGluIGN1cGlkYXRhdCBvY2NhZWNhdCB1dCBvY2NhZWNhdCBjb25zZXF1YXQgZXN0IG1pbmltIG1pbmltICAgZXNzZSB0ZW1wb3IgbGFib3J1bSBjb25zZXF1YXQgZXNzZSBhZGlwaXNpY2luZyBldSByZXByZWhlbmRlcml0IGVuaW0uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIENvbnRlbnQgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNldGl0bGU1OiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNldGl0bGU1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSB0aXRsZSBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2VDb250ZW50NToge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZUNvbnRlbnQ1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTY6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZTZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgdGl0bGUgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNlQ29udGVudDY6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2VDb250ZW50NlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTc6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZTdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgdGl0bGUgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNlQ29udGVudDc6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2VDb250ZW50N1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTg6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZThcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJ0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIHRpdGxlIFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZUNvbnRlbnQ4OiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNlQ29udGVudDhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIEV4ZXJjaXRhdGlvbiBpbiBmdWdpYXQgZXN0IHV0IGFkIGVhIGN1cGlkYXRhdCB1dCBpbiBjdXBpZGF0YXQgb2NjYWVjYXQgdXQgb2NjYWVjYXQgY29uc2VxdWF0IGVzdCBtaW5pbSBtaW5pbSAgIGVzc2UgdGVtcG9yIGxhYm9ydW0gY29uc2VxdWF0IGVzc2UgYWRpcGlzaWNpbmcgZXUgcmVwcmVoZW5kZXJpdCBlbmltLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSBDb250ZW50IFwiLFxuICB9LFxuXG4gIGNvbnRhY3RGb3JtQWRkcmVzczoge1xuICAgIGlkOiBcImFwcC5jb250YWN0Rm9ybUFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250YWN0IEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IEFkZHJlc3NcIixcbiAgfSxcblxuICBzaG93RGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuc2hvd0Rlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hvdyBkZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgTGlzdGluZ1wiLFxuICB9LFxuICBoaWRlRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuaGlkZURlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGlkZSBkZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgTGlzdGluZ1wiLFxuICB9LFxuICBzaG93QWxsU2FmZXR5RmVhdHVyZXM6IHtcbiAgICBpZDogXCJhcHAuc2hvd0FsbFNhZmV0eUZlYXR1cmVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hvdyBhbGwgc2FmZXR5IGZlYXR1cmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBzaG93QWxsU2hhcmVkU3BhY2VzOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dBbGxTaGFyZWRTcGFjZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbCBzaGFyZWQgc3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBjbG9zZUFsbFNoYXJlZFNwYWNlczoge1xuICAgIGlkOiBcImFwcC5jbG9zZUFsbFNoYXJlZFNwYWNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlIGFsbCBzaGFyZWQgc3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBuaWdodE9mOiB7XG4gICAgaWQ6IFwiYXBwLm5pZ2h0T2ZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOaWdodCBvZlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5pZ2h0IG9mXCIsXG4gIH0sXG4gIFlvdWhhZHJldmlld3Nmb3I6IHtcbiAgICBpZDogXCJhcHAuWW91aGFkcmV2aWV3c2ZvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSByZXZpZXdlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSByZXZpZXdlZFwiLFxuICB9LFxuICBzcmV2aWV3OiB7XG4gICAgaWQ6IFwiYXBwLnNyZXZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJzIHJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInMgcmV2aWV3XCIsXG4gIH0sXG4gIHlvdUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnlvdUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJlbW92ZURhdGVFcnJvcjoge1xuICAgIGlkOiBcImFwcC5yZW1vdmVEYXRlRXJyb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiUGxlYXNlIGNob29zZSB0aGUgYmxvY2tlZCBvciBzcGVjaWFsIHByaWNpbmcgZGF0ZXMgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZW1vdmUgZGF0ZSBmcm9tIHNwZWNpYWwgcHJpY2luZyBlcnJvciBtZXNzYWdlXCIsXG4gIH0sXG4gIHVuQmxvY2tJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnVuQmxvY2tJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk5vdGU6IFRvIHVuYmxvY2sgYSBkYXRlLCBzZWxlY3QgYW55IGJsb2NrZWQgb3IgYXZhaWxhYmxlIGRhdGUgYW5kIHNhdmUgd2l0aG91dCBnaXZpbmcgc3BlY2lhbCBwcmljZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJjYWxlbmRhciB1bmJsb2NrIGluZm9cIixcbiAgfSxcbiAgemlwY29kZU9uZToge1xuICAgIGlkOiBcImFwcC56aXBjb2RlT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWklQXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWklQIENvZGVcIixcbiAgfSxcbiAgY2FuY2VsbGF0aW9uUG9saWNpZXNPbmU6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uUG9saWNpZXNPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiYWxsb3dzIGhvc3RzIHRvIGNob29zZSBhbW9uZyB0aHJlZSBzdGFuZGFyZGl6ZWQgY2FuY2VsbGF0aW9uIHBvbGljaWVzIChGbGV4aWJsZSwgTW9kZXJhdGUsIGFuZCBTdHJpY3QpIFdpbGwgYmUgZW5mb3JjZWQgdG8gcHJvdGVjdCBib3RoIGd1ZXN0IGFuZCBob3N0IGFsaWtlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbiBQb2xpY2llc1wiLFxuICB9LFxuICBjYW5jZWxsYXRpb25Qb2xpY2llc1R3bzoge1xuICAgIGlkOiBcImFwcC5jYW5jZWxsYXRpb25Qb2xpY2llc1R3b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFYWNoIGxpc3RpbmcgYW5kIHJlc2VydmF0aW9uIG9uIG91ciBzaXRlIHdpbGwgY2xlYXJseSBzdGF0ZSB0aGUgY2FuY2VsbGF0aW9uIHBvbGljeS4gR3Vlc3RzIHdoaWxlIHZpZXdpbmcgdGhlaXIgdHJhdmVsIHBsYW5zIGFyZSBhYmxlIHRvIHJldmlldyBhbnkgcGVuYWx0aWVzIGFuZCBhbHNvIGNhbmNlbCBieSBjbGlja2luZyAg4oCYQ2FuY2Vs4oCZIG9uIHRoZSByZXNwZWN0aXZlIHJlc2VydmF0aW9uLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbiBQb2xpY2llc1wiLFxuICB9LFxuICBjYW5jZWxsYXRpb25Qb2xpY2llc1RocmVlOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvblBvbGljaWVzVGhyZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQSBob3N0IHdpbGwgYmUgYWJsZSB0byBzZWUgdGhlIG51bWJlciBvZiByZXNlcnZhdGlvbnMgYSBndWVzdCBoYXMgQ2FuY2VsbGVkIE92ZXIgdGhlIHBhc3QgMTIgbW9udGhzIHdoZW4gdGhlIGd1ZXN0IHN1Ym1pdHMgQm9va2luZyByZXF1ZXN0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbiBQb2xpY2llc1wiLFxuICB9LFxuICBsb2NhbExhd3NPbmU6IHtcbiAgICBpZDogXCJhcHAubG9jYWxMYXdzT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRha2UgYSBtb21lbnQgdG8gcmV2aWV3IHlvdXIgbG9jYWwgbGF3cy4gV2Ugd2FudCB0byBtYWtlIHN1cmUgeW914oCZdmUgZ290IGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gZ2V0IG9mZiB0byBhIGdyZWF0IHN0YXJ0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvd2NhbCBMYXdcIixcbiAgfSxcbiAgbG9jYWxMYXdzVHdvOiB7XG4gICAgaWQ6IFwiYXBwLmxvY2FsTGF3c1R3b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJQbGVhc2UgZWR1Y2F0ZSB5b3Vyc2VsZiBhYm91dCB0aGUgbGF3cyBpbiB5b3VyIGp1cmlzZGljdGlvbiBiZWZvcmUgbGlzdGluZyB5b3VyIHNwYWNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvd2NhbCBMYXdcIixcbiAgfSxcbiAgbG9jYWxMYXdzVGhyZWU6IHtcbiAgICBpZDogXCJhcHAubG9jYWxMYXdzVGhyZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTW9zdCBjaXRpZXMgaGF2ZSBydWxlcyBjb3ZlcmluZyBob21lc2hhcmluZywgYW5kIHRoZSBzcGVjaWZpYyBjb2RlcyBhbmQgb3JkaW5hbmNlcyBjYW4gYXBwZWFyIGluIG1hbnkgcGxhY2VzIChzdWNoIGFzIHpvbmluZywgYnVpbGRpbmcsIGxpY2Vuc2luZyBvciB0YXggY29kZXMpLiBJbiBtb3N0IHBsYWNlcywgeW91IG11c3QgcmVnaXN0ZXIsIGdldCBhIHBlcm1pdCwgb3Igb2J0YWluIGEgbGljZW5zZSBiZWZvcmUgeW91IGxpc3QgeW91ciBwcm9wZXJ0eSBvciBhY2NlcHQgZ3Vlc3RzLiBZb3UgbWF5IGFsc28gYmUgcmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgYW5kIHJlbWl0dGluZyBjZXJ0YWluIHRheGVzLiBJbiBzb21lIHBsYWNlcywgc2hvcnQtdGVybSByZW50YWxzIGNvdWxkIGJlIHByb2hpYml0ZWQgYWx0b2dldGhlci5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3djYWwgTGF3XCIsXG4gIH0sXG4gIGxvY2FsTGF3c0ZvdXI6IHtcbiAgICBpZDogXCJhcHAubG9jYWxMYXdzRm91clwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJNb3N0IGNpdGllcyBoYXZlIHJ1bGVzIGNvdmVyaW5nIGhvbWVzaGFyaW5nLCBhbmQgdGhlIHNwZWNpZmljIGNvZGVzIGFuZCBvcmRpbmFuY2VzIGNhbiBhcHBlYXIgaW4gbWFueSBwbGFjZXMgKHN1Y2ggYXMgem9uaW5nLCBidWlsZGluZywgbGljZW5zaW5nIG9yIHRheCBjb2RlcykuIEluIG1vc3QgcGxhY2VzLCB5b3UgbXVzdCByZWdpc3RlciwgZ2V0IGEgcGVybWl0LCBvciBvYnRhaW4gYSBsaWNlbnNlIGJlZm9yZSB5b3UgbGlzdCB5b3VyIHByb3BlcnR5IG9yIGFjY2VwdCBndWVzdHMuIFlvdSBtYXkgYWxzbyBiZSByZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyBhbmQgcmVtaXR0aW5nIGNlcnRhaW4gdGF4ZXMuIEluIHNvbWUgcGxhY2VzLCBzaG9ydC10ZXJtIHJlbnRhbHMgY291bGQgYmUgcHJvaGliaXRlZCBhbHRvZ2V0aGVyLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvd2NhbCBMYXdcIixcbiAgfSxcbiAgbG9jYWxMYXdzRml2ZToge1xuICAgIGlkOiBcImFwcC5sb2NhbExhd3NGaXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlNpbmNlIHlvdSBhcmUgcmVzcG9uc2libGUgZm9yIHlvdXIgb3duIGRlY2lzaW9uIHRvIGxpc3Qgb3IgYm9vaywgeW91IHNob3VsZCBnZXQgY29tZm9ydGFibGUgd2l0aCB0aGUgYXBwbGljYWJsZSBydWxlcyBiZWZvcmUgbGlzdGluZyBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvd2NhbCBMYXdcIixcbiAgfSxcbiAgbG9jYWxMYXdzU2l4OiB7XG4gICAgaWQ6IFwiYXBwLmxvY2FsTGF3c1NpeFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJUbyBnZXQgeW91IHN0YXJ0ZWQsIHdlIG9mZmVyIHNvbWUgaGVscGZ1bCByZXNvdXJjZXMgdW5kZXIg4oCcWW91ciBDaXR5IExhd3Mu4oCdXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG93Y2FsIExhd1wiLFxuICB9LFxuICBsb2NhbExhd3NTZXZlbjoge1xuICAgIGlkOiBcImFwcC5sb2NhbExhd3NTZXZlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJCeSBhY2NlcHRpbmcgb3VyIFRlcm1zIG9mIFNlcnZpY2UgYW5kIGxpc3RpbmcgeW91ciBzcGFjZSwgeW91IGNlcnRpZnkgdGhhdCB5b3Ugd2lsbCBmb2xsb3cgYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3djYWwgTGF3XCIsXG4gIH0sXG4gIGZsZXhpYmxlVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZsZXhpYmxlOiBGdWxsIHJlZnVuZCAxIGRheSBwcmlvciB0byBhcnJpdmFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc09uZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZU9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJDbGVhbmluZyBmZWVzIGFyZSBhbHdheXMgcmVmdW5kZWQgaWYgdGhlIGd1ZXN0IGRpZCBub3QgY2hlY2sgaW4uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc1R3bzoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVR3b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNUaHJlZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRocmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcInNlcnZpY2UgZmVlIGlzIHJlZnVuZGFibGUgaWYgdGhlIGd1ZXN0IGNhbmNlbHMgYmVmb3JlIHRoZSB0cmlwIHN0YXJ0cy4gSWYgYSBndWVzdCBib29rcyBhIHJlc2VydmF0aW9uIHRoYXQgb3ZlcmxhcHMgd2l0aCBhbnkgcGFydCBvZiBhbiBleGlzdGluZyByZXNlcnZhdGlvbiwgd2Ugd29u4oCZdCByZWZ1bmQgdGhlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc0ZvdXI6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVGb3VyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwic2VydmljZSBmZWUgaWYgdGhleSBkZWNpZGUgdG8gY2FuY2VsLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNGaXZlOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlRml2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJBY2NvbW1vZGF0aW9uIGZlZXMgKHRoZSB0b3RhbCBuaWdodGx5IHJhdGUgeW91J3JlIGNoYXJnZWQpIGFyZSByZWZ1bmRhYmxlIGluIGNlcnRhaW4gY2lyY3Vtc3RhbmNlcyBhcyBvdXRsaW5lZCBiZWxvdy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzU2l4OiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlU2l4XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIklmIHRoZXJlIGlzIGEgY29tcGxhaW50IGZyb20gZWl0aGVyIHBhcnR5LCBub3RpY2UgbXVzdCBiZSBnaXZlbiB0b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNTZXZlbjoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVNldmVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwid2l0aGluIDI0IGhvdXJzIG9mIGNoZWNrLWluLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNFaWdodDoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZUVpZ2h0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIndpbGwgbWVkaWF0ZSB3aGVuIG5lY2Vzc2FyeSwgYW5kIGhhcyB0aGUgZmluYWwgc2F5IGluIGFsbCBkaXNwdXRlcy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzTmluZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZU5pbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQSByZXNlcnZhdGlvbiBpcyBvZmZpY2lhbGx5IGNhbmNlbGVkIHdoZW4gdGhlIGd1ZXN0IGNsaWNrcyB0aGUgY2FuY2VsbGF0aW9uIGJ1dHRvbiBvbiB0aGUgY2FuY2VsbGF0aW9uIGNvbmZpcm1hdGlvbiBwYWdlLCB3aGljaCB0aGV5IGNhbiBmaW5kIGluIERhc2hib2FyZCA+IFlvdXIgVHJpcHMgPiBDYW5jZWwuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc1Rlbjoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJDYW5jZWxsYXRpb24gcG9saWNpZXMgbWF5IGJlIHN1cGVyc2VkZWQgYnkgdGhlIEd1ZXN0IFJlZnVuZCBQb2xpY3ksIGV4dGVudWF0aW5nIGNpcmN1bXN0YW5jZXMsIG9yIGNhbmNlbGxhdGlvbnMgYnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzRWxldmVuOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlRWxldmVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwbGljYWJsZSB0YXhlcyB3aWxsIGJlIHJldGFpbmVkIGFuZCByZW1pdHRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzVHdlbHZlOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbERldGFpbHNUd2VsdmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiZm9yIGFueSBvdGhlciByZWFzb24gcGVybWl0dGVkIHVuZGVyIHRoZSBUZXJtcyBvZiBTZXJ2aWNlLiBQbGVhc2UgcmV2aWV3IHRoZXNlIGV4Y2VwdGlvbnMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgZGF5UHJpb3I6IHtcbiAgICBpZDogXCJhcHAuZGF5UHJpb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJkYXkgUHJpb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBtb250aHM6IHtcbiAgICBpZDogXCJhcHAubW9udGhzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGh1LCBKdW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRpbWU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVUaW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUE1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVR3ZWx2ZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVR3ZWx2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJGb3IgYSBmdWxsIHJlZnVuZCBvZiBhY2NvbW1vZGF0aW9uIGZlZXMsIGNhbmNlbGxhdGlvbiBtdXN0IGJlIG1hZGUgYSBmdWxsIDI0IGhvdXJzIHByaW9yIHRvIGxpc3RpbmfigJlzIGxvY2FsIGNoZWNrIGluIHRpbWUgKG9yIDM6MDAgUE0gaWYgbm90IHNwZWNpZmllZCkgb24gdGhlIGRheSBvZiBjaGVjayBpbi4gRm9yIGV4YW1wbGUsIGlmIGNoZWNrLWluIGlzIG9uIEZyaWRheSwgY2FuY2VsIGJ5IFRodXJzZGF5IG9mIHRoYXQgd2VlayBiZWZvcmUgY2hlY2sgaW4gdGltZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRoaXJ0ZWVuOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGhpcnRlZW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSWYgdGhlIGd1ZXN0IGNhbmNlbHMgbGVzcyB0aGFuIDI0IGhvdXJzIGJlZm9yZSBjaGVjay1pbiwgdGhlIGZpcnN0IG5pZ2h0IGlzIG5vbi1yZWZ1bmRhYmxlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlRm91cnRlZW46IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVGb3VydGVlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJZiB0aGUgZ3Vlc3QgYXJyaXZlcyBhbmQgZGVjaWRlcyB0byBsZWF2ZSBlYXJseSwgdGhlIGFjY29tbW9kYXRpb24gZmVlcyBmb3IgdGhlIG5pZ2h0cyBub3Qgc3BlbnQgMjQgaG91cnMgYWZ0ZXIgdGhlIG9mZmljaWFsIGNhbmNlbGxhdGlvbiBhcmUgZnVsbHkgcmVmdW5kZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgZXhhbXBsZToge1xuICAgIGlkOiBcImFwcC5leGFtcGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXhhbXBsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlU2Vjb25kTW9udGhzOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlU2Vjb25kTW9udGhzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRnJpLCBKdW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVNlY29uZFRpbWU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVTZWNvbmRUaW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQU1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRoaXJkTW9udGhzOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGhpcmRNb250aHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb24sIEp1blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGhpcmRNb250aHNOdW1iZXJPbmU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVUaGlyZE1vbnRoc051bWJlck9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjA4XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgZmxleGlibGVUaGlyZE1vbnRoc051bWJlclR3bzoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRoaXJkTW9udGhzTnVtYmVyVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMDlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRoaXJkTW9udGhzTnVtYmVyVGhyZWU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVUaGlyZE1vbnRoc051bWJlclRocmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMTJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRoaXJkTW9udGhzVGltZU9uZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRoaXJkTW9udGhzVGltZU9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjM6MDBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRoaXJkTW9udGhzVGltZVR3bzoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRoaXJkTW9udGhzVGltZVR3b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjExLjAwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgbW9kZXJhdGVUaXRsZToge1xuICAgIGlkOiBcImFwcC5tb2RlcmF0ZVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9kZXJhdGU6IEZ1bGwgcmVmdW5kIDUgZGF5cyBwcmlvciB0byBhcnJpdmFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9kZXJhdGVcIixcbiAgfSxcbiAgZGF5c1ByaW9yOiB7XG4gICAgaWQ6IFwiYXBwLmRheXNQcmlvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImRheXMgUHJpb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBtb2RlcmF0ZU9uZToge1xuICAgIGlkOiBcImFwcC5tb2RlcmF0ZU9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJGb3IgYSBmdWxsIHJlZnVuZCBvZiBhY2NvbW1vZGF0aW9uIGZlZXMsIGNhbmNlbGxhdGlvbiBtdXN0IGJlIG1hZGUgZml2ZSBmdWxsIGRheXMgcHJpb3IgdG8gbGlzdGluZ+KAmXMgbG9jYWwgY2hlY2sgaW4gdGltZSAob3IgMzowMCBQTSBpZiBub3Qgc3BlY2lmaWVkKSBvbiB0aGUgZGF5IG9mIGNoZWNrIGluLiBGb3IgZXhhbXBsZSwgaWYgY2hlY2staW4gaXMgb24gRnJpZGF5LCBjYW5jZWwgYnkgdGhlIHByZXZpb3VzIFN1bmRheSBiZWZvcmUgY2hlY2sgaW4gdGltZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBtb2RlcmF0ZVR3bzoge1xuICAgIGlkOiBcImFwcC5tb2RlcmF0ZVR3b1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJZiB0aGUgZ3Vlc3QgY2FuY2VscyBsZXNzIHRoYW4gNSBkYXlzIGluIGFkdmFuY2UsIHRoZSBmaXJzdCBuaWdodCBpcyBub24tcmVmdW5kYWJsZSBidXQgNTAlIG9mIHRoZSBhY2NvbW1vZGF0aW9uIGZlZXMgZm9yIHJlbWFpbmluZyBuaWdodHMgd2lsbCBiZSByZWZ1bmRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBtb2RlcmF0ZVRocmVlOiB7XG4gICAgaWQ6IFwiYXBwLm1vZGVyYXRlVGhyZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSWYgdGhlIGd1ZXN0IGFycml2ZXMgYW5kIGRlY2lkZXMgdG8gbGVhdmUgZWFybHksIDUwJSBvZiB0aGUgYWNjb21tb2RhdGlvbiBmZWVzIGZvciB0aGUgbmlnaHRzIG5vdCBzcGVudCAyNCBob3VycyBhZnRlciB0aGUgY2FuY2VsbGF0aW9uIG9jY3VycyBhcmUgcmVmdW5kZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9kZXJhdGVcIixcbiAgfSxcbiAgbW9kZXJhdGVNb250aHNOdW1iZXJPbmU6IHtcbiAgICBpZDogXCJhcHAubW9kZXJhdGVNb250aHNOdW1iZXJPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIG1vZGVyYXRlTW9udGhzTnVtYmVyVHdvOiB7XG4gICAgaWQ6IFwiYXBwLm1vZGVyYXRlTW9udGhzTnVtYmVyVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMTZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBzdHJpY3RUaXRsZToge1xuICAgIGlkOiBcImFwcC5zdHJpY3RUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0cmljdDogNTAlIHJlZnVuZCB1cCB1bnRpbCAxIHdlZWsgcHJpb3IgdG8gYXJyaXZhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIHN0cmljdE9uZToge1xuICAgIGlkOiBcImFwcC5zdHJpY3RPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRm9yIGEgNTAlIHJlZnVuZCBvZiBhY2NvbW1vZGF0aW9uIGZlZXMsIGNhbmNlbGxhdGlvbiBtdXN0IGJlIG1hZGUgc2V2ZW4gZnVsbCBkYXlzIHByaW9yIHRvIGxpc3RpbmfigJlzIGxvY2FsIGNoZWNrIGluIHRpbWUgKG9yIDM6MDAgUE0gaWYgbm90IHNwZWNpZmllZCkgb24gdGhlIGRheSBvZiBjaGVjayBpbiwgb3RoZXJ3aXNlIG5vIHJlZnVuZC4gRm9yIGV4YW1wbGUsIGlmIGNoZWNrLWluIGlzIG9uIEZyaWRheSwgY2FuY2VsIGJ5IEZyaWRheSBvZiB0aGUgcHJldmlvdXMgd2VlayBiZWZvcmUgY2hlY2sgaW4gdGltZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBzdHJpY3RUd286IHtcbiAgICBpZDogXCJhcHAuc3RyaWN0VHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIklmIHRoZSBndWVzdCBjYW5jZWxzIGxlc3MgdGhhbiA3IGRheXMgaW4gYWR2YW5jZSwgdGhlIHJlbWFpbmluZyBuaWdodHMgYXJlIG5vdCByZWZ1bmRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBzdHJpY3RUaHJlZToge1xuICAgIGlkOiBcImFwcC5zdHJpY3RUaHJlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJZiB0aGUgZ3Vlc3QgYXJyaXZlcyBhbmQgZGVjaWRlcyB0byBsZWF2ZSBlYXJseSwgdGhlIHJlbWFpbmluZyBuaWdodHMgYXJlIG5vdCByZWZ1bmRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBzdHJpY3RNb250aHNPbmU6IHtcbiAgICBpZDogXCJhcHAuc3RyaWN0TW9udGhzT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMTVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBzdHJpY3RNb250aHNUd286IHtcbiAgICBpZDogXCJhcHAuc3RyaWN0TW9udGhzVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMThcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBzcGFjZUZyZWVPbmU6IHtcbiAgICBpZDogXCJhcHAuc3BhY2VGcmVlT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmluZCBvdXQgaG93IG11Y2ggeW91IGNvdWxkIGVhcm4gaG9zdGluZyB5b3VyIHBsYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3BhY2UgRnJlZVwiLFxuICB9LFxuICBzcGFjZUZyZWVUd286IHtcbiAgICBpZDogXCJhcHAuc3BhY2VGcmVlVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHVybiB5b3VyIGV4dHJhIHNwYWNlIGludG8gZXh0cmEgaW5jb21lLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwYWNlIEZyZWVcIixcbiAgfSxcbiAgZnJlZU91dE1vcmU6IHtcbiAgICBpZDogXCJhcHAuZnJlZU91dE1vcmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaW5kIG91dCBtb3JlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3BhY2UgRnJlZVwiLFxuICB9LFxuICBMaXN0UGxhY2VUaXBPbmU6IHtcbiAgICBpZDogXCJhcHAuTGlzdFBsYWNlVGlwT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW50aXJlIHBsYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBQbGNlIFRpcHNcIixcbiAgfSxcbiAgTGlzdFBsYWNlVGlwc1R3bzoge1xuICAgIGlkOiBcImFwcC5MaXN0UGxhY2VUaXBzVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3RzIHdpbGwgcmVudCB0aGUgZW50aXJlIHBsYWNlLiBJbmNsdWRlcyBpbi1sYXcgdW5pdHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBQbGNlIFRpcHNcIixcbiAgfSxcbiAgTGlzdFBsYWNlVGlwMzoge1xuICAgIGlkOiBcImFwcC5MaXN0UGxhY2VUaXAzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9yZW0gSXBzdW0gVGV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgUGxjZSBUaXBzXCIsXG4gIH0sXG4gIExpc3RQbGFjZVRpcHM0OiB7XG4gICAgaWQ6IFwiYXBwLkxpc3RQbGFjZVRpcHM0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0IFBsY2UgVGlwc1wiLFxuICB9LFxuICBMaXN0UGxhY2VUaXA1OiB7XG4gICAgaWQ6IFwiYXBwLkxpc3RQbGFjZVRpcDVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeGNlcHRldXIgc2ludCBvY2NhZWNhdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgUGxjZSBUaXBzXCIsXG4gIH0sXG4gIExpc3RQbGFjZVRpcHM2OiB7XG4gICAgaWQ6IFwiYXBwLkxpc3RQbGFjZVRpcHM2XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcInNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgUGxjZSBUaXBzXCIsXG4gIH0sXG4gIHJlbW92ZUZpbGU6IHtcbiAgICBpZDogXCJhcHAucmVtb3ZlRmlsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlbW92ZSBmaWxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVtb3ZlIGZpbGVcIixcbiAgfSxcbiAgU2F5eW91cnNwYWNlOiB7XG4gICAgaWQ6IFwiYXBwLlNheXlvdXJzcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNheSB5b3VyIHNwYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2F5eW91cnNwYWNlXCIsXG4gIH0sXG4gIGFib3V0RGVzY1BheW1lbnQ6IHtcbiAgICBpZDogXCJhcHAuYWJvdXREZXNjUGF5bWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJUZWxsIHlvdXIgZXhwZWN0YXRpb25zIGFuZCB0aGUgbnVtYmVyIG9mIGd1ZXN0cyB5b3UgYXJlIGJyaW5naW5nIHdpdGggeW91IHNvIHRoYXQgdGhlIGhvc3QgY2FuIG1ha2UgeW91ciB0cmlwIGFuIG9yZ2FuaXplZCBhbmQgYSBwZXJmZWN0IHRyaXAgeW91IGV2ZXIgaGFkIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNheXlvdXJzcGFjZVwiLFxuICB9LFxuICBhdmFpbGFibGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5hdmFpbGFibGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkF2YWlsYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgU3RlcDNcIixcbiAgfSxcbiAgYmxvY2tMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ibG9ja0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmxvY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIFN0ZXAzXCIsXG4gIH0sXG4gIGZpZWxkUGFnZToge1xuICAgIGlkOiBcImFwcC5maWVsZFBhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZVwiLFxuICB9LFxuICBjb3ZlckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb3ZlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgU3RlcDJcIixcbiAgfSxcbiAgd2FybmluZ0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLndhcm5pbmdMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldhcm5pbmdcIixcbiAgfSxcbiAgY29tcGxldGVSZXF1ZXN0OiB7XG4gICAgaWQ6IFwiYXBwLmNvbXBsZXRlUmVxdWVzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldlIGNvdWxkbid0IGNvbXBsZXRlIHlvdXIgcmVxdWVzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldhcm5pbmdcIixcbiAgfSxcbiAgZXJyb3JDb2RlV2FybmluZzoge1xuICAgIGlkOiBcImFwcC5lcnJvckNvZGVXYXJuaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXJyb3IgY29kZTpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXYXJuaW5nXCIsXG4gIH0sXG4gIGhlbHBmdWxMaW5rczoge1xuICAgIGlkOiBcImFwcC5oZWxwZnVsTGlua3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZXJlIGFyZSBzb21lIGhlbHBmdWwgbGlua3MgaW5zdGVhZDpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXYXJuaW5nXCIsXG4gIH0sXG4gIGNob29zZUxhbmd1YWdlOiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUxhbmd1YWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIGEgTGFuZ3VhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgYSBMYW5ndWFnZVwiLFxuICB9LFxuICBjaG9vc2VBQ3VycmVuY3k6IHtcbiAgICBpZDogXCJhcHAuY2hvb3NlQUN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIGEgQ3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgYSBDdXJyZW5jeVwiLFxuICB9LFxuICBwYXlvdXRGYWlsdXJlOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEZhaWx1cmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPb3BzISBXZSBhcmUgc29ycnkhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVWgtb2gsIHRoZSByZWdpc3RyYXRpb24gaGFzIGZhaWxlZC5cIixcbiAgfSxcbiAgcGF5b3V0RmFpbHVyZVN1YnRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEZhaWx1cmVTdWJ0aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJDb25uZWN0aW5nIHlvdXIgYmFuayBhY2NvdW50IHdpdGggdGhlIHBsYXRmb3JtIHZlcmlmaWNhdGlvbiBpcyBmYWlsZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGxlYXNlIGFkZCBhIHZhbGlkIFNTTi5cIixcbiAgfSxcbiAgcGF5b3V0RmFpbHVyZUNvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0RmFpbHVyZUNvbnRlbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgICdQbGVhc2UgdHJ5IGFnYWluIHRvIGFkZCB5b3VyIGJhbmsgYWNjb3VudCB3aXRoIHRoZSBwbGF0Zm9ybSBieSBjbGlja3RpbmcgdGhlIFwiUmV0cnlcIiBvcHRpb24gb3IgQWRkIGEgbmV3IHBheW91dCBhY2NvdW50IGJ5IGNsaWNraW5nIHRoZSBcIkFkZCBQYXlvdXQgTWV0aG9kXCIuJyxcbiAgICBkZXNjcmlwdGlvbjogXCJQbGVhc2UgYWRkIGEgdmFsaWQgU1NOLlwiLFxuICB9LFxuICBwYXltZW50Q2FyZE51bWJlcjoge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q2FyZE51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhcmQgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY2FyZE51bWJlclwiLFxuICB9LFxuICBwYXlvdXRUeXBlOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dFR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvdW50IFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXQgQWNjb3VudCBUeXBlXCIsXG4gIH0sXG4gIHBheW91dEluZGl2aWR1YWw6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0SW5kaXZpZHVhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkluZGl2aWR1YWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmRpdmlkdWFsIHRleHRcIixcbiAgfSxcbiAgcGF5b3V0Q29tcGFueToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRDb21wYW55XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29tcGFueVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbXBhbnkgdGV4dFwiLFxuICB9LFxuICBwYXlvdXRDb21wYW55TmFtZToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRDb21wYW55TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbXBhbnkgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbXBhbnkgdGV4dFwiLFxuICB9LFxuICBwYXlvdXRTdHJpcGVJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dFN0cmlwZUluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgICdXZSB1c2UgU3RyaXBlIHRvIG1ha2Ugc3VyZSB5b3UgZ2V0IHBhaWQgb24gdGltZSBhbmQgdG8ga2VlcCB5b3VyIHBlcnNvbmFsIGJhbmsgYW5kIGRldGFpbHMgc2VjdXJlLiBDbGljayBcIkZpbmlzaFwiIHRvIHNldCB1cCB5b3VyIHBheW1lbnRzIG9uIFN0cmlwZS4nLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0cmlwZSB0ZXh0IGluZm9cIixcbiAgfSxcbiAgbm90UmVhZHk6IHtcbiAgICBpZDogXCJhcHAubm90UmVhZHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb3QgUmVhZHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHBheW91dFZlcmlmeToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRWZXJpZnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWZXJpZnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHBheW91dFJldHJ5OiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dFJldHJ5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV0cnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHBheW91dFZlcmlmeVN0cmlwZUluZm86IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VmVyaWZ5U3RyaXBlSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXZSB1c2UgU3RyaXBlIHRvIG1ha2Ugc3VyZSB5b3UgZ2V0IHBhaWQgb24gdGltZSBzYWZlIGFuZCBzZWN1cmUuIEl0IHJlcXVpcmVzIGFkZGl0aW9uYWwgdmVyaWZpY2F0aW9uIHRvIGNvbm5lY3QgeW91ciBiYW5rIGFjY291bnQgd2l0aCB0aGUgcGxhdGZvcm0uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICByZXNlcnZhdGlvbklzQ29tcGxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uSXNDb21wbGV0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBpcyBjb21wbGV0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2UgYWN0aW9uXCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uSXNDb21wbGV0ZWREZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbklzQ29tcGxldGVkRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBvZiB5b3VyIGxpc3RpbmcgaXMgY29tcGxldGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbWVzc2FnZSBhY3Rpb25cIixcbiAgfSxcbiAgYXZlcmFnZVByaWNlUGVyTmlnaHQ6IHtcbiAgICBpZDogXCJhcHAuYXZlcmFnZVByaWNlUGVyTmlnaHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBdmVyYWdlIHJhdGUgcGVyIG5pZ2h0IGZvciB5b3VyIHRyaXAuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9vbHRpcFwiLFxuICB9LFxuICBleHBvcnRDYWxlbmRhcjoge1xuICAgIGlkOiBcImFwcC5leHBvcnRDYWxlbmRhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkV4cG9ydCBDYWxlbmRhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4cG9ydENhbGVuZGFyXCIsXG4gIH0sXG4gIGV4cG9ydENhbGVuZGFyRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuZXhwb3J0Q2FsZW5kYXJEZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvcHkgYW5kIHBhc3RlIHRoZSBsaW5rIGludG8gb3RoZXIgSUNBTCBhcHBsaWNhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJleHBvcnRDYWxlbmRhclwiLFxuICB9LFxuICBpbXBvcnRDYWxlbmRhcjoge1xuICAgIGlkOiBcImFwcC5pbXBvcnRDYWxlbmRhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkltcG9ydCBhIE5ldyBDYWxlbmRhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImltcG9ydENhbGVuZGFyXCIsXG4gIH0sXG4gIGltcG9ydENhbGVuZGFyRGVzYzoge1xuICAgIGlkOiBcImFwcC5pbXBvcnRDYWxlbmRhckRlc2NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSW1wb3J0IG90aGVyIGNhbGVuZGFycyB5b3UgdXNlIGFuZCB3ZeKAmWxsIGF1dG9tYXRpY2FsbHkga2VlcCB0aGlzIGxpc3RpbmfigJlzIGF2YWlsYWJpbGl0eSB1cC10by1kYXRlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImltcG9ydENhbGVuZGFyXCIsXG4gIH0sXG4gIGltcG9ydENhbGVuZGFyRGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaW1wb3J0Q2FsZW5kYXJEZXNjMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbGVuZGFyIEFkZHJlc3MgKFVSTClcIixcbiAgICBkZXNjcmlwdGlvbjogXCJpbXBvcnRDYWxlbmRhclwiLFxuICB9LFxuICBpbXBvcnRDYWxlbmRhckRlc2MyOiB7XG4gICAgaWQ6IFwiYXBwLmltcG9ydENhbGVuZGFyRGVzYzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYWxlbmRhciBBZGRyZXNzIChVUkwpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW1wb3J0Q2FsZW5kYXJcIixcbiAgfSxcbiAgaW1wb3J0Q2FsZW5kYXJCdG46IHtcbiAgICBpZDogXCJhcHAuaW1wb3J0Q2FsZW5kYXJCdG5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbXBvcnQgQ2FsZW5kYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJpbXBvcnRDYWxlbmRhclwiLFxuICB9LFxuICBib29rZWQ6IHtcbiAgICBpZDogXCJhcHAuYm9va2VkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2VkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FsZW5kYXJcIixcbiAgfSxcbiAgbm90QXZhaWxhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vdEF2YWlsYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vdCBBdmFpbGFibGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYWxlbmRhclwiLFxuICB9LFxuICBkaXNjb3VudFN0YXlzOiB7XG4gICAgaWQ6IFwiYXBwLmRpc2NvdW50U3RheXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEaXNjb3VudCBmb3IgbG9uZ2VyIHN0YXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaXNjb3VudFwiLFxuICB9LFxuICB5ZXNUZXh0OiB7XG4gICAgaWQ6IFwiYXBwLnllc1RleHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ5ZXNcIixcbiAgfSxcbiAgbm9UZXh0OiB7XG4gICAgaWQ6IFwiYXBwLm5vVGV4dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm9cIixcbiAgfSxcbiAgdmVyaWZpY2F0aW9uRGVzYzoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25EZXNjXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSWYgaXQgZG9lc24ndCBhcnJpdmUsIGNsaWNrIGNhbmNlbCBhbmQgdHJ5IGFnYWluLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZlcmlmaWNhdGlvblwiLFxuICB9LFxuICBjb25maXJtZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb25maXJtZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm1lZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpcm1lZFwiLFxuICB9LFxuICBjb25maXJtTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uZmlybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbmZpcm1cIixcbiAgfSxcbiAgdXBsb2FkU2l6ZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC51cGxvYWRTaXplZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSB1cGxvYWQgc2l6ZTpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ1cGxvYWRTaXplZExhYmVsXCIsXG4gIH0sXG4gIHJlY2VwaXRJbmZvRGVzYzoge1xuICAgIGlkOiBcImFwcC5yZWNlcGl0SW5mb0Rlc2NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBdmVyYWdlIHJhdGUgcGVyIG5pZ2h0IGZvciB5b3VyIHRyaXAuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdCBJbmZvXCIsXG4gIH0sXG4gIHNob3dNYXA6IHtcbiAgICBpZDogXCJhcHAuc2hvd01hcFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNob3cgTWFwXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2hvd01hcFwiLFxuICB9LFxuICBzaGFyZU1vZGFsOiB7XG4gICAgaWQ6IFwiYXBwLnNoYXJlTW9kYWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb2RhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNoYXJlTW9kYWxcIixcbiAgfSxcbiAgc2hhcmVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zaGFyZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hhcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzaGFyZUxhYmVsXCIsXG4gIH0sXG4gIGVtYWlsTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZW1haWxMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZW1haWxMYWJlbFwiLFxuICB9LFxuICBpbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmluTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImluTGFiZWxcIixcbiAgfSxcbiAgc29jaWFsU2hhcmVEZXNjOiB7XG4gICAgaWQ6IFwiYXBwLnNvY2lhbFNoYXJlRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoZWNrIG91dCB0aGlzIGF3ZXNvbWUgbGlzdGluZyBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNvY2lhbFNoYXJlRGVzY1wiLFxuICB9LFxuICB0cmlwQ29tcGxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLnRyaXBDb21wbGV0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcmlwIGlzIGNvbXBsZXRlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInRyaXBDb21wbGV0ZWRcIixcbiAgfSxcbiAgY291bnRpbmdTZWN0aW9uTnVtYmVyT25lOiB7XG4gICAgaWQ6IFwiYXBwLmNvdW50aW5nU2VjdGlvbk51bWJlck9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjIuOU1cIixcbiAgICBkZXNjcmlwdGlvbjogXCIyLjlNXCIsXG4gIH0sXG4gIGNvdW50aW5nU2VjdGlvbk51bWJlclR3bzoge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb25OdW1iZXJUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCI4MDBLXCIsXG4gICAgZGVzY3JpcHRpb246IFwiODAwS1wiLFxuICB9LFxuICBjb3VudGluZ1NlY3Rpb25OdW1iZXJUaHJlZToge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb25OdW1iZXJUaHJlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjE0S1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIjE0S1wiLFxuICB9LFxuICByZWFkeVRvRWFybjoge1xuICAgIGlkOiBcImFwcC5yZWFkeVRvRWFyblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlYWR5IHRvIGVhcm4/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhZHkgdG8gZWFybj9cIixcbiAgfSxcbiAgcmVhZHlUb0Vhcm5EZXNjOiB7XG4gICAgaWQ6IFwiYXBwLnJlYWR5VG9FYXJuRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdldCBzdGFydGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhZHkgdG8gZWFybj9cIixcbiAgfSxcbiAgdGF4UmF0ZToge1xuICAgIGlkOiBcImFwcC50YXhSYXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGF4IFJhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYXggUmF0ZVwiLFxuICB9LFxuICB0YXhSYXRlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudGF4UmF0ZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBsZWFzZSBhZGQgaW4gdGhlIGFwcHJvcHJpYXRlIHRheCByYXRlIHRvIGNvdmVyIGFueSBsb2NhbCBhbmQgc3RhdGUgdGF4ZXMgeW91IG1heSBiZSByZXNwb25zaWJsZSBmb3IuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGF4IFJhdGUgTGFiZWxcIixcbiAgfSxcbiAgdGF4UmF0ZUludmFsaWRFcnJvcjoge1xuICAgIGlkOiBcImFwcC50YXhSYXRlSW52YWxpZEVycm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkludmFsaWQgdGF4IHJhdGUuIFRoZSB0YXggcmF0ZSBtdXN0IGJlIGJldHdlZW4gMSUgYW5kIDk5JS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIGRpc2NvdW50XCIsXG4gIH0sXG4gIGVtYWlsQWRkcmVzc0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmVtYWlsQWRkcmVzc0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW1haWwgYWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVtYWlsIGFkZHJlc3NcIixcbiAgfSxcbiAgaG91c2VSdWxlc0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvdXNlUnVsZXNMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIidzIEhvdXNlIFJ1bGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiJ3MgSG91c2UgUnVsZXNcIixcbiAgfSxcbiAgY29udGVudExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRlbnRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250ZW50XCIsXG4gIH0sXG4gIENob29zZUZvb3RlckNhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLkNob29zZUZvb3RlckNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIEZvb3RlciBDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNob29zZSBGb290ZXIgQ2F0ZWdvcnlcIixcbiAgfSxcbiAgbWV0YVRpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubWV0YVRpdGxlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRhIFRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWV0YSBUaXRsZVwiLFxuICB9LFxuICBtZXRhRGVzY3JpcHRpb25MYWJlbDoge1xuICAgIGlkOiBcImFwcC5tZXRhRGVzY3JpcHRpb25MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1ldGEgRGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXRhIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIHBhZ2VUaXRsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnBhZ2VUaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFnZSBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhZ2UgVGl0bGVcIixcbiAgfSxcbiAgcGFnZVVybDoge1xuICAgIGlkOiBcImFwcC5wYWdlVXJsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFnZSBVUkxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIFVSTFwiLFxuICB9LFxuICBwYWdlVXJsRXhhbXBsZToge1xuICAgIGlkOiBcImFwcC5wYWdlVXJsRXhhbXBsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgVVJMICBlZy4ocGFnZVVSTClcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIFVSTCAgZWcuKHBhZ2VVUkwpXCIsXG4gIH0sXG4gIGZvb3RlckNhdGVnb3J5TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZm9vdGVyQ2F0ZWdvcnlMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZvb3RlciBDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvb3RlciBDYXRlZ29yeVwiLFxuICB9LFxuICBwYWdlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAucGFnZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiL3BhZ2UvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiL3BhZ2UvXCIsXG4gIH0sXG4gIGxvYWRpbmdMYWJlbDoge1xuICAgIGlkOiBcImFwcC5sb2FkaW5nTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2FkaW5nLi4uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9hZGluZy4uLlwiLFxuICB9LFxuICBpbWFnZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmltYWdlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbWFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkltYWdlXCIsXG4gIH0sXG4gIGxvY2F0aW9uQWRkcmVzczoge1xuICAgIGlkOiBcImFwcC5sb2NhdGlvbkFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2NhdGlvbiBBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9jYXRpb24gQWRkcmVzc1wiLFxuICB9LFxuICBzdWJUaXRsZToge1xuICAgIGlkOiBcImFwcC5zdWJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBUaXRsZVwiLFxuICB9LFxuICB0b3RhbFVzZXJzOiB7XG4gICAgaWQ6IFwiYXBwLnRvdGFsVXNlcnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUb3RhbCBVc2Vyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvdGFsIFVzZXJzXCIsXG4gIH0sXG4gIGxhc3QyNEhvdXJzOiB7XG4gICAgaWQ6IFwiYXBwLmxhc3QyNEhvdXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCAyNCBob3VycyBVc2Vyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgMjQgaG91cnMgVXNlcnNcIixcbiAgfSxcbiAgbGFzdDMwRGF5czoge1xuICAgIGlkOiBcImFwcC5sYXN0MzBEYXlzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCAzMCBkYXlzIFVzZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGFzdCAzMCBkYXlzIFVzZXJzXCIsXG4gIH0sXG4gIGxhc3QzMERheXNMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLmxhc3QzMERheXNMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCAzMCBkYXlzIExpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGFzdCAzMCBkYXlzIExpc3RpbmdzXCIsXG4gIH0sXG4gIGxhc3QyNEhvdXJzTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5sYXN0MjRIb3Vyc0xpc3RpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMYXN0IDI0IGhvdXJzIExpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGFzdCAyNCBob3VycyBMaXN0aW5nc1wiLFxuICB9LFxuICB0b3RhbExpc3RpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLnRvdGFsTGlzdGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUb3RhbCBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvdGFsIExpc3RpbmdzXCIsXG4gIH0sXG4gIHllYXIyMDIwOiB7XG4gICAgaWQ6IFwiYXBwLnllYXIyMDIwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWWVhciAtIDIwMjBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZZWFyIC0gMjAyMFwiLFxuICB9LFxuICB0b3RhbFJlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnRvdGFsUmVzZXJ2YXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUb3RhbCBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgbGFzdDI0SG91cnNSZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5sYXN0MjRIb3Vyc1Jlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCAyNCBob3VycyBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYXN0IDI0IGhvdXJzIFJlc2VydmF0aW9uc1wiLFxuICB9LFxuICBsYXN0MzBEYXlzUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAubGFzdDMwRGF5c1Jlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCAzMCBkYXlzICBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYXN0IDMwIGRheXMgIFJlc2VydmF0aW9uc1wiLFxuICB9LFxuICBjb3B5UmlnaHRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb3B5UmlnaHRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvcHlyaWdodFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvcHlyaWdodFwiLFxuICB9LFxuICBjb3B5UmlnaHRMYWJlbERlc2M6IHtcbiAgICBpZDogXCJhcHAuY29weVJpZ2h0TGFiZWxEZXNjXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxsIHJpZ2h0cyByZXNlcnZlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgcmlnaHRzIHJlc2VydmVkLlwiLFxuICB9LFxuICBsb2dJbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ0luTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2cgaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2cgaW5cIixcbiAgfSxcbiAgYWRtaW5sb2dJbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWlubG9nSW5MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkbWluIExvZ2luXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRtaW4gTG9naW5cIixcbiAgfSxcbiAgbGlzdElkOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3QgSURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0IElEXCIsXG4gIH0sXG4gIHJldmlld0NvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdDb250ZW50TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgQ29udGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlldyBDb250ZW50XCIsXG4gIH0sXG4gIGdvVG9NYWluU2l0ZToge1xuICAgIGlkOiBcImFwcC5nb1RvTWFpblNpdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHbyBUbyBNYWluIFNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHbyBUbyBNYWluIFNpdGVcIixcbiAgfSxcbiAgYWRkTmV3TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRkTmV3TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgTmV3XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIE5ld1wiLFxuICB9LFxuICBlZGl0TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZWRpdExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVkaXRcIixcbiAgfSxcblxuICByZWplY3Q6IHtcbiAgICBpZDogXCJhcHAucmVqZWN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIFJlamVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVkaXRcIixcbiAgfSxcbiAgYXBwcm92ZXM6IHtcbiAgICBpZDogXCJhcHAuYXBwcm92ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgQXBwcm92ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVkaXRcIixcbiAgfSxcbiAgaG9zdFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIGhvc3RIb3N0TmFtZToge1xuICAgIGlkOiBcImFwcC5ob3N0SG9zdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgSG9zdCBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdE5hbWVcIixcbiAgfSxcbiAgaG9zdEhvc3RFbWFpbDoge1xuICAgIGlkOiBcImFwcC5ob3N0SG9zdEVtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIEhvc3QgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0RW1haWxcIixcbiAgfSxcblxuICBob3N0QWRkcmVzczoge1xuICAgIGlkOiBcImFwcC5ob3N0QWRkcmVzc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkcmVzc1wiLFxuICB9LFxuXG4gIGhvc3RDaXR5OiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RDaXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIENpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaXR5XCIsXG4gIH0sXG4gIGhvc3RTdGF0ZToge1xuICAgIGlkOiBcImFwcC5ob3N0U3RhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgU3RhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0ZVwiLFxuICB9LFxuICBob3N0Q291bnRyeToge1xuICAgIGlkOiBcImFwcC5ob3N0Q291bnRyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBDb3VudHJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ291bnRyeVwiLFxuICB9LFxuICBob3N0Q3JlYXRlZERhdGU6IHtcbiAgICBpZDogXCJhcHAuaG9zdENyZWF0ZWREYXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3JlYXRlZCBEYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXHRDcmVhdGVkIERhdGVcIixcbiAgfSxcbiAgYWRtaW5Sb2xlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5Sb2xlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZG1pbiBSb2xlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRtaW4gUm9sZVwiLFxuICB9LFxuICBhZG1pblVzZXJMYWJlbDoge1xuICAgIGlkOiBcImFwcC5hZG1pblVzZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkbWluIFVzZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZG1pbiBVc2VyXCIsXG4gIH0sXG4gIGFkZFBhZ2VMYWJlbDoge1xuICAgIGlkOiBcImFwcC5hZGRQYWdlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgUGFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBQYWdlXCIsXG4gIH0sXG4gIGVuYWJsZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5lbmFibGVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbmFibGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW5hYmxlZFwiLFxuICB9LFxuICBkaXNhYmxlZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmRpc2FibGVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEaXNhYmxlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2FibGVkXCIsXG4gIH0sXG4gIGhvc3RMaXN0aW5nU3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RMaXN0aW5nU3RhdHVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGVuZGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlbmRpbmdcIixcbiAgfSxcblxuICBlbmFibGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5lbmFibGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVuYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVuYWJsZVwiLFxuICB9LFxuICBkaXNhYmxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZGlzYWJsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2FibGVcIixcbiAgfSxcbiAgYWRkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGRcIixcbiAgfSxcbiAgc2V0QmFzZUN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLnNldEJhc2VDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCBhcyBiYXNlIGN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0IGFzIGJhc2UgY3VycmVuY3lcIixcbiAgfSxcbiAgZGF0ZU9mQmlydGhMYWJlbDoge1xuICAgIGlkOiBcImFwcC5kYXRlT2ZCaXJ0aExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGF0ZSBPZiBCaXJ0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhdGUgT2YgQmlydGhcIixcbiAgfSxcbiAgaW5mb0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmluZm9MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkluZm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmZvXCIsXG4gIH0sXG4gIHRpdGxlQWRtaW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC50aXRsZUFkbWluTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIGJhbm5lckltYWdlOiB7XG4gICAgaWQ6IFwiYXBwLmJhbm5lckltYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFubmVyIEltYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFubmVyIEltYWdlXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uQWRtaW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvbkFkbWluTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGJ1dHRvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJ1dHRvbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQnV0dG9uIExhYmVsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnV0dG9uIExhYmVsXCIsXG4gIH0sXG4gIGJvdHRvbVRleHQ6IHtcbiAgICBpZDogXCJhcHAuYm90dG9tVGV4dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvdHRvbSBUZXh0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm90dG9tIFRleHRcIixcbiAgfSxcbiAgSWNvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLkljb25MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkljb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJY29uXCIsXG4gIH0sXG4gIG1hbmFnZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlXCIsXG4gIH0sXG4gIGxpc3RTZXR0aW5nczoge1xuICAgIGlkOiBcImFwcC5saXN0U2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0IFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBTZXR0aW5nc1wiLFxuICB9LFxuICByZXNlcnZhdGlvbklkOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uSWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc2VydmF0aW9uIElEXCIsXG4gIH0sXG4gIGFkbWluTGlzdFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluTGlzdFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdCBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgVGl0bGVcIixcbiAgfSxcbiAgY29kZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvZGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb2RlXCIsXG4gIH0sXG4gIGhvc3ROYW1lTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG9zdE5hbWVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgTmFtZVwiLFxuICB9LFxuICBwYXlvdXRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dCBBbW91bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgQW1vdW50XCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uU3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uU3RhdHVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzZXJ2YXRpb24gU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzZXJ2YXRpb24gU3RhdHVzXCIsXG4gIH0sXG4gIHBheW91dFN0YXR1czoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRTdGF0dXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXQgU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IFN0YXR1c1wiLFxuICB9LFxuICBob2xkUGF5b3V0OiB7XG4gICAgaWQ6IFwiYXBwLmhvbGRQYXlvdXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb2xkIFBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvbGQgUGF5b3V0XCIsXG4gIH0sXG4gIGxpdmU6IHtcbiAgICBpZDogXCJhcHAubGl2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXZlXCIsXG4gIH0sXG4gIHNhbmRib3g6IHtcbiAgICBpZDogXCJhcHAuc2FuZGJveFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhbmRib3hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYW5kYm94XCIsXG4gIH0sXG4gIGFwaVVzZXJJZDoge1xuICAgIGlkOiBcImFwcC5hcGlVc2VySWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBUEkgVXNlciBJZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFQSSBVc2VyIElkXCIsXG4gIH0sXG4gIGFwaVBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLmFwaVBhc3N3b3JkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQVBJIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQVBJIFBhc3N3b3JkXCIsXG4gIH0sXG4gIGFwaVNlY3JldDoge1xuICAgIGlkOiBcImFwcC5hcGlTZWNyZXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBUEkgU2VjcmV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQVBJIFNlY3JldFwiLFxuICB9LFxuICBhZGRJZDoge1xuICAgIGlkOiBcImFwcC5hZGRJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcCBJZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcCBJZFwiLFxuICB9LFxuICBwYXltZW50TW9kZToge1xuICAgIGlkOiBcImFwcC5wYXltZW50TW9kZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnQgTW9kZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgTW9kZVwiLFxuICB9LFxuICBwYXltZW50U3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRTdGF0dXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50IFN0YXR1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgU3RhdHVzXCIsXG4gIH0sXG4gIHBheW1lbnROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnROYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudCBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBOYW1lXCIsXG4gIH0sXG4gIGFkZFBvcHVsYXJMb2NhdGlvbjoge1xuICAgIGlkOiBcImFwcC5hZGRQb3B1bGFyTG9jYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgUG9wdWxhciBMb2NhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBQb3B1bGFyIExvY2F0aW9uXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWN0dXJlOiB7XG4gICAgaWQ6IFwiYXBwLnByb2ZpbGVQaWN0dXJlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvZmlsZSBQaWN0dXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvZmlsZSBQaWN0dXJlXCIsXG4gIH0sXG4gIGxhbmd1YWdlOiB7XG4gICAgaWQ6IFwiYXBwLmxhbmd1YWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFuZ3VhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYW5ndWFnZVwiLFxuICB9LFxuICBiaW9JbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmJpb0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCaW8gSW5mb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpbyBJbmZvXCIsXG4gIH0sXG4gIHVzZXJEZWxldGVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXNlckRlbGV0ZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgRGVsZXRlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgRGVsZXRlZFwiLFxuICB9LFxuICBwYXlvdXRSZWZ1bmQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0UmVmdW5kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5b3V0L1JlZnVuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dC9SZWZ1bmRcIixcbiAgfSxcbiAgbm9QYXlvdXRNZXRob2Q6IHtcbiAgICBpZDogXCJhcHAubm9QYXlvdXRNZXRob2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJObyBQYXlvdXQgbWV0aG9kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gUGF5b3V0IG1ldGhvZFwiLFxuICB9LFxuICBjbG9zZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jbG9zZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3NlZFwiLFxuICB9LFxuICBwcm9jZXNzaW5nTGFiZWw6IHtcbiAgICBpZDogXCJhcHAucHJvY2Vzc2luZ0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvY2Vzc2luZy4uLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2Nlc3NpbmcuLi5cIixcbiAgfSxcbiAgY29tcGxldGVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY29tcGxldGVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb21wbGV0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZWRcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25Ob3Rmb3VuZDoge1xuICAgIGlkOiBcImFwcC50cmFuc2FjdGlvbk5vdGZvdW5kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gbm90IGZvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhbnNhY3Rpb24gbm90IGZvdW5kXCIsXG4gIH0sXG4gIG5vdEVsaWdpYmxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vdEVsaWdpYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm90IEVsaWdpYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm90IEVsaWdpYmxlXCIsXG4gIH0sXG4gIHByb2NlZWRSZWZ1bmQ6IHtcbiAgICBpZDogXCJhcHAucHJvY2VlZFJlZnVuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2NlZWQgUmVmdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvY2VlZCBSZWZ1bmRcIixcbiAgfSxcbiAgdmlld0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3XCIsXG4gIH0sXG4gIGV4cG9ydERhdGFJbnRvQ1NWOiB7XG4gICAgaWQ6IFwiYXBwLmV4cG9ydERhdGFJbnRvQ1NWXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXhwb3J0IERhdGEgaW50byBDU1ZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBvcnQgRGF0YSBpbnRvIENTVlwiLFxuICB9LFxuICByZWNlaXZlckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnJlY2VpdmVyTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWNlaXZlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlY2VpdmVyXCIsXG4gIH0sXG4gIG1pbmltdW1QcmljZToge1xuICAgIGlkOiBcImFwcC5taW5pbXVtUHJpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaW5pbXVtIFByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWluaW11bSBQcmljZVwiLFxuICB9LFxuICBtYXhpbXVtUHJpY2U6IHtcbiAgICBpZDogXCJhcHAubWF4aW11bVByaWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSBQcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1heGltdW0gUHJpY2VcIixcbiAgfSxcbiAgcHJpY2VSYW5nZUN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLnByaWNlUmFuZ2VDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlIFJhbmdlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpY2UgUmFuZ2UgQ3VycmVuY3lcIixcbiAgfSxcbiAgZ3Vlc3RGZWVUeXBlOiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0RmVlVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IEZlZSBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgRmVlIFR5cGVcIixcbiAgfSxcbiAgZml4ZWRQcmljZToge1xuICAgIGlkOiBcImFwcC5maXhlZFByaWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRml4ZWQgUHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaXhlZCBQcmljZVwiLFxuICB9LFxuICBwZXJjZW50YWdlOiB7XG4gICAgaWQ6IFwiYXBwLnBlcmNlbnRhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQZXJjZW50YWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGVyY2VudGFnZVwiLFxuICB9LFxuICBndWVzdFNlcnZpY2VGZWU6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RTZXJ2aWNlRmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgU2VydmljZSBGZWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdCBTZXJ2aWNlIEZlZVwiLFxuICB9LFxuICBndWVzdFNlcnZpY2VGZWVQbGFjZWhvbGQ6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RTZXJ2aWNlRmVlUGxhY2Vob2xkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW1vdW50L1BlcmNlbnRhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbW91bnQvUGVyY2VudGFnZVwiLFxuICB9LFxuICBob3N0RmVlVHlwZToge1xuICAgIGlkOiBcImFwcC5ob3N0RmVlVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgRmVlIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEZlZSBUeXBlXCIsXG4gIH0sXG4gIGhvc3RTZXJ2aWNlRmVlVHlwZToge1xuICAgIGlkOiBcImFwcC5ob3N0U2VydmljZUZlZVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0IFNlcnZpY2UgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBTZXJ2aWNlIEZlZVwiLFxuICB9LFxuICBzdWJtaXRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zdWJtaXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1Ym1pdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1Ym1pdFwiLFxuICB9LFxuXG4gIGFkZDoge1xuICAgIGlkOiBcImFwcC5hZGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGQgQnV0dG9uXCIsXG4gIH0sXG4gIHVwZGF0ZToge1xuICAgIGlkOiBcImFwcC51cGRhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVcGRhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGRhdGUgQnV0dG9uXCIsXG4gIH0sXG4gIGFkZEl0ZW1OZXc6IHtcbiAgICBpZDogXCJhcHAuYWRkSXRlbU5ld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0ZW0gbmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkl0ZW0gbmFtZVwiLFxuICB9LFxuICBhZGROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLmFkZE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTmFtZVwiLFxuICB9LFxuICBwYWdlVGl0bGU6IHtcbiAgICBpZDogXCJhcHAucGFnZVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFnZSBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhZ2UgVGl0bGVcIixcbiAgfSxcbiAgcGFnZVN1YlRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnBhZ2VTdWJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgU3ViIFRpdGxlIChPcHRpb25hbClcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIFN1YiBUaXRsZVwiLFxuICB9LFxuICBob3N0aW5nU3RlcDoge1xuICAgIGlkOiBcImFwcC5ob3N0aW5nU3RlcFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IFN0ZXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGVwXCIsXG4gIH0sXG4gIGZpZWxkc1R5cGU6IHtcbiAgICBpZDogXCJhcHAuZmllbGRzVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOYW1lXCIsXG4gIH0sXG4gIGZpZWxkc1BhZ2VJZDoge1xuICAgIGlkOiBcImFwcC5maWVsZHNQYWdlSWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYWdlIElEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZSBJRFwiLFxuICB9LFxuICBmaWVsZHNPcHRpb246IHtcbiAgICBpZDogXCJhcHAuZmllbGRzT3B0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3B0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk9wdGlvbnNcIixcbiAgfSxcbiAgbGFiZWxPcHRpb246IHtcbiAgICBpZDogXCJhcHAubGFiZWxPcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMYWJlbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhYmVsXCIsXG4gIH0sXG4gIHZhbHVlT3B0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnZhbHVlT3B0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmFsdWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWYWx1ZVwiLFxuICB9LFxuICBhZGROZXdEZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5hZGROZXdEZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0ZW0gZGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJdGVtIGRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGFkZE90aGVySXRlbToge1xuICAgIGlkOiBcImFwcC5hZGRPdGhlckl0ZW1cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPdGhlciBJdGVtIG5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPdGhlciBJdGVtIG5hbWVcIixcbiAgfSxcbiAgYWRkT3B0aW9uczoge1xuICAgIGlkOiBcImFwcC5hZGRPcHRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIE9wdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJhZGQgT3B0aW9uc1wiLFxuICB9LFxuICBzdGFydFZhbHVlOiB7XG4gICAgaWQ6IFwiYXBwLnN0YXJ0VmFsdWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGFydCB2YWx1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0IHZhbHVlXCIsXG4gIH0sXG4gIGVuZFZhbHVlOiB7XG4gICAgaWQ6IFwiYXBwLmVuZFZhbHVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW5kIHZhbHVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIGVuZCB2YWx1ZSBoZXJlIC4uLi5cIixcbiAgfSxcbiAgZW5hYmxlOiB7XG4gICAgaWQ6IFwiYXBwLmVuYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVuYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVuYWJsZVwiLFxuICB9LFxuICBkaXNhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLmRpc2FibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEaXNhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGlzYWJsZVwiLFxuICB9LFxuICBpdGVtTmFtZUlzUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuaXRlbU5hbWVJc1JlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSXRlbSBuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaXRlbU5hbWVJc1JlcXVpcmVkXCIsXG4gIH0sXG4gIG90aGVySXRlbU5hbWVJc1JlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLm90aGVySXRlbU5hbWVJc1JlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3RoZXIgaXRlbSBuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwib3RoZXJJdGVtTmFtZUlzUmVxdWlyZWRcIixcbiAgfSxcbiAgc3RhcnRWYWx1ZUlzSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5zdGFydFZhbHVlSXNJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBTdGFydCB2YWx1ZSwgcHJvdmlkZSBhIHZhbGlkIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0YXJ0VmFsdWVJc0ludmFsaWRcIixcbiAgfSxcbiAgZW5kVmFsdWVJc0ludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuZW5kVmFsdWVJc0ludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIEVuZCB2YWx1ZSwgcHJvdmlkZSBhIHZhbGlkIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVuZFZhbHVlSXNJbnZhbGlkXCIsXG4gIH0sXG4gIGVuZFZhbHVlR3JlYXRlcjoge1xuICAgIGlkOiBcImFwcC5lbmRWYWx1ZUdyZWF0ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbmQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gU3RhcnQgdmFsdWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJlbmRWYWx1ZUdyZWF0ZXJcIixcbiAgfSxcbiAgZGVzY3JpcHRpb25FbXB0eToge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvbkVtcHR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW1wdHkgc3BhY2VzIGFyZSBub3QgYWxsb3dlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIHdlbnQgd3JvbmdcIixcbiAgfSxcbiAgYmxhbmtTcGFjZToge1xuICAgIGlkOiBcImFwcC5ibGFua1NwYWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5wdXQgaXMgQmxhbmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJibGFua1NwYWNlXCIsXG4gIH0sXG4gIGV4Y2VlZExpbWl0OiB7XG4gICAgaWQ6IFwiYXBwLmV4Y2VlZExpbWl0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGltaXQgRXhjZWVkZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJleGNlZWRMaW1pdFwiLFxuICB9LFxuICBsb2dvTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubG9nb0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ29cIixcbiAgfSxcbiAgSG9tZWxvZ29MYWJlbDoge1xuICAgIGlkOiBcImFwcC5Ib21lbG9nb0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZSBQYWdlIExvZ29cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIFBhZ2UgTG9nb1wiLFxuICB9LFxuICBFbWFpbGxvZ29MYWJlbDoge1xuICAgIGlkOiBcImFwcC5FbWFpbGxvZ29MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIExvZ29cIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCBMb2dvXCIsXG4gIH0sXG4gIGxvZ29IZWlnaHRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5sb2dvSGVpZ2h0TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2dvIEhlaWdodFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ28gSGVpZ2h0XCIsXG4gIH0sXG4gIGxvZ29XaWR0aExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ29XaWR0aExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nbyBXaWR0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ28gV2lkdGhcIixcbiAgfSxcbiAgaG9tZWxvZ29IZWlnaHQ6IHtcbiAgICBpZDogXCJhcHAuaG9tZWxvZ29IZWlnaHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb21lIExvZ28gSGVpZ2h0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZSBMb2dvIEhlaWdodFwiLFxuICB9LFxuICBob21lbG9nb1dpZHRoOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVsb2dvV2lkdGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb21lIExvZ28gV2lkdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIExvZ28gV2lkdGhcIixcbiAgfSxcbiAgc2l0ZU5hbWU6IHtcbiAgICBpZDogXCJhcHAuc2l0ZU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaXRlIE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaXRlIE5hbWVcIixcbiAgfSxcbiAgc2l0ZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnNpdGVUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpdGUgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaXRlIFRpdGxlXCIsXG4gIH0sXG4gIG1ldGFLZXl3b3JkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubWV0YUtleXdvcmRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1ldGEgS2V5d29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1ldGEgS2V5d29yZFwiLFxuICB9LFxuICBtZXRhS2V5d29yZExhYmVsRGVzYzoge1xuICAgIGlkOiBcImFwcC5tZXRhS2V5d29yZExhYmVsRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1ldGEgRGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXRhIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGZhY2Vib29rVVJMOiB7XG4gICAgaWQ6IFwiYXBwLmZhY2Vib29rVVJMXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmFjZWJvb2sgVVJMXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFjZWJvb2sgVVJMXCIsXG4gIH0sXG4gIHR3aXR0ZXJVUkw6IHtcbiAgICBpZDogXCJhcHAudHdpdHRlclVSTFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlR3aXR0ZXIgVVJMXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHdpdHRlciBVUkxcIixcbiAgfSxcbiAgaW5zdGFncmFtVVJMOiB7XG4gICAgaWQ6IFwiYXBwLmluc3RhZ3JhbVVSTFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkluc3RhZ3JhbSBVUkxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YWdyYW0gVVJMXCIsXG4gIH0sXG4gIGhvbWVQYWdlTGF5b3V0OiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVQYWdlTGF5b3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZSBQYWdlIExheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvbWUgUGFnZSBMYXlvdXRcIixcbiAgfSxcbiAgaG9tZVBhZ2VMYXlvdXREZXNjOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVQYWdlTGF5b3V0RGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhbm5lciBUZXh0IHdpdGggSW1hZ2UgU2xpZGVyIExheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhbm5lciBUZXh0IHdpdGggSW1hZ2UgU2xpZGVyIExheW91dFwiLFxuICB9LFxuICBob21lUGFnZUxheW91dERlc2MxOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVQYWdlTGF5b3V0RGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYW5uZXIgVGV4dCBPbmx5IExheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhbm5lciBUZXh0IE9ubHkgTGF5b3V0XCIsXG4gIH0sXG4gIGhvbWVQYWdlTGF5b3V0RGVzYzI6IHtcbiAgICBpZDogXCJhcHAuaG9tZVBhZ2VMYXlvdXREZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhbm5lciBUZXh0IExheW91dCB3aXRoIERldGFpbGVkIFNlYXJjaCBmb3JtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFubmVyIFRleHQgTGF5b3V0IHdpdGggRGV0YWlsZWQgU2VhcmNoIGZvcm1cIixcbiAgfSxcbiAgaG9tZVBhZ2VMYXlvdXREZXNjMzoge1xuICAgIGlkOiBcImFwcC5ob21lUGFnZUxheW91dERlc2MzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2luZ2xlIEJhbm5lciBJbWFnZSBMYXlvdXQgd2l0aCBEZXRhaWxlZCBTZWFyY2ggZm9ybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpbmdsZSBCYW5uZXIgSW1hZ2UgTGF5b3V0IHdpdGggRGV0YWlsZWQgU2VhcmNoIGZvcm1cIixcbiAgfSxcbiAgcGhvbmVOdW1iZXJGb3JtYXQ6IHtcbiAgICBpZDogXCJhcHAucGhvbmVOdW1iZXJGb3JtYXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQaG9uZSBOdW1iZXIgRm9ybWF0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGhvbmUgTnVtYmVyIEZvcm1hdFwiLFxuICB9LFxuICB0d2lsaW9TTVM6IHtcbiAgICBpZDogXCJhcHAudHdpbGlvU01TXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHdpbGlvIFNNU1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlR3aWxpbyBTTVNcIixcbiAgfSxcbiAgbm9ybWFsUGhvbmVOdW1iZXI6IHtcbiAgICBpZDogXCJhcHAubm9ybWFsUGhvbmVOdW1iZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb3JtYWwgUGhvbmUgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm9ybWFsIFBob25lIE51bWJlclwiLFxuICB9LFxuICBhcHBBdmFpbGFibGU6IHtcbiAgICBpZDogXCJhcHAuYXBwQXZhaWxhYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwIEF2YWlsYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcCBBdmFpbGFibGVcIixcbiAgfSxcbiAgcGxheVN0b3JlVXJsOiB7XG4gICAgaWQ6IFwiYXBwLnBsYXlTdG9yZVVybFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsYXkgc3RvcmUgVVJMXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGxheSBzdG9yZSBVUkxcIixcbiAgfSxcbiAgYXBwU3RvcmVVcmw6IHtcbiAgICBpZDogXCJhcHAuYXBwU3RvcmVVcmxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBcHAgc3RvcmUgVVJMXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXBwIHN0b3JlIFVSTFwiLFxuICB9LFxuICBlbWFpbElkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZW1haWxJZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW1haWwgSWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCBJZFwiLFxuICB9LFxuICBtb2JpbGVOdW1iZXJMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tb2JpbGVOdW1iZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vYmlsZSBOdW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2JpbGUgTnVtYmVyXCIsXG4gIH0sXG4gIGhlYWRlclRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhlYWRlclRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGVhZGVyIFRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSGVhZGVyIFRpdGxlXCIsXG4gIH0sXG4gIGhlYWRlclRpdGxlQ29udGVudDoge1xuICAgIGlkOiBcImFwcC5oZWFkZXJUaXRsZUNvbnRlbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZWFkZXIgQ29udGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhlYWRlciBDb250ZW50XCIsXG4gIH0sXG4gIGlzQWN0aXZlOiB7XG4gICAgaWQ6IFwiYXBwLmlzQWN0aXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSXMgQWN0aXZlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXMgQWN0aXZlXCIsXG4gIH0sXG4gIGJsb2NrVGl0bGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ibG9ja1RpdGxlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCbG9jayBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2NrIFRpdGxlXCIsXG4gIH0sXG4gIGJsb2NrQ29udGVudExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJsb2NrQ29udGVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmxvY2sgQ29udGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2NrIENvbnRlbnRcIixcbiAgfSxcbiAgYmxvY2tJbWFnZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJsb2NrSW1hZ2VMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJsb2NrIEltYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmxvY2sgSW1hZ2VcIixcbiAgfSxcbiAgYWJvdXRVc0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmFib3V0VXNMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFib3V0IFVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWJvdXQgVXNcIixcbiAgfSxcbiAgc2V0VG9FbmFibGU6IHtcbiAgICBpZDogXCJhcHAuc2V0VG9FbmFibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXQgdG8gZW5hYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0IHRvIGVuYWJsZVwiLFxuICB9LFxuICBzZXRUb0Rpc2FibGU6IHtcbiAgICBpZDogXCJhcHAuc2V0VG9EaXNhYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2V0IHRvIGRpc2FibGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZXQgdG8gZGlzYWJsZVwiLFxuICB9LFxuICBjYW5jZWxsZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jYW5jZWxsZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbGxlZCBieVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxlZCBieVwiLFxuICB9LFxuICBib29raW5nVHlwZToge1xuICAgIGlkOiBcImFwcC5ib29raW5nVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tpbmcgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgVHlwZVwiLFxuICB9LFxuICBhbW91bnRQYWlkOiB7XG4gICAgaWQ6IFwiYXBwLmFtb3VudFBhaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbW91bnQgUGFpZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFtb3VudCBQYWlkXCIsXG4gIH0sXG4gIGd1ZXN0TmFtZToge1xuICAgIGlkOiBcImFwcC5ndWVzdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdCBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgTmFtZVwiLFxuICB9LFxuICBndWVzdFBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0UGhvbmVOdW1iZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdCBQaG9uZSBOdW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdCBQaG9uZSBOdW1iZXJcIixcbiAgfSxcbiAgZ3Vlc3RFbWFpbDoge1xuICAgIGlkOiBcImFwcC5ndWVzdEVtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdCBFbWFpbFwiLFxuICB9LFxuICBob3N0TmFtZToge1xuICAgIGlkOiBcImFwcC5ob3N0TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgTmFtZVwiLFxuICB9LFxuICBob3N0UGhvbmVOdW1iZXI6IHtcbiAgICBpZDogXCJhcHAuaG9zdFBob25lTnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBQaG9uZSBOdW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IFBob25lIE51bWJlclwiLFxuICB9LFxuICBob3N0RW1haWw6IHtcbiAgICBpZDogXCJhcHAuaG9zdEVtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgRW1haWxcIixcbiAgfSxcbiAgY2FuY2VsRGF0ZToge1xuICAgIGlkOiBcImFwcC5jYW5jZWxEYXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsIERhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgRGF0ZVwiLFxuICB9LFxuICBob3N0QmFubmVyVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuaG9zdEJhbm5lclRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBCYW5uZXIgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEJhbm5lciBUaXRsZVwiLFxuICB9LFxuICBob3N0QmFubmVyTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG9zdEJhbm5lckxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBCYW5uZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEJhbm5lclwiLFxuICB9LFxuICB3aHlCbG9ja1RpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAud2h5QmxvY2tUaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEJsb2NrIFRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2h5IEJsb2NrIFRpdGxlXCIsXG4gIH0sXG4gIHdoeUJsb2NrQ29udGVudExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLndoeUJsb2NrQ29udGVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEJsb2NrIENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaHkgQmxvY2sgQ29udGVudFwiLFxuICB9LFxuICBob3N0aW5nQmxvY2tUaXRsZUhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrVGl0bGVIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdGluZyBCbG9jayBUaXRsZSBIZWFkaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdGluZyBCbG9jayBUaXRsZSBIZWFkaW5nXCIsXG4gIH0sXG4gIGhvc3RpbmdCbG9ja1RpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrVGl0bGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3RpbmcgQmxvY2sgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIFRpdGxlXCIsXG4gIH0sXG4gIGhvc3RpbmdCbG9ja0NvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ob3N0aW5nQmxvY2tDb250ZW50TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0aW5nIEJsb2NrIENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIENvbnRlbnRcIixcbiAgfSxcbiAgY292ZXJTZWN0aW9uVGl0bGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25UaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ292ZXIgU2VjdGlvbiBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gVGl0bGVcIixcbiAgfSxcbiAgY292ZXJTZWN0aW9uQ29udGVudExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbkNvbnRlbnRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdmVyIFNlY3Rpb24gQ29udGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gQ29udGVudFwiLFxuICB9LFxuICBjb3ZlclNlY3Rpb25GZWF0dXJlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY292ZXJTZWN0aW9uRmVhdHVyZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ292ZXIgU2VjdGlvbiBGZWF0dXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBGZWF0dXJlXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbkJhbm5lckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbkJhbm5lckxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ292ZXIgU2VjdGlvbiBCYW5uZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIEJhbm5lclwiLFxuICB9LFxuICBwYXltZW50VGl0bGVIZWFkaW5nTGFiZWw6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudFRpdGxlSGVhZGluZ0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudCBUaXRsZSBIZWFkaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBUaXRsZSBIZWFkaW5nXCIsXG4gIH0sXG4gIHBheW1lbnRUaXRsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRUaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudCBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgVGl0bGVcIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudCBDb250ZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBDb250ZW50XCIsXG4gIH0sXG4gIHF1b3RlU2VjdGlvblRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnF1b3RlU2VjdGlvblRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUXVvdGUgU2VjdGlvbiBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIFNlY3Rpb24gVGl0bGVcIixcbiAgfSxcbiAgcXVvdGVTZWN0aW9uQ29udGVudDoge1xuICAgIGlkOiBcImFwcC5xdW90ZVNlY3Rpb25Db250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUXVvdGUgU2VjdGlvbiBDb250ZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUXVvdGUgU2VjdGlvbiBDb250ZW50XCIsXG4gIH0sXG4gIHF1b3RlU2VjdGlvbkJ1dHRvbjoge1xuICAgIGlkOiBcImFwcC5xdW90ZVNlY3Rpb25CdXR0b25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJRdW90ZSBTZWN0aW9uIEJ1dHRvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIFNlY3Rpb24gQnV0dG9uXCIsXG4gIH0sXG4gIHF1b3RlU2VjdGlvbkJhbm5lcjoge1xuICAgIGlkOiBcImFwcC5xdW90ZVNlY3Rpb25CYW5uZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJRdW90ZSBTZWN0aW9uIEJhbm5lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIFNlY3Rpb24gQmFubmVyXCIsXG4gIH0sXG4gIGZhcUJsb2NrVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuZmFxQmxvY2tUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZBUSBCbG9jayBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZBUSBCbG9jayBUaXRsZVwiLFxuICB9LFxuICBmYXFCbG9ja0NvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAuZmFxQmxvY2tDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRkFRIEJsb2NrIENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGQVEgQmxvY2sgQ29udGVudFwiLFxuICB9LFxuICBzaXRlU2V0dGluZ3M6IHtcbiAgICBpZDogXCJhcHAuc2l0ZVNldHRpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2l0ZSBTZXR0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpdGUgU2V0dGluZ3NcIixcbiAgfSxcbiAgbWFuYWdlQWRtaW46IHtcbiAgICBpZDogXCJhcHAubWFuYWdlQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgQWRtaW5zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIEFkbWluc1wiLFxuICB9LFxuICBtYW5hZ2VBZG1pblVzZXJzOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZUFkbWluVXNlcnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgQWRtaW4gVXNlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgQWRtaW4gVXNlcnNcIixcbiAgfSxcbiAgbWFuYWdlQWRtaW5Sb2xlczoge1xuICAgIGlkOiBcImFwcC5tYW5hZ2VBZG1pblJvbGVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIEFkbWluIFJvbGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIEFkbWluIFJvbGVzXCIsXG4gIH0sXG4gIG1hbmFnZVVzZXI6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlVXNlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbmFnZSBVc2Vyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBVc2Vyc1wiLFxuICB9LFxuICBtYW5hZ2VSZXNlcnZhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlUmVzZXJ2YXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIFJlc2VydmF0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgcmV2aWV3TWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3cyBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3cyBNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIGFkbWluUmV2aWV3czoge1xuICAgIGlkOiBcImFwcC5hZG1pblJldmlld3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZG1pbiBSZXZpZXdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRtaW4gUmV2aWV3c1wiLFxuICB9LFxuICB3ZWxjb21lQWRtaW46IHtcbiAgICBpZDogXCJhcHAud2VsY29tZUFkbWluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2VsY29tZSwgQWRtaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lLCBBZG1pblwiLFxuICB9LFxuICBtYW5hZ2VSZXZpd2VzOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVJldml3ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBSZXZpZXdzXCIsXG4gIH0sXG4gIHdyaXRlUmV2aXdlczoge1xuICAgIGlkOiBcImFwcC53cml0ZVJldml3ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXcml0ZSBhIHJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyaXRlIFJldmlld1wiLFxuICB9LFxuICBtYW5hZ2VTZXJ2aWNlRmVlOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVNlcnZpY2VGZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgU2VydmljZSBGZWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgU2VydmljZSBGZWVcIixcbiAgfSxcbiAgcmVwb3J0TWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5yZXBvcnRNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVwb3J0IE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgTWFuYWdlbWVudFwiLFxuICB9LFxuICBtYW5hZ2VQYXlvdXQ6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlUGF5b3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIFBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBQYXlvdXRcIixcbiAgfSxcbiAgbWFuYWdlQ3VycmVuY3k6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlQ3VycmVuY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgQ3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgQ3VycmVuY3lcIixcbiAgfSxcbiAgc2VhcmNoU2V0dGluZ3M6IHtcbiAgICBpZDogXCJhcHAuc2VhcmNoU2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZWFyY2ggU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2ggU2V0dGluZ3NcIixcbiAgfSxcbiAgY2hhbmdlUGFzc3dvcmRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jaGFuZ2VQYXNzd29yZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hhbmdlIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hhbmdlIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHN0YXRpY0NvbnRlbnRNYW5hZ2VtZW50OiB7XG4gICAgaWQ6IFwiYXBwLnN0YXRpY0NvbnRlbnRNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGljIENvbnRlbnQgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXRpYyBDb250ZW50IE1hbmFnZW1lbnRcIixcbiAgfSxcbiAgY29udGVudE1hbmFnZW1lbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb250ZW50TWFuYWdlbWVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGVudCBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGVudCBNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIG1heGltdW1OaWdodHNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tYXhpbXVtTmlnaHRzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIE5pZ2h0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1heGltdW0gTmlnaHRzXCIsXG4gIH0sXG4gIG1pbmltdW1OaWdodHNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5taW5pbXVtTmlnaHRzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaW5pbXVtIE5pZ2h0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1pbmltdW0gTmlnaHRzXCIsXG4gIH0sXG4gIGJvb2tpbmdOb3RpY2VUaW1lOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdOb3RpY2VUaW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyBOb3RpY2UgVGltZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgTm90aWNlIFRpbWVcIixcbiAgfSxcbiAgcmV2aWV3SG93R3Vlc3RCb29rOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld0hvd0d1ZXN0Qm9va1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlldyBIb3cgR3Vlc3RzIEJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXcgSG93IEd1ZXN0cyBCb29rXCIsXG4gIH0sXG4gIGxpc3RTZXR0aW5nU3RlcDoge1xuICAgIGlkOiBcImFwcC5saXN0U2V0dGluZ1N0ZXBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0IFNldHRpbmdzIGZvciBTdGVwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBTZXR0aW5ncyBmb3IgU3RlcFwiLFxuICB9LFxuICBlc3NlbnRpYWxBbWVuaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuZXNzZW50aWFsQW1lbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXNzZW50aWFsIEFtZW5pdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVzc2VudGlhbCBBbWVuaXRpZXNcIixcbiAgfSxcbiAgYmF0aHJvb21UeXBlOiB7XG4gICAgaWQ6IFwiYXBwLmJhdGhyb29tVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhdGhyb29tIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXRocm9vbSBUeXBlXCIsXG4gIH0sXG4gIGJlZFR5cGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5iZWRUeXBlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWQgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZCBUeXBlXCIsXG4gIH0sXG4gIGJlZFJvb21zTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmVkUm9vbXNMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZCBSb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZCBSb29tc1wiLFxuICB9LFxuICBidWlsZGluZ1NpemU6IHtcbiAgICBpZDogXCJhcHAuYnVpbGRpbmdTaXplXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQnVpbGRpbmcgU2l6ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWxkaW5nIFNpemVcIixcbiAgfSxcbiAgaG91c2VUeXBlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG91c2VUeXBlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3VzZSBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG91c2UgVHlwZVwiLFxuICB9LFxuICBwZXJzb25DYXBhY2l0eToge1xuICAgIGlkOiBcImFwcC5wZXJzb25DYXBhY2l0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBlcnNvbiBDYXBhY2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbiBDYXBhY2l0eVwiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0UGFnZToge1xuICAgIGlkOiBcImFwcC53aHlCZWNvbWVIb3N0UGFnZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBQYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2h5IEJlY29tZSBIb3N0IFBhZ2VcIixcbiAgfSxcblxuICBwYWdlU2V0dGluZzoge1xuICAgIGlkOiBcImFwcC5wYWdlU2V0dGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpZWxkcyBTZXR0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZSBTZXR0aW5nXCIsXG4gIH0sXG5cbiAgaG9tZUJhbm5lckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVCYW5uZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgQmFubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZSBCYW5uZXJcIixcbiAgfSxcbiAgaG9tZU9mZmVyOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVPZmZlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgT2ZmZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIEJhbm5lclwiLFxuICB9LFxuICBmaWVsZENhcjoge1xuICAgIGlkOiBcImFwcC5maWVsZENhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhclwiLFxuICB9LFxuICBzdGF0aWNJbmZvQmxvY2s6IHtcbiAgICBpZDogXCJhcHAuc3RhdGljSW5mb0Jsb2NrXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGljIEluZm8gQmxvY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0aWMgSW5mbyBCbG9ja1wiLFxuICB9LFxuICBtYW5hZ2VQb3B1bGFyTG9jYXRpb25zOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVBvcHVsYXJMb2NhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgUG9wdWxhciBMb2NhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgUG9wdWxhciBMb2NhdGlvbnNcIixcbiAgfSxcbiAgZm9vdGVyQmxvY2tMYWJlbDoge1xuICAgIGlkOiBcImFwcC5mb290ZXJCbG9ja0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRm9vdGVyIEJsb2NrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9vdGVyIEJsb2NrXCIsXG4gIH0sXG4gIGltYWdlQmFubmVyTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaW1hZ2VCYW5uZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkltYWdlIEJhbm5lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkltYWdlIEJhbm5lclwiLFxuICB9LFxuICBiYW5uZXJDYXB0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmFubmVyQ2FwdGlvbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFubmVyIENhcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYW5uZXIgQ2FwdGlvblwiLFxuICB9LFxuICBob21lUGFnZVNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVQYWdlU2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb21lIFBhZ2UgU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIFBhZ2UgU2V0dGluZ3NcIixcbiAgfSxcbiAgcm9sZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnJvbGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJvbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSb2xlXCIsXG4gIH0sXG4gIGFkbWluVXNlckRlc2M6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5Vc2VyRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJQcm92aWRlIG5ldyBwYXNzd29yZCBvbmx5LiBJZ25vcmUgdGhpcyBmaWVsZCB0byB1c2UgdGhlIGV4aXN0aW5nIHBhc3N3b3JkIGZvciB0aGlzIHVzZXIuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlByb3ZpZGUgbmV3IHBhc3N3b3JkIG9ubHkuIElnbm9yZSB0aGlzIGZpZWxkIHRvIHVzZSB0aGUgZXhpc3RpbmcgcGFzc3dvcmQgZm9yIHRoaXMgdXNlci5cIixcbiAgfSxcbiAgc2VsZWN0cm9sZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdHJvbGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlbGVjdCBSb2xlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VsZWN0IFJvbGVcIixcbiAgfSxcbiAgcm9sZU5hbWVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5yb2xlTmFtZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUm9sZSBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUm9sZSBOYW1lXCIsXG4gIH0sXG4gIHByaXZpbGFnZXNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wcml2aWxhZ2VzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcml2aWxlZ2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpdmlsZWdlc1wiLFxuICB9LFxuICBhZG1pblRpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5UaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBpbnZhbGlkUGFnZVVybDoge1xuICAgIGlkOiBcImFwcC5pbnZhbGlkUGFnZVVybFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgUGFnZSBVUkxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIFBhZ2UgVVJMXCIsXG4gIH0sXG4gIGxvZ2dlZEluOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ2dlZEluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGFyZSBhbHJlYWR5IGxvZ2dlZCBpbiFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3UgYXJlIGFscmVhZHkgTG9nZ2VkLWluXCIsXG4gIH0sXG4gIHVzZXJMb2dnZWRJbjoge1xuICAgIGlkOiBcImFwcC51c2VyTG9nZ2VkSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiWW91IGFyZSBhbHJlYWR5IGxvZ2dlZCBpbiBhcyBVc2VyLCBwbGVhc2UgbG9nb3V0IGluIHRoZSBtYWluIHNpdGUgdG8gY29udGludWUhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IGFyZSBhbHJlYWR5IExvZ2dlZC1pbiBhcyB1c2VyXCIsXG4gIH0sXG4gIHByb3ZpZGVMaXN0SWQ6IHtcbiAgICBpZDogXCJhcHAucHJvdmlkZUxpc3RJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb3ZpZGUgbGlzdCBJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgbGlzdCBJRFwiLFxuICB9LFxuICBvbmx5TnVtZXJpY0tleToge1xuICAgIGlkOiBcImFwcC5vbmx5TnVtZXJpY0tleVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk9ubHkgbnVtZXJpYyB2YWx1ZXMgYXJlIGFsbG93ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPbmx5IG51bWVyaWMgdmFsdWVzIGFyZSBhbGxvd2VkXCIsXG4gIH0sXG4gIG5vUmVjb3JkRm91bmQ6IHtcbiAgICBpZDogXCJhcHAubm9SZWNvcmRGb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIG1hdGNoaW5nIHJlY29yZHMgZm91bmQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZC5cIixcbiAgfSxcbiAgcmF0aW5nUmV2aWV3TGFiZWw6IHtcbiAgICBpZDogXCJhcHAucmF0aW5nUmV2aWV3TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgUmF0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3IFJhdGluZ1wiLFxuICB9LFxuICBkZWxldGVSZXZpZXdMYWJlbDoge1xuICAgIGlkOiBcImFwcC5kZWxldGVSZXZpZXdMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlbGV0aW5nIFJldmlld1wiLFxuICB9LFxuICBleGNlZWRMaW1pdDI1NToge1xuICAgIGlkOiBcImFwcC5leGNlZWRMaW1pdDI1NVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1heGltdW0gYWxsb3dlZCBjaGFyYWN0ZXIgaXMgMjU1LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4Y2VlZExpbWl0XCIsXG4gIH0sXG4gIGlkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSURcIixcbiAgfSxcbiAgZW1haWxCbGFua1NwYWNlQWRtaW46IHtcbiAgICBpZDogXCJhcHAuZW1haWxCbGFua1NwYWNlQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbCBzaG91bGQgbm90IGJlIGJsYW5rIHNwYWNlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVtYWlsIGFkZHJlc3MgZXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRJbnZhbGlkQWRtaW46IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRJbnZhbGlkQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXNzd29yZCBzaG91bGQgYmUgbWluaW11bSA4IGNoYXJhY3RlcnMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgbWluaW11bSBjaGFyYWN0ZXJzIGVycm9yXCIsXG4gIH0sXG4gIHBhc3N3b3JkQmxhbmtTcGFjZUFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLnBhc3N3b3JkQmxhbmtTcGFjZUFkbWluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzc3dvcmQgc2hvdWxkIG5vdCBiZSBibGFuayBzcGFjZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBlcnJvclwiLFxuICB9LFxuICBzTm9MYWJlbDoge1xuICAgIGlkOiBcImFwcC5zTm9MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlMuTm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTLk5vXCIsXG4gIH0sXG4gIGRlbGV0aW5nUGFnZURldGFpbHM6IHtcbiAgICBpZDogXCJhcHAuZGVsZXRpbmdQYWdlRGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFBhZ2UgRGV0YWlsc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlbGV0aW5nIFBhZ2UgRGV0YWlsc1wiLFxuICB9LFxuICBjaGFuZ2VBZG1pblBhc3N3b3JkRGVzYzoge1xuICAgIGlkOiBcImFwcC5jaGFuZ2VBZG1pblBhc3N3b3JkRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJMZWF2ZSBlbWFpbCBhZGRyZXNzIGZpZWxkIGJsYW5rIGlmIHlvdSBkb24ndCB3YW50IHRvIGNoYW5nZSB0aGUgZW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTGVhdmUgZW1haWwgYWRkcmVzcyBmaWVsZCBibGFuayBpZiB5b3UgZG9uJ3Qgd2FudCB0byBjaGFuZ2UgdGhlIGVtYWlsXCIsXG4gIH0sXG4gIHBhc3NXb3JkTWlzbWF0Y2g6IHtcbiAgICBpZDogXCJhcHAucGFzc1dvcmRNaXNtYXRjaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhc3N3b3JkIGlzIG1pc21hdGNoaW5nIHdpdGggQ29uZmlybSBwYXNzd29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhc3N3b3JkIGlzIG1pc21hdGNoaW5nIHdpdGggQ29uZmlybSBwYXNzd29yZFwiLFxuICB9LFxuICBwYXNzV29yZE1pbmltdW06IHtcbiAgICBpZDogXCJhcHAucGFzc1dvcmRNaW5pbXVtXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzc3dvcmQgbXVzdCBiZSBtaW5pbXVtIDggY2hhcmFjdGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhc3N3b3JkIG11c3QgYmUgbWluaW11bSA4IGNoYXJhY3RlcnNcIixcbiAgfSxcbiAgc3ltYm9sTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc3ltYm9sTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTeW1ib2xcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTeW1ib2xcIixcbiAgfSxcbiAgYmFzZUN1cnJlbmN5TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmFzZUN1cnJlbmN5TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXNlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFzZSBDdXJyZW5jeVwiLFxuICB9LFxuICBzZXRFbmFibGVEaXNhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLnNldEVuYWJsZURpc2FibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXQgRW5hYmxlIC8gRGlzYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCBFbmFibGUgLyBEaXNhYmxlXCIsXG4gIH0sXG4gIHNldEN1cnJlbmN5TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc2V0Q3VycmVuY3lMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCBCYXNlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0IEJhc2UgQ3VycmVuY3lcIixcbiAgfSxcbiAgYWxsb3dlZFBheW1lbnRDdXJyZW5jeToge1xuICAgIGlkOiBcImFwcC5hbGxvd2VkUGF5bWVudEN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxsb3dlZCBQYXltZW50IEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dlZCBQYXltZW50IEN1cnJlbmN5XCIsXG4gIH0sXG4gIGhvc3RFTWFpbExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RFTWFpbExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgRW1haWxcIixcbiAgfSxcbiAgUmVxdWVzdGVkRmlsZXM6IHtcbiAgICBpZDogXCJhcHAuUmVxdWVzdGVkRmlsZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1ZXN0ZWQgRmlsZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXF1ZXN0ZWQgRmlsZXNcIixcbiAgfSxcbiAgYWN0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWN0aW9uTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY3Rpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY3Rpb25cIixcbiAgfSxcbiAgY3JlYXRlZERhdGU6IHtcbiAgICBpZDogXCJhcHAuY3JlYXRlZERhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDcmVhdGVkIERhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGVkIERhdGVcIixcbiAgfSxcbiAgc3RhdGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zdGF0ZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0ZVwiLFxuICB9LFxuICByZWNvbW1lbmRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5yZWNvbW1lbmRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlY29tbWVuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlY29tbWVuZFwiLFxuICB9LFxuICBzZXRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zZXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldFwiLFxuICB9LFxuICBwdWJsaXNoZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wdWJsaXNoZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlB1Ymxpc2hlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlB1Ymxpc2hlZFwiLFxuICB9LFxuICBkZWxldGluZ0xpc3RpbmdUaXRsZToge1xuICAgIGlkOiBcImFwcC5kZWxldGluZ0xpc3RpbmdUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIExpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWxldGluZyBMaXN0aW5nXCIsXG4gIH0sXG4gIHNldHRpbmdzSURMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zZXR0aW5nc0lETGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXR0aW5ncyBJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHRpbmdzIElEXCIsXG4gIH0sXG4gIG9wZXJhdGlvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLm9wZXJhdGlvbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3BlcmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3BlcmF0aW9uXCIsXG4gIH0sXG4gIHBheW91dHNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0c1wiLFxuICB9LFxuICBkYXRhTWlzc2luZzoge1xuICAgIGlkOiBcImFwcC5kYXRhTWlzc2luZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3QgaXMgbWlzc2luZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgaXMgbWlzc2luZ1wiLFxuICB9LFxuICBob3N0RW1haWxJZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RFbWFpbElkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0IEVtYWlsIElEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBFbWFpbCBJRFwiLFxuICB9LFxuICBndWVzdEVtYWlsSWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ndWVzdEVtYWlsSWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IEVtYWlsIElEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgRW1haWwgSURcIixcbiAgfSxcbiAgbWVzc2FnZXNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlc0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlc1wiLFxuICB9LFxuICBkZWxldGVQb3B1bGFyTG9jYXRpb25MYWJlbDoge1xuICAgIGlkOiBcImFwcC5kZWxldGVQb3B1bGFyTG9jYXRpb25MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFBvcHVsYXIgTG9jYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWxldGluZyBQb3B1bGFyIExvY2F0aW9uXCIsXG4gIH0sXG4gIHJlcG9ydGVyTmFtZToge1xuICAgIGlkOiBcImFwcC5yZXBvcnRlck5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXBvcnRlciBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0ZXIgTmFtZVwiLFxuICB9LFxuICByZXBvcnRlckVtYWlsOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydGVyRW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXBvcnRlciBFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydGVyIEVtYWlsXCIsXG4gIH0sXG4gIHVzZXJOYW1lTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXNlck5hbWVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgTmFtZVwiLFxuICB9LFxuICB1c2VyRW1haWxMYWJlbDoge1xuICAgIGlkOiBcImFwcC51c2VyRW1haWxMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVc2VyIEVtYWlsXCIsXG4gIH0sXG4gIHJlcG9ydFR5cGU6IHtcbiAgICBpZDogXCJhcHAucmVwb3J0VHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlcG9ydCBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFR5cGVcIixcbiAgfSxcbiAgcmVmdW5kVG9HdWVzdDoge1xuICAgIGlkOiBcImFwcC5yZWZ1bmRUb0d1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVmdW5kIHRvIEd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVmdW5kIHRvIEd1ZXN0XCIsXG4gIH0sXG4gIHN1YlRvdGFsTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc3ViVG90YWxMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBUb3RhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBUb3RhbFwiLFxuICB9LFxuICBwYXlvdXRMYWJlbEFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dExhYmVsQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXRcIixcbiAgfSxcbiAgcGxlYXNlQ2hvb3NlQ3VycmVueToge1xuICAgIGlkOiBcImFwcC5wbGVhc2VDaG9vc2VDdXJyZW55XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIGNob29zZSBhIGN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGxlYXNlIGNob29zZSBhIGN1cnJlbmN5XCIsXG4gIH0sXG4gIHByb3ZpZGVGaXhlZEd1ZXN0RmVlOiB7XG4gICAgaWQ6IFwiYXBwLnByb3ZpZGVGaXhlZEd1ZXN0RmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvdmlkZSBmaXhlZCBhbW91bnQgb3IgcGVyY2VudGFnZSBmb3IgR3Vlc3QgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBmaXhlZCBhbW91bnQgb3IgcGVyY2VudGFnZSBmb3IgR3Vlc3QgRmVlXCIsXG4gIH0sXG4gIHByb3ZpZGVGaXhlZEhvc3RGZWU6IHtcbiAgICBpZDogXCJhcHAucHJvdmlkZUZpeGVkSG9zdEZlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb3ZpZGUgZml4ZWQgYW1vdW50IG9yIHBlcmNlbnRhZ2UgZm9yIEhvc3QgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBmaXhlZCBhbW91bnQgb3IgcGVyY2VudGFnZSBmb3IgSG9zdCBGZWVcIixcbiAgfSxcbiAgY3VycmVuY3lSZXF1aXJlZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmN1cnJlbmN5UmVxdWlyZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkN1cnJlbmN5IGlzIHJlcXVpcmVkIHdoZW4geW91IHVzZSBmaXhlZCBwcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbmN5IGlzIHJlcXVpcmVkIHdoZW4geW91IHVzZSBmaXhlZCBwcmljZVwiLFxuICB9LFxuICBjaG9vc2VQcmVzZW50YWdlVmFsdWU6IHtcbiAgICBpZDogXCJhcHAuY2hvb3NlUHJlc2VudGFnZVZhbHVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIHBlcmNlbnRhZ2UgdmFsdWUgYmV0d2VlbiAxIHRvIDk5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hvb3NlIHBlcmNlbnRhZ2UgdmFsdWUgYmV0d2VlbiAxIHRvIDk5XCIsXG4gIH0sXG4gIHJlYXNvbjoge1xuICAgIGlkOiBcImFwcC5yZWFzb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFzb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFzb25cIixcbiAgfSxcbiAgYWxsTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWxsTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbGxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxcIixcbiAgfSxcbiAgcHJvZmlsZUlEOiB7XG4gICAgaWQ6IFwiYXBwLnByb2ZpbGVJRFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgSURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9maWxlIElEXCIsXG4gIH0sXG4gIHNlbGVjdExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VsZWN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VsZWN0XCIsXG4gIH0sXG4gIGJhbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJhbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFuXCIsXG4gIH0sXG4gIHVuQmFuTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudW5CYW5MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVuQmFuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVW5CYW5cIixcbiAgfSxcbiAgZGVsZXRpbmdVc2VyOiB7XG4gICAgaWQ6IFwiYXBwLmRlbGV0aW5nVXNlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFVzZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWxldGluZyBVc2VyXCIsXG4gIH0sXG4gIHVzZXJzTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXNlcnNMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXNlcnNcIixcbiAgfSxcbiAgcGFnZU5hbWU6IHtcbiAgICBpZDogXCJhcHAucGFnZU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYWdlIE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIE5hbWVcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25Db25maXJtQ29kZToge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbkNvbmZpcm1Db2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzZXJ2YXRpb24gQ29uZmlybWF0aW9uIENvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbiBDb25maXJtYXRpb24gQ29kZVwiLFxuICB9LFxuICBDaGVja0luRGF0ZToge1xuICAgIGlkOiBcImFwcC5DaGVja0luRGF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoZWNrLWluIERhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGVjay1pbiBEYXRlXCIsXG4gIH0sXG4gIENoZWNrT3V0RGF0ZToge1xuICAgIGlkOiBcImFwcC5DaGVja091dERhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGVjay1vdXQgRGF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrLW91dCBEYXRlXCIsXG4gIH0sXG4gIFNlbmRlckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLlNlbmRlckxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VuZGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZGVyXCIsXG4gIH0sXG4gIHJldmlld1N0YXR1c0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1N0YXR1c0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3IFN0YXR1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlldyBTdGF0dXNcIixcbiAgfSxcbiAgcmV2aWV3QWN0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3QWN0aW9uTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgQWN0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3IEFjdGlvblwiLFxuICB9LFxuICB3cml0ZVNvbWV0aGlnczoge1xuICAgIGlkOiBcImFwcC53cml0ZVNvbWV0aGlnc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIndyaXRlIHNvbWV0aGluZy4uLi4uLi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3cml0ZSBzb21ldGhpbmcuLi4uLi4uXCIsXG4gIH0sXG4gIGNvb2tpZVN0YXRpY1BvbGljeToge1xuICAgIGlkOiBcImFwcC5jb29raWVTdGF0aWNQb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb29raWUgUG9saWN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29va2llIFBvbGljeVwiLFxuICB9LFxuICB3aXNoTGlzdFNhdmU6IHtcbiAgICBpZDogXCJhcHAud2lzaExpc3RTYXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmUgQnV0dG9uXCIsXG4gIH0sXG4gIG5vUGhvbmVOdW1iZXJFbnRlcmVkOiB7XG4gICAgaWQ6IFwiYXBwLm5vUGhvbmVOdW1iZXJFbnRlcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gcGhvbmUgbnVtYmVyIGVudGVyZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcGhvbmUgbnVtYmVyIGVudGVyZWQuXCIsXG4gIH0sXG4gIHdlbGNvbWVBZG1pbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLndlbGNvbWVBZG1pbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2VsY29tZSBBZG1pbiAhISFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lIEFkbWluICEhIVwiLFxuICB9LFxuICBzaWRlTWVudToge1xuICAgIGlkOiBcImFwcC5zaWRlTWVudVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBIb3N0IFN0YXRpYyBCbG9ja1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZGUgTWVudVwiLFxuICB9LFxuICBleGNlZWRMaW1pdDM1OiB7XG4gICAgaWQ6IFwiYXBwLmV4Y2VlZExpbWl0MzVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIDM1IGNoYXJhY3RlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXhpbXVtIDM1IGNoYXJhY3RlcnNcIixcbiAgfSxcbiAgZXhjZWVkTGltaXQ3MDoge1xuICAgIGlkOiBcImFwcC5leGNlZWRMaW1pdDcwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSA3MCBjaGFyYWN0ZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWF4aW11bSA3MCBjaGFyYWN0ZXJzXCIsXG4gIH0sXG4gIGxpc3REZWxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3REZWxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXNlciBkZWxldGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXNlciBkZWxldGVkXCIsXG4gIH0sXG4gIHZlcmlmaWVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZlcmlmaWVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwidmVyaWZpZWRCeVwiLFxuICB9LFxuICBsaW5rQ29waWVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubGlua0NvcGllZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGluayBDb3BpZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaW5rIENvcGllZFwiLFxuICB9LFxuICBjb3B5TGlua0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvcHlMaW5rTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb3B5IExpbmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5IExpbmtcIixcbiAgfSxcbiAgdG9kYXlMYWJlbDoge1xuICAgIGlkOiBcImFwcC50b2RheUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG9kYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ0b2RheUxhYmVsXCIsXG4gIH0sXG4gIGliYW5OdW1iZXI6IHtcbiAgICBpZDogXCJhcHAuaWJhbk51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklCQU4gbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaWJhbk51bWJlclwiLFxuICB9LFxuICBjb25maXJtSWJhbk51bWJlcjoge1xuICAgIGlkOiBcImFwcC5jb25maXJtSWJhbk51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm0gSUJBTiBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtSWJhbk51bWJlclwiLFxuICB9LFxuICBpYmFuTnVtYmVySW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5pYmFuTnVtYmVySW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgSUJBTiBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJpYmFuTnVtYmVySW52YWxpZFwiLFxuICB9LFxuICBjb25maXJtSWJhbk51bWJlckludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybUliYW5OdW1iZXJJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBjb25maXJtIElCQU4gbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29uZmlybUliYW5OdW1iZXJJbnZhbGlkXCIsXG4gIH0sXG4gIGNvbmZpcm1JYmFuTnVtYmVyTWlzbWF0Y2g6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybUliYW5OdW1iZXJNaXNtYXRjaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklCQU4gbnVtYmVyIG1pc21hdGNoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29uZmlybUliYW5OdW1iZXJNaXNtYXRjaFwiLFxuICB9LFxuICBzdHJpcGVUb2tlbkluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLnN0cmlwZVRva2VuSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCeSBjbGlja2luZywgeW91IGFncmVlIHRvIG91ciB0ZXJtcyBhbmQgdGhlIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0cmlwZVRva2VuSW5mbzFcIixcbiAgfSxcbiAgc3RyaXBlVG9rZW5JbmZvMjoge1xuICAgIGlkOiBcImFwcC5zdHJpcGVUb2tlbkluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyaXBlIENvbm5lY3RlZCBBY2NvdW50IEFncmVlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0cmlwZVRva2VuSW5mbzJcIixcbiAgfSxcbiAgUGFnaW5hdGlvbk9mQ29udGVudDoge1xuICAgIGlkOiBcImFwcC5QYWdpbmF0aW9uT2ZDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwib2ZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJvZlwiLFxuICB9LFxuICBhZG1pbkRhc2hib2FyZDoge1xuICAgIGlkOiBcImFwcC5hZG1pbkRhc2hib2FyZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkbWluIERhc2hib2FyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm9mXCIsXG4gIH0sXG4gIGNsaWNrSGVyZXRvVXBsb2FkTG9nbzoge1xuICAgIGlkOiBcImFwcC5jbGlja0hlcmV0b1VwbG9hZExvZ29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGljayBoZXJlIHRvIHVwbG9hZCB0aGUgbG9nb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNsaWNrSGVyZXRvVXBsb2FkTG9nb1wiLFxuICB9LFxuICB1c2VyTWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC51c2VyTWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInVzZXJNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIHByb2ZpbGVWZXJpZmllZFZpZXc6IHtcbiAgICBpZDogXCJhcHAucHJvZmlsZVZlcmlmaWVkVmlld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgVmVyaWZpZWQgVmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInByb2ZpbGVWZXJpZmllZFZpZXdcIixcbiAgfSxcbiAgbGlzdGluZ3NNYW5hZ2VtZW50OiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RpbmdzTWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3RpbmdzIE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJsaXN0aW5nc01hbmFnZW1lbnRcIixcbiAgfSxcbiAgaG9zdExpc3RpbmdzTWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5ob3N0TGlzdGluZ3NNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBMaXN0aW5ncyBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwibGlzdGluZ3NNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIHJlYWR5VG9wYXk6IHtcbiAgICBpZDogXCJhcHAucmVhZHlUb3BheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlYWR5IFRvIFBheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInJlYWR5VG9wYXlcIixcbiAgfSxcbiAgdXNlcnNSZXZpZXdzOiB7XG4gICAgaWQ6IFwiYXBwLnVzZXJzUmV2aWV3c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXJzIFJldmlld3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ1c2Vyc1Jldmlld3NcIixcbiAgfSxcbiAgc2VydmljZWZlZXNTZXR0aW5nczoge1xuICAgIGlkOiBcImFwcC5zZXJ2aWNlZmVlc1NldHRpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VydmljZSBGZWVzIFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2VydmljZWZlZXNTZXR0aW5nc1wiLFxuICB9LFxuICBkb2N1bWVudFZlcmlmaWNhdGlvbk1hbmFnZW1lbnQ6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRWZXJpZmljYXRpb25NYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG9jdW1lbnQgVmVyaWZpY2F0aW9uIE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEb2N1bWVudCBWZXJpZmljYXRpb24gTWFuYWdlbWVudFwiLFxuICB9LFxuICBwZGY6IHtcbiAgICBpZDogXCJhcHAucGRmXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUERGXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGRmXCIsXG4gIH0sXG4gIHJlcG9ydFVzZXJNZXNzYWdlOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydFVzZXJNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVwb3J0IFVzZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJyZXBvcnRVc2VyXCIsXG4gIH0sXG4gIHBheW91dE1hbmFnZW1lbnQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0TWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dCBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0TWFuYWdlbWVudFwiLFxuICB9LFxuICBjdXJyZW5jeU1hbmFnZW1lbnQ6IHtcbiAgICBpZDogXCJhcHAuY3VycmVuY3lNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3VycmVuY3kgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbmN5IE1hbmFnZW1lbnRcIixcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgaWQ6IFwiYXBwLmFjdGl2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjdGl2ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFjdGl2ZVwiLFxuICB9LFxuICBjaGFuZ2VBZG1pbkVtYWlsUGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAuY2hhbmdlQWRtaW5FbWFpbFBhc3N3b3JkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hhbmdlIEFkbWluIEVtYWlsL1Bhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY2hhbmdlQWRtaW5FbWFpbFBhc3N3b3JkXCIsXG4gIH0sXG4gIGJhbm5lclNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLmJhbm5lclNldHRpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFubmVyIFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYmFubmVyU2V0dGluZ3NcIixcbiAgfSxcbiAgaG9tZXBhZ2VCYW5uZXJlclNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVwYWdlQmFubmVyZXJTZXR0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgcGFnZSBCYW5uZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJiYW5Ib21lIHBhZ2UgQmFubmVybmVyU2V0dGluZ3NcIixcbiAgfSxcbiAgY2xpY2tIZXJldG9VcGxvYWRJbWFnZToge1xuICAgIGlkOiBcImFwcC5jbGlja0hlcmV0b1VwbG9hZEltYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xpY2sgSGVyZSB0byBVcGxvYWQgSW1hZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDbGljayBIZXJlIHRvIFVwbG9hZCBJbWFnZVwiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0QmxvY2sxOiB7XG4gICAgaWQ6IFwiYXBwLndoeUJlY29tZUhvc3RCbG9jazFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaHkgQmVjb21lIEhvc3QgQmxvY2sgMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoeSBCZWNvbWUgSG9zdCBCbG9jayAxXCIsXG4gIH0sXG4gIHdoeUJlY29tZUhvc3RCbG9jazI6IHtcbiAgICBpZDogXCJhcHAud2h5QmVjb21lSG9zdEJsb2NrMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBCbG9jayAyXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5QmVjb21lSG9zdEJsb2NrMlwiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0QmxvY2szOiB7XG4gICAgaWQ6IFwiYXBwLndoeUJlY29tZUhvc3RCbG9jazNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaHkgQmVjb21lIEhvc3QgQmxvY2sgM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeUJlY29tZUhvc3RCbG9jazNcIixcbiAgfSxcbiAgd2h5QmVjb21lSG9zdEJsb2NrNDoge1xuICAgIGlkOiBcImFwcC53aHlCZWNvbWVIb3N0QmxvY2s0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEJlY29tZSBIb3N0IEJsb2NrIDRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aHlCZWNvbWVIb3N0QmxvY2s0XCIsXG4gIH0sXG4gIHdoeUJlY29tZUhvc3RCbG9jazU6IHtcbiAgICBpZDogXCJhcHAud2h5QmVjb21lSG9zdEJsb2NrNVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBCbG9jayA1XCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5QmVjb21lSG9zdEJsb2NrNVwiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0QmxvY2s2OiB7XG4gICAgaWQ6IFwiYXBwLndoeUJlY29tZUhvc3RCbG9jazZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaHkgQmVjb21lIEhvc3QgQmxvY2sgNlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeUJlY29tZUhvc3RCbG9jazZcIixcbiAgfSxcbiAgd2h5QmVjb21lSG9zdEJsb2NrNzoge1xuICAgIGlkOiBcImFwcC53aHlCZWNvbWVIb3N0QmxvY2s3XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEJlY29tZSBIb3N0IEJsb2NrIDdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aHlCZWNvbWVIb3N0QmxvY2s3XCIsXG4gIH0sXG4gIGNvbnRlbnRNYW5hZ2VtZW50U3lzdGVtOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRlbnRNYW5hZ2VtZW50U3lzdGVtXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbnRlbnRNYW5hZ2VtZW50U3lzdGVtXCIsXG4gIH0sXG4gIGVkaXRQYWdlRGV0YWlsczoge1xuICAgIGlkOiBcImFwcC5lZGl0UGFnZURldGFpbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IFBhZ2UgRGV0YWlsc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVkaXRQYWdlRGV0YWlsc1wiLFxuICB9LFxuICBzdGF0aWNQYWdlTWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5zdGF0aWNQYWdlTWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXRpYyBQYWdlIE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzdGF0aWNQYWdlTWFuYWdlbWVudFwiLFxuICB9LFxuICBhZG1pbkNhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluQ2F0ZWdvcnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhdGVnb3J5XCIsXG4gIH0sXG4gIGZpZWxkQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuZmllbGRDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpZWxkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2F0ZWdvcnlcIixcbiAgfSxcbiAgZmllbGQ6IHtcbiAgICBpZDogXCJhcHAuZmllbGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaWVsZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpZWxkXCIsXG4gIH0sXG4gIGZhaWxlZDoge1xuICAgIGlkOiBcImFwcC5mYWlsZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGYWlsZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYWlsZWQgUGF5b3V0IHN0YXR1c1wiLFxuICB9LFxuICBtYW5hZ2VtZW50UmV2aWV3czoge1xuICAgIGlkOiBcImFwcC5tYW5hZ2VtZW50UmV2aWV3c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbmFnZW1lbnQgUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm1hbmFnZW1lbnRSZXZpZXdzXCIsXG4gIH0sXG4gIHBheW91dERldGFpbHM6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0RGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dCBEZXRhaWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0RGV0YWlsc1wiLFxuICB9LFxuICBVcGxvYWRJbWFnZToge1xuICAgIGlkOiBcImFwcC5VcGxvYWRJbWFnZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVwbG9hZCBJbWFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVwbG9hZCBJbWFnZVwiLFxuICB9LFxuICBlZGl0UG9wdWxhckxvY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRQb3B1bGFyTG9jYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFZGl0IFBvcHVsYXIgTG9jYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJFZGl0IFBvcHVsYXIgTG9jYXRpb25cIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25EZXRhaWxzOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uRGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VydmF0aW9uIERldGFpbHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbiBEZXRhaWxzIEhlYWRlclwiLFxuICB9LFxuICB1cmxSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC51cmxSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVSTCBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc2VydmF0aW9uIERldGFpbHMgSGVhZGVyXCIsXG4gIH0sXG4gIGNhbGVuZGFyQWRkcmVzczoge1xuICAgIGlkOiBcImFwcC5jYWxlbmRhckFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXN0ZSBDYWxlbmRhciBBZGRyZXNzIChVUkwpIGhlcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjYWxlbmRhckFkZHJlc3NcIixcbiAgfSxcbiAgY2FsZW5kYXJDdXN0b21OYW1lOiB7XG4gICAgaWQ6IFwiYXBwLmNhbGVuZGFyQ3VzdG9tTmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkN1c3RvbSBuYW1lIGZvciB0aGlzIGNhbGVuZGFyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY2FsZW5kYXJDdXN0b21OYW1lXCIsXG4gIH0sXG4gIG1heFByaWNlR3JlYXRlcjoge1xuICAgIGlkOiBcImFwcC5tYXhQcmljZUdyZWF0ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIFByaWNlIG11c3QgYmUgZ3JlYXRlciB0aGFuIE1pbmltdW0gUHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJtYXhQcmljZUdyZWF0ZXJcIixcbiAgfSxcbiAgcGF5b3V0U29ydE51bWJlcjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRTb3J0TnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU29ydCBOdW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb3J0IE51bWJlciBmb3IgVW5pdGVkIEtpbmdkb20oR0IpXCIsXG4gIH0sXG4gIHBheW91dEludmFsaWRTb3J0TnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEludmFsaWRTb3J0TnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBzb3J0IG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkludmFsaWQgc29ydCBudW1iZXJcIixcbiAgfSxcbiAgc3RyaXBlUHVibGlzaGFibGVLZXk6IHtcbiAgICBpZDogXCJhcHAuc3RyaXBlUHVibGlzaGFibGVLZXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdHJpcGUgUHVibGlzaGFibGUgS2V5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RyaXBlIFB1Ymxpc2hhYmxlIEtleVwiLFxuICB9LFxuICBzdWJtaXRGb3JWZXJpZmljYXRpb246IHtcbiAgICBpZDogXCJhcHAuc3VibWl0Rm9yVmVyaWZpY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0IGZvciB2ZXJpZmljYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdWJtaXQgVmVyaWZpY2F0aW9uIGJ1dHRvblwiLFxuICB9LFxuICBzdWJtaXRGb3JBcHBlYWw6IHtcbiAgICBpZDogXCJhcHAuc3VibWl0Rm9yQXBwZWFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0IGZvciBhcHBlYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdWJtaXQgQXBwZWFsIGJ1dHRvblwiLFxuICB9LFxuICB3YWl0aW5nRm9yQWRtaW46IHtcbiAgICBpZDogXCJhcHAud2FpdGluZ0ZvckFkbWluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2FpdGluZyBmb3IgdGhlIGFkbWluIGFwcHJvdmFsLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldhaXRpbmcgRm9yIEFkbWluXCIsXG4gIH0sXG4gIHJlcXVpcmU6IHtcbiAgICBpZDogXCJhcHAucmVxdWlyZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWlyZWRcIixcbiAgfSxcbiAgb3B0aW9uYWw6IHtcbiAgICBpZDogXCJhcHAub3B0aW9uYWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPcHRpb25hbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk9wdGlvbmFsXCIsXG4gIH0sXG4gIGxpc3RpbmdBcHByb3ZhbDoge1xuICAgIGlkOiBcImFwcC5saXN0aW5nQXBwcm92YWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0aW5nIFJlcXVlc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIFJlcXVlc3RcIixcbiAgfSxcbiAgcmVhZHlGb3JBcHByb3ZhbDoge1xuICAgIGlkOiBcImFwcC5yZWFkeUZvckFwcHJvdmFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBsaXN0aW5nIGlzIHN1Ym1pdHRlZCBmb3IgdmVyaWZpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhZHkgRm9yIEFwcHJvdmFsXCIsXG4gIH0sXG4gIHJlYWR5Rm9yVmVyaWZpY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnJlYWR5Rm9yVmVyaWZpY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBMaXN0aW5nIGlzIHJlYWR5IGZvciB2ZXJpZmljYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFkeSBGb3IgVmVyaWZpY2F0aW9uXCIsXG4gIH0sXG4gIHN1Ym1pdHRlZE9uOiB7XG4gICAgaWQ6IFwiYXBwLnN1Ym1pdHRlZE9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0dGVkIE9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwic3VibWl0dGVkT25cIixcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmFjdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFjdGlvblwiLFxuICB9LFxuICBmYXZJY29ubG9nb0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmZhdkljb25sb2dvTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGYXYgSWNvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhdiBJY29uXCIsXG4gIH0sXG4gIGFwcHJvdmVkOiB7XG4gICAgaWQ6IFwiYXBwLmFwcHJvdmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwcm92ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJhcHByb3ZlZFwiLFxuICB9LFxuICBkZWNsaW5lZDoge1xuICAgIGlkOiBcImFwcC5kZWNsaW5lZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlY2xpbmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVjbGluZWRcIixcbiAgfSxcbiAgZGVjbGluZWRSZWFzb246IHtcbiAgICBpZDogXCJhcHAuZGVjbGluZWRSZWFzb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZWNsaW5lZCByZWFzb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZWNsaW5lZFJlYXNvblwiLFxuICB9LFxuICBjb21tZW50OiB7XG4gICAgaWQ6IFwiYXBwLmNvbW1lbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb21tZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29tbWVudFwiLFxuICB9LFxuICBwbmdPbmx5TGFiZWw6IHtcbiAgICBpZDogXCJhcHAucG5nT25seUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiKiBwbmcgaW1hZ2VzIG9ubHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCIqIHBuZyBpbWFnZXMgb25seVwiLFxuICB9LFxuICBib29raW5nQ29uZmlybWVkOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdDb25maXJtZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29raW5nIENvbmZpcm1lZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgQ29uZmlybWVkXCIsXG4gIH0sXG4gIGRlY2xpbmVBZG1pbjoge1xuICAgIGlkOiBcImFwcC5kZWNsaW5lQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGlzIExpc3RpbmcgaXMgZGVjbGluZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZWNsaW5lQWRtaW5cIixcbiAgfSxcbiAgd2Vla2x5UHJpY2VEaXNjb3VudDoge1xuICAgIGlkOiBcImFwcC53ZWVrbHlQcmljZURpc2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiJSB3ZWVrbHkgcHJpY2UgZGlzY291bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3ZWVrbHlQcmljZURpc2NvdW50XCIsXG4gIH0sXG4gIG1vbnRobHlQcmljZURpc2NvdW50OiB7XG4gICAgaWQ6IFwiYXBwLm1vbnRobHlQcmljZURpc2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiJSBtb250aGx5IHByaWNlIGRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwibW9udGhseVByaWNlRGlzY291bnRcIixcbiAgfSxcbiAgaGlzdG9yeToge1xuICAgIGlkOiBcImFwcC5oaXN0b3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGlzdG9yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImhpc3RvcnlcIixcbiAgfSxcbiAgbGlzdGluZ1JlamVjdGVkOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RpbmdSZWplY3RlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3RpbmcgUmVqZWN0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJsaXN0aW5nUmVqZWN0ZWRcIixcbiAgfSxcbiAgcmVxdWVzdHM6IHtcbiAgICBpZDogXCJhcHAucmVxdWVzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1ZXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgUmVxdWVzdHNcIixcbiAgfSxcbiAgY2xpY2tIZXJldG9VcGxvYWRGYXZJY29uOiB7XG4gICAgaWQ6IFwiYXBwLmNsaWNrSGVyZXRvVXBsb2FkRmF2SWNvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsaWNrIGhlcmUgdG8gdXBsb2FkIHRoZSBmYXZpY29uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgaGVyZSB0byB1cGxvYWQgdGhlIGZhdmljb25cIixcbiAgfSxcbiAgcGVyc29uYWxIb21lOiB7XG4gICAgaWQ6IFwiYXBwLnBlcnNvbmFsSG9tZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBlcnNvbmFsIGhvbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25hbCBob21lXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbmhQQTtBQTBoUEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==