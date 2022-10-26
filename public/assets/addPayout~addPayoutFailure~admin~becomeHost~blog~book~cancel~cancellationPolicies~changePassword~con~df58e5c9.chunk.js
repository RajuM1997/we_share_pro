(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPayout~addPayoutFailure~admin~becomeHost~blog~book~cancel~cancellationPolicies~changePassword~con~df58e5c9"],{

/***/ "Q7QM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JRPe");
var _defineMessages;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])((_defineMessages = {
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
  somethingWentWrong: {
    id: "app.somethingWentWrong",
    defaultMessage: "Sorry, something went wrong. Please try again",
    description: "Wrong went wrong"
  },
  loggedIn: {
    id: "app.loggedIn",
    defaultMessage: "You are already logged in!",
    description: "You are already Logged-in"
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
  day: {
    id: "app.day",
    defaultMessage: "Day",
    description: "Day of birthday"
  },
  dayRequired: {
    id: "app.dayRequired",
    defaultMessage: "Day is required",
    description: "Day is required"
  },
  month: {
    id: "app.month",
    defaultMessage: "Month",
    description: "Month of birthday"
  },
  monthRequired: {
    id: "app.monthRequired",
    defaultMessage: "Month is required",
    description: "Month is required"
  },
  year: {
    id: "app.year",
    defaultMessage: "Year",
    description: "Year of birthday"
  },
  yearRequired: {
    id: "app.yearRequired",
    defaultMessage: "Year is required",
    description: "Year is required"
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
  bed: {
    id: "app.bed",
    defaultMessage: "Bed",
    description: "Bed"
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
  }
}, _defineProperty(_defineMessages, "bed", {
  id: "app.bed",
  defaultMessage: "Bed",
  description: "Bed"
}), _defineProperty(_defineMessages, "noReviewTitle", {
  id: "app.noReviewTitle",
  defaultMessage: "This place would love your review",
  description: "View listing no review title"
}), _defineProperty(_defineMessages, "noReviewInfo", {
  id: "app.noReviewInfo",
  defaultMessage: "When you book this place, here’s where your review will show up!",
  description: "View listing no review info"
}), _defineProperty(_defineMessages, "loadMore", {
  id: "app.loadMore",
  defaultMessage: "Load More",
  description: "Load more button"
}), _defineProperty(_defineMessages, "viewCountInfo", {
  id: "app.viewCountInfo",
  defaultMessage: "This home is on people minds.",
  description: "View listing view count details"
}), _defineProperty(_defineMessages, "viewCountTotal1", {
  id: "app.viewCountTotal1",
  defaultMessage: "It’s been viewed",
  description: "View listing view count details"
}), _defineProperty(_defineMessages, "viewCountTotal2", {
  id: "app.viewCountTotal2",
  defaultMessage: "times in the past week.",
  description: "View listing view count details"
}), _defineProperty(_defineMessages, "neighborhood", {
  id: "app.neighborhood",
  defaultMessage: "The neighborhood",
  description: "View listing neighborhood"
}), _defineProperty(_defineMessages, "neighborhoodInfo", {
  id: "app.neighborhoodInfo",
  defaultMessage: "Exact location information is provided after a booking is confirmed.",
  description: "View listing neighborhoodInfo"
}), _defineProperty(_defineMessages, "yourHost", {
  id: "app.yourHost",
  defaultMessage: "Your Host",
  description: "View listing your host"
}), _defineProperty(_defineMessages, "responseRate", {
  id: "app.responseRate",
  defaultMessage: "Response rate",
  description: "View listing response rate"
}), _defineProperty(_defineMessages, "responseTime", {
  id: "app.responseTime",
  defaultMessage: "Response time",
  description: "View listing response time"
}), _defineProperty(_defineMessages, "joinedIn", {
  id: "app.joinedIn",
  defaultMessage: "Joined in",
  description: "View listing host joining date"
}), _defineProperty(_defineMessages, "contactHostinfo1", {
  id: "app.contactHostinfo1",
  defaultMessage: "Make sure you share the following",
  description: "Contact host instructions"
}), _defineProperty(_defineMessages, "contactHostinfo2", {
  id: "app.contactHostinfo2",
  defaultMessage: "Tell",
  description: "Contact host instructions"
}), _defineProperty(_defineMessages, "contactHostinfo3", {
  id: "app.contactHostinfo3",
  defaultMessage: "a little about yourself",
  description: "Contact host instructions"
}), _defineProperty(_defineMessages, "contactHostinfo4", {
  id: "app.contactHostinfo4",
  defaultMessage: "What brings you to",
  description: "Contact host instructions"
}), _defineProperty(_defineMessages, "contactHostinfo5", {
  id: "app.contactHostinfo5",
  defaultMessage: "Who’s joining you",
  description: "Contact host instructions"
}), _defineProperty(_defineMessages, "contactHostinfo6", {
  id: "app.contactHostinfo6",
  defaultMessage: "What do you love about this listing? Mention it",
  description: "Contact host instructions"
}), _defineProperty(_defineMessages, "contactHostDate", {
  id: "app.contactHostDate",
  defaultMessage: "When are you travelling",
  description: "Contact host dates title"
}), _defineProperty(_defineMessages, "hostErrorMessage1", {
  id: "app.hostErrorMessage1",
  defaultMessage: "Please specify check in and check out",
  description: "Contact host error message"
}), _defineProperty(_defineMessages, "hostErrorMessage2", {
  id: "app.hostErrorMessage2",
  defaultMessage: "Those dates are not available",
  description: "Contact host error message"
}), _defineProperty(_defineMessages, "hostErrorMessage3", {
  id: "app.hostErrorMessage3",
  defaultMessage: "You can contact the host now",
  description: "Contact host error message"
}), _defineProperty(_defineMessages, "chooseGuests", {
  id: "app.chooseGuests",
  defaultMessage: "Choose Guests",
  description: "Contact host choose guests dropdown"
}), _defineProperty(_defineMessages, "textBoxMessage", {
  id: "app.textBoxMessage",
  defaultMessage: "Start your message",
  description: "Contact host text box start your message"
}), _defineProperty(_defineMessages, "sendMessage", {
  id: "app.sendMessage",
  defaultMessage: "Send message",
  description: "Contact host button"
}), _defineProperty(_defineMessages, "contacthostError1", {
  id: "app.contacthostError1",
  defaultMessage: "You must select number of guests",
  description: "Contact host error message"
}), _defineProperty(_defineMessages, "contacthostError2", {
  id: "app.contacthostError2",
  defaultMessage: "Message is required",
  description: "Contact host error message"
}), _defineProperty(_defineMessages, "maximumCharcter", {
  id: "app.maximumCharcter",
  defaultMessage: "(Allows Maximum 50 characters)",
  description: "maximumCharcter"
}), _defineProperty(_defineMessages, "emptySpace", {
  id: "app.emptySpace",
  defaultMessage: "Invalid input ",
  description: "emptySpace"
}), _defineProperty(_defineMessages, "maximumCharcterLeft", {
  id: "app.maximumCharcterLeft",
  defaultMessage: "characters left.",
  description: "maximumCharcterLeft"
}), _defineProperty(_defineMessages, "serviceFee", {
  id: "app.serviceFee",
  defaultMessage: "Service fee",
  description: "Bill details"
}), _defineProperty(_defineMessages, "cleaningFee", {
  id: "app.cleaningFee",
  defaultMessage: "Cleaning fee",
  description: "Bill details"
}), _defineProperty(_defineMessages, "total", {
  id: "app.total",
  defaultMessage: "Total",
  description: "Bill details"
}), _defineProperty(_defineMessages, "nights", {
  id: "app.nights",
  defaultMessage: "nights",
  description: "Bill details"
}), _defineProperty(_defineMessages, "checkAvailability", {
  id: "app.checkAvailability",
  defaultMessage: "Check Availability",
  description: "Booking button"
}), _defineProperty(_defineMessages, "viewOtherListings", {
  id: "app.viewOtherListings",
  defaultMessage: "View Other Listings",
  description: "Booking button"
}), _defineProperty(_defineMessages, "book", {
  id: "app.book",
  defaultMessage: "Book",
  description: "Booking button"
}), _defineProperty(_defineMessages, "requestToBook", {
  id: "app.requestToBook",
  defaultMessage: "Request to Book",
  description: "Booking button"
}), _defineProperty(_defineMessages, "maximumStay", {
  id: "app.maximumStay",
  defaultMessage: "Maximum stay is",
  description: "Maximum day error"
}), _defineProperty(_defineMessages, "perNight", {
  id: "app.perNight",
  defaultMessage: "Per Night",
  description: "Per Night"
}), _defineProperty(_defineMessages, "bookingInfo", {
  id: "app.bookingInfo",
  defaultMessage: "You won’t be charged yet",
  description: "You won’t be charged yet"
}), _defineProperty(_defineMessages, "viewPhotos", {
  id: "app.viewPhotos",
  defaultMessage: "View Photos",
  description: "View photos button"
}), _defineProperty(_defineMessages, "cancellationPolicies", {
  id: "app.cancellationPolicies",
  defaultMessage: "Cancellation Policies",
  description: "Cancellation Policies"
}), _defineProperty(_defineMessages, "flexible", {
  id: "app.flexible",
  defaultMessage: "Flexible",
  description: "Flexible"
}), _defineProperty(_defineMessages, "moderate", {
  id: "app.moderate",
  defaultMessage: "Moderate",
  description: "Moderate"
}), _defineProperty(_defineMessages, "strict", {
  id: "app.strict",
  defaultMessage: "Strict",
  description: "Strict"
}), _defineProperty(_defineMessages, "addProfilePhoto", {
  id: "app.addProfilePhoto",
  defaultMessage: "Add your profile photo",
  description: "Avatar upload title"
}), _defineProperty(_defineMessages, "uploadInfo", {
  id: "app.uploadInfo",
  defaultMessage: "This helps your host recognize you when you meet, so make sure it shows your face.",
  description: "Avatar upload info"
}), _defineProperty(_defineMessages, "continue", {
  id: "app.continue",
  defaultMessage: "Continue",
  description: "Continue button"
}), _defineProperty(_defineMessages, "dropzoneUpload", {
  id: "app.dropzoneUpload",
  defaultMessage: "Upload a file from your computer",
  description: "Dropzone upload info"
}), _defineProperty(_defineMessages, "dropzoneUploadError", {
  id: "app.dropzoneUploadError",
  defaultMessage: "Remove the existing image and try upload again",
  description: "Dropzone upload error message"
}), _defineProperty(_defineMessages, "meetupTitle", {
  id: "app.meetupTitle",
  defaultMessage: "Get ready to book with",
  description: "Get ready to book with"
}), _defineProperty(_defineMessages, "meetupInfo1", {
  id: "app.meetupInfo1",
  defaultMessage: "We ask everyone to confirm a few things before travelling or hosting.",
  description: "Meetup information"
}), _defineProperty(_defineMessages, "meetupInfo2", {
  id: "app.meetupInfo2",
  defaultMessage: "You’ll only have to do this once.",
  description: "Meetup information"
}), _defineProperty(_defineMessages, "next", {
  id: "app.next",
  defaultMessage: "Next",
  description: "Next button"
}), _defineProperty(_defineMessages, "checkEmail", {
  id: "app.checkEmail",
  defaultMessage: "Check your email",
  description: "Email verification title"
}), _defineProperty(_defineMessages, "verificationInfo1", {
  id: "app.verificationInfo1",
  defaultMessage: "Tap the link in the email we sent you.",
  description: "Verification info"
}), _defineProperty(_defineMessages, "verificationInfo2", {
  id: "app.verificationInfo2",
  defaultMessage: "Confirming your email address helps us send you trip information.",
  description: "Verification info"
}), _defineProperty(_defineMessages, "resendEmail", {
  id: "app.resendEmail",
  defaultMessage: "Resend email",
  description: "Resend email button"
}), _defineProperty(_defineMessages, "changeEmail", {
  id: "app.changeEmail",
  defaultMessage: "Change email address",
  description: "Change email address"
}), _defineProperty(_defineMessages, "aboutYourTrip", {
  id: "app.aboutYourTrip",
  defaultMessage: "About Your Trip",
  description: "Payment About Your Trip"
}), _defineProperty(_defineMessages, "whoComing", {
  id: "app.whoComing",
  defaultMessage: "Who's Coming",
  description: "Who's Coming"
}), _defineProperty(_defineMessages, "sayHello", {
  id: "app.sayHello",
  defaultMessage: "Say hello to your host and tell them why you’re coming",
  description: "Payment page info"
}), _defineProperty(_defineMessages, "descriptionInfo", {
  id: "app.descriptionInfo",
  defaultMessage: "Visiting family or friends? Sight seeing? This helps your host plan for your trip.",
  description: "Payment description information"
}), _defineProperty(_defineMessages, "payment", {
  id: "app.payment",
  defaultMessage: "Payment",
  description: "Payment"
}), _defineProperty(_defineMessages, "paymentInfo", {
  id: "app.paymentInfo",
  defaultMessage: "You’ll only be charged if your request is accepted by the host.They’ll have 24 hours to accept or decline.",
  description: "Payment information"
}), _defineProperty(_defineMessages, "paymentCurrency", {
  id: "app.paymentCurrency",
  defaultMessage: "Payment Currency",
  description: "Payment currency"
}), _defineProperty(_defineMessages, "chooseCurrency", {
  id: "app.chooseCurrency",
  defaultMessage: "Choose Currency",
  description: "Choose Currency"
}), _defineProperty(_defineMessages, "paymentType", {
  id: "app.paymentType",
  defaultMessage: "Payment Type",
  description: "Payment Type"
}), _defineProperty(_defineMessages, "paypal", {
  id: "app.paypal",
  defaultMessage: "PayPal",
  description: "Paypal"
}), _defineProperty(_defineMessages, "loginInfo", {
  id: "app.loginInfo",
  defaultMessage: "Log into PayPal. You will be able to review your request before it is final.",
  description: "Login information"
}), _defineProperty(_defineMessages, "currencyError", {
  id: "app.currencyError",
  defaultMessage: "Choose a payment currency",
  description: "Currency Error"
}), _defineProperty(_defineMessages, "hostedBy", {
  id: "app.hostedBy",
  defaultMessage: "Hosted by",
  description: "Hosted by"
}), _defineProperty(_defineMessages, "cancellationPolicy", {
  id: "app.cancellationPolicy",
  defaultMessage: "Cancellation policy",
  description: "Cancellation policy"
}), _defineProperty(_defineMessages, "deleteListing", {
  id: "app.deleteListing",
  defaultMessage: "Delete this Listing",
  description: "Manage listing delete this listing"
}), _defineProperty(_defineMessages, "deleteListingInfo", {
  id: "app.deleteListingInfo",
  defaultMessage: "Are you sure you want to delete this listing? You cannot reverse this action.",
  description: "Manage listing delete listing information"
}), _defineProperty(_defineMessages, "delete", {
  id: "app.delete",
  defaultMessage: "Delete",
  description: "Manage listing Delete button"
}), _defineProperty(_defineMessages, "goBack", {
  id: "app.goBack",
  defaultMessage: "Go Back",
  description: "Manage listing Go back button"
}), _defineProperty(_defineMessages, "progressBarText1", {
  id: "app.progressBarText1",
  defaultMessage: "You’re",
  description: "Manage listing Progress bar text"
}), _defineProperty(_defineMessages, "progressBarText2", {
  id: "app.progressBarText2",
  defaultMessage: "done with your listing",
  description: "Manage listing Progress bar text"
}), _defineProperty(_defineMessages, "listingUpdateInfo", {
  id: "app.listingUpdateInfo",
  defaultMessage: "Last updated on",
  description: "Manage listing update info"
}), _defineProperty(_defineMessages, "editListing", {
  id: "app.editListing",
  defaultMessage: "Edit listing",
  description: "Manage listing button"
}), _defineProperty(_defineMessages, "finishListing", {
  id: "app.finishListing",
  defaultMessage: "Finish the Listings",
  description: "Manage listing button"
}), _defineProperty(_defineMessages, "preview", {
  id: "app.preview",
  defaultMessage: "Preview",
  description: "Manage listing button"
}), _defineProperty(_defineMessages, "listed", {
  id: "app.listed",
  defaultMessage: "Listed",
  description: "Manage listing dropdown"
}), _defineProperty(_defineMessages, "unListed", {
  id: "app.unListed",
  defaultMessage: "Unlisted",
  description: "Manage listing dropdown"
}), _defineProperty(_defineMessages, "title", {
  id: "app.title",
  defaultMessage: "You don't have any listings!",
  description: "You don't have any listings!"
}), _defineProperty(_defineMessages, "content", {
  id: "app.content",
  defaultMessage: "Make money by renting out your extra space. You'll also get to meet interesting travellers from around the world!",
  description: "content"
}), _defineProperty(_defineMessages, "button", {
  id: "app.button",
  defaultMessage: "Post a new listing",
  description: "Post a new listing"
}), _defineProperty(_defineMessages, "noTripTitle1", {
  id: "app.noTripTitle1",
  defaultMessage: "You don't have any upcoming trips!",
  description: "No trips title"
}), _defineProperty(_defineMessages, "noTripTitle2", {
  id: "app.noTripTitle2",
  defaultMessage: "Choose your next adventure right away!",
  description: "No trips title"
}), _defineProperty(_defineMessages, "noTripsButton", {
  id: "app.noTripsButton",
  defaultMessage: "Search listings",
  description: "No trips button"
}), _defineProperty(_defineMessages, "noReservation", {
  id: "app.noReservation",
  defaultMessage: "You don't have any upcoming reservations!",
  description: "No reservation"
}), _defineProperty(_defineMessages, "status", {
  id: "app.status",
  defaultMessage: "Status",
  description: "Status"
}), _defineProperty(_defineMessages, "dateLocation", {
  id: "app.dateLocation",
  defaultMessage: "Dates and Location",
  description: "Dates and Location"
}), _defineProperty(_defineMessages, "details", {
  id: "app.details",
  defaultMessage: "Details",
  description: "Details"
}), _defineProperty(_defineMessages, "noList", {
  id: "app.noList",
  defaultMessage: "No List Found",
  description: "No List Found"
}), _defineProperty(_defineMessages, "notexist", {
  id: "app.notexist",
  defaultMessage: "Guest profile doesn't exist",
  description: "Guest profile not exist"
}), _defineProperty(_defineMessages, "messageHistroy", {
  id: "app.messageHistroy",
  defaultMessage: "Message History",
  description: "Message History"
}), _defineProperty(_defineMessages, "contactSupport", {
  id: "app.contactSupport",
  defaultMessage: "Contact Support",
  description: "Contact Support"
}), _defineProperty(_defineMessages, "viewItinerary", {
  id: "app.viewItinerary",
  defaultMessage: "View Itinerary",
  description: "View Itinerary"
}), _defineProperty(_defineMessages, "viewReceipt", {
  id: "app.viewReceipt",
  defaultMessage: "View Receipt",
  description: "View Receipt"
}), _defineProperty(_defineMessages, "approve", {
  id: "app.approve",
  defaultMessage: "Approve",
  description: "Approve"
}), _defineProperty(_defineMessages, "decline", {
  id: "app.decline",
  defaultMessage: "Decline",
  description: "Decline"
}), _defineProperty(_defineMessages, "firstName", {
  id: "app.firstName",
  defaultMessage: "First Name",
  description: "Your First name to Register"
}), _defineProperty(_defineMessages, "firstNameRequired", {
  id: "app.firstNameRequired",
  defaultMessage: "First name is required",
  description: "First name Required"
}), _defineProperty(_defineMessages, "lastName", {
  id: "app.lastName",
  defaultMessage: "Last Name",
  description: "Your Last name to Register"
}), _defineProperty(_defineMessages, "lastNameRequired", {
  id: "app.lastNameRequired",
  defaultMessage: "Last name is required",
  description: "Last name Required"
}), _defineProperty(_defineMessages, "email", {
  id: "app.email",
  defaultMessage: "Email Address",
  description: "Your Email Address to Login"
}), _defineProperty(_defineMessages, "emailRequired", {
  id: "app.emailRequired",
  defaultMessage: "Email is required",
  description: "Email is required"
}), _defineProperty(_defineMessages, "emailInvalid", {
  id: "app.emailInValid",
  defaultMessage: "Invalid Email Address",
  description: "Invalid Email Address"
}), _defineProperty(_defineMessages, "emailAlreadyExists", {
  id: "app.emailAlreadyExists",
  defaultMessage: "That email address is already in use. Please choose different one!",
  description: "Email Address is already exist"
}), _defineProperty(_defineMessages, "iAm", {
  id: "app.iam",
  defaultMessage: "I am",
  description: "Gender Label"
}), _defineProperty(_defineMessages, "gender", {
  id: "app.gender",
  defaultMessage: "Gender",
  description: "Gender Field"
}), _defineProperty(_defineMessages, "genderMale", {
  id: "app.genderMale",
  defaultMessage: "Male",
  description: "Gender Male"
}), _defineProperty(_defineMessages, "genderFemale", {
  id: "app.genderFemale",
  defaultMessage: "Female",
  description: "Gender Female"
}), _defineProperty(_defineMessages, "genderOther", {
  id: "app.genderOther",
  defaultMessage: "Other",
  description: "Gender Other"
}), _defineProperty(_defineMessages, "genderRequired", {
  id: "app.genderRequired",
  defaultMessage: "Gender is required",
  description: "Gender is required"
}), _defineProperty(_defineMessages, "preferredLanguage", {
  id: "app.preferredLanguage",
  defaultMessage: "Preferred Language",
  description: "Preferred Language"
}), _defineProperty(_defineMessages, "preferredLanguageRequired", {
  id: "app.preferredLanguageRequired",
  defaultMessage: "Preferred language is required",
  description: "Preferred language is required"
}), _defineProperty(_defineMessages, "preferredCurrency", {
  id: "app.preferredCurrency",
  defaultMessage: "Preferred Currency",
  description: "Preferred Currency"
}), _defineProperty(_defineMessages, "preferredCurrencyRequired", {
  id: "app.preferredCurrencyRequired",
  defaultMessage: "Preferred currency is required",
  description: "Preferred currency is required"
}), _defineProperty(_defineMessages, "phoneNumber", {
  id: "app.phoneNumber",
  defaultMessage: "Phone Number",
  description: "Phone Number"
}), _defineProperty(_defineMessages, "phoneNumberRequired", {
  id: "app.phoneNumberRequired",
  defaultMessage: "Phone number is required",
  description: "Phone number is required"
}), _defineProperty(_defineMessages, "phoneNumberInvalid", {
  id: "app.phoneNumberInvalid",
  defaultMessage: "Invalid Phone Number",
  description: "Phone Number is Invalid"
}), _defineProperty(_defineMessages, "phoneNumberLengthInvalid", {
  id: "app.phoneNumberLengthInvalid",
  defaultMessage: "Mobile Number must be 30 digits or less",
  description: "Mobile Number must be 30 digits or less"
}), _defineProperty(_defineMessages, "liveLocation", {
  id: "app.liveLocation",
  defaultMessage: "Where You Live",
  description: "location"
}), _defineProperty(_defineMessages, "locationRequired", {
  id: "app.locationRequired",
  defaultMessage: "Location is required",
  description: "Location is required"
}), _defineProperty(_defineMessages, "info", {
  id: "app.info",
  defaultMessage: "Describe Yourself",
  description: "Describe Yourself"
}), _defineProperty(_defineMessages, "infoRequired", {
  id: "app.infoRequired",
  defaultMessage: "Profile info is required",
  description: "Describe Yourself is Required"
}), _defineProperty(_defineMessages, "infoRequiredone", {
  id: "app.infoRequiredone",
  defaultMessage: "Describe yourself is required",
  description: "Describe Yourself is Required"
}), _defineProperty(_defineMessages, "somethingWentWrong", {
  id: "app.somethingWentWrong",
  defaultMessage: "Sorry, something went wrong. Please try again",
  description: "Wrong went wrong"
}), _defineProperty(_defineMessages, "notLoggedIn", {
  id: "app.notLoggedIn",
  defaultMessage: "You are not logged In. Please login to continue!",
  description: "Wrong went wrong"
}), _defineProperty(_defineMessages, "dateOfBirth", {
  id: "app.dateOfBirth",
  defaultMessage: "Birthday",
  description: "Your Birthday to Register"
}), _defineProperty(_defineMessages, "dateOfBirthRequired", {
  id: "app.dateOfBirthRequired",
  defaultMessage: "Birthday is required",
  description: "Birthday Required"
}), _defineProperty(_defineMessages, "save", {
  id: "app.save",
  defaultMessage: "Save",
  description: "Save Button"
}), _defineProperty(_defineMessages, "month", {
  id: "app.month",
  defaultMessage: "Month",
  description: "Month of birthday"
}), _defineProperty(_defineMessages, "year", {
  id: "app.year",
  defaultMessage: "Year",
  description: "Year of birthday"
}), _defineProperty(_defineMessages, "day", {
  id: "app.day",
  defaultMessage: "Day",
  description: "Day of birthday"
}), _defineProperty(_defineMessages, "birthDayRequired", {
  id: "app.birthDayRequired",
  defaultMessage: "Select your birth date to continue",
  description: "birthDayRequired"
}), _defineProperty(_defineMessages, "mustBe18OrOld", {
  id: "app.mustBe18OrOld",
  defaultMessage: "You must be at least 18 years old",
  description: "You must at least 18 years old"
}), _defineProperty(_defineMessages, "WrongDayChosen", {
  id: "app.WrongDayChosen",
  defaultMessage: "Wrong day chosen for the month",
  description: "Wrong day chosen for the month"
}), _defineProperty(_defineMessages, "Required", {
  id: "app.Required",
  defaultMessage: "*Required",
  description: "Required Heading"
}), _defineProperty(_defineMessages, "RequiredDetails", {
  id: "app.RequiredDetails",
  defaultMessage: "Profile information",
  description: "Required Heading"
}), _defineProperty(_defineMessages, "lastNameInfo", {
  id: "app.lastNameInfo",
  defaultMessage: "Your public profile only shows your first name. When you request a booking, your host will see your first and last name.",
  description: "lastNameInfo"
}), _defineProperty(_defineMessages, "genderInfo", {
  id: "app.genderInfo",
  defaultMessage: "We use this data for analysis and never share it with other users.",
  description: "genderInfo"
}), _defineProperty(_defineMessages, "emailInfo", {
  id: "app.emailInfo",
  defaultMessage: "We won’t share your private email address with other users.",
  description: "emailInfo"
}), _defineProperty(_defineMessages, "learnMore", {
  id: "app.learnMore",
  defaultMessage: "Learn More",
  description: "learnMore"
}), _defineProperty(_defineMessages, "phoneNumberInfo", {
  id: "app.phoneNumberInfo",
  defaultMessage: "This is only shared once you have a confirmed booking with another user. This is how we can all get in touch.",
  description: "phoneNumberInfo"
}), _defineProperty(_defineMessages, "preferredLanguageInfo", {
  id: "app.preferredLanguageInfo",
  defaultMessage: "We’ll send you messages in this language.",
  description: "preferredLanguageInfo"
}), _defineProperty(_defineMessages, "preferredCurrencyInfo", {
  id: "app.preferredCurrencyInfo",
  defaultMessage: "We’ll show you prices in this currency.",
  description: "preferredCurrencyInfo"
}), _defineProperty(_defineMessages, "info1", {
  id: "app.info1",
  defaultMessage: "Help other people get to know you.",
  description: "info1"
}), _defineProperty(_defineMessages, "info2", {
  id: "app.info2",
  defaultMessage: "Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.",
  description: "info2"
}), _defineProperty(_defineMessages, "info3", {
  id: "app.info3",
  defaultMessage: "Tell them what it’s like to have you as a guest or host: What’s your style of traveling? Of hosting?",
  description: "info3"
}), _defineProperty(_defineMessages, "info4", {
  id: "app.info4",
  defaultMessage: "Tell them about you: Do you have a life motto?",
  description: "info4"
}), _defineProperty(_defineMessages, "profilePhotoInfo", {
  id: "app.profilePhotoInfo",
  defaultMessage: "Clear frontal face photos are an important way for hosts and guests to learn about each other. It’s not much fun to host a landscape! Please upload a photo that clearly shows your face.",
  description: "Profile photo upload information"
}), _defineProperty(_defineMessages, "verifiedInfo", {
  id: "app.verifiedInfo",
  defaultMessage: "Verified Info",
  description: "Verified Info"
}), _defineProperty(_defineMessages, "verifiedEmail", {
  id: "app.verifiedEmail",
  defaultMessage: "You have verified your email address",
  description: "You have verified your email address"
}), _defineProperty(_defineMessages, "facebookInfo", {
  id: "app.facebookInfo",
  defaultMessage: "Sign in with Facebook and discover your trusted connections to hosts and guests all over the world.",
  description: "Facebook information"
}), _defineProperty(_defineMessages, "disconnect", {
  id: "app.disconnect",
  defaultMessage: "Disconnect",
  description: "Disconnect button"
}), _defineProperty(_defineMessages, "googleInfo", {
  id: "app.googleInfo",
  defaultMessage: "Connect your account to your Google account for simplicity and ease.",
  description: "Google information"
}), _defineProperty(_defineMessages, "notVerifiedDetails", {
  id: "app.notVerifiedDetails",
  defaultMessage: "You haven't verified any of the below items",
  description: "Not verified information"
}), _defineProperty(_defineMessages, "notVerifiedInfo", {
  id: "app.notVerifiedInfo",
  defaultMessage: "Not Verified Info",
  description: "Not Verified Info"
}), _defineProperty(_defineMessages, "pleaseVerify", {
  id: "app.pleaseVerify",
  defaultMessage: "Please verify your email address.",
  description: "Verify your email address."
}), _defineProperty(_defineMessages, "verifyEmail", {
  id: "app.verifyEmail",
  defaultMessage: "Verify Email",
  description: "Verify Email"
}), _defineProperty(_defineMessages, "connect", {
  id: "app.connect",
  defaultMessage: "Connect",
  description: "Connect button"
}), _defineProperty(_defineMessages, "reviewTitle", {
  id: "app.reviewTitle",
  defaultMessage: "Thank you for reviewing",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewTitle2", {
  id: "app.reviewTitle2",
  defaultMessage: "Thank you for reviewing your guest. Your review will be visible on their profile.",
  description: "Review"
}), _defineProperty(_defineMessages, "finish", {
  id: "app.finish",
  defaultMessage: "Finish",
  description: "Finish button"
}), _defineProperty(_defineMessages, "reviewPageTitle", {
  id: "app.reviewPageTitle",
  defaultMessage: "Describe your experience (required)",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewPageTitle1", {
  id: "app.reviewPageTitle1",
  defaultMessage: "Your review will be public on your guest profile",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewTextArea", {
  id: "app.reviewTextArea",
  defaultMessage: "What was it like to host this guest",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewRating", {
  id: "app.reviewRating",
  defaultMessage: "Overall Rating",
  description: "Review"
}), _defineProperty(_defineMessages, "submit", {
  id: "app.submit",
  defaultMessage: "Submit",
  description: "Submit button"
}), _defineProperty(_defineMessages, "reviewError1", {
  id: "app.reviewError1",
  defaultMessage: "Please write your review!",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewError2", {
  id: "app.reviewError2",
  defaultMessage: "Please rate your review!",
  description: "Review"
}), _defineProperty(_defineMessages, "pastReviewTitle", {
  id: "app.pastReviewTitle",
  defaultMessage: "Past Reviews You’ve Written",
  description: "Review"
}), _defineProperty(_defineMessages, "noReview", {
  id: "app.noReview",
  defaultMessage: "There are no reviews about you yet.",
  description: "Review"
}), _defineProperty(_defineMessages, "noReviewPast", {
  id: "app.noReviewPast",
  defaultMessage: "There are no reviews published by you.",
  description: "Review"
}), _defineProperty(_defineMessages, "response", {
  id: "app.response",
  defaultMessage: "Response",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewPanelTitle1", {
  id: "app.reviewPanelTitle",
  defaultMessage: "Reviews About you",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewPanelTitle2", {
  id: "app.reviewPanelTitle2",
  defaultMessage: "Reviews By you",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewContent", {
  id: "app.reviewContent",
  defaultMessage: "Nobody to review right now. Looks like it’s time for another trip!",
  description: "Review"
}), _defineProperty(_defineMessages, "submitReviewFor", {
  id: "app.submitReviewFor",
  defaultMessage: "Submit a public review for",
  description: "Review"
}), _defineProperty(_defineMessages, "writeReview", {
  id: "app.writeReview",
  defaultMessage: "Write a Review",
  description: "Review"
}), _defineProperty(_defineMessages, "viewLitneray", {
  id: "app.viewLitneray",
  defaultMessage: "View Itinerary",
  description: "Review"
}), _defineProperty(_defineMessages, "reviewWritten", {
  id: "app.reviewWritten",
  defaultMessage: "Reviews are written at the end of a reservation. Reviews you’ve received will be visible both here and on your public profile.",
  description: "Review"
}), _defineProperty(_defineMessages, "hey", {
  id: "app.hey",
  defaultMessage: "Hey I’m",
  description: "View profile"
}), _defineProperty(_defineMessages, "reportUser", {
  id: "app.reportUser",
  defaultMessage: "Report this user",
  description: "View profile"
}), _defineProperty(_defineMessages, "noVerifications", {
  id: "app.noVerifications",
  defaultMessage: "No verifications yet",
  description: "View profile"
}), _defineProperty(_defineMessages, "addVerifications", {
  id: "app.addVerifications",
  defaultMessage: "Add Verifications",
  description: "View profile"
}), _defineProperty(_defineMessages, "emailConfirmed", {
  id: "app.emailConfirmed",
  defaultMessage: "Email Confirmed",
  description: "View profile"
}), _defineProperty(_defineMessages, "fbConnected", {
  id: "app.fbConnected",
  defaultMessage: "Facebook Connected",
  description: "View profile"
}), _defineProperty(_defineMessages, "googleConnected", {
  id: "app.googleConnected",
  defaultMessage: "Google Connected",
  description: "View profile"
}), _defineProperty(_defineMessages, "moreVerifications", {
  id: "app.moreVerifications",
  defaultMessage: "Add More Verifications",
  description: "View profile"
}), _defineProperty(_defineMessages, "addPayout", {
  id: "app.addPayout",
  defaultMessage: "Add Payout Method",
  description: "Payout"
}), _defineProperty(_defineMessages, "address1", {
  id: "app.address1",
  defaultMessage: "Address Line 1",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "address2", {
  id: "app.address2",
  defaultMessage: "Address Line 2",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "city", {
  id: "app.city",
  defaultMessage: "City",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "state", {
  id: "app.state",
  defaultMessage: "State / Province",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "zipCode", {
  id: "app.zipCode",
  defaultMessage: "ZIP Code / Postal Code",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "payoutError1", {
  id: "app.payoutError1",
  defaultMessage: "Country is required",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "payoutError2", {
  id: "app.payoutError2",
  defaultMessage: "City is required",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "payoutError3", {
  id: "app.payoutError3",
  defaultMessage: "State / Province is required",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "payoutError4", {
  id: "app.payoutError4",
  defaultMessage: "ZIP Code / Postal Code is required",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "payoutError5", {
  id: "app.payoutError5",
  defaultMessage: "Enter valid email address",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "payoutError6", {
  id: "app.payoutError6",
  defaultMessage: "Currency is required",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "country", {
  id: "app.country",
  defaultMessage: "Country",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "chooseCountry", {
  id: "app.chooseCountry",
  defaultMessage: "Choose Country",
  description: "Payout Form"
}), _defineProperty(_defineMessages, "back", {
  id: "app.back",
  defaultMessage: "Back",
  description: "Back button"
}), _defineProperty(_defineMessages, "paypalIntro1", {
  id: "app.paypalIntro1",
  defaultMessage: "PayPal is an online payment processing service that allows you to receive payments from",
  description: "Paypal intro"
}), _defineProperty(_defineMessages, "paypalIntro2", {
  id: "app.paypalIntro2",
  defaultMessage: "To use PayPal with",
  description: "Paypal intro"
}), _defineProperty(_defineMessages, "paypalIntro3", {
  id: "app.paypalIntro3",
  defaultMessage: "you must have an existing account with PayPal.",
  description: "Paypal intro"
}), _defineProperty(_defineMessages, "paypalIntro4", {
  id: "app.paypalIntro4",
  defaultMessage: "Learn more about PayPal",
  description: "Paypal intro"
}), _defineProperty(_defineMessages, "paypalEmail", {
  id: "app.paypalEmail",
  defaultMessage: "Enter the email address associated with your existing PayPal account.",
  description: "Paypal email"
}), _defineProperty(_defineMessages, "paypalCurrency", {
  id: "app.paypalCurrency",
  defaultMessage: "In what currency would you like to be paid?",
  description: "Paypal currency"
}), _defineProperty(_defineMessages, "payoutIntro1", {
  id: "app.payoutIntro1",
  defaultMessage: "Payouts for reservations are released to you the day after your guest checks in, and it takes some additional time for the money to arrive depending on your payout method.",
  description: "Payout intro"
}), _defineProperty(_defineMessages, "payoutIntro2", {
  id: "app.payoutIntro2",
  defaultMessage: "We can send money to people in United States with these payout methods. Which do you prefer?",
  description: "Payout intro"
}), _defineProperty(_defineMessages, "payoutTitle", {
  id: "app.payoutTitle",
  defaultMessage: "Method",
  description: "Payout header"
}), _defineProperty(_defineMessages, "payoutTitle1", {
  id: "app.payoutTitle1",
  defaultMessage: "Processed in",
  description: "Payout header"
}), _defineProperty(_defineMessages, "payoutTitle2", {
  id: "app.payoutTitle2",
  defaultMessage: "Fees",
  description: "Payout header"
}), _defineProperty(_defineMessages, "payoutTitle3", {
  id: "app.payoutTitle3",
  defaultMessage: "Currency",
  description: "Payout header"
}), _defineProperty(_defineMessages, "payoutTitle4", {
  id: "app.payoutTitle4",
  defaultMessage: "Details",
  description: "Payout header"
}), _defineProperty(_defineMessages, "noPaymentFound", {
  id: "app.noPaymentFound",
  defaultMessage: "No Payment method found",
  description: "No payment"
}), _defineProperty(_defineMessages, "payoutMethod", {
  id: "app.payoutMethod",
  defaultMessage: "Payout Methods",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "addPayoutMethod", {
  id: "app.addPayoutMethod",
  defaultMessage: "To get paid, you need to set up a payout method",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "paymentReleaseInfo1", {
  id: "app.paymentReleaseInfo1",
  defaultMessage: "releases payouts about 24 hours after a guest’s scheduled check-in time.",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "paymentReleaseInfo2", {
  id: "app.paymentReleaseInfo2",
  defaultMessage: "The time it takes for the funds to appear in your account depends on your payout method.",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "payoutTitleBlock1", {
  id: "app.payoutTitleBlock1",
  defaultMessage: "When you receive a payment for a reservation, we call that payment to you a “payout”. Our secure payment system supports several payout methods, which can be setup and edited here. Your available payout options and currencies differ by country.",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "payoutFaq", {
  id: "app.payoutFaq",
  defaultMessage: "Visit the Payout FAQ",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "options", {
  id: "app.options",
  defaultMessage: "Options",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "default", {
  id: "app.default",
  defaultMessage: "Default",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "ready", {
  id: "app.ready",
  defaultMessage: "Ready",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "setDefault", {
  id: "app.setDefault",
  defaultMessage: "Set Default",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "remove", {
  id: "app.remove",
  defaultMessage: "Remove",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "directDeposit", {
  id: "app.directDeposit",
  defaultMessage: "Direct Deposit, Paypal, etc..",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "transactionPayout", {
  id: "app.transactionPayout",
  defaultMessage: "Payout",
  description: "Transaction history"
}), _defineProperty(_defineMessages, "transferTo", {
  id: "app.transferTo",
  defaultMessage: "Transfer to",
  description: "Transaction history"
}), _defineProperty(_defineMessages, "transferDate", {
  id: "app.transferDate",
  defaultMessage: "Date",
  description: "Date"
}), _defineProperty(_defineMessages, "transferType", {
  id: "app.transferType",
  defaultMessage: "Type",
  description: "Type"
}), _defineProperty(_defineMessages, "transferAmount", {
  id: "app.transferAmount",
  defaultMessage: "Amount",
  description: "Amount"
}), _defineProperty(_defineMessages, "paidOut", {
  id: "app.paidOut",
  defaultMessage: "Paid Out",
  description: "Paid Out"
}), _defineProperty(_defineMessages, "reservation", {
  id: "app.reservation",
  defaultMessage: "Reservation",
  description: "Reservation"
}), _defineProperty(_defineMessages, "payTo", {
  id: "app.payTo",
  defaultMessage: "Pay to",
  description: "Pay to"
}), _defineProperty(_defineMessages, "grossEarnings", {
  id: "app.grossEarnings",
  defaultMessage: "Gross Earnings",
  description: "Gross Earnings"
}), _defineProperty(_defineMessages, "allListings", {
  id: "app.allListings",
  defaultMessage: "All listings",
  description: "All listings"
}), _defineProperty(_defineMessages, "noTransactions", {
  id: "app.noTransactions",
  defaultMessage: "No Transactions",
  description: "No Transactions"
}), _defineProperty(_defineMessages, "transactionsAddPayout", {
  id: "app.transactionsAddPayout",
  defaultMessage: "Add Payout",
  description: "Transaction payout"
}), _defineProperty(_defineMessages, "completedTransactions", {
  id: "app.completedTransactions",
  defaultMessage: "Completed Transactions",
  description: "Completed Transactions"
}), _defineProperty(_defineMessages, "futureTransactions", {
  id: "app.futureTransactions",
  defaultMessage: "Future Transactions",
  description: "Completed Transactions"
}), _defineProperty(_defineMessages, "exportCSV", {
  id: "app.exportCSV",
  defaultMessage: "Export to CSV",
  description: "Export to CSV"
}), _defineProperty(_defineMessages, "changePassword", {
  id: "app.changePassword",
  defaultMessage: "Change Your Password",
  description: "Change Your Password"
}), _defineProperty(_defineMessages, "oldPassword", {
  id: "app.oldPassword",
  defaultMessage: "Old Password",
  description: "Old Password"
}), _defineProperty(_defineMessages, "newPassword", {
  id: "app.newPassword",
  defaultMessage: "New Password",
  description: "New Password"
}), _defineProperty(_defineMessages, "confirmPassword", {
  id: "app.confirmPassword",
  defaultMessage: "Confirm Password",
  description: "Confirm Password"
}), _defineProperty(_defineMessages, "updatePassword", {
  id: "app.updatePassword",
  defaultMessage: "Update Password",
  description: "Update Password"
}), _defineProperty(_defineMessages, "passwordError1", {
  id: "app.passwordError1",
  defaultMessage: "Old Password is required",
  description: "Password Error"
}), _defineProperty(_defineMessages, "passwordError2", {
  id: "app.passwordError2",
  defaultMessage: "New Password is required",
  description: "Password Error"
}), _defineProperty(_defineMessages, "passwordError3", {
  id: "app.passwordError3",
  defaultMessage: "New Password must be minimum 8 characters",
  description: "Password Error"
}), _defineProperty(_defineMessages, "passwordError4", {
  id: "app.passwordError4",
  defaultMessage: "Confirm Password is required",
  description: "Password Error"
}), _defineProperty(_defineMessages, "passwordError5", {
  id: "app.passwordError5",
  defaultMessage: "Confirm Password must be minimum 8 characters",
  description: "Password Error"
}), _defineProperty(_defineMessages, "noMessagesTitle", {
  id: "app.noMessagesTitle",
  defaultMessage: "No Messages yet.",
  description: "Inbox"
}), _defineProperty(_defineMessages, "noMessagesTitle1", {
  id: "app.noMessagesTitle1",
  defaultMessage: "When hosts respond to your inquiries or booking requests, you'll see their messages here.",
  description: "Inbox"
}), _defineProperty(_defineMessages, "noMessagesTitle2", {
  id: "app.noMessagesTitle2",
  defaultMessage: "When guests respond to your inquiries or booking requests, you'll see their messages here.",
  description: "Inbox"
}), _defineProperty(_defineMessages, "traveling", {
  id: "app.traveling",
  defaultMessage: "Travelling",
  description: "Traveling"
}), _defineProperty(_defineMessages, "errorMessage", {
  id: "app.errorMessage",
  defaultMessage: "Oops something went wrong, refresh or check back later",
  description: "Error message"
}), _defineProperty(_defineMessages, "receipt", {
  id: "app.receipt",
  defaultMessage: "Receipt",
  description: "Receipt"
}), _defineProperty(_defineMessages, "customerReceipt", {
  id: "app.customerReceipt",
  defaultMessage: "Customer Receipt",
  description: "Customer Receipt"
}), _defineProperty(_defineMessages, "confirmationCode", {
  id: "app.confirmationCode",
  defaultMessage: "Confirmation Code",
  description: "Confirmation Code"
}), _defineProperty(_defineMessages, "name", {
  id: "app.name",
  defaultMessage: "Name",
  description: "Name"
}), _defineProperty(_defineMessages, "travelDestination", {
  id: "app.travelDestination",
  defaultMessage: "Travel Destination",
  description: "Travel Destination"
}), _defineProperty(_defineMessages, "duration", {
  id: "app.duration",
  defaultMessage: "Duration",
  description: "Duration"
}), _defineProperty(_defineMessages, "accommodationType", {
  id: "app.accommodationType",
  defaultMessage: "Accommodation Type",
  description: "Accommodation Type"
}), _defineProperty(_defineMessages, "accommodationAddress", {
  id: "app.accommodationAddress",
  defaultMessage: "Accommodation Address",
  description: "Accommodation Address"
}), _defineProperty(_defineMessages, "accommodationHost", {
  id: "app.accommodationHost",
  defaultMessage: "Accommodation Host",
  description: "Accommodation Host"
}), _defineProperty(_defineMessages, "reservationCharges", {
  id: "app.reservationCharges",
  defaultMessage: "Reservation Charges",
  description: "Reservation Charges"
}), _defineProperty(_defineMessages, "paymentReceived", {
  id: "app.paymentReceived",
  defaultMessage: "Payment Received:",
  description: "Payment Received:"
}), _defineProperty(_defineMessages, "receiptInfo1", {
  id: "app.receiptInfo1",
  defaultMessage: "is authorized to accept accomodation fees on behalf of the Host as their limited agent.",
  description: "Receipt information"
}), _defineProperty(_defineMessages, "receiptInfo2", {
  id: "app.receiptInfo2",
  defaultMessage: "This means that your payment obligation to the Host is satisfied by your payment to",
  description: "Receipt information"
}), _defineProperty(_defineMessages, "receiptInfo3", {
  id: "app.receiptInfo3",
  defaultMessage: "Any of the Host's disagreements by the Host regarding that payment must be settled between the Host and",
  description: "Receipt information"
}), _defineProperty(_defineMessages, "itinerayTitle", {
  id: "app.itinerayTitle",
  defaultMessage: "You’re going to",
  description: "Itinerary"
}), _defineProperty(_defineMessages, "reservationCode", {
  id: "app.reservationCode",
  defaultMessage: "Reservation code:",
  description: "Itinerary"
}), _defineProperty(_defineMessages, "address", {
  id: "app.address",
  defaultMessage: "Address",
  description: "Itinerary"
}), _defineProperty(_defineMessages, "viewListing", {
  id: "app.viewListing",
  defaultMessage: "View Listing",
  description: "View Listing"
}), _defineProperty(_defineMessages, "messageHost", {
  id: "app.messageHost",
  defaultMessage: "Message Host",
  description: "Itinerary"
}), _defineProperty(_defineMessages, "billing", {
  id: "app.billing",
  defaultMessage: "Billing",
  description: "Itinerary"
}), _defineProperty(_defineMessages, "messageAction1", {
  id: "app.messageAction1",
  defaultMessage: "You messaged",
  description: "View message"
}), _defineProperty(_defineMessages, "messageAction2", {
  id: "app.messageAction2",
  defaultMessage: "about their listing",
  description: "View message"
}), _defineProperty(_defineMessages, "messageActionInfo", {
  id: "app.messageActionInfo",
  defaultMessage: "Most hosts respond within 24 hours. If this listing is your top choice, enter your payment information to officially request a reservation.",
  description: "View message"
}), _defineProperty(_defineMessages, "RequestToBook", {
  id: "app.RequestToBook",
  defaultMessage: "Request to book",
  description: "Request to book"
}), _defineProperty(_defineMessages, "messageAction3", {
  id: "app.messageAction3",
  defaultMessage: "Your booking request sent to",
  description: "View message"
}), _defineProperty(_defineMessages, "messageAction4", {
  id: "app.messageAction4",
  defaultMessage: "for their listing",
  description: "View message"
}), _defineProperty(_defineMessages, "cancelInfo", {
  id: "app.cancelInfo",
  defaultMessage: "Most hosts respond within 24 hours. If you don't want to continue with this host further, you can cancel this request.",
  description: "View message"
}), _defineProperty(_defineMessages, "cancelReservation", {
  id: "app.cancelReservation",
  defaultMessage: "Cancel Reservation",
  description: "Cancel Reservation"
}), _defineProperty(_defineMessages, "requestDeclined", {
  id: "app.requestDeclined",
  defaultMessage: "Request declined",
  description: "Request declined"
}), _defineProperty(_defineMessages, "guestDeclinedInfo", {
  id: "app.guestDeclinedInfo",
  defaultMessage: "Your request is declined by host. You can choose different dates or search for other listing.",
  description: "Request declined"
}), _defineProperty(_defineMessages, "requestApprovedAction1", {
  id: "app.requestApprovedAction1",
  defaultMessage: "Your booking request approved by",
  description: "Request approved"
}), _defineProperty(_defineMessages, "requestTimeInfo1", {
  id: "app.requestTimeInfo1",
  defaultMessage: "You have to book within",
  description: "Request approved"
}), _defineProperty(_defineMessages, "requestTimeInfo2", {
  id: "app.requestTimeInfo2",
  defaultMessage: "or it will expire.",
  description: "Request approved"
}), _defineProperty(_defineMessages, "bookingConfirmedInfo1", {
  id: "app.bookingConfirmedInfo1",
  defaultMessage: "Your booking is confirmed with",
  description: "Booking confirmed"
}), _defineProperty(_defineMessages, "bookingCanceledInfo", {
  id: "app.bookingCanceledInfo",
  defaultMessage: "You can contact your host and do necessary arrangements or you can cancel your reservation.",
  description: "Booking canceld"
}), _defineProperty(_defineMessages, "bookingExpiredTitle", {
  id: "app.bookingExpiredTitle",
  defaultMessage: "Your booking request has expired",
  description: "Booking expired"
}), _defineProperty(_defineMessages, "bookingExpiredInfo", {
  id: "app.bookingExpiredInfo",
  defaultMessage: "Try sending request again or send an inquiry to get in touch with the host",
  description: "Booking expired"
}), _defineProperty(_defineMessages, "gotoListing", {
  id: "app.gotoListing",
  defaultMessage: "Go to Listing",
  description: "Go to Listing"
}), _defineProperty(_defineMessages, "bookingRequestCancel1", {
  id: "app.bookingRequestCancel",
  defaultMessage: "Booking request canceled",
  description: "Booking request canceled"
}), _defineProperty(_defineMessages, "bookingRequestCancel2", {
  id: "app.bookingRequestCance2",
  defaultMessage: "Your booking request has been canceled.",
  description: "Your booking request has been canceled."
}), _defineProperty(_defineMessages, "hostAction1", {
  id: "app.hostAction1",
  defaultMessage: "Invite",
  description: "Host Action Block."
}), _defineProperty(_defineMessages, "hostAction2", {
  id: "app.hostAction2",
  defaultMessage: "to book by pre-approving this trip",
  description: "Host Action Block."
}), _defineProperty(_defineMessages, "hostAction3", {
  id: "app.hostAction3",
  defaultMessage: "Let",
  description: "Host Action Block."
}), _defineProperty(_defineMessages, "hostAction4", {
  id: "app.hostAction4",
  defaultMessage: "know these dates are available by pre-approving them.",
  description: "Host Action Block."
}), _defineProperty(_defineMessages, "hostResponseTime1", {
  id: "app.hostResponseTime1",
  defaultMessage: "Respond within",
  description: "Host Action Block."
}), _defineProperty(_defineMessages, "hostResponseTime2", {
  id: "app.hostResponseTime2",
  defaultMessage: "to maintain your response rate.",
  description: "Host Action Block."
}), _defineProperty(_defineMessages, "preApprove", {
  id: "app.preApprove",
  defaultMessage: "Pre-approve",
  description: "Pre-approve"
}), _defineProperty(_defineMessages, "guestRequest", {
  id: "app.guestRequest",
  defaultMessage: "sent a request to booking for your listing",
  description: "Guest Request"
}), _defineProperty(_defineMessages, "requestApproved", {
  id: "app.requestApproved",
  defaultMessage: "Request Approved",
  description: "Request Approved"
}), _defineProperty(_defineMessages, "timeToExpire", {
  id: "app.timeToExpire",
  defaultMessage: "Your guest have 24 hours to respond to this or it will get expired",
  description: "Time To Expire"
}), _defineProperty(_defineMessages, "declinedInfo", {
  id: "app.declinedInfo",
  defaultMessage: "Make sure your calendar is up-to-date and that your listing page accurately reflects your house rules and requirements.",
  description: "Declined Info"
}), _defineProperty(_defineMessages, "bookingIsConfirmed", {
  id: "app.bookingIsConfirmed",
  defaultMessage: "Booking is confirmed",
  description: "Booking is confirmed"
}), _defineProperty(_defineMessages, "contactGuest", {
  id: "app.contactGuest",
  defaultMessage: "You can contact your guest and do necessary arrangements or you can cancel.",
  description: "Contact Guest"
}), _defineProperty(_defineMessages, "contactGuest", {
  id: "app.contactGuest",
  defaultMessage: "You can contact your guest and do necessary arrangements or you can cancel.",
  description: "Contact Guest"
}), _defineProperty(_defineMessages, "bookingIsExpired", {
  id: "app.bookingIsExpired",
  defaultMessage: "Booking request is expired",
  description: "Booking request is expired"
}), _defineProperty(_defineMessages, "bookingIsExpired1", {
  id: "app.bookingIsExpired1",
  defaultMessage: "booking request is expired.",
  description: "booking request is expired."
}), _defineProperty(_defineMessages, "bookingRequestCancel3", {
  id: "app.bookingRequestCance3",
  defaultMessage: "booking request is cancelled.",
  description: "booking request is cancelled."
}), _defineProperty(_defineMessages, "writeMessage", {
  id: "app.writeMessage",
  defaultMessage: "Write your message...",
  description: "Write your message"
}), _defineProperty(_defineMessages, "loadMoreMsg", {
  id: "app.loadMoreMsg",
  defaultMessage: "Load More Messages",
  description: "Load More Messages"
}), _defineProperty(_defineMessages, "noItmesFound", {
  id: "app.noItmesFound",
  defaultMessage: "No items found",
  description: "No items found"
}), _defineProperty(_defineMessages, "messageStatus1", {
  id: "app.messageStatus1",
  defaultMessage: "Inquiry",
  description: "Message Status"
}), _defineProperty(_defineMessages, "earnedAmount", {
  id: "app.earnedAmount",
  defaultMessage: "Earned Amount",
  description: "Payment details"
}), _defineProperty(_defineMessages, "missedEarnings", {
  id: "app.missedEarnings",
  defaultMessage: "Missed Earnings",
  description: "Missed Earnings"
}), _defineProperty(_defineMessages, "refundAmount", {
  id: "app.refundAmount",
  defaultMessage: "Refund Amount",
  description: "Refund Amount"
}), _defineProperty(_defineMessages, "cleaningPrice", {
  id: "app.cleaningPrice",
  defaultMessage: "Cleaning Price",
  description: "Payment details"
}), _defineProperty(_defineMessages, "subTotal", {
  id: "app.subTotal",
  defaultMessage: "Subtotal",
  description: "Payment details"
}), _defineProperty(_defineMessages, "youEarn", {
  id: "app.youEarn",
  defaultMessage: "You earn",
  description: "Payment details"
}), _defineProperty(_defineMessages, "tripDetails", {
  id: "app.tripDetails",
  defaultMessage: "Trip details",
  description: "Trip details"
}), _defineProperty(_defineMessages, "noThreadFound", {
  id: "app.noThreadFound",
  defaultMessage: "No thread found! If you think something went wrong, please refresh the page",
  description: "View Message"
}), _defineProperty(_defineMessages, "dashBoardHeader", {
  id: "app.dashBoardHeader",
  defaultMessage: "Welcome to",
  description: "Dashboard"
}), _defineProperty(_defineMessages, "dashBoardInfo", {
  id: "app.dashBoardInfo",
  defaultMessage: "Check your messages, view upcoming trip information, and find travel inspiration all from your dashboard. Before booking your first stay, make sure to:",
  description: "Dashboard"
}), _defineProperty(_defineMessages, "dashBoardInfo1", {
  id: "app.dashBoardInfo1",
  defaultMessage: "Upload a photo and write a short bio to help hosts get to know you before inviting you into their home.",
  description: "Dashboard"
}), _defineProperty(_defineMessages, "completeYourProfile", {
  id: "app.completeYourProfile",
  defaultMessage: "Complete Your Profile",
  description: "Dashboard"
}), _defineProperty(_defineMessages, "allMessages", {
  id: "app.allMessages",
  defaultMessage: "All Messages",
  description: "Dashboard"
}), _defineProperty(_defineMessages, "hi", {
  id: "app.hi",
  defaultMessage: "Hi",
  description: "Hi"
}), _defineProperty(_defineMessages, "letYouGetReady", {
  id: "app.letYouGetReady",
  defaultMessage: "Let’s get you ready to become a host",
  description: "Let You Get Ready"
}), _defineProperty(_defineMessages, "whatKindOfPlace", {
  id: "app.whatKindOfPlace",
  defaultMessage: "What kind of place do you have?",
  description: "What Kind Of Place"
}), _defineProperty(_defineMessages, "change", {
  id: "app.change",
  defaultMessage: "Change",
  description: "Change Link"
}), _defineProperty(_defineMessages, "whatKindOfPlaceListing", {
  id: "app.whatKindOfPlaceListing",
  defaultMessage: "What kind of place are you listing?",
  description: "What Kind Of Place Listing"
}), _defineProperty(_defineMessages, "whatTypeOfProperty", {
  id: "app.whatTypeOfProperty",
  defaultMessage: "What type of property is this?",
  description: "What Type Of Property"
}), _defineProperty(_defineMessages, "whatGuestHave", {
  id: "app.whatGuestHave",
  defaultMessage: "What will guests have?",
  description: "What will guests have"
}), _defineProperty(_defineMessages, "howManyRooms", {
  id: "app.howManyRooms",
  defaultMessage: "How many total rooms does your property have?",
  description: "How many total rooms does your property have?"
}), _defineProperty(_defineMessages, "isPersonalHome", {
  id: "app.isPersonalHome",
  defaultMessage: "Is this your personal home?",
  description: "Is this your personal home?"
}), _defineProperty(_defineMessages, "isPersonalHomeInfo", {
  id: "app.isPersonalHomeInfo",
  defaultMessage: "Guests like to know if this is a place you live and keep your personal belongings in.",
  description: "Personal Home Info"
}), _defineProperty(_defineMessages, "skip", {
  id: "app.skip",
  defaultMessage: "Skip now",
  description: "Skip Button"
}), _defineProperty(_defineMessages, "howManyGuests", {
  id: "app.howManyGuests",
  defaultMessage: "How many guests can your place accommodate?",
  description: "How many guests can your place accommodate?"
}), _defineProperty(_defineMessages, "howManyBeds", {
  id: "app.howManyBeds",
  defaultMessage: "How many beds can guests use?",
  description: "How many beds can guests use?"
}), _defineProperty(_defineMessages, "howManyBedrooms", {
  id: "app.howManyBedrooms",
  defaultMessage: "How many bedrooms can guests use?",
  description: "How many bedrooms can guests use?"
}), _defineProperty(_defineMessages, "howManyGuestsStay", {
  id: "app.howManyGuestsStay",
  defaultMessage: "How many guests can stay?",
  description: "How many guests can stay?"
}), _defineProperty(_defineMessages, "howManyBathrooms", {
  id: "app.howManyBathrooms",
  defaultMessage: "How many bathrooms?",
  description: "How many bathrooms?"
}), _defineProperty(_defineMessages, "whereLocated", {
  id: "app.whereLocated",
  defaultMessage: "Where’s your place located?",
  description: "Where’s your place located?"
}), _defineProperty(_defineMessages, "bathroom", {
  id: "app.bathroom",
  defaultMessage: "bathroom",
  description: "Bathroom"
}), _defineProperty(_defineMessages, "yourFullAddress", {
  id: "app.yourFullAddress",
  defaultMessage: "Your Full Address",
  description: "Your Full Address"
}), _defineProperty(_defineMessages, "street", {
  id: "app.street",
  defaultMessage: "Street Address",
  description: "Street Address"
}), _defineProperty(_defineMessages, "buildingName", {
  id: "app.buildingName",
  defaultMessage: "Apt, Suite, Bldg. (optional)",
  description: "Building Name"
}), _defineProperty(_defineMessages, "zipcode", {
  id: "app.zipcode",
  defaultMessage: "ZIP Code",
  description: "ZIP Code"
}), _defineProperty(_defineMessages, "countryRequired", {
  id: "app.countryRequired",
  defaultMessage: "Country is Required",
  description: "countryRequired"
}), _defineProperty(_defineMessages, "stateRequired", {
  id: "app.stateRequired",
  defaultMessage: "State is Required",
  description: "stateRequired"
}), _defineProperty(_defineMessages, "cityRequired", {
  id: "app.cityRequired",
  defaultMessage: "City is Required",
  description: "cityRequired"
}), _defineProperty(_defineMessages, "streetRequired", {
  id: "app.streetRequired",
  defaultMessage: "Street is Required",
  description: "streetRequired"
}), _defineProperty(_defineMessages, "zipcodeRequired", {
  id: "app.zipcodeRequired",
  defaultMessage: "Zip Code is Required",
  description: "zipcodeRequired"
}), _defineProperty(_defineMessages, "houseTypeRequired", {
  id: "app.houseTypeRequired",
  defaultMessage: "House Type is Required",
  description: "House Type is Required"
}), _defineProperty(_defineMessages, "somethingWentWrong", {
  id: "app.somethingWentWrong",
  defaultMessage: "Sorry, something went wrong. Please try again",
  description: "Wrong went wrong"
}), _defineProperty(_defineMessages, "notLoggedIn", {
  id: "app.notLoggedIn",
  defaultMessage: "You are not logged In. Please login to continue!",
  description: "Wrong went wrong"
}), _defineProperty(_defineMessages, "adminLoggedIn", {
  id: "app.adminLoggedIn",
  defaultMessage: "You are logged in as admin, you can't perform this action!",
  description: "adminLoggedIn"
}), _defineProperty(_defineMessages, "whatamenities", {
  id: "app.whatamenities",
  defaultMessage: "What amenities do you offer?",
  description: "Amenities Headline"
}), _defineProperty(_defineMessages, "safetyamenities", {
  id: "app.safetyamenities",
  defaultMessage: "Safety amenities",
  description: "Safety amenities Headline"
}), _defineProperty(_defineMessages, "whatSpace", {
  id: "app.whatSpace",
  defaultMessage: "What spaces can guests use?",
  description: "What spaces can guests use?"
}), _defineProperty(_defineMessages, "step1Heading", {
  id: "app.step1Heading",
  defaultMessage: "Become a host",
  description: "STEP 1 Heading"
}), _defineProperty(_defineMessages, "step2Heading", {
  id: "app.step2Heading",
  defaultMessage: "STEP 2",
  description: "STEP 2 Heading"
}), _defineProperty(_defineMessages, "step3Heading", {
  id: "app.step3Heading",
  defaultMessage: "STEP 3",
  description: "STEP 3 Heading"
}), _defineProperty(_defineMessages, "step1SubHeading", {
  id: "app.step1SubHeading",
  defaultMessage: "Start with the basics",
  description: "STEP 1 Sub Heading"
}), _defineProperty(_defineMessages, "step2SubHeading", {
  id: "app.step2SubHeading",
  defaultMessage: "Set the scene",
  description: "STEP 2 Sub Heading"
}), _defineProperty(_defineMessages, "step3SubHeading", {
  id: "app.step3SubHeading",
  defaultMessage: "Get ready for guests",
  description: "STEP 3 Sub Heading"
}), _defineProperty(_defineMessages, "step1HeadingContent", {
  id: "app.step1HeadingContent",
  defaultMessage: "Beds, bathrooms, amenities, and more",
  description: "STEP 1 Heading Content"
}), _defineProperty(_defineMessages, "step2HeadingContent", {
  id: "app.step2HeadingContent",
  defaultMessage: "Photos, short description, title",
  description: "STEP 2 Heading Content"
}), _defineProperty(_defineMessages, "step3HeadingContent", {
  id: "app.step3HeadingContent",
  defaultMessage: "Booking settings, calendar, price",
  description: "STEP 3 Heading Content"
}), _defineProperty(_defineMessages, "mapWarning", {
  id: "app.mapWarning",
  defaultMessage: "Drag the pin to set your location.",
  description: "Map Warning"
}), _defineProperty(_defineMessages, "mapSuccess", {
  id: "app.mapSuccess",
  defaultMessage: "Great! Thank you!",
  description: "Map Success"
}), _defineProperty(_defineMessages, "photos", {
  id: "app.photos",
  defaultMessage: "Photos",
  description: "Photos"
}), _defineProperty(_defineMessages, "placeTitle", {
  id: "app.placeTitle",
  defaultMessage: "Name your place",
  description: "Title"
}), _defineProperty(_defineMessages, "titleLabel", {
  id: "app.titleLabel",
  defaultMessage: "Listing title",
  description: "Title"
}), _defineProperty(_defineMessages, "titleRequired", {
  id: "app.titleRequired",
  defaultMessage: "Oops! We need a title for your place.",
  description: "Title is required"
}), _defineProperty(_defineMessages, "description", {
  id: "app.description",
  defaultMessage: "Edit your description",
  description: "Description"
}), _defineProperty(_defineMessages, "descriptionRequired", {
  id: "app.descriptionRequired",
  defaultMessage: "Description is required",
  description: "Description"
}), _defineProperty(_defineMessages, "guestRequirementsTitle", {
  id: "app.guestRequirementsTitle",
  defaultMessage: "Review guest requirements",
  description: "Guest Requirements Title"
}), _defineProperty(_defineMessages, "guestRequirementsDescription", {
  id: "app.guestRequirementsDescription",
  defaultMessage: "Require all guests to submit the following before they can book:",
  description: "Guest Requirements Description"
}), _defineProperty(_defineMessages, "setHouseRules", {
  id: "app.setHouseRules",
  defaultMessage: "Set house rules for your guests",
  description: "House Rules"
}), _defineProperty(_defineMessages, "reviewGuestBookTitle", {
  id: "app.reviewGuestBookTitle",
  defaultMessage: "How guests book: Instantly",
  description: "How guests book: Instantly"
}), _defineProperty(_defineMessages, "reviewGuestBookDescription", {
  id: "app.reviewGuestBookDescription",
  defaultMessage: "Guests can book available days instantly as long as they:",
  description: "Guests can book available"
}), _defineProperty(_defineMessages, "reviewGuestBookNote", {
  id: "app.reviewGuestBookNote",
  defaultMessage: "Guests who don’t meet your requirements must send a reservation request.",
  description: "Review Guests Note"
}), _defineProperty(_defineMessages, "advanceNoticeTitle", {
  id: "app.advanceNoticeTitle",
  defaultMessage: "How much notice do you need before a guest arrives?",
  description: "Advance Notice Title"
}), _defineProperty(_defineMessages, "advanceNoticeCheckInTitle", {
  id: "app.advanceNoticeCheckInTitle",
  defaultMessage: "When can guests check in?",
  description: "Advance Notice Check In Title"
}), _defineProperty(_defineMessages, "advanceNoticeFrom", {
  id: "app.advanceNoticeFrom",
  defaultMessage: "From:",
  description: "From"
}), _defineProperty(_defineMessages, "advanceNoticeTo", {
  id: "app.advanceNoticeTo",
  defaultMessage: "To:",
  description: "To"
}), _defineProperty(_defineMessages, "advanceNoticeError", {
  id: "app.advanceNoticeError",
  defaultMessage: "From time should be earlier than To time",
  description: "Error Message"
}), _defineProperty(_defineMessages, "advanceNoticeInvalid", {
  id: "app.advanceNoticeInvalid",
  defaultMessage: "Invalid input value",
  description: "Error Message"
}), _defineProperty(_defineMessages, "MaxDaysNoticeTitle", {
  id: "app.MaxDaysNoticeTitle",
  defaultMessage: "How far in advance can guests book?",
  description: "How far in advance can guests book?"
}), _defineProperty(_defineMessages, "MinMaxNightsTitle", {
  id: "app.MinMaxNightsTitle",
  defaultMessage: "How long can guests stay?",
  description: "How long can guests stay?"
}), _defineProperty(_defineMessages, "calendar", {
  id: "app.calendar",
  defaultMessage: "Update your calendar",
  description: "calendar title"
}), _defineProperty(_defineMessages, "pricing", {
  id: "app.pricing",
  defaultMessage: "Base price",
  description: "pricing title"
}), _defineProperty(_defineMessages, "pricingDescription", {
  id: "app.pricingDescription",
  defaultMessage: "Your base price is your default nightly rate.",
  description: "pricing description"
}), _defineProperty(_defineMessages, "basePrice", {
  id: "app.basePrice",
  defaultMessage: "Base price",
  description: "Base price"
}), _defineProperty(_defineMessages, "basePriceLabel", {
  id: "app.basePriceLabel",
  defaultMessage: "Price per night",
  description: "Base price Label"
}), _defineProperty(_defineMessages, "basePriceInvalid", {
  id: "app.basePriceInvalid",
  defaultMessage: "Invalid Base Price, only numbers(eg: 25) are allowed",
  description: "Base price Invalid"
}), _defineProperty(_defineMessages, "basePriceRequired", {
  id: "app.basePriceRequired",
  defaultMessage: "Base Price is required",
  description: "Base Price is required"
}), _defineProperty(_defineMessages, "cleaningPriceInvalid", {
  id: "app.cleaningPriceInvalid",
  defaultMessage: "Invalid Cleaning Price, only numbers(eg: 25) are allowed",
  description: "Cleaning price Invalid"
}), _defineProperty(_defineMessages, "currency", {
  id: "app.currency",
  defaultMessage: "Currency",
  description: "Currency"
}), _defineProperty(_defineMessages, "discount", {
  id: "app.discount",
  defaultMessage: "Discounts",
  description: "Discounts"
}), _defineProperty(_defineMessages, "discountLabel", {
  id: "app.discountLabel",
  defaultMessage: "% off",
  description: "Discount Label"
}), _defineProperty(_defineMessages, "discountWeekly", {
  id: "app.discountWeekly",
  defaultMessage: "Weekly discount",
  description: "Weekly discount"
}), _defineProperty(_defineMessages, "discountInvalid", {
  id: "app.discountInvalid",
  defaultMessage: "Invalid discount. The discount must be between 0% and 99%.",
  description: "Invalid discount"
}), _defineProperty(_defineMessages, "discountMonthly", {
  id: "app.discountMonthly",
  defaultMessage: "Monthly discount",
  description: "Monthly discount"
}), _defineProperty(_defineMessages, "summary", {
  id: "app.summary",
  defaultMessage: "Based on your settings, here’s what you could expect",
  description: "Summary Title"
}), _defineProperty(_defineMessages, "localLaws", {
  id: "app.localLaws",
  defaultMessage: "Your local laws and taxes",
  description: "Local Laws"
}), _defineProperty(_defineMessages, "setCoverPhoto", {
  id: "app.setCoverPhoto",
  defaultMessage: "Choose a photo for cover image",
  description: "setCoverPhoto"
}), _defineProperty(_defineMessages, "photosPlaceholder", {
  id: "app.photosPlaceholder",
  defaultMessage: "Click here to upload photos or drag them in",
  description: "Photos Placeholder"
}), _defineProperty(_defineMessages, "descriptionLabel", {
  id: "app.descriptionLabel",
  defaultMessage: "Describe the decor, light, what's nearby, etc...",
  description: "Description Placeholder"
}), _defineProperty(_defineMessages, "descriptionSubheading", {
  id: "app.descriptionSubheading",
  defaultMessage: "Summary",
  description: "Description Subheading"
}), _defineProperty(_defineMessages, "instantBookingTitle", {
  id: "app.instantBookingTitle",
  defaultMessage: "Increase your earnings with Instant Book",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "instantBookingInfo", {
  id: "app.instantBookingInfo",
  defaultMessage: "Instant Book can give your listing an edge.Not only do guests prefer to book instantly, we’re promoting Instant Book listings in search results.",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "whoCanBook", {
  id: "app.whoCanBook",
  defaultMessage: "Who can book instantly",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "whoCanBookInfo", {
  id: "app.whoCanBookInfo",
  defaultMessage: "Choose who can book available days without requesting approval.",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "whoCanBookInfo1", {
  id: "app.whoCanBookInfo1",
  defaultMessage: "Guests who meet your requirements and agree to your rules.",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "whoCanBookInfo2", {
  id: "app.whoCanBookInfo2",
  defaultMessage: "Anyone else must send a reservation request.",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "whoCanBookInfo3", {
  id: "app.whoCanBookInfo3",
  defaultMessage: "No one. All guests must send reservation requests.",
  description: "Instant booking"
}), _defineProperty(_defineMessages, "maxDaysTitle", {
  id: "app.maxDaysTitle",
  defaultMessage: "Booking Window",
  description: "Booking Window"
}), _defineProperty(_defineMessages, "datesDropDown", {
  id: "app.datesDropDown",
  defaultMessage: "Dates unavailable by default",
  description: "Booking Dropdown"
}), _defineProperty(_defineMessages, "datesOption1", {
  id: "app.datesOption1",
  defaultMessage: "3 months into the future",
  description: "Booking Dropdown"
}), _defineProperty(_defineMessages, "datesOption2", {
  id: "app.datesOption2",
  defaultMessage: "6 months into the future",
  description: "Booking Dropdown"
}), _defineProperty(_defineMessages, "datesOption3", {
  id: "app.datesOption3",
  defaultMessage: "9 months into the future",
  description: "Booking Dropdown"
}), _defineProperty(_defineMessages, "datesOption4", {
  id: "app.datesOption4",
  defaultMessage: "12 months into the future",
  description: "Booking Dropdown"
}), _defineProperty(_defineMessages, "datesOption5", {
  id: "app.datesOption5",
  defaultMessage: "All future dates",
  description: "Booking Dropdown"
}), _defineProperty(_defineMessages, "syncCalendars", {
  id: "app.syncCalendars",
  defaultMessage: "Sync calendars",
  description: "Sync calendars"
}), _defineProperty(_defineMessages, "tripLength", {
  id: "app.tripLength",
  defaultMessage: "Trip length",
  description: "Trip length"
}), _defineProperty(_defineMessages, "tripLengthError1", {
  id: "app.tripLengthError1",
  defaultMessage: "Minimum nights can't be higher than maximum nights",
  description: "Trip length"
}), _defineProperty(_defineMessages, "tabPlaceType", {
  id: "app.tabPlaceType",
  defaultMessage: "Place type",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabPlaceType", {
  id: "app.tabPlaceType",
  defaultMessage: "Place type",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "baths", {
  id: "app.baths",
  defaultMessage: "Baths",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "setCover", {
  id: "app.setCover",
  defaultMessage: "Set Cover Photo",
  description: "Set Cover Photo"
}), _defineProperty(_defineMessages, "tabDescription", {
  id: "app.tabDescription",
  defaultMessage: "Description",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabTitle", {
  id: "app.tabTitle",
  defaultMessage: "Title",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "guestRequirements", {
  id: "app.guestRequirements",
  defaultMessage: "Guest Requirements",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "reviewGuestBook", {
  id: "app.reviewGuestBook",
  defaultMessage: "Review GuestBook",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "advanceNotice", {
  id: "app.advanceNotice",
  defaultMessage: "Advance Notice",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "bookingWindow", {
  id: "app.bookingWindow",
  defaultMessage: "Booking window",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "minMaxNights", {
  id: "app.minMaxNights",
  defaultMessage: "Min Max Nights",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabCalendar", {
  id: "app.tabCalendar",
  defaultMessage: "Calendar",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabPricing", {
  id: "app.tabPricing",
  defaultMessage: "Pricing",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabDiscount", {
  id: "app.tabDiscount",
  defaultMessage: "Discount",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabBooking", {
  id: "app.tabBooking",
  defaultMessage: "Booking",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "tabLocalLaws", {
  id: "app.tabLocalLaws",
  defaultMessage: "Local Laws",
  description: "Tab bar"
}), _defineProperty(_defineMessages, "headerText", {
  id: "app.headerText",
  defaultMessage: "Step",
  description: "Header Text"
}), _defineProperty(_defineMessages, "readyToPublish", {
  id: "app.readyToPublish",
  defaultMessage: "Your listing is ready to be published!",
  description: "Listing inde"
}), _defineProperty(_defineMessages, "publishNow", {
  id: "app.publishNow",
  defaultMessage: "Publish Now",
  description: "Listing index"
}), _defineProperty(_defineMessages, "previewListing", {
  id: "app.previewListing",
  defaultMessage: "Preview Listing",
  description: "Listing index"
}), _defineProperty(_defineMessages, "listingPublished", {
  id: "app.listingPublished",
  defaultMessage: "Your listing is ready to be published!",
  description: "Listing index"
}), _defineProperty(_defineMessages, "unPublishNow", {
  id: "app.unPublishNow",
  defaultMessage: "UnPublish Now",
  description: "Listing index"
}), _defineProperty(_defineMessages, "signUpTitle", {
  id: "app.signUpTitle",
  defaultMessage: "New User Registration",
  description: "Signup Title"
}), _defineProperty(_defineMessages, "panelReservation", {
  id: "app.panelReservation",
  defaultMessage: "Reservations",
  description: "Reservations"
}), _defineProperty(_defineMessages, "transactions", {
  id: "app.transactions",
  defaultMessage: "Transactions",
  description: "Transactions"
}), _defineProperty(_defineMessages, "notFoundTitle", {
  id: "app.notFoundTitle",
  defaultMessage: "Uh-oh!",
  description: "Not Found"
}), _defineProperty(_defineMessages, "notFoundSubTitle", {
  id: "app.notFoundSubTitle",
  defaultMessage: "We can't seem to find the page you're looking for!",
  description: "Not Found"
}), _defineProperty(_defineMessages, "errorCode", {
  id: "app.errorCode",
  defaultMessage: "Error code: 404",
  description: "Not Found"
}), _defineProperty(_defineMessages, "linksTitle", {
  id: "app.linksTitle",
  defaultMessage: "Here are some helpful links instead:",
  description: "Not Found"
}), _defineProperty(_defineMessages, "hostingOn", {
  id: "app.hostingOn",
  defaultMessage: "Hosting on",
  description: "Not Found"
}), _defineProperty(_defineMessages, "pageError", {
  id: "app.pageError",
  defaultMessage: "Error",
  description: "Page Error"
}), _defineProperty(_defineMessages, "pageErrorInfo", {
  id: "app.pageErrorInfo",
  defaultMessage: "Sorry, a critical error occurred on this page.",
  description: "Page Error"
}), _defineProperty(_defineMessages, "messageStatus2", {
  id: "app.messageStatus2",
  defaultMessage: "Pre Approved",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus3", {
  id: "app.messageStatus3",
  defaultMessage: "Declined",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus4", {
  id: "app.messageStatus4",
  defaultMessage: "Approved",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus5", {
  id: "app.messageStatus5",
  defaultMessage: "Pending",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus6", {
  id: "app.messageStatus6",
  defaultMessage: "Cancelled by host",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus7", {
  id: "app.messageStatus7",
  defaultMessage: "Cancelled by guest",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus8", {
  id: "app.messageStatus8",
  defaultMessage: "Approved",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus9", {
  id: "app.messageStatus9",
  defaultMessage: "Expired",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messageStatus10", {
  id: "app.messageStatus10",
  defaultMessage: "Request to book",
  description: "Message Status"
}), _defineProperty(_defineMessages, "panelHeader1", {
  id: "app.panelHeader1",
  defaultMessage: "In progress",
  description: "Panel Header"
}), _defineProperty(_defineMessages, "panelHeader2", {
  id: "app.panelHeader2",
  defaultMessage: "Completed",
  description: "Panel Header"
}), _defineProperty(_defineMessages, "messageStatus11", {
  id: "app.messageStatus11",
  defaultMessage: "Cancelled",
  description: "Message Status"
}), _defineProperty(_defineMessages, "messagesNew", {
  id: "app.messagesNew",
  defaultMessage: "New",
  description: "New"
}), _defineProperty(_defineMessages, "facebookLogin", {
  id: "app.facebookLogin",
  defaultMessage: "Continue with Facebook",
  description: "Continue with Facebook"
}), _defineProperty(_defineMessages, "googleLogin", {
  id: "app.googleLogin",
  defaultMessage: "Continue with Google",
  description: "Continue with Google"
}), _defineProperty(_defineMessages, "reviewToWrite", {
  id: "app.reviewToWrite",
  defaultMessage: "Reviews to Write",
  description: "Reviews Panel"
}), _defineProperty(_defineMessages, "cancellationNote", {
  id: "app.cancellationNote",
  defaultMessage: "A personal note can help",
  description: "Cancellation Notes"
}), _defineProperty(_defineMessages, "cancellationNoteForHost", {
  id: "app.cancellationNoteForHost",
  defaultMessage: "understand why you can't host them",
  description: "Cancellation Notes"
}), _defineProperty(_defineMessages, "saveAndContinue", {
  id: "app.saveAndContinue",
  defaultMessage: "Save & Continue",
  description: "Save & Continue"
}), _defineProperty(_defineMessages, "saveAndExit", {
  id: "app.saveAndExit",
  defaultMessage: "Save and Exit",
  description: "Save and Exit"
}), _defineProperty(_defineMessages, "reservationCancel", {
  id: "app.reservationCancel",
  defaultMessage: "The reservation will be cancelled immediately",
  description: "Cancel your trip"
}), _defineProperty(_defineMessages, "nonRefundable", {
  id: "app.nonRefundable",
  defaultMessage: "Non-Refundable",
  description: "Cancel your trip"
}), _defineProperty(_defineMessages, "refundable", {
  id: "app.refundable",
  defaultMessage: "Refundable",
  description: "Cancel your trip"
}), _defineProperty(_defineMessages, "refundCost", {
  id: "app.refundCost",
  defaultMessage: "You will be refunded the above cost.",
  description: "Cancel your trip"
}), _defineProperty(_defineMessages, "keepReservation", {
  id: "app.keepReservation",
  defaultMessage: "Keep reservation",
  description: "Keep reservation"
}), _defineProperty(_defineMessages, "cancelYourReservation", {
  id: "app.cancelYourReservation",
  defaultMessage: "Cancel your reservation",
  description: "Cancel your reservation"
}), _defineProperty(_defineMessages, "cleaningMinusServiceFee", {
  id: "app.cleaningMinusServiceFee",
  defaultMessage: "cleaning fees, minus service fees.",
  description: "Cleaning fee and service fee"
}), _defineProperty(_defineMessages, "earnings", {
  id: "app.earnings",
  defaultMessage: "Earnings",
  description: "Earnings"
}), _defineProperty(_defineMessages, "cleaningPlusServiceFee", {
  id: "app.cleaningPlusServiceFee",
  defaultMessage: "plus cleaning fees, minus host service fees.",
  description: "plus cleaning fees, plus host service fees."
}), _defineProperty(_defineMessages, "willBeRefund", {
  id: "app.willBeRefund",
  defaultMessage: "will be refunded the",
  description: "will be refunded the"
}), _defineProperty(_defineMessages, "reservationCost", {
  id: "app.reservationCost",
  defaultMessage: "reservation cost.",
  description: "Reservation cost"
}), _defineProperty(_defineMessages, "cancelYourTrip", {
  id: "app.cancelYourTrip",
  defaultMessage: "Cancel your trip",
  description: "Cancel your Trip"
}), _defineProperty(_defineMessages, "consider", {
  id: "app.consider",
  defaultMessage: "Consider",
  description: "Consider"
}), _defineProperty(_defineMessages, "tripBeforeCanceling", {
  id: "app.tripBeforeCanceling",
  defaultMessage: "trip before canceling",
  description: "Trip before canceling"
}), _defineProperty(_defineMessages, "cancellingInfo", {
  id: "app.cancellingInfo",
  defaultMessage: "Cancelling a guest's reservation can disrupt their plans and have serious implications on their trip.",
  description: "Trip before canceling"
}), _defineProperty(_defineMessages, "started", {
  id: "app.started",
  defaultMessage: "Started",
  description: "Started"
}), _defineProperty(_defineMessages, "startIn", {
  id: "app.startIn",
  defaultMessage: "Starts in",
  description: "Starts in"
}), _defineProperty(_defineMessages, "travelingWith", {
  id: "app.travelingWith",
  defaultMessage: "Travelling With",
  description: "Traveling With"
}), _defineProperty(_defineMessages, "needToCancel", {
  id: "app.needToCancel",
  defaultMessage: "why you need to cancel",
  description: "why you need to cancel"
}), _defineProperty(_defineMessages, "stayingFor", {
  id: "app.stayingFor",
  defaultMessage: "Staying for",
  description: "Staying for"
}), _defineProperty(_defineMessages, "propertyLocated", {
  id: "app.propertyLocated",
  defaultMessage: "property is located in",
  description: "Property is located in"
}), _defineProperty(_defineMessages, "responseFrom", {
  id: "app.responseFrom",
  defaultMessage: "Response from",
  description: "Response from"
}), _defineProperty(_defineMessages, "savingButton", {
  id: "app.savingButton",
  defaultMessage: "Saving",
  description: "Saving Button"
}), _defineProperty(_defineMessages, "night", {
  id: "app.night",
  defaultMessage: "night",
  description: "Bill Details"
}), _defineProperty(_defineMessages, "minimumStay", {
  id: "app.minimumStay",
  defaultMessage: "minimum stay",
  description: "Minimum stay"
}), _defineProperty(_defineMessages, "minimumNightStay", {
  id: "app.minimumNightStay",
  defaultMessage: "Minimum stay is",
  description: "Minimum stay"
}), _defineProperty(_defineMessages, "maximumNightStay", {
  id: "app.maximumNightStay",
  defaultMessage: "maximum stay",
  description: "Maximum stay"
}), _defineProperty(_defineMessages, "review", {
  id: "app.review",
  defaultMessage: "Review",
  description: "Review"
}), _defineProperty(_defineMessages, "verifications", {
  id: "app.verifications",
  defaultMessage: "Verifications",
  description: "Verifications"
}), _defineProperty(_defineMessages, "verification", {
  id: "app.verification",
  defaultMessage: "Verification",
  description: "Verification"
}), _defineProperty(_defineMessages, "guestCapcity", {
  id: "app.guestCapcity",
  defaultMessage: "guest",
  description: "Guest"
}), _defineProperty(_defineMessages, "guestsCapcity", {
  id: "app.guestsCapcity",
  defaultMessage: "guests",
  description: "Guests"
}), _defineProperty(_defineMessages, "monthlyDiscount", {
  id: "app.monthlyDiscount",
  defaultMessage: "monthly price discount",
  description: "Monthly Discount"
}), _defineProperty(_defineMessages, "weeklyDiscount", {
  id: "app.weeklyDiscount",
  defaultMessage: "weekly price discount",
  description: "Weekly Discount"
}), _defineProperty(_defineMessages, "flexibleCheckIn", {
  id: "app.flexibleCheckIn",
  defaultMessage: "Flexible check in time",
  description: "Flexible check in time"
}), _defineProperty(_defineMessages, "cancellationNoteForGuest", {
  id: "app.cancellationNoteForGuest",
  defaultMessage: "understand why you want to cancel your reservation",
  description: "Cancellation notes fot guest"
}), _defineProperty(_defineMessages, "howManyday", {
  id: "app.howManyday",
  defaultMessage: "day",
  description: "day"
}), _defineProperty(_defineMessages, "howManydays", {
  id: "app.howManydays",
  defaultMessage: "days",
  description: "days"
}), _defineProperty(_defineMessages, "howManyGuest", {
  id: "app.howManyGuest",
  defaultMessage: "Guests",
  description: "Guest"
}), _defineProperty(_defineMessages, "reviewFor", {
  id: "app.reviewFor",
  defaultMessage: "Review for",
  description: "Review for"
}), _defineProperty(_defineMessages, "your", {
  id: "app.your",
  defaultMessage: "Your",
  description: "Your"
}), _defineProperty(_defineMessages, "chooseCancellationPolicy", {
  id: "app.chooseCancellationPolicy",
  defaultMessage: "Cancellation Policy",
  description: "Cancellation Policy"
}), _defineProperty(_defineMessages, "pendingPayouts", {
  id: "app.pendingPayouts",
  defaultMessage: "Pending Payouts",
  description: "Pending Payouts"
}), _defineProperty(_defineMessages, "allPayoutMethod", {
  id: "app.allPayoutMethod",
  defaultMessage: "All payout methods",
  description: "All payout methods"
}), _defineProperty(_defineMessages, "inboxCompleted", {
  id: "app.inboxCompleted",
  defaultMessage: "Completed",
  description: "Message Status - Inbox Item"
}), _defineProperty(_defineMessages, "loginConfirmation", {
  id: "app.loginConfirmation",
  defaultMessage: "Sorry, you must login to confirm your email. Please login and try clicking the link from your email again!",
  description: "Login confirmation"
}), _defineProperty(_defineMessages, "upcomingReservations", {
  id: "app.upcomingReservations",
  defaultMessage: "Upcoming Reservations",
  description: "Upcoming Reservations"
}), _defineProperty(_defineMessages, "previousReservations", {
  id: "app.previousReservations",
  defaultMessage: "Previous Reservations",
  description: "Previous Reservations"
}), _defineProperty(_defineMessages, "upcomingTrips", {
  id: "app.upcomingTrips",
  defaultMessage: "Upcoming Trips",
  description: "Upcoming Trips"
}), _defineProperty(_defineMessages, "previousTrips", {
  id: "app.previousTrips",
  defaultMessage: "Previous Trips",
  description: "Previous Trips"
}), _defineProperty(_defineMessages, "noUpcomingReservation", {
  id: "app.noUpcomingReservation",
  defaultMessage: "You don't have any upcoming reservations!",
  description: "noUpcomingReservation"
}), _defineProperty(_defineMessages, "noPreviousReservation", {
  id: "app.noPreviousReservation",
  defaultMessage: "You don't have any previous reservations!",
  description: "noPreviousReservation"
}), _defineProperty(_defineMessages, "noUpcomingTrips", {
  id: "app.noUpcomingTrips",
  defaultMessage: "You don't have any upcoming trips!",
  description: "noUpcomingTrips"
}), _defineProperty(_defineMessages, "noPreviousTrips", {
  id: "app.noPreviousTrips",
  defaultMessage: "You don't have any previous trips!",
  description: "noPreviousTrips"
}), _defineProperty(_defineMessages, "payNow", {
  id: "app.paynow",
  defaultMessage: "Pay now",
  description: "Pay now"
}), _defineProperty(_defineMessages, "creditCard", {
  id: "app.creditCard",
  defaultMessage: "Credit Card",
  description: "Credit Card"
}), _defineProperty(_defineMessages, "payPal", {
  id: "app.payPal",
  defaultMessage: "Pay Pal",
  description: "payPal"
}), _defineProperty(_defineMessages, "fullName", {
  id: "app.fullName",
  defaultMessage: "Full Name",
  description: "fullName"
}), _defineProperty(_defineMessages, "cardNumber", {
  id: "app.cardNumber",
  defaultMessage: "Credit Card Number",
  description: "cardNumber"
}), _defineProperty(_defineMessages, "cvv", {
  id: "app.cvv",
  defaultMessage: "CVV",
  description: "cvv"
}), _defineProperty(_defineMessages, "expiryDate", {
  id: "app.expiryDate",
  defaultMessage: "Month",
  description: "expiryDate"
}), _defineProperty(_defineMessages, "expiryYear", {
  id: "app.expiryYear",
  defaultMessage: "Year",
  description: "expiryYear"
}), _defineProperty(_defineMessages, "cardExpires", {
  id: "app.Expires",
  defaultMessage: "Expires",
  description: "Expires"
}), _defineProperty(_defineMessages, "required", {
  id: "app.required",
  defaultMessage: "*Required",
  description: "*Required"
}), _defineProperty(_defineMessages, "invalid", {
  id: "app.invalid",
  defaultMessage: "*Invalid",
  description: "*Invalid"
}), _defineProperty(_defineMessages, "payoutFirstName", {
  id: "app.payoutFirstName",
  defaultMessage: "Account holder first name",
  description: "payoutFirstName"
}), _defineProperty(_defineMessages, "payoutLastName", {
  id: "app.payoutLastName",
  defaultMessage: "Account holder last name",
  description: "payoutLastName"
}), _defineProperty(_defineMessages, "payoutRouting", {
  id: "app.payoutRouting",
  defaultMessage: "Routing number",
  description: "payoutRouting"
}), _defineProperty(_defineMessages, "accountNumber", {
  id: "app.accountNumber",
  defaultMessage: "Account number",
  description: "accountNumber"
}), _defineProperty(_defineMessages, "confirmAccountNumber", {
  id: "app.confirmAccountNumber",
  defaultMessage: "Confirm account number",
  description: "confirmAccountNumber"
}), _defineProperty(_defineMessages, "ssn4Digits", {
  id: "app.ssn4Digits",
  defaultMessage: "SSN last 4 digits",
  description: "ssn4Digits"
}), _defineProperty(_defineMessages, "payoutFirstNameRequired", {
  id: "app.payoutFirstNameRequired",
  defaultMessage: "First name is required",
  description: "payoutFirstNameRequired"
}), _defineProperty(_defineMessages, "payoutLastNameRequired", {
  id: "app.payoutLastNameRequired",
  defaultMessage: "Last name is required",
  description: "payoutLastNameRequired"
}), _defineProperty(_defineMessages, "payoutRoutingRequired", {
  id: "app.payoutRoutingRequired",
  defaultMessage: "Routing number is required",
  description: "payoutRoutingRequired"
}), _defineProperty(_defineMessages, "payoutRoutingInvalid", {
  id: "app.payoutRoutingInvalid",
  defaultMessage: "Invalid routing number",
  description: "payoutRoutingInvalid"
}), _defineProperty(_defineMessages, "accountNumberRequired", {
  id: "app.accountNumberRequired",
  defaultMessage: "Account number is required",
  description: "accountNumberRequired"
}), _defineProperty(_defineMessages, "accountNumberInvalid", {
  id: "app.accountNumberInvalid",
  defaultMessage: "Invalid account number",
  description: "accountNumberInvalid"
}), _defineProperty(_defineMessages, "confirmAccountNumberRequired", {
  id: "app.confirmAccountNumberRequired",
  defaultMessage: "Confirm account number is required",
  description: "confirmAccountNumberRequired"
}), _defineProperty(_defineMessages, "confirmAccountNumberInvalid", {
  id: "app.confirmAccountNumberInvalid",
  defaultMessage: "Invalid confirm account number",
  description: "confirmAccountNumberInvalid"
}), _defineProperty(_defineMessages, "confirmAccountNumberMismatch", {
  id: "app.confirmAccountNumberMismatch",
  defaultMessage: "Account number mismatch",
  description: "confirmAccountNumberMismatch"
}), _defineProperty(_defineMessages, "ssn4DigitsRequired", {
  id: "app.ssn4DigitsRequired",
  defaultMessage: "SSN number is required",
  description: "ssn4DigitsRequired"
}), _defineProperty(_defineMessages, "ssn4DigitsInvalid", {
  id: "app.ssn4DigitsInvalid",
  defaultMessage: "Invalid SSN number",
  description: "ssn4DigitsInvalid"
}), _defineProperty(_defineMessages, "verifiedBy", {
  id: "app.verifiedBy",
  defaultMessage: "Verified By",
  description: "verifiedBy"
}), _defineProperty(_defineMessages, "saved", {
  id: "app.saved",
  defaultMessage: "Saved",
  description: "saved"
}), _defineProperty(_defineMessages, "wishList", {
  id: "app.wishList",
  defaultMessage: "Wish List",
  description: "wishList"
}), _defineProperty(_defineMessages, "wishLists", {
  id: "app.wishLists",
  defaultMessage: "Wish Lists",
  description: "wishLists"
}), _defineProperty(_defineMessages, "createWishList", {
  id: "app.createWishList",
  defaultMessage: "Create Wish List",
  description: "createWishList"
}), _defineProperty(_defineMessages, "list", {
  id: "app.list",
  defaultMessage: "List",
  description: "list"
}), _defineProperty(_defineMessages, "lists", {
  id: "app.lists",
  defaultMessage: "Lists",
  description: "lists"
}), _defineProperty(_defineMessages, "yourLists", {
  id: "app.yourLists",
  defaultMessage: "Your lists",
  description: "yourLists"
}), _defineProperty(_defineMessages, "homes", {
  id: "app.homes",
  defaultMessage: "Homes",
  description: "homes"
}), _defineProperty(_defineMessages, "nameRequired", {
  id: "app.nameRequired",
  defaultMessage: "Name is required",
  description: "Name Required"
}), _defineProperty(_defineMessages, "privacySettings", {
  id: "app.privacySettings",
  defaultMessage: "Privacy Settings",
  description: "Privacy Settings"
}), _defineProperty(_defineMessages, "wishListAdded", {
  id: "app.wishListAdded",
  defaultMessage: "Wish list added successfully.",
  description: "Wish list added"
}), _defineProperty(_defineMessages, "wishListUpdated", {
  id: "app.wishListUpdated",
  defaultMessage: "Wish list updated successfully.",
  description: "Wish list updated"
}), _defineProperty(_defineMessages, "editWishList", {
  id: "app.editWishList",
  defaultMessage: "Edit Wish List",
  description: "editWishList"
}), _defineProperty(_defineMessages, "yourHomes", {
  id: "app.yourHomes",
  defaultMessage: "Your Homes",
  description: "hoyourHomesmes"
}), _defineProperty(_defineMessages, "deleteWishList", {
  id: "app.deleteWishList",
  defaultMessage: "Delete this list",
  description: "deleteWishList"
}), _defineProperty(_defineMessages, "noWishlists", {
  id: "app.noWishlists",
  defaultMessage: "Sorry, you don't have any homes wishlisted.",
  description: "noWishlists"
}), _defineProperty(_defineMessages, "public", {
  id: "app.public",
  defaultMessage: "Public",
  description: "public"
}), _defineProperty(_defineMessages, "private", {
  id: "app.private",
  defaultMessage: "Private",
  description: "private"
}), _defineProperty(_defineMessages, "goToAllLists", {
  id: "app.goToAllLists",
  defaultMessage: "Go to All Lists",
  description: "Go to All Lists"
}), _defineProperty(_defineMessages, "noWishlistsHomes", {
  id: "app.noWishlistsHomes",
  defaultMessage: "Sorry, You don't have any wishlist homes!",
  description: "noWishlistsHomes"
}), _defineProperty(_defineMessages, "areYouSureDeleteWishList", {
  id: "app.areYouSureDeleteWishList",
  defaultMessage: "Are you sure you want to delete this?",
  description: "areYouSureDeleteWishList"
}), _defineProperty(_defineMessages, "confirmDelete", {
  id: "app.confirmDelete",
  defaultMessage: "Confirm Delete",
  description: "confirmDelete"
}), _defineProperty(_defineMessages, "similarListings", {
  id: "app.similarListings",
  defaultMessage: "Similar Listings",
  description: "similarListings"
}), _defineProperty(_defineMessages, "overview", {
  id: "app.overview",
  defaultMessage: "Overview",
  description: "Overview"
}), _defineProperty(_defineMessages, "theHost", {
  id: "app.theHost",
  defaultMessage: "The Host",
  description: "The Host"
}), _defineProperty(_defineMessages, "documentverificaiton", {
  id: "app.documentverificaiton",
  defaultMessage: "Document Verification",
  description: "documentverificaiton"
}), _defineProperty(_defineMessages, "documentverified", {
  id: "app.documentverified",
  defaultMessage: "Documents verified",
  description: "Documents verified"
}), _defineProperty(_defineMessages, "verificationdocument", {
  id: "app.verificationdocument",
  defaultMessage: "Documents Verified",
  description: "verificationdocument"
}), _defineProperty(_defineMessages, "documentverificaitonDetails", {
  id: "app.documentverificaitonDetails",
  defaultMessage: "Your document have been verified",
  description: "documentverificaitonDetails"
}), _defineProperty(_defineMessages, "documentApproveRejectMessage", {
  id: "app.documentApproveRejectMessage",
  defaultMessage: "Type Your Message",
  description: "documentApproveRejectMessage"
}), _defineProperty(_defineMessages, "documentApprove", {
  id: "app.documentApprove",
  defaultMessage: "Approve",
  description: "documentApprove"
}), _defineProperty(_defineMessages, "documentReject", {
  id: "app.documentReject",
  defaultMessage: "Reject",
  description: "documentReject"
}), _defineProperty(_defineMessages, "documentAppRejRequried", {
  id: "app.documentAppRejRequried",
  defaultMessage: "Please Fill Required",
  description: "documentAppRejRequried"
}), _defineProperty(_defineMessages, "documentUploadPlaceholder", {
  id: "app.documentUploadPlaceholder",
  defaultMessage: "Click here to upload document or drag them in",
  description: "Document Upload Placeholder"
}), _defineProperty(_defineMessages, "documentVerificaitonInfo", {
  id: "app.documentVerificaitonInfo",
  defaultMessage: "Please upload your documents for ID verification. Eg: Passport, Driving License",
  description: "Document Verification Info"
}), _defineProperty(_defineMessages, "searchAsIMove", {
  id: "app.searchAsIMove",
  defaultMessage: "Search as I move the map",
  description: "Search as I move the map"
}), _defineProperty(_defineMessages, "blankSpace", {
  id: "app.blankSpace",
  defaultMessage: "Input is Blank",
  description: "blankSpace"
}), _defineProperty(_defineMessages, "ContactMessage", {
  id: "app.ContactMessage",
  defaultMessage: "Message",
  description: "ContactMessage"
}), _defineProperty(_defineMessages, "contactForm", {
  id: "app.contactForm",
  defaultMessage: "Contact Us",
  description: "contactForm"
}), _defineProperty(_defineMessages, "Nameincontact", {
  id: "app.Nameincontact",
  defaultMessage: "Name",
  description: "Nameincontact"
}), _defineProperty(_defineMessages, "recaptchaRequired", {
  id: "app.recaptchaRequired",
  defaultMessage: "Recaptcha Required",
  description: "recaptchaRequired"
}), _defineProperty(_defineMessages, "sendmail", {
  id: "app.sendmail",
  defaultMessage: "Send",
  description: "Send"
}), _defineProperty(_defineMessages, "nameYourList", {
  id: "app.nameYourList",
  defaultMessage: "Name your list",
  description: "List Name"
}), _defineProperty(_defineMessages, "createButton", {
  id: "app.createButton",
  defaultMessage: "Create",
  description: "Wish list button"
}), _defineProperty(_defineMessages, "flexibleCheckOut", {
  id: "app.flexibleCheckOut",
  defaultMessage: "Flexible check out time",
  description: "Flexible check out time"
}), _defineProperty(_defineMessages, "helpFirstTitle", {
  id: "app.helpFirstTitle",
  defaultMessage: "Create your listing",
  description: "Title"
}), _defineProperty(_defineMessages, "helpSecondTitle", {
  id: "app.helpSecondTitle",
  defaultMessage: "Welcome your guests",
  description: "Title"
}), _defineProperty(_defineMessages, "helpThirdTitle", {
  id: "app.helpThirdTitle",
  defaultMessage: "Getting paid safely",
  description: "Title"
}), _defineProperty(_defineMessages, "helpFirstDesc1", {
  id: "app.helpFirstDesc1",
  defaultMessage: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
  description: "Description"
}), _defineProperty(_defineMessages, "helpFirstDesc2", {
  id: "app.helpFirstDesc2",
  defaultMessage: "Maecenas non scelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus posuere placerat. Sed et libero eu nibh tristique mollis a eget lectus",
  description: "Description"
}), _defineProperty(_defineMessages, "helpSecondDesc1", {
  id: "app.helpSecondDesc1",
  defaultMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  description: "Description"
}), _defineProperty(_defineMessages, "helpSecondDesc2", {
  id: "app.helpSecondDesc2",
  defaultMessage: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. ",
  description: "Description"
}), _defineProperty(_defineMessages, "helpSecondDesc3", {
  id: "app.helpSecondDesc3",
  defaultMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  description: "Description"
}), _defineProperty(_defineMessages, "helpThirdDesc1", {
  id: "app.helpThirdDesc1",
  defaultMessage: " Morbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae placerat tempus, mauris sem elementum ipsum. ",
  description: "Description"
}), _defineProperty(_defineMessages, "helpThirdDesc2", {
  id: "app.helpThirdDesc2",
  defaultMessage: "Fusce quis varius nulla. Nullam nisi nisi, suscipit ut magna quis, feugiat porta nibh. ",
  description: "Description"
}), _defineProperty(_defineMessages, "helpThirdDesc3", {
  id: "app.helpThirdDesc3",
  defaultMessage: "Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem hendrerit aliquam. Integer eu varius orci.",
  description: "Description"
}), _defineProperty(_defineMessages, "processFlowHeading", {
  id: "app.processFlowHeading",
  defaultMessage: "Earn Extra Money and Become a Host with app",
  description: "Process Flow Heading"
}), _defineProperty(_defineMessages, "processFlowSubHeading", {
  id: "app.processFlowSubHeading",
  defaultMessage: "Explorez le site à la recherche du photographe idéal et profitez des bons moments en toute sereinité",
  description: "Process Flow Heading"
}), _defineProperty(_defineMessages, "stepOneHeading", {
  id: "app.stepOneHeading",
  defaultMessage: "Why host with app?",
  description: "Step 1"
}), _defineProperty(_defineMessages, "stepTwoHeading", {
  id: "app.stepTwoHeading",
  defaultMessage: "Stay in Control",
  description: "Step 2"
}), _defineProperty(_defineMessages, "stepThreeHeading", {
  id: "app.stepThreeHeading",
  defaultMessage: "Stay Confident",
  description: "Step 3"
}), _defineProperty(_defineMessages, "stepOneFlow", {
  id: "app.stepOneFlow",
  defaultMessage: "Share your villa, condo or apartment and earn yourself an extra income. With over 12 years of experience, we make it simple and safe to reach guests that are looking for fun and unique Places to stay across Thailand and Bali.",
  description: "Step 1"
}), _defineProperty(_defineMessages, "stepTwoFlow", {
  id: "app.stepTwoFlow",
  defaultMessage: "Stay in control with app. You have full control of your availability, rates and rules. You can, block dates, set check-in times and manage your own communications directly with your guests through the system.",
  description: "Step 2"
}), _defineProperty(_defineMessages, "stepThreeFlow", {
  id: "app.stepThreeFlow",
  defaultMessage: "We offer all the right tools to allow you to host in confidence. From a flexible booking system through to a secure payment system. Stay connected and confident with the latest technology.",
  description: "Step 3"
}), _defineProperty(_defineMessages, "anonymousMessage", {
  id: "app.anonymousMessage",
  defaultMessage: "Do you want to report this User?",
  description: "Report User"
}), _defineProperty(_defineMessages, "reportUserInfo", {
  id: "app.reportUserInfo",
  defaultMessage: "If so, please choose one of the following reasons.",
  description: "Report User"
}), _defineProperty(_defineMessages, "reportContent1", {
  id: "app.reportContent1",
  defaultMessage: "This profile should not be on",
  description: "Report User"
}), _defineProperty(_defineMessages, "reportContent2", {
  id: "app.reportContent2",
  defaultMessage: "Attempt to share contact information",
  description: "Report User"
}), _defineProperty(_defineMessages, "close", {
  id: "app.close",
  defaultMessage: "Close",
  description: "Report User"
}), _defineProperty(_defineMessages, "reportContent3", {
  id: "app.reportContent3",
  defaultMessage: "Inappropriate content of spam",
  description: "Report User"
}), _defineProperty(_defineMessages, "thankyouInfo1", {
  id: "app.thankyouInfo1",
  defaultMessage: "Thanks for taking the time to report this user. These reports help make better for everyone, so we take them seriously. We will reach out if we have questions about your report.",
  description: "Report User"
}), _defineProperty(_defineMessages, "thankyouTitle", {
  id: "app.thankyouTitle",
  defaultMessage: "Thank You",
  description: "Report User"
}), _defineProperty(_defineMessages, "messageHistroyLabel", {
  id: "app.messageHistroyLabel",
  defaultMessage: "View",
  description: "Report User"
}), _defineProperty(_defineMessages, "titleRequiredLabel", {
  id: "app.titleRequiredLabel",
  defaultMessage: "Message History",
  description: "Report User"
}), _defineProperty(_defineMessages, "topBannerTitle", {
  id: "app.topBannerTitle",
  defaultMessage: "It's simple to become a app host",
  description: "Report User"
}), _defineProperty(_defineMessages, "footerTerms", {
  id: "app.footerTerms",
  defaultMessage: "Terms, Privacy, Currency & More",
  description: "Footer Button"
}), _defineProperty(_defineMessages, "footerClose", {
  id: "app.footerClose",
  defaultMessage: "Close",
  description: "Footer Button"
}), _defineProperty(_defineMessages, "myHostSpaces", {
  id: "app.myHostSpaces",
  defaultMessage: "Spaces",
  description: "Menu Item"
}), _defineProperty(_defineMessages, "mySpace", {
  id: "app.mySpace",
  defaultMessage: "Space",
  description: "Menu Item"
}), _defineProperty(_defineMessages, "clear", {
  id: "app.clear",
  defaultMessage: "Clear",
  description: "clear"
}), _defineProperty(_defineMessages, "apply", {
  id: "app.apply",
  defaultMessage: "Apply",
  description: "apply"
}), _defineProperty(_defineMessages, "homeType", {
  id: "app.homeType",
  defaultMessage: "Home type",
  description: "homeType"
}), _defineProperty(_defineMessages, "price", {
  id: "app.price",
  defaultMessage: "Price",
  description: "price"
}), _defineProperty(_defineMessages, "moreFilters", {
  id: "app.moreFilters",
  defaultMessage: "More filters",
  description: "moreFilters"
}), _defineProperty(_defineMessages, "showAmenities", {
  id: "app.showAmenities",
  defaultMessage: "Show all amenities",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "closeAmenities", {
  id: "app.closeAmenities",
  defaultMessage: "Close all amenities",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "showMore", {
  id: "app.showMore",
  defaultMessage: "Show More",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "showLess", {
  id: "app.showLess",
  defaultMessage: "Show Less",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "showAll", {
  id: "app.showAll",
  defaultMessage: "Show all",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "closeSafetyFeatures", {
  id: "app.closeSafetyFeatures",
  defaultMessage: "Close safety features",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "closeSharedSpaces", {
  id: "app.closeSharedSpaces",
  defaultMessage: "Close Shared Spaces",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "spacesInfo", {
  id: "app.spacesInfo",
  defaultMessage: "Spaces",
  description: "Spaces"
}), _defineProperty(_defineMessages, "neighbourHood", {
  id: "app.neighbourHood",
  defaultMessage: "Neighbourhood",
  description: "Become Host Form"
}), _defineProperty(_defineMessages, "readMoreAboutSpaces", {
  id: "app.readMoreAboutSpaces",
  defaultMessage: "Read more about the space",
  description: "View Listing"
}), _defineProperty(_defineMessages, "hideButton", {
  id: "app.hideButton",
  defaultMessage: "Hide",
  description: "View Listing"
}), _defineProperty(_defineMessages, "showNeighbourHood", {
  id: "app.showNeighbourHood",
  defaultMessage: "Show NeighbourHood",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "gettingAround", {
  id: "app.gettingAround",
  defaultMessage: "Getting Around",
  description: "View Listing"
}), _defineProperty(_defineMessages, "bookNow", {
  id: "app.bookNow",
  defaultMessage: "Book Now",
  description: "Booking button"
}), _defineProperty(_defineMessages, "bedTypes", {
  id: "app.bedTypes",
  defaultMessage: "Bed Types",
  description: "Bed Types"
}), _defineProperty(_defineMessages, "contactAdmin", {
  id: "app.contactAdmin",
  defaultMessage: " contact us.",
  description: "Contact Admin"
}), _defineProperty(_defineMessages, "roomsAndBeds", {
  id: "app.roomsAndBeds",
  defaultMessage: "Rooms and Beds",
  description: "Rooms and Beds"
}), _defineProperty(_defineMessages, "showAllFacilities", {
  id: "app.showAllFacilities",
  defaultMessage: "Show all facilities",
  description: "Show all facilities text"
}), _defineProperty(_defineMessages, "closeFacilities", {
  id: "app.closeFacilities",
  defaultMessage: "Close all facilities",
  description: "Close facilities text"
}), _defineProperty(_defineMessages, "showAllHouseRules", {
  id: "app.showAllHouseRules",
  defaultMessage: "Show all house rules",
  description: "Show all house rules text"
}), _defineProperty(_defineMessages, "closeHouseRules", {
  id: "app.closeHouseRules",
  defaultMessage: "Close all house rules",
  description: "Close house rules text"
}), _defineProperty(_defineMessages, "chooseACountry", {
  id: "app.chooseACountry",
  defaultMessage: "Choose a country",
  description: "Choose a country"
}), _defineProperty(_defineMessages, "addPhoneNumber", {
  id: "app.addPhoneNumber",
  defaultMessage: "Add phone number",
  description: "Add phone number"
}), _defineProperty(_defineMessages, "addAPhoneNumber", {
  id: "app.addAPhoneNumber",
  defaultMessage: "Add a phone number",
  description: "Add a phone number"
}), _defineProperty(_defineMessages, "verifyViaSms", {
  id: "app.verifyViaSms",
  defaultMessage: "Verify via SMS",
  description: "Verify via SMS"
}), _defineProperty(_defineMessages, "mobileNumberRequired", {
  id: "app.mobileNumberRequired",
  defaultMessage: "Please enter a phone number.",
  description: "Please enter a phone number."
}), _defineProperty(_defineMessages, "weHaveSentVerificationCode", {
  id: "app.weHaveSentVerificationCode",
  defaultMessage: "We sent a verification code to",
  description: "We sent a verification code to"
}), _defineProperty(_defineMessages, "verificationCodeLabel", {
  id: "app.verificationCodeLabel",
  defaultMessage: "Please enter the 4-digit code",
  description: "Please enter the 4-digit code"
}), _defineProperty(_defineMessages, "verificationCodeRequired", {
  id: "app.verificationCodeRequired",
  defaultMessage: "Please enter a verification code.",
  description: "Please enter a verification code."
}), _defineProperty(_defineMessages, "seeAll", {
  id: "app.seeAll",
  defaultMessage: "See All",
  description: "seeAll"
}), _defineProperty(_defineMessages, "locationRequired", {
  id: "app.locationRequired",
  defaultMessage: "Location is required",
  description: "Location is required"
}), _defineProperty(_defineMessages, "locationAddressRequired", {
  id: "app.locationAddressRequired",
  defaultMessage: "Location Address is required",
  description: "Location Address is required"
}), _defineProperty(_defineMessages, "listNotFoundTitle", {
  id: "app.listNotFoundTitle",
  defaultMessage: "It looks like this listing may deleted or unpublished.",
  description: "Not Found"
}), _defineProperty(_defineMessages, "userDeleted", {
  id: "app.userDeleted",
  defaultMessage: "You are deleted by admin.",
  description: "You are deleted user"
}), _defineProperty(_defineMessages, "cancelInfoBooking", {
  id: "app.cancelInfoBooking",
  defaultMessage: "Most hosts respond within 24 hours.",
  description: "View message"
}), _defineProperty(_defineMessages, "cookiesDisclaimer", {
  id: "app.cookiesDisclaimer",
  defaultMessage: "uses cookies to understand how you use our site and to improve your experience. By using our site, you accept our use of cookies. To learn more, go to our",
  description: "extraGuestIncluded"
}), _defineProperty(_defineMessages, "gotIt", {
  id: "app.gotIt",
  defaultMessage: "GOT IT",
  description: " cookies Disclaimer Button"
}), _defineProperty(_defineMessages, "step1HeadingNew", {
  id: "app.step1HeadingNew",
  defaultMessage: "STEP 1",
  description: "STEP 2 Heading"
}), _defineProperty(_defineMessages, "Maximumupload", {
  id: "app.Maximumupload",
  defaultMessage: "Maximum upload size:1MB",
  description: "Photos Upload"
}), _defineProperty(_defineMessages, "cookiePolicy", {
  id: "app.cookiePolicy",
  defaultMessage: "Cookie policy",
  description: " cookies Disclaimer Link"
}), _defineProperty(_defineMessages, "blockDates", {
  id: "app.blockedDates",
  defaultMessage: "Block dates",
  description: "Listing Step3"
}), _defineProperty(_defineMessages, "deSelect", {
  id: "app.deSelect",
  defaultMessage: "Cancel",
  description: "Cancel deSelect button"
}), _defineProperty(_defineMessages, "selectedDatesSuccess", {
  id: "app.selectedDatesSuccess",
  defaultMessage: "Your calendar has been updated successfully",
  description: "Your calendar has been updated successfully."
}), _defineProperty(_defineMessages, "selectedDatesError", {
  id: "app.selectedDatesError",
  defaultMessage: "Something went wrong, please try again.",
  description: "Something went wrong, please try again."
}), _defineProperty(_defineMessages, "selectedDates", {
  id: "app.selectedDates",
  defaultMessage: "Selected dates",
  description: "Selected dates"
}), _defineProperty(_defineMessages, "makeDateAvailable", {
  id: "app.makeDateAvailable",
  defaultMessage: "Special Price",
  description: "Listing Step3"
}), _defineProperty(_defineMessages, "sessionPrice", {
  id: "app.sessionPrice",
  defaultMessage: "Special Price",
  description: "sessionPrice"
}), _defineProperty(_defineMessages, "selectedDatesBlocked", {
  id: "app.selectedDatesBlocked",
  defaultMessage: "Selected dates will be blocked.",
  description: "Selected dates will be blocked."
}), _defineProperty(_defineMessages, "availablilityterm", {
  id: "app.availablilityterm",
  defaultMessage: "Availability term",
  description: "Availability term"
}), _defineProperty(_defineMessages, "contactFormInformation", {
  id: "app.contactFormInformation",
  defaultMessage: " Contact & Support",
  description: "contactForm"
}), _defineProperty(_defineMessages, "contactFormEmail", {
  id: "app.contactFormEmail",
  defaultMessage: "Email Us",
  description: "contactForm"
}), _defineProperty(_defineMessages, "contactFormCall", {
  id: "app.contactFormCall",
  defaultMessage: "Call Us",
  description: "contactForm"
}), _defineProperty(_defineMessages, "whyblockTitle1", {
  id: "app.whyblockTitle1",
  defaultMessage: " What is Lorem Ipsum?",
  description: "why block Title"
}), _defineProperty(_defineMessages, "whyblockTitle2", {
  id: "app.whyblockTitle2",
  defaultMessage: " This tool for our day to day work and our clients?",
  description: "why block title"
}), _defineProperty(_defineMessages, "whyblockdesc1", {
  id: "app.whyblockdesc1",
  defaultMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  description: "why block description"
}), _defineProperty(_defineMessages, "whyblockdesc2", {
  id: "app.whyblockdesc2",
  defaultMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  description: "why block description"
}), _defineProperty(_defineMessages, "hostingBlocktitle", {
  id: "app.hostingBlocktitle",
  defaultMessage: "There are 3 Lorem Ipsum generators",
  description: "Hosting Block title"
}), _defineProperty(_defineMessages, "hostingBlockheading1", {
  id: "app.hostingBlockheading1",
  defaultMessage: " Lorem Ipsum",
  description: "Hosting Block heading"
}), _defineProperty(_defineMessages, "hostingBlockheading2", {
  id: "app.hostingBlockheading2",
  defaultMessage: " Lorem Ipsum",
  description: "Hosting Block heading"
}), _defineProperty(_defineMessages, "hostingBlockheading3", {
  id: "app.hostingBlockheading3",
  defaultMessage: " Lorem Ipsum",
  description: "Hosting Block heading"
}), _defineProperty(_defineMessages, "hostingBlockdesc1", {
  id: "app.hostingBlockdesc1",
  defaultMessage: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  description: "Hosting Block Description"
}), _defineProperty(_defineMessages, "hostingBlockdesc2", {
  id: "app.hostingBlockdesc2",
  defaultMessage: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  description: "Hosting Block Description"
}), _defineProperty(_defineMessages, "hostingBlockdesc3", {
  id: "app.hostingBlockdesc3",
  defaultMessage: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  description: "Hosting Block Description"
}), _defineProperty(_defineMessages, "coverSectiontitle", {
  id: "app.coverSectiontitle",
  defaultMessage: "Use our generator to get your own",
  description: "Cover Section Title"
}), _defineProperty(_defineMessages, "coverSectiondesc1", {
  id: "app.coverSectiondesc1",
  defaultMessage: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description: "Cover Section Description"
}), _defineProperty(_defineMessages, "coverSectiondesc2", {
  id: "app.coverSectiondesc2",
  defaultMessage: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description: "Cover Section Description"
}), _defineProperty(_defineMessages, "coverSectionlistItem1", {
  id: "app.coverSectionlistItem1",
  defaultMessage: "Excepteur sint occaecat cupidatat non proident",
  description: "Cover Section List Item"
}), _defineProperty(_defineMessages, "coverSectionlistItem2", {
  id: "app.coverSectionlistItem2",
  defaultMessage: "quis nostrud exercitation ullamco laboris nisi",
  description: "Cover Section List Item"
}), _defineProperty(_defineMessages, "coverSectionlistItem3", {
  id: "app.coverSectionlistItem3",
  defaultMessage: "Sed ut perspiciatis unde omnis iste natus error sit",
  description: "Cover Section List Item"
}), _defineProperty(_defineMessages, "coverSectionlistItem4", {
  id: "app.coverSectionlistItem4",
  defaultMessage: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur ",
  description: "Cover Section List Item"
}), _defineProperty(_defineMessages, "coverSectionlistItem5", {
  id: "app.coverSectionlistItem5",
  defaultMessage: " Ut enim ad minima veniam, quis nostrum exercitationem",
  description: "Cover Section List Item"
}), _defineProperty(_defineMessages, "coverSectionlistItem6", {
  id: "app.coverSectionlistItem6",
  defaultMessage: " Excepteur sint occaecat cupidatat non proident",
  description: "Cover Section List Item"
}), _defineProperty(_defineMessages, "paymentContenttitle", {
  id: "app.paymentContenttitle",
  defaultMessage: "It to make a type specimen book",
  description: "payment Content title"
}), _defineProperty(_defineMessages, "paymentContentheading1", {
  id: "app.paymentContentheading1",
  defaultMessage: "Sed ut perspiciatis",
  description: "payment Content Heading"
}), _defineProperty(_defineMessages, "paymentContentheading2", {
  id: "app.paymentContentheading2",
  defaultMessage: "Nemo enim ipsam",
  description: "payment Content Heading"
}), _defineProperty(_defineMessages, "paymentContentheading3", {
  id: "app.paymentContentheading3",
  defaultMessage: "Neque porro",
  description: "payment Content Heading"
}), _defineProperty(_defineMessages, "paymentContentdesc1", {
  id: "app.paymentContentdesc1",
  defaultMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  description: "payment Content Description"
}), _defineProperty(_defineMessages, "paymentContentdesc2", {
  id: "app.paymentContentdesc2",
  defaultMessage: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  description: "payment Content Description"
}), _defineProperty(_defineMessages, "paymentContentdesc3", {
  id: "app.paymentContentdesc3",
  defaultMessage: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  description: "payment Content Description"
}), _defineProperty(_defineMessages, "quoteText1", {
  id: "app.quoteText1",
  defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  description: "Quote text"
}), _defineProperty(_defineMessages, "quotetagline1", {
  id: "app.quotetagline1",
  defaultMessage: " software like Aldus PageMaker including versions of Lorem Ipsum.",
  description: "Quote Tag Line"
}), _defineProperty(_defineMessages, "quotebutton1", {
  id: "app.quotebutton1",
  defaultMessage: "Lorem Ipsum Text",
  description: "Quote Button"
}), _defineProperty(_defineMessages, "quoteText2", {
  id: "app.quoteText2",
  defaultMessage: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  description: "Quote text"
}), _defineProperty(_defineMessages, "quotetagline2", {
  id: "app.quotetagline2",
  defaultMessage: " software like Aldus PageMaker including versions of Lorem Ipsum.",
  description: "Quote Tag Line"
}), _defineProperty(_defineMessages, "quotebutton3", {
  id: "app.quotebutton3",
  defaultMessage: " Lorem Ipsum Text",
  description: "Quote Button"
}), _defineProperty(_defineMessages, "countingSectiontitle", {
  id: "app.countingSectiontitle",
  defaultMessage: "Lorem Ipsum as their default model text",
  description: "Counting Section Title "
}), _defineProperty(_defineMessages, "countingSectiontagline1", {
  id: "app.countingSectiontagline1",
  defaultMessage: " Lorem ipsum dolor sit amet",
  description: "Counting Section Tagline "
}), _defineProperty(_defineMessages, "countingSectiontagline2", {
  id: "app.countingSectiontagline2",
  defaultMessage: " quis nostrud exercitation ullamco",
  description: "Counting Section Tagline "
}), _defineProperty(_defineMessages, "countingSectiontagline3", {
  id: "app.countingSectiontagline3",
  defaultMessage: "Neque porro quisquam ",
  description: "Counting Section Tagline "
}), _defineProperty(_defineMessages, "aboutSectiontitle", {
  id: "app.aboutSectiontitle",
  defaultMessage: " Lorem Ipsum ",
  description: "About Section Title "
}), _defineProperty(_defineMessages, "aboutSectionheading1", {
  id: "app.aboutSectionheading1",
  defaultMessage: " What is Lorem Ipsum?",
  description: "About Section Heading "
}), _defineProperty(_defineMessages, "aboutSectiondesc1", {
  id: "app.aboutSectiondesc1",
  defaultMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  description: "About Section Description "
}), _defineProperty(_defineMessages, "aboutSectionheading2", {
  id: "app.aboutSectionheading2",
  defaultMessage: "This tool for our day to day work and our clients?",
  description: "About Section Heading "
}), _defineProperty(_defineMessages, "aboutSectiondesc2", {
  id: "app.aboutSectiondesc2",
  defaultMessage: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  description: "About Section Description "
}), _defineProperty(_defineMessages, "faqtitle", {
  id: "app.faqtitle",
  defaultMessage: " FAQ",
  description: "Faq  title "
}), _defineProperty(_defineMessages, "faqcollapsetitle1", {
  id: "app.faqcollapsetitle1",
  defaultMessage: "Lorem ipsum dolor sit amet, consecteturt",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent1", {
  id: "app.faqcollapseContent1",
  defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle2", {
  id: "app.faqcollapsetitle2",
  defaultMessage: " sed do eiusmod tempor incididunt ut labore et",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent2", {
  id: "app.faqcollapseContent2",
  defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle3", {
  id: "app.faqcollapsetitle3",
  defaultMessage: " Ut enim ad minim veniam",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent3", {
  id: "app.faqcollapseContent3",
  defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle4", {
  id: "app.faqcollapsetitle4",
  defaultMessage: " Lorem ipsum dolor sit amet, consecteturt",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent4", {
  id: "app.faqcollapseContent4",
  defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle5", {
  id: "app.faqcollapsetitle5",
  defaultMessage: "Lorem ipsum dolor sit amet, consecteturt",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent5", {
  id: "app.faqcollapseContent5",
  defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle6", {
  id: "app.faqcollapsetitle6",
  defaultMessage: "sed do eiusmod tempor incididunt ut labore et",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent6", {
  id: "app.faqcollapseContent6",
  defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle7", {
  id: "app.faqcollapsetitle7",
  defaultMessage: " Ut enim ad minim veniam",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent7", {
  id: "app.faqcollapseContent7",
  defaultMessage: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "faqcollapsetitle8", {
  id: "app.faqcollapsetitle8",
  defaultMessage: "Lorem ipsum dolor sit amet, consecteturt",
  description: "Faq collapse title "
}), _defineProperty(_defineMessages, "faqcollapseContent8", {
  id: "app.faqcollapseContent8",
  defaultMessage: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim   esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  description: "Faq collapse Content "
}), _defineProperty(_defineMessages, "contactFormAddress", {
  id: "app.contactFormAddress",
  defaultMessage: "Contact Address",
  description: "Contact Address"
}), _defineProperty(_defineMessages, "showDescription", {
  id: "app.showDescription",
  defaultMessage: "Show description",
  description: "View Listing"
}), _defineProperty(_defineMessages, "hideDescription", {
  id: "app.hideDescription",
  defaultMessage: "Hide description",
  description: "View Listing"
}), _defineProperty(_defineMessages, "showAllSafetyFeatures", {
  id: "app.showAllSafetyFeatures",
  defaultMessage: "Show all safety features",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "showAllSharedSpaces", {
  id: "app.showAllSharedSpaces",
  defaultMessage: "Show all shared spaces",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "closeAllSharedSpaces", {
  id: "app.closeAllSharedSpaces",
  defaultMessage: "Close all shared spaces",
  description: "Toggle Button"
}), _defineProperty(_defineMessages, "nightOf", {
  id: "app.nightOf",
  defaultMessage: "Night of",
  description: "Night of"
}), _defineProperty(_defineMessages, "Youhadreviewsfor", {
  id: "app.Youhadreviewsfor",
  defaultMessage: "You reviewed",
  description: "You reviewed"
}), _defineProperty(_defineMessages, "sreview", {
  id: "app.sreview",
  defaultMessage: "s review",
  description: "s review"
}), _defineProperty(_defineMessages, "youLabel", {
  id: "app.youLabel",
  defaultMessage: "You",
  description: "Review"
}), _defineProperty(_defineMessages, "exceedLimit", {
  id: "app.exceedLimit",
  defaultMessage: "Limit Exceeded",
  description: "exceedLimit"
}), _defineProperty(_defineMessages, "enableLabel", {
  id: "app.enableLabel",
  defaultMessage: "Enable",
  description: "Enable"
}), _defineProperty(_defineMessages, "disableLabel", {
  id: "app.disableLabel",
  defaultMessage: "Disable",
  description: "Disable"
}), _defineProperty(_defineMessages, "removeDateError", {
  id: "app.removeDateError",
  defaultMessage: "Please choose the blocked or special pricing dates to make them available.",
  description: "Remove date from special pricing error message"
}), _defineProperty(_defineMessages, "unBlockInfo", {
  id: "app.unBlockInfo",
  defaultMessage: "Note: To unblock a date, select any blocked or available date and save without giving special price.",
  description: "calendar unblock info"
}), _defineProperty(_defineMessages, "zipcodeOne", {
  id: "app.zipcodeOne",
  defaultMessage: "ZIP",
  description: "ZIP Code"
}), _defineProperty(_defineMessages, "cancellationPoliciesOne", {
  id: "app.cancellationPoliciesOne",
  defaultMessage: "allows hosts to choose among three standardized cancellation policies (Flexible, Moderate, and Strict) Will be enforced to protect both guest and host alike.",
  description: "Cancellation Policies"
}), _defineProperty(_defineMessages, "cancellationPoliciesTwo", {
  id: "app.cancellationPoliciesTwo",
  defaultMessage: "Each listing and reservation on our site will clearly state the cancellation policy. Guests while viewing their travel plans are able to review any penalties and also cancel by clicking  ‘Cancel’ on the respective reservation.",
  description: "Cancellation Policies"
}), _defineProperty(_defineMessages, "cancellationPoliciesThree", {
  id: "app.cancellationPoliciesThree",
  defaultMessage: "A host will be able to see the number of reservations a guest has Cancelled Over the past 12 months when the guest submits Booking request.",
  description: "Cancellation Policies"
}), _defineProperty(_defineMessages, "localLawsOne", {
  id: "app.localLawsOne",
  defaultMessage: "Take a moment to review your local laws. We want to make sure you’ve got everything you need to get off to a great start.",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "localLawsTwo", {
  id: "app.localLawsTwo",
  defaultMessage: "Please educate yourself about the laws in your jurisdiction before listing your space.",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "localLawsThree", {
  id: "app.localLawsThree",
  defaultMessage: "Most cities have rules covering homesharing, and the specific codes and ordinances can appear in many places (such as zoning, building, licensing or tax codes). In most places, you must register, get a permit, or obtain a license before you list your property or accept guests. You may also be responsible for collecting and remitting certain taxes. In some places, short-term rentals could be prohibited altogether.",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "localLawsFour", {
  id: "app.localLawsFour",
  defaultMessage: "Most cities have rules covering homesharing, and the specific codes and ordinances can appear in many places (such as zoning, building, licensing or tax codes). In most places, you must register, get a permit, or obtain a license before you list your property or accept guests. You may also be responsible for collecting and remitting certain taxes. In some places, short-term rentals could be prohibited altogether.",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "localLawsFive", {
  id: "app.localLawsFive",
  defaultMessage: "Since you are responsible for your own decision to list or book, you should get comfortable with the applicable rules before listing on",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "localLawsSix", {
  id: "app.localLawsSix",
  defaultMessage: "To get you started, we offer some helpful resources under “Your City Laws.”",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "localLawsSeven", {
  id: "app.localLawsSeven",
  defaultMessage: "By accepting our Terms of Service and listing your space, you certify that you will follow applicable laws and regulations.",
  description: "Lowcal Law"
}), _defineProperty(_defineMessages, "flexibleTitle", {
  id: "app.flexibleTitle",
  defaultMessage: "Flexible: Full refund 1 day prior to arrival",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsOne", {
  id: "app.flexibleOne",
  defaultMessage: "Cleaning fees are always refunded if the guest did not check in.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsTwo", {
  id: "app.flexibleTwo",
  defaultMessage: "The",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsThree", {
  id: "app.flexibleThree",
  defaultMessage: "service fee is refundable if the guest cancels before the trip starts. If a guest books a reservation that overlaps with any part of an existing reservation, we won’t refund the",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsFour", {
  id: "app.flexibleFour",
  defaultMessage: "service fee if they decide to cancel.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsFive", {
  id: "app.flexibleFive",
  defaultMessage: "Accommodation fees (the total nightly rate you're charged) are refundable in certain circumstances as outlined below.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsSix", {
  id: "app.flexibleSix",
  defaultMessage: "If there is a complaint from either party, notice must be given to",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsSeven", {
  id: "app.flexibleSeven",
  defaultMessage: "within 24 hours of check-in.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsEight", {
  id: "app.flexibleEight",
  defaultMessage: "will mediate when necessary, and has the final say in all disputes.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsNine", {
  id: "app.flexibleNine",
  defaultMessage: "A reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page, which they can find in Dashboard > Your Trips > Cancel.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsTen", {
  id: "app.flexibleTen",
  defaultMessage: "Cancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations by",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsEleven", {
  id: "app.flexibleEleven",
  defaultMessage: "Applicable taxes will be retained and remitted.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "cancelDetailsTwelve", {
  id: "app.cancelDetailsTwelve",
  defaultMessage: "for any other reason permitted under the Terms of Service. Please review these exceptions.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "dayPrior", {
  id: "app.dayPrior",
  defaultMessage: "day Prior",
  description: "Flexible"
}), _defineProperty(_defineMessages, "months", {
  id: "app.months",
  defaultMessage: "Thu, Jun",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleTime", {
  id: "app.flexibleTime",
  defaultMessage: "PM",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleTwelve", {
  id: "app.flexibleTwelve",
  defaultMessage: "For a full refund of accommodation fees, cancellation must be made a full 24 hours prior to listing’s local check in time (or 3:00 PM if not specified) on the day of check in. For example, if check-in is on Friday, cancel by Thursday of that week before check in time.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirteen", {
  id: "app.flexibleThirteen",
  defaultMessage: "If the guest cancels less than 24 hours before check-in, the first night is non-refundable.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleFourteen", {
  id: "app.flexibleFourteen",
  defaultMessage: "If the guest arrives and decides to leave early, the accommodation fees for the nights not spent 24 hours after the official cancellation are fully refunded.",
  description: "Flexible"
}), _defineProperty(_defineMessages, "example", {
  id: "app.example",
  defaultMessage: "Example",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleSecondMonths", {
  id: "app.flexibleSecondMonths",
  defaultMessage: "Fri, Jun",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleSecondTime", {
  id: "app.flexibleSecondTime",
  defaultMessage: "AM",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirdMonths", {
  id: "app.flexibleThirdMonths",
  defaultMessage: "Mon, Jun",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirdMonthsNumberOne", {
  id: "app.flexibleThirdMonthsNumberOne",
  defaultMessage: "08",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirdMonthsNumberTwo", {
  id: "app.flexibleThirdMonthsNumberTwo",
  defaultMessage: "09",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirdMonthsNumberThree", {
  id: "app.flexibleThirdMonthsNumberThree",
  defaultMessage: "12",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirdMonthsTimeOne", {
  id: "app.flexibleThirdMonthsTimeOne",
  defaultMessage: "3:00",
  description: "Flexible"
}), _defineProperty(_defineMessages, "flexibleThirdMonthsTimeTwo", {
  id: "app.flexibleThirdMonthsTimeTwo",
  defaultMessage: "11.00",
  description: "Flexible"
}), _defineProperty(_defineMessages, "moderateTitle", {
  id: "app.moderateTitle",
  defaultMessage: "Moderate: Full refund 5 days prior to arrival",
  description: "Moderate"
}), _defineProperty(_defineMessages, "daysPrior", {
  id: "app.daysPrior",
  defaultMessage: "days Prior",
  description: "Moderate"
}), _defineProperty(_defineMessages, "moderateOne", {
  id: "app.moderateOne",
  defaultMessage: "For a full refund of accommodation fees, cancellation must be made five full days prior to listing’s local check in time (or 3:00 PM if not specified) on the day of check in. For example, if check-in is on Friday, cancel by the previous Sunday before check in time.",
  description: "Moderate"
}), _defineProperty(_defineMessages, "moderateTwo", {
  id: "app.moderateTwo",
  defaultMessage: "If the guest cancels less than 5 days in advance, the first night is non-refundable but 50% of the accommodation fees for remaining nights will be refunded.",
  description: "Moderate"
}), _defineProperty(_defineMessages, "moderateThree", {
  id: "app.moderateThree",
  defaultMessage: "If the guest arrives and decides to leave early, 50% of the accommodation fees for the nights not spent 24 hours after the cancellation occurs are refunded.",
  description: "Moderate"
}), _defineProperty(_defineMessages, "moderateMonthsNumberOne", {
  id: "app.moderateMonthsNumberOne",
  defaultMessage: "13",
  description: "Flexible"
}), _defineProperty(_defineMessages, "moderateMonthsNumberTwo", {
  id: "app.moderateMonthsNumberTwo",
  defaultMessage: "16",
  description: "Flexible"
}), _defineProperty(_defineMessages, "strictTitle", {
  id: "app.strictTitle",
  defaultMessage: "Strict: 50% refund up until 1 week prior to arrival",
  description: "Moderate"
}), _defineProperty(_defineMessages, "strictOne", {
  id: "app.strictOne",
  defaultMessage: "For a 50% refund of accommodation fees, cancellation must be made seven full days prior to listing’s local check in time (or 3:00 PM if not specified) on the day of check in, otherwise no refund. For example, if check-in is on Friday, cancel by Friday of the previous week before check in time.",
  description: "Moderate"
}), _defineProperty(_defineMessages, "strictTwo", {
  id: "app.strictTwo",
  defaultMessage: "If the guest cancels less than 7 days in advance, the remaining nights are not refunded.",
  description: "Moderate"
}), _defineProperty(_defineMessages, "strictThree", {
  id: "app.strictThree",
  defaultMessage: "If the guest arrives and decides to leave early, the remaining nights are not refunded.",
  description: "Moderate"
}), _defineProperty(_defineMessages, "strictMonthsOne", {
  id: "app.strictMonthsOne",
  defaultMessage: "15",
  description: "Moderate"
}), _defineProperty(_defineMessages, "strictMonthsTwo", {
  id: "app.strictMonthsTwo",
  defaultMessage: "18",
  description: "Moderate"
}), _defineProperty(_defineMessages, "spaceFreeOne", {
  id: "app.spaceFreeOne",
  defaultMessage: "Find out how much you could earn hosting your place",
  description: "Space Free"
}), _defineProperty(_defineMessages, "spaceFreeTwo", {
  id: "app.spaceFreeTwo",
  defaultMessage: "Turn your extra space into extra income.",
  description: "Space Free"
}), _defineProperty(_defineMessages, "freeOutMore", {
  id: "app.freeOutMore",
  defaultMessage: "Find out more",
  description: "Space Free"
}), _defineProperty(_defineMessages, "ListPlaceTipOne", {
  id: "app.ListPlaceTipOne",
  defaultMessage: "Entire place",
  description: "List Plce Tips"
}), _defineProperty(_defineMessages, "ListPlaceTipsTwo", {
  id: "app.ListPlaceTipsTwo",
  defaultMessage: "Guests will rent the entire place. Includes in-law units.",
  description: "List Plce Tips"
}), _defineProperty(_defineMessages, "ListPlaceTip3", {
  id: "app.ListPlaceTip3",
  defaultMessage: "Lorem Ipsum Text",
  description: "List Plce Tips"
}), _defineProperty(_defineMessages, "ListPlaceTips4", {
  id: "app.ListPlaceTips4",
  defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description: "List Plce Tips"
}), _defineProperty(_defineMessages, "ListPlaceTip5", {
  id: "app.ListPlaceTip5",
  defaultMessage: "Excepteur sint occaecat",
  description: "List Plce Tips"
}), _defineProperty(_defineMessages, "ListPlaceTips6", {
  id: "app.ListPlaceTips6",
  defaultMessage: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description: "List Plce Tips"
}), _defineProperty(_defineMessages, "removeFile", {
  id: "app.removeFile",
  defaultMessage: "Remove file",
  description: "Remove file"
}), _defineProperty(_defineMessages, "Sayyourspace", {
  id: "app.Sayyourspace",
  defaultMessage: "Say your space",
  description: "Sayyourspace"
}), _defineProperty(_defineMessages, "aboutDescPayment", {
  id: "app.aboutDescPayment",
  defaultMessage: "Tell your expectations and the number of guests you are bringing with you so that the host can make your trip an organized and a perfect trip you ever had!",
  description: "Sayyourspace"
}), _defineProperty(_defineMessages, "availableLabel", {
  id: "app.availableLabel",
  defaultMessage: "Available",
  description: "Listing Step3"
}), _defineProperty(_defineMessages, "blockLabel", {
  id: "app.blockLabel",
  defaultMessage: "Block",
  description: "Listing Step3"
}), _defineProperty(_defineMessages, "coverLabel", {
  id: "app.coverLabel",
  defaultMessage: "Cover",
  description: "Listing Step2"
}), _defineProperty(_defineMessages, "warningLabel", {
  id: "app.warningLabel",
  defaultMessage: "Something went wrong!",
  description: "Warning"
}), _defineProperty(_defineMessages, "completeRequest", {
  id: "app.completeRequest",
  defaultMessage: "We couldn't complete your request",
  description: "Warning"
}), _defineProperty(_defineMessages, "errorCodeWarning", {
  id: "app.errorCodeWarning",
  defaultMessage: "Error code:",
  description: "Warning"
}), _defineProperty(_defineMessages, "helpfulLinks", {
  id: "app.helpfulLinks",
  defaultMessage: "Here are some helpful links instead:",
  description: "Warning"
}), _defineProperty(_defineMessages, "chooseLanguage", {
  id: "app.chooseLanguage",
  defaultMessage: "Choose a Language",
  description: "Choose a Language"
}), _defineProperty(_defineMessages, "chooseACurrency", {
  id: "app.chooseACurrency",
  defaultMessage: "Choose a Currency",
  description: "Choose a Currency"
}), _defineProperty(_defineMessages, "payoutFailure", {
  id: "app.payoutFailure",
  defaultMessage: "Oops! We are sorry!",
  description: "Uh-oh, the registration has failed."
}), _defineProperty(_defineMessages, "payoutFailureSubtitle", {
  id: "app.payoutFailureSubtitle",
  defaultMessage: "Connecting your bank account with the platform verification is failed.",
  description: "Please add a valid SSN."
}), _defineProperty(_defineMessages, "payoutFailureContent", {
  id: "app.payoutFailureContent",
  defaultMessage: 'Please try again to add your bank account with the platform by clickting the "Retry" option or Add a new payout account by clicking the "Add Payout Method".',
  description: "Please add a valid SSN."
}), _defineProperty(_defineMessages, "paymentCardNumber", {
  id: "app.paymentCardNumber",
  defaultMessage: "Card Number",
  description: "cardNumber"
}), _defineProperty(_defineMessages, "payoutType", {
  id: "app.payoutType",
  defaultMessage: "Account Type",
  description: "payout Account Type"
}), _defineProperty(_defineMessages, "payoutIndividual", {
  id: "app.payoutIndividual",
  defaultMessage: "Individual",
  description: "Individual text"
}), _defineProperty(_defineMessages, "payoutCompany", {
  id: "app.payoutCompany",
  defaultMessage: "Company",
  description: "Company text"
}), _defineProperty(_defineMessages, "payoutCompanyName", {
  id: "app.payoutCompanyName",
  defaultMessage: "Company Name",
  description: "Company text"
}), _defineProperty(_defineMessages, "payoutStripeInfo", {
  id: "app.payoutStripeInfo",
  defaultMessage: 'We use Stripe to make sure you get paid on time and to keep your personal bank and details secure. Click "Finish" to set up your payments on Stripe.',
  description: "Stripe text info"
}), _defineProperty(_defineMessages, "notReady", {
  id: "app.notReady",
  defaultMessage: "Not Ready",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "payoutVerify", {
  id: "app.payoutVerify",
  defaultMessage: "Verify",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "payoutRetry", {
  id: "app.payoutRetry",
  defaultMessage: "Retry",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "payoutVerifyStripeInfo", {
  id: "app.payoutVerifyStripeInfo",
  defaultMessage: "We use Stripe to make sure you get paid on time safe and secure. It requires additional verification to connect your bank account with the platform.",
  description: "Payout Method"
}), _defineProperty(_defineMessages, "reservationIsCompleted", {
  id: "app.reservationIsCompleted",
  defaultMessage: "Reservation is completed",
  description: "View message action"
}), _defineProperty(_defineMessages, "reservationIsCompletedDescription", {
  id: "app.reservationIsCompletedDescription",
  defaultMessage: "Reservation of your listing is completed.",
  description: "View message action"
}), _defineProperty(_defineMessages, "averagePricePerNight", {
  id: "app.averagePricePerNight",
  defaultMessage: "Average rate per night for your trip.",
  description: "Tooltip"
}), _defineProperty(_defineMessages, "exportCalendar", {
  id: "app.exportCalendar",
  defaultMessage: "Export Calendar",
  description: "exportCalendar"
}), _defineProperty(_defineMessages, "exportCalendarDescription", {
  id: "app.exportCalendarDescription",
  defaultMessage: "Copy and paste the link into other ICAL applications",
  description: "exportCalendar"
}), _defineProperty(_defineMessages, "importCalendar", {
  id: "app.importCalendar",
  defaultMessage: "Import a New Calendar",
  description: "importCalendar"
}), _defineProperty(_defineMessages, "importCalendarDesc", {
  id: "app.importCalendarDesc",
  defaultMessage: "Import other calendars you use and we’ll automatically keep this listing’s availability up-to-date.",
  description: "importCalendar"
}), _defineProperty(_defineMessages, "importCalendarDesc1", {
  id: "app.importCalendarDesc1",
  defaultMessage: "Calendar Address (URL)",
  description: "importCalendar"
}), _defineProperty(_defineMessages, "importCalendarDesc2", {
  id: "app.importCalendarDesc2",
  defaultMessage: "Calendar Address (URL)",
  description: "importCalendar"
}), _defineProperty(_defineMessages, "importCalendarBtn", {
  id: "app.importCalendarBtn",
  defaultMessage: "Import Calendar",
  description: "importCalendar"
}), _defineProperty(_defineMessages, "booked", {
  id: "app.booked",
  defaultMessage: "Booked",
  description: "Calendar"
}), _defineProperty(_defineMessages, "notAvailable", {
  id: "app.notAvailable",
  defaultMessage: "Not Available",
  description: "Calendar"
}), _defineProperty(_defineMessages, "discountStays", {
  id: "app.discountStays",
  defaultMessage: "Discount for longer stay",
  description: "Discount"
}), _defineProperty(_defineMessages, "yesText", {
  id: "app.yesText",
  defaultMessage: "Yes",
  description: "yes"
}), _defineProperty(_defineMessages, "noText", {
  id: "app.noText",
  defaultMessage: "No",
  description: "No"
}), _defineProperty(_defineMessages, "verificationDesc", {
  id: "app.verificationDesc",
  defaultMessage: "If it doesn't arrive, click cancel and try again.",
  description: "Verification"
}), _defineProperty(_defineMessages, "confirmedLabel", {
  id: "app.confirmedLabel",
  defaultMessage: "Confirmed",
  description: "Confirmed"
}), _defineProperty(_defineMessages, "confirmLabel", {
  id: "app.confirmLabel",
  defaultMessage: "Confirm",
  description: "Confirm"
}), _defineProperty(_defineMessages, "uploadSizedLabel", {
  id: "app.uploadSizedLabel",
  defaultMessage: "Maximum upload size:",
  description: "uploadSizedLabel"
}), _defineProperty(_defineMessages, "recepitInfoDesc", {
  id: "app.recepitInfoDesc",
  defaultMessage: "Average rate per night for your trip.",
  description: "Receipt Info"
}), _defineProperty(_defineMessages, "showMap", {
  id: "app.showMap",
  defaultMessage: "Show Map",
  description: "showMap"
}), _defineProperty(_defineMessages, "shareModal", {
  id: "app.shareModal",
  defaultMessage: "Modal",
  description: "shareModal"
}), _defineProperty(_defineMessages, "shareLabel", {
  id: "app.shareLabel",
  defaultMessage: "Share",
  description: "shareLabel"
}), _defineProperty(_defineMessages, "emailLabel", {
  id: "app.emailLabel",
  defaultMessage: "Email",
  description: "emailLabel"
}), _defineProperty(_defineMessages, "inLabel", {
  id: "app.inLabel",
  defaultMessage: "in",
  description: "inLabel"
}), _defineProperty(_defineMessages, "socialShareDesc", {
  id: "app.socialShareDesc",
  defaultMessage: "Check out this awesome listing on",
  description: "socialShareDesc"
}), _defineProperty(_defineMessages, "tripCompleted", {
  id: "app.tripCompleted",
  defaultMessage: "Trip is completed",
  description: "tripCompleted"
}), _defineProperty(_defineMessages, "countingSectionNumberOne", {
  id: "app.countingSectionNumberOne",
  defaultMessage: "2.9M",
  description: "2.9M"
}), _defineProperty(_defineMessages, "countingSectionNumberTwo", {
  id: "app.countingSectionNumberTwo",
  defaultMessage: "800K",
  description: "800K"
}), _defineProperty(_defineMessages, "countingSectionNumberThree", {
  id: "app.countingSectionNumberThree",
  defaultMessage: "14K",
  description: "14K"
}), _defineProperty(_defineMessages, "readyToEarn", {
  id: "app.readyToEarn",
  defaultMessage: "Ready to earn?",
  description: "Ready to earn?"
}), _defineProperty(_defineMessages, "readyToEarnDesc", {
  id: "app.readyToEarnDesc",
  defaultMessage: "Get started",
  description: "Ready to earn?"
}), _defineProperty(_defineMessages, "taxRate", {
  id: "app.taxRate",
  defaultMessage: "Tax Rate",
  description: "Tax Rate"
}), _defineProperty(_defineMessages, "taxRateLabel", {
  id: "app.taxRateLabel",
  defaultMessage: "Please add in the appropriate tax rate to cover any local and state taxes you may be responsible for.",
  description: "Tax Rate Label"
}), _defineProperty(_defineMessages, "taxRateInvalidError", {
  id: "app.taxRateInvalidError",
  defaultMessage: "Invalid tax rate. The tax rate must be between 1% and 99%.",
  description: "Invalid discount"
}), _defineProperty(_defineMessages, "emailAddressLabel", {
  id: "app.emailAddressLabel",
  defaultMessage: "Email address",
  description: "Email address"
}), _defineProperty(_defineMessages, "houseRulesLabel", {
  id: "app.houseRulesLabel",
  defaultMessage: "'s House Rules",
  description: "'s House Rules"
}), _defineProperty(_defineMessages, "contentLabel", {
  id: "app.contentLabel",
  defaultMessage: "Content",
  description: "Content"
}), _defineProperty(_defineMessages, "ChooseFooterCategory", {
  id: "app.ChooseFooterCategory",
  defaultMessage: "Choose Footer Category",
  description: "Choose Footer Category"
}), _defineProperty(_defineMessages, "metaTitleLabel", {
  id: "app.metaTitleLabel",
  defaultMessage: "Meta Title",
  description: "Meta Title"
}), _defineProperty(_defineMessages, "metaDescriptionLabel", {
  id: "app.metaDescriptionLabel",
  defaultMessage: "Meta Description",
  description: "Meta Description"
}), _defineProperty(_defineMessages, "pageTitleLabel", {
  id: "app.pageTitleLabel",
  defaultMessage: "Page Title",
  description: "Page Title"
}), _defineProperty(_defineMessages, "pageUrl", {
  id: "app.pageUrl",
  defaultMessage: "Page URL",
  description: "Page URL"
}), _defineProperty(_defineMessages, "pageUrlExample", {
  id: "app.pageUrlExample",
  defaultMessage: "Page URL  eg.(pageURL)",
  description: "Page URL  eg.(pageURL)"
}), _defineProperty(_defineMessages, "footerCategoryLabel", {
  id: "app.footerCategoryLabel",
  defaultMessage: "Footer Category",
  description: "Footer Category"
}), _defineProperty(_defineMessages, "pageLabel", {
  id: "app.pageLabel",
  defaultMessage: "/page/",
  description: "/page/"
}), _defineProperty(_defineMessages, "loadingLabel", {
  id: "app.loadingLabel",
  defaultMessage: "Loading...",
  description: "Loading..."
}), _defineProperty(_defineMessages, "imageLabel", {
  id: "app.imageLabel",
  defaultMessage: "Image",
  description: "Image"
}), _defineProperty(_defineMessages, "locationAddress", {
  id: "app.locationAddress",
  defaultMessage: "Location Address",
  description: "Location Address"
}), _defineProperty(_defineMessages, "subTitle", {
  id: "app.subTitle",
  defaultMessage: "Sub Title",
  description: "Sub Title"
}), _defineProperty(_defineMessages, "totalUsers", {
  id: "app.totalUsers",
  defaultMessage: "Total Users",
  description: "Total Users"
}), _defineProperty(_defineMessages, "last24Hours", {
  id: "app.last24Hours",
  defaultMessage: "Last 24 hours Users",
  description: "Last 24 hours Users"
}), _defineProperty(_defineMessages, "last30Days", {
  id: "app.last30Days",
  defaultMessage: "Last 30 days Users",
  description: "Last 30 days Users"
}), _defineProperty(_defineMessages, "last30DaysListing", {
  id: "app.last30DaysListing",
  defaultMessage: "Last 30 days Listings",
  description: "Last 30 days Listings"
}), _defineProperty(_defineMessages, "last24HoursListing", {
  id: "app.last24HoursListing",
  defaultMessage: "Last 24 hours Listings",
  description: "Last 24 hours Listings"
}), _defineProperty(_defineMessages, "totalListings", {
  id: "app.totalListings",
  defaultMessage: "Total Listings",
  description: "Total Listings"
}), _defineProperty(_defineMessages, "year2020", {
  id: "app.year2020",
  defaultMessage: "Year - 2020",
  description: "Year - 2020"
}), _defineProperty(_defineMessages, "totalReservation", {
  id: "app.totalReservation",
  defaultMessage: "Total Reservations",
  description: "Total Reservations"
}), _defineProperty(_defineMessages, "last24HoursReservation", {
  id: "app.last24HoursReservation",
  defaultMessage: "Last 24 hours Reservations",
  description: "Last 24 hours Reservations"
}), _defineProperty(_defineMessages, "last30DaysReservation", {
  id: "app.last30DaysReservation",
  defaultMessage: "Last 30 days  Reservations",
  description: "Last 30 days  Reservations"
}), _defineProperty(_defineMessages, "copyRightLabel", {
  id: "app.copyRightLabel",
  defaultMessage: "Copyright",
  description: "Copyright"
}), _defineProperty(_defineMessages, "copyRightLabelDesc", {
  id: "app.copyRightLabelDesc",
  defaultMessage: "All rights reserved.",
  description: "All rights reserved."
}), _defineProperty(_defineMessages, "logInLabel", {
  id: "app.logInLabel",
  defaultMessage: "Log in",
  description: "Log in"
}), _defineProperty(_defineMessages, "adminlogInLabel", {
  id: "app.adminlogInLabel",
  defaultMessage: "Admin Login",
  description: "Admin Login"
}), _defineProperty(_defineMessages, "listId", {
  id: "app.listId",
  defaultMessage: "List ID",
  description: "List ID"
}), _defineProperty(_defineMessages, "reviewContentLabel", {
  id: "app.reviewContentLabel",
  defaultMessage: "Review Content",
  description: "Review Content"
}), _defineProperty(_defineMessages, "goToMainSite", {
  id: "app.goToMainSite",
  defaultMessage: "Go To Main Site",
  description: "Go To Main Site"
}), _defineProperty(_defineMessages, "addNewLabel", {
  id: "app.addNewLabel",
  defaultMessage: "Add New",
  description: "Add New"
}), _defineProperty(_defineMessages, "editLabel", {
  id: "app.editLabel",
  defaultMessage: "Edit",
  description: "Edit"
}), _defineProperty(_defineMessages, "adminRoleLabel", {
  id: "app.adminRoleLabel",
  defaultMessage: "Admin Role",
  description: "Admin Role"
}), _defineProperty(_defineMessages, "adminUserLabel", {
  id: "app.adminUserLabel",
  defaultMessage: "Admin User",
  description: "Admin User"
}), _defineProperty(_defineMessages, "addPageLabel", {
  id: "app.addPageLabel",
  defaultMessage: "Add Page",
  description: "Add Page"
}), _defineProperty(_defineMessages, "enabledLabel", {
  id: "app.enabledLabel",
  defaultMessage: "Enabled",
  description: "Enabled"
}), _defineProperty(_defineMessages, "disabledLabel", {
  id: "app.disabledLabel",
  defaultMessage: "Disabled",
  description: "Disabled"
}), _defineProperty(_defineMessages, "enableLabel", {
  id: "app.enableLabel",
  defaultMessage: "Enable",
  description: "Enable"
}), _defineProperty(_defineMessages, "disableLabel", {
  id: "app.disableLabel",
  defaultMessage: "Disable",
  description: "Disable"
}), _defineProperty(_defineMessages, "addLabel", {
  id: "app.addLabel",
  defaultMessage: "Add",
  description: "Add"
}), _defineProperty(_defineMessages, "setBaseCurrency", {
  id: "app.setBaseCurrency",
  defaultMessage: "Set as base currency",
  description: "Set as base currency"
}), _defineProperty(_defineMessages, "dateOfBirthLabel", {
  id: "app.dateOfBirthLabel",
  defaultMessage: "Date Of Birth",
  description: "Date Of Birth"
}), _defineProperty(_defineMessages, "infoLabel", {
  id: "app.infoLabel",
  defaultMessage: "Info",
  description: "Info"
}), _defineProperty(_defineMessages, "titleAdminLabel", {
  id: "app.titleAdminLabel",
  defaultMessage: "Title",
  description: "Title"
}), _defineProperty(_defineMessages, "bannerImage", {
  id: "app.bannerImage",
  defaultMessage: "Banner Image",
  description: "Banner Image"
}), _defineProperty(_defineMessages, "descriptionAdminLabel", {
  id: "app.descriptionAdminLabel",
  defaultMessage: "Description",
  description: "Description"
}), _defineProperty(_defineMessages, "buttonLabel", {
  id: "app.buttonLabel",
  defaultMessage: "Button Label",
  description: "Button Label"
}), _defineProperty(_defineMessages, "bottomText", {
  id: "app.bottomText",
  defaultMessage: "Bottom Text",
  description: "Bottom Text"
}), _defineProperty(_defineMessages, "IconLabel", {
  id: "app.IconLabel",
  defaultMessage: "Icon",
  description: "Icon"
}), _defineProperty(_defineMessages, "manageLabel", {
  id: "app.manageLabel",
  defaultMessage: "Manage",
  description: "Manage"
}), _defineProperty(_defineMessages, "listSettings", {
  id: "app.listSettings",
  defaultMessage: "List Settings",
  description: "List Settings"
}), _defineProperty(_defineMessages, "reservationId", {
  id: "app.reservationId",
  defaultMessage: "Reservation ID",
  description: "Reservation ID"
}), _defineProperty(_defineMessages, "adminListTitle", {
  id: "app.adminListTitle",
  defaultMessage: "List Title",
  description: "List Title"
}), _defineProperty(_defineMessages, "codeLabel", {
  id: "app.codeLabel",
  defaultMessage: "Code",
  description: "Code"
}), _defineProperty(_defineMessages, "hostNameLabel", {
  id: "app.hostNameLabel",
  defaultMessage: "Host Name",
  description: "Host Name"
}), _defineProperty(_defineMessages, "payoutLabel", {
  id: "app.payoutLabel",
  defaultMessage: "Payout Amount",
  description: "Payout Amount"
}), _defineProperty(_defineMessages, "reservationStatus", {
  id: "app.reservationStatus",
  defaultMessage: "Reservation Status",
  description: "Reservation Status"
}), _defineProperty(_defineMessages, "payoutStatus", {
  id: "app.payoutStatus",
  defaultMessage: "Payout Status",
  description: "Payout Status"
}), _defineProperty(_defineMessages, "holdPayout", {
  id: "app.holdPayout",
  defaultMessage: "Hold Payout",
  description: "Hold Payout"
}), _defineProperty(_defineMessages, "live", {
  id: "app.live",
  defaultMessage: "Live",
  description: "Live"
}), _defineProperty(_defineMessages, "sandbox", {
  id: "app.sandbox",
  defaultMessage: "Sandbox",
  description: "Sandbox"
}), _defineProperty(_defineMessages, "apiUserId", {
  id: "app.apiUserId",
  defaultMessage: "API User Id",
  description: "API User Id"
}), _defineProperty(_defineMessages, "apiPassword", {
  id: "app.apiPassword",
  defaultMessage: "API Password",
  description: "API Password"
}), _defineProperty(_defineMessages, "apiSecret", {
  id: "app.apiSecret",
  defaultMessage: "API Secret",
  description: "API Secret"
}), _defineProperty(_defineMessages, "addId", {
  id: "app.addId",
  defaultMessage: "App Id",
  description: "App Id"
}), _defineProperty(_defineMessages, "paymentMode", {
  id: "app.paymentMode",
  defaultMessage: "Payment Mode",
  description: "Payment Mode"
}), _defineProperty(_defineMessages, "paymentStatus", {
  id: "app.paymentStatus",
  defaultMessage: "Payment Status",
  description: "Payment Status"
}), _defineProperty(_defineMessages, "paymentName", {
  id: "app.paymentName",
  defaultMessage: "Payment Name",
  description: "Payment Name"
}), _defineProperty(_defineMessages, "addPopularLocation", {
  id: "app.addPopularLocation",
  defaultMessage: "Add Popular Location",
  description: "Add Popular Location"
}), _defineProperty(_defineMessages, "profilePicture", {
  id: "app.profilePicture",
  defaultMessage: "Profile Picture",
  description: "Profile Picture"
}), _defineProperty(_defineMessages, "language", {
  id: "app.language",
  defaultMessage: "Language",
  description: "Language"
}), _defineProperty(_defineMessages, "bioInfo", {
  id: "app.bioInfo",
  defaultMessage: "Bio Info",
  description: "Bio Info"
}), _defineProperty(_defineMessages, "userDeletedLabel", {
  id: "app.userDeletedLabel",
  defaultMessage: "User Deleted",
  description: "User Deleted"
}), _defineProperty(_defineMessages, "payoutRefund", {
  id: "app.payoutRefund",
  defaultMessage: "Payout/Refund",
  description: "Payout/Refund"
}), _defineProperty(_defineMessages, "noPayoutMethod", {
  id: "app.noPayoutMethod",
  defaultMessage: "No Payout method",
  description: "No Payout method"
}), _defineProperty(_defineMessages, "closedLabel", {
  id: "app.closedLabel",
  defaultMessage: "Closed",
  description: "Closed"
}), _defineProperty(_defineMessages, "processingLabel", {
  id: "app.processingLabel",
  defaultMessage: "Processing...",
  description: "Processing..."
}), _defineProperty(_defineMessages, "completedLabel", {
  id: "app.completedLabel",
  defaultMessage: "Completed",
  description: "Completed"
}), _defineProperty(_defineMessages, "transactionNotfound", {
  id: "app.transactionNotfound",
  defaultMessage: "Transaction not found",
  description: "Transaction not found"
}), _defineProperty(_defineMessages, "notEligible", {
  id: "app.notEligible",
  defaultMessage: "Not Eligible",
  description: "Not Eligible"
}), _defineProperty(_defineMessages, "proceedRefund", {
  id: "app.proceedRefund",
  defaultMessage: "Proceed Refund",
  description: "Proceed Refund"
}), _defineProperty(_defineMessages, "viewLabel", {
  id: "app.viewLabel",
  defaultMessage: "View",
  description: "View"
}), _defineProperty(_defineMessages, "exportDataIntoCSV", {
  id: "app.exportDataIntoCSV",
  defaultMessage: "Export Data into CSV",
  description: "Export Data into CSV"
}), _defineProperty(_defineMessages, "receiverLabel", {
  id: "app.receiverLabel",
  defaultMessage: "Receiver",
  description: "Receiver"
}), _defineProperty(_defineMessages, "minimumPrice", {
  id: "app.minimumPrice",
  defaultMessage: "Minimum Price",
  description: "Minimum Price"
}), _defineProperty(_defineMessages, "maximumPrice", {
  id: "app.maximumPrice",
  defaultMessage: "Maximum Price",
  description: "Maximum Price"
}), _defineProperty(_defineMessages, "priceRangeCurrency", {
  id: "app.priceRangeCurrency",
  defaultMessage: "Price Range Currency",
  description: "Price Range Currency"
}), _defineProperty(_defineMessages, "guestFeeType", {
  id: "app.guestFeeType",
  defaultMessage: "Guest Fee Type",
  description: "Guest Fee Type"
}), _defineProperty(_defineMessages, "fixedPrice", {
  id: "app.fixedPrice",
  defaultMessage: "Fixed Price",
  description: "Fixed Price"
}), _defineProperty(_defineMessages, "percentage", {
  id: "app.percentage",
  defaultMessage: "Percentage",
  description: "Percentage"
}), _defineProperty(_defineMessages, "guestServiceFee", {
  id: "app.guestServiceFee",
  defaultMessage: "Guest Service Fee",
  description: "Guest Service Fee"
}), _defineProperty(_defineMessages, "guestServiceFeePlacehold", {
  id: "app.guestServiceFeePlacehold",
  defaultMessage: "Amount/Percentage",
  description: "Amount/Percentage"
}), _defineProperty(_defineMessages, "hostFeeType", {
  id: "app.hostFeeType",
  defaultMessage: "Host Fee Type",
  description: "Host Fee Type"
}), _defineProperty(_defineMessages, "hostServiceFeeType", {
  id: "app.hostServiceFeeType",
  defaultMessage: "Host Service Fee",
  description: "Host Service Fee"
}), _defineProperty(_defineMessages, "submitLabel", {
  id: "app.submitLabel",
  defaultMessage: "Submit",
  description: "Submit"
}), _defineProperty(_defineMessages, "add", {
  id: "app.add",
  defaultMessage: "Add",
  description: "Add Button"
}), _defineProperty(_defineMessages, "update", {
  id: "app.update",
  defaultMessage: "Update",
  description: "Update Button"
}), _defineProperty(_defineMessages, "addItemNew", {
  id: "app.addItemNew",
  defaultMessage: "Item name",
  description: "Item name"
}), _defineProperty(_defineMessages, "addNewDescription", {
  id: "app.addNewDescription",
  defaultMessage: "Item description",
  description: "Item description"
}), _defineProperty(_defineMessages, "addOtherItem", {
  id: "app.addOtherItem",
  defaultMessage: "Other Item name",
  description: "Other Item name"
}), _defineProperty(_defineMessages, "startValue", {
  id: "app.startValue",
  defaultMessage: "Start value",
  description: "Start value"
}), _defineProperty(_defineMessages, "endValue", {
  id: "app.endValue",
  defaultMessage: "End value",
  description: "Add end value here ...."
}), _defineProperty(_defineMessages, "enable", {
  id: "app.enable",
  defaultMessage: "Enable",
  description: "Enable"
}), _defineProperty(_defineMessages, "disable", {
  id: "app.disable",
  defaultMessage: "Disable",
  description: "Disable"
}), _defineProperty(_defineMessages, "itemNameIsRequired", {
  id: "app.itemNameIsRequired",
  defaultMessage: "Item name is required",
  description: "itemNameIsRequired"
}), _defineProperty(_defineMessages, "otherItemNameIsRequired", {
  id: "app.otherItemNameIsRequired",
  defaultMessage: "Other item name is required",
  description: "otherItemNameIsRequired"
}), _defineProperty(_defineMessages, "startValueIsInvalid", {
  id: "app.startValueIsInvalid",
  defaultMessage: "Invalid Start value, provide a valid number",
  description: "startValueIsInvalid"
}), _defineProperty(_defineMessages, "endValueIsInvalid", {
  id: "app.endValueIsInvalid",
  defaultMessage: "Invalid End value, provide a valid number",
  description: "endValueIsInvalid"
}), _defineProperty(_defineMessages, "endValueGreater", {
  id: "app.endValueGreater",
  defaultMessage: "End value must be greater than Start value",
  description: "endValueGreater"
}), _defineProperty(_defineMessages, "somethingWentWrong", {
  id: "app.somethingWentWrong",
  defaultMessage: "Sorry, something went wrong. Please try again",
  description: "Wrong went wrong"
}), _defineProperty(_defineMessages, "descriptionEmpty", {
  id: "app.descriptionEmpty",
  defaultMessage: "Empty spaces are not allowed",
  description: "Wrong went wrong"
}), _defineProperty(_defineMessages, "blankSpace", {
  id: "app.blankSpace",
  defaultMessage: "Input is Blank",
  description: "blankSpace"
}), _defineProperty(_defineMessages, "exceedLimit", {
  id: "app.exceedLimit",
  defaultMessage: "Limit Exceeded",
  description: "exceedLimit"
}), _defineProperty(_defineMessages, "logoLabel", {
  id: "app.logoLabel",
  defaultMessage: "Logo",
  description: "Logo"
}), _defineProperty(_defineMessages, "HomelogoLabel", {
  id: "app.HomelogoLabel",
  defaultMessage: "Home Page Logo",
  description: "Home Page Logo"
}), _defineProperty(_defineMessages, "EmaillogoLabel", {
  id: "app.EmaillogoLabel",
  defaultMessage: "Email Logo",
  description: "Email Logo"
}), _defineProperty(_defineMessages, "logoHeightLabel", {
  id: "app.logoHeightLabel",
  defaultMessage: "Logo Height",
  description: "Logo Height"
}), _defineProperty(_defineMessages, "logoWidthLabel", {
  id: "app.logoWidthLabel",
  defaultMessage: "Logo Width",
  description: "Logo Width"
}), _defineProperty(_defineMessages, "homelogoHeight", {
  id: "app.homelogoHeight",
  defaultMessage: "Home Logo Height",
  description: "Home Logo Height"
}), _defineProperty(_defineMessages, "homelogoWidth", {
  id: "app.homelogoWidth",
  defaultMessage: "Home Logo Width",
  description: "Home Logo Width"
}), _defineProperty(_defineMessages, "siteName", {
  id: "app.siteName",
  defaultMessage: "Site Name",
  description: "Site Name"
}), _defineProperty(_defineMessages, "siteTitle", {
  id: "app.siteTitle",
  defaultMessage: "Site Title",
  description: "Site Title"
}), _defineProperty(_defineMessages, "metaKeywordLabel", {
  id: "app.metaKeywordLabel",
  defaultMessage: "Meta Keyword",
  description: "Meta Keyword"
}), _defineProperty(_defineMessages, "metaKeywordLabelDesc", {
  id: "app.metaKeywordLabelDesc",
  defaultMessage: "Meta Description",
  description: "Meta Description"
}), _defineProperty(_defineMessages, "facebookURL", {
  id: "app.facebookURL",
  defaultMessage: "Facebook URL",
  description: "Facebook URL"
}), _defineProperty(_defineMessages, "twitterURL", {
  id: "app.twitterURL",
  defaultMessage: "Twitter URL",
  description: "Twitter URL"
}), _defineProperty(_defineMessages, "instagramURL", {
  id: "app.instagramURL",
  defaultMessage: "Instagram URL",
  description: "Instagram URL"
}), _defineProperty(_defineMessages, "homePageLayout", {
  id: "app.homePageLayout",
  defaultMessage: "Home Page Layout",
  description: "Home Page Layout"
}), _defineProperty(_defineMessages, "homePageLayoutDesc", {
  id: "app.homePageLayoutDesc",
  defaultMessage: "Banner Text with Image Slider Layout",
  description: "Banner Text with Image Slider Layout"
}), _defineProperty(_defineMessages, "homePageLayoutDesc1", {
  id: "app.homePageLayoutDesc1",
  defaultMessage: "Banner Text Only Layout",
  description: "Banner Text Only Layout"
}), _defineProperty(_defineMessages, "homePageLayoutDesc2", {
  id: "app.homePageLayoutDesc2",
  defaultMessage: "Banner Text Layout with Detailed Search form",
  description: "Banner Text Layout with Detailed Search form"
}), _defineProperty(_defineMessages, "homePageLayoutDesc3", {
  id: "app.homePageLayoutDesc3",
  defaultMessage: "Single Banner Image Layout with Detailed Search form",
  description: "Single Banner Image Layout with Detailed Search form"
}), _defineProperty(_defineMessages, "phoneNumberFormat", {
  id: "app.phoneNumberFormat",
  defaultMessage: "Phone Number Format",
  description: "Phone Number Format"
}), _defineProperty(_defineMessages, "twilioSMS", {
  id: "app.twilioSMS",
  defaultMessage: "Twilio SMS",
  description: "Twilio SMS"
}), _defineProperty(_defineMessages, "normalPhoneNumber", {
  id: "app.normalPhoneNumber",
  defaultMessage: "Normal Phone Number",
  description: "Normal Phone Number"
}), _defineProperty(_defineMessages, "appAvailable", {
  id: "app.appAvailable",
  defaultMessage: "App Available",
  description: "App Available"
}), _defineProperty(_defineMessages, "playStoreUrl", {
  id: "app.playStoreUrl",
  defaultMessage: "Play store URL",
  description: "Play store URL"
}), _defineProperty(_defineMessages, "appStoreUrl", {
  id: "app.appStoreUrl",
  defaultMessage: "App store URL",
  description: "App store URL"
}), _defineProperty(_defineMessages, "emailIdLabel", {
  id: "app.emailIdLabel",
  defaultMessage: "Email Id",
  description: "Email Id"
}), _defineProperty(_defineMessages, "mobileNumberLabel", {
  id: "app.mobileNumberLabel",
  defaultMessage: "Mobile Number",
  description: "Mobile Number"
}), _defineProperty(_defineMessages, "headerTitle", {
  id: "app.headerTitle",
  defaultMessage: "Header Title",
  description: "Header Title"
}), _defineProperty(_defineMessages, "headerTitleContent", {
  id: "app.headerTitleContent",
  defaultMessage: "Header Content",
  description: "Header Content"
}), _defineProperty(_defineMessages, "isActive", {
  id: "app.isActive",
  defaultMessage: "Is Active",
  description: "Is Active"
}), _defineProperty(_defineMessages, "blockTitleLabel", {
  id: "app.blockTitleLabel",
  defaultMessage: "Block Title",
  description: "Block Title"
}), _defineProperty(_defineMessages, "blockContentLabel", {
  id: "app.blockContentLabel",
  defaultMessage: "Block Content",
  description: "Block Content"
}), _defineProperty(_defineMessages, "blockImageLabel", {
  id: "app.blockImageLabel",
  defaultMessage: "Block Image",
  description: "Block Image"
}), _defineProperty(_defineMessages, "aboutUsLabel", {
  id: "app.aboutUsLabel",
  defaultMessage: "About Us",
  description: "About Us"
}), _defineProperty(_defineMessages, "setToEnable", {
  id: "app.setToEnable",
  defaultMessage: "Set to enable",
  description: "Set to enable"
}), _defineProperty(_defineMessages, "setToDisable", {
  id: "app.setToDisable",
  defaultMessage: "Set to disable",
  description: "Set to disable"
}), _defineProperty(_defineMessages, "cancelledLabel", {
  id: "app.cancelledLabel",
  defaultMessage: "Cancelled by",
  description: "Cancelled by"
}), _defineProperty(_defineMessages, "bookingType", {
  id: "app.bookingType",
  defaultMessage: "Booking Type",
  description: "Booking Type"
}), _defineProperty(_defineMessages, "amountPaid", {
  id: "app.amountPaid",
  defaultMessage: "Amount Paid",
  description: "Amount Paid"
}), _defineProperty(_defineMessages, "guestName", {
  id: "app.guestName",
  defaultMessage: "Guest Name",
  description: "Guest Name"
}), _defineProperty(_defineMessages, "guestPhoneNumber", {
  id: "app.guestPhoneNumber",
  defaultMessage: "Guest Phone Number",
  description: "Guest Phone Number"
}), _defineProperty(_defineMessages, "guestEmail", {
  id: "app.guestEmail",
  defaultMessage: "Guest Email",
  description: "Guest Email"
}), _defineProperty(_defineMessages, "hostName", {
  id: "app.hostName",
  defaultMessage: "Host Name",
  description: "Host Name"
}), _defineProperty(_defineMessages, "hostPhoneNumber", {
  id: "app.hostPhoneNumber",
  defaultMessage: "Host Phone Number",
  description: "Host Phone Number"
}), _defineProperty(_defineMessages, "hostEmail", {
  id: "app.hostEmail",
  defaultMessage: "Host Email",
  description: "Host Email"
}), _defineProperty(_defineMessages, "cancelDate", {
  id: "app.cancelDate",
  defaultMessage: "Cancel Date",
  description: "Cancel Date"
}), _defineProperty(_defineMessages, "hostBannerTitle", {
  id: "app.hostBannerTitle",
  defaultMessage: "Host Banner Title",
  description: "Host Banner Title"
}), _defineProperty(_defineMessages, "hostBannerLabel", {
  id: "app.hostBannerLabel",
  defaultMessage: "Host Banner",
  description: "Host Banner"
}), _defineProperty(_defineMessages, "whyBlockTitleLabel", {
  id: "app.whyBlockTitleLabel",
  defaultMessage: "Why Block Title",
  description: "Why Block Title"
}), _defineProperty(_defineMessages, "whyBlockContentLabel", {
  id: "app.whyBlockContentLabel",
  defaultMessage: "Why Block Content",
  description: "Why Block Content"
}), _defineProperty(_defineMessages, "hostingBlockTitleHeading", {
  id: "app.hostingBlockTitleHeading",
  defaultMessage: "Hosting Block Title Heading",
  description: "Hosting Block Title Heading"
}), _defineProperty(_defineMessages, "hostingBlockTitleLabel", {
  id: "app.hostingBlockTitleLabel",
  defaultMessage: "Hosting Block Title",
  description: "Hosting Block Title"
}), _defineProperty(_defineMessages, "hostingBlockContentLabel", {
  id: "app.hostingBlockContentLabel",
  defaultMessage: "Hosting Block Content",
  description: "Hosting Block Content"
}), _defineProperty(_defineMessages, "coverSectionTitleLabel", {
  id: "app.coverSectionTitleLabel",
  defaultMessage: "Cover Section Title",
  description: "Cover Section Title"
}), _defineProperty(_defineMessages, "coverSectionContentLabel", {
  id: "app.coverSectionContentLabel",
  defaultMessage: "Cover Section Content",
  description: "Cover Section Content"
}), _defineProperty(_defineMessages, "coverSectionFeatureLabel", {
  id: "app.coverSectionFeatureLabel",
  defaultMessage: "Cover Section Feature",
  description: "Cover Section Feature"
}), _defineProperty(_defineMessages, "coverSectionBannerLabel", {
  id: "app.coverSectionBannerLabel",
  defaultMessage: "Cover Section Banner",
  description: "Cover Section Banner"
}), _defineProperty(_defineMessages, "paymentTitleHeadingLabel", {
  id: "app.paymentTitleHeadingLabel",
  defaultMessage: "Payment Title Heading",
  description: "Payment Title Heading"
}), _defineProperty(_defineMessages, "paymentTitleLabel", {
  id: "app.paymentTitleLabel",
  defaultMessage: "Payment Title",
  description: "Payment Title"
}), _defineProperty(_defineMessages, "paymentContentLabel", {
  id: "app.paymentContentLabel",
  defaultMessage: "Payment Content",
  description: "Payment Content"
}), _defineProperty(_defineMessages, "quoteSectionTitle", {
  id: "app.quoteSectionTitle",
  defaultMessage: "Quote Section Title",
  description: "Quote Section Title"
}), _defineProperty(_defineMessages, "quoteSectionContent", {
  id: "app.quoteSectionContent",
  defaultMessage: "Quote Section Content",
  description: "Quote Section Content"
}), _defineProperty(_defineMessages, "quoteSectionButton", {
  id: "app.quoteSectionButton",
  defaultMessage: "Quote Section Button",
  description: "Quote Section Button"
}), _defineProperty(_defineMessages, "quoteSectionBanner", {
  id: "app.quoteSectionBanner",
  defaultMessage: "Quote Section Banner",
  description: "Quote Section Banner"
}), _defineProperty(_defineMessages, "faqBlockTitle", {
  id: "app.faqBlockTitle",
  defaultMessage: "FAQ Block Title",
  description: "FAQ Block Title"
}), _defineProperty(_defineMessages, "faqBlockContent", {
  id: "app.faqBlockContent",
  defaultMessage: "FAQ Block Content",
  description: "FAQ Block Content"
}), _defineProperty(_defineMessages, "siteSettings", {
  id: "app.siteSettings",
  defaultMessage: "Site Settings",
  description: "Site Settings"
}), _defineProperty(_defineMessages, "manageAdmin", {
  id: "app.manageAdmin",
  defaultMessage: "Manage Admins",
  description: "Manage Admins"
}), _defineProperty(_defineMessages, "manageAdminUsers", {
  id: "app.manageAdminUsers",
  defaultMessage: "Manage Admin Users",
  description: "Manage Admin Users"
}), _defineProperty(_defineMessages, "manageAdminRoles", {
  id: "app.manageAdminRoles",
  defaultMessage: "Manage Admin Roles",
  description: "Manage Admin Roles"
}), _defineProperty(_defineMessages, "manageUser", {
  id: "app.manageUser",
  defaultMessage: "Manage Users",
  description: "Manage Users"
}), _defineProperty(_defineMessages, "manageReservations", {
  id: "app.manageReservations",
  defaultMessage: "Manage Reservations",
  description: "Manage Reservations"
}), _defineProperty(_defineMessages, "reviewManagement", {
  id: "app.reviewManagement",
  defaultMessage: "Reviews Management",
  description: "Reviews Management"
}), _defineProperty(_defineMessages, "adminReviews", {
  id: "app.adminReviews",
  defaultMessage: "Admin Reviews",
  description: "Admin Reviews"
}), _defineProperty(_defineMessages, "welcomeAdmin", {
  id: "app.welcomeAdmin",
  defaultMessage: "Welcome, Admin",
  description: "Welcome, Admin"
}), _defineProperty(_defineMessages, "manageReviwes", {
  id: "app.manageReviwes",
  defaultMessage: "Manage Reviews",
  description: "Manage Reviews"
}), _defineProperty(_defineMessages, "writeReviwes", {
  id: "app.writeReviwes",
  defaultMessage: "Write a review",
  description: "Write Review"
}), _defineProperty(_defineMessages, "manageServiceFee", {
  id: "app.manageServiceFee",
  defaultMessage: "Manage Service Fee",
  description: "Manage Service Fee"
}), _defineProperty(_defineMessages, "reportManagement", {
  id: "app.reportManagement",
  defaultMessage: "Report Management",
  description: "Report Management"
}), _defineProperty(_defineMessages, "managePayout", {
  id: "app.managePayout",
  defaultMessage: "Manage Payout",
  description: "Manage Payout"
}), _defineProperty(_defineMessages, "manageCurrency", {
  id: "app.manageCurrency",
  defaultMessage: "Manage Currency",
  description: "Manage Currency"
}), _defineProperty(_defineMessages, "searchSettings", {
  id: "app.searchSettings",
  defaultMessage: "Search Settings",
  description: "Search Settings"
}), _defineProperty(_defineMessages, "changePasswordLabel", {
  id: "app.changePasswordLabel",
  defaultMessage: "Change Password",
  description: "Change Password"
}), _defineProperty(_defineMessages, "staticContentManagement", {
  id: "app.staticContentManagement",
  defaultMessage: "Static Content Management",
  description: "Static Content Management"
}), _defineProperty(_defineMessages, "staticContentManagement", {
  id: "app.staticContentManagement",
  defaultMessage: "Static Content Management",
  description: "Static Content Management"
}), _defineProperty(_defineMessages, "contentManagementLabel", {
  id: "app.contentManagementLabel",
  defaultMessage: "Content Management",
  description: "Content Management"
}), _defineProperty(_defineMessages, "maximumNightsLabel", {
  id: "app.maximumNightsLabel",
  defaultMessage: "Maximum Nights",
  description: "Maximum Nights"
}), _defineProperty(_defineMessages, "minimumNightsLabel", {
  id: "app.minimumNightsLabel",
  defaultMessage: "Minimum Nights",
  description: "Minimum Nights"
}), _defineProperty(_defineMessages, "bookingNoticeTime", {
  id: "app.bookingNoticeTime",
  defaultMessage: "Booking Notice Time",
  description: "Booking Notice Time"
}), _defineProperty(_defineMessages, "reviewHowGuestBook", {
  id: "app.reviewHowGuestBook",
  defaultMessage: "Review How Guests Book",
  description: "Review How Guests Book"
}), _defineProperty(_defineMessages, "listSettingStep", {
  id: "app.listSettingStep",
  defaultMessage: "List Settings for Step",
  description: "List Settings for Step"
}), _defineProperty(_defineMessages, "essentialAmenities", {
  id: "app.essentialAmenities",
  defaultMessage: "Essential Amenities",
  description: "Essential Amenities"
}), _defineProperty(_defineMessages, "bathroomType", {
  id: "app.bathroomType",
  defaultMessage: "Bathroom Type",
  description: "Bathroom Type"
}), _defineProperty(_defineMessages, "bedTypeLabel", {
  id: "app.bedTypeLabel",
  defaultMessage: "Bed Type",
  description: "Bed Type"
}), _defineProperty(_defineMessages, "bedRoomsLabel", {
  id: "app.bedRoomsLabel",
  defaultMessage: "Bed Rooms",
  description: "Bed Rooms"
}), _defineProperty(_defineMessages, "buildingSize", {
  id: "app.buildingSize",
  defaultMessage: "Building Size",
  description: "Building Size"
}), _defineProperty(_defineMessages, "houseTypeLabel", {
  id: "app.houseTypeLabel",
  defaultMessage: "House Type",
  description: "House Type"
}), _defineProperty(_defineMessages, "personCapacity", {
  id: "app.personCapacity",
  defaultMessage: "Person Capacity",
  description: "Person Capacity"
}), _defineProperty(_defineMessages, "whyBecomeHostPage", {
  id: "app.whyBecomeHostPage",
  defaultMessage: "Why Become Host Page",
  description: "Why Become Host Page"
}), _defineProperty(_defineMessages, "homeBannerLabel", {
  id: "app.homeBannerLabel",
  defaultMessage: "Home Banner",
  description: "Home Banner"
}), _defineProperty(_defineMessages, "homeOffer", {
  id: "app.homeOffer",
  defaultMessage: "Home Offer",
  description: "Home Banner"
}), _defineProperty(_defineMessages, "fieldCar", {
  id: "app.fieldCar",
  defaultMessage: "Car",
  description: "Car"
}), _defineProperty(_defineMessages, "staticInfoBlock", {
  id: "app.staticInfoBlock",
  defaultMessage: "Static Info Block",
  description: "Static Info Block"
}), _defineProperty(_defineMessages, "managePopularLocations", {
  id: "app.managePopularLocations",
  defaultMessage: "Manage Popular Locations",
  description: "Manage Popular Locations"
}), _defineProperty(_defineMessages, "footerBlockLabel", {
  id: "app.footerBlockLabel",
  defaultMessage: "Footer Block",
  description: "Footer Block"
}), _defineProperty(_defineMessages, "imageBannerLabel", {
  id: "app.imageBannerLabel",
  defaultMessage: "Image Banner",
  description: "Image Banner"
}), _defineProperty(_defineMessages, "bannerCaptionLabel", {
  id: "app.bannerCaptionLabel",
  defaultMessage: "Banner Caption",
  description: "Banner Caption"
}), _defineProperty(_defineMessages, "homePageSettings", {
  id: "app.homePageSettings",
  defaultMessage: "Home Page Settings",
  description: "Home Page Settings"
}), _defineProperty(_defineMessages, "roleLabel", {
  id: "app.roleLabel",
  defaultMessage: "Role",
  description: "Role"
}), _defineProperty(_defineMessages, "adminUserDesc", {
  id: "app.adminUserDesc",
  defaultMessage: "Provide new password only. Ignore this field to use the existing password for this user.",
  description: "Provide new password only. Ignore this field to use the existing password for this user."
}), _defineProperty(_defineMessages, "selectroleLabel", {
  id: "app.selectroleLabel",
  defaultMessage: "Select Role",
  description: "Select Role"
}), _defineProperty(_defineMessages, "roleNameLabel", {
  id: "app.roleNameLabel",
  defaultMessage: "Role Name",
  description: "Role Name"
}), _defineProperty(_defineMessages, "privilagesLabel", {
  id: "app.privilagesLabel",
  defaultMessage: "Privileges",
  description: "Privileges"
}), _defineProperty(_defineMessages, "adminTitleLabel", {
  id: "app.adminTitleLabel",
  defaultMessage: "Title",
  description: "Title"
}), _defineProperty(_defineMessages, "invalidPageUrl", {
  id: "app.invalidPageUrl",
  defaultMessage: "Invalid Page URL",
  description: "Invalid Page URL"
}), _defineProperty(_defineMessages, "loggedIn", {
  id: "app.loggedIn",
  defaultMessage: "You are already logged in!",
  description: "You are already Logged-in"
}), _defineProperty(_defineMessages, "userLoggedIn", {
  id: "app.userLoggedIn",
  defaultMessage: "You are already logged in as User, please logout in the main site to continue!",
  description: "You are already Logged-in as user"
}), _defineProperty(_defineMessages, "provideListId", {
  id: "app.provideListId",
  defaultMessage: "Provide list ID",
  description: "Provide list ID"
}), _defineProperty(_defineMessages, "onlyNumericKey", {
  id: "app.onlyNumericKey",
  defaultMessage: "Only numeric values are allowed",
  description: "Only numeric values are allowed"
}), _defineProperty(_defineMessages, "noRecordFound", {
  id: "app.noRecordFound",
  defaultMessage: "No matching records found.",
  description: "No matching records found."
}), _defineProperty(_defineMessages, "ratingReviewLabel", {
  id: "app.ratingReviewLabel",
  defaultMessage: "Review Rating",
  description: "Review Rating"
}), _defineProperty(_defineMessages, "deleteReviewLabel", {
  id: "app.deleteReviewLabel",
  defaultMessage: "Deleting Review",
  description: "Deleting Review"
}), _defineProperty(_defineMessages, "exceedLimit255", {
  id: "app.exceedLimit255",
  defaultMessage: "Maximum allowed character is 255.",
  description: "exceedLimit"
}), _defineProperty(_defineMessages, "idLabel", {
  id: "app.idLabel",
  defaultMessage: "ID",
  description: "ID"
}), _defineProperty(_defineMessages, "emailBlankSpaceAdmin", {
  id: "app.emailBlankSpaceAdmin",
  defaultMessage: "Email should not be blank spaces",
  description: "email address error"
}), _defineProperty(_defineMessages, "passwordInvalidAdmin", {
  id: "app.passwordInvalidAdmin",
  defaultMessage: "Password should be minimum 8 characters.",
  description: "Password minimum characters error"
}), _defineProperty(_defineMessages, "passwordBlankSpaceAdmin", {
  id: "app.passwordBlankSpaceAdmin",
  defaultMessage: "Password should not be blank space.",
  description: "Password error"
}), _defineProperty(_defineMessages, "sNoLabel", {
  id: "app.sNoLabel",
  defaultMessage: "S.No",
  description: "S.No"
}), _defineProperty(_defineMessages, "deletingPageDetails", {
  id: "app.deletingPageDetails",
  defaultMessage: "Deleting Page Details",
  description: "Deleting Page Details"
}), _defineProperty(_defineMessages, "changeAdminPasswordDesc", {
  id: "app.changeAdminPasswordDesc",
  defaultMessage: "Leave email address field blank if you don't want to change the email",
  description: "Leave email address field blank if you don't want to change the email"
}), _defineProperty(_defineMessages, "passWordMismatch", {
  id: "app.passWordMismatch",
  defaultMessage: "Password is mismatching with Confirm password",
  description: "Password is mismatching with Confirm password"
}), _defineProperty(_defineMessages, "passWordMinimum", {
  id: "app.passWordMinimum",
  defaultMessage: "Password must be minimum 8 characters",
  description: "Password must be minimum 8 characters"
}), _defineProperty(_defineMessages, "symbolLabel", {
  id: "app.symbolLabel",
  defaultMessage: "Symbol",
  description: "Symbol"
}), _defineProperty(_defineMessages, "baseCurrencyLabel", {
  id: "app.baseCurrencyLabel",
  defaultMessage: "Base Currency",
  description: "Base Currency"
}), _defineProperty(_defineMessages, "setEnableDisable", {
  id: "app.setEnableDisable",
  defaultMessage: "Set Enable / Disable",
  description: "Set Enable / Disable"
}), _defineProperty(_defineMessages, "setCurrencyLabel", {
  id: "app.setCurrencyLabel",
  defaultMessage: "Set Base Currency",
  description: "Set Base Currency"
}), _defineProperty(_defineMessages, "allowedPaymentCurrency", {
  id: "app.allowedPaymentCurrency",
  defaultMessage: "Allowed Payment Currency",
  description: "Allowed Payment Currency"
}), _defineProperty(_defineMessages, "hostEMailLabel", {
  id: "app.hostEMailLabel",
  defaultMessage: "Host Email",
  description: "Host Email"
}), _defineProperty(_defineMessages, "RequestedFiles", {
  id: "app.RequestedFiles",
  defaultMessage: "Requested Files",
  description: "Requested Files"
}), _defineProperty(_defineMessages, "actionLabel", {
  id: "app.actionLabel",
  defaultMessage: "Action",
  description: "Action"
}), _defineProperty(_defineMessages, "createdDate", {
  id: "app.createdDate",
  defaultMessage: "Created Date",
  description: "Created Date"
}), _defineProperty(_defineMessages, "stateLabel", {
  id: "app.stateLabel",
  defaultMessage: "State",
  description: "State"
}), _defineProperty(_defineMessages, "recommendLabel", {
  id: "app.recommendLabel",
  defaultMessage: "Recommend",
  description: "Recommend"
}), _defineProperty(_defineMessages, "setLabel", {
  id: "app.setLabel",
  defaultMessage: "Set",
  description: "Set"
}), _defineProperty(_defineMessages, "publishedLabel", {
  id: "app.publishedLabel",
  defaultMessage: "Published",
  description: "Published"
}), _defineProperty(_defineMessages, "deletingListingTitle", {
  id: "app.deletingListingTitle",
  defaultMessage: "Deleting Listing",
  description: "Deleting Listing"
}), _defineProperty(_defineMessages, "settingsIDLabel", {
  id: "app.settingsIDLabel",
  defaultMessage: "Settings ID",
  description: "Settings ID"
}), _defineProperty(_defineMessages, "operationLabel", {
  id: "app.operationLabel",
  defaultMessage: "Operation",
  description: "Operation"
}), _defineProperty(_defineMessages, "payoutsLabel", {
  id: "app.payoutsLabel",
  defaultMessage: "Payouts",
  description: "Payouts"
}), _defineProperty(_defineMessages, "dataMissing", {
  id: "app.dataMissing",
  defaultMessage: "List is missing",
  description: "List is missing"
}), _defineProperty(_defineMessages, "hostEmailIdLabel", {
  id: "app.hostEmailIdLabel",
  defaultMessage: "Host Email ID",
  description: "Host Email ID"
}), _defineProperty(_defineMessages, "guestEmailIdLabel", {
  id: "app.guestEmailIdLabel",
  defaultMessage: "Guest Email ID",
  description: "Guest Email ID"
}), _defineProperty(_defineMessages, "messagesLabel", {
  id: "app.messagesLabel",
  defaultMessage: "Messages",
  description: "Messages"
}), _defineProperty(_defineMessages, "deletePopularLocationLabel", {
  id: "app.deletePopularLocationLabel",
  defaultMessage: "Deleting Popular Location",
  description: "Deleting Popular Location"
}), _defineProperty(_defineMessages, "reporterName", {
  id: "app.reporterName",
  defaultMessage: "Reporter Name",
  description: "Reporter Name"
}), _defineProperty(_defineMessages, "reporterEmail", {
  id: "app.reporterEmail",
  defaultMessage: "Reporter Email",
  description: "Reporter Email"
}), _defineProperty(_defineMessages, "userNameLabel", {
  id: "app.userNameLabel",
  defaultMessage: "User Name",
  description: "User Name"
}), _defineProperty(_defineMessages, "userEmailLabel", {
  id: "app.userEmailLabel",
  defaultMessage: "User Email",
  description: "User Email"
}), _defineProperty(_defineMessages, "reportType", {
  id: "app.reportType",
  defaultMessage: "Report Type",
  description: "Report Type"
}), _defineProperty(_defineMessages, "refundToGuest", {
  id: "app.refundToGuest",
  defaultMessage: "Refund to Guest",
  description: "Refund to Guest"
}), _defineProperty(_defineMessages, "subTotalLabel", {
  id: "app.subTotalLabel",
  defaultMessage: "Sub Total",
  description: "Sub Total"
}), _defineProperty(_defineMessages, "payoutLabelAdmin", {
  id: "app.payoutLabelAdmin",
  defaultMessage: "Payout",
  description: "Payout"
}), _defineProperty(_defineMessages, "pleaseChooseCurreny", {
  id: "app.pleaseChooseCurreny",
  defaultMessage: "Please choose a currency",
  description: "Please choose a currency"
}), _defineProperty(_defineMessages, "provideFixedGuestFee", {
  id: "app.provideFixedGuestFee",
  defaultMessage: "Provide fixed amount or percentage for Guest Fee",
  description: "Provide fixed amount or percentage for Guest Fee"
}), _defineProperty(_defineMessages, "provideFixedHostFee", {
  id: "app.provideFixedHostFee",
  defaultMessage: "Provide fixed amount or percentage for Host Fee",
  description: "Provide fixed amount or percentage for Host Fee"
}), _defineProperty(_defineMessages, "currencyRequiredLabel", {
  id: "app.currencyRequiredLabel",
  defaultMessage: "Currency is required when you use fixed price",
  description: "Currency is required when you use fixed price"
}), _defineProperty(_defineMessages, "choosePresentageValue", {
  id: "app.choosePresentageValue",
  defaultMessage: "Choose percentage value between 1 to 99",
  description: "Choose percentage value between 1 to 99"
}), _defineProperty(_defineMessages, "reason", {
  id: "app.reason",
  defaultMessage: "Reason",
  description: "Reason"
}), _defineProperty(_defineMessages, "allLabel", {
  id: "app.allLabel",
  defaultMessage: "All",
  description: "All"
}), _defineProperty(_defineMessages, "profileID", {
  id: "app.profileID",
  defaultMessage: "Profile ID",
  description: "Profile ID"
}), _defineProperty(_defineMessages, "selectLabel", {
  id: "app.selectLabel",
  defaultMessage: "Select",
  description: "Select"
}), _defineProperty(_defineMessages, "banLabel", {
  id: "app.banLabel",
  defaultMessage: "Ban",
  description: "Ban"
}), _defineProperty(_defineMessages, "unBanLabel", {
  id: "app.unBanLabel",
  defaultMessage: "UnBan",
  description: "UnBan"
}), _defineProperty(_defineMessages, "deletingUser", {
  id: "app.deletingUser",
  defaultMessage: "Deleting User",
  description: "Deleting User"
}), _defineProperty(_defineMessages, "usersLabel", {
  id: "app.usersLabel",
  defaultMessage: "Users",
  description: "Users"
}), _defineProperty(_defineMessages, "pageName", {
  id: "app.pageName",
  defaultMessage: "Page Name",
  description: "Page Name"
}), _defineProperty(_defineMessages, "reservationConfirmCode", {
  id: "app.reservationConfirmCode",
  defaultMessage: "Reservation Confirmation Code",
  description: "Reservation Confirmation Code"
}), _defineProperty(_defineMessages, "CheckInDate", {
  id: "app.CheckInDate",
  defaultMessage: "Check-in Date",
  description: "Check-in Date"
}), _defineProperty(_defineMessages, "CheckOutDate", {
  id: "app.CheckOutDate",
  defaultMessage: "Check-out Date",
  description: "Check-out Date"
}), _defineProperty(_defineMessages, "SenderLabel", {
  id: "app.SenderLabel",
  defaultMessage: "Sender",
  description: "Sender"
}), _defineProperty(_defineMessages, "reviewStatusLabel", {
  id: "app.reviewStatusLabel",
  defaultMessage: "Review Status",
  description: "Review Status"
}), _defineProperty(_defineMessages, "reviewActionLabel", {
  id: "app.reviewActionLabel",
  defaultMessage: "Review Action",
  description: "Review Action"
}), _defineProperty(_defineMessages, "writeSomethigs", {
  id: "app.writeSomethigs",
  defaultMessage: "write something.......",
  description: "write something......."
}), _defineProperty(_defineMessages, "cookieStaticPolicy", {
  id: "app.cookieStaticPolicy",
  defaultMessage: "Cookie Policy",
  description: "Cookie Policy"
}), _defineProperty(_defineMessages, "wishListSave", {
  id: "app.wishListSave",
  defaultMessage: "Save",
  description: "Save Button"
}), _defineProperty(_defineMessages, "noPhoneNumberEntered", {
  id: "app.noPhoneNumberEntered",
  defaultMessage: "No phone number entered.",
  description: "No phone number entered."
}), _defineProperty(_defineMessages, "welcomeAdminLabel", {
  id: "app.welcomeAdminLabel",
  defaultMessage: "Welcome Admin !!!",
  description: "Welcome Admin !!!"
}), _defineProperty(_defineMessages, "sideMenu", {
  id: "app.sideMenu",
  defaultMessage: "Become Host Static Block",
  description: "Side Menu"
}), _defineProperty(_defineMessages, "exceedLimit35", {
  id: "app.exceedLimit35",
  defaultMessage: "Maximum 35 characters",
  description: "Maximum 35 characters"
}), _defineProperty(_defineMessages, "exceedLimit70", {
  id: "app.exceedLimit70",
  defaultMessage: "Maximum 70 characters",
  description: "Maximum 70 characters"
}), _defineProperty(_defineMessages, "listDeleted", {
  id: "app.listDeleted",
  defaultMessage: "User deleted",
  description: "User deleted"
}), _defineProperty(_defineMessages, "verifiedLabel", {
  id: "app.verifiedLabel",
  defaultMessage: "Verified",
  description: "verifiedBy"
}), _defineProperty(_defineMessages, "linkCopiedLabel", {
  id: "app.linkCopiedLabel",
  defaultMessage: "Link Copied",
  description: "Link Copied"
}), _defineProperty(_defineMessages, "copyLinkLabel", {
  id: "app.copyLinkLabel",
  defaultMessage: "Copy Link",
  description: "Copy Link"
}), _defineProperty(_defineMessages, "todayLabel", {
  id: "app.todayLabel",
  defaultMessage: "Today",
  description: "todayLabel"
}), _defineProperty(_defineMessages, "ibanNumber", {
  id: "app.ibanNumber",
  defaultMessage: "IBAN number",
  description: "ibanNumber"
}), _defineProperty(_defineMessages, "confirmIbanNumber", {
  id: "app.confirmIbanNumber",
  defaultMessage: "Confirm IBAN number",
  description: "confirmIbanNumber"
}), _defineProperty(_defineMessages, "ibanNumberInvalid", {
  id: "app.ibanNumberInvalid",
  defaultMessage: "Invalid IBAN number",
  description: "ibanNumberInvalid"
}), _defineProperty(_defineMessages, "confirmIbanNumberInvalid", {
  id: "app.confirmIbanNumberInvalid",
  defaultMessage: "Invalid confirm IBAN number",
  description: "confirmIbanNumberInvalid"
}), _defineProperty(_defineMessages, "confirmIbanNumberMismatch", {
  id: "app.confirmIbanNumberMismatch",
  defaultMessage: "IBAN number mismatch",
  description: "confirmIbanNumberMismatch"
}), _defineProperty(_defineMessages, "stripeTokenInfo1", {
  id: "app.stripeTokenInfo1",
  defaultMessage: "By clicking, you agree to our terms and the ",
  description: "stripeTokenInfo1"
}), _defineProperty(_defineMessages, "stripeTokenInfo2", {
  id: "app.stripeTokenInfo2",
  defaultMessage: "Stripe Connected Account Agreement",
  description: "stripeTokenInfo2"
}), _defineProperty(_defineMessages, "PaginationOfContent", {
  id: "app.PaginationOfContent",
  defaultMessage: "of",
  description: "of"
}), _defineProperty(_defineMessages, "adminDashboard", {
  id: "app.adminDashboard",
  defaultMessage: "Admin Dashboard",
  description: "of"
}), _defineProperty(_defineMessages, "clickHeretoUploadLogo", {
  id: "app.clickHeretoUploadLogo",
  defaultMessage: "Click here to upload the logo",
  description: "clickHeretoUploadLogo"
}), _defineProperty(_defineMessages, "userManagement", {
  id: "app.userManagement",
  defaultMessage: "User Management",
  description: "userManagement"
}), _defineProperty(_defineMessages, "profileVerifiedView", {
  id: "app.profileVerifiedView",
  defaultMessage: "Profile Verified View",
  description: "profileVerifiedView"
}), _defineProperty(_defineMessages, "listingsManagement", {
  id: "app.listingsManagement",
  defaultMessage: "Listings Management",
  description: "listingsManagement"
}), _defineProperty(_defineMessages, "readyTopay", {
  id: "app.readyTopay",
  defaultMessage: "Ready To Pay",
  description: "readyTopay"
}), _defineProperty(_defineMessages, "usersReviews", {
  id: "app.usersReviews",
  defaultMessage: "Users Reviews",
  description: "usersReviews"
}), _defineProperty(_defineMessages, "servicefeesSettings", {
  id: "app.servicefeesSettings",
  defaultMessage: "Service Fees Settings",
  description: "servicefeesSettings"
}), _defineProperty(_defineMessages, "documentVerificationManagement", {
  id: "app.documentVerificationManagement",
  defaultMessage: "Document Verification Management",
  description: "Document Verification Management"
}), _defineProperty(_defineMessages, "pdf", {
  id: "app.pdf",
  defaultMessage: "PDF",
  description: "pdf"
}), _defineProperty(_defineMessages, "reportUserMessage", {
  id: "app.reportUserMessage",
  defaultMessage: "Report User",
  description: "reportUser"
}), _defineProperty(_defineMessages, "payoutManagement", {
  id: "app.payoutManagement",
  defaultMessage: "Payout Management",
  description: "payoutManagement"
}), _defineProperty(_defineMessages, "currencyManagement", {
  id: "app.currencyManagement",
  defaultMessage: "Currency Management",
  description: "Currency Management"
}), _defineProperty(_defineMessages, "active", {
  id: "app.active",
  defaultMessage: "Active",
  description: "Active"
}), _defineProperty(_defineMessages, "changeAdminEmailPassword", {
  id: "app.changeAdminEmailPassword",
  defaultMessage: "Change Admin Email/Password",
  description: "changeAdminEmailPassword"
}), _defineProperty(_defineMessages, "bannerSettings", {
  id: "app.bannerSettings",
  defaultMessage: "Banner Settings",
  description: "bannerSettings"
}), _defineProperty(_defineMessages, "homepageBannererSettings", {
  id: "app.homepageBannererSettings",
  defaultMessage: "Home page Banner",
  description: "banHome page BannernerSettings"
}), _defineProperty(_defineMessages, "clickHeretoUploadImage", {
  id: "app.clickHeretoUploadImage",
  defaultMessage: "Click Here to Upload Image",
  description: "Click Here to Upload Image"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock1", {
  id: "app.whyBecomeHostBlock1",
  defaultMessage: "Why Become Host Block 1",
  description: "Why Become Host Block 1"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock2", {
  id: "app.whyBecomeHostBlock2",
  defaultMessage: "Why Become Host Block 2",
  description: "whyBecomeHostBlock2"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock3", {
  id: "app.whyBecomeHostBlock3",
  defaultMessage: "Why Become Host Block 3",
  description: "whyBecomeHostBlock3"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock4", {
  id: "app.whyBecomeHostBlock4",
  defaultMessage: "Why Become Host Block 4",
  description: "whyBecomeHostBlock4"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock5", {
  id: "app.whyBecomeHostBlock5",
  defaultMessage: "Why Become Host Block 5",
  description: "whyBecomeHostBlock5"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock6", {
  id: "app.whyBecomeHostBlock6",
  defaultMessage: "Why Become Host Block 6",
  description: "whyBecomeHostBlock6"
}), _defineProperty(_defineMessages, "whyBecomeHostBlock7", {
  id: "app.whyBecomeHostBlock7",
  defaultMessage: "Why Become Host Block 7",
  description: "whyBecomeHostBlock7"
}), _defineProperty(_defineMessages, "contentManagementSystem", {
  id: "app.contentManagementSystem",
  defaultMessage: "Content Management System",
  description: "contentManagementSystem"
}), _defineProperty(_defineMessages, "editPageDetails", {
  id: "app.editPageDetails",
  defaultMessage: "Edit Page Details",
  description: "editPageDetails"
}), _defineProperty(_defineMessages, "staticPageManagement", {
  id: "app.staticPageManagement",
  defaultMessage: "Static Page Management",
  description: "staticPageManagement"
}), _defineProperty(_defineMessages, "adminCategory", {
  id: "app.adminCategory",
  defaultMessage: "Category",
  description: "Category"
}), _defineProperty(_defineMessages, "fieldCategory", {
  id: "app.fieldCategory",
  defaultMessage: "Field",
  description: "Category"
}), _defineProperty(_defineMessages, "failed", {
  id: "app.failed",
  defaultMessage: "Failed",
  description: "Failed Payout status"
}), _defineProperty(_defineMessages, "managementReviews", {
  id: "app.managementReviews",
  defaultMessage: "Management Reviews",
  description: "managementReviews"
}), _defineProperty(_defineMessages, "payoutDetails", {
  id: "app.payoutDetails",
  defaultMessage: "Payout Details",
  description: "payoutDetails"
}), _defineProperty(_defineMessages, "UploadImage", {
  id: "app.UploadImage",
  defaultMessage: "Upload Image",
  description: "Upload Image"
}), _defineProperty(_defineMessages, "editPopularLocation", {
  id: "app.editPopularLocation",
  defaultMessage: "Edit Popular Location",
  description: "Edit Popular Location"
}), _defineProperty(_defineMessages, "reservationDetails", {
  id: "app.reservationDetails",
  defaultMessage: "Reservation Details",
  description: "Reservation Details Header"
}), _defineProperty(_defineMessages, "urlRequired", {
  id: "app.urlRequired",
  defaultMessage: "URL is required",
  description: "Reservation Details Header"
}), _defineProperty(_defineMessages, "calendarAddress", {
  id: "app.calendarAddress",
  defaultMessage: "Paste Calendar Address (URL) here",
  description: "calendarAddress"
}), _defineProperty(_defineMessages, "calendarCustomName", {
  id: "app.calendarCustomName",
  defaultMessage: "Custom name for this calendar",
  description: "calendarCustomName"
}), _defineProperty(_defineMessages, "maxPriceGreater", {
  id: "app.maxPriceGreater",
  defaultMessage: "Maximum Price must be greater than Minimum Price",
  description: "maxPriceGreater"
}), _defineProperty(_defineMessages, "payoutSortNumber", {
  id: "app.payoutSortNumber",
  defaultMessage: "Sort Number",
  description: "Sort Number for United Kingdom(GB)"
}), _defineProperty(_defineMessages, "payoutInvalidSortNumber", {
  id: "app.payoutInvalidSortNumber",
  defaultMessage: "Invalid sort number",
  description: "Invalid sort number"
}), _defineProperty(_defineMessages, "stripePublishableKey", {
  id: "app.stripePublishableKey",
  defaultMessage: "Stripe Publishable Key",
  description: "Stripe Publishable Key"
}), _defineProperty(_defineMessages, "submitForVerification", {
  id: "app.submitForVerification",
  defaultMessage: "Submit for verification",
  description: "Submit Verification button"
}), _defineProperty(_defineMessages, "submitForAppeal", {
  id: "app.submitForAppeal",
  defaultMessage: "Submit for appeal",
  description: "Submit Appeal button"
}), _defineProperty(_defineMessages, "waitingForAdmin", {
  id: "app.waitingForAdmin",
  defaultMessage: "Waiting for the admin approval.",
  description: "Waiting For Admin"
}), _defineProperty(_defineMessages, "require", {
  id: "app.require",
  defaultMessage: "Required",
  description: "Required"
}), _defineProperty(_defineMessages, "optional", {
  id: "app.optional",
  defaultMessage: "Optional",
  description: "Optional"
}), _defineProperty(_defineMessages, "listingApproval", {
  id: "app.listingApproval",
  defaultMessage: "Listing Request",
  description: "Listing Request"
}), _defineProperty(_defineMessages, "readyForApproval", {
  id: "app.readyForApproval",
  defaultMessage: "Your listing is submitted for verification",
  description: "Ready For Approval"
}), _defineProperty(_defineMessages, "readyForVerification", {
  id: "app.readyForVerification",
  defaultMessage: "Your Listing is ready for verification",
  description: "Ready For Verification"
}), _defineProperty(_defineMessages, "submittedOn", {
  id: "app.submittedOn",
  defaultMessage: "Submitted On",
  description: "submittedOn"
}), _defineProperty(_defineMessages, "action", {
  id: "app.action",
  defaultMessage: "Action",
  description: "Action"
}), _defineProperty(_defineMessages, "favIconlogoLabel", {
  id: "app.favIconlogoLabel",
  defaultMessage: "Fav Icon",
  description: "Fav Icon"
}), _defineProperty(_defineMessages, "approved", {
  id: "app.approved",
  defaultMessage: "Approved",
  description: "approved"
}), _defineProperty(_defineMessages, "declined", {
  id: "app.declined",
  defaultMessage: "Declined",
  description: "declined"
}), _defineProperty(_defineMessages, "declinedReason", {
  id: "app.declinedReason",
  defaultMessage: "Declined reason",
  description: "declinedReason"
}), _defineProperty(_defineMessages, "comment", {
  id: "app.comment",
  defaultMessage: "Comment",
  description: "Comment"
}), _defineProperty(_defineMessages, "pngOnlyLabel", {
  id: "app.pngOnlyLabel",
  defaultMessage: "* png images only",
  description: "* png images only"
}), _defineProperty(_defineMessages, "bookingConfirmed", {
  id: "app.bookingConfirmed",
  defaultMessage: "Booking Confirmed",
  description: "Booking Confirmed"
}), _defineProperty(_defineMessages, "declineAdmin", {
  id: "app.declineAdmin",
  defaultMessage: "This Listing is declined",
  description: "declineAdmin"
}), _defineProperty(_defineMessages, "weeklyPriceDiscount", {
  id: "app.weeklyPriceDiscount",
  defaultMessage: "% weekly price discount",
  description: "weeklyPriceDiscount"
}), _defineProperty(_defineMessages, "monthlyPriceDiscount", {
  id: "app.monthlyPriceDiscount",
  defaultMessage: "% monthly price discount",
  description: "monthlyPriceDiscount"
}), _defineProperty(_defineMessages, "history", {
  id: "app.history",
  defaultMessage: "History",
  description: "history"
}), _defineProperty(_defineMessages, "listingRejected", {
  id: "app.listingRejected",
  defaultMessage: "Listing Rejected",
  description: "listingRejected"
}), _defineProperty(_defineMessages, "requests", {
  id: "app.requests",
  defaultMessage: "Requests",
  description: "Listing Requests"
}), _defineProperty(_defineMessages, "clickHeretoUploadFavIcon", {
  id: "app.clickHeretoUploadFavIcon",
  defaultMessage: "Click here to upload the favicon",
  description: "Click here to upload the favicon"
}), _defineProperty(_defineMessages, "personalHome", {
  id: "app.personalHome",
  defaultMessage: "Personal home",
  description: "Personal home"
}), _defineMessages));
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUGF5b3V0fmFkZFBheW91dEZhaWx1cmV+YWRtaW5+YmVjb21lSG9zdH5ibG9nfmJvb2t+Y2FuY2VsfmNhbmNlbGxhdGlvblBvbGljaWVzfmNoYW5nZVBhc3N3b3JkfmNvbn5kZjU4ZTVjOS5jaHVuay5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2xvY2FsZS9tZXNzYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVNZXNzYWdlcyB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgaG9tZToge1xuICAgIGlkOiBcImFwcC5ob21lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBiZWNvbWVBSG9zdDoge1xuICAgIGlkOiBcImFwcC5iZWNvbWVBSG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBhIGhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgYmVjb21lQUhvc3QyOiB7XG4gICAgaWQ6IFwiYXBwLmJlY29tZUFIb3N0MlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBhIGhvc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGhvd0l0V29yazoge1xuICAgIGlkOiBcImFwcC5ob3dJdFdvcmtcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3cgSXQgV29ya1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBoZWxwOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZWxwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGxvZ2luOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ2luXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9naW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgc2lnbnVwOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ251cFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpZ24gdXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgaG9zdDoge1xuICAgIGlkOiBcImFwcC5ob3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBob3N0czoge1xuICAgIGlkOiBcImFwcC5ob3N0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIG1hbmFnZUxpc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbmFnZSBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBsaXN0WW91clNwYWNlOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RZb3VyU3BhY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0IFlvdXIgU3BhY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgeW91clJlc2VydmF0aW9uczoge1xuICAgIGlkOiBcImFwcC55b3VyUmVzZXJ2YXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25IaXN0b3J5OiB7XG4gICAgaWQ6IFwiYXBwLnRyYW5zYWN0aW9uSGlzdG9yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyYW5zYWN0aW9uIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIGlkOiBcImFwcC5wcm9maWxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBhY2NvdW50U2V0dGluZ3M6IHtcbiAgICBpZDogXCJhcHAuYWNjb3VudFNldHRpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudCBTZXR0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICB0cmlwczoge1xuICAgIGlkOiBcImFwcC50cmlwc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyaXBzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgZGFzaGJvYXJkOiB7XG4gICAgaWQ6IFwiYXBwLmRhc2hib2FyZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRhc2hib2FyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBlZGl0UHJvZmlsZToge1xuICAgIGlkOiBcImFwcC5lZGl0UHJvZmlsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXQgUHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBsb2dvdXQ6IHtcbiAgICBpZDogXCJhcHAubG9nb3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nb3V0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGFib3V0OiB7XG4gICAgaWQ6IFwiYXBwLmFib3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWJvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgY2FyZWVyczoge1xuICAgIGlkOiBcImFwcC5jYXJlZXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FyZWVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBwcmVzczoge1xuICAgIGlkOiBcImFwcC5wcmVzc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIHBvbGljaWVzOiB7XG4gICAgaWQ6IFwiYXBwLnBvbGljaWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUG9saWNpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgZGlzY292ZXI6IHtcbiAgICBpZDogXCJhcHAuZGlzY292ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEaXNjb3ZlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICB0cnVzdFNhZmV0eToge1xuICAgIGlkOiBcImFwcC50cnVzdFNhZmV0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRydXN0ICYgU2FmZXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIHRyYXZlbENyZWRpdDoge1xuICAgIGlkOiBcImFwcC50cmF2ZWxDcmVkaXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcmF2ZWwgQ3JlZGl0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGNpdGl6ZW46IHtcbiAgICBpZDogXCJhcHAuY2l0aXplblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNpdGl6ZW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgYnVzaW5lc3NUcmF2ZWw6IHtcbiAgICBpZDogXCJhcHAuYnVzaW5lc3NUcmF2ZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCdXNpbmVzcyBUcmF2ZWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgZ3VpZGVib29rczoge1xuICAgIGlkOiBcImFwcC5ndWlkZWJvb2tzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3VpZGVib29rc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBob3N0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIHdoeUhvc3Q6IHtcbiAgICBpZDogXCJhcHAud2h5SG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBIb3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBpdGVtXCIsXG4gIH0sXG4gIGhvc3BpdGFsaXR5OiB7XG4gICAgaWQ6IFwiYXBwLmhvc3BpdGFsaXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zcGl0YWxpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgcmVzcG9uc2libGVIb3N0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLnJlc3BvbnNpYmxlSG9zdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3BvbnNpYmxlIEhvc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZW51IGl0ZW1cIixcbiAgfSxcbiAgdGVybXNQcml2YWN5OiB7XG4gICAgaWQ6IFwiYXBwLnRlcm1zUHJpdmFjeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRlcm1zICYgUHJpdmFjeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lbnUgaXRlbVwiLFxuICB9LFxuICBhcHBzQXZhaWxhYmxlT246IHtcbiAgICBpZDogXCJhcHAuYXBwc0F2YWlsYWJsZU9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwcyBhdmFpbGFibGUgb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBcHBzIGF2YWlsYWJsZSBvblwiLFxuICB9LFxuICBvcjoge1xuICAgIGlkOiBcImFwcC5vclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIm9yXCIsXG4gICAgZGVzY3JpcHRpb246IFwib3JcIixcbiAgfSxcbiAgc2lnblVwOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ25VcFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpZ24gVXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaWduIFVwIEJ1dHRvblwiLFxuICB9LFxuICBub0FjY291bnQ6IHtcbiAgICBpZDogXCJhcHAubm9BY2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/XCIsXG4gIH0sXG4gIGZpcnN0TmFtZUludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuZmlyc3ROYW1lSW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpcnN0IE5hbWUgSW52YWxpZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpcnN0IE5hbWUgaXMgSW52YWxpZFwiLFxuICB9LFxuICBsYXN0TmFtZUludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAubGFzdE5hbWVJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCBOYW1lIEludmFsaWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYXN0IE5hbWUgaXMgSW52YWxpZFwiLFxuICB9LFxuICBlbWFpbDoge1xuICAgIGlkOiBcImFwcC5lbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEVtYWlsIEFkZHJlc3MgdG8gTG9naW5cIixcbiAgfSxcbiAgZW1haWxSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5lbWFpbFJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW1haWwgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBlbWFpbEludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuZW1haWxJblZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBFbWFpbCBBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW52YWxpZCBFbWFpbCBBZGRyZXNzXCIsXG4gIH0sXG4gIGVtYWlsTm90RXhpc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmVtYWlsTm90RXhpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk5vIGFjY291bnQgZXhpc3RzIGZvciB0aGlzIGVtYWlsLiBNYWtlIHN1cmUgaXQncyB0eXBlZCBpbiBjb3JyZWN0bHksIG9yIOKAnHNpZ24gdXDigJ0gaW5zdGVhZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVtYWlsIEFkZHJlc3MgaXMgbm90IGV4aXN0XCIsXG4gIH0sXG4gIGxvZ29IZWlnaHQ6IHtcbiAgICBpZDogXCJhcHAubG9nb0hlaWdodFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvZ28gaGVpZ2h0IG11c3QgYmUgbnVtZXJpYyB2YWx1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ28gaGVpZ2h0IG11c3QgYmUgbnVtZXJpYyB2YWx1ZVwiLFxuICB9LFxuICBsb2dvV2lkdGg6IHtcbiAgICBpZDogXCJhcHAubG9nb1dpZHRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nbyB3aWR0aCBtdXN0IGJlIG51bWVyaWMgdmFsdWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dvIHdpZHRoIG11c3QgYmUgbnVtZXJpYyB2YWx1ZVwiLFxuICB9LFxuICB1cmxJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLnVybEludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIFVSTFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVSTCBpbnZhbGlkXCIsXG4gIH0sXG4gIG1ldGFEZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5tZXRhRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmlwdGlvbiBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIixcbiAgfSxcbiAgbWV0YUtleXdvcmQ6IHtcbiAgICBpZDogXCJhcHAubWV0YUtleXdvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJLZXl3b3JkIG11c3QgYmUgMjU1IGNoYXJhY3RlcnMgb3IgbGVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIktleXdvcmQgbXVzdCBiZSAyNTUgY2hhcmFjdGVycyBvciBsZXNzXCIsXG4gIH0sXG4gIG1ldGFUaXRsZToge1xuICAgIGlkOiBcImFwcC5tZXRhVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRhIFRpdGxlIG11c3QgYmUgMjU1IGNoYXJhY3RlcnMgb3IgbGVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1ldGEgVGl0bGUgVCBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIixcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXNzd29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgUGFzc3dvcmQgdG8gTG9naW5cIixcbiAgfSxcbiAgcGFzc3dvcmRSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5wYXNzd29yZFJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBwYXNzd29yZEludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRJblZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuIFBsZWFzZSB0cnkgYWdhaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHBhc3N3b3JkV3Jvbmc6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRXcm9uZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldyb25nIFBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV3JvbmcgUGFzc3dvcmRcIixcbiAgfSxcbiAgdXNlckJhbm5lZDoge1xuICAgIGlkOiBcImFwcC51c2VyQmFubmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGFyZSBiYW5uZWQgYnkgYWRtaW4uIFBsZWFzZSBjb250YWN0IGFkbWluIGZvciBVbmJhblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgQmFubmVkXCIsXG4gIH0sXG4gIHVzZXJCYW5uZWRUaXRsZToge1xuICAgIGlkOiBcImFwcC51c2VyQmFubmVkVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXZSdyZSBTb3JyeSFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgdXNlckJhbm5lZFN1YlRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnVzZXJCYW5uZWRTdWJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCIgSXQgbG9va3MgbGlrZSB5b3VyIGFjY291bnQgaXMgYmxvY2tlZCBmb3Igc29tZSByZWFzb24uIElmIHlvdSBuZWVkIGZ1cnRoZXIgaW5mb3JtYXRpb24sIHBsZWFzZSBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgRm91bmRcIixcbiAgfSxcbiAgc29tZXRoaW5nV2VudFdyb25nOiB7XG4gICAgaWQ6IFwiYXBwLnNvbWV0aGluZ1dlbnRXcm9uZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2FpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIHdlbnQgd3JvbmdcIixcbiAgfSxcbiAgbG9nZ2VkSW46IHtcbiAgICBpZDogXCJhcHAubG9nZ2VkSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgYXJlIGFscmVhZHkgbG9nZ2VkIGluIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgYWxyZWFkeSBMb2dnZWQtaW5cIixcbiAgfSxcbiAgY2FudExvZ2luOiB7XG4gICAgaWQ6IFwiYXBwLmNhbnRMb2dpblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbuKAmXQgTG9naW4/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gc2UgcHVlZGUgaW5pY2lhciBzZXNpw7NuP1wiLFxuICB9LFxuICB0ZXJtczE6IHtcbiAgICBpZDogXCJhcHAudGVybXMxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQnkgc2lnbmluZyB1cCwgSSBhZ3JlZSB0byBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUZXJtcyBjb250ZW50IHBhcnQxXCIsXG4gIH0sXG4gIHRlcm1zMjoge1xuICAgIGlkOiBcImFwcC50ZXJtczJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGVybXMgb2YgU2VydmljZSwgTm9uZGlzY3JpbWluYXRpb24gUG9saWN5LCBQYXltZW50cyBUZXJtcyBvZiBTZXJ2aWNlLCBQcml2YWN5IFBvbGljeSwgR3Vlc3QgUmVmdW5kIFBvbGljeSwgYW5kIEhvc3QgR3VhcmFudGVlIFRlcm1zLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRlcm1zIGNvbnRlbnQgcGFydDFcIixcbiAgfSxcbiAgc2lnbnVwV2l0aEVtYWlsOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ251cFdpdGhFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpZ251cCB3aXRoIEVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9naW4gTW9kYWwgdGl0bGVcIixcbiAgfSxcbiAgZmFjZWJvb2s6IHtcbiAgICBpZDogXCJhcHAuZmFjZWJvb2tcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGYWNlYm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNpZ24gdXAgd2l0aCBmYWNlYm9va1wiLFxuICB9LFxuICB0d2l0dGVyOiB7XG4gICAgaWQ6IFwiYXBwLnR3aXR0ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUd2l0dGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2lnbiB1cCB3aXRoIHR3aXR0ZXJcIixcbiAgfSxcbiAgZ29vZ2xlOiB7XG4gICAgaWQ6IFwiYXBwLmdvb2dsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvb2dsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ251cCB3aXRoIEdvb2dsZVwiLFxuICB9LFxuICBzaWdudXBXaXRoOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ251cFdpdGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaWduIHVwIHdpdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaWdudXAgd2l0aFwiLFxuICB9LFxuICBhbHJlYWR5SGF2ZUFjY291bnQ6IHtcbiAgICBpZDogXCJhcHAuYWxyZWFkeUhhdmVBY2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiYWxyZWFkeUhhdmVBY2NvdW50XCIsXG4gIH0sXG4gIHRlcm1zT2ZTZXJ2aWNlOiB7XG4gICAgaWQ6IFwiYXBwLnRlcm1zT2ZTZXJ2aWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGVybXMgb2YgU2VydmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRlcm1zIG9mIFNlcnZpY2VcIixcbiAgfSxcbiAgbm9uRGlzY3JpbWluYXRpb25Qb2xpY3k6IHtcbiAgICBpZDogXCJhcHAubm9uRGlzY3JpbWluYXRpb25Qb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb25EaXNjcmltaW5hdGlvbiBQb2xpY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb25EaXNjcmltaW5hdGlvbiBQb2xpY3lcIixcbiAgfSxcbiAgZmlyc3ROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLmZpcnN0TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpcnN0IE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEZpcnN0IG5hbWUgdG8gUmVnaXN0ZXJcIixcbiAgfSxcbiAgZmlyc3ROYW1lUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZmlyc3ROYW1lUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaXJzdCBuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlyc3QgbmFtZSBSZXF1aXJlZFwiLFxuICB9LFxuICBsYXN0TmFtZToge1xuICAgIGlkOiBcImFwcC5sYXN0TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgTGFzdCBuYW1lIHRvIFJlZ2lzdGVyXCIsXG4gIH0sXG4gIGxhc3ROYW1lUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAubGFzdE5hbWVSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgbmFtZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgbmFtZSBSZXF1aXJlZFwiLFxuICB9LFxuICBkYXRlT2ZCaXJ0aDoge1xuICAgIGlkOiBcImFwcC5kYXRlT2ZCaXJ0aFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJpcnRoZGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBCaXJ0aGRheSB0byBSZWdpc3RlclwiLFxuICB9LFxuICBkYXRlT2ZCaXJ0aFJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVPZkJpcnRoUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCaXJ0aGRheSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpcnRoZGF5IFJlcXVpcmVkXCIsXG4gIH0sXG4gIGRheToge1xuICAgIGlkOiBcImFwcC5kYXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXkgb2YgYmlydGhkYXlcIixcbiAgfSxcbiAgZGF5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZGF5UmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXkgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXkgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgbW9udGg6IHtcbiAgICBpZDogXCJhcHAubW9udGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb250aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vbnRoIG9mIGJpcnRoZGF5XCIsXG4gIH0sXG4gIG1vbnRoUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAubW9udGhSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vbnRoIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9udGggaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgeWVhcjoge1xuICAgIGlkOiBcImFwcC55ZWFyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWWVhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlllYXIgb2YgYmlydGhkYXlcIixcbiAgfSxcbiAgeWVhclJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnllYXJSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlllYXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZZWFyIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIG11c3RCZTE4T3JPbGQ6IHtcbiAgICBpZDogXCJhcHAubXVzdEJlMThPck9sZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBtdXN0IGJlIGF0IGxlYXN0IDE4IHllYXJzIG9sZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBtdXN0IGF0IGxlYXN0IDE4IHllYXJzIG9sZFwiLFxuICB9LFxuICBXcm9uZ0RheUNob3Nlbjoge1xuICAgIGlkOiBcImFwcC5Xcm9uZ0RheUNob3NlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldyb25nIGRheSBjaG9zZW4gZm9yIHRoZSBtb250aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIGRheSBjaG9zZW4gZm9yIHRoZSBtb250aFwiLFxuICB9LFxuICBiaXJ0aERheToge1xuICAgIGlkOiBcImFwcC5iaXJ0aERheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJpcnRoZGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlydGhkYXlcIixcbiAgfSxcbiAgcGF5bWVudFRlcm1zOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRUZXJtc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnRzIFRlcm1zIG9mIFNlcnZpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50cyBUZXJtcyBvZiBTZXJ2aWNlXCIsXG4gIH0sXG4gIHByaXZhY3lQb2xpY3k6IHtcbiAgICBpZDogXCJhcHAucHJpdmFjeVBvbGljeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaXZhY3kgUG9saWN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpdmFjeSBQb2xpY3lcIixcbiAgfSxcbiAgZ3Vlc3RSZWZ1bmRQb2xpY3k6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RSZWZ1bmRQb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdCBSZWZ1bmQgUG9saWN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgUmVmdW5kIFBvbGljeVwiLFxuICB9LFxuICBhbmQ6IHtcbiAgICBpZDogXCJhcHAuYW5kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW5kXCIsXG4gIH0sXG4gIGhvc3RHdWFyYW50ZWVUZXJtczoge1xuICAgIGlkOiBcImFwcC5ob3N0R3VhcmFudGVlVGVybXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0IEd1YXJhbnRlZSBUZXJtc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgR3VhcmFudGVlIFRlcm1zXCIsXG4gIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLmZvcmdvdFBhc3N3b3JkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gIH0sXG4gIGZvcmdvdFBhc3N3b3JkSW5mbzoge1xuICAgIGlkOiBcImFwcC5mb3Jnb3RQYXNzd29yZEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgYXNzb2NpYXRlZCB3aXRoIHlvdXIgYWNjb3VudCwgYW5kIHdl4oCZbGwgZW1haWwgeW91IGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvcmdvdCBwYXNzd29yZCBpbmZvXCIsXG4gIH0sXG4gIGJhY2tUb0xvZ2luOiB7XG4gICAgaWQ6IFwiYXBwLmJhY2tUb0xvZ2luXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFjayB0byBsb2dpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhY2sgdG8gbG9naW5cIixcbiAgfSxcbiAgc2VuZExpbms6IHtcbiAgICBpZDogXCJhcHAuc2VuZExpbmtcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZW5kIExpbmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZW5kIExpbmtcIixcbiAgfSxcbiAgaW5ib3g6IHtcbiAgICBpZDogXCJhcHAuaW5ib3hcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbmJveFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluYm94XCIsXG4gIH0sXG4gIHlvdXJMaXN0aW5nczoge1xuICAgIGlkOiBcImFwcC55b3VyTGlzdGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIExpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBMaXN0aW5nc1wiLFxuICB9LFxuICB5b3VyVHJpcHM6IHtcbiAgICBpZDogXCJhcHAueW91clRyaXBzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBUcmlwc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgVHJpcHNcIixcbiAgfSxcbiAgYWNjb3VudDoge1xuICAgIGlkOiBcImFwcC5hY2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFjY291bnRcIixcbiAgfSxcbiAgYWRkTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5hZGRMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIE5ldyBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIiBBZGQgTmV3IExpc3RpbmdzIEJ1dHRvblwiLFxuICB9LFxuICBwcm9maWxlUGhvdG86IHtcbiAgICBpZDogXCJhcHAucHJvZmlsZVBob3RvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvZmlsZSBQaG90b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2ZpbGUgUGhvdG9cIixcbiAgfSxcbiAgdHJ1c3RBbmRWZXJpZmljYXRpb246IHtcbiAgICBpZDogXCJhcHAudHJ1c3RBbmRWZXJpZmljYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcnVzdCBhbmQgVmVyaWZpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJ1c3QgYW5kIFZlcmlmaWNhdGlvblwiLFxuICB9LFxuICByZXZpZXdzOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3c1wiLFxuICB9LFxuICB2aWV3UHJvZmlsZToge1xuICAgIGlkOiBcImFwcC52aWV3UHJvZmlsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXcgUHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgUHJvZmlsZVwiLFxuICB9LFxuICBwYXlvdXRQcmVmZXJlbmNlczoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRQcmVmZXJlbmNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dCBQcmVmZXJlbmNlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBQcmVmZXJlbmNlc1wiLFxuICB9LFxuICBzZWN1cml0eToge1xuICAgIGlkOiBcImFwcC5zZWN1cml0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlY3VyaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VjdXJpdHlcIixcbiAgfSxcbiAgd2hlcmU6IHtcbiAgICBpZDogXCJhcHAud2hlcmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGVyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZXJlXCIsXG4gIH0sXG4gIHdoZW46IHtcbiAgICBpZDogXCJhcHAud2hlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoZW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGVuXCIsXG4gIH0sXG4gIGd1ZXN0OiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdHNcIixcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgaWQ6IFwiYXBwLnNlYXJjaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlYXJjaFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlYXJjaFwiLFxuICB9LFxuICBob21lV2hlcmU6IHtcbiAgICBpZDogXCJhcHAuaG9tZVdoZXJlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVzdGluYXRpb24sIGNpdHksIGFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXN0aW5hdGlvbiwgY2l0eSwgYWRkcmVzc1wiLFxuICB9LFxuICBjaGVja0luOiB7XG4gICAgaWQ6IFwiYXBwLmNoZWNrSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGVjayBJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrIEluXCIsXG4gIH0sXG4gIGNoZWNrT3V0OiB7XG4gICAgaWQ6IFwiYXBwLmNoZWNrT3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hlY2sgT3V0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hlY2sgT3V0XCIsXG4gIH0sXG4gIHJlY29tbWVuZGVkOiB7XG4gICAgaWQ6IFwiYXBwLnJlY29tbWVuZGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVjb21tZW5kZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWNvbW1lbmRlZCBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIG1vc3RWaWV3ZWQ6IHtcbiAgICBpZDogXCJhcHAubW9zdFZpZXdlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vc3QgVmlld2VkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9zdCBWaWV3ZWQgSG9tZSBwYWdlIFNsaWRlciB0aXRsZVwiLFxuICB9LFxuICBwb3B1bGFyTG9jYXRpb246IHtcbiAgICBpZDogXCJhcHAucG9wdWxhckxvY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUG9wdWxhciBMb2NhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBvcHVsYXIgTG9jYXRpb25zIEhvbWUgcGFnZSBTbGlkZXIgdGl0bGVcIixcbiAgfSxcbiAgLy8gY2F0ZWdvcnkgbWVzc2FnZSBkZWZpZW5kXG4gIGNhdGVnb3J5SWQ6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSURcIixcbiAgfSxcbiAgY2F0ZWdvcnlOYW1lOiB7XG4gICAgaWQ6IFwiYXBwLmNhdGVnb3J5TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhdGVnb3J5IG5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeSBuYW1lXCIsXG4gIH0sXG4gIGNhdGVnb3J5U3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLmNhdGVnb3J5U3RhdHVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RhdHVzXCIsXG4gIH0sXG4gIGNhdGVnb3J5T3BlcmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmNhdGVnb3J5T3BlcmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3BlcmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3BlcmF0aW9uXCIsXG4gIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2F0ZWdvcnkgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhdGVnb3J5IEhvbWUgcGFnZSBTbGlkZXIgdGl0bGVcIixcbiAgfSxcbiAgZmllbGROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLmZpZWxkTmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOYW1lXCIsXG4gIH0sXG4gIGZpZWxkVHlwZToge1xuICAgIGlkOiBcImFwcC5maWVsZFR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHlwZVwiLFxuICB9LFxuICBmaWVsZFBhZ2VJZDoge1xuICAgIGlkOiBcImFwcC5maWVsZFBhZ2VJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgSURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIElEXCIsXG4gIH0sXG4gIGZpZWxkRW5hYmxlZDoge1xuICAgIGlkOiBcImFwcC5maWVsZEVuYWJsZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbmFibGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW5hYmxlZFwiLFxuICB9LFxuICBiYW5uZXI6IHtcbiAgICBpZDogXCJhcHAuYmFubmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYmFubmVyIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeSBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIGNhdGVnb3J5RToge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeUVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvY2F0aW9uXCIsXG4gIH0sXG4gIGFkZENhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmFkZENhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIENhdGVnb3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIENhdGVnb3J5XCIsXG4gIH0sXG4gIGFkZEJhbm5lcjoge1xuICAgIGlkOiBcImFwcC5hZGRCYW5uZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgQmFubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRkIEJhbm5lclwiLFxuICB9LFxuICBjYXRlZ29yeVR5cGVJbnB1dFRleHQ6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlUeXBlSW5wdXRUZXh0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBjYXRlZ29yeVN1Yjoge1xuICAgIGlkOiBcImFwcC5jYXRlZ29yeVN1YlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBUaXRsZVwiLFxuICB9LFxuICBjYXRlZ29yeVR5cGU6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2F0ZWdvcnkgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhdGVnb3J5IFR5cGVcIixcbiAgfSxcbiAgLy8gY2F0ZWdvcnlcbiAgZWRpdENhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXQgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBlZGl0U3ViQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuZWRpdFN1YkNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdCBTdWIgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFZGl0IFN1YiBDYXRlZ29yeVwiLFxuICB9LFxuICBjYXRlZ29yeUFkbWluVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlBZG1pblRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBjYXRlZ29yeUFkbWluRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlBZG1pbkRlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBjYXRlZ29yeUFkbWluQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuY2F0ZWdvcnlBZG1pbkNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeVwiLFxuICB9LFxuICAvLyBzdWIgY2F0ZWdvcnkgbWVzc2FnZSBkZWZpZW5kXG4gIHN1YkNhdGVnb3J5SWQ6IHtcbiAgICBpZDogXCJhcHAuc3ViQ2F0ZWdvcnlJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSURcIixcbiAgfSxcbiAgc3ViQ2F0ZWdvcnlOYW1lOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkNhdGVnb3J5TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhdGVnb3J5IG5hbWVcIixcbiAgfSxcbiAgc3ViQ2F0ZWdvcnlTdGF0dXM6IHtcbiAgICBpZDogXCJhcHAuc3ViQ2F0ZWdvcnlTdGF0dXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF0dXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0dXNcIixcbiAgfSxcbiAgc3ViQ2F0ZWdvcnlPcGVyYXRpb246IHtcbiAgICBpZDogXCJhcHAuc3ViQ2F0ZWdvcnlPcGVyYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPcGVyYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJPcGVyYXRpb25cIixcbiAgfSxcbiAgcHJpbWFyeUNhdGVnb3J5OiB7XG4gICAgaWQ6IFwiYXBwLnByaW1hcnlDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaW1hcnkgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdWIgQ2F0ZWdvcnkgSG9tZSBwYWdlIFNsaWRlciB0aXRsZVwiLFxuICB9LFxuICBzdWJDYXRlZ29yeToge1xuICAgIGlkOiBcImFwcC5zdWJDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBDYXRlZ29yeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBDYXRlZ29yeSBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIHN1YkNhdGVnb3J5czoge1xuICAgIGlkOiBcImFwcC5zdWJDYXRlZ29yeXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdWIgQ2F0ZWdvcnkgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBDYXRlZ29yeSBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIGFkZE5ldzoge1xuICAgIGlkOiBcImFwcC5hZGROZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgTmV3XCIsXG4gICAgZGVzY3JpcHRpb246IFwiYWRkIG5ldyBIb21lIHBhZ2UgU2xpZGVyIHRpdGxlXCIsXG4gIH0sXG4gIHN1YlRpdGxlQWRtaW46IHtcbiAgICBpZDogXCJhcHAuc3ViVGl0bGVBZG1pblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGl0bGVcIixcbiAgfSxcbiAgc3ViQWRtaW5EZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5zdWJBZG1pbkRlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBzdWJBZG1pbkFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAuc3ViQWRtaW5BZGRyZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZHJlc3NcIixcbiAgfSxcbiAgc3ViQWRtaW5TdWJDYXRlZ29yeToge1xuICAgIGlkOiBcImFwcC5zdWJBZG1pblN1YkNhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3ViIENhdGVnb3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3ViIENhdGVnb3J5XCIsXG4gIH0sXG4gIHN1YkFkbWluR3Vlc3RzOiB7XG4gICAgaWQ6IFwiYXBwLnN1YkFkbWluR3Vlc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3RzXCIsXG4gIH0sXG4gIHN1YkFkbWluQmVkcm9vbXM6IHtcbiAgICBpZDogXCJhcHAuc3ViQWRtaW5CZWRyb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZHJvb21zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmVkcm9vbXNcIixcbiAgfSxcbiAgc3ViQWRtaW5CYXRoczoge1xuICAgIGlkOiBcImFwcC5zdWJBZG1pbkJhdGhzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmF0aHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXRoc1wiLFxuICB9LFxuICBzdWJBZG1pbkJlZHM6IHtcbiAgICBpZDogXCJhcHAuc3ViQWRtaW5CZWRzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVkc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZHNcIixcbiAgfSxcbiAgLy9Ib21lIG9mZmVyXG5cbiAgYWRkT2ZmZXI6IHtcbiAgICBpZDogXCJhcHAuYWRkT2ZmZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgT2ZmZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGQgT2ZmZXJcIixcbiAgfSxcblxuICBsb2NhdGlvbjoge1xuICAgIGlkOiBcImFwcC5sb2NhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9jYXRpb25cIixcbiAgfSxcblxuICBkYXRlczoge1xuICAgIGlkOiBcImFwcC5kYXRlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRhdGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGF0ZXNcIixcbiAgfSxcbiAgcm9vbVR5cGU6IHtcbiAgICBpZDogXCJhcHAucm9vbVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSb29tIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUeXBlIG9mIFJvb21cIixcbiAgfSxcbiAgcHJpY2VSYW5nZToge1xuICAgIGlkOiBcImFwcC5wcmljZVJhbmdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJpY2UgUmFuZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmljZSBSYW5nZVwiLFxuICB9LFxuICBpbnN0YW50Qm9vazoge1xuICAgIGlkOiBcImFwcC5pbnN0YW50Qm9va1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkluc3RhbnQgQm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgQm9va1wiLFxuICB9LFxuICBpbnN0YW50Qm9va0luZm86IHtcbiAgICBpZDogXCJhcHAuaW5zdGFudEJvb2tJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdGluZ3MgeW91IGNhbiBib29rIHdpdGhvdXQgd2FpdGluZyBmb3IgaG9zdCBhcHByb3ZhbC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJpbnN0YW50IEJvb2sgSW5mb3JtYXRpb25cIixcbiAgfSxcbiAgc2l6ZToge1xuICAgIGlkOiBcImFwcC5zaXplXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2l6ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpemVcIixcbiAgfSxcbiAgYW55QmVkOiB7XG4gICAgaWQ6IFwiYXBwLmFueUJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFueSBiZWRyb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueSBiZWRyb29tc1wiLFxuICB9LFxuICBhbnlCYXRoOiB7XG4gICAgaWQ6IFwiYXBwLmFueUJhdGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbnkgYmF0aHJvb21zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55IGJhdGhyb29tc1wiLFxuICB9LFxuICBhbnlCZWRzOiB7XG4gICAgaWQ6IFwiYXBwLmFueUJlZHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbnkgYmVkc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueSBiZWRzXCIsXG4gIH0sXG4gIGZpbHRlcjoge1xuICAgIGlkOiBcImFwcC5maWx0ZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaWx0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaWx0ZXIgYnV0dG9uXCIsXG4gIH0sXG4gIHNlZUhvbWVzOiB7XG4gICAgaWQ6IFwiYXBwLnNlZUhvbWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VlIEhvbWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VlIEhvbWVzXCIsXG4gIH0sXG4gIHJlbnRhbHM6IHtcbiAgICBpZDogXCJhcHAucmVudGFsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlbnRhbHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZW50YWxzXCIsXG4gIH0sXG4gIGFtaW5pdGllczoge1xuICAgIGlkOiBcImFwcC5hbWluaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbWVuaXRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbWVuaXRpZXNcIixcbiAgfSxcbiAgZmFjaWxpdGllczoge1xuICAgIGlkOiBcImFwcC5mYWNpbGl0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmFjaWxpdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhY2lsaXRpZXNcIixcbiAgfSxcbiAgaG91c2VSdWxlczoge1xuICAgIGlkOiBcImFwcC5ob3VzZVJ1bGVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG91c2UgUnVsZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3VzZSBSdWxlc1wiLFxuICB9LFxuICBjYW5jZWw6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIGJ1dHRvblwiLFxuICB9LFxuICBhcHBseUZpbHRlcnM6IHtcbiAgICBpZDogXCJhcHAuYXBwbHlGaWx0ZXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwbHkgZmlsdGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcGx5IGZpbHRlcnMgYnV0dG9uXCIsXG4gIH0sXG4gIG1hcDoge1xuICAgIGlkOiBcImFwcC5tYXBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXAgYnV0dG9uIGZvciBtb2JpbGVcIixcbiAgfSxcbiAgZmlsdGVyczoge1xuICAgIGlkOiBcImFwcC5maWx0ZXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmlsdGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpbHRlcnMgYnV0dG9uIGZvciBtb2JpbGVcIixcbiAgfSxcbiAgcmVzdWx0czoge1xuICAgIGlkOiBcImFwcC5yZXN1bHRzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzdWx0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc3VsdHMgYnV0dG9uIGZvciBtb2JpbGVcIixcbiAgfSxcbiAgbm9SZXN1bHRzVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubm9SZXN1bHRzVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJObyBSZXN1bHRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcmVzdWx0cyBtZXNzYWdlIGZvciBzZWFyY2ggbGlzdGluZ1wiLFxuICB9LFxuICBub1Jlc3VsdHNTdWJUaXRsZToge1xuICAgIGlkOiBcImFwcC5ub1Jlc3VsdHNTdWJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyeSBhZGp1c3RpbmcgeW91ciBzZWFyY2guIEhlcmUgYXJlIHNvbWUgaWRlYXM6XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcmVzdWx0cyBtZXNzYWdlIGZvciBzZWFyY2ggbGlzdGluZ1wiLFxuICB9LFxuICBub1Jlc3VsdHNUZXJtczE6IHtcbiAgICBpZDogXCJhcHAubm9SZXN1bHRzVGVybXMxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hhbmdlIHlvdXIgZmlsdGVycyBvciBkYXRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIHJlc3VsdHMgbWVzc2FnZSBmb3Igc2VhcmNoIGxpc3RpbmdcIixcbiAgfSxcbiAgbm9SZXN1bHRzVGVybXMyOiB7XG4gICAgaWQ6IFwiYXBwLm5vUmVzdWx0c1Rlcm1zMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlpvb20gb3V0IG9uIHRoZSBtYXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyByZXN1bHRzIG1lc3NhZ2UgZm9yIHNlYXJjaCBsaXN0aW5nXCIsXG4gIH0sXG4gIG5vUmVzdWx0c1Rlcm1zMzoge1xuICAgIGlkOiBcImFwcC5ub1Jlc3VsdHNUZXJtczNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZWFyY2ggZm9yIGEgc3BlY2lmaWMgY2l0eSwgYWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIHJlc3VsdHMgbWVzc2FnZSBmb3Igc2VhcmNoIGxpc3RpbmdcIixcbiAgfSxcbiAgYWJvdXRMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLmFib3V0TGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFib3V0IHRoaXMgbGlzdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBkZXNjcmlwdGlvblwiLFxuICB9LFxuICBjb250YWN0SG9zdDoge1xuICAgIGlkOiBcImFwcC5jb250YWN0SG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbnRhY3QgSG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBidXR0b24gYW5kIGxpbmtcIixcbiAgfSxcbiAgdGhlU3BhY2U6IHtcbiAgICBpZDogXCJhcHAudGhlU3BhY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGUgc3BhY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc3BhY2VcIixcbiAgfSxcbiAgYWNjb21tb2RhdGVzOiB7XG4gICAgaWQ6IFwiYXBwLmFjY29tbW9kYXRlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjY29tbW9kYXRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzcGFjZSBhY2NvbW1vZGF0ZXNcIixcbiAgfSxcbiAgYmVkcm9vbXM6IHtcbiAgICBpZDogXCJhcHAuYmVkcm9vbXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWRyb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzcGFjZSBiZWRyb29tc1wiLFxuICB9LFxuICBiYXRocm9vbXM6IHtcbiAgICBpZDogXCJhcHAuYmF0aHJvb21zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmF0aHJvb21zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHNwYWNlIGJhdGhyb29tc1wiLFxuICB9LFxuICBiZWQ6IHtcbiAgICBpZDogXCJhcHAuYmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmVkXCIsXG4gIH0sXG4gIGJlZHM6IHtcbiAgICBpZDogXCJhcHAuYmVkc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc3BhY2UgYmVkc1wiLFxuICB9LFxuICBwcm9wZXJ0eVR5cGU6IHtcbiAgICBpZDogXCJhcHAucHJvcGVydHlUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvcGVydHkgdHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzcGFjZSBwcm9wZXJ0eSB0eXBlXCIsXG4gIH0sXG4gIHNoYXJlZFNwYWNlczoge1xuICAgIGlkOiBcImFwcC5zaGFyZWRTcGFjZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaGFyZWQgU3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIHNoYXJlZCBzcGFjZXNcIixcbiAgfSxcbiAgcHJpY2VzOiB7XG4gICAgaWQ6IFwiYXBwLnByaWNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBwcmljZXNcIixcbiAgfSxcbiAgZXh0cmFQZW9wbGU6IHtcbiAgICBpZDogXCJhcHAuZXh0cmFQZW9wbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeHRyYSBwZW9wbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgZXh0cmEgcGVvcGxlXCIsXG4gIH0sXG4gIG5vQ2hhcmdlOiB7XG4gICAgaWQ6IFwiYXBwLm5vQ2hhcmdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gQ2hhcmdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXh0cmEgcGVvcGxlIG5vIGNoYXJnZVwiLFxuICB9LFxuICBjYW5jZWxsYXRpb25zOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsYXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIGNhbmNlbGxhdGlvbnNcIixcbiAgfSxcbiAgdmlld0RldGFpbHM6IHtcbiAgICBpZDogXCJhcHAudmlld0RldGFpbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWaWV3IGRldGFpbHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsYXRpb25zIHZpZXcgZGV0YWlsc1wiLFxuICB9LFxuICBzYWZldHlGZWF0dXJlczoge1xuICAgIGlkOiBcImFwcC5zYWZldHlGZWF0dXJlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhZmV0eSBmZWF0dXJlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBTYWZldHkgZmVhdHVyZXNcIixcbiAgfSxcbiAgYXZhaWxhYmlsaXR5OiB7XG4gICAgaWQ6IFwiYXBwLmF2YWlsYWJpbGl0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkF2YWlsYWJpbGl0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBhdmFpbGFiaWxpdHlcIixcbiAgfSxcbiAgaW46IHtcbiAgICBpZDogXCJhcHAuaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImluXCIsXG4gIH0sXG4gIGd1ZXN0czoge1xuICAgIGlkOiBcImFwcC5ndWVzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdHNcIixcbiAgfSxcbiAgYmVkcm9vbToge1xuICAgIGlkOiBcImFwcC5iZWRyb29tXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmVkcm9vbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZHJvb21cIixcbiAgfSxcbiAgYmVkOiB7XG4gICAgaWQ6IFwiYXBwLmJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZFwiLFxuICB9LFxuICBub1Jldmlld1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vUmV2aWV3VGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGlzIHBsYWNlIHdvdWxkIGxvdmUgeW91ciByZXZpZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3Rpbmcgbm8gcmV2aWV3IHRpdGxlXCIsXG4gIH0sXG4gIG5vUmV2aWV3SW5mbzoge1xuICAgIGlkOiBcImFwcC5ub1Jldmlld0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2hlbiB5b3UgYm9vayB0aGlzIHBsYWNlLCBoZXJl4oCZcyB3aGVyZSB5b3VyIHJldmlldyB3aWxsIHNob3cgdXAhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIG5vIHJldmlldyBpbmZvXCIsXG4gIH0sXG4gIGxvYWRNb3JlOiB7XG4gICAgaWQ6IFwiYXBwLmxvYWRNb3JlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9hZCBNb3JlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9hZCBtb3JlIGJ1dHRvblwiLFxuICB9LFxuICB2aWV3Q291bnRJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdDb3VudEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGlzIGhvbWUgaXMgb24gcGVvcGxlIG1pbmRzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyB2aWV3IGNvdW50IGRldGFpbHNcIixcbiAgfSxcbiAgdmlld0NvdW50VG90YWwxOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdDb3VudFRvdGFsMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl04oCZcyBiZWVuIHZpZXdlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyB2aWV3IGNvdW50IGRldGFpbHNcIixcbiAgfSxcbiAgdmlld0NvdW50VG90YWwyOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdDb3VudFRvdGFsMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInRpbWVzIGluIHRoZSBwYXN0IHdlZWsuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIHZpZXcgY291bnQgZGV0YWlsc1wiLFxuICB9LFxuICBuZWlnaGJvcmhvb2Q6IHtcbiAgICBpZDogXCJhcHAubmVpZ2hib3Job29kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhlIG5laWdoYm9yaG9vZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBuZWlnaGJvcmhvb2RcIixcbiAgfSxcbiAgbmVpZ2hib3Job29kSW5mbzoge1xuICAgIGlkOiBcImFwcC5uZWlnaGJvcmhvb2RJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4YWN0IGxvY2F0aW9uIGluZm9ybWF0aW9uIGlzIHByb3ZpZGVkIGFmdGVyIGEgYm9va2luZyBpcyBjb25maXJtZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIG5laWdoYm9yaG9vZEluZm9cIixcbiAgfSxcbiAgeW91ckhvc3Q6IHtcbiAgICBpZDogXCJhcHAueW91ckhvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIEhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgeW91ciBob3N0XCIsXG4gIH0sXG4gIHJlc3BvbnNlUmF0ZToge1xuICAgIGlkOiBcImFwcC5yZXNwb25zZVJhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNwb25zZSByYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBsaXN0aW5nIHJlc3BvbnNlIHJhdGVcIixcbiAgfSxcbiAgcmVzcG9uc2VUaW1lOiB7XG4gICAgaWQ6IFwiYXBwLnJlc3BvbnNlVGltZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3BvbnNlIHRpbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IGxpc3RpbmcgcmVzcG9uc2UgdGltZVwiLFxuICB9LFxuICBqb2luZWRJbjoge1xuICAgIGlkOiBcImFwcC5qb2luZWRJblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkpvaW5lZCBpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbGlzdGluZyBob3N0IGpvaW5pbmcgZGF0ZVwiLFxuICB9LFxuICBjb250YWN0SG9zdGluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RIb3N0aW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYWtlIHN1cmUgeW91IHNoYXJlIHRoZSBmb2xsb3dpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgaW5zdHJ1Y3Rpb25zXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0aW5mbzI6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RpbmZvMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRlbGxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgaW5zdHJ1Y3Rpb25zXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0aW5mbzM6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RpbmZvM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImEgbGl0dGxlIGFib3V0IHlvdXJzZWxmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGluc3RydWN0aW9uc1wiLFxuICB9LFxuICBjb250YWN0SG9zdGluZm80OiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RIb3N0aW5mbzRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGF0IGJyaW5ncyB5b3UgdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgaW5zdHJ1Y3Rpb25zXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0aW5mbzU6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RpbmZvNVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldob+KAmXMgam9pbmluZyB5b3VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgaW5zdHJ1Y3Rpb25zXCIsXG4gIH0sXG4gIGNvbnRhY3RIb3N0aW5mbzY6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3RpbmZvNlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgZG8geW91IGxvdmUgYWJvdXQgdGhpcyBsaXN0aW5nPyBNZW50aW9uIGl0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGluc3RydWN0aW9uc1wiLFxuICB9LFxuICBjb250YWN0SG9zdERhdGU6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEhvc3REYXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hlbiBhcmUgeW91IHRyYXZlbGxpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgZGF0ZXMgdGl0bGVcIixcbiAgfSxcbiAgaG9zdEVycm9yTWVzc2FnZTE6IHtcbiAgICBpZDogXCJhcHAuaG9zdEVycm9yTWVzc2FnZTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2Ugc3BlY2lmeSBjaGVjayBpbiBhbmQgY2hlY2sgb3V0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgaG9zdEVycm9yTWVzc2FnZTI6IHtcbiAgICBpZDogXCJhcHAuaG9zdEVycm9yTWVzc2FnZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaG9zZSBkYXRlcyBhcmUgbm90IGF2YWlsYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBlcnJvciBtZXNzYWdlXCIsXG4gIH0sXG4gIGhvc3RFcnJvck1lc3NhZ2UzOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RFcnJvck1lc3NhZ2UzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGNhbiBjb250YWN0IHRoZSBob3N0IG5vd1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgaG9zdCBlcnJvciBtZXNzYWdlXCIsXG4gIH0sXG4gIGNob29zZUd1ZXN0czoge1xuICAgIGlkOiBcImFwcC5jaG9vc2VHdWVzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgR3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGNob29zZSBndWVzdHMgZHJvcGRvd25cIixcbiAgfSxcbiAgdGV4dEJveE1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAudGV4dEJveE1lc3NhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGFydCB5b3VyIG1lc3NhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IGhvc3QgdGV4dCBib3ggc3RhcnQgeW91ciBtZXNzYWdlXCIsXG4gIH0sXG4gIHNlbmRNZXNzYWdlOiB7XG4gICAgaWQ6IFwiYXBwLnNlbmRNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VuZCBtZXNzYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGJ1dHRvblwiLFxuICB9LFxuICBjb250YWN0aG9zdEVycm9yMToge1xuICAgIGlkOiBcImFwcC5jb250YWN0aG9zdEVycm9yMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBtdXN0IHNlbGVjdCBudW1iZXIgb2YgZ3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgY29udGFjdGhvc3RFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdGhvc3RFcnJvcjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXNzYWdlIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBob3N0IGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgbWF4aW11bUNoYXJjdGVyOiB7XG4gICAgaWQ6IFwiYXBwLm1heGltdW1DaGFyY3RlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIihBbGxvd3MgTWF4aW11bSA1MCBjaGFyYWN0ZXJzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm1heGltdW1DaGFyY3RlclwiLFxuICB9LFxuICBlbXB0eVNwYWNlOiB7XG4gICAgaWQ6IFwiYXBwLmVtcHR5U3BhY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIGlucHV0IFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVtcHR5U3BhY2VcIixcbiAgfSxcbiAgbWF4aW11bUNoYXJjdGVyTGVmdDoge1xuICAgIGlkOiBcImFwcC5tYXhpbXVtQ2hhcmN0ZXJMZWZ0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiY2hhcmFjdGVycyBsZWZ0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm1heGltdW1DaGFyY3RlckxlZnRcIixcbiAgfSxcbiAgc2VydmljZUZlZToge1xuICAgIGlkOiBcImFwcC5zZXJ2aWNlRmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VydmljZSBmZWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCaWxsIGRldGFpbHNcIixcbiAgfSxcbiAgY2xlYW5pbmdGZWU6IHtcbiAgICBpZDogXCJhcHAuY2xlYW5pbmdGZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGVhbmluZyBmZWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCaWxsIGRldGFpbHNcIixcbiAgfSxcbiAgdG90YWw6IHtcbiAgICBpZDogXCJhcHAudG90YWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUb3RhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgZGV0YWlsc1wiLFxuICB9LFxuICBuaWdodHM6IHtcbiAgICBpZDogXCJhcHAubmlnaHRzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwibmlnaHRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlsbCBkZXRhaWxzXCIsXG4gIH0sXG4gIGNoZWNrQXZhaWxhYmlsaXR5OiB7XG4gICAgaWQ6IFwiYXBwLmNoZWNrQXZhaWxhYmlsaXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hlY2sgQXZhaWxhYmlsaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBidXR0b25cIixcbiAgfSxcbiAgdmlld090aGVyTGlzdGluZ3M6IHtcbiAgICBpZDogXCJhcHAudmlld090aGVyTGlzdGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWaWV3IE90aGVyIExpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBidXR0b25cIixcbiAgfSxcbiAgYm9vazoge1xuICAgIGlkOiBcImFwcC5ib29rXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgYnV0dG9uXCIsXG4gIH0sXG4gIHJlcXVlc3RUb0Jvb2s6IHtcbiAgICBpZDogXCJhcHAucmVxdWVzdFRvQm9va1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlcXVlc3QgdG8gQm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgYnV0dG9uXCIsXG4gIH0sXG4gIG1heGltdW1TdGF5OiB7XG4gICAgaWQ6IFwiYXBwLm1heGltdW1TdGF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSBzdGF5IGlzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWF4aW11bSBkYXkgZXJyb3JcIixcbiAgfSxcbiAgcGVyTmlnaHQ6IHtcbiAgICBpZDogXCJhcHAucGVyTmlnaHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQZXIgTmlnaHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXIgTmlnaHRcIixcbiAgfSxcbiAgYm9va2luZ0luZm86IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3Ugd29u4oCZdCBiZSBjaGFyZ2VkIHlldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSB3b27igJl0IGJlIGNoYXJnZWQgeWV0XCIsXG4gIH0sXG4gIHZpZXdQaG90b3M6IHtcbiAgICBpZDogXCJhcHAudmlld1Bob3Rvc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXcgUGhvdG9zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBwaG90b3MgYnV0dG9uXCIsXG4gIH0sXG4gIGNhbmNlbGxhdGlvblBvbGljaWVzOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvblBvbGljaWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsbGF0aW9uIFBvbGljaWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIFBvbGljaWVzXCIsXG4gIH0sXG4gIGZsZXhpYmxlOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmxleGlibGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBtb2RlcmF0ZToge1xuICAgIGlkOiBcImFwcC5tb2RlcmF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vZGVyYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9kZXJhdGVcIixcbiAgfSxcbiAgc3RyaWN0OiB7XG4gICAgaWQ6IFwiYXBwLnN0cmljdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0cmljdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0cmljdFwiLFxuICB9LFxuICBhZGRQcm9maWxlUGhvdG86IHtcbiAgICBpZDogXCJhcHAuYWRkUHJvZmlsZVBob3RvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIHlvdXIgcHJvZmlsZSBwaG90b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF2YXRhciB1cGxvYWQgdGl0bGVcIixcbiAgfSxcbiAgdXBsb2FkSW5mbzoge1xuICAgIGlkOiBcImFwcC51cGxvYWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRoaXMgaGVscHMgeW91ciBob3N0IHJlY29nbml6ZSB5b3Ugd2hlbiB5b3UgbWVldCwgc28gbWFrZSBzdXJlIGl0IHNob3dzIHlvdXIgZmFjZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBdmF0YXIgdXBsb2FkIGluZm9cIixcbiAgfSxcbiAgY29udGludWU6IHtcbiAgICBpZDogXCJhcHAuY29udGludWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250aW51ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRpbnVlIGJ1dHRvblwiLFxuICB9LFxuICBkcm9wem9uZVVwbG9hZDoge1xuICAgIGlkOiBcImFwcC5kcm9wem9uZVVwbG9hZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVwbG9hZCBhIGZpbGUgZnJvbSB5b3VyIGNvbXB1dGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRHJvcHpvbmUgdXBsb2FkIGluZm9cIixcbiAgfSxcbiAgZHJvcHpvbmVVcGxvYWRFcnJvcjoge1xuICAgIGlkOiBcImFwcC5kcm9wem9uZVVwbG9hZEVycm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVtb3ZlIHRoZSBleGlzdGluZyBpbWFnZSBhbmQgdHJ5IHVwbG9hZCBhZ2FpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRyb3B6b25lIHVwbG9hZCBlcnJvciBtZXNzYWdlXCIsXG4gIH0sXG4gIG1lZXR1cFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm1lZXR1cFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR2V0IHJlYWR5IHRvIGJvb2sgd2l0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdldCByZWFkeSB0byBib29rIHdpdGhcIixcbiAgfSxcbiAgbWVldHVwSW5mbzE6IHtcbiAgICBpZDogXCJhcHAubWVldHVwSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2UgYXNrIGV2ZXJ5b25lIHRvIGNvbmZpcm0gYSBmZXcgdGhpbmdzIGJlZm9yZSB0cmF2ZWxsaW5nIG9yIGhvc3RpbmcuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVldHVwIGluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIG1lZXR1cEluZm8yOiB7XG4gICAgaWQ6IFwiYXBwLm1lZXR1cEluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW914oCZbGwgb25seSBoYXZlIHRvIGRvIHRoaXMgb25jZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZWV0dXAgaW5mb3JtYXRpb25cIixcbiAgfSxcbiAgbmV4dDoge1xuICAgIGlkOiBcImFwcC5uZXh0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5leHQgYnV0dG9uXCIsXG4gIH0sXG4gIGNoZWNrRW1haWw6IHtcbiAgICBpZDogXCJhcHAuY2hlY2tFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoZWNrIHlvdXIgZW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCB2ZXJpZmljYXRpb24gdGl0bGVcIixcbiAgfSxcbiAgdmVyaWZpY2F0aW9uSW5mbzE6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpY2F0aW9uSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUYXAgdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHdlIHNlbnQgeW91LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZlcmlmaWNhdGlvbiBpbmZvXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbkluZm8yOiB7XG4gICAgaWQ6IFwiYXBwLnZlcmlmaWNhdGlvbkluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNvbmZpcm1pbmcgeW91ciBlbWFpbCBhZGRyZXNzIGhlbHBzIHVzIHNlbmQgeW91IHRyaXAgaW5mb3JtYXRpb24uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmVyaWZpY2F0aW9uIGluZm9cIixcbiAgfSxcbiAgcmVzZW5kRW1haWw6IHtcbiAgICBpZDogXCJhcHAucmVzZW5kRW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlbmQgZW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlbmQgZW1haWwgYnV0dG9uXCIsXG4gIH0sXG4gIGNoYW5nZUVtYWlsOiB7XG4gICAgaWQ6IFwiYXBwLmNoYW5nZUVtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hhbmdlIGVtYWlsIGFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGFuZ2UgZW1haWwgYWRkcmVzc1wiLFxuICB9LFxuICBhYm91dFlvdXJUcmlwOiB7XG4gICAgaWQ6IFwiYXBwLmFib3V0WW91clRyaXBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBYm91dCBZb3VyIFRyaXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IEFib3V0IFlvdXIgVHJpcFwiLFxuICB9LFxuICB3aG9Db21pbmc6IHtcbiAgICBpZDogXCJhcHAud2hvQ29taW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hvJ3MgQ29taW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hvJ3MgQ29taW5nXCIsXG4gIH0sXG4gIHNheUhlbGxvOiB7XG4gICAgaWQ6IFwiYXBwLnNheUhlbGxvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F5IGhlbGxvIHRvIHlvdXIgaG9zdCBhbmQgdGVsbCB0aGVtIHdoeSB5b3XigJlyZSBjb21pbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IHBhZ2UgaW5mb1wiLFxuICB9LFxuICBkZXNjcmlwdGlvbkluZm86IHtcbiAgICBpZDogXCJhcHAuZGVzY3JpcHRpb25JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlZpc2l0aW5nIGZhbWlseSBvciBmcmllbmRzPyBTaWdodCBzZWVpbmc/IFRoaXMgaGVscHMgeW91ciBob3N0IHBsYW4gZm9yIHlvdXIgdHJpcC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IGRlc2NyaXB0aW9uIGluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIHBheW1lbnQ6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50XCIsXG4gIH0sXG4gIHBheW1lbnRJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdeKAmWxsIG9ubHkgYmUgY2hhcmdlZCBpZiB5b3VyIHJlcXVlc3QgaXMgYWNjZXB0ZWQgYnkgdGhlIGhvc3QuVGhleeKAmWxsIGhhdmUgMjQgaG91cnMgdG8gYWNjZXB0IG9yIGRlY2xpbmUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBwYXltZW50Q3VycmVuY3k6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudEN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudCBDdXJyZW5jeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgY3VycmVuY3lcIixcbiAgfSxcbiAgY2hvb3NlQ3VycmVuY3k6IHtcbiAgICBpZDogXCJhcHAuY2hvb3NlQ3VycmVuY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgQ3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgQ3VycmVuY3lcIixcbiAgfSxcbiAgcGF5bWVudFR5cGU6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudFR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50IFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IFR5cGVcIixcbiAgfSxcbiAgcGF5cGFsOiB7XG4gICAgaWQ6IFwiYXBwLnBheXBhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheVBhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheXBhbFwiLFxuICB9LFxuICBsb2dpbkluZm86IHtcbiAgICBpZDogXCJhcHAubG9naW5JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkxvZyBpbnRvIFBheVBhbC4gWW91IHdpbGwgYmUgYWJsZSB0byByZXZpZXcgeW91ciByZXF1ZXN0IGJlZm9yZSBpdCBpcyBmaW5hbC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dpbiBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBjdXJyZW5jeUVycm9yOiB7XG4gICAgaWQ6IFwiYXBwLmN1cnJlbmN5RXJyb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgYSBwYXltZW50IGN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3VycmVuY3kgRXJyb3JcIixcbiAgfSxcbiAgaG9zdGVkQnk6IHtcbiAgICBpZDogXCJhcHAuaG9zdGVkQnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0ZWQgYnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0ZWQgYnlcIixcbiAgfSxcbiAgY2FuY2VsbGF0aW9uUG9saWN5OiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvblBvbGljeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbGxhdGlvbiBwb2xpY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsYXRpb24gcG9saWN5XCIsXG4gIH0sXG4gIGRlbGV0ZUxpc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAuZGVsZXRlTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0ZSB0aGlzIExpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBkZWxldGUgdGhpcyBsaXN0aW5nXCIsXG4gIH0sXG4gIGRlbGV0ZUxpc3RpbmdJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmRlbGV0ZUxpc3RpbmdJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0aW5nPyBZb3UgY2Fubm90IHJldmVyc2UgdGhpcyBhY3Rpb24uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgZGVsZXRlIGxpc3RpbmcgaW5mb3JtYXRpb25cIixcbiAgfSxcbiAgZGVsZXRlOiB7XG4gICAgaWQ6IFwiYXBwLmRlbGV0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIERlbGV0ZSBidXR0b25cIixcbiAgfSxcbiAgZ29CYWNrOiB7XG4gICAgaWQ6IFwiYXBwLmdvQmFja1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvIEJhY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBHbyBiYWNrIGJ1dHRvblwiLFxuICB9LFxuICBwcm9ncmVzc0JhclRleHQxOiB7XG4gICAgaWQ6IFwiYXBwLnByb2dyZXNzQmFyVGV4dDFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3XigJlyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIFByb2dyZXNzIGJhciB0ZXh0XCIsXG4gIH0sXG4gIHByb2dyZXNzQmFyVGV4dDI6IHtcbiAgICBpZDogXCJhcHAucHJvZ3Jlc3NCYXJUZXh0MlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImRvbmUgd2l0aCB5b3VyIGxpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBQcm9ncmVzcyBiYXIgdGV4dFwiLFxuICB9LFxuICBsaXN0aW5nVXBkYXRlSW5mbzoge1xuICAgIGlkOiBcImFwcC5saXN0aW5nVXBkYXRlSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgdXBkYXRlZCBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIHVwZGF0ZSBpbmZvXCIsXG4gIH0sXG4gIGVkaXRMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdCBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgYnV0dG9uXCIsXG4gIH0sXG4gIGZpbmlzaExpc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAuZmluaXNoTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpbmlzaCB0aGUgTGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgbGlzdGluZyBidXR0b25cIixcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIGlkOiBcImFwcC5wcmV2aWV3XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIGJ1dHRvblwiLFxuICB9LFxuICBsaXN0ZWQ6IHtcbiAgICBpZDogXCJhcHAubGlzdGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIGxpc3RpbmcgZHJvcGRvd25cIixcbiAgfSxcbiAgdW5MaXN0ZWQ6IHtcbiAgICBpZDogXCJhcHAudW5MaXN0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVbmxpc3RlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBsaXN0aW5nIGRyb3Bkb3duXCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgYW55IGxpc3RpbmdzIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBkb24ndCBoYXZlIGFueSBsaXN0aW5ncyFcIixcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGlkOiBcImFwcC5jb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1ha2UgbW9uZXkgYnkgcmVudGluZyBvdXQgeW91ciBleHRyYSBzcGFjZS4gWW91J2xsIGFsc28gZ2V0IHRvIG1lZXQgaW50ZXJlc3RpbmcgdHJhdmVsbGVycyBmcm9tIGFyb3VuZCB0aGUgd29ybGQhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29udGVudFwiLFxuICB9LFxuICBidXR0b246IHtcbiAgICBpZDogXCJhcHAuYnV0dG9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUG9zdCBhIG5ldyBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUG9zdCBhIG5ldyBsaXN0aW5nXCIsXG4gIH0sXG4gIG5vVHJpcFRpdGxlMToge1xuICAgIGlkOiBcImFwcC5ub1RyaXBUaXRsZTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgdXBjb21pbmcgdHJpcHMhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gdHJpcHMgdGl0bGVcIixcbiAgfSxcbiAgbm9UcmlwVGl0bGUyOiB7XG4gICAgaWQ6IFwiYXBwLm5vVHJpcFRpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSB5b3VyIG5leHQgYWR2ZW50dXJlIHJpZ2h0IGF3YXkhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gdHJpcHMgdGl0bGVcIixcbiAgfSxcbiAgbm9Ucmlwc0J1dHRvbjoge1xuICAgIGlkOiBcImFwcC5ub1RyaXBzQnV0dG9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VhcmNoIGxpc3RpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gdHJpcHMgYnV0dG9uXCIsXG4gIH0sXG4gIG5vUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAubm9SZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIGFueSB1cGNvbWluZyByZXNlcnZhdGlvbnMhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcmVzZXJ2YXRpb25cIixcbiAgfSxcbiAgc3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLnN0YXR1c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXR1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXR1c1wiLFxuICB9LFxuICBkYXRlTG9jYXRpb246IHtcbiAgICBpZDogXCJhcHAuZGF0ZUxvY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGF0ZXMgYW5kIExvY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGF0ZXMgYW5kIExvY2F0aW9uXCIsXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBpZDogXCJhcHAuZGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRldGFpbHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXRhaWxzXCIsXG4gIH0sXG4gIG5vTGlzdDoge1xuICAgIGlkOiBcImFwcC5ub0xpc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJObyBMaXN0IEZvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gTGlzdCBGb3VuZFwiLFxuICB9LFxuICBub3RleGlzdDoge1xuICAgIGlkOiBcImFwcC5ub3RleGlzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IHByb2ZpbGUgZG9lc24ndCBleGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0IHByb2ZpbGUgbm90IGV4aXN0XCIsXG4gIH0sXG4gIG1lc3NhZ2VIaXN0cm95OiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VIaXN0cm95XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZSBIaXN0b3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBIaXN0b3J5XCIsXG4gIH0sXG4gIGNvbnRhY3RTdXBwb3J0OiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RTdXBwb3J0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGFjdCBTdXBwb3J0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGFjdCBTdXBwb3J0XCIsXG4gIH0sXG4gIHZpZXdJdGluZXJhcnk6IHtcbiAgICBpZDogXCJhcHAudmlld0l0aW5lcmFyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXcgSXRpbmVyYXJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBJdGluZXJhcnlcIixcbiAgfSxcbiAgdmlld1JlY2VpcHQ6IHtcbiAgICBpZDogXCJhcHAudmlld1JlY2VpcHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWaWV3IFJlY2VpcHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IFJlY2VpcHRcIixcbiAgfSxcbiAgYXBwcm92ZToge1xuICAgIGlkOiBcImFwcC5hcHByb3ZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwcm92ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcHJvdmVcIixcbiAgfSxcbiAgZGVjbGluZToge1xuICAgIGlkOiBcImFwcC5kZWNsaW5lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVjbGluZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlY2xpbmVcIixcbiAgfSxcbiAgZmlyc3ROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLmZpcnN0TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpcnN0IE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEZpcnN0IG5hbWUgdG8gUmVnaXN0ZXJcIixcbiAgfSxcbiAgZmlyc3ROYW1lUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZmlyc3ROYW1lUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaXJzdCBuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlyc3QgbmFtZSBSZXF1aXJlZFwiLFxuICB9LFxuICBsYXN0TmFtZToge1xuICAgIGlkOiBcImFwcC5sYXN0TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgTGFzdCBuYW1lIHRvIFJlZ2lzdGVyXCIsXG4gIH0sXG4gIGxhc3ROYW1lUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAubGFzdE5hbWVSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgbmFtZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgbmFtZSBSZXF1aXJlZFwiLFxuICB9LFxuICBlbWFpbDoge1xuICAgIGlkOiBcImFwcC5lbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEVtYWlsIEFkZHJlc3MgdG8gTG9naW5cIixcbiAgfSxcbiAgZW1haWxSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5lbWFpbFJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW1haWwgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBlbWFpbEludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuZW1haWxJblZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBFbWFpbCBBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW52YWxpZCBFbWFpbCBBZGRyZXNzXCIsXG4gIH0sXG4gIGVtYWlsQWxyZWFkeUV4aXN0czoge1xuICAgIGlkOiBcImFwcC5lbWFpbEFscmVhZHlFeGlzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGhhdCBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlLiBQbGVhc2UgY2hvb3NlIGRpZmZlcmVudCBvbmUhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW1haWwgQWRkcmVzcyBpcyBhbHJlYWR5IGV4aXN0XCIsXG4gIH0sXG4gIGlBbToge1xuICAgIGlkOiBcImFwcC5pYW1cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJIGFtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2VuZGVyIExhYmVsXCIsXG4gIH0sXG4gIGdlbmRlcjoge1xuICAgIGlkOiBcImFwcC5nZW5kZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHZW5kZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHZW5kZXIgRmllbGRcIixcbiAgfSxcbiAgZ2VuZGVyTWFsZToge1xuICAgIGlkOiBcImFwcC5nZW5kZXJNYWxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdlbmRlciBNYWxlXCIsXG4gIH0sXG4gIGdlbmRlckZlbWFsZToge1xuICAgIGlkOiBcImFwcC5nZW5kZXJGZW1hbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGZW1hbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHZW5kZXIgRmVtYWxlXCIsXG4gIH0sXG4gIGdlbmRlck90aGVyOiB7XG4gICAgaWQ6IFwiYXBwLmdlbmRlck90aGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3RoZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHZW5kZXIgT3RoZXJcIixcbiAgfSxcbiAgZ2VuZGVyUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZ2VuZGVyUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHZW5kZXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHZW5kZXIgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgcHJlZmVycmVkTGFuZ3VhZ2U6IHtcbiAgICBpZDogXCJhcHAucHJlZmVycmVkTGFuZ3VhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmVmZXJyZWQgTGFuZ3VhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmVmZXJyZWQgTGFuZ3VhZ2VcIixcbiAgfSxcbiAgcHJlZmVycmVkTGFuZ3VhZ2VSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5wcmVmZXJyZWRMYW5ndWFnZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlZmVycmVkIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJlZmVycmVkIGxhbmd1YWdlIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIHByZWZlcnJlZEN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZEN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlZmVycmVkIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJlZmVycmVkIEN1cnJlbmN5XCIsXG4gIH0sXG4gIHByZWZlcnJlZEN1cnJlbmN5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAucHJlZmVycmVkQ3VycmVuY3lSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZWZlcnJlZCBjdXJyZW5jeSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByZWZlcnJlZCBjdXJyZW5jeSBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBwaG9uZU51bWJlcjoge1xuICAgIGlkOiBcImFwcC5waG9uZU51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBob25lIE51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob25lIE51bWJlclwiLFxuICB9LFxuICBwaG9uZU51bWJlclJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnBob25lTnVtYmVyUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIixcbiAgfSxcbiAgcGhvbmVOdW1iZXJJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLnBob25lTnVtYmVySW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgUGhvbmUgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGhvbmUgTnVtYmVyIGlzIEludmFsaWRcIixcbiAgfSxcbiAgcGhvbmVOdW1iZXJMZW5ndGhJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLnBob25lTnVtYmVyTGVuZ3RoSW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vYmlsZSBOdW1iZXIgbXVzdCBiZSAzMCBkaWdpdHMgb3IgbGVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYmlsZSBOdW1iZXIgbXVzdCBiZSAzMCBkaWdpdHMgb3IgbGVzc1wiLFxuICB9LFxuICBsaXZlTG9jYXRpb246IHtcbiAgICBpZDogXCJhcHAubGl2ZUxvY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hlcmUgWW91IExpdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJsb2NhdGlvblwiLFxuICB9LFxuICBsb2NhdGlvblJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmxvY2F0aW9uUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb2NhdGlvbiBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvY2F0aW9uIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIGluZm86IHtcbiAgICBpZDogXCJhcHAuaW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaWJlIFlvdXJzZWxmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpYmUgWW91cnNlbGZcIixcbiAgfSxcbiAgaW5mb1JlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmluZm9SZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgaW5mbyBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaWJlIFlvdXJzZWxmIGlzIFJlcXVpcmVkXCIsXG4gIH0sXG4gIGluZm9SZXF1aXJlZG9uZToge1xuICAgIGlkOiBcImFwcC5pbmZvUmVxdWlyZWRvbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmliZSB5b3Vyc2VsZiBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaWJlIFlvdXJzZWxmIGlzIFJlcXVpcmVkXCIsXG4gIH0sXG5cbiAgc29tZXRoaW5nV2VudFdyb25nOiB7XG4gICAgaWQ6IFwiYXBwLnNvbWV0aGluZ1dlbnRXcm9uZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2FpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIHdlbnQgd3JvbmdcIixcbiAgfSxcbiAgbm90TG9nZ2VkSW46IHtcbiAgICBpZDogXCJhcHAubm90TG9nZ2VkSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgYXJlIG5vdCBsb2dnZWQgSW4uIFBsZWFzZSBsb2dpbiB0byBjb250aW51ZSFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXcm9uZyB3ZW50IHdyb25nXCIsXG4gIH0sXG4gIGRhdGVPZkJpcnRoOiB7XG4gICAgaWQ6IFwiYXBwLmRhdGVPZkJpcnRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmlydGhkYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEJpcnRoZGF5IHRvIFJlZ2lzdGVyXCIsXG4gIH0sXG4gIGRhdGVPZkJpcnRoUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuZGF0ZU9mQmlydGhSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJpcnRoZGF5IGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlydGhkYXkgUmVxdWlyZWRcIixcbiAgfSxcbiAgc2F2ZToge1xuICAgIGlkOiBcImFwcC5zYXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmUgQnV0dG9uXCIsXG4gIH0sXG4gIG1vbnRoOiB7XG4gICAgaWQ6IFwiYXBwLm1vbnRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9udGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb250aCBvZiBiaXJ0aGRheVwiLFxuICB9LFxuICB5ZWFyOiB7XG4gICAgaWQ6IFwiYXBwLnllYXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZZWFyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWWVhciBvZiBiaXJ0aGRheVwiLFxuICB9LFxuICBkYXk6IHtcbiAgICBpZDogXCJhcHAuZGF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGF5IG9mIGJpcnRoZGF5XCIsXG4gIH0sXG4gIGJpcnRoRGF5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuYmlydGhEYXlSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlbGVjdCB5b3VyIGJpcnRoIGRhdGUgdG8gY29udGludWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJiaXJ0aERheVJlcXVpcmVkXCIsXG4gIH0sXG4gIG11c3RCZTE4T3JPbGQ6IHtcbiAgICBpZDogXCJhcHAubXVzdEJlMThPck9sZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBtdXN0IGJlIGF0IGxlYXN0IDE4IHllYXJzIG9sZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBtdXN0IGF0IGxlYXN0IDE4IHllYXJzIG9sZFwiLFxuICB9LFxuICBXcm9uZ0RheUNob3Nlbjoge1xuICAgIGlkOiBcImFwcC5Xcm9uZ0RheUNob3NlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldyb25nIGRheSBjaG9zZW4gZm9yIHRoZSBtb250aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIGRheSBjaG9zZW4gZm9yIHRoZSBtb250aFwiLFxuICB9LFxuICBSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5SZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIipSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVpcmVkIEhlYWRpbmdcIixcbiAgfSxcbiAgUmVxdWlyZWREZXRhaWxzOiB7XG4gICAgaWQ6IFwiYXBwLlJlcXVpcmVkRGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgaW5mb3JtYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXF1aXJlZCBIZWFkaW5nXCIsXG4gIH0sXG4gIGxhc3ROYW1lSW5mbzoge1xuICAgIGlkOiBcImFwcC5sYXN0TmFtZUluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiWW91ciBwdWJsaWMgcHJvZmlsZSBvbmx5IHNob3dzIHlvdXIgZmlyc3QgbmFtZS4gV2hlbiB5b3UgcmVxdWVzdCBhIGJvb2tpbmcsIHlvdXIgaG9zdCB3aWxsIHNlZSB5b3VyIGZpcnN0IGFuZCBsYXN0IG5hbWUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwibGFzdE5hbWVJbmZvXCIsXG4gIH0sXG4gIGdlbmRlckluZm86IHtcbiAgICBpZDogXCJhcHAuZ2VuZGVySW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXZSB1c2UgdGhpcyBkYXRhIGZvciBhbmFseXNpcyBhbmQgbmV2ZXIgc2hhcmUgaXQgd2l0aCBvdGhlciB1c2Vycy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJnZW5kZXJJbmZvXCIsXG4gIH0sXG4gIGVtYWlsSW5mbzoge1xuICAgIGlkOiBcImFwcC5lbWFpbEluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2Ugd29u4oCZdCBzaGFyZSB5b3VyIHByaXZhdGUgZW1haWwgYWRkcmVzcyB3aXRoIG90aGVyIHVzZXJzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVtYWlsSW5mb1wiLFxuICB9LFxuICBsZWFybk1vcmU6IHtcbiAgICBpZDogXCJhcHAubGVhcm5Nb3JlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGVhcm4gTW9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImxlYXJuTW9yZVwiLFxuICB9LFxuICBwaG9uZU51bWJlckluZm86IHtcbiAgICBpZDogXCJhcHAucGhvbmVOdW1iZXJJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRoaXMgaXMgb25seSBzaGFyZWQgb25jZSB5b3UgaGF2ZSBhIGNvbmZpcm1lZCBib29raW5nIHdpdGggYW5vdGhlciB1c2VyLiBUaGlzIGlzIGhvdyB3ZSBjYW4gYWxsIGdldCBpbiB0b3VjaC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwaG9uZU51bWJlckluZm9cIixcbiAgfSxcbiAgcHJlZmVycmVkTGFuZ3VhZ2VJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZExhbmd1YWdlSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldl4oCZbGwgc2VuZCB5b3UgbWVzc2FnZXMgaW4gdGhpcyBsYW5ndWFnZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwcmVmZXJyZWRMYW5ndWFnZUluZm9cIixcbiAgfSxcbiAgcHJlZmVycmVkQ3VycmVuY3lJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnByZWZlcnJlZEN1cnJlbmN5SW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldl4oCZbGwgc2hvdyB5b3UgcHJpY2VzIGluIHRoaXMgY3VycmVuY3kuXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJlZmVycmVkQ3VycmVuY3lJbmZvXCIsXG4gIH0sXG4gIGluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLmluZm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGVscCBvdGhlciBwZW9wbGUgZ2V0IHRvIGtub3cgeW91LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImluZm8xXCIsXG4gIH0sXG4gIGluZm8yOiB7XG4gICAgaWQ6IFwiYXBwLmluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRlbGwgdGhlbSBhYm91dCB0aGUgdGhpbmdzIHlvdSBsaWtlOiBXaGF0IGFyZSA1IHRoaW5ncyB5b3UgY2Fu4oCZdCBsaXZlIHdpdGhvdXQ/IFNoYXJlIHlvdXIgZmF2b3JpdGUgdHJhdmVsIGRlc3RpbmF0aW9ucywgYm9va3MsIG1vdmllcywgc2hvd3MsIG11c2ljLCBmb29kLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImluZm8yXCIsXG4gIH0sXG4gIGluZm8zOiB7XG4gICAgaWQ6IFwiYXBwLmluZm8zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRlbGwgdGhlbSB3aGF0IGl04oCZcyBsaWtlIHRvIGhhdmUgeW91IGFzIGEgZ3Vlc3Qgb3IgaG9zdDogV2hhdOKAmXMgeW91ciBzdHlsZSBvZiB0cmF2ZWxpbmc/IE9mIGhvc3Rpbmc/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW5mbzNcIixcbiAgfSxcbiAgaW5mbzQ6IHtcbiAgICBpZDogXCJhcHAuaW5mbzRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUZWxsIHRoZW0gYWJvdXQgeW91OiBEbyB5b3UgaGF2ZSBhIGxpZmUgbW90dG8/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW5mbzRcIixcbiAgfSxcbiAgcHJvZmlsZVBob3RvSW5mbzoge1xuICAgIGlkOiBcImFwcC5wcm9maWxlUGhvdG9JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNsZWFyIGZyb250YWwgZmFjZSBwaG90b3MgYXJlIGFuIGltcG9ydGFudCB3YXkgZm9yIGhvc3RzIGFuZCBndWVzdHMgdG8gbGVhcm4gYWJvdXQgZWFjaCBvdGhlci4gSXTigJlzIG5vdCBtdWNoIGZ1biB0byBob3N0IGEgbGFuZHNjYXBlISBQbGVhc2UgdXBsb2FkIGEgcGhvdG8gdGhhdCBjbGVhcmx5IHNob3dzIHlvdXIgZmFjZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9maWxlIHBob3RvIHVwbG9hZCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICB2ZXJpZmllZEluZm86IHtcbiAgICBpZDogXCJhcHAudmVyaWZpZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZpZWQgSW5mb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZlcmlmaWVkIEluZm9cIixcbiAgfSxcbiAgdmVyaWZpZWRFbWFpbDoge1xuICAgIGlkOiBcImFwcC52ZXJpZmllZEVtYWlsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGhhdmUgdmVyaWZpZWQgeW91ciBlbWFpbCBhZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IGhhdmUgdmVyaWZpZWQgeW91ciBlbWFpbCBhZGRyZXNzXCIsXG4gIH0sXG4gIGZhY2Vib29rSW5mbzoge1xuICAgIGlkOiBcImFwcC5mYWNlYm9va0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU2lnbiBpbiB3aXRoIEZhY2Vib29rIGFuZCBkaXNjb3ZlciB5b3VyIHRydXN0ZWQgY29ubmVjdGlvbnMgdG8gaG9zdHMgYW5kIGd1ZXN0cyBhbGwgb3ZlciB0aGUgd29ybGQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFjZWJvb2sgaW5mb3JtYXRpb25cIixcbiAgfSxcbiAgZGlzY29ubmVjdDoge1xuICAgIGlkOiBcImFwcC5kaXNjb25uZWN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzY29ubmVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2Nvbm5lY3QgYnV0dG9uXCIsXG4gIH0sXG4gIGdvb2dsZUluZm86IHtcbiAgICBpZDogXCJhcHAuZ29vZ2xlSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJDb25uZWN0IHlvdXIgYWNjb3VudCB0byB5b3VyIEdvb2dsZSBhY2NvdW50IGZvciBzaW1wbGljaXR5IGFuZCBlYXNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdvb2dsZSBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBub3RWZXJpZmllZERldGFpbHM6IHtcbiAgICBpZDogXCJhcHAubm90VmVyaWZpZWREZXRhaWxzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGhhdmVuJ3QgdmVyaWZpZWQgYW55IG9mIHRoZSBiZWxvdyBpdGVtc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCB2ZXJpZmllZCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICBub3RWZXJpZmllZEluZm86IHtcbiAgICBpZDogXCJhcHAubm90VmVyaWZpZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm90IFZlcmlmaWVkIEluZm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJOb3QgVmVyaWZpZWQgSW5mb1wiLFxuICB9LFxuICBwbGVhc2VWZXJpZnk6IHtcbiAgICBpZDogXCJhcHAucGxlYXNlVmVyaWZ5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmVyaWZ5IHlvdXIgZW1haWwgYWRkcmVzcy5cIixcbiAgfSxcbiAgdmVyaWZ5RW1haWw6IHtcbiAgICBpZDogXCJhcHAudmVyaWZ5RW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWZXJpZnkgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZnkgRW1haWxcIixcbiAgfSxcbiAgY29ubmVjdDoge1xuICAgIGlkOiBcImFwcC5jb25uZWN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29ubmVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbm5lY3QgYnV0dG9uXCIsXG4gIH0sXG4gIHJldmlld1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhhbmsgeW91IGZvciByZXZpZXdpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgcmV2aWV3VGl0bGUyOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1RpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJUaGFuayB5b3UgZm9yIHJldmlld2luZyB5b3VyIGd1ZXN0LiBZb3VyIHJldmlldyB3aWxsIGJlIHZpc2libGUgb24gdGhlaXIgcHJvZmlsZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgZmluaXNoOiB7XG4gICAgaWQ6IFwiYXBwLmZpbmlzaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpbmlzaFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpbmlzaCBidXR0b25cIixcbiAgfSxcbiAgcmV2aWV3UGFnZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1BhZ2VUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaWJlIHlvdXIgZXhwZXJpZW5jZSAocmVxdWlyZWQpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld1BhZ2VUaXRsZTE6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3UGFnZVRpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgcmV2aWV3IHdpbGwgYmUgcHVibGljIG9uIHlvdXIgZ3Vlc3QgcHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXZpZXdUZXh0QXJlYToge1xuICAgIGlkOiBcImFwcC5yZXZpZXdUZXh0QXJlYVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgd2FzIGl0IGxpa2UgdG8gaG9zdCB0aGlzIGd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld1JhdGluZzoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdSYXRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPdmVyYWxsIFJhdGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBpZDogXCJhcHAuc3VibWl0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3VibWl0IGJ1dHRvblwiLFxuICB9LFxuICByZXZpZXdFcnJvcjE6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3RXJyb3IxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIHdyaXRlIHlvdXIgcmV2aWV3IVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXZpZXdFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3RXJyb3IyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIHJhdGUgeW91ciByZXZpZXchXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHBhc3RSZXZpZXdUaXRsZToge1xuICAgIGlkOiBcImFwcC5wYXN0UmV2aWV3VGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXN0IFJldmlld3MgWW914oCZdmUgV3JpdHRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICBub1Jldmlldzoge1xuICAgIGlkOiBcImFwcC5ub1Jldmlld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoZXJlIGFyZSBubyByZXZpZXdzIGFib3V0IHlvdSB5ZXQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIG5vUmV2aWV3UGFzdDoge1xuICAgIGlkOiBcImFwcC5ub1Jldmlld1Bhc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGVyZSBhcmUgbm8gcmV2aWV3cyBwdWJsaXNoZWQgYnkgeW91LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXNwb25zZToge1xuICAgIGlkOiBcImFwcC5yZXNwb25zZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc3BvbnNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld1BhbmVsVGl0bGUxOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1BhbmVsVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXdzIEFib3V0IHlvdVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICByZXZpZXdQYW5lbFRpdGxlMjoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdQYW5lbFRpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlld3MgQnkgeW91XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIHJldmlld0NvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3Q29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJOb2JvZHkgdG8gcmV2aWV3IHJpZ2h0IG5vdy4gTG9va3MgbGlrZSBpdOKAmXMgdGltZSBmb3IgYW5vdGhlciB0cmlwIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICBzdWJtaXRSZXZpZXdGb3I6IHtcbiAgICBpZDogXCJhcHAuc3VibWl0UmV2aWV3Rm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VibWl0IGEgcHVibGljIHJldmlldyBmb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgd3JpdGVSZXZpZXc6IHtcbiAgICBpZDogXCJhcHAud3JpdGVSZXZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXcml0ZSBhIFJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld1wiLFxuICB9LFxuICB2aWV3TGl0bmVyYXk6IHtcbiAgICBpZDogXCJhcHAudmlld0xpdG5lcmF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlldyBJdGluZXJhcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgcmV2aWV3V3JpdHRlbjoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdXcml0dGVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlJldmlld3MgYXJlIHdyaXR0ZW4gYXQgdGhlIGVuZCBvZiBhIHJlc2VydmF0aW9uLiBSZXZpZXdzIHlvdeKAmXZlIHJlY2VpdmVkIHdpbGwgYmUgdmlzaWJsZSBib3RoIGhlcmUgYW5kIG9uIHlvdXIgcHVibGljIHByb2ZpbGUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIGhleToge1xuICAgIGlkOiBcImFwcC5oZXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIZXkgSeKAmW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgcmVwb3J0VXNlcjoge1xuICAgIGlkOiBcImFwcC5yZXBvcnRVc2VyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVwb3J0IHRoaXMgdXNlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgcHJvZmlsZVwiLFxuICB9LFxuICBub1ZlcmlmaWNhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAubm9WZXJpZmljYXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gdmVyaWZpY2F0aW9ucyB5ZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgYWRkVmVyaWZpY2F0aW9uczoge1xuICAgIGlkOiBcImFwcC5hZGRWZXJpZmljYXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIFZlcmlmaWNhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgZW1haWxDb25maXJtZWQ6IHtcbiAgICBpZDogXCJhcHAuZW1haWxDb25maXJtZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbCBDb25maXJtZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgZmJDb25uZWN0ZWQ6IHtcbiAgICBpZDogXCJhcHAuZmJDb25uZWN0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGYWNlYm9vayBDb25uZWN0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgZ29vZ2xlQ29ubmVjdGVkOiB7XG4gICAgaWQ6IFwiYXBwLmdvb2dsZUNvbm5lY3RlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvb2dsZSBDb25uZWN0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHByb2ZpbGVcIixcbiAgfSxcbiAgbW9yZVZlcmlmaWNhdGlvbnM6IHtcbiAgICBpZDogXCJhcHAubW9yZVZlcmlmaWNhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgTW9yZSBWZXJpZmljYXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBwcm9maWxlXCIsXG4gIH0sXG4gIGFkZFBheW91dDoge1xuICAgIGlkOiBcImFwcC5hZGRQYXlvdXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgUGF5b3V0IE1ldGhvZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dFwiLFxuICB9LFxuICBhZGRyZXNzMToge1xuICAgIGlkOiBcImFwcC5hZGRyZXNzMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkZHJlc3MgTGluZSAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IEZvcm1cIixcbiAgfSxcbiAgYWRkcmVzczI6IHtcbiAgICBpZDogXCJhcHAuYWRkcmVzczJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRyZXNzIExpbmUgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIGNpdHk6IHtcbiAgICBpZDogXCJhcHAuY2l0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGlkOiBcImFwcC5zdGF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXRlIC8gUHJvdmluY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICB6aXBDb2RlOiB7XG4gICAgaWQ6IFwiYXBwLnppcENvZGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJaSVAgQ29kZSAvIFBvc3RhbCBDb2RlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IEZvcm1cIixcbiAgfSxcbiAgcGF5b3V0RXJyb3IxOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEVycm9yMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdW50cnkgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBwYXlvdXRFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0RXJyb3IyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2l0eSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIHBheW91dEVycm9yMzoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRFcnJvcjNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF0ZSAvIFByb3ZpbmNlIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IEZvcm1cIixcbiAgfSxcbiAgcGF5b3V0RXJyb3I0OiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEVycm9yNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlpJUCBDb2RlIC8gUG9zdGFsIENvZGUgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBwYXlvdXRFcnJvcjU6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0RXJyb3I1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW50ZXIgdmFsaWQgZW1haWwgYWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIHBheW91dEVycm9yNjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRFcnJvcjZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDdXJyZW5jeSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIGNvdW50cnk6IHtcbiAgICBpZDogXCJhcHAuY291bnRyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdW50cnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgRm9ybVwiLFxuICB9LFxuICBjaG9vc2VDb3VudHJ5OiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUNvdW50cnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgQ291bnRyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBGb3JtXCIsXG4gIH0sXG4gIGJhY2s6IHtcbiAgICBpZDogXCJhcHAuYmFja1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYWNrIGJ1dHRvblwiLFxuICB9LFxuICBwYXlwYWxJbnRybzE6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsSW50cm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBheVBhbCBpcyBhbiBvbmxpbmUgcGF5bWVudCBwcm9jZXNzaW5nIHNlcnZpY2UgdGhhdCBhbGxvd3MgeW91IHRvIHJlY2VpdmUgcGF5bWVudHMgZnJvbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheXBhbCBpbnRyb1wiLFxuICB9LFxuICBwYXlwYWxJbnRybzI6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsSW50cm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG8gdXNlIFBheVBhbCB3aXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsIGludHJvXCIsXG4gIH0sXG4gIHBheXBhbEludHJvMzoge1xuICAgIGlkOiBcImFwcC5wYXlwYWxJbnRybzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ5b3UgbXVzdCBoYXZlIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCBQYXlQYWwuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsIGludHJvXCIsXG4gIH0sXG4gIHBheXBhbEludHJvNDoge1xuICAgIGlkOiBcImFwcC5wYXlwYWxJbnRybzRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMZWFybiBtb3JlIGFib3V0IFBheVBhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheXBhbCBpbnRyb1wiLFxuICB9LFxuICBwYXlwYWxFbWFpbDoge1xuICAgIGlkOiBcImFwcC5wYXlwYWxFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyBhc3NvY2lhdGVkIHdpdGggeW91ciBleGlzdGluZyBQYXlQYWwgYWNjb3VudC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlwYWwgZW1haWxcIixcbiAgfSxcbiAgcGF5cGFsQ3VycmVuY3k6IHtcbiAgICBpZDogXCJhcHAucGF5cGFsQ3VycmVuY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbiB3aGF0IGN1cnJlbmN5IHdvdWxkIHlvdSBsaWtlIHRvIGJlIHBhaWQ/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5cGFsIGN1cnJlbmN5XCIsXG4gIH0sXG4gIHBheW91dEludHJvMToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRJbnRybzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiUGF5b3V0cyBmb3IgcmVzZXJ2YXRpb25zIGFyZSByZWxlYXNlZCB0byB5b3UgdGhlIGRheSBhZnRlciB5b3VyIGd1ZXN0IGNoZWNrcyBpbiwgYW5kIGl0IHRha2VzIHNvbWUgYWRkaXRpb25hbCB0aW1lIGZvciB0aGUgbW9uZXkgdG8gYXJyaXZlIGRlcGVuZGluZyBvbiB5b3VyIHBheW91dCBtZXRob2QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IGludHJvXCIsXG4gIH0sXG4gIHBheW91dEludHJvMjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRJbnRybzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2UgY2FuIHNlbmQgbW9uZXkgdG8gcGVvcGxlIGluIFVuaXRlZCBTdGF0ZXMgd2l0aCB0aGVzZSBwYXlvdXQgbWV0aG9kcy4gV2hpY2ggZG8geW91IHByZWZlcj9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaW50cm9cIixcbiAgfSxcbiAgcGF5b3V0VGl0bGU6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRob2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaGVhZGVyXCIsXG4gIH0sXG4gIHBheW91dFRpdGxlMToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUaXRsZTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcm9jZXNzZWQgaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaGVhZGVyXCIsXG4gIH0sXG4gIHBheW91dFRpdGxlMjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUaXRsZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGZWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IGhlYWRlclwiLFxuICB9LFxuICBwYXlvdXRUaXRsZTM6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VGl0bGUzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3VycmVuY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgaGVhZGVyXCIsXG4gIH0sXG4gIHBheW91dFRpdGxlNDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUaXRsZTRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXRhaWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IGhlYWRlclwiLFxuICB9LFxuICBub1BheW1lbnRGb3VuZDoge1xuICAgIGlkOiBcImFwcC5ub1BheW1lbnRGb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIFBheW1lbnQgbWV0aG9kIGZvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcGF5bWVudFwiLFxuICB9LFxuICBwYXlvdXRNZXRob2Q6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0TWV0aG9kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5b3V0IE1ldGhvZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIGFkZFBheW91dE1ldGhvZDoge1xuICAgIGlkOiBcImFwcC5hZGRQYXlvdXRNZXRob2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUbyBnZXQgcGFpZCwgeW91IG5lZWQgdG8gc2V0IHVwIGEgcGF5b3V0IG1ldGhvZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcGF5bWVudFJlbGVhc2VJbmZvMToge1xuICAgIGlkOiBcImFwcC5wYXltZW50UmVsZWFzZUluZm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcInJlbGVhc2VzIHBheW91dHMgYWJvdXQgMjQgaG91cnMgYWZ0ZXIgYSBndWVzdOKAmXMgc2NoZWR1bGVkIGNoZWNrLWluIHRpbWUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICBwYXltZW50UmVsZWFzZUluZm8yOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRSZWxlYXNlSW5mbzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGhlIHRpbWUgaXQgdGFrZXMgZm9yIHRoZSBmdW5kcyB0byBhcHBlYXIgaW4geW91ciBhY2NvdW50IGRlcGVuZHMgb24geW91ciBwYXlvdXQgbWV0aG9kLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcGF5b3V0VGl0bGVCbG9jazE6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VGl0bGVCbG9jazFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2hlbiB5b3UgcmVjZWl2ZSBhIHBheW1lbnQgZm9yIGEgcmVzZXJ2YXRpb24sIHdlIGNhbGwgdGhhdCBwYXltZW50IHRvIHlvdSBhIOKAnHBheW91dOKAnS4gT3VyIHNlY3VyZSBwYXltZW50IHN5c3RlbSBzdXBwb3J0cyBzZXZlcmFsIHBheW91dCBtZXRob2RzLCB3aGljaCBjYW4gYmUgc2V0dXAgYW5kIGVkaXRlZCBoZXJlLiBZb3VyIGF2YWlsYWJsZSBwYXlvdXQgb3B0aW9ucyBhbmQgY3VycmVuY2llcyBkaWZmZXIgYnkgY291bnRyeS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHBheW91dEZhcToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRGYXFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWaXNpdCB0aGUgUGF5b3V0IEZBUVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGlkOiBcImFwcC5vcHRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3B0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgZGVmYXVsdDoge1xuICAgIGlkOiBcImFwcC5kZWZhdWx0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVmYXVsdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcmVhZHk6IHtcbiAgICBpZDogXCJhcHAucmVhZHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFkeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgc2V0RGVmYXVsdDoge1xuICAgIGlkOiBcImFwcC5zZXREZWZhdWx0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2V0IERlZmF1bHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIHJlbW92ZToge1xuICAgIGlkOiBcImFwcC5yZW1vdmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZW1vdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgTWV0aG9kXCIsXG4gIH0sXG4gIGRpcmVjdERlcG9zaXQ6IHtcbiAgICBpZDogXCJhcHAuZGlyZWN0RGVwb3NpdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRpcmVjdCBEZXBvc2l0LCBQYXlwYWwsIGV0Yy4uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICB0cmFuc2FjdGlvblBheW91dDoge1xuICAgIGlkOiBcImFwcC50cmFuc2FjdGlvblBheW91dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYW5zYWN0aW9uIGhpc3RvcnlcIixcbiAgfSxcbiAgdHJhbnNmZXJUbzoge1xuICAgIGlkOiBcImFwcC50cmFuc2ZlclRvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhbnNmZXIgdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmFuc2FjdGlvbiBoaXN0b3J5XCIsXG4gIH0sXG4gIHRyYW5zZmVyRGF0ZToge1xuICAgIGlkOiBcImFwcC50cmFuc2ZlckRhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGF0ZVwiLFxuICB9LFxuICB0cmFuc2ZlclR5cGU6IHtcbiAgICBpZDogXCJhcHAudHJhbnNmZXJUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlR5cGVcIixcbiAgfSxcbiAgdHJhbnNmZXJBbW91bnQ6IHtcbiAgICBpZDogXCJhcHAudHJhbnNmZXJBbW91bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbW91bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbW91bnRcIixcbiAgfSxcbiAgcGFpZE91dDoge1xuICAgIGlkOiBcImFwcC5wYWlkT3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFpZCBPdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWlkIE91dFwiLFxuICB9LFxuICByZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzZXJ2YXRpb25cIixcbiAgfSxcbiAgcGF5VG86IHtcbiAgICBpZDogXCJhcHAucGF5VG9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXkgdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXkgdG9cIixcbiAgfSxcbiAgZ3Jvc3NFYXJuaW5nczoge1xuICAgIGlkOiBcImFwcC5ncm9zc0Vhcm5pbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Jvc3MgRWFybmluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHcm9zcyBFYXJuaW5nc1wiLFxuICB9LFxuICBhbGxMaXN0aW5nczoge1xuICAgIGlkOiBcImFwcC5hbGxMaXN0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFsbCBsaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbCBsaXN0aW5nc1wiLFxuICB9LFxuICBub1RyYW5zYWN0aW9uczoge1xuICAgIGlkOiBcImFwcC5ub1RyYW5zYWN0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIFRyYW5zYWN0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIFRyYW5zYWN0aW9uc1wiLFxuICB9LFxuICB0cmFuc2FjdGlvbnNBZGRQYXlvdXQ6IHtcbiAgICBpZDogXCJhcHAudHJhbnNhY3Rpb25zQWRkUGF5b3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIFBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYW5zYWN0aW9uIHBheW91dFwiLFxuICB9LFxuICBjb21wbGV0ZWRUcmFuc2FjdGlvbnM6IHtcbiAgICBpZDogXCJhcHAuY29tcGxldGVkVHJhbnNhY3Rpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29tcGxldGVkIFRyYW5zYWN0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbXBsZXRlZCBUcmFuc2FjdGlvbnNcIixcbiAgfSxcbiAgZnV0dXJlVHJhbnNhY3Rpb25zOiB7XG4gICAgaWQ6IFwiYXBwLmZ1dHVyZVRyYW5zYWN0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZ1dHVyZSBUcmFuc2FjdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZWQgVHJhbnNhY3Rpb25zXCIsXG4gIH0sXG4gIGV4cG9ydENTVjoge1xuICAgIGlkOiBcImFwcC5leHBvcnRDU1ZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeHBvcnQgdG8gQ1NWXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwb3J0IHRvIENTVlwiLFxuICB9LFxuICBjaGFuZ2VQYXNzd29yZDoge1xuICAgIGlkOiBcImFwcC5jaGFuZ2VQYXNzd29yZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoYW5nZSBZb3VyIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hhbmdlIFlvdXIgUGFzc3dvcmRcIixcbiAgfSxcbiAgb2xkUGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAub2xkUGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPbGQgUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPbGQgUGFzc3dvcmRcIixcbiAgfSxcbiAgbmV3UGFzc3dvcmQ6IHtcbiAgICBpZDogXCJhcHAubmV3UGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZXcgUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOZXcgUGFzc3dvcmRcIixcbiAgfSxcbiAgY29uZmlybVBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1QYXNzd29yZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25maXJtIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHVwZGF0ZVBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLnVwZGF0ZVBhc3N3b3JkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXBkYXRlIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXBkYXRlIFBhc3N3b3JkXCIsXG4gIH0sXG4gIHBhc3N3b3JkRXJyb3IxOiB7XG4gICAgaWQ6IFwiYXBwLnBhc3N3b3JkRXJyb3IxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT2xkIFBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgRXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRFcnJvcjI6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRFcnJvcjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZXcgUGFzc3dvcmQgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBFcnJvclwiLFxuICB9LFxuICBwYXNzd29yZEVycm9yMzoge1xuICAgIGlkOiBcImFwcC5wYXNzd29yZEVycm9yM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5ldyBQYXNzd29yZCBtdXN0IGJlIG1pbmltdW0gOCBjaGFyYWN0ZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgRXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRFcnJvcjQ6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRFcnJvcjRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb25maXJtIFBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgRXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRFcnJvcjU6IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRFcnJvcjVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb25maXJtIFBhc3N3b3JkIG11c3QgYmUgbWluaW11bSA4IGNoYXJhY3RlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBFcnJvclwiLFxuICB9LFxuICBub01lc3NhZ2VzVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubm9NZXNzYWdlc1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gTWVzc2FnZXMgeWV0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluYm94XCIsXG4gIH0sXG4gIG5vTWVzc2FnZXNUaXRsZTE6IHtcbiAgICBpZDogXCJhcHAubm9NZXNzYWdlc1RpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXaGVuIGhvc3RzIHJlc3BvbmQgdG8geW91ciBpbnF1aXJpZXMgb3IgYm9va2luZyByZXF1ZXN0cywgeW91J2xsIHNlZSB0aGVpciBtZXNzYWdlcyBoZXJlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluYm94XCIsXG4gIH0sXG4gIG5vTWVzc2FnZXNUaXRsZTI6IHtcbiAgICBpZDogXCJhcHAubm9NZXNzYWdlc1RpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJXaGVuIGd1ZXN0cyByZXNwb25kIHRvIHlvdXIgaW5xdWlyaWVzIG9yIGJvb2tpbmcgcmVxdWVzdHMsIHlvdSdsbCBzZWUgdGhlaXIgbWVzc2FnZXMgaGVyZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmJveFwiLFxuICB9LFxuICB0cmF2ZWxpbmc6IHtcbiAgICBpZDogXCJhcHAudHJhdmVsaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhdmVsbGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYXZlbGluZ1wiLFxuICB9LFxuICBlcnJvck1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAuZXJyb3JNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT29wcyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmVmcmVzaCBvciBjaGVjayBiYWNrIGxhdGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXJyb3IgbWVzc2FnZVwiLFxuICB9LFxuICByZWNlaXB0OiB7XG4gICAgaWQ6IFwiYXBwLnJlY2VpcHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWNlaXB0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdFwiLFxuICB9LFxuICBjdXN0b21lclJlY2VpcHQ6IHtcbiAgICBpZDogXCJhcHAuY3VzdG9tZXJSZWNlaXB0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3VzdG9tZXIgUmVjZWlwdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN1c3RvbWVyIFJlY2VpcHRcIixcbiAgfSxcbiAgY29uZmlybWF0aW9uQ29kZToge1xuICAgIGlkOiBcImFwcC5jb25maXJtYXRpb25Db2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uZmlybWF0aW9uIENvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25maXJtYXRpb24gQ29kZVwiLFxuICB9LFxuICBuYW1lOiB7XG4gICAgaWQ6IFwiYXBwLm5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTmFtZVwiLFxuICB9LFxuICB0cmF2ZWxEZXN0aW5hdGlvbjoge1xuICAgIGlkOiBcImFwcC50cmF2ZWxEZXN0aW5hdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyYXZlbCBEZXN0aW5hdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYXZlbCBEZXN0aW5hdGlvblwiLFxuICB9LFxuICBkdXJhdGlvbjoge1xuICAgIGlkOiBcImFwcC5kdXJhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkR1cmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRHVyYXRpb25cIixcbiAgfSxcbiAgYWNjb21tb2RhdGlvblR5cGU6IHtcbiAgICBpZDogXCJhcHAuYWNjb21tb2RhdGlvblR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0aW9uIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvbW1vZGF0aW9uIFR5cGVcIixcbiAgfSxcbiAgYWNjb21tb2RhdGlvbkFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAuYWNjb21tb2RhdGlvbkFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0aW9uIEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvbW1vZGF0aW9uIEFkZHJlc3NcIixcbiAgfSxcbiAgYWNjb21tb2RhdGlvbkhvc3Q6IHtcbiAgICBpZDogXCJhcHAuYWNjb21tb2RhdGlvbkhvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvbW1vZGF0aW9uIEhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY2NvbW1vZGF0aW9uIEhvc3RcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25DaGFyZ2VzOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uQ2hhcmdlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VydmF0aW9uIENoYXJnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbiBDaGFyZ2VzXCIsXG4gIH0sXG4gIHBheW1lbnRSZWNlaXZlZDoge1xuICAgIGlkOiBcImFwcC5wYXltZW50UmVjZWl2ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50IFJlY2VpdmVkOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgUmVjZWl2ZWQ6XCIsXG4gIH0sXG4gIHJlY2VpcHRJbmZvMToge1xuICAgIGlkOiBcImFwcC5yZWNlaXB0SW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiaXMgYXV0aG9yaXplZCB0byBhY2NlcHQgYWNjb21vZGF0aW9uIGZlZXMgb24gYmVoYWxmIG9mIHRoZSBIb3N0IGFzIHRoZWlyIGxpbWl0ZWQgYWdlbnQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICByZWNlaXB0SW5mbzI6IHtcbiAgICBpZDogXCJhcHAucmVjZWlwdEluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRoaXMgbWVhbnMgdGhhdCB5b3VyIHBheW1lbnQgb2JsaWdhdGlvbiB0byB0aGUgSG9zdCBpcyBzYXRpc2ZpZWQgYnkgeW91ciBwYXltZW50IHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVjZWlwdCBpbmZvcm1hdGlvblwiLFxuICB9LFxuICByZWNlaXB0SW5mbzM6IHtcbiAgICBpZDogXCJhcHAucmVjZWlwdEluZm8zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkFueSBvZiB0aGUgSG9zdCdzIGRpc2FncmVlbWVudHMgYnkgdGhlIEhvc3QgcmVnYXJkaW5nIHRoYXQgcGF5bWVudCBtdXN0IGJlIHNldHRsZWQgYmV0d2VlbiB0aGUgSG9zdCBhbmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWNlaXB0IGluZm9ybWF0aW9uXCIsXG4gIH0sXG4gIGl0aW5lcmF5VGl0bGU6IHtcbiAgICBpZDogXCJhcHAuaXRpbmVyYXlUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdeKAmXJlIGdvaW5nIHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXRpbmVyYXJ5XCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uQ29kZToge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbkNvZGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBjb2RlOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkl0aW5lcmFyeVwiLFxuICB9LFxuICBhZGRyZXNzOiB7XG4gICAgaWQ6IFwiYXBwLmFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRyZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXRpbmVyYXJ5XCIsXG4gIH0sXG4gIHZpZXdMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlldyBMaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBMaXN0aW5nXCIsXG4gIH0sXG4gIG1lc3NhZ2VIb3N0OiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VIb3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZSBIb3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXRpbmVyYXJ5XCIsXG4gIH0sXG4gIGJpbGxpbmc6IHtcbiAgICBpZDogXCJhcHAuYmlsbGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJpbGxpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJdGluZXJhcnlcIixcbiAgfSxcbiAgbWVzc2FnZUFjdGlvbjE6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZUFjdGlvbjFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgbWVzc2FnZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2VcIixcbiAgfSxcbiAgbWVzc2FnZUFjdGlvbjI6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZUFjdGlvbjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJhYm91dCB0aGVpciBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlXCIsXG4gIH0sXG4gIG1lc3NhZ2VBY3Rpb25JbmZvOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VBY3Rpb25JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1vc3QgaG9zdHMgcmVzcG9uZCB3aXRoaW4gMjQgaG91cnMuIElmIHRoaXMgbGlzdGluZyBpcyB5b3VyIHRvcCBjaG9pY2UsIGVudGVyIHlvdXIgcGF5bWVudCBpbmZvcm1hdGlvbiB0byBvZmZpY2lhbGx5IHJlcXVlc3QgYSByZXNlcnZhdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2VcIixcbiAgfSxcbiAgUmVxdWVzdFRvQm9vazoge1xuICAgIGlkOiBcImFwcC5SZXF1ZXN0VG9Cb29rXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVxdWVzdCB0byBib29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCB0byBib29rXCIsXG4gIH0sXG4gIG1lc3NhZ2VBY3Rpb24zOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VBY3Rpb24zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBib29raW5nIHJlcXVlc3Qgc2VudCB0b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgbWVzc2FnZVwiLFxuICB9LFxuICBtZXNzYWdlQWN0aW9uNDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlQWN0aW9uNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImZvciB0aGVpciBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlXCIsXG4gIH0sXG4gIGNhbmNlbEluZm86IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJNb3N0IGhvc3RzIHJlc3BvbmQgd2l0aGluIDI0IGhvdXJzLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBjb250aW51ZSB3aXRoIHRoaXMgaG9zdCBmdXJ0aGVyLCB5b3UgY2FuIGNhbmNlbCB0aGlzIHJlcXVlc3QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlXCIsXG4gIH0sXG4gIGNhbmNlbFJlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbFJlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsIFJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIFJlc2VydmF0aW9uXCIsXG4gIH0sXG4gIHJlcXVlc3REZWNsaW5lZDoge1xuICAgIGlkOiBcImFwcC5yZXF1ZXN0RGVjbGluZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1ZXN0IGRlY2xpbmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBkZWNsaW5lZFwiLFxuICB9LFxuICBndWVzdERlY2xpbmVkSW5mbzoge1xuICAgIGlkOiBcImFwcC5ndWVzdERlY2xpbmVkSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJZb3VyIHJlcXVlc3QgaXMgZGVjbGluZWQgYnkgaG9zdC4gWW91IGNhbiBjaG9vc2UgZGlmZmVyZW50IGRhdGVzIG9yIHNlYXJjaCBmb3Igb3RoZXIgbGlzdGluZy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXF1ZXN0IGRlY2xpbmVkXCIsXG4gIH0sXG4gIHJlcXVlc3RBcHByb3ZlZEFjdGlvbjE6IHtcbiAgICBpZDogXCJhcHAucmVxdWVzdEFwcHJvdmVkQWN0aW9uMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgYm9va2luZyByZXF1ZXN0IGFwcHJvdmVkIGJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBhcHByb3ZlZFwiLFxuICB9LFxuICByZXF1ZXN0VGltZUluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLnJlcXVlc3RUaW1lSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgaGF2ZSB0byBib29rIHdpdGhpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgYXBwcm92ZWRcIixcbiAgfSxcbiAgcmVxdWVzdFRpbWVJbmZvMjoge1xuICAgIGlkOiBcImFwcC5yZXF1ZXN0VGltZUluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwib3IgaXQgd2lsbCBleHBpcmUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBhcHByb3ZlZFwiLFxuICB9LFxuICBib29raW5nQ29uZmlybWVkSW5mbzE6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0NvbmZpcm1lZEluZm8xXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBib29raW5nIGlzIGNvbmZpcm1lZCB3aXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBjb25maXJtZWRcIixcbiAgfSxcbiAgYm9va2luZ0NhbmNlbGVkSW5mbzoge1xuICAgIGlkOiBcImFwcC5ib29raW5nQ2FuY2VsZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdSBjYW4gY29udGFjdCB5b3VyIGhvc3QgYW5kIGRvIG5lY2Vzc2FyeSBhcnJhbmdlbWVudHMgb3IgeW91IGNhbiBjYW5jZWwgeW91ciByZXNlcnZhdGlvbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGNhbmNlbGRcIixcbiAgfSxcbiAgYm9va2luZ0V4cGlyZWRUaXRsZToge1xuICAgIGlkOiBcImFwcC5ib29raW5nRXhwaXJlZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBib29raW5nIHJlcXVlc3QgaGFzIGV4cGlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGV4cGlyZWRcIixcbiAgfSxcbiAgYm9va2luZ0V4cGlyZWRJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdFeHBpcmVkSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJUcnkgc2VuZGluZyByZXF1ZXN0IGFnYWluIG9yIHNlbmQgYW4gaW5xdWlyeSB0byBnZXQgaW4gdG91Y2ggd2l0aCB0aGUgaG9zdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgZXhwaXJlZFwiLFxuICB9LFxuICBnb3RvTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5nb3RvTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdvIHRvIExpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHbyB0byBMaXN0aW5nXCIsXG4gIH0sXG4gIGJvb2tpbmdSZXF1ZXN0Q2FuY2VsMToge1xuICAgIGlkOiBcImFwcC5ib29raW5nUmVxdWVzdENhbmNlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tpbmcgcmVxdWVzdCBjYW5jZWxlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgcmVxdWVzdCBjYW5jZWxlZFwiLFxuICB9LFxuICBib29raW5nUmVxdWVzdENhbmNlbDI6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ1JlcXVlc3RDYW5jZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGJvb2tpbmcgcmVxdWVzdCBoYXMgYmVlbiBjYW5jZWxlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIGJvb2tpbmcgcmVxdWVzdCBoYXMgYmVlbiBjYW5jZWxlZC5cIixcbiAgfSxcbiAgaG9zdEFjdGlvbjE6IHtcbiAgICBpZDogXCJhcHAuaG9zdEFjdGlvbjFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEFjdGlvbiBCbG9jay5cIixcbiAgfSxcbiAgaG9zdEFjdGlvbjI6IHtcbiAgICBpZDogXCJhcHAuaG9zdEFjdGlvbjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ0byBib29rIGJ5IHByZS1hcHByb3ZpbmcgdGhpcyB0cmlwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBBY3Rpb24gQmxvY2suXCIsXG4gIH0sXG4gIGhvc3RBY3Rpb24zOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RBY3Rpb24zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBBY3Rpb24gQmxvY2suXCIsXG4gIH0sXG4gIGhvc3RBY3Rpb240OiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RBY3Rpb240XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwia25vdyB0aGVzZSBkYXRlcyBhcmUgYXZhaWxhYmxlIGJ5IHByZS1hcHByb3ZpbmcgdGhlbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEFjdGlvbiBCbG9jay5cIixcbiAgfSxcbiAgaG9zdFJlc3BvbnNlVGltZTE6IHtcbiAgICBpZDogXCJhcHAuaG9zdFJlc3BvbnNlVGltZTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNwb25kIHdpdGhpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgQWN0aW9uIEJsb2NrLlwiLFxuICB9LFxuICBob3N0UmVzcG9uc2VUaW1lMjoge1xuICAgIGlkOiBcImFwcC5ob3N0UmVzcG9uc2VUaW1lMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInRvIG1haW50YWluIHlvdXIgcmVzcG9uc2UgcmF0ZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEFjdGlvbiBCbG9jay5cIixcbiAgfSxcbiAgcHJlQXBwcm92ZToge1xuICAgIGlkOiBcImFwcC5wcmVBcHByb3ZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlLWFwcHJvdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmUtYXBwcm92ZVwiLFxuICB9LFxuICBndWVzdFJlcXVlc3Q6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RSZXF1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwic2VudCBhIHJlcXVlc3QgdG8gYm9va2luZyBmb3IgeW91ciBsaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgUmVxdWVzdFwiLFxuICB9LFxuICByZXF1ZXN0QXBwcm92ZWQ6IHtcbiAgICBpZDogXCJhcHAucmVxdWVzdEFwcHJvdmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVxdWVzdCBBcHByb3ZlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgQXBwcm92ZWRcIixcbiAgfSxcbiAgdGltZVRvRXhwaXJlOiB7XG4gICAgaWQ6IFwiYXBwLnRpbWVUb0V4cGlyZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJZb3VyIGd1ZXN0IGhhdmUgMjQgaG91cnMgdG8gcmVzcG9uZCB0byB0aGlzIG9yIGl0IHdpbGwgZ2V0IGV4cGlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaW1lIFRvIEV4cGlyZVwiLFxuICB9LFxuICBkZWNsaW5lZEluZm86IHtcbiAgICBpZDogXCJhcHAuZGVjbGluZWRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1ha2Ugc3VyZSB5b3VyIGNhbGVuZGFyIGlzIHVwLXRvLWRhdGUgYW5kIHRoYXQgeW91ciBsaXN0aW5nIHBhZ2UgYWNjdXJhdGVseSByZWZsZWN0cyB5b3VyIGhvdXNlIHJ1bGVzIGFuZCByZXF1aXJlbWVudHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVjbGluZWQgSW5mb1wiLFxuICB9LFxuICBib29raW5nSXNDb25maXJtZWQ6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0lzQ29uZmlybWVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyBpcyBjb25maXJtZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIGlzIGNvbmZpcm1lZFwiLFxuICB9LFxuICBjb250YWN0R3Vlc3Q6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEd1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdSBjYW4gY29udGFjdCB5b3VyIGd1ZXN0IGFuZCBkbyBuZWNlc3NhcnkgYXJyYW5nZW1lbnRzIG9yIHlvdSBjYW4gY2FuY2VsLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgR3Vlc3RcIixcbiAgfSxcbiAgY29udGFjdEd1ZXN0OiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RHdWVzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJZb3UgY2FuIGNvbnRhY3QgeW91ciBndWVzdCBhbmQgZG8gbmVjZXNzYXJ5IGFycmFuZ2VtZW50cyBvciB5b3UgY2FuIGNhbmNlbC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IEd1ZXN0XCIsXG4gIH0sXG4gIGJvb2tpbmdJc0V4cGlyZWQ6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0lzRXhwaXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tpbmcgcmVxdWVzdCBpcyBleHBpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyByZXF1ZXN0IGlzIGV4cGlyZWRcIixcbiAgfSxcbiAgYm9va2luZ0lzRXhwaXJlZDE6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ0lzRXhwaXJlZDFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJib29raW5nIHJlcXVlc3QgaXMgZXhwaXJlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJib29raW5nIHJlcXVlc3QgaXMgZXhwaXJlZC5cIixcbiAgfSxcbiAgYm9va2luZ1JlcXVlc3RDYW5jZWwzOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdSZXF1ZXN0Q2FuY2UzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYm9va2luZyByZXF1ZXN0IGlzIGNhbmNlbGxlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJib29raW5nIHJlcXVlc3QgaXMgY2FuY2VsbGVkLlwiLFxuICB9LFxuICB3cml0ZU1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAud3JpdGVNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV3JpdGUgeW91ciBtZXNzYWdlLi4uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV3JpdGUgeW91ciBtZXNzYWdlXCIsXG4gIH0sXG4gIGxvYWRNb3JlTXNnOiB7XG4gICAgaWQ6IFwiYXBwLmxvYWRNb3JlTXNnXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9hZCBNb3JlIE1lc3NhZ2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9hZCBNb3JlIE1lc3NhZ2VzXCIsXG4gIH0sXG4gIG5vSXRtZXNGb3VuZDoge1xuICAgIGlkOiBcImFwcC5ub0l0bWVzRm91bmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJObyBpdGVtcyBmb3VuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vIGl0ZW1zIGZvdW5kXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXMxOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXMxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5xdWlyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIGVhcm5lZEFtb3VudDoge1xuICAgIGlkOiBcImFwcC5lYXJuZWRBbW91bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFYXJuZWQgQW1vdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBkZXRhaWxzXCIsXG4gIH0sXG4gIG1pc3NlZEVhcm5pbmdzOiB7XG4gICAgaWQ6IFwiYXBwLm1pc3NlZEVhcm5pbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWlzc2VkIEVhcm5pbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWlzc2VkIEVhcm5pbmdzXCIsXG4gIH0sXG4gIHJlZnVuZEFtb3VudDoge1xuICAgIGlkOiBcImFwcC5yZWZ1bmRBbW91bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWZ1bmQgQW1vdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVmdW5kIEFtb3VudFwiLFxuICB9LFxuICBjbGVhbmluZ1ByaWNlOiB7XG4gICAgaWQ6IFwiYXBwLmNsZWFuaW5nUHJpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGVhbmluZyBQcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgZGV0YWlsc1wiLFxuICB9LFxuICBzdWJUb3RhbDoge1xuICAgIGlkOiBcImFwcC5zdWJUb3RhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YnRvdGFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBkZXRhaWxzXCIsXG4gIH0sXG4gIHlvdUVhcm46IHtcbiAgICBpZDogXCJhcHAueW91RWFyblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBlYXJuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBkZXRhaWxzXCIsXG4gIH0sXG4gIHRyaXBEZXRhaWxzOiB7XG4gICAgaWQ6IFwiYXBwLnRyaXBEZXRhaWxzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJpcCBkZXRhaWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJpcCBkZXRhaWxzXCIsXG4gIH0sXG4gIG5vVGhyZWFkRm91bmQ6IHtcbiAgICBpZDogXCJhcHAubm9UaHJlYWRGb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJObyB0aHJlYWQgZm91bmQhIElmIHlvdSB0aGluayBzb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IE1lc3NhZ2VcIixcbiAgfSxcbiAgZGFzaEJvYXJkSGVhZGVyOiB7XG4gICAgaWQ6IFwiYXBwLmRhc2hCb2FyZEhlYWRlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldlbGNvbWUgdG9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXNoYm9hcmRcIixcbiAgfSxcbiAgZGFzaEJvYXJkSW5mbzoge1xuICAgIGlkOiBcImFwcC5kYXNoQm9hcmRJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNoZWNrIHlvdXIgbWVzc2FnZXMsIHZpZXcgdXBjb21pbmcgdHJpcCBpbmZvcm1hdGlvbiwgYW5kIGZpbmQgdHJhdmVsIGluc3BpcmF0aW9uIGFsbCBmcm9tIHlvdXIgZGFzaGJvYXJkLiBCZWZvcmUgYm9va2luZyB5b3VyIGZpcnN0IHN0YXksIG1ha2Ugc3VyZSB0bzpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXNoYm9hcmRcIixcbiAgfSxcbiAgZGFzaEJvYXJkSW5mbzE6IHtcbiAgICBpZDogXCJhcHAuZGFzaEJvYXJkSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVXBsb2FkIGEgcGhvdG8gYW5kIHdyaXRlIGEgc2hvcnQgYmlvIHRvIGhlbHAgaG9zdHMgZ2V0IHRvIGtub3cgeW91IGJlZm9yZSBpbnZpdGluZyB5b3UgaW50byB0aGVpciBob21lLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhc2hib2FyZFwiLFxuICB9LFxuICBjb21wbGV0ZVlvdXJQcm9maWxlOiB7XG4gICAgaWQ6IFwiYXBwLmNvbXBsZXRlWW91clByb2ZpbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb21wbGV0ZSBZb3VyIFByb2ZpbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXNoYm9hcmRcIixcbiAgfSxcbiAgYWxsTWVzc2FnZXM6IHtcbiAgICBpZDogXCJhcHAuYWxsTWVzc2FnZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbGwgTWVzc2FnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEYXNoYm9hcmRcIixcbiAgfSxcbiAgaGk6IHtcbiAgICBpZDogXCJhcHAuaGlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIaVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhpXCIsXG4gIH0sXG4gIGxldFlvdUdldFJlYWR5OiB7XG4gICAgaWQ6IFwiYXBwLmxldFlvdUdldFJlYWR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGV04oCZcyBnZXQgeW91IHJlYWR5IHRvIGJlY29tZSBhIGhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMZXQgWW91IEdldCBSZWFkeVwiLFxuICB9LFxuICB3aGF0S2luZE9mUGxhY2U6IHtcbiAgICBpZDogXCJhcHAud2hhdEtpbmRPZlBsYWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCBraW5kIG9mIHBsYWNlIGRvIHlvdSBoYXZlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoYXQgS2luZCBPZiBQbGFjZVwiLFxuICB9LFxuICBjaGFuZ2U6IHtcbiAgICBpZDogXCJhcHAuY2hhbmdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hhbmdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hhbmdlIExpbmtcIixcbiAgfSxcbiAgd2hhdEtpbmRPZlBsYWNlTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC53aGF0S2luZE9mUGxhY2VMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCBraW5kIG9mIHBsYWNlIGFyZSB5b3UgbGlzdGluZz9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0IEtpbmQgT2YgUGxhY2UgTGlzdGluZ1wiLFxuICB9LFxuICB3aGF0VHlwZU9mUHJvcGVydHk6IHtcbiAgICBpZDogXCJhcHAud2hhdFR5cGVPZlByb3BlcnR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hhdCB0eXBlIG9mIHByb3BlcnR5IGlzIHRoaXM/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2hhdCBUeXBlIE9mIFByb3BlcnR5XCIsXG4gIH0sXG4gIHdoYXRHdWVzdEhhdmU6IHtcbiAgICBpZDogXCJhcHAud2hhdEd1ZXN0SGF2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgd2lsbCBndWVzdHMgaGF2ZT9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0IHdpbGwgZ3Vlc3RzIGhhdmVcIixcbiAgfSxcbiAgaG93TWFueVJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlSb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IHRvdGFsIHJvb21zIGRvZXMgeW91ciBwcm9wZXJ0eSBoYXZlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBtYW55IHRvdGFsIHJvb21zIGRvZXMgeW91ciBwcm9wZXJ0eSBoYXZlP1wiLFxuICB9LFxuICBpc1BlcnNvbmFsSG9tZToge1xuICAgIGlkOiBcImFwcC5pc1BlcnNvbmFsSG9tZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklzIHRoaXMgeW91ciBwZXJzb25hbCBob21lP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklzIHRoaXMgeW91ciBwZXJzb25hbCBob21lP1wiLFxuICB9LFxuICBpc1BlcnNvbmFsSG9tZUluZm86IHtcbiAgICBpZDogXCJhcHAuaXNQZXJzb25hbEhvbWVJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkd1ZXN0cyBsaWtlIHRvIGtub3cgaWYgdGhpcyBpcyBhIHBsYWNlIHlvdSBsaXZlIGFuZCBrZWVwIHlvdXIgcGVyc29uYWwgYmVsb25naW5ncyBpbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQZXJzb25hbCBIb21lIEluZm9cIixcbiAgfSxcbiAgc2tpcDoge1xuICAgIGlkOiBcImFwcC5za2lwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2tpcCBub3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTa2lwIEJ1dHRvblwiLFxuICB9LFxuICBob3dNYW55R3Vlc3RzOiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlHdWVzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3cgbWFueSBndWVzdHMgY2FuIHlvdXIgcGxhY2UgYWNjb21tb2RhdGU/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IG1hbnkgZ3Vlc3RzIGNhbiB5b3VyIHBsYWNlIGFjY29tbW9kYXRlP1wiLFxuICB9LFxuICBob3dNYW55QmVkczoge1xuICAgIGlkOiBcImFwcC5ob3dNYW55QmVkc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGJlZHMgY2FuIGd1ZXN0cyB1c2U/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IG1hbnkgYmVkcyBjYW4gZ3Vlc3RzIHVzZT9cIixcbiAgfSxcbiAgaG93TWFueUJlZHJvb21zOiB7XG4gICAgaWQ6IFwiYXBwLmhvd01hbnlCZWRyb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGJlZHJvb21zIGNhbiBndWVzdHMgdXNlP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBtYW55IGJlZHJvb21zIGNhbiBndWVzdHMgdXNlP1wiLFxuICB9LFxuICBob3dNYW55R3Vlc3RzU3RheToge1xuICAgIGlkOiBcImFwcC5ob3dNYW55R3Vlc3RzU3RheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGd1ZXN0cyBjYW4gc3RheT9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3cgbWFueSBndWVzdHMgY2FuIHN0YXk/XCIsXG4gIH0sXG4gIGhvd01hbnlCYXRocm9vbXM6IHtcbiAgICBpZDogXCJhcHAuaG93TWFueUJhdGhyb29tc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBtYW55IGJhdGhyb29tcz9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3cgbWFueSBiYXRocm9vbXM/XCIsXG4gIH0sXG4gIHdoZXJlTG9jYXRlZDoge1xuICAgIGlkOiBcImFwcC53aGVyZUxvY2F0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGVyZeKAmXMgeW91ciBwbGFjZSBsb2NhdGVkP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZXJl4oCZcyB5b3VyIHBsYWNlIGxvY2F0ZWQ/XCIsXG4gIH0sXG4gIGJhdGhyb29tOiB7XG4gICAgaWQ6IFwiYXBwLmJhdGhyb29tXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiYmF0aHJvb21cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXRocm9vbVwiLFxuICB9LFxuICB5b3VyRnVsbEFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAueW91ckZ1bGxBZGRyZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBGdWxsIEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIEZ1bGwgQWRkcmVzc1wiLFxuICB9LFxuICBzdHJlZXQ6IHtcbiAgICBpZDogXCJhcHAuc3RyZWV0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyZWV0IEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdHJlZXQgQWRkcmVzc1wiLFxuICB9LFxuICBidWlsZGluZ05hbWU6IHtcbiAgICBpZDogXCJhcHAuYnVpbGRpbmdOYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXB0LCBTdWl0ZSwgQmxkZy4gKG9wdGlvbmFsKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWxkaW5nIE5hbWVcIixcbiAgfSxcbiAgemlwY29kZToge1xuICAgIGlkOiBcImFwcC56aXBjb2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWklQIENvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJaSVAgQ29kZVwiLFxuICB9LFxuICBjb3VudHJ5UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuY291bnRyeVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ291bnRyeSBpcyBSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvdW50cnlSZXF1aXJlZFwiLFxuICB9LFxuICBzdGF0ZVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnN0YXRlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF0ZSBpcyBSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0YXRlUmVxdWlyZWRcIixcbiAgfSxcbiAgY2l0eVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLmNpdHlSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNpdHkgaXMgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjaXR5UmVxdWlyZWRcIixcbiAgfSxcbiAgc3RyZWV0UmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuc3RyZWV0UmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdHJlZXQgaXMgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzdHJlZXRSZXF1aXJlZFwiLFxuICB9LFxuICB6aXBjb2RlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuemlwY29kZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWmlwIENvZGUgaXMgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ6aXBjb2RlUmVxdWlyZWRcIixcbiAgfSxcbiAgaG91c2VUeXBlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuaG91c2VUeXBlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3VzZSBUeXBlIGlzIFJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG91c2UgVHlwZSBpcyBSZXF1aXJlZFwiLFxuICB9LFxuICBzb21ldGhpbmdXZW50V3Jvbmc6IHtcbiAgICBpZDogXCJhcHAuc29tZXRoaW5nV2VudFdyb25nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV3Jvbmcgd2VudCB3cm9uZ1wiLFxuICB9LFxuICBub3RMb2dnZWRJbjoge1xuICAgIGlkOiBcImFwcC5ub3RMb2dnZWRJblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBhcmUgbm90IGxvZ2dlZCBJbi4gUGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldyb25nIHdlbnQgd3JvbmdcIixcbiAgfSxcbiAgYWRtaW5Mb2dnZWRJbjoge1xuICAgIGlkOiBcImFwcC5hZG1pbkxvZ2dlZEluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIllvdSBhcmUgbG9nZ2VkIGluIGFzIGFkbWluLCB5b3UgY2FuJ3QgcGVyZm9ybSB0aGlzIGFjdGlvbiFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJhZG1pbkxvZ2dlZEluXCIsXG4gIH0sXG4gIHdoYXRhbWVuaXRpZXM6IHtcbiAgICBpZDogXCJhcHAud2hhdGFtZW5pdGllc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoYXQgYW1lbml0aWVzIGRvIHlvdSBvZmZlcj9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbWVuaXRpZXMgSGVhZGxpbmVcIixcbiAgfSxcbiAgc2FmZXR5YW1lbml0aWVzOiB7XG4gICAgaWQ6IFwiYXBwLnNhZmV0eWFtZW5pdGllc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhZmV0eSBhbWVuaXRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYWZldHkgYW1lbml0aWVzIEhlYWRsaW5lXCIsXG4gIH0sXG4gIHdoYXRTcGFjZToge1xuICAgIGlkOiBcImFwcC53aGF0U3BhY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaGF0IHNwYWNlcyBjYW4gZ3Vlc3RzIHVzZT9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0IHNwYWNlcyBjYW4gZ3Vlc3RzIHVzZT9cIixcbiAgfSxcbiAgc3RlcDFIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXAxSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBhIGhvc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDEgSGVhZGluZ1wiLFxuICB9LFxuICBzdGVwMkhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuc3RlcDJIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU1RFUCAyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU1RFUCAyIEhlYWRpbmdcIixcbiAgfSxcbiAgc3RlcDNIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXAzSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNURVAgM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNURVAgMyBIZWFkaW5nXCIsXG4gIH0sXG4gIHN0ZXAxU3ViSGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5zdGVwMVN1YkhlYWRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGFydCB3aXRoIHRoZSBiYXNpY3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDEgU3ViIEhlYWRpbmdcIixcbiAgfSxcbiAgc3RlcDJTdWJIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXAyU3ViSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCB0aGUgc2NlbmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDIgU3ViIEhlYWRpbmdcIixcbiAgfSxcbiAgc3RlcDNTdWJIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXAzU3ViSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdldCByZWFkeSBmb3IgZ3Vlc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU1RFUCAzIFN1YiBIZWFkaW5nXCIsXG4gIH0sXG4gIHN0ZXAxSGVhZGluZ0NvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAuc3RlcDFIZWFkaW5nQ29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZHMsIGJhdGhyb29tcywgYW1lbml0aWVzLCBhbmQgbW9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNURVAgMSBIZWFkaW5nIENvbnRlbnRcIixcbiAgfSxcbiAgc3RlcDJIZWFkaW5nQ29udGVudDoge1xuICAgIGlkOiBcImFwcC5zdGVwMkhlYWRpbmdDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGhvdG9zLCBzaG9ydCBkZXNjcmlwdGlvbiwgdGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDIgSGVhZGluZyBDb250ZW50XCIsXG4gIH0sXG4gIHN0ZXAzSGVhZGluZ0NvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAuc3RlcDNIZWFkaW5nQ29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tpbmcgc2V0dGluZ3MsIGNhbGVuZGFyLCBwcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNURVAgMyBIZWFkaW5nIENvbnRlbnRcIixcbiAgfSxcbiAgbWFwV2FybmluZzoge1xuICAgIGlkOiBcImFwcC5tYXBXYXJuaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRHJhZyB0aGUgcGluIHRvIHNldCB5b3VyIGxvY2F0aW9uLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hcCBXYXJuaW5nXCIsXG4gIH0sXG4gIG1hcFN1Y2Nlc3M6IHtcbiAgICBpZDogXCJhcHAubWFwU3VjY2Vzc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdyZWF0ISBUaGFuayB5b3UhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFwIFN1Y2Nlc3NcIixcbiAgfSxcbiAgcGhvdG9zOiB7XG4gICAgaWQ6IFwiYXBwLnBob3Rvc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBob3Rvc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob3Rvc1wiLFxuICB9LFxuICBwbGFjZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnBsYWNlVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOYW1lIHlvdXIgcGxhY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICB0aXRsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnRpdGxlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0aW5nIHRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGl0bGVcIixcbiAgfSxcbiAgdGl0bGVSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC50aXRsZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT29wcyEgV2UgbmVlZCBhIHRpdGxlIGZvciB5b3VyIHBsYWNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmRlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdCB5b3VyIGRlc2NyaXB0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgZGVzY3JpcHRpb25SZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvblJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBndWVzdFJlcXVpcmVtZW50c1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0UmVxdWlyZW1lbnRzVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgZ3Vlc3QgcmVxdWlyZW1lbnRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgUmVxdWlyZW1lbnRzIFRpdGxlXCIsXG4gIH0sXG4gIGd1ZXN0UmVxdWlyZW1lbnRzRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RSZXF1aXJlbWVudHNEZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJSZXF1aXJlIGFsbCBndWVzdHMgdG8gc3VibWl0IHRoZSBmb2xsb3dpbmcgYmVmb3JlIHRoZXkgY2FuIGJvb2s6XCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgUmVxdWlyZW1lbnRzIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIHNldEhvdXNlUnVsZXM6IHtcbiAgICBpZDogXCJhcHAuc2V0SG91c2VSdWxlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCBob3VzZSBydWxlcyBmb3IgeW91ciBndWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3VzZSBSdWxlc1wiLFxuICB9LFxuICByZXZpZXdHdWVzdEJvb2tUaXRsZToge1xuICAgIGlkOiBcImFwcC5yZXZpZXdHdWVzdEJvb2tUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBndWVzdHMgYm9vazogSW5zdGFudGx5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG93IGd1ZXN0cyBib29rOiBJbnN0YW50bHlcIixcbiAgfSxcbiAgcmV2aWV3R3Vlc3RCb29rRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAucmV2aWV3R3Vlc3RCb29rRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdHMgY2FuIGJvb2sgYXZhaWxhYmxlIGRheXMgaW5zdGFudGx5IGFzIGxvbmcgYXMgdGhleTpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdHMgY2FuIGJvb2sgYXZhaWxhYmxlXCIsXG4gIH0sXG4gIHJldmlld0d1ZXN0Qm9va05vdGU6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3R3Vlc3RCb29rTm90ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJHdWVzdHMgd2hvIGRvbuKAmXQgbWVldCB5b3VyIHJlcXVpcmVtZW50cyBtdXN0IHNlbmQgYSByZXNlcnZhdGlvbiByZXF1ZXN0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlldyBHdWVzdHMgTm90ZVwiLFxuICB9LFxuICBhZHZhbmNlTm90aWNlVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuYWR2YW5jZU5vdGljZVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG93IG11Y2ggbm90aWNlIGRvIHlvdSBuZWVkIGJlZm9yZSBhIGd1ZXN0IGFycml2ZXM/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWR2YW5jZSBOb3RpY2UgVGl0bGVcIixcbiAgfSxcbiAgYWR2YW5jZU5vdGljZUNoZWNrSW5UaXRsZToge1xuICAgIGlkOiBcImFwcC5hZHZhbmNlTm90aWNlQ2hlY2tJblRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2hlbiBjYW4gZ3Vlc3RzIGNoZWNrIGluP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkdmFuY2UgTm90aWNlIENoZWNrIEluIFRpdGxlXCIsXG4gIH0sXG4gIGFkdmFuY2VOb3RpY2VGcm9tOiB7XG4gICAgaWQ6IFwiYXBwLmFkdmFuY2VOb3RpY2VGcm9tXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRnJvbTpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGcm9tXCIsXG4gIH0sXG4gIGFkdmFuY2VOb3RpY2VUbzoge1xuICAgIGlkOiBcImFwcC5hZHZhbmNlTm90aWNlVG9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUbzpcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb1wiLFxuICB9LFxuICBhZHZhbmNlTm90aWNlRXJyb3I6IHtcbiAgICBpZDogXCJhcHAuYWR2YW5jZU5vdGljZUVycm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRnJvbSB0aW1lIHNob3VsZCBiZSBlYXJsaWVyIHRoYW4gVG8gdGltZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVycm9yIE1lc3NhZ2VcIixcbiAgfSxcbiAgYWR2YW5jZU5vdGljZUludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuYWR2YW5jZU5vdGljZUludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIGlucHV0IHZhbHVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXJyb3IgTWVzc2FnZVwiLFxuICB9LFxuICBNYXhEYXlzTm90aWNlVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuTWF4RGF5c05vdGljZVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG93IGZhciBpbiBhZHZhbmNlIGNhbiBndWVzdHMgYm9vaz9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3cgZmFyIGluIGFkdmFuY2UgY2FuIGd1ZXN0cyBib29rP1wiLFxuICB9LFxuICBNaW5NYXhOaWdodHNUaXRsZToge1xuICAgIGlkOiBcImFwcC5NaW5NYXhOaWdodHNUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvdyBsb25nIGNhbiBndWVzdHMgc3RheT9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3cgbG9uZyBjYW4gZ3Vlc3RzIHN0YXk/XCIsXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgaWQ6IFwiYXBwLmNhbGVuZGFyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXBkYXRlIHlvdXIgY2FsZW5kYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjYWxlbmRhciB0aXRsZVwiLFxuICB9LFxuICBwcmljaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnByaWNpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXNlIHByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJpY2luZyB0aXRsZVwiLFxuICB9LFxuICBwcmljaW5nRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAucHJpY2luZ0Rlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBiYXNlIHByaWNlIGlzIHlvdXIgZGVmYXVsdCBuaWdodGx5IHJhdGUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJpY2luZyBkZXNjcmlwdGlvblwiLFxuICB9LFxuICBiYXNlUHJpY2U6IHtcbiAgICBpZDogXCJhcHAuYmFzZVByaWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFzZSBwcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhc2UgcHJpY2VcIixcbiAgfSxcbiAgYmFzZVByaWNlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmFzZVByaWNlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmljZSBwZXIgbmlnaHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXNlIHByaWNlIExhYmVsXCIsXG4gIH0sXG4gIGJhc2VQcmljZUludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuYmFzZVByaWNlSW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgQmFzZSBQcmljZSwgb25seSBudW1iZXJzKGVnOiAyNSkgYXJlIGFsbG93ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXNlIHByaWNlIEludmFsaWRcIixcbiAgfSxcbiAgYmFzZVByaWNlUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuYmFzZVByaWNlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXNlIFByaWNlIGlzIHJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFzZSBQcmljZSBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBjbGVhbmluZ1ByaWNlSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5jbGVhbmluZ1ByaWNlSW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgQ2xlYW5pbmcgUHJpY2UsIG9ubHkgbnVtYmVycyhlZzogMjUpIGFyZSBhbGxvd2VkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2xlYW5pbmcgcHJpY2UgSW52YWxpZFwiLFxuICB9LFxuICBjdXJyZW5jeToge1xuICAgIGlkOiBcImFwcC5jdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3VycmVuY3lcIixcbiAgfSxcbiAgZGlzY291bnQ6IHtcbiAgICBpZDogXCJhcHAuZGlzY291bnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEaXNjb3VudHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaXNjb3VudHNcIixcbiAgfSxcbiAgZGlzY291bnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5kaXNjb3VudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiJSBvZmZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaXNjb3VudCBMYWJlbFwiLFxuICB9LFxuICBkaXNjb3VudFdlZWtseToge1xuICAgIGlkOiBcImFwcC5kaXNjb3VudFdlZWtseVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldlZWtseSBkaXNjb3VudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlZWtseSBkaXNjb3VudFwiLFxuICB9LFxuICBkaXNjb3VudEludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuZGlzY291bnRJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkludmFsaWQgZGlzY291bnQuIFRoZSBkaXNjb3VudCBtdXN0IGJlIGJldHdlZW4gMCUgYW5kIDk5JS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIGRpc2NvdW50XCIsXG4gIH0sXG4gIGRpc2NvdW50TW9udGhseToge1xuICAgIGlkOiBcImFwcC5kaXNjb3VudE1vbnRobHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb250aGx5IGRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9udGhseSBkaXNjb3VudFwiLFxuICB9LFxuICBzdW1tYXJ5OiB7XG4gICAgaWQ6IFwiYXBwLnN1bW1hcnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXNlZCBvbiB5b3VyIHNldHRpbmdzLCBoZXJl4oCZcyB3aGF0IHlvdSBjb3VsZCBleHBlY3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdW1tYXJ5IFRpdGxlXCIsXG4gIH0sXG4gIGxvY2FsTGF3czoge1xuICAgIGlkOiBcImFwcC5sb2NhbExhd3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGxvY2FsIGxhd3MgYW5kIHRheGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9jYWwgTGF3c1wiLFxuICB9LFxuICBzZXRDb3ZlclBob3RvOiB7XG4gICAgaWQ6IFwiYXBwLnNldENvdmVyUGhvdG9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgYSBwaG90byBmb3IgY292ZXIgaW1hZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzZXRDb3ZlclBob3RvXCIsXG4gIH0sXG4gIHBob3Rvc1BsYWNlaG9sZGVyOiB7XG4gICAgaWQ6IFwiYXBwLnBob3Rvc1BsYWNlaG9sZGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xpY2sgaGVyZSB0byB1cGxvYWQgcGhvdG9zIG9yIGRyYWcgdGhlbSBpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob3RvcyBQbGFjZWhvbGRlclwiLFxuICB9LFxuICBkZXNjcmlwdGlvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmRlc2NyaXB0aW9uTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmliZSB0aGUgZGVjb3IsIGxpZ2h0LCB3aGF0J3MgbmVhcmJ5LCBldGMuLi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBQbGFjZWhvbGRlclwiLFxuICB9LFxuICBkZXNjcmlwdGlvblN1YmhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAuZGVzY3JpcHRpb25TdWJoZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3VtbWFyeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIFN1YmhlYWRpbmdcIixcbiAgfSxcbiAgaW5zdGFudEJvb2tpbmdUaXRsZToge1xuICAgIGlkOiBcImFwcC5pbnN0YW50Qm9va2luZ1RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5jcmVhc2UgeW91ciBlYXJuaW5ncyB3aXRoIEluc3RhbnQgQm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgYm9va2luZ1wiLFxuICB9LFxuICBpbnN0YW50Qm9va2luZ0luZm86IHtcbiAgICBpZDogXCJhcHAuaW5zdGFudEJvb2tpbmdJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkluc3RhbnQgQm9vayBjYW4gZ2l2ZSB5b3VyIGxpc3RpbmcgYW4gZWRnZS5Ob3Qgb25seSBkbyBndWVzdHMgcHJlZmVyIHRvIGJvb2sgaW5zdGFudGx5LCB3ZeKAmXJlIHByb21vdGluZyBJbnN0YW50IEJvb2sgbGlzdGluZ3MgaW4gc2VhcmNoIHJlc3VsdHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBib29raW5nXCIsXG4gIH0sXG4gIHdob0NhbkJvb2s6IHtcbiAgICBpZDogXCJhcHAud2hvQ2FuQm9va1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldobyBjYW4gYm9vayBpbnN0YW50bHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IGJvb2tpbmdcIixcbiAgfSxcbiAgd2hvQ2FuQm9va0luZm86IHtcbiAgICBpZDogXCJhcHAud2hvQ2FuQm9va0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQ2hvb3NlIHdobyBjYW4gYm9vayBhdmFpbGFibGUgZGF5cyB3aXRob3V0IHJlcXVlc3RpbmcgYXBwcm92YWwuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBib29raW5nXCIsXG4gIH0sXG4gIHdob0NhbkJvb2tJbmZvMToge1xuICAgIGlkOiBcImFwcC53aG9DYW5Cb29rSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiR3Vlc3RzIHdobyBtZWV0IHlvdXIgcmVxdWlyZW1lbnRzIGFuZCBhZ3JlZSB0byB5b3VyIHJ1bGVzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgYm9va2luZ1wiLFxuICB9LFxuICB3aG9DYW5Cb29rSW5mbzI6IHtcbiAgICBpZDogXCJhcHAud2hvQ2FuQm9va0luZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW55b25lIGVsc2UgbXVzdCBzZW5kIGEgcmVzZXJ2YXRpb24gcmVxdWVzdC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IGJvb2tpbmdcIixcbiAgfSxcbiAgd2hvQ2FuQm9va0luZm8zOiB7XG4gICAgaWQ6IFwiYXBwLndob0NhbkJvb2tJbmZvM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIG9uZS4gQWxsIGd1ZXN0cyBtdXN0IHNlbmQgcmVzZXJ2YXRpb24gcmVxdWVzdHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBib29raW5nXCIsXG4gIH0sXG4gIG1heERheXNUaXRsZToge1xuICAgIGlkOiBcImFwcC5tYXhEYXlzVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29raW5nIFdpbmRvd1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgV2luZG93XCIsXG4gIH0sXG4gIGRhdGVzRHJvcERvd246IHtcbiAgICBpZDogXCJhcHAuZGF0ZXNEcm9wRG93blwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRhdGVzIHVuYXZhaWxhYmxlIGJ5IGRlZmF1bHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIERyb3Bkb3duXCIsXG4gIH0sXG4gIGRhdGVzT3B0aW9uMToge1xuICAgIGlkOiBcImFwcC5kYXRlc09wdGlvbjFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIzIG1vbnRocyBpbnRvIHRoZSBmdXR1cmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIERyb3Bkb3duXCIsXG4gIH0sXG4gIGRhdGVzT3B0aW9uMjoge1xuICAgIGlkOiBcImFwcC5kYXRlc09wdGlvbjJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCI2IG1vbnRocyBpbnRvIHRoZSBmdXR1cmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIERyb3Bkb3duXCIsXG4gIH0sXG4gIGRhdGVzT3B0aW9uMzoge1xuICAgIGlkOiBcImFwcC5kYXRlc09wdGlvbjNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCI5IG1vbnRocyBpbnRvIHRoZSBmdXR1cmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIERyb3Bkb3duXCIsXG4gIH0sXG4gIGRhdGVzT3B0aW9uNDoge1xuICAgIGlkOiBcImFwcC5kYXRlc09wdGlvbjRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxMiBtb250aHMgaW50byB0aGUgZnV0dXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBEcm9wZG93blwiLFxuICB9LFxuICBkYXRlc09wdGlvbjU6IHtcbiAgICBpZDogXCJhcHAuZGF0ZXNPcHRpb241XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxsIGZ1dHVyZSBkYXRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgRHJvcGRvd25cIixcbiAgfSxcbiAgc3luY0NhbGVuZGFyczoge1xuICAgIGlkOiBcImFwcC5zeW5jQ2FsZW5kYXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3luYyBjYWxlbmRhcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTeW5jIGNhbGVuZGFyc1wiLFxuICB9LFxuICB0cmlwTGVuZ3RoOiB7XG4gICAgaWQ6IFwiYXBwLnRyaXBMZW5ndGhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUcmlwIGxlbmd0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyaXAgbGVuZ3RoXCIsXG4gIH0sXG4gIHRyaXBMZW5ndGhFcnJvcjE6IHtcbiAgICBpZDogXCJhcHAudHJpcExlbmd0aEVycm9yMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1pbmltdW0gbmlnaHRzIGNhbid0IGJlIGhpZ2hlciB0aGFuIG1heGltdW0gbmlnaHRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJpcCBsZW5ndGhcIixcbiAgfSxcbiAgdGFiUGxhY2VUeXBlOiB7XG4gICAgaWQ6IFwiYXBwLnRhYlBsYWNlVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsYWNlIHR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWIgYmFyXCIsXG4gIH0sXG4gIHRhYlBsYWNlVHlwZToge1xuICAgIGlkOiBcImFwcC50YWJQbGFjZVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGFjZSB0eXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICBiYXRoczoge1xuICAgIGlkOiBcImFwcC5iYXRoc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhdGhzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICBzZXRDb3Zlcjoge1xuICAgIGlkOiBcImFwcC5zZXRDb3ZlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCBDb3ZlciBQaG90b1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCBDb3ZlciBQaG90b1wiLFxuICB9LFxuICB0YWJEZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC50YWJEZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICB0YWJUaXRsZToge1xuICAgIGlkOiBcImFwcC50YWJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICBndWVzdFJlcXVpcmVtZW50czoge1xuICAgIGlkOiBcImFwcC5ndWVzdFJlcXVpcmVtZW50c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IFJlcXVpcmVtZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgcmV2aWV3R3Vlc3RCb29rOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld0d1ZXN0Qm9va1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlldyBHdWVzdEJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUYWIgYmFyXCIsXG4gIH0sXG4gIGFkdmFuY2VOb3RpY2U6IHtcbiAgICBpZDogXCJhcHAuYWR2YW5jZU5vdGljZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkdmFuY2UgTm90aWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICBib29raW5nV2luZG93OiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdXaW5kb3dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29raW5nIHdpbmRvd1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgbWluTWF4TmlnaHRzOiB7XG4gICAgaWQ6IFwiYXBwLm1pbk1heE5pZ2h0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1pbiBNYXggTmlnaHRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICB0YWJDYWxlbmRhcjoge1xuICAgIGlkOiBcImFwcC50YWJDYWxlbmRhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbGVuZGFyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICB0YWJQcmljaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnRhYlByaWNpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcmljaW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICB0YWJEaXNjb3VudDoge1xuICAgIGlkOiBcImFwcC50YWJEaXNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICB0YWJCb29raW5nOiB7XG4gICAgaWQ6IFwiYXBwLnRhYkJvb2tpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29raW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGFiIGJhclwiLFxuICB9LFxuICB0YWJMb2NhbExhd3M6IHtcbiAgICBpZDogXCJhcHAudGFiTG9jYWxMYXdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9jYWwgTGF3c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRhYiBiYXJcIixcbiAgfSxcbiAgaGVhZGVyVGV4dDoge1xuICAgIGlkOiBcImFwcC5oZWFkZXJUZXh0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RlcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhlYWRlciBUZXh0XCIsXG4gIH0sXG4gIHJlYWR5VG9QdWJsaXNoOiB7XG4gICAgaWQ6IFwiYXBwLnJlYWR5VG9QdWJsaXNoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBsaXN0aW5nIGlzIHJlYWR5IHRvIGJlIHB1Ymxpc2hlZCFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIGluZGVcIixcbiAgfSxcbiAgcHVibGlzaE5vdzoge1xuICAgIGlkOiBcImFwcC5wdWJsaXNoTm93XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHVibGlzaCBOb3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIGluZGV4XCIsXG4gIH0sXG4gIHByZXZpZXdMaXN0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLnByZXZpZXdMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJldmlldyBMaXN0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdGluZyBpbmRleFwiLFxuICB9LFxuICBsaXN0aW5nUHVibGlzaGVkOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RpbmdQdWJsaXNoZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGxpc3RpbmcgaXMgcmVhZHkgdG8gYmUgcHVibGlzaGVkIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgaW5kZXhcIixcbiAgfSxcbiAgdW5QdWJsaXNoTm93OiB7XG4gICAgaWQ6IFwiYXBwLnVuUHVibGlzaE5vd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVuUHVibGlzaCBOb3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIGluZGV4XCIsXG4gIH0sXG4gIHNpZ25VcFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnNpZ25VcFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmV3IFVzZXIgUmVnaXN0cmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2lnbnVwIFRpdGxlXCIsXG4gIH0sXG4gIHBhbmVsUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAucGFuZWxSZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlc2VydmF0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc2VydmF0aW9uc1wiLFxuICB9LFxuICB0cmFuc2FjdGlvbnM6IHtcbiAgICBpZDogXCJhcHAudHJhbnNhY3Rpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhbnNhY3Rpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhbnNhY3Rpb25zXCIsXG4gIH0sXG4gIG5vdEZvdW5kVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubm90Rm91bmRUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVoLW9oIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCBGb3VuZFwiLFxuICB9LFxuICBub3RGb3VuZFN1YlRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vdEZvdW5kU3ViVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXZSBjYW4ndCBzZWVtIHRvIGZpbmQgdGhlIHBhZ2UgeW91J3JlIGxvb2tpbmcgZm9yIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCBGb3VuZFwiLFxuICB9LFxuICBlcnJvckNvZGU6IHtcbiAgICBpZDogXCJhcHAuZXJyb3JDb2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXJyb3IgY29kZTogNDA0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm90IEZvdW5kXCIsXG4gIH0sXG4gIGxpbmtzVGl0bGU6IHtcbiAgICBpZDogXCJhcHAubGlua3NUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhlcmUgYXJlIHNvbWUgaGVscGZ1bCBsaW5rcyBpbnN0ZWFkOlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCBGb3VuZFwiLFxuICB9LFxuICBob3N0aW5nT246IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ09uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdGluZyBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdCBGb3VuZFwiLFxuICB9LFxuICBwYWdlRXJyb3I6IHtcbiAgICBpZDogXCJhcHAucGFnZUVycm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXJyb3JcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIEVycm9yXCIsXG4gIH0sXG4gIHBhZ2VFcnJvckluZm86IHtcbiAgICBpZDogXCJhcHAucGFnZUVycm9ySW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNvcnJ5LCBhIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIG9uIHRoaXMgcGFnZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIEVycm9yXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXMyOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXMyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJlIEFwcHJvdmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czM6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZWNsaW5lZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXM0OiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXM0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwcm92ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1c1wiLFxuICB9LFxuICBtZXNzYWdlU3RhdHVzNToge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzNVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBlbmRpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1c1wiLFxuICB9LFxuICBtZXNzYWdlU3RhdHVzNjoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzNlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbGxlZCBieSBob3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czc6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsZWQgYnkgZ3Vlc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1c1wiLFxuICB9LFxuICBtZXNzYWdlU3RhdHVzODoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzOFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcHJvdmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czk6IHtcbiAgICBpZDogXCJhcHAubWVzc2FnZVN0YXR1czlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeHBpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBTdGF0dXNcIixcbiAgfSxcbiAgbWVzc2FnZVN0YXR1czEwOiB7XG4gICAgaWQ6IFwiYXBwLm1lc3NhZ2VTdGF0dXMxMFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlcXVlc3QgdG8gYm9va1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1lc3NhZ2UgU3RhdHVzXCIsXG4gIH0sXG4gIHBhbmVsSGVhZGVyMToge1xuICAgIGlkOiBcImFwcC5wYW5lbEhlYWRlcjFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbiBwcm9ncmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhbmVsIEhlYWRlclwiLFxuICB9LFxuICBwYW5lbEhlYWRlcjI6IHtcbiAgICBpZDogXCJhcHAucGFuZWxIZWFkZXIyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29tcGxldGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFuZWwgSGVhZGVyXCIsXG4gIH0sXG4gIG1lc3NhZ2VTdGF0dXMxMToge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlU3RhdHVzMTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1c1wiLFxuICB9LFxuICBtZXNzYWdlc05ldzoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlc05ld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5ld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5ld1wiLFxuICB9LFxuICBmYWNlYm9va0xvZ2luOiB7XG4gICAgaWQ6IFwiYXBwLmZhY2Vib29rTG9naW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250aW51ZSB3aXRoIEZhY2Vib29rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGludWUgd2l0aCBGYWNlYm9va1wiLFxuICB9LFxuICBnb29nbGVMb2dpbjoge1xuICAgIGlkOiBcImFwcC5nb29nbGVMb2dpblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbnRpbnVlIHdpdGggR29vZ2xlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGludWUgd2l0aCBHb29nbGVcIixcbiAgfSxcbiAgcmV2aWV3VG9Xcml0ZToge1xuICAgIGlkOiBcImFwcC5yZXZpZXdUb1dyaXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3cyB0byBXcml0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld3MgUGFuZWxcIixcbiAgfSxcbiAgY2FuY2VsbGF0aW9uTm90ZToge1xuICAgIGlkOiBcImFwcC5jYW5jZWxsYXRpb25Ob3RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQSBwZXJzb25hbCBub3RlIGNhbiBoZWxwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIE5vdGVzXCIsXG4gIH0sXG4gIGNhbmNlbGxhdGlvbk5vdGVGb3JIb3N0OiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvbk5vdGVGb3JIb3N0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwidW5kZXJzdGFuZCB3aHkgeW91IGNhbid0IGhvc3QgdGhlbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbmNlbGxhdGlvbiBOb3Rlc1wiLFxuICB9LFxuICBzYXZlQW5kQ29udGludWU6IHtcbiAgICBpZDogXCJhcHAuc2F2ZUFuZENvbnRpbnVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZSAmIENvbnRpbnVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2F2ZSAmIENvbnRpbnVlXCIsXG4gIH0sXG4gIHNhdmVBbmRFeGl0OiB7XG4gICAgaWQ6IFwiYXBwLnNhdmVBbmRFeGl0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZSBhbmQgRXhpdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmUgYW5kIEV4aXRcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25DYW5jZWw6IHtcbiAgICBpZDogXCJhcHAucmVzZXJ2YXRpb25DYW5jZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGUgcmVzZXJ2YXRpb24gd2lsbCBiZSBjYW5jZWxsZWQgaW1tZWRpYXRlbHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgeW91ciB0cmlwXCIsXG4gIH0sXG4gIG5vblJlZnVuZGFibGU6IHtcbiAgICBpZDogXCJhcHAubm9uUmVmdW5kYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vbi1SZWZ1bmRhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIHlvdXIgdHJpcFwiLFxuICB9LFxuICByZWZ1bmRhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLnJlZnVuZGFibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWZ1bmRhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIHlvdXIgdHJpcFwiLFxuICB9LFxuICByZWZ1bmRDb3N0OiB7XG4gICAgaWQ6IFwiYXBwLnJlZnVuZENvc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3Ugd2lsbCBiZSByZWZ1bmRlZCB0aGUgYWJvdmUgY29zdC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgeW91ciB0cmlwXCIsXG4gIH0sXG4gIGtlZXBSZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5rZWVwUmVzZXJ2YXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJLZWVwIHJlc2VydmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiS2VlcCByZXNlcnZhdGlvblwiLFxuICB9LFxuICBjYW5jZWxZb3VyUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsWW91clJlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FuY2VsIHlvdXIgcmVzZXJ2YXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgeW91ciByZXNlcnZhdGlvblwiLFxuICB9LFxuICBjbGVhbmluZ01pbnVzU2VydmljZUZlZToge1xuICAgIGlkOiBcImFwcC5jbGVhbmluZ01pbnVzU2VydmljZUZlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImNsZWFuaW5nIGZlZXMsIG1pbnVzIHNlcnZpY2UgZmVlcy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDbGVhbmluZyBmZWUgYW5kIHNlcnZpY2UgZmVlXCIsXG4gIH0sXG4gIGVhcm5pbmdzOiB7XG4gICAgaWQ6IFwiYXBwLmVhcm5pbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWFybmluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFYXJuaW5nc1wiLFxuICB9LFxuICBjbGVhbmluZ1BsdXNTZXJ2aWNlRmVlOiB7XG4gICAgaWQ6IFwiYXBwLmNsZWFuaW5nUGx1c1NlcnZpY2VGZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJwbHVzIGNsZWFuaW5nIGZlZXMsIG1pbnVzIGhvc3Qgc2VydmljZSBmZWVzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBsdXMgY2xlYW5pbmcgZmVlcywgcGx1cyBob3N0IHNlcnZpY2UgZmVlcy5cIixcbiAgfSxcbiAgd2lsbEJlUmVmdW5kOiB7XG4gICAgaWQ6IFwiYXBwLndpbGxCZVJlZnVuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIndpbGwgYmUgcmVmdW5kZWQgdGhlXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2lsbCBiZSByZWZ1bmRlZCB0aGVcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25Db3N0OiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uQ29zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInJlc2VydmF0aW9uIGNvc3QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzZXJ2YXRpb24gY29zdFwiLFxuICB9LFxuICBjYW5jZWxZb3VyVHJpcDoge1xuICAgIGlkOiBcImFwcC5jYW5jZWxZb3VyVHJpcFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbCB5b3VyIHRyaXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgeW91ciBUcmlwXCIsXG4gIH0sXG4gIGNvbnNpZGVyOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnNpZGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uc2lkZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25zaWRlclwiLFxuICB9LFxuICB0cmlwQmVmb3JlQ2FuY2VsaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnRyaXBCZWZvcmVDYW5jZWxpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ0cmlwIGJlZm9yZSBjYW5jZWxpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmlwIGJlZm9yZSBjYW5jZWxpbmdcIixcbiAgfSxcbiAgY2FuY2VsbGluZ0luZm86IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGluZ0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQ2FuY2VsbGluZyBhIGd1ZXN0J3MgcmVzZXJ2YXRpb24gY2FuIGRpc3J1cHQgdGhlaXIgcGxhbnMgYW5kIGhhdmUgc2VyaW91cyBpbXBsaWNhdGlvbnMgb24gdGhlaXIgdHJpcC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUcmlwIGJlZm9yZSBjYW5jZWxpbmdcIixcbiAgfSxcbiAgc3RhcnRlZDoge1xuICAgIGlkOiBcImFwcC5zdGFydGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhcnRlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0ZWRcIixcbiAgfSxcbiAgc3RhcnRJbjoge1xuICAgIGlkOiBcImFwcC5zdGFydEluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhcnRzIGluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RhcnRzIGluXCIsXG4gIH0sXG4gIHRyYXZlbGluZ1dpdGg6IHtcbiAgICBpZDogXCJhcHAudHJhdmVsaW5nV2l0aFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRyYXZlbGxpbmcgV2l0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYXZlbGluZyBXaXRoXCIsXG4gIH0sXG4gIG5lZWRUb0NhbmNlbDoge1xuICAgIGlkOiBcImFwcC5uZWVkVG9DYW5jZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ3aHkgeW91IG5lZWQgdG8gY2FuY2VsXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5IHlvdSBuZWVkIHRvIGNhbmNlbFwiLFxuICB9LFxuICBzdGF5aW5nRm9yOiB7XG4gICAgaWQ6IFwiYXBwLnN0YXlpbmdGb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF5aW5nIGZvclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXlpbmcgZm9yXCIsXG4gIH0sXG4gIHByb3BlcnR5TG9jYXRlZDoge1xuICAgIGlkOiBcImFwcC5wcm9wZXJ0eUxvY2F0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJwcm9wZXJ0eSBpcyBsb2NhdGVkIGluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvcGVydHkgaXMgbG9jYXRlZCBpblwiLFxuICB9LFxuICByZXNwb25zZUZyb206IHtcbiAgICBpZDogXCJhcHAucmVzcG9uc2VGcm9tXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzcG9uc2UgZnJvbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc3BvbnNlIGZyb21cIixcbiAgfSxcbiAgc2F2aW5nQnV0dG9uOiB7XG4gICAgaWQ6IFwiYXBwLnNhdmluZ0J1dHRvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhdmluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmluZyBCdXR0b25cIixcbiAgfSxcbiAgbmlnaHQ6IHtcbiAgICBpZDogXCJhcHAubmlnaHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJuaWdodFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpbGwgRGV0YWlsc1wiLFxuICB9LFxuICBtaW5pbXVtU3RheToge1xuICAgIGlkOiBcImFwcC5taW5pbXVtU3RheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIm1pbmltdW0gc3RheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1pbmltdW0gc3RheVwiLFxuICB9LFxuICBtaW5pbXVtTmlnaHRTdGF5OiB7XG4gICAgaWQ6IFwiYXBwLm1pbmltdW1OaWdodFN0YXlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaW5pbXVtIHN0YXkgaXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNaW5pbXVtIHN0YXlcIixcbiAgfSxcbiAgbWF4aW11bU5pZ2h0U3RheToge1xuICAgIGlkOiBcImFwcC5tYXhpbXVtTmlnaHRTdGF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwibWF4aW11bSBzdGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWF4aW11bSBzdGF5XCIsXG4gIH0sXG4gIHJldmlldzoge1xuICAgIGlkOiBcImFwcC5yZXZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdcIixcbiAgfSxcbiAgdmVyaWZpY2F0aW9uczoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZpY2F0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZlcmlmaWNhdGlvbnNcIixcbiAgfSxcbiAgdmVyaWZpY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnZlcmlmaWNhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZlcmlmaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZlcmlmaWNhdGlvblwiLFxuICB9LFxuICBndWVzdENhcGNpdHk6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RDYXBjaXR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiZ3Vlc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdFwiLFxuICB9LFxuICBndWVzdHNDYXBjaXR5OiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0c0NhcGNpdHlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJndWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdHNcIixcbiAgfSxcbiAgbW9udGhseURpc2NvdW50OiB7XG4gICAgaWQ6IFwiYXBwLm1vbnRobHlEaXNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIm1vbnRobHkgcHJpY2UgZGlzY291bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb250aGx5IERpc2NvdW50XCIsXG4gIH0sXG4gIHdlZWtseURpc2NvdW50OiB7XG4gICAgaWQ6IFwiYXBwLndlZWtseURpc2NvdW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwid2Vla2x5IHByaWNlIGRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2Vla2x5IERpc2NvdW50XCIsXG4gIH0sXG4gIGZsZXhpYmxlQ2hlY2tJbjoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZUNoZWNrSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGbGV4aWJsZSBjaGVjayBpbiB0aW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGUgY2hlY2sgaW4gdGltZVwiLFxuICB9LFxuICBjYW5jZWxsYXRpb25Ob3RlRm9yR3Vlc3Q6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uTm90ZUZvckd1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwidW5kZXJzdGFuZCB3aHkgeW91IHdhbnQgdG8gY2FuY2VsIHlvdXIgcmVzZXJ2YXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsYXRpb24gbm90ZXMgZm90IGd1ZXN0XCIsXG4gIH0sXG4gIGhvd01hbnlkYXk6IHtcbiAgICBpZDogXCJhcHAuaG93TWFueWRheVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImRheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRheVwiLFxuICB9LFxuICBob3dNYW55ZGF5czoge1xuICAgIGlkOiBcImFwcC5ob3dNYW55ZGF5c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImRheXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkYXlzXCIsXG4gIH0sXG4gIGhvd01hbnlHdWVzdDoge1xuICAgIGlkOiBcImFwcC5ob3dNYW55R3Vlc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdFwiLFxuICB9LFxuICByZXZpZXdGb3I6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3Rm9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3IGZvclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlldyBmb3JcIixcbiAgfSxcbiAgeW91cjoge1xuICAgIGlkOiBcImFwcC55b3VyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91clwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXJcIixcbiAgfSxcbiAgY2hvb3NlQ2FuY2VsbGF0aW9uUG9saWN5OiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUNhbmNlbGxhdGlvblBvbGljeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbGxhdGlvbiBQb2xpY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsYXRpb24gUG9saWN5XCIsXG4gIH0sXG4gIHBlbmRpbmdQYXlvdXRzOiB7XG4gICAgaWQ6IFwiYXBwLnBlbmRpbmdQYXlvdXRzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGVuZGluZyBQYXlvdXRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGVuZGluZyBQYXlvdXRzXCIsXG4gIH0sXG4gIGFsbFBheW91dE1ldGhvZDoge1xuICAgIGlkOiBcImFwcC5hbGxQYXlvdXRNZXRob2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbGwgcGF5b3V0IG1ldGhvZHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgcGF5b3V0IG1ldGhvZHNcIixcbiAgfSxcbiAgaW5ib3hDb21wbGV0ZWQ6IHtcbiAgICBpZDogXCJhcHAuaW5ib3hDb21wbGV0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb21wbGV0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlIFN0YXR1cyAtIEluYm94IEl0ZW1cIixcbiAgfSxcbiAgbG9naW5Db25maXJtYXRpb246IHtcbiAgICBpZDogXCJhcHAubG9naW5Db25maXJtYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU29ycnksIHlvdSBtdXN0IGxvZ2luIHRvIGNvbmZpcm0geW91ciBlbWFpbC4gUGxlYXNlIGxvZ2luIGFuZCB0cnkgY2xpY2tpbmcgdGhlIGxpbmsgZnJvbSB5b3VyIGVtYWlsIGFnYWluIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvZ2luIGNvbmZpcm1hdGlvblwiLFxuICB9LFxuICB1cGNvbWluZ1Jlc2VydmF0aW9uczoge1xuICAgIGlkOiBcImFwcC51cGNvbWluZ1Jlc2VydmF0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVwY29taW5nIFJlc2VydmF0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVwY29taW5nIFJlc2VydmF0aW9uc1wiLFxuICB9LFxuICBwcmV2aW91c1Jlc2VydmF0aW9uczoge1xuICAgIGlkOiBcImFwcC5wcmV2aW91c1Jlc2VydmF0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZXZpb3VzIFJlc2VydmF0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByZXZpb3VzIFJlc2VydmF0aW9uc1wiLFxuICB9LFxuICB1cGNvbWluZ1RyaXBzOiB7XG4gICAgaWQ6IFwiYXBwLnVwY29taW5nVHJpcHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVcGNvbWluZyBUcmlwc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVwY29taW5nIFRyaXBzXCIsXG4gIH0sXG4gIHByZXZpb3VzVHJpcHM6IHtcbiAgICBpZDogXCJhcHAucHJldmlvdXNUcmlwc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByZXZpb3VzIFRyaXBzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJldmlvdXMgVHJpcHNcIixcbiAgfSxcbiAgbm9VcGNvbWluZ1Jlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLm5vVXBjb21pbmdSZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSBkb24ndCBoYXZlIGFueSB1cGNvbWluZyByZXNlcnZhdGlvbnMhXCIsXG4gICAgZGVzY3JpcHRpb246IFwibm9VcGNvbWluZ1Jlc2VydmF0aW9uXCIsXG4gIH0sXG4gIG5vUHJldmlvdXNSZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC5ub1ByZXZpb3VzUmVzZXJ2YXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJldmlvdXMgcmVzZXJ2YXRpb25zIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm5vUHJldmlvdXNSZXNlcnZhdGlvblwiLFxuICB9LFxuICBub1VwY29taW5nVHJpcHM6IHtcbiAgICBpZDogXCJhcHAubm9VcGNvbWluZ1RyaXBzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgYW55IHVwY29taW5nIHRyaXBzIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm5vVXBjb21pbmdUcmlwc1wiLFxuICB9LFxuICBub1ByZXZpb3VzVHJpcHM6IHtcbiAgICBpZDogXCJhcHAubm9QcmV2aW91c1RyaXBzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGRvbid0IGhhdmUgYW55IHByZXZpb3VzIHRyaXBzIVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm5vUHJldmlvdXNUcmlwc1wiLFxuICB9LFxuICBwYXlOb3c6IHtcbiAgICBpZDogXCJhcHAucGF5bm93XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5IG5vd1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheSBub3dcIixcbiAgfSxcbiAgY3JlZGl0Q2FyZDoge1xuICAgIGlkOiBcImFwcC5jcmVkaXRDYXJkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ3JlZGl0IENhcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDcmVkaXQgQ2FyZFwiLFxuICB9LFxuICBwYXlQYWw6IHtcbiAgICBpZDogXCJhcHAucGF5UGFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5IFBhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheVBhbFwiLFxuICB9LFxuICBmdWxsTmFtZToge1xuICAgIGlkOiBcImFwcC5mdWxsTmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZ1bGwgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImZ1bGxOYW1lXCIsXG4gIH0sXG4gIGNhcmROdW1iZXI6IHtcbiAgICBpZDogXCJhcHAuY2FyZE51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNyZWRpdCBDYXJkIE51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNhcmROdW1iZXJcIixcbiAgfSxcbiAgY3Z2OiB7XG4gICAgaWQ6IFwiYXBwLmN2dlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNWVlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImN2dlwiLFxuICB9LFxuICBleHBpcnlEYXRlOiB7XG4gICAgaWQ6IFwiYXBwLmV4cGlyeURhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb250aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4cGlyeURhdGVcIixcbiAgfSxcbiAgZXhwaXJ5WWVhcjoge1xuICAgIGlkOiBcImFwcC5leHBpcnlZZWFyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWWVhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4cGlyeVllYXJcIixcbiAgfSxcbiAgY2FyZEV4cGlyZXM6IHtcbiAgICBpZDogXCJhcHAuRXhwaXJlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkV4cGlyZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBpcmVzXCIsXG4gIH0sXG4gIHJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiKlJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiKlJlcXVpcmVkXCIsXG4gIH0sXG4gIGludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuaW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIipJbnZhbGlkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiKkludmFsaWRcIixcbiAgfSxcbiAgcGF5b3V0Rmlyc3ROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEZpcnN0TmFtZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFjY291bnQgaG9sZGVyIGZpcnN0IG5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRGaXJzdE5hbWVcIixcbiAgfSxcbiAgcGF5b3V0TGFzdE5hbWU6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0TGFzdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvdW50IGhvbGRlciBsYXN0IG5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRMYXN0TmFtZVwiLFxuICB9LFxuICBwYXlvdXRSb3V0aW5nOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dFJvdXRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSb3V0aW5nIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW91dFJvdXRpbmdcIixcbiAgfSxcbiAgYWNjb3VudE51bWJlcjoge1xuICAgIGlkOiBcImFwcC5hY2NvdW50TnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudCBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJhY2NvdW50TnVtYmVyXCIsXG4gIH0sXG4gIGNvbmZpcm1BY2NvdW50TnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1BY2NvdW50TnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uZmlybSBhY2NvdW50IG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbmZpcm1BY2NvdW50TnVtYmVyXCIsXG4gIH0sXG4gIHNzbjREaWdpdHM6IHtcbiAgICBpZDogXCJhcHAuc3NuNERpZ2l0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNTTiBsYXN0IDQgZGlnaXRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwic3NuNERpZ2l0c1wiLFxuICB9LFxuICBwYXlvdXRGaXJzdE5hbWVSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRGaXJzdE5hbWVSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpcnN0IG5hbWUgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRGaXJzdE5hbWVSZXF1aXJlZFwiLFxuICB9LFxuICBwYXlvdXRMYXN0TmFtZVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dExhc3ROYW1lUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMYXN0IG5hbWUgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRMYXN0TmFtZVJlcXVpcmVkXCIsXG4gIH0sXG4gIHBheW91dFJvdXRpbmdSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRSb3V0aW5nUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSb3V0aW5nIG51bWJlciBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW91dFJvdXRpbmdSZXF1aXJlZFwiLFxuICB9LFxuICBwYXlvdXRSb3V0aW5nSW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRSb3V0aW5nSW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgcm91dGluZyBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRSb3V0aW5nSW52YWxpZFwiLFxuICB9LFxuICBhY2NvdW50TnVtYmVyUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAuYWNjb3VudE51bWJlclJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudCBudW1iZXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJhY2NvdW50TnVtYmVyUmVxdWlyZWRcIixcbiAgfSxcbiAgYWNjb3VudE51bWJlckludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuYWNjb3VudE51bWJlckludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIGFjY291bnQgbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYWNjb3VudE51bWJlckludmFsaWRcIixcbiAgfSxcbiAgY29uZmlybUFjY291bnROdW1iZXJSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5jb25maXJtQWNjb3VudE51bWJlclJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29uZmlybSBhY2NvdW50IG51bWJlciBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbmZpcm1BY2NvdW50TnVtYmVyUmVxdWlyZWRcIixcbiAgfSxcbiAgY29uZmlybUFjY291bnROdW1iZXJJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1BY2NvdW50TnVtYmVySW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgY29uZmlybSBhY2NvdW50IG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbmZpcm1BY2NvdW50TnVtYmVySW52YWxpZFwiLFxuICB9LFxuICBjb25maXJtQWNjb3VudE51bWJlck1pc21hdGNoOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1BY2NvdW50TnVtYmVyTWlzbWF0Y2hcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY2NvdW50IG51bWJlciBtaXNtYXRjaFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbmZpcm1BY2NvdW50TnVtYmVyTWlzbWF0Y2hcIixcbiAgfSxcbiAgc3NuNERpZ2l0c1JlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnNzbjREaWdpdHNSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNTTiBudW1iZXIgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzc240RGlnaXRzUmVxdWlyZWRcIixcbiAgfSxcbiAgc3NuNERpZ2l0c0ludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuc3NuNERpZ2l0c0ludmFsaWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnZhbGlkIFNTTiBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzc240RGlnaXRzSW52YWxpZFwiLFxuICB9LFxuICB2ZXJpZmllZEJ5OiB7XG4gICAgaWQ6IFwiYXBwLnZlcmlmaWVkQnlcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJWZXJpZmllZCBCeVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInZlcmlmaWVkQnlcIixcbiAgfSxcbiAgc2F2ZWQ6IHtcbiAgICBpZDogXCJhcHAuc2F2ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTYXZlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNhdmVkXCIsXG4gIH0sXG4gIHdpc2hMaXN0OiB7XG4gICAgaWQ6IFwiYXBwLndpc2hMaXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2lzaCBMaXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwid2lzaExpc3RcIixcbiAgfSxcbiAgd2lzaExpc3RzOiB7XG4gICAgaWQ6IFwiYXBwLndpc2hMaXN0c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldpc2ggTGlzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aXNoTGlzdHNcIixcbiAgfSxcbiAgY3JlYXRlV2lzaExpc3Q6IHtcbiAgICBpZDogXCJhcHAuY3JlYXRlV2lzaExpc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDcmVhdGUgV2lzaCBMaXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiY3JlYXRlV2lzaExpc3RcIixcbiAgfSxcbiAgbGlzdDoge1xuICAgIGlkOiBcImFwcC5saXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImxpc3RcIixcbiAgfSxcbiAgbGlzdHM6IHtcbiAgICBpZDogXCJhcHAubGlzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImxpc3RzXCIsXG4gIH0sXG4gIHlvdXJMaXN0czoge1xuICAgIGlkOiBcImFwcC55b3VyTGlzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGxpc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwieW91ckxpc3RzXCIsXG4gIH0sXG4gIGhvbWVzOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJob21lc1wiLFxuICB9LFxuICBuYW1lUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAubmFtZVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5hbWUgUmVxdWlyZWRcIixcbiAgfSxcbiAgcHJpdmFjeVNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLnByaXZhY3lTZXR0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaXZhY3kgU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcml2YWN5IFNldHRpbmdzXCIsXG4gIH0sXG4gIHdpc2hMaXN0QWRkZWQ6IHtcbiAgICBpZDogXCJhcHAud2lzaExpc3RBZGRlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldpc2ggbGlzdCBhZGRlZCBzdWNjZXNzZnVsbHkuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2lzaCBsaXN0IGFkZGVkXCIsXG4gIH0sXG4gIHdpc2hMaXN0VXBkYXRlZDoge1xuICAgIGlkOiBcImFwcC53aXNoTGlzdFVwZGF0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaXNoIGxpc3QgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2lzaCBsaXN0IHVwZGF0ZWRcIixcbiAgfSxcbiAgZWRpdFdpc2hMaXN0OiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRXaXNoTGlzdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXQgV2lzaCBMaXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiZWRpdFdpc2hMaXN0XCIsXG4gIH0sXG4gIHlvdXJIb21lczoge1xuICAgIGlkOiBcImFwcC55b3VySG9tZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIEhvbWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaG95b3VySG9tZXNtZXNcIixcbiAgfSxcbiAgZGVsZXRlV2lzaExpc3Q6IHtcbiAgICBpZDogXCJhcHAuZGVsZXRlV2lzaExpc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZWxldGUgdGhpcyBsaXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVsZXRlV2lzaExpc3RcIixcbiAgfSxcbiAgbm9XaXNobGlzdHM6IHtcbiAgICBpZDogXCJhcHAubm9XaXNobGlzdHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb3JyeSwgeW91IGRvbid0IGhhdmUgYW55IGhvbWVzIHdpc2hsaXN0ZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwibm9XaXNobGlzdHNcIixcbiAgfSxcbiAgcHVibGljOiB7XG4gICAgaWQ6IFwiYXBwLnB1YmxpY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlB1YmxpY1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInB1YmxpY1wiLFxuICB9LFxuICBwcml2YXRlOiB7XG4gICAgaWQ6IFwiYXBwLnByaXZhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcml2YXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJpdmF0ZVwiLFxuICB9LFxuICBnb1RvQWxsTGlzdHM6IHtcbiAgICBpZDogXCJhcHAuZ29Ub0FsbExpc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR28gdG8gQWxsIExpc3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR28gdG8gQWxsIExpc3RzXCIsXG4gIH0sXG4gIG5vV2lzaGxpc3RzSG9tZXM6IHtcbiAgICBpZDogXCJhcHAubm9XaXNobGlzdHNIb21lc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNvcnJ5LCBZb3UgZG9uJ3QgaGF2ZSBhbnkgd2lzaGxpc3QgaG9tZXMhXCIsXG4gICAgZGVzY3JpcHRpb246IFwibm9XaXNobGlzdHNIb21lc1wiLFxuICB9LFxuICBhcmVZb3VTdXJlRGVsZXRlV2lzaExpc3Q6IHtcbiAgICBpZDogXCJhcHAuYXJlWW91U3VyZURlbGV0ZVdpc2hMaXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImFyZVlvdVN1cmVEZWxldGVXaXNoTGlzdFwiLFxuICB9LFxuICBjb25maXJtRGVsZXRlOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1EZWxldGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb25maXJtIERlbGV0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbmZpcm1EZWxldGVcIixcbiAgfSxcbiAgc2ltaWxhckxpc3RpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLnNpbWlsYXJMaXN0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpbWlsYXIgTGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzaW1pbGFyTGlzdGluZ3NcIixcbiAgfSxcbiAgb3ZlcnZpZXc6IHtcbiAgICBpZDogXCJhcHAub3ZlcnZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPdmVydmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk92ZXJ2aWV3XCIsXG4gIH0sXG4gIHRoZUhvc3Q6IHtcbiAgICBpZDogXCJhcHAudGhlSG9zdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoZSBIb3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEhvc3RcIixcbiAgfSxcblxuICAvL0lEIHZlcmlmaWNhdGlvblxuXG4gIGRvY3VtZW50dmVyaWZpY2FpdG9uOiB7XG4gICAgaWQ6IFwiYXBwLmRvY3VtZW50dmVyaWZpY2FpdG9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG9jdW1lbnQgVmVyaWZpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZG9jdW1lbnR2ZXJpZmljYWl0b25cIixcbiAgfSxcbiAgZG9jdW1lbnR2ZXJpZmllZDoge1xuICAgIGlkOiBcImFwcC5kb2N1bWVudHZlcmlmaWVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG9jdW1lbnRzIHZlcmlmaWVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRG9jdW1lbnRzIHZlcmlmaWVkXCIsXG4gIH0sXG5cbiAgdmVyaWZpY2F0aW9uZG9jdW1lbnQ6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpY2F0aW9uZG9jdW1lbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEb2N1bWVudHMgVmVyaWZpZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ2ZXJpZmljYXRpb25kb2N1bWVudFwiLFxuICB9LFxuXG4gIGRvY3VtZW50dmVyaWZpY2FpdG9uRGV0YWlsczoge1xuICAgIGlkOiBcImFwcC5kb2N1bWVudHZlcmlmaWNhaXRvbkRldGFpbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJZb3VyIGRvY3VtZW50IGhhdmUgYmVlbiB2ZXJpZmllZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRvY3VtZW50dmVyaWZpY2FpdG9uRGV0YWlsc1wiLFxuICB9LFxuXG4gIGRvY3VtZW50QXBwcm92ZVJlamVjdE1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRBcHByb3ZlUmVqZWN0TWVzc2FnZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlR5cGUgWW91ciBNZXNzYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZG9jdW1lbnRBcHByb3ZlUmVqZWN0TWVzc2FnZVwiLFxuICB9LFxuICBkb2N1bWVudEFwcHJvdmU6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRBcHByb3ZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwcm92ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRvY3VtZW50QXBwcm92ZVwiLFxuICB9LFxuICBkb2N1bWVudFJlamVjdDoge1xuICAgIGlkOiBcImFwcC5kb2N1bWVudFJlamVjdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlamVjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRvY3VtZW50UmVqZWN0XCIsXG4gIH0sXG5cbiAgZG9jdW1lbnRBcHBSZWpSZXF1cmllZDoge1xuICAgIGlkOiBcImFwcC5kb2N1bWVudEFwcFJlalJlcXVyaWVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIEZpbGwgUmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkb2N1bWVudEFwcFJlalJlcXVyaWVkXCIsXG4gIH0sXG4gIGRvY3VtZW50VXBsb2FkUGxhY2Vob2xkZXI6IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRVcGxvYWRQbGFjZWhvbGRlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsaWNrIGhlcmUgdG8gdXBsb2FkIGRvY3VtZW50IG9yIGRyYWcgdGhlbSBpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRvY3VtZW50IFVwbG9hZCBQbGFjZWhvbGRlclwiLFxuICB9LFxuICBkb2N1bWVudFZlcmlmaWNhaXRvbkluZm86IHtcbiAgICBpZDogXCJhcHAuZG9jdW1lbnRWZXJpZmljYWl0b25JbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBsZWFzZSB1cGxvYWQgeW91ciBkb2N1bWVudHMgZm9yIElEIHZlcmlmaWNhdGlvbi4gRWc6IFBhc3Nwb3J0LCBEcml2aW5nIExpY2Vuc2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEb2N1bWVudCBWZXJpZmljYXRpb24gSW5mb1wiLFxuICB9LFxuICBzZWFyY2hBc0lNb3ZlOiB7XG4gICAgaWQ6IFwiYXBwLnNlYXJjaEFzSU1vdmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZWFyY2ggYXMgSSBtb3ZlIHRoZSBtYXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2ggYXMgSSBtb3ZlIHRoZSBtYXBcIixcbiAgfSxcbiAgYmxhbmtTcGFjZToge1xuICAgIGlkOiBcImFwcC5ibGFua1NwYWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5wdXQgaXMgQmxhbmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJibGFua1NwYWNlXCIsXG4gIH0sXG4gIENvbnRhY3RNZXNzYWdlOiB7XG4gICAgaWQ6IFwiYXBwLkNvbnRhY3RNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3RNZXNzYWdlXCIsXG4gIH0sXG4gIGNvbnRhY3RGb3JtOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RGb3JtXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGFjdCBVc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbnRhY3RGb3JtXCIsXG4gIH0sXG4gIE5hbWVpbmNvbnRhY3Q6IHtcbiAgICBpZDogXCJhcHAuTmFtZWluY29udGFjdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOYW1laW5jb250YWN0XCIsXG4gIH0sXG4gIHJlY2FwdGNoYVJlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLnJlY2FwdGNoYVJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVjYXB0Y2hhIFJlcXVpcmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwicmVjYXB0Y2hhUmVxdWlyZWRcIixcbiAgfSxcbiAgc2VuZG1haWw6IHtcbiAgICBpZDogXCJhcHAuc2VuZG1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZFwiLFxuICB9LFxuICBuYW1lWW91ckxpc3Q6IHtcbiAgICBpZDogXCJhcHAubmFtZVlvdXJMaXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmFtZSB5b3VyIGxpc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0IE5hbWVcIixcbiAgfSxcbiAgY3JlYXRlQnV0dG9uOiB7XG4gICAgaWQ6IFwiYXBwLmNyZWF0ZUJ1dHRvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNyZWF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldpc2ggbGlzdCBidXR0b25cIixcbiAgfSxcbiAgZmxleGlibGVDaGVja091dDoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZUNoZWNrT3V0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmxleGlibGUgY2hlY2sgb3V0IHRpbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZSBjaGVjayBvdXQgdGltZVwiLFxuICB9LFxuICBoZWxwRmlyc3RUaXRsZToge1xuICAgIGlkOiBcImFwcC5oZWxwRmlyc3RUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNyZWF0ZSB5b3VyIGxpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBoZWxwU2Vjb25kVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuaGVscFNlY29uZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2VsY29tZSB5b3VyIGd1ZXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIGhlbHBUaGlyZFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBUaGlyZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR2V0dGluZyBwYWlkIHNhZmVseVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG5cbiAgaGVscEZpcnN0RGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaGVscEZpcnN0RGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5IHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcblxuICBoZWxwRmlyc3REZXNjMjoge1xuICAgIGlkOiBcImFwcC5oZWxwRmlyc3REZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJNYWVjZW5hcyBub24gc2NlbGVyaXNxdWUgcHVydXMsIGNvbmd1ZSBjdXJzdXMgYXJjdS4gRG9uZWMgdmVsIGRhcGlidXMgbWkuIE1hdXJpcyBtYXhpbXVzIHBvc3VlcmUgcGxhY2VyYXQuIFNlZCBldCBsaWJlcm8gZXUgbmliaCB0cmlzdGlxdWUgbW9sbGlzIGEgZWdldCBsZWN0dXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBoZWxwU2Vjb25kRGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaGVscFNlY29uZERlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuICBoZWxwU2Vjb25kRGVzYzI6IHtcbiAgICBpZDogXCJhcHAuaGVscFNlY29uZERlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yIGxvcmVtIGlwc3VtIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LiBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICB9LFxuXG4gIGhlbHBTZWNvbmREZXNjMzoge1xuICAgIGlkOiBcImFwcC5oZWxwU2Vjb25kRGVzYzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaGVscFRoaXJkRGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaGVscFRoaXJkRGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIE1vcmJpIHBlbGxlbnRlc3F1ZSB2ZW5lbmF0aXMgZmVsaXMgc2VkIGNvbnZhbGxpcy4gTnVsbGEgdmFyaXVzLCBuaWJoIHZpdGFlIHBsYWNlcmF0IHRlbXB1cywgbWF1cmlzIHNlbSBlbGVtZW50dW0gaXBzdW0uIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGhlbHBUaGlyZERlc2MyOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBUaGlyZERlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkZ1c2NlIHF1aXMgdmFyaXVzIG51bGxhLiBOdWxsYW0gbmlzaSBuaXNpLCBzdXNjaXBpdCB1dCBtYWduYSBxdWlzLCBmZXVnaWF0IHBvcnRhIG5pYmguIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGhlbHBUaGlyZERlc2MzOiB7XG4gICAgaWQ6IFwiYXBwLmhlbHBUaGlyZERlc2MzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBlbGxlbnRlc3F1ZSBzYWdpdHRpcyB2ZWhpY3VsYSBzZW0gcXVpcyBsdWN0dXMuIFByb2luIHNvZGFsZXMgbWFnbmEgaW4gbG9yZW0gaGVuZHJlcml0IGFsaXF1YW0uIEludGVnZXIgZXUgdmFyaXVzIG9yY2kuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgcHJvY2Vzc0Zsb3dIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnByb2Nlc3NGbG93SGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVhcm4gRXh0cmEgTW9uZXkgYW5kIEJlY29tZSBhIEhvc3Qgd2l0aCBhcHBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9jZXNzIEZsb3cgSGVhZGluZ1wiLFxuICB9LFxuICBwcm9jZXNzRmxvd1N1YkhlYWRpbmc6IHtcbiAgICBpZDogXCJhcHAucHJvY2Vzc0Zsb3dTdWJIZWFkaW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4cGxvcmV6IGxlIHNpdGUgw6AgbGEgcmVjaGVyY2hlIGR1IHBob3RvZ3JhcGhlIGlkw6lhbCBldCBwcm9maXRleiBkZXMgYm9ucyBtb21lbnRzIGVuIHRvdXRlIHNlcmVpbml0w6lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9jZXNzIEZsb3cgSGVhZGluZ1wiLFxuICB9LFxuICBzdGVwT25lSGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5zdGVwT25lSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBob3N0IHdpdGggYXBwP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgMVwiLFxuICB9LFxuICBzdGVwVHdvSGVhZGluZzoge1xuICAgIGlkOiBcImFwcC5zdGVwVHdvSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXkgaW4gQ29udHJvbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgMlwiLFxuICB9LFxuICBzdGVwVGhyZWVIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXBUaHJlZUhlYWRpbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdGF5IENvbmZpZGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgM1wiLFxuICB9LFxuICBzdGVwT25lRmxvdzoge1xuICAgIGlkOiBcImFwcC5zdGVwT25lRmxvd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJTaGFyZSB5b3VyIHZpbGxhLCBjb25kbyBvciBhcGFydG1lbnQgYW5kIGVhcm4geW91cnNlbGYgYW4gZXh0cmEgaW5jb21lLiBXaXRoIG92ZXIgMTIgeWVhcnMgb2YgZXhwZXJpZW5jZSwgd2UgbWFrZSBpdCBzaW1wbGUgYW5kIHNhZmUgdG8gcmVhY2ggZ3Vlc3RzIHRoYXQgYXJlIGxvb2tpbmcgZm9yIGZ1biBhbmQgdW5pcXVlIFBsYWNlcyB0byBzdGF5IGFjcm9zcyBUaGFpbGFuZCBhbmQgQmFsaS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGVwIDFcIixcbiAgfSxcbiAgc3RlcFR3b0Zsb3c6IHtcbiAgICBpZDogXCJhcHAuc3RlcFR3b0Zsb3dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU3RheSBpbiBjb250cm9sIHdpdGggYXBwLiBZb3UgaGF2ZSBmdWxsIGNvbnRyb2wgb2YgeW91ciBhdmFpbGFiaWxpdHksIHJhdGVzIGFuZCBydWxlcy4gWW91IGNhbiwgYmxvY2sgZGF0ZXMsIHNldCBjaGVjay1pbiB0aW1lcyBhbmQgbWFuYWdlIHlvdXIgb3duIGNvbW11bmljYXRpb25zIGRpcmVjdGx5IHdpdGggeW91ciBndWVzdHMgdGhyb3VnaCB0aGUgc3lzdGVtLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0ZXAgMlwiLFxuICB9LFxuICBzdGVwVGhyZWVGbG93OiB7XG4gICAgaWQ6IFwiYXBwLnN0ZXBUaHJlZUZsb3dcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2Ugb2ZmZXIgYWxsIHRoZSByaWdodCB0b29scyB0byBhbGxvdyB5b3UgdG8gaG9zdCBpbiBjb25maWRlbmNlLiBGcm9tIGEgZmxleGlibGUgYm9va2luZyBzeXN0ZW0gdGhyb3VnaCB0byBhIHNlY3VyZSBwYXltZW50IHN5c3RlbS4gU3RheSBjb25uZWN0ZWQgYW5kIGNvbmZpZGVudCB3aXRoIHRoZSBsYXRlc3QgdGVjaG5vbG9neS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGVwIDNcIixcbiAgfSxcbiAgYW5vbnltb3VzTWVzc2FnZToge1xuICAgIGlkOiBcImFwcC5hbm9ueW1vdXNNZXNzYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG8geW91IHdhbnQgdG8gcmVwb3J0IHRoaXMgVXNlcj9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgVXNlclwiLFxuICB9LFxuICByZXBvcnRVc2VySW5mbzoge1xuICAgIGlkOiBcImFwcC5yZXBvcnRVc2VySW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklmIHNvLCBwbGVhc2UgY2hvb3NlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgcmVwb3J0Q29udGVudDE6IHtcbiAgICBpZDogXCJhcHAucmVwb3J0Q29udGVudDFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaGlzIHByb2ZpbGUgc2hvdWxkIG5vdCBiZSBvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBVc2VyXCIsXG4gIH0sXG4gIHJlcG9ydENvbnRlbnQyOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydENvbnRlbnQyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXR0ZW1wdCB0byBzaGFyZSBjb250YWN0IGluZm9ybWF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBpZDogXCJhcHAuY2xvc2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbG9zZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBVc2VyXCIsXG4gIH0sXG4gIHJlcG9ydENvbnRlbnQzOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydENvbnRlbnQzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW5hcHByb3ByaWF0ZSBjb250ZW50IG9mIHNwYW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgVXNlclwiLFxuICB9LFxuICB0aGFua3lvdUluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLnRoYW5reW91SW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGhhbmtzIGZvciB0YWtpbmcgdGhlIHRpbWUgdG8gcmVwb3J0IHRoaXMgdXNlci4gVGhlc2UgcmVwb3J0cyBoZWxwIG1ha2UgYmV0dGVyIGZvciBldmVyeW9uZSwgc28gd2UgdGFrZSB0aGVtIHNlcmlvdXNseS4gV2Ugd2lsbCByZWFjaCBvdXQgaWYgd2UgaGF2ZSBxdWVzdGlvbnMgYWJvdXQgeW91ciByZXBvcnQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgdGhhbmt5b3VUaXRsZToge1xuICAgIGlkOiBcImFwcC50aGFua3lvdVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhhbmsgWW91XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgbWVzc2FnZUhpc3Ryb3lMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlSGlzdHJveUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBVc2VyXCIsXG4gIH0sXG4gIHRpdGxlUmVxdWlyZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC50aXRsZVJlcXVpcmVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXNzYWdlIEhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgVXNlclwiLFxuICB9LFxuICB0b3BCYW5uZXJUaXRsZToge1xuICAgIGlkOiBcImFwcC50b3BCYW5uZXJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0J3Mgc2ltcGxlIHRvIGJlY29tZSBhIGFwcCBob3N0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFVzZXJcIixcbiAgfSxcbiAgZm9vdGVyVGVybXM6IHtcbiAgICBpZDogXCJhcHAuZm9vdGVyVGVybXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUZXJtcywgUHJpdmFjeSwgQ3VycmVuY3kgJiBNb3JlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9vdGVyIEJ1dHRvblwiLFxuICB9LFxuICBmb290ZXJDbG9zZToge1xuICAgIGlkOiBcImFwcC5mb290ZXJDbG9zZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9vdGVyIEJ1dHRvblwiLFxuICB9LFxuICBteUhvc3RTcGFjZXM6IHtcbiAgICBpZDogXCJhcHAubXlIb3N0U3BhY2VzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBJdGVtXCIsXG4gIH0sXG4gIG15U3BhY2U6IHtcbiAgICBpZDogXCJhcHAubXlTcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNwYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWVudSBJdGVtXCIsXG4gIH0sXG4gIGNsZWFyOiB7XG4gICAgaWQ6IFwiYXBwLmNsZWFyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xlYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjbGVhclwiLFxuICB9LFxuICBhcHBseToge1xuICAgIGlkOiBcImFwcC5hcHBseVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcGx5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiYXBwbHlcIixcbiAgfSxcbiAgaG9tZVR5cGU6IHtcbiAgICBpZDogXCJhcHAuaG9tZVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb21lIHR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJob21lVHlwZVwiLFxuICB9LFxuICBwcmljZToge1xuICAgIGlkOiBcImFwcC5wcmljZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwicHJpY2VcIixcbiAgfSxcbiAgbW9yZUZpbHRlcnM6IHtcbiAgICBpZDogXCJhcHAubW9yZUZpbHRlcnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb3JlIGZpbHRlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJtb3JlRmlsdGVyc1wiLFxuICB9LFxuICBzaG93QW1lbml0aWVzOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dBbWVuaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbCBhbWVuaXRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIGNsb3NlQW1lbml0aWVzOiB7XG4gICAgaWQ6IFwiYXBwLmNsb3NlQW1lbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xvc2UgYWxsIGFtZW5pdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvZ2dsZSBCdXR0b25cIixcbiAgfSxcbiAgc2hvd01vcmU6IHtcbiAgICBpZDogXCJhcHAuc2hvd01vcmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IE1vcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIHNob3dMZXNzOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dMZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hvdyBMZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBzaG93QWxsOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dBbGxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvZ2dsZSBCdXR0b25cIixcbiAgfSxcbiAgY2xvc2VTYWZldHlGZWF0dXJlczoge1xuICAgIGlkOiBcImFwcC5jbG9zZVNhZmV0eUZlYXR1cmVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xvc2Ugc2FmZXR5IGZlYXR1cmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBjbG9zZVNoYXJlZFNwYWNlczoge1xuICAgIGlkOiBcImFwcC5jbG9zZVNoYXJlZFNwYWNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlIFNoYXJlZCBTcGFjZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIHNwYWNlc0luZm86IHtcbiAgICBpZDogXCJhcHAuc3BhY2VzSW5mb1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNwYWNlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwYWNlc1wiLFxuICB9LFxuICBuZWlnaGJvdXJIb29kOiB7XG4gICAgaWQ6IFwiYXBwLm5laWdoYm91ckhvb2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOZWlnaGJvdXJob29kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmVjb21lIEhvc3QgRm9ybVwiLFxuICB9LFxuICByZWFkTW9yZUFib3V0U3BhY2VzOiB7XG4gICAgaWQ6IFwiYXBwLnJlYWRNb3JlQWJvdXRTcGFjZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFkIG1vcmUgYWJvdXQgdGhlIHNwYWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBMaXN0aW5nXCIsXG4gIH0sXG4gIGhpZGVCdXR0b246IHtcbiAgICBpZDogXCJhcHAuaGlkZUJ1dHRvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhpZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IExpc3RpbmdcIixcbiAgfSxcbiAgc2hvd05laWdoYm91ckhvb2Q6IHtcbiAgICBpZDogXCJhcHAuc2hvd05laWdoYm91ckhvb2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IE5laWdoYm91ckhvb2RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb2dnbGUgQnV0dG9uXCIsXG4gIH0sXG4gIGdldHRpbmdBcm91bmQ6IHtcbiAgICBpZDogXCJhcHAuZ2V0dGluZ0Fyb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdldHRpbmcgQXJvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBMaXN0aW5nXCIsXG4gIH0sXG4gIGJvb2tOb3c6IHtcbiAgICBpZDogXCJhcHAuYm9va05vd1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2sgTm93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va2luZyBidXR0b25cIixcbiAgfSxcbiAgYmVkVHlwZXM6IHtcbiAgICBpZDogXCJhcHAuYmVkVHlwZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWQgVHlwZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCZWQgVHlwZXNcIixcbiAgfSxcbiAgY29udGFjdEFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RBZG1pblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBjb250YWN0IHVzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRhY3QgQWRtaW5cIixcbiAgfSxcbiAgcm9vbXNBbmRCZWRzOiB7XG4gICAgaWQ6IFwiYXBwLnJvb21zQW5kQmVkc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJvb21zIGFuZCBCZWRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUm9vbXMgYW5kIEJlZHNcIixcbiAgfSxcbiAgc2hvd0FsbEZhY2lsaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuc2hvd0FsbEZhY2lsaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbCBmYWNpbGl0aWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2hvdyBhbGwgZmFjaWxpdGllcyB0ZXh0XCIsXG4gIH0sXG4gIGNsb3NlRmFjaWxpdGllczoge1xuICAgIGlkOiBcImFwcC5jbG9zZUZhY2lsaXRpZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbG9zZSBhbGwgZmFjaWxpdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3NlIGZhY2lsaXRpZXMgdGV4dFwiLFxuICB9LFxuICBzaG93QWxsSG91c2VSdWxlczoge1xuICAgIGlkOiBcImFwcC5zaG93QWxsSG91c2VSdWxlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNob3cgYWxsIGhvdXNlIHJ1bGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2hvdyBhbGwgaG91c2UgcnVsZXMgdGV4dFwiLFxuICB9LFxuICBjbG9zZUhvdXNlUnVsZXM6IHtcbiAgICBpZDogXCJhcHAuY2xvc2VIb3VzZVJ1bGVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2xvc2UgYWxsIGhvdXNlIHJ1bGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2xvc2UgaG91c2UgcnVsZXMgdGV4dFwiLFxuICB9LFxuICBjaG9vc2VBQ291bnRyeToge1xuICAgIGlkOiBcImFwcC5jaG9vc2VBQ291bnRyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBhIGNvdW50cnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgYSBjb3VudHJ5XCIsXG4gIH0sXG4gIGFkZFBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmFkZFBob25lTnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIHBob25lIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBwaG9uZSBudW1iZXJcIixcbiAgfSxcbiAgYWRkQVBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmFkZEFQaG9uZU51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkZCBhIHBob25lIG51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBhIHBob25lIG51bWJlclwiLFxuICB9LFxuICB2ZXJpZnlWaWFTbXM6IHtcbiAgICBpZDogXCJhcHAudmVyaWZ5VmlhU21zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZ5IHZpYSBTTVNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZnkgdmlhIFNNU1wiLFxuICB9LFxuICBtb2JpbGVOdW1iZXJSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5tb2JpbGVOdW1iZXJSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHBob25lIG51bWJlci5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQbGVhc2UgZW50ZXIgYSBwaG9uZSBudW1iZXIuXCIsXG4gIH0sXG4gIHdlSGF2ZVNlbnRWZXJpZmljYXRpb25Db2RlOiB7XG4gICAgaWQ6IFwiYXBwLndlSGF2ZVNlbnRWZXJpZmljYXRpb25Db2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2Ugc2VudCBhIHZlcmlmaWNhdGlvbiBjb2RlIHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2Ugc2VudCBhIHZlcmlmaWNhdGlvbiBjb2RlIHRvXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbkNvZGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25Db2RlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgdGhlIDQtZGlnaXQgY29kZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBsZWFzZSBlbnRlciB0aGUgNC1kaWdpdCBjb2RlXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbkNvZGVSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC52ZXJpZmljYXRpb25Db2RlUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSB2ZXJpZmljYXRpb24gY29kZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQbGVhc2UgZW50ZXIgYSB2ZXJpZmljYXRpb24gY29kZS5cIixcbiAgfSxcbiAgc2VlQWxsOiB7XG4gICAgaWQ6IFwiYXBwLnNlZUFsbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlZSBBbGxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzZWVBbGxcIixcbiAgfSxcbiAgbG9jYXRpb25SZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5sb2NhdGlvblJlcXVpcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9jYXRpb24gaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2NhdGlvbiBpcyByZXF1aXJlZFwiLFxuICB9LFxuICBsb2NhdGlvbkFkZHJlc3NSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5sb2NhdGlvbkFkZHJlc3NSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvY2F0aW9uIEFkZHJlc3MgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2NhdGlvbiBBZGRyZXNzIGlzIHJlcXVpcmVkXCIsXG4gIH0sXG4gIGxpc3ROb3RGb3VuZFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3ROb3RGb3VuZFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSXQgbG9va3MgbGlrZSB0aGlzIGxpc3RpbmcgbWF5IGRlbGV0ZWQgb3IgdW5wdWJsaXNoZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm90IEZvdW5kXCIsXG4gIH0sXG4gIHVzZXJEZWxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLnVzZXJEZWxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGFyZSBkZWxldGVkIGJ5IGFkbWluLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgZGVsZXRlZCB1c2VyXCIsXG4gIH0sXG4gIGNhbmNlbEluZm9Cb29raW5nOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbEluZm9Cb29raW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9zdCBob3N0cyByZXNwb25kIHdpdGhpbiAyNCBob3Vycy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2VcIixcbiAgfSxcbiAgY29va2llc0Rpc2NsYWltZXI6IHtcbiAgICBpZDogXCJhcHAuY29va2llc0Rpc2NsYWltZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwidXNlcyBjb29raWVzIHRvIHVuZGVyc3RhbmQgaG93IHlvdSB1c2Ugb3VyIHNpdGUgYW5kIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLiBCeSB1c2luZyBvdXIgc2l0ZSwgeW91IGFjY2VwdCBvdXIgdXNlIG9mIGNvb2tpZXMuIFRvIGxlYXJuIG1vcmUsIGdvIHRvIG91clwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4dHJhR3Vlc3RJbmNsdWRlZFwiLFxuICB9LFxuICBnb3RJdDoge1xuICAgIGlkOiBcImFwcC5nb3RJdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkdPVCBJVFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIiBjb29raWVzIERpc2NsYWltZXIgQnV0dG9uXCIsXG4gIH0sXG4gIHN0ZXAxSGVhZGluZ05ldzoge1xuICAgIGlkOiBcImFwcC5zdGVwMUhlYWRpbmdOZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTVEVQIDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTVEVQIDIgSGVhZGluZ1wiLFxuICB9LFxuICBNYXhpbXVtdXBsb2FkOiB7XG4gICAgaWQ6IFwiYXBwLk1heGltdW11cGxvYWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIHVwbG9hZCBzaXplOjFNQlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob3RvcyBVcGxvYWRcIixcbiAgfSxcbiAgY29va2llUG9saWN5OiB7XG4gICAgaWQ6IFwiYXBwLmNvb2tpZVBvbGljeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvb2tpZSBwb2xpY3lcIixcbiAgICBkZXNjcmlwdGlvbjogXCIgY29va2llcyBEaXNjbGFpbWVyIExpbmtcIixcbiAgfSxcbiAgYmxvY2tEYXRlczoge1xuICAgIGlkOiBcImFwcC5ibG9ja2VkRGF0ZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCbG9jayBkYXRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgU3RlcDNcIixcbiAgfSxcbiAgZGVTZWxlY3Q6IHtcbiAgICBpZDogXCJhcHAuZGVTZWxlY3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWwgZGVTZWxlY3QgYnV0dG9uXCIsXG4gIH0sXG4gIHNlbGVjdGVkRGF0ZXNTdWNjZXNzOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdGVkRGF0ZXNTdWNjZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91ciBjYWxlbmRhciBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgY2FsZW5kYXIgaGFzIGJlZW4gdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsXG4gIH0sXG4gIHNlbGVjdGVkRGF0ZXNFcnJvcjoge1xuICAgIGlkOiBcImFwcC5zZWxlY3RlZERhdGVzRXJyb3JcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgfSxcbiAgc2VsZWN0ZWREYXRlczoge1xuICAgIGlkOiBcImFwcC5zZWxlY3RlZERhdGVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VsZWN0ZWQgZGF0ZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWxlY3RlZCBkYXRlc1wiLFxuICB9LFxuICBtYWtlRGF0ZUF2YWlsYWJsZToge1xuICAgIGlkOiBcImFwcC5tYWtlRGF0ZUF2YWlsYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNwZWNpYWwgUHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIFN0ZXAzXCIsXG4gIH0sXG4gIHNlc3Npb25QcmljZToge1xuICAgIGlkOiBcImFwcC5zZXNzaW9uUHJpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTcGVjaWFsIFByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2Vzc2lvblByaWNlXCIsXG4gIH0sXG4gIHNlbGVjdGVkRGF0ZXNCbG9ja2VkOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdGVkRGF0ZXNCbG9ja2VkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VsZWN0ZWQgZGF0ZXMgd2lsbCBiZSBibG9ja2VkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlbGVjdGVkIGRhdGVzIHdpbGwgYmUgYmxvY2tlZC5cIixcbiAgfSxcbiAgYXZhaWxhYmxpbGl0eXRlcm06IHtcbiAgICBpZDogXCJhcHAuYXZhaWxhYmxpbGl0eXRlcm1cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBdmFpbGFiaWxpdHkgdGVybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF2YWlsYWJpbGl0eSB0ZXJtXCIsXG4gIH0sXG4gIGNvbnRhY3RGb3JtSW5mb3JtYXRpb246IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEZvcm1JbmZvcm1hdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBDb250YWN0ICYgU3VwcG9ydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNvbnRhY3RGb3JtXCIsXG4gIH0sXG4gIGNvbnRhY3RGb3JtRW1haWw6IHtcbiAgICBpZDogXCJhcHAuY29udGFjdEZvcm1FbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIFVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29udGFjdEZvcm1cIixcbiAgfSxcbiAgY29udGFjdEZvcm1DYWxsOiB7XG4gICAgaWQ6IFwiYXBwLmNvbnRhY3RGb3JtQ2FsbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbGwgVXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb250YWN0Rm9ybVwiLFxuICB9LFxuICB3aHlibG9ja1RpdGxlMToge1xuICAgIGlkOiBcImFwcC53aHlibG9ja1RpdGxlMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBXaGF0IGlzIExvcmVtIElwc3VtP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeSBibG9jayBUaXRsZVwiLFxuICB9LFxuICB3aHlibG9ja1RpdGxlMjoge1xuICAgIGlkOiBcImFwcC53aHlibG9ja1RpdGxlMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBUaGlzIHRvb2wgZm9yIG91ciBkYXkgdG8gZGF5IHdvcmsgYW5kIG91ciBjbGllbnRzP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeSBibG9jayB0aXRsZVwiLFxuICB9LFxuICB3aHlibG9ja2Rlc2MxOiB7XG4gICAgaWQ6IFwiYXBwLndoeWJsb2NrZGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aHkgYmxvY2sgZGVzY3JpcHRpb25cIixcbiAgfSxcbiAgd2h5YmxvY2tkZXNjMjoge1xuICAgIGlkOiBcImFwcC53aHlibG9ja2Rlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5IGJsb2NrIGRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGhvc3RpbmdCbG9ja3RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RpbmdCbG9ja3RpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhlcmUgYXJlIDMgTG9yZW0gSXBzdW0gZ2VuZXJhdG9yc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgdGl0bGVcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NraGVhZGluZzE6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NraGVhZGluZzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIGhlYWRpbmdcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NraGVhZGluZzI6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NraGVhZGluZzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIGhlYWRpbmdcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NraGVhZGluZzM6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NraGVhZGluZzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0aW5nIEJsb2NrIGhlYWRpbmdcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrZGVzYzE6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrZGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrZGVzYzI6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrZGVzYzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrZGVzYzM6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrZGVzYzNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9udGl0bGU6IHtcbiAgICBpZDogXCJhcHAuY292ZXJTZWN0aW9udGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVc2Ugb3VyIGdlbmVyYXRvciB0byBnZXQgeW91ciBvd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIFRpdGxlXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmRlc2MxOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmRlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmRlc2MyOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmRlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmxpc3RJdGVtMToge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25saXN0SXRlbTFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBMaXN0IEl0ZW1cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9ubGlzdEl0ZW0yOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmxpc3RJdGVtMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcInF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2lcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIExpc3QgSXRlbVwiLFxuICB9LFxuICBjb3ZlclNlY3Rpb25saXN0SXRlbTM6IHtcbiAgICBpZDogXCJhcHAuY292ZXJTZWN0aW9ubGlzdEl0ZW0zXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBMaXN0IEl0ZW1cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9ubGlzdEl0ZW00OiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmxpc3RJdGVtNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtIHF1aWEgdm9sdXB0YXMgc2l0IGFzcGVybmF0dXIgXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBMaXN0IEl0ZW1cIixcbiAgfSxcbiAgY292ZXJTZWN0aW9ubGlzdEl0ZW01OiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbmxpc3RJdGVtNVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBVdCBlbmltIGFkIG1pbmltYSB2ZW5pYW0sIHF1aXMgbm9zdHJ1bSBleGVyY2l0YXRpb25lbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gTGlzdCBJdGVtXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbmxpc3RJdGVtNjoge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25saXN0SXRlbTZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gTGlzdCBJdGVtXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50dGl0bGU6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnR0aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXltZW50IENvbnRlbnQgdGl0bGVcIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRoZWFkaW5nMToge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudGhlYWRpbmcxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VkIHV0IHBlcnNwaWNpYXRpc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW1lbnQgQ29udGVudCBIZWFkaW5nXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50aGVhZGluZzI6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRoZWFkaW5nMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5lbW8gZW5pbSBpcHNhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW1lbnQgQ29udGVudCBIZWFkaW5nXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50aGVhZGluZzM6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRoZWFkaW5nM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5lcXVlIHBvcnJvXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5bWVudCBDb250ZW50IEhlYWRpbmdcIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRkZXNjMToge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudGRlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkR1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5bWVudCBDb250ZW50IERlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50ZGVzYzI6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRkZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXltZW50IENvbnRlbnQgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgcGF5bWVudENvbnRlbnRkZXNjMzoge1xuICAgIGlkOiBcImFwcC5wYXltZW50Q29udGVudGRlc2MzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXltZW50IENvbnRlbnQgRGVzY3JpcHRpb25cIixcbiAgfSxcbiAgcXVvdGVUZXh0MToge1xuICAgIGlkOiBcImFwcC5xdW90ZVRleHQxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIHRleHRcIixcbiAgfSxcbiAgcXVvdGV0YWdsaW5lMToge1xuICAgIGlkOiBcImFwcC5xdW90ZXRhZ2xpbmUxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUXVvdGUgVGFnIExpbmVcIixcbiAgfSxcbiAgcXVvdGVidXR0b24xOiB7XG4gICAgaWQ6IFwiYXBwLnF1b3RlYnV0dG9uMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvcmVtIElwc3VtIFRleHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSBCdXR0b25cIixcbiAgfSxcbiAgcXVvdGVUZXh0Mjoge1xuICAgIGlkOiBcImFwcC5xdW90ZVRleHQyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSB0ZXh0XCIsXG4gIH0sXG4gIHF1b3RldGFnbGluZTI6IHtcbiAgICBpZDogXCJhcHAucXVvdGV0YWdsaW5lMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCIgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIFRhZyBMaW5lXCIsXG4gIH0sXG4gIHF1b3RlYnV0dG9uMzoge1xuICAgIGlkOiBcImFwcC5xdW90ZWJ1dHRvbjNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgTG9yZW0gSXBzdW0gVGV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIEJ1dHRvblwiLFxuICB9LFxuICBjb3VudGluZ1NlY3Rpb250aXRsZToge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb250aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdW50aW5nIFNlY3Rpb24gVGl0bGUgXCIsXG4gIH0sXG4gIGNvdW50aW5nU2VjdGlvbnRhZ2xpbmUxOiB7XG4gICAgaWQ6IFwiYXBwLmNvdW50aW5nU2VjdGlvbnRhZ2xpbmUxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ291bnRpbmcgU2VjdGlvbiBUYWdsaW5lIFwiLFxuICB9LFxuICBjb3VudGluZ1NlY3Rpb250YWdsaW5lMjoge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb250YWdsaW5lMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY29cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3VudGluZyBTZWN0aW9uIFRhZ2xpbmUgXCIsXG4gIH0sXG4gIGNvdW50aW5nU2VjdGlvbnRhZ2xpbmUzOiB7XG4gICAgaWQ6IFwiYXBwLmNvdW50aW5nU2VjdGlvbnRhZ2xpbmUzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTmVxdWUgcG9ycm8gcXVpc3F1YW0gXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ291bnRpbmcgU2VjdGlvbiBUYWdsaW5lIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb250aXRsZToge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb250aXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBMb3JlbSBJcHN1bSBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBYm91dCBTZWN0aW9uIFRpdGxlIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb25oZWFkaW5nMToge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb25oZWFkaW5nMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBXaGF0IGlzIExvcmVtIElwc3VtP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFib3V0IFNlY3Rpb24gSGVhZGluZyBcIixcbiAgfSxcbiAgYWJvdXRTZWN0aW9uZGVzYzE6IHtcbiAgICBpZDogXCJhcHAuYWJvdXRTZWN0aW9uZGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBYm91dCBTZWN0aW9uIERlc2NyaXB0aW9uIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb25oZWFkaW5nMjoge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb25oZWFkaW5nMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRoaXMgdG9vbCBmb3Igb3VyIGRheSB0byBkYXkgd29yayBhbmQgb3VyIGNsaWVudHM/XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWJvdXQgU2VjdGlvbiBIZWFkaW5nIFwiLFxuICB9LFxuICBhYm91dFNlY3Rpb25kZXNjMjoge1xuICAgIGlkOiBcImFwcC5hYm91dFNlY3Rpb25kZXNjMlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFib3V0IFNlY3Rpb24gRGVzY3JpcHRpb24gXCIsXG4gIH0sXG4gIGZhcXRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmZhcXRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiIEZBUVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSAgdGl0bGUgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNldGl0bGUxOiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNldGl0bGUxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSB0aXRsZSBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2VDb250ZW50MToge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZUNvbnRlbnQxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTI6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZTJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIHRpdGxlIFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZUNvbnRlbnQyOiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNlQ29udGVudDJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIEV4ZXJjaXRhdGlvbiBpbiBmdWdpYXQgZXN0IHV0IGFkIGVhIGN1cGlkYXRhdCB1dCBpbiBjdXBpZGF0YXQgb2NjYWVjYXQgdXQgb2NjYWVjYXQgY29uc2VxdWF0IGVzdCBtaW5pbSBtaW5pbSAgIGVzc2UgdGVtcG9yIGxhYm9ydW0gY29uc2VxdWF0IGVzc2UgYWRpcGlzaWNpbmcgZXUgcmVwcmVoZW5kZXJpdCBlbmltLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSBDb250ZW50IFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZXRpdGxlMzoge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZXRpdGxlM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSB0aXRsZSBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2VDb250ZW50Mzoge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZUNvbnRlbnQzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkV4ZXJjaXRhdGlvbiBpbiBmdWdpYXQgZXN0IHV0IGFkIGVhIGN1cGlkYXRhdCB1dCBpbiBjdXBpZGF0YXQgb2NjYWVjYXQgdXQgb2NjYWVjYXQgY29uc2VxdWF0IGVzdCBtaW5pbSBtaW5pbSAgIGVzc2UgdGVtcG9yIGxhYm9ydW0gY29uc2VxdWF0IGVzc2UgYWRpcGlzaWNpbmcgZXUgcmVwcmVoZW5kZXJpdCBlbmltLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSBDb250ZW50IFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZXRpdGxlNDoge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZXRpdGxlNFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJ0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIHRpdGxlIFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZUNvbnRlbnQ0OiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNlQ29udGVudDRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiRXhlcmNpdGF0aW9uIGluIGZ1Z2lhdCBlc3QgdXQgYWQgZWEgY3VwaWRhdGF0IHV0IGluIGN1cGlkYXRhdCBvY2NhZWNhdCB1dCBvY2NhZWNhdCBjb25zZXF1YXQgZXN0IG1pbmltIG1pbmltICAgZXNzZSB0ZW1wb3IgbGFib3J1bSBjb25zZXF1YXQgZXNzZSBhZGlwaXNpY2luZyBldSByZXByZWhlbmRlcml0IGVuaW0uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIENvbnRlbnQgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNldGl0bGU1OiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNldGl0bGU1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSB0aXRsZSBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2VDb250ZW50NToge1xuICAgIGlkOiBcImFwcC5mYXFjb2xsYXBzZUNvbnRlbnQ1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIiBFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTY6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZTZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgdGl0bGUgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNlQ29udGVudDY6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2VDb250ZW50NlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTc6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZTdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgdGl0bGUgXCIsXG4gIH0sXG4gIGZhcWNvbGxhcHNlQ29udGVudDc6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2VDb250ZW50N1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJFeGVyY2l0YXRpb24gaW4gZnVnaWF0IGVzdCB1dCBhZCBlYSBjdXBpZGF0YXQgdXQgaW4gY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW0gICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1IHJlcHJlaGVuZGVyaXQgZW5pbS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXEgY29sbGFwc2UgQ29udGVudCBcIixcbiAgfSxcbiAgZmFxY29sbGFwc2V0aXRsZTg6IHtcbiAgICBpZDogXCJhcHAuZmFxY29sbGFwc2V0aXRsZThcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJ0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFxIGNvbGxhcHNlIHRpdGxlIFwiLFxuICB9LFxuICBmYXFjb2xsYXBzZUNvbnRlbnQ4OiB7XG4gICAgaWQ6IFwiYXBwLmZhcWNvbGxhcHNlQ29udGVudDhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiIEV4ZXJjaXRhdGlvbiBpbiBmdWdpYXQgZXN0IHV0IGFkIGVhIGN1cGlkYXRhdCB1dCBpbiBjdXBpZGF0YXQgb2NjYWVjYXQgdXQgb2NjYWVjYXQgY29uc2VxdWF0IGVzdCBtaW5pbSBtaW5pbSAgIGVzc2UgdGVtcG9yIGxhYm9ydW0gY29uc2VxdWF0IGVzc2UgYWRpcGlzaWNpbmcgZXUgcmVwcmVoZW5kZXJpdCBlbmltLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhcSBjb2xsYXBzZSBDb250ZW50IFwiLFxuICB9LFxuXG4gIGNvbnRhY3RGb3JtQWRkcmVzczoge1xuICAgIGlkOiBcImFwcC5jb250YWN0Rm9ybUFkZHJlc3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250YWN0IEFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb250YWN0IEFkZHJlc3NcIixcbiAgfSxcblxuICBzaG93RGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuc2hvd0Rlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hvdyBkZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgTGlzdGluZ1wiLFxuICB9LFxuICBoaWRlRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAuaGlkZURlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGlkZSBkZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpZXcgTGlzdGluZ1wiLFxuICB9LFxuICBzaG93QWxsU2FmZXR5RmVhdHVyZXM6IHtcbiAgICBpZDogXCJhcHAuc2hvd0FsbFNhZmV0eUZlYXR1cmVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2hvdyBhbGwgc2FmZXR5IGZlYXR1cmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBzaG93QWxsU2hhcmVkU3BhY2VzOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dBbGxTaGFyZWRTcGFjZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IGFsbCBzaGFyZWQgc3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBjbG9zZUFsbFNoYXJlZFNwYWNlczoge1xuICAgIGlkOiBcImFwcC5jbG9zZUFsbFNoYXJlZFNwYWNlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlIGFsbCBzaGFyZWQgc3BhY2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG9nZ2xlIEJ1dHRvblwiLFxuICB9LFxuICBuaWdodE9mOiB7XG4gICAgaWQ6IFwiYXBwLm5pZ2h0T2ZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOaWdodCBvZlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5pZ2h0IG9mXCIsXG4gIH0sXG4gIFlvdWhhZHJldmlld3Nmb3I6IHtcbiAgICBpZDogXCJhcHAuWW91aGFkcmV2aWV3c2ZvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdSByZXZpZXdlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSByZXZpZXdlZFwiLFxuICB9LFxuICBzcmV2aWV3OiB7XG4gICAgaWQ6IFwiYXBwLnNyZXZpZXdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJzIHJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInMgcmV2aWV3XCIsXG4gIH0sXG4gIHlvdUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnlvdUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3XCIsXG4gIH0sXG4gIGV4Y2VlZExpbWl0OiB7XG4gICAgaWQ6IFwiYXBwLmV4Y2VlZExpbWl0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGltaXQgRXhjZWVkZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJleGNlZWRMaW1pdFwiLFxuICB9LFxuICBlbmFibGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5lbmFibGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVuYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVuYWJsZVwiLFxuICB9LFxuICBkaXNhYmxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZGlzYWJsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2FibGVcIixcbiAgfSxcbiAgcmVtb3ZlRGF0ZUVycm9yOiB7XG4gICAgaWQ6IFwiYXBwLnJlbW92ZURhdGVFcnJvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJQbGVhc2UgY2hvb3NlIHRoZSBibG9ja2VkIG9yIHNwZWNpYWwgcHJpY2luZyBkYXRlcyB0byBtYWtlIHRoZW0gYXZhaWxhYmxlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlbW92ZSBkYXRlIGZyb20gc3BlY2lhbCBwcmljaW5nIGVycm9yIG1lc3NhZ2VcIixcbiAgfSxcbiAgdW5CbG9ja0luZm86IHtcbiAgICBpZDogXCJhcHAudW5CbG9ja0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiTm90ZTogVG8gdW5ibG9jayBhIGRhdGUsIHNlbGVjdCBhbnkgYmxvY2tlZCBvciBhdmFpbGFibGUgZGF0ZSBhbmQgc2F2ZSB3aXRob3V0IGdpdmluZyBzcGVjaWFsIHByaWNlLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNhbGVuZGFyIHVuYmxvY2sgaW5mb1wiLFxuICB9LFxuICB6aXBjb2RlT25lOiB7XG4gICAgaWQ6IFwiYXBwLnppcGNvZGVPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJaSVBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJaSVAgQ29kZVwiLFxuICB9LFxuICBjYW5jZWxsYXRpb25Qb2xpY2llc09uZToge1xuICAgIGlkOiBcImFwcC5jYW5jZWxsYXRpb25Qb2xpY2llc09uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJhbGxvd3MgaG9zdHMgdG8gY2hvb3NlIGFtb25nIHRocmVlIHN0YW5kYXJkaXplZCBjYW5jZWxsYXRpb24gcG9saWNpZXMgKEZsZXhpYmxlLCBNb2RlcmF0ZSwgYW5kIFN0cmljdCkgV2lsbCBiZSBlbmZvcmNlZCB0byBwcm90ZWN0IGJvdGggZ3Vlc3QgYW5kIGhvc3QgYWxpa2UuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIFBvbGljaWVzXCIsXG4gIH0sXG4gIGNhbmNlbGxhdGlvblBvbGljaWVzVHdvOiB7XG4gICAgaWQ6IFwiYXBwLmNhbmNlbGxhdGlvblBvbGljaWVzVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkVhY2ggbGlzdGluZyBhbmQgcmVzZXJ2YXRpb24gb24gb3VyIHNpdGUgd2lsbCBjbGVhcmx5IHN0YXRlIHRoZSBjYW5jZWxsYXRpb24gcG9saWN5LiBHdWVzdHMgd2hpbGUgdmlld2luZyB0aGVpciB0cmF2ZWwgcGxhbnMgYXJlIGFibGUgdG8gcmV2aWV3IGFueSBwZW5hbHRpZXMgYW5kIGFsc28gY2FuY2VsIGJ5IGNsaWNraW5nICDigJhDYW5jZWzigJkgb24gdGhlIHJlc3BlY3RpdmUgcmVzZXJ2YXRpb24uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIFBvbGljaWVzXCIsXG4gIH0sXG4gIGNhbmNlbGxhdGlvblBvbGljaWVzVGhyZWU6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGF0aW9uUG9saWNpZXNUaHJlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJBIGhvc3Qgd2lsbCBiZSBhYmxlIHRvIHNlZSB0aGUgbnVtYmVyIG9mIHJlc2VydmF0aW9ucyBhIGd1ZXN0IGhhcyBDYW5jZWxsZWQgT3ZlciB0aGUgcGFzdCAxMiBtb250aHMgd2hlbiB0aGUgZ3Vlc3Qgc3VibWl0cyBCb29raW5nIHJlcXVlc3QuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsbGF0aW9uIFBvbGljaWVzXCIsXG4gIH0sXG4gIGxvY2FsTGF3c09uZToge1xuICAgIGlkOiBcImFwcC5sb2NhbExhd3NPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiVGFrZSBhIG1vbWVudCB0byByZXZpZXcgeW91ciBsb2NhbCBsYXdzLiBXZSB3YW50IHRvIG1ha2Ugc3VyZSB5b3XigJl2ZSBnb3QgZXZlcnl0aGluZyB5b3UgbmVlZCB0byBnZXQgb2ZmIHRvIGEgZ3JlYXQgc3RhcnQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG93Y2FsIExhd1wiLFxuICB9LFxuICBsb2NhbExhd3NUd286IHtcbiAgICBpZDogXCJhcHAubG9jYWxMYXdzVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlBsZWFzZSBlZHVjYXRlIHlvdXJzZWxmIGFib3V0IHRoZSBsYXdzIGluIHlvdXIganVyaXNkaWN0aW9uIGJlZm9yZSBsaXN0aW5nIHlvdXIgc3BhY2UuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG93Y2FsIExhd1wiLFxuICB9LFxuICBsb2NhbExhd3NUaHJlZToge1xuICAgIGlkOiBcImFwcC5sb2NhbExhd3NUaHJlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJNb3N0IGNpdGllcyBoYXZlIHJ1bGVzIGNvdmVyaW5nIGhvbWVzaGFyaW5nLCBhbmQgdGhlIHNwZWNpZmljIGNvZGVzIGFuZCBvcmRpbmFuY2VzIGNhbiBhcHBlYXIgaW4gbWFueSBwbGFjZXMgKHN1Y2ggYXMgem9uaW5nLCBidWlsZGluZywgbGljZW5zaW5nIG9yIHRheCBjb2RlcykuIEluIG1vc3QgcGxhY2VzLCB5b3UgbXVzdCByZWdpc3RlciwgZ2V0IGEgcGVybWl0LCBvciBvYnRhaW4gYSBsaWNlbnNlIGJlZm9yZSB5b3UgbGlzdCB5b3VyIHByb3BlcnR5IG9yIGFjY2VwdCBndWVzdHMuIFlvdSBtYXkgYWxzbyBiZSByZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyBhbmQgcmVtaXR0aW5nIGNlcnRhaW4gdGF4ZXMuIEluIHNvbWUgcGxhY2VzLCBzaG9ydC10ZXJtIHJlbnRhbHMgY291bGQgYmUgcHJvaGliaXRlZCBhbHRvZ2V0aGVyLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvd2NhbCBMYXdcIixcbiAgfSxcbiAgbG9jYWxMYXdzRm91cjoge1xuICAgIGlkOiBcImFwcC5sb2NhbExhd3NGb3VyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIk1vc3QgY2l0aWVzIGhhdmUgcnVsZXMgY292ZXJpbmcgaG9tZXNoYXJpbmcsIGFuZCB0aGUgc3BlY2lmaWMgY29kZXMgYW5kIG9yZGluYW5jZXMgY2FuIGFwcGVhciBpbiBtYW55IHBsYWNlcyAoc3VjaCBhcyB6b25pbmcsIGJ1aWxkaW5nLCBsaWNlbnNpbmcgb3IgdGF4IGNvZGVzKS4gSW4gbW9zdCBwbGFjZXMsIHlvdSBtdXN0IHJlZ2lzdGVyLCBnZXQgYSBwZXJtaXQsIG9yIG9idGFpbiBhIGxpY2Vuc2UgYmVmb3JlIHlvdSBsaXN0IHlvdXIgcHJvcGVydHkgb3IgYWNjZXB0IGd1ZXN0cy4gWW91IG1heSBhbHNvIGJlIHJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIGFuZCByZW1pdHRpbmcgY2VydGFpbiB0YXhlcy4gSW4gc29tZSBwbGFjZXMsIHNob3J0LXRlcm0gcmVudGFscyBjb3VsZCBiZSBwcm9oaWJpdGVkIGFsdG9nZXRoZXIuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG93Y2FsIExhd1wiLFxuICB9LFxuICBsb2NhbExhd3NGaXZlOiB7XG4gICAgaWQ6IFwiYXBwLmxvY2FsTGF3c0ZpdmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiU2luY2UgeW91IGFyZSByZXNwb25zaWJsZSBmb3IgeW91ciBvd24gZGVjaXNpb24gdG8gbGlzdCBvciBib29rLCB5b3Ugc2hvdWxkIGdldCBjb21mb3J0YWJsZSB3aXRoIHRoZSBhcHBsaWNhYmxlIHJ1bGVzIGJlZm9yZSBsaXN0aW5nIG9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG93Y2FsIExhd1wiLFxuICB9LFxuICBsb2NhbExhd3NTaXg6IHtcbiAgICBpZDogXCJhcHAubG9jYWxMYXdzU2l4XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRvIGdldCB5b3Ugc3RhcnRlZCwgd2Ugb2ZmZXIgc29tZSBoZWxwZnVsIHJlc291cmNlcyB1bmRlciDigJxZb3VyIENpdHkgTGF3cy7igJ1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3djYWwgTGF3XCIsXG4gIH0sXG4gIGxvY2FsTGF3c1NldmVuOiB7XG4gICAgaWQ6IFwiYXBwLmxvY2FsTGF3c1NldmVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkJ5IGFjY2VwdGluZyBvdXIgVGVybXMgb2YgU2VydmljZSBhbmQgbGlzdGluZyB5b3VyIHNwYWNlLCB5b3UgY2VydGlmeSB0aGF0IHlvdSB3aWxsIGZvbGxvdyBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvd2NhbCBMYXdcIixcbiAgfSxcbiAgZmxleGlibGVUaXRsZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmxleGlibGU6IEZ1bGwgcmVmdW5kIDEgZGF5IHByaW9yIHRvIGFycml2YWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzT25lOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNsZWFuaW5nIGZlZXMgYXJlIGFsd2F5cyByZWZ1bmRlZCBpZiB0aGUgZ3Vlc3QgZGlkIG5vdCBjaGVjayBpbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzVHdvOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc1RocmVlOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGhyZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwic2VydmljZSBmZWUgaXMgcmVmdW5kYWJsZSBpZiB0aGUgZ3Vlc3QgY2FuY2VscyBiZWZvcmUgdGhlIHRyaXAgc3RhcnRzLiBJZiBhIGd1ZXN0IGJvb2tzIGEgcmVzZXJ2YXRpb24gdGhhdCBvdmVybGFwcyB3aXRoIGFueSBwYXJ0IG9mIGFuIGV4aXN0aW5nIHJlc2VydmF0aW9uLCB3ZSB3b27igJl0IHJlZnVuZCB0aGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzRm91cjoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZUZvdXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJzZXJ2aWNlIGZlZSBpZiB0aGV5IGRlY2lkZSB0byBjYW5jZWwuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc0ZpdmU6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVGaXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkFjY29tbW9kYXRpb24gZmVlcyAodGhlIHRvdGFsIG5pZ2h0bHkgcmF0ZSB5b3UncmUgY2hhcmdlZCkgYXJlIHJlZnVuZGFibGUgaW4gY2VydGFpbiBjaXJjdW1zdGFuY2VzIGFzIG91dGxpbmVkIGJlbG93LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNTaXg6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVTaXhcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSWYgdGhlcmUgaXMgYSBjb21wbGFpbnQgZnJvbSBlaXRoZXIgcGFydHksIG5vdGljZSBtdXN0IGJlIGdpdmVuIHRvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc1NldmVuOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlU2V2ZW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJ3aXRoaW4gMjQgaG91cnMgb2YgY2hlY2staW4uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgY2FuY2VsRGV0YWlsc0VpZ2h0OiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlRWlnaHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwid2lsbCBtZWRpYXRlIHdoZW4gbmVjZXNzYXJ5LCBhbmQgaGFzIHRoZSBmaW5hbCBzYXkgaW4gYWxsIGRpc3B1dGVzLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNOaW5lOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlTmluZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJBIHJlc2VydmF0aW9uIGlzIG9mZmljaWFsbHkgY2FuY2VsZWQgd2hlbiB0aGUgZ3Vlc3QgY2xpY2tzIHRoZSBjYW5jZWxsYXRpb24gYnV0dG9uIG9uIHRoZSBjYW5jZWxsYXRpb24gY29uZmlybWF0aW9uIHBhZ2UsIHdoaWNoIHRoZXkgY2FuIGZpbmQgaW4gRGFzaGJvYXJkID4gWW91ciBUcmlwcyA+IENhbmNlbC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBjYW5jZWxEZXRhaWxzVGVuOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkNhbmNlbGxhdGlvbiBwb2xpY2llcyBtYXkgYmUgc3VwZXJzZWRlZCBieSB0aGUgR3Vlc3QgUmVmdW5kIFBvbGljeSwgZXh0ZW51YXRpbmcgY2lyY3Vtc3RhbmNlcywgb3IgY2FuY2VsbGF0aW9ucyBieVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNFbGV2ZW46IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVFbGV2ZW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBcHBsaWNhYmxlIHRheGVzIHdpbGwgYmUgcmV0YWluZWQgYW5kIHJlbWl0dGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGNhbmNlbERldGFpbHNUd2VsdmU6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsRGV0YWlsc1R3ZWx2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJmb3IgYW55IG90aGVyIHJlYXNvbiBwZXJtaXR0ZWQgdW5kZXIgdGhlIFRlcm1zIG9mIFNlcnZpY2UuIFBsZWFzZSByZXZpZXcgdGhlc2UgZXhjZXB0aW9ucy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBkYXlQcmlvcjoge1xuICAgIGlkOiBcImFwcC5kYXlQcmlvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcImRheSBQcmlvclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIG1vbnRoczoge1xuICAgIGlkOiBcImFwcC5tb250aHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaHUsIEp1blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGltZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRpbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVHdlbHZlOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVHdlbHZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkZvciBhIGZ1bGwgcmVmdW5kIG9mIGFjY29tbW9kYXRpb24gZmVlcywgY2FuY2VsbGF0aW9uIG11c3QgYmUgbWFkZSBhIGZ1bGwgMjQgaG91cnMgcHJpb3IgdG8gbGlzdGluZ+KAmXMgbG9jYWwgY2hlY2sgaW4gdGltZSAob3IgMzowMCBQTSBpZiBub3Qgc3BlY2lmaWVkKSBvbiB0aGUgZGF5IG9mIGNoZWNrIGluLiBGb3IgZXhhbXBsZSwgaWYgY2hlY2staW4gaXMgb24gRnJpZGF5LCBjYW5jZWwgYnkgVGh1cnNkYXkgb2YgdGhhdCB3ZWVrIGJlZm9yZSBjaGVjayBpbiB0aW1lLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGhpcnRlZW46IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVUaGlydGVlblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJZiB0aGUgZ3Vlc3QgY2FuY2VscyBsZXNzIHRoYW4gMjQgaG91cnMgYmVmb3JlIGNoZWNrLWluLCB0aGUgZmlyc3QgbmlnaHQgaXMgbm9uLXJlZnVuZGFibGUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgZmxleGlibGVGb3VydGVlbjoge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZUZvdXJ0ZWVuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIklmIHRoZSBndWVzdCBhcnJpdmVzIGFuZCBkZWNpZGVzIHRvIGxlYXZlIGVhcmx5LCB0aGUgYWNjb21tb2RhdGlvbiBmZWVzIGZvciB0aGUgbmlnaHRzIG5vdCBzcGVudCAyNCBob3VycyBhZnRlciB0aGUgb2ZmaWNpYWwgY2FuY2VsbGF0aW9uIGFyZSBmdWxseSByZWZ1bmRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBleGFtcGxlOiB7XG4gICAgaWQ6IFwiYXBwLmV4YW1wbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeGFtcGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgZmxleGlibGVTZWNvbmRNb250aHM6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVTZWNvbmRNb250aHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGcmksIEp1blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlU2Vjb25kVGltZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVNlY29uZFRpbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBTVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGhpcmRNb250aHM6IHtcbiAgICBpZDogXCJhcHAuZmxleGlibGVUaGlyZE1vbnRoc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1vbiwgSnVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgZmxleGlibGVUaGlyZE1vbnRoc051bWJlck9uZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRoaXJkTW9udGhzTnVtYmVyT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMDhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBmbGV4aWJsZVRoaXJkTW9udGhzTnVtYmVyVHdvOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGhpcmRNb250aHNOdW1iZXJUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIwOVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGhpcmRNb250aHNOdW1iZXJUaHJlZToge1xuICAgIGlkOiBcImFwcC5mbGV4aWJsZVRoaXJkTW9udGhzTnVtYmVyVGhyZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGhpcmRNb250aHNUaW1lT25lOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGhpcmRNb250aHNUaW1lT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMzowMFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIGZsZXhpYmxlVGhpcmRNb250aHNUaW1lVHdvOiB7XG4gICAgaWQ6IFwiYXBwLmZsZXhpYmxlVGhpcmRNb250aHNUaW1lVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiMTEuMDBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJsZVwiLFxuICB9LFxuICBtb2RlcmF0ZVRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLm1vZGVyYXRlVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb2RlcmF0ZTogRnVsbCByZWZ1bmQgNSBkYXlzIHByaW9yIHRvIGFycml2YWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBkYXlzUHJpb3I6IHtcbiAgICBpZDogXCJhcHAuZGF5c1ByaW9yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiZGF5cyBQcmlvclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIG1vZGVyYXRlT25lOiB7XG4gICAgaWQ6IFwiYXBwLm1vZGVyYXRlT25lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkZvciBhIGZ1bGwgcmVmdW5kIG9mIGFjY29tbW9kYXRpb24gZmVlcywgY2FuY2VsbGF0aW9uIG11c3QgYmUgbWFkZSBmaXZlIGZ1bGwgZGF5cyBwcmlvciB0byBsaXN0aW5n4oCZcyBsb2NhbCBjaGVjayBpbiB0aW1lIChvciAzOjAwIFBNIGlmIG5vdCBzcGVjaWZpZWQpIG9uIHRoZSBkYXkgb2YgY2hlY2sgaW4uIEZvciBleGFtcGxlLCBpZiBjaGVjay1pbiBpcyBvbiBGcmlkYXksIGNhbmNlbCBieSB0aGUgcHJldmlvdXMgU3VuZGF5IGJlZm9yZSBjaGVjayBpbiB0aW1lLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIG1vZGVyYXRlVHdvOiB7XG4gICAgaWQ6IFwiYXBwLm1vZGVyYXRlVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIklmIHRoZSBndWVzdCBjYW5jZWxzIGxlc3MgdGhhbiA1IGRheXMgaW4gYWR2YW5jZSwgdGhlIGZpcnN0IG5pZ2h0IGlzIG5vbi1yZWZ1bmRhYmxlIGJ1dCA1MCUgb2YgdGhlIGFjY29tbW9kYXRpb24gZmVlcyBmb3IgcmVtYWluaW5nIG5pZ2h0cyB3aWxsIGJlIHJlZnVuZGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIG1vZGVyYXRlVGhyZWU6IHtcbiAgICBpZDogXCJhcHAubW9kZXJhdGVUaHJlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJZiB0aGUgZ3Vlc3QgYXJyaXZlcyBhbmQgZGVjaWRlcyB0byBsZWF2ZSBlYXJseSwgNTAlIG9mIHRoZSBhY2NvbW1vZGF0aW9uIGZlZXMgZm9yIHRoZSBuaWdodHMgbm90IHNwZW50IDI0IGhvdXJzIGFmdGVyIHRoZSBjYW5jZWxsYXRpb24gb2NjdXJzIGFyZSByZWZ1bmRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RlcmF0ZVwiLFxuICB9LFxuICBtb2RlcmF0ZU1vbnRoc051bWJlck9uZToge1xuICAgIGlkOiBcImFwcC5tb2RlcmF0ZU1vbnRoc051bWJlck9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIjEzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxleGlibGVcIixcbiAgfSxcbiAgbW9kZXJhdGVNb250aHNOdW1iZXJUd286IHtcbiAgICBpZDogXCJhcHAubW9kZXJhdGVNb250aHNOdW1iZXJUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxNlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZsZXhpYmxlXCIsXG4gIH0sXG4gIHN0cmljdFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLnN0cmljdFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyaWN0OiA1MCUgcmVmdW5kIHVwIHVudGlsIDEgd2VlayBwcmlvciB0byBhcnJpdmFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9kZXJhdGVcIixcbiAgfSxcbiAgc3RyaWN0T25lOiB7XG4gICAgaWQ6IFwiYXBwLnN0cmljdE9uZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJGb3IgYSA1MCUgcmVmdW5kIG9mIGFjY29tbW9kYXRpb24gZmVlcywgY2FuY2VsbGF0aW9uIG11c3QgYmUgbWFkZSBzZXZlbiBmdWxsIGRheXMgcHJpb3IgdG8gbGlzdGluZ+KAmXMgbG9jYWwgY2hlY2sgaW4gdGltZSAob3IgMzowMCBQTSBpZiBub3Qgc3BlY2lmaWVkKSBvbiB0aGUgZGF5IG9mIGNoZWNrIGluLCBvdGhlcndpc2Ugbm8gcmVmdW5kLiBGb3IgZXhhbXBsZSwgaWYgY2hlY2staW4gaXMgb24gRnJpZGF5LCBjYW5jZWwgYnkgRnJpZGF5IG9mIHRoZSBwcmV2aW91cyB3ZWVrIGJlZm9yZSBjaGVjayBpbiB0aW1lLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIHN0cmljdFR3bzoge1xuICAgIGlkOiBcImFwcC5zdHJpY3RUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiSWYgdGhlIGd1ZXN0IGNhbmNlbHMgbGVzcyB0aGFuIDcgZGF5cyBpbiBhZHZhbmNlLCB0aGUgcmVtYWluaW5nIG5pZ2h0cyBhcmUgbm90IHJlZnVuZGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIHN0cmljdFRocmVlOiB7XG4gICAgaWQ6IFwiYXBwLnN0cmljdFRocmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIklmIHRoZSBndWVzdCBhcnJpdmVzIGFuZCBkZWNpZGVzIHRvIGxlYXZlIGVhcmx5LCB0aGUgcmVtYWluaW5nIG5pZ2h0cyBhcmUgbm90IHJlZnVuZGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIHN0cmljdE1vbnRoc09uZToge1xuICAgIGlkOiBcImFwcC5zdHJpY3RNb250aHNPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxNVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIHN0cmljdE1vbnRoc1R3bzoge1xuICAgIGlkOiBcImFwcC5zdHJpY3RNb250aHNUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxOFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVyYXRlXCIsXG4gIH0sXG4gIHNwYWNlRnJlZU9uZToge1xuICAgIGlkOiBcImFwcC5zcGFjZUZyZWVPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGaW5kIG91dCBob3cgbXVjaCB5b3UgY291bGQgZWFybiBob3N0aW5nIHlvdXIgcGxhY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTcGFjZSBGcmVlXCIsXG4gIH0sXG4gIHNwYWNlRnJlZVR3bzoge1xuICAgIGlkOiBcImFwcC5zcGFjZUZyZWVUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUdXJuIHlvdXIgZXh0cmEgc3BhY2UgaW50byBleHRyYSBpbmNvbWUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3BhY2UgRnJlZVwiLFxuICB9LFxuICBmcmVlT3V0TW9yZToge1xuICAgIGlkOiBcImFwcC5mcmVlT3V0TW9yZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZpbmQgb3V0IG1vcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTcGFjZSBGcmVlXCIsXG4gIH0sXG4gIExpc3RQbGFjZVRpcE9uZToge1xuICAgIGlkOiBcImFwcC5MaXN0UGxhY2VUaXBPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbnRpcmUgcGxhY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0IFBsY2UgVGlwc1wiLFxuICB9LFxuICBMaXN0UGxhY2VUaXBzVHdvOiB7XG4gICAgaWQ6IFwiYXBwLkxpc3RQbGFjZVRpcHNUd29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHdWVzdHMgd2lsbCByZW50IHRoZSBlbnRpcmUgcGxhY2UuIEluY2x1ZGVzIGluLWxhdyB1bml0cy5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0IFBsY2UgVGlwc1wiLFxuICB9LFxuICBMaXN0UGxhY2VUaXAzOiB7XG4gICAgaWQ6IFwiYXBwLkxpc3RQbGFjZVRpcDNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb3JlbSBJcHN1bSBUZXh0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBQbGNlIFRpcHNcIixcbiAgfSxcbiAgTGlzdFBsYWNlVGlwczQ6IHtcbiAgICBpZDogXCJhcHAuTGlzdFBsYWNlVGlwczRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgUGxjZSBUaXBzXCIsXG4gIH0sXG4gIExpc3RQbGFjZVRpcDU6IHtcbiAgICBpZDogXCJhcHAuTGlzdFBsYWNlVGlwNVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBQbGNlIFRpcHNcIixcbiAgfSxcbiAgTGlzdFBsYWNlVGlwczY6IHtcbiAgICBpZDogXCJhcHAuTGlzdFBsYWNlVGlwczZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwic2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBQbGNlIFRpcHNcIixcbiAgfSxcbiAgcmVtb3ZlRmlsZToge1xuICAgIGlkOiBcImFwcC5yZW1vdmVGaWxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVtb3ZlIGZpbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZW1vdmUgZmlsZVwiLFxuICB9LFxuICBTYXl5b3Vyc3BhY2U6IHtcbiAgICBpZDogXCJhcHAuU2F5eW91cnNwYWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F5IHlvdXIgc3BhY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYXl5b3Vyc3BhY2VcIixcbiAgfSxcbiAgYWJvdXREZXNjUGF5bWVudDoge1xuICAgIGlkOiBcImFwcC5hYm91dERlc2NQYXltZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIlRlbGwgeW91ciBleHBlY3RhdGlvbnMgYW5kIHRoZSBudW1iZXIgb2YgZ3Vlc3RzIHlvdSBhcmUgYnJpbmdpbmcgd2l0aCB5b3Ugc28gdGhhdCB0aGUgaG9zdCBjYW4gbWFrZSB5b3VyIHRyaXAgYW4gb3JnYW5pemVkIGFuZCBhIHBlcmZlY3QgdHJpcCB5b3UgZXZlciBoYWQhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2F5eW91cnNwYWNlXCIsXG4gIH0sXG4gIGF2YWlsYWJsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmF2YWlsYWJsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXZhaWxhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdGluZyBTdGVwM1wiLFxuICB9LFxuICBibG9ja0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJsb2NrTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCbG9ja1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3RpbmcgU3RlcDNcIixcbiAgfSxcbiAgY292ZXJMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb3ZlckxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ292ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIFN0ZXAyXCIsXG4gIH0sXG4gIHdhcm5pbmdMYWJlbDoge1xuICAgIGlkOiBcImFwcC53YXJuaW5nTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXYXJuaW5nXCIsXG4gIH0sXG4gIGNvbXBsZXRlUmVxdWVzdDoge1xuICAgIGlkOiBcImFwcC5jb21wbGV0ZVJlcXVlc3RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXZSBjb3VsZG4ndCBjb21wbGV0ZSB5b3VyIHJlcXVlc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXYXJuaW5nXCIsXG4gIH0sXG4gIGVycm9yQ29kZVdhcm5pbmc6IHtcbiAgICBpZDogXCJhcHAuZXJyb3JDb2RlV2FybmluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVycm9yIGNvZGU6XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2FybmluZ1wiLFxuICB9LFxuICBoZWxwZnVsTGlua3M6IHtcbiAgICBpZDogXCJhcHAuaGVscGZ1bExpbmtzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGVyZSBhcmUgc29tZSBoZWxwZnVsIGxpbmtzIGluc3RlYWQ6XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2FybmluZ1wiLFxuICB9LFxuICBjaG9vc2VMYW5ndWFnZToge1xuICAgIGlkOiBcImFwcC5jaG9vc2VMYW5ndWFnZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBhIExhbmd1YWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hvb3NlIGEgTGFuZ3VhZ2VcIixcbiAgfSxcbiAgY2hvb3NlQUN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLmNob29zZUFDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBhIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hvb3NlIGEgQ3VycmVuY3lcIixcbiAgfSxcbiAgcGF5b3V0RmFpbHVyZToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRGYWlsdXJlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT29wcyEgV2UgYXJlIHNvcnJ5IVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVoLW9oLCB0aGUgcmVnaXN0cmF0aW9uIGhhcyBmYWlsZWQuXCIsXG4gIH0sXG4gIHBheW91dEZhaWx1cmVTdWJ0aXRsZToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRGYWlsdXJlU3VidGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiQ29ubmVjdGluZyB5b3VyIGJhbmsgYWNjb3VudCB3aXRoIHRoZSBwbGF0Zm9ybSB2ZXJpZmljYXRpb24gaXMgZmFpbGVkLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBsZWFzZSBhZGQgYSB2YWxpZCBTU04uXCIsXG4gIH0sXG4gIHBheW91dEZhaWx1cmVDb250ZW50OiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEZhaWx1cmVDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICAnUGxlYXNlIHRyeSBhZ2FpbiB0byBhZGQgeW91ciBiYW5rIGFjY291bnQgd2l0aCB0aGUgcGxhdGZvcm0gYnkgY2xpY2t0aW5nIHRoZSBcIlJldHJ5XCIgb3B0aW9uIG9yIEFkZCBhIG5ldyBwYXlvdXQgYWNjb3VudCBieSBjbGlja2luZyB0aGUgXCJBZGQgUGF5b3V0IE1ldGhvZFwiLicsXG4gICAgZGVzY3JpcHRpb246IFwiUGxlYXNlIGFkZCBhIHZhbGlkIFNTTi5cIixcbiAgfSxcbiAgcGF5bWVudENhcmROdW1iZXI6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENhcmROdW1iZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYXJkIE51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNhcmROdW1iZXJcIixcbiAgfSxcbiAgcGF5b3V0VHlwZToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRUeXBlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWNjb3VudCBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwicGF5b3V0IEFjY291bnQgVHlwZVwiLFxuICB9LFxuICBwYXlvdXRJbmRpdmlkdWFsOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dEluZGl2aWR1YWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbmRpdmlkdWFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5kaXZpZHVhbCB0ZXh0XCIsXG4gIH0sXG4gIHBheW91dENvbXBhbnk6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0Q29tcGFueVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbXBhbnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wYW55IHRleHRcIixcbiAgfSxcbiAgcGF5b3V0Q29tcGFueU5hbWU6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0Q29tcGFueU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb21wYW55IE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wYW55IHRleHRcIixcbiAgfSxcbiAgcGF5b3V0U3RyaXBlSW5mbzoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRTdHJpcGVJbmZvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICAnV2UgdXNlIFN0cmlwZSB0byBtYWtlIHN1cmUgeW91IGdldCBwYWlkIG9uIHRpbWUgYW5kIHRvIGtlZXAgeW91ciBwZXJzb25hbCBiYW5rIGFuZCBkZXRhaWxzIHNlY3VyZS4gQ2xpY2sgXCJGaW5pc2hcIiB0byBzZXQgdXAgeW91ciBwYXltZW50cyBvbiBTdHJpcGUuJyxcbiAgICBkZXNjcmlwdGlvbjogXCJTdHJpcGUgdGV4dCBpbmZvXCIsXG4gIH0sXG4gIG5vdFJlYWR5OiB7XG4gICAgaWQ6IFwiYXBwLm5vdFJlYWR5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm90IFJlYWR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICBwYXlvdXRWZXJpZnk6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0VmVyaWZ5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVmVyaWZ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICBwYXlvdXRSZXRyeToge1xuICAgIGlkOiBcImFwcC5wYXlvdXRSZXRyeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldHJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IE1ldGhvZFwiLFxuICB9LFxuICBwYXlvdXRWZXJpZnlTdHJpcGVJbmZvOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dFZlcmlmeVN0cmlwZUluZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiV2UgdXNlIFN0cmlwZSB0byBtYWtlIHN1cmUgeW91IGdldCBwYWlkIG9uIHRpbWUgc2FmZSBhbmQgc2VjdXJlLiBJdCByZXF1aXJlcyBhZGRpdGlvbmFsIHZlcmlmaWNhdGlvbiB0byBjb25uZWN0IHlvdXIgYmFuayBhY2NvdW50IHdpdGggdGhlIHBsYXRmb3JtLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dCBNZXRob2RcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25Jc0NvbXBsZXRlZDoge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbklzQ29tcGxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzZXJ2YXRpb24gaXMgY29tcGxldGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVmlldyBtZXNzYWdlIGFjdGlvblwiLFxuICB9LFxuICByZXNlcnZhdGlvbklzQ29tcGxldGVkRGVzY3JpcHRpb246IHtcbiAgICBpZDogXCJhcHAucmVzZXJ2YXRpb25Jc0NvbXBsZXRlZERlc2NyaXB0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzZXJ2YXRpb24gb2YgeW91ciBsaXN0aW5nIGlzIGNvbXBsZXRlZC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IG1lc3NhZ2UgYWN0aW9uXCIsXG4gIH0sXG4gIGF2ZXJhZ2VQcmljZVBlck5pZ2h0OiB7XG4gICAgaWQ6IFwiYXBwLmF2ZXJhZ2VQcmljZVBlck5pZ2h0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXZlcmFnZSByYXRlIHBlciBuaWdodCBmb3IgeW91ciB0cmlwLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvb2x0aXBcIixcbiAgfSxcbiAgZXhwb3J0Q2FsZW5kYXI6IHtcbiAgICBpZDogXCJhcHAuZXhwb3J0Q2FsZW5kYXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFeHBvcnQgQ2FsZW5kYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJleHBvcnRDYWxlbmRhclwiLFxuICB9LFxuICBleHBvcnRDYWxlbmRhckRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmV4cG9ydENhbGVuZGFyRGVzY3JpcHRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb3B5IGFuZCBwYXN0ZSB0aGUgbGluayBpbnRvIG90aGVyIElDQUwgYXBwbGljYXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZXhwb3J0Q2FsZW5kYXJcIixcbiAgfSxcbiAgaW1wb3J0Q2FsZW5kYXI6IHtcbiAgICBpZDogXCJhcHAuaW1wb3J0Q2FsZW5kYXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbXBvcnQgYSBOZXcgQ2FsZW5kYXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJpbXBvcnRDYWxlbmRhclwiLFxuICB9LFxuICBpbXBvcnRDYWxlbmRhckRlc2M6IHtcbiAgICBpZDogXCJhcHAuaW1wb3J0Q2FsZW5kYXJEZXNjXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6XG4gICAgICBcIkltcG9ydCBvdGhlciBjYWxlbmRhcnMgeW91IHVzZSBhbmQgd2XigJlsbCBhdXRvbWF0aWNhbGx5IGtlZXAgdGhpcyBsaXN0aW5n4oCZcyBhdmFpbGFiaWxpdHkgdXAtdG8tZGF0ZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJpbXBvcnRDYWxlbmRhclwiLFxuICB9LFxuICBpbXBvcnRDYWxlbmRhckRlc2MxOiB7XG4gICAgaWQ6IFwiYXBwLmltcG9ydENhbGVuZGFyRGVzYzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYWxlbmRhciBBZGRyZXNzIChVUkwpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW1wb3J0Q2FsZW5kYXJcIixcbiAgfSxcbiAgaW1wb3J0Q2FsZW5kYXJEZXNjMjoge1xuICAgIGlkOiBcImFwcC5pbXBvcnRDYWxlbmRhckRlc2MyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2FsZW5kYXIgQWRkcmVzcyAoVVJMKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImltcG9ydENhbGVuZGFyXCIsXG4gIH0sXG4gIGltcG9ydENhbGVuZGFyQnRuOiB7XG4gICAgaWQ6IFwiYXBwLmltcG9ydENhbGVuZGFyQnRuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW1wb3J0IENhbGVuZGFyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaW1wb3J0Q2FsZW5kYXJcIixcbiAgfSxcbiAgYm9va2VkOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvb2tlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhbGVuZGFyXCIsXG4gIH0sXG4gIG5vdEF2YWlsYWJsZToge1xuICAgIGlkOiBcImFwcC5ub3RBdmFpbGFibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb3QgQXZhaWxhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FsZW5kYXJcIixcbiAgfSxcbiAgZGlzY291bnRTdGF5czoge1xuICAgIGlkOiBcImFwcC5kaXNjb3VudFN0YXlzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzY291bnQgZm9yIGxvbmdlciBzdGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGlzY291bnRcIixcbiAgfSxcbiAgeWVzVGV4dDoge1xuICAgIGlkOiBcImFwcC55ZXNUZXh0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwieWVzXCIsXG4gIH0sXG4gIG5vVGV4dDoge1xuICAgIGlkOiBcImFwcC5ub1RleHRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJOb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vXCIsXG4gIH0sXG4gIHZlcmlmaWNhdGlvbkRlc2M6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpY2F0aW9uRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklmIGl0IGRvZXNuJ3QgYXJyaXZlLCBjbGljayBjYW5jZWwgYW5kIHRyeSBhZ2Fpbi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWZXJpZmljYXRpb25cIixcbiAgfSxcbiAgY29uZmlybWVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybWVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb25maXJtZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25maXJtZWRcIixcbiAgfSxcbiAgY29uZmlybUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvbmZpcm1MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25maXJtXCIsXG4gIH0sXG4gIHVwbG9hZFNpemVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXBsb2FkU2l6ZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1heGltdW0gdXBsb2FkIHNpemU6XCIsXG4gICAgZGVzY3JpcHRpb246IFwidXBsb2FkU2l6ZWRMYWJlbFwiLFxuICB9LFxuICByZWNlcGl0SW5mb0Rlc2M6IHtcbiAgICBpZDogXCJhcHAucmVjZXBpdEluZm9EZXNjXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXZlcmFnZSByYXRlIHBlciBuaWdodCBmb3IgeW91ciB0cmlwLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlY2VpcHQgSW5mb1wiLFxuICB9LFxuICBzaG93TWFwOiB7XG4gICAgaWQ6IFwiYXBwLnNob3dNYXBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaG93IE1hcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInNob3dNYXBcIixcbiAgfSxcbiAgc2hhcmVNb2RhbDoge1xuICAgIGlkOiBcImFwcC5zaGFyZU1vZGFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTW9kYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzaGFyZU1vZGFsXCIsXG4gIH0sXG4gIHNoYXJlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc2hhcmVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNoYXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwic2hhcmVMYWJlbFwiLFxuICB9LFxuICBlbWFpbExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmVtYWlsTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVtYWlsTGFiZWxcIixcbiAgfSxcbiAgaW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC5pbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJpbkxhYmVsXCIsXG4gIH0sXG4gIHNvY2lhbFNoYXJlRGVzYzoge1xuICAgIGlkOiBcImFwcC5zb2NpYWxTaGFyZURlc2NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGVjayBvdXQgdGhpcyBhd2Vzb21lIGxpc3Rpbmcgb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJzb2NpYWxTaGFyZURlc2NcIixcbiAgfSxcbiAgdHJpcENvbXBsZXRlZDoge1xuICAgIGlkOiBcImFwcC50cmlwQ29tcGxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJpcCBpcyBjb21wbGV0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ0cmlwQ29tcGxldGVkXCIsXG4gIH0sXG4gIGNvdW50aW5nU2VjdGlvbk51bWJlck9uZToge1xuICAgIGlkOiBcImFwcC5jb3VudGluZ1NlY3Rpb25OdW1iZXJPbmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIyLjlNXCIsXG4gICAgZGVzY3JpcHRpb246IFwiMi45TVwiLFxuICB9LFxuICBjb3VudGluZ1NlY3Rpb25OdW1iZXJUd286IHtcbiAgICBpZDogXCJhcHAuY291bnRpbmdTZWN0aW9uTnVtYmVyVHdvXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiODAwS1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIjgwMEtcIixcbiAgfSxcbiAgY291bnRpbmdTZWN0aW9uTnVtYmVyVGhyZWU6IHtcbiAgICBpZDogXCJhcHAuY291bnRpbmdTZWN0aW9uTnVtYmVyVGhyZWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIxNEtcIixcbiAgICBkZXNjcmlwdGlvbjogXCIxNEtcIixcbiAgfSxcbiAgcmVhZHlUb0Vhcm46IHtcbiAgICBpZDogXCJhcHAucmVhZHlUb0Vhcm5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFkeSB0byBlYXJuP1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlYWR5IHRvIGVhcm4/XCIsXG4gIH0sXG4gIHJlYWR5VG9FYXJuRGVzYzoge1xuICAgIGlkOiBcImFwcC5yZWFkeVRvRWFybkRlc2NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJHZXQgc3RhcnRlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlYWR5IHRvIGVhcm4/XCIsXG4gIH0sXG4gIHRheFJhdGU6IHtcbiAgICBpZDogXCJhcHAudGF4UmF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlRheCBSYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGF4IFJhdGVcIixcbiAgfSxcbiAgdGF4UmF0ZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnRheFJhdGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJQbGVhc2UgYWRkIGluIHRoZSBhcHByb3ByaWF0ZSB0YXggcmF0ZSB0byBjb3ZlciBhbnkgbG9jYWwgYW5kIHN0YXRlIHRheGVzIHlvdSBtYXkgYmUgcmVzcG9uc2libGUgZm9yLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRheCBSYXRlIExhYmVsXCIsXG4gIH0sXG4gIHRheFJhdGVJbnZhbGlkRXJyb3I6IHtcbiAgICBpZDogXCJhcHAudGF4UmF0ZUludmFsaWRFcnJvclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJJbnZhbGlkIHRheCByYXRlLiBUaGUgdGF4IHJhdGUgbXVzdCBiZSBiZXR3ZWVuIDElIGFuZCA5OSUuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW52YWxpZCBkaXNjb3VudFwiLFxuICB9LFxuICBlbWFpbEFkZHJlc3NMYWJlbDoge1xuICAgIGlkOiBcImFwcC5lbWFpbEFkZHJlc3NMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIGFkZHJlc3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCBhZGRyZXNzXCIsXG4gIH0sXG4gIGhvdXNlUnVsZXNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ob3VzZVJ1bGVzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCIncyBIb3VzZSBSdWxlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIidzIEhvdXNlIFJ1bGVzXCIsXG4gIH0sXG4gIGNvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb250ZW50TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250ZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGVudFwiLFxuICB9LFxuICBDaG9vc2VGb290ZXJDYXRlZ29yeToge1xuICAgIGlkOiBcImFwcC5DaG9vc2VGb290ZXJDYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSBGb290ZXIgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaG9vc2UgRm9vdGVyIENhdGVnb3J5XCIsXG4gIH0sXG4gIG1ldGFUaXRsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLm1ldGFUaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWV0YSBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1ldGEgVGl0bGVcIixcbiAgfSxcbiAgbWV0YURlc2NyaXB0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubWV0YURlc2NyaXB0aW9uTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRhIERlc2NyaXB0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWV0YSBEZXNjcmlwdGlvblwiLFxuICB9LFxuICBwYWdlVGl0bGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYWdlVGl0bGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIFRpdGxlXCIsXG4gIH0sXG4gIHBhZ2VVcmw6IHtcbiAgICBpZDogXCJhcHAucGFnZVVybFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhZ2UgVVJMXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZSBVUkxcIixcbiAgfSxcbiAgcGFnZVVybEV4YW1wbGU6IHtcbiAgICBpZDogXCJhcHAucGFnZVVybEV4YW1wbGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYWdlIFVSTCAgZWcuKHBhZ2VVUkwpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFnZSBVUkwgIGVnLihwYWdlVVJMKVwiLFxuICB9LFxuICBmb290ZXJDYXRlZ29yeUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmZvb3RlckNhdGVnb3J5TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGb290ZXIgQ2F0ZWdvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGb290ZXIgQ2F0ZWdvcnlcIixcbiAgfSxcbiAgcGFnZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnBhZ2VMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIi9wYWdlL1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIi9wYWdlL1wiLFxuICB9LFxuICBsb2FkaW5nTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubG9hZGluZ0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9hZGluZy4uLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvYWRpbmcuLi5cIixcbiAgfSxcbiAgaW1hZ2VMYWJlbDoge1xuICAgIGlkOiBcImFwcC5pbWFnZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW1hZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbWFnZVwiLFxuICB9LFxuICBsb2NhdGlvbkFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAubG9jYXRpb25BZGRyZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9jYXRpb24gQWRkcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvY2F0aW9uIEFkZHJlc3NcIixcbiAgfSxcbiAgc3ViVGl0bGU6IHtcbiAgICBpZDogXCJhcHAuc3ViVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTdWIgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdWIgVGl0bGVcIixcbiAgfSxcbiAgdG90YWxVc2Vyczoge1xuICAgIGlkOiBcImFwcC50b3RhbFVzZXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG90YWwgVXNlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBVc2Vyc1wiLFxuICB9LFxuICBsYXN0MjRIb3Vyczoge1xuICAgIGlkOiBcImFwcC5sYXN0MjRIb3Vyc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgMjQgaG91cnMgVXNlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYXN0IDI0IGhvdXJzIFVzZXJzXCIsXG4gIH0sXG4gIGxhc3QzMERheXM6IHtcbiAgICBpZDogXCJhcHAubGFzdDMwRGF5c1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgMzAgZGF5cyBVc2Vyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgMzAgZGF5cyBVc2Vyc1wiLFxuICB9LFxuICBsYXN0MzBEYXlzTGlzdGluZzoge1xuICAgIGlkOiBcImFwcC5sYXN0MzBEYXlzTGlzdGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgMzAgZGF5cyBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgMzAgZGF5cyBMaXN0aW5nc1wiLFxuICB9LFxuICBsYXN0MjRIb3Vyc0xpc3Rpbmc6IHtcbiAgICBpZDogXCJhcHAubGFzdDI0SG91cnNMaXN0aW5nXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFzdCAyNCBob3VycyBMaXN0aW5nc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgMjQgaG91cnMgTGlzdGluZ3NcIixcbiAgfSxcbiAgdG90YWxMaXN0aW5nczoge1xuICAgIGlkOiBcImFwcC50b3RhbExpc3RpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG90YWwgTGlzdGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBMaXN0aW5nc1wiLFxuICB9LFxuICB5ZWFyMjAyMDoge1xuICAgIGlkOiBcImFwcC55ZWFyMjAyMFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlllYXIgLSAyMDIwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWWVhciAtIDIwMjBcIixcbiAgfSxcbiAgdG90YWxSZXNlcnZhdGlvbjoge1xuICAgIGlkOiBcImFwcC50b3RhbFJlc2VydmF0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG90YWwgUmVzZXJ2YXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVG90YWwgUmVzZXJ2YXRpb25zXCIsXG4gIH0sXG4gIGxhc3QyNEhvdXJzUmVzZXJ2YXRpb246IHtcbiAgICBpZDogXCJhcHAubGFzdDI0SG91cnNSZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgMjQgaG91cnMgUmVzZXJ2YXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGFzdCAyNCBob3VycyBSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgbGFzdDMwRGF5c1Jlc2VydmF0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLmxhc3QzMERheXNSZXNlcnZhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxhc3QgMzAgZGF5cyAgUmVzZXJ2YXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGFzdCAzMCBkYXlzICBSZXNlcnZhdGlvbnNcIixcbiAgfSxcbiAgY29weVJpZ2h0TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY29weVJpZ2h0TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb3B5cmlnaHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5cmlnaHRcIixcbiAgfSxcbiAgY29weVJpZ2h0TGFiZWxEZXNjOiB7XG4gICAgaWQ6IFwiYXBwLmNvcHlSaWdodExhYmVsRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFsbCByaWdodHMgcmVzZXJ2ZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsIHJpZ2h0cyByZXNlcnZlZC5cIixcbiAgfSxcbiAgbG9nSW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC5sb2dJbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nIGluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9nIGluXCIsXG4gIH0sXG4gIGFkbWlubG9nSW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC5hZG1pbmxvZ0luTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZG1pbiBMb2dpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkbWluIExvZ2luXCIsXG4gIH0sXG4gIGxpc3RJZDoge1xuICAgIGlkOiBcImFwcC5saXN0SWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0IElEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBJRFwiLFxuICB9LFxuICByZXZpZXdDb250ZW50TGFiZWw6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3Q29udGVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3IENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXcgQ29udGVudFwiLFxuICB9LFxuICBnb1RvTWFpblNpdGU6IHtcbiAgICBpZDogXCJhcHAuZ29Ub01haW5TaXRlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR28gVG8gTWFpbiBTaXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR28gVG8gTWFpbiBTaXRlXCIsXG4gIH0sXG4gIGFkZE5ld0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmFkZE5ld0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIE5ld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBOZXdcIixcbiAgfSxcbiAgZWRpdExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFZGl0XCIsXG4gIH0sXG4gIGFkbWluUm9sZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluUm9sZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRtaW4gUm9sZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkbWluIFJvbGVcIixcbiAgfSxcbiAgYWRtaW5Vc2VyTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5Vc2VyTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZG1pbiBVc2VyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWRtaW4gVXNlclwiLFxuICB9LFxuICBhZGRQYWdlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRkUGFnZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRkIFBhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGQgUGFnZVwiLFxuICB9LFxuICBlbmFibGVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZW5hYmxlZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW5hYmxlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVuYWJsZWRcIixcbiAgfSxcbiAgZGlzYWJsZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5kaXNhYmxlZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzYWJsZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaXNhYmxlZFwiLFxuICB9LFxuICBlbmFibGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5lbmFibGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVuYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVuYWJsZVwiLFxuICB9LFxuICBkaXNhYmxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuZGlzYWJsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2FibGVcIixcbiAgfSxcbiAgYWRkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGRcIixcbiAgfSxcbiAgc2V0QmFzZUN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLnNldEJhc2VDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCBhcyBiYXNlIGN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0IGFzIGJhc2UgY3VycmVuY3lcIixcbiAgfSxcbiAgZGF0ZU9mQmlydGhMYWJlbDoge1xuICAgIGlkOiBcImFwcC5kYXRlT2ZCaXJ0aExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGF0ZSBPZiBCaXJ0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRhdGUgT2YgQmlydGhcIixcbiAgfSxcbiAgaW5mb0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmluZm9MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkluZm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbmZvXCIsXG4gIH0sXG4gIHRpdGxlQWRtaW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC50aXRsZUFkbWluTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlXCIsXG4gIH0sXG4gIGJhbm5lckltYWdlOiB7XG4gICAgaWQ6IFwiYXBwLmJhbm5lckltYWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFubmVyIEltYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFubmVyIEltYWdlXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uQWRtaW5MYWJlbDoge1xuICAgIGlkOiBcImFwcC5kZXNjcmlwdGlvbkFkbWluTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGJ1dHRvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJ1dHRvbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQnV0dG9uIExhYmVsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnV0dG9uIExhYmVsXCIsXG4gIH0sXG4gIGJvdHRvbVRleHQ6IHtcbiAgICBpZDogXCJhcHAuYm90dG9tVGV4dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJvdHRvbSBUZXh0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm90dG9tIFRleHRcIixcbiAgfSxcbiAgSWNvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLkljb25MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkljb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJY29uXCIsXG4gIH0sXG4gIG1hbmFnZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlXCIsXG4gIH0sXG4gIGxpc3RTZXR0aW5nczoge1xuICAgIGlkOiBcImFwcC5saXN0U2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0IFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBTZXR0aW5nc1wiLFxuICB9LFxuICByZXNlcnZhdGlvbklkOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uSWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlc2VydmF0aW9uIElEXCIsXG4gIH0sXG4gIGFkbWluTGlzdFRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmFkbWluTGlzdFRpdGxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdCBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgVGl0bGVcIixcbiAgfSxcbiAgY29kZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvZGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb2RlXCIsXG4gIH0sXG4gIGhvc3ROYW1lTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG9zdE5hbWVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgTmFtZVwiLFxuICB9LFxuICBwYXlvdXRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW91dCBBbW91bnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXQgQW1vdW50XCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uU3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLnJlc2VydmF0aW9uU3RhdHVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzZXJ2YXRpb24gU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzZXJ2YXRpb24gU3RhdHVzXCIsXG4gIH0sXG4gIHBheW91dFN0YXR1czoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRTdGF0dXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXQgU3RhdHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0IFN0YXR1c1wiLFxuICB9LFxuICBob2xkUGF5b3V0OiB7XG4gICAgaWQ6IFwiYXBwLmhvbGRQYXlvdXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb2xkIFBheW91dFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvbGQgUGF5b3V0XCIsXG4gIH0sXG4gIGxpdmU6IHtcbiAgICBpZDogXCJhcHAubGl2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpdmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXZlXCIsXG4gIH0sXG4gIHNhbmRib3g6IHtcbiAgICBpZDogXCJhcHAuc2FuZGJveFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNhbmRib3hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTYW5kYm94XCIsXG4gIH0sXG4gIGFwaVVzZXJJZDoge1xuICAgIGlkOiBcImFwcC5hcGlVc2VySWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBUEkgVXNlciBJZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFQSSBVc2VyIElkXCIsXG4gIH0sXG4gIGFwaVBhc3N3b3JkOiB7XG4gICAgaWQ6IFwiYXBwLmFwaVBhc3N3b3JkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQVBJIFBhc3N3b3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQVBJIFBhc3N3b3JkXCIsXG4gIH0sXG4gIGFwaVNlY3JldDoge1xuICAgIGlkOiBcImFwcC5hcGlTZWNyZXRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBUEkgU2VjcmV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQVBJIFNlY3JldFwiLFxuICB9LFxuICBhZGRJZDoge1xuICAgIGlkOiBcImFwcC5hZGRJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcCBJZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcCBJZFwiLFxuICB9LFxuICBwYXltZW50TW9kZToge1xuICAgIGlkOiBcImFwcC5wYXltZW50TW9kZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnQgTW9kZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgTW9kZVwiLFxuICB9LFxuICBwYXltZW50U3RhdHVzOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRTdGF0dXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXltZW50IFN0YXR1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgU3RhdHVzXCIsXG4gIH0sXG4gIHBheW1lbnROYW1lOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnROYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5bWVudCBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5bWVudCBOYW1lXCIsXG4gIH0sXG4gIGFkZFBvcHVsYXJMb2NhdGlvbjoge1xuICAgIGlkOiBcImFwcC5hZGRQb3B1bGFyTG9jYXRpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGQgUG9wdWxhciBMb2NhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBQb3B1bGFyIExvY2F0aW9uXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWN0dXJlOiB7XG4gICAgaWQ6IFwiYXBwLnByb2ZpbGVQaWN0dXJlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvZmlsZSBQaWN0dXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvZmlsZSBQaWN0dXJlXCIsXG4gIH0sXG4gIGxhbmd1YWdlOiB7XG4gICAgaWQ6IFwiYXBwLmxhbmd1YWdlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGFuZ3VhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMYW5ndWFnZVwiLFxuICB9LFxuICBiaW9JbmZvOiB7XG4gICAgaWQ6IFwiYXBwLmJpb0luZm9cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCaW8gSW5mb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpbyBJbmZvXCIsXG4gIH0sXG4gIHVzZXJEZWxldGVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXNlckRlbGV0ZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgRGVsZXRlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgRGVsZXRlZFwiLFxuICB9LFxuICBwYXlvdXRSZWZ1bmQ6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0UmVmdW5kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5b3V0L1JlZnVuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW91dC9SZWZ1bmRcIixcbiAgfSxcbiAgbm9QYXlvdXRNZXRob2Q6IHtcbiAgICBpZDogXCJhcHAubm9QYXlvdXRNZXRob2RcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJObyBQYXlvdXQgbWV0aG9kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gUGF5b3V0IG1ldGhvZFwiLFxuICB9LFxuICBjbG9zZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jbG9zZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNsb3NlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3NlZFwiLFxuICB9LFxuICBwcm9jZXNzaW5nTGFiZWw6IHtcbiAgICBpZDogXCJhcHAucHJvY2Vzc2luZ0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvY2Vzc2luZy4uLlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2Nlc3NpbmcuLi5cIixcbiAgfSxcbiAgY29tcGxldGVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY29tcGxldGVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb21wbGV0ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZWRcIixcbiAgfSxcbiAgdHJhbnNhY3Rpb25Ob3Rmb3VuZDoge1xuICAgIGlkOiBcImFwcC50cmFuc2FjdGlvbk5vdGZvdW5kXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gbm90IGZvdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhbnNhY3Rpb24gbm90IGZvdW5kXCIsXG4gIH0sXG4gIG5vdEVsaWdpYmxlOiB7XG4gICAgaWQ6IFwiYXBwLm5vdEVsaWdpYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm90IEVsaWdpYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm90IEVsaWdpYmxlXCIsXG4gIH0sXG4gIHByb2NlZWRSZWZ1bmQ6IHtcbiAgICBpZDogXCJhcHAucHJvY2VlZFJlZnVuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2NlZWQgUmVmdW5kXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvY2VlZCBSZWZ1bmRcIixcbiAgfSxcbiAgdmlld0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnZpZXdMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZpZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3XCIsXG4gIH0sXG4gIGV4cG9ydERhdGFJbnRvQ1NWOiB7XG4gICAgaWQ6IFwiYXBwLmV4cG9ydERhdGFJbnRvQ1NWXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXhwb3J0IERhdGEgaW50byBDU1ZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBvcnQgRGF0YSBpbnRvIENTVlwiLFxuICB9LFxuICByZWNlaXZlckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnJlY2VpdmVyTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWNlaXZlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlY2VpdmVyXCIsXG4gIH0sXG4gIG1pbmltdW1QcmljZToge1xuICAgIGlkOiBcImFwcC5taW5pbXVtUHJpY2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaW5pbXVtIFByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWluaW11bSBQcmljZVwiLFxuICB9LFxuICBtYXhpbXVtUHJpY2U6IHtcbiAgICBpZDogXCJhcHAubWF4aW11bVByaWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSBQcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1heGltdW0gUHJpY2VcIixcbiAgfSxcbiAgcHJpY2VSYW5nZUN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLnByaWNlUmFuZ2VDdXJyZW5jeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByaWNlIFJhbmdlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpY2UgUmFuZ2UgQ3VycmVuY3lcIixcbiAgfSxcbiAgZ3Vlc3RGZWVUeXBlOiB7XG4gICAgaWQ6IFwiYXBwLmd1ZXN0RmVlVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IEZlZSBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgRmVlIFR5cGVcIixcbiAgfSxcbiAgZml4ZWRQcmljZToge1xuICAgIGlkOiBcImFwcC5maXhlZFByaWNlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRml4ZWQgUHJpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaXhlZCBQcmljZVwiLFxuICB9LFxuICBwZXJjZW50YWdlOiB7XG4gICAgaWQ6IFwiYXBwLnBlcmNlbnRhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQZXJjZW50YWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGVyY2VudGFnZVwiLFxuICB9LFxuICBndWVzdFNlcnZpY2VGZWU6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RTZXJ2aWNlRmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgU2VydmljZSBGZWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHdWVzdCBTZXJ2aWNlIEZlZVwiLFxuICB9LFxuICBndWVzdFNlcnZpY2VGZWVQbGFjZWhvbGQ6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RTZXJ2aWNlRmVlUGxhY2Vob2xkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW1vdW50L1BlcmNlbnRhZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbW91bnQvUGVyY2VudGFnZVwiLFxuICB9LFxuICBob3N0RmVlVHlwZToge1xuICAgIGlkOiBcImFwcC5ob3N0RmVlVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgRmVlIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEZlZSBUeXBlXCIsXG4gIH0sXG4gIGhvc3RTZXJ2aWNlRmVlVHlwZToge1xuICAgIGlkOiBcImFwcC5ob3N0U2VydmljZUZlZVR5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0IFNlcnZpY2UgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBTZXJ2aWNlIEZlZVwiLFxuICB9LFxuICBzdWJtaXRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zdWJtaXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1Ym1pdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1Ym1pdFwiLFxuICB9LFxuXG4gIGFkZDoge1xuICAgIGlkOiBcImFwcC5hZGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBZGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZGQgQnV0dG9uXCIsXG4gIH0sXG4gIHVwZGF0ZToge1xuICAgIGlkOiBcImFwcC51cGRhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVcGRhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGRhdGUgQnV0dG9uXCIsXG4gIH0sXG4gIGFkZEl0ZW1OZXc6IHtcbiAgICBpZDogXCJhcHAuYWRkSXRlbU5ld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0ZW0gbmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkl0ZW0gbmFtZVwiLFxuICB9LFxuICBhZGROZXdEZXNjcmlwdGlvbjoge1xuICAgIGlkOiBcImFwcC5hZGROZXdEZXNjcmlwdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0ZW0gZGVzY3JpcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJJdGVtIGRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGFkZE90aGVySXRlbToge1xuICAgIGlkOiBcImFwcC5hZGRPdGhlckl0ZW1cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJPdGhlciBJdGVtIG5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPdGhlciBJdGVtIG5hbWVcIixcbiAgfSxcbiAgc3RhcnRWYWx1ZToge1xuICAgIGlkOiBcImFwcC5zdGFydFZhbHVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhcnQgdmFsdWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGFydCB2YWx1ZVwiLFxuICB9LFxuICBlbmRWYWx1ZToge1xuICAgIGlkOiBcImFwcC5lbmRWYWx1ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVuZCB2YWx1ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBlbmQgdmFsdWUgaGVyZSAuLi4uXCIsXG4gIH0sXG4gIGVuYWJsZToge1xuICAgIGlkOiBcImFwcC5lbmFibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbmFibGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbmFibGVcIixcbiAgfSxcbiAgZGlzYWJsZToge1xuICAgIGlkOiBcImFwcC5kaXNhYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGlzYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2FibGVcIixcbiAgfSxcbiAgaXRlbU5hbWVJc1JlcXVpcmVkOiB7XG4gICAgaWQ6IFwiYXBwLml0ZW1OYW1lSXNSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkl0ZW0gbmFtZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIml0ZW1OYW1lSXNSZXF1aXJlZFwiLFxuICB9LFxuICBvdGhlckl0ZW1OYW1lSXNSZXF1aXJlZDoge1xuICAgIGlkOiBcImFwcC5vdGhlckl0ZW1OYW1lSXNSZXF1aXJlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk90aGVyIGl0ZW0gbmFtZSBpcyByZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm90aGVySXRlbU5hbWVJc1JlcXVpcmVkXCIsXG4gIH0sXG4gIHN0YXJ0VmFsdWVJc0ludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuc3RhcnRWYWx1ZUlzSW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgU3RhcnQgdmFsdWUsIHByb3ZpZGUgYSB2YWxpZCBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzdGFydFZhbHVlSXNJbnZhbGlkXCIsXG4gIH0sXG4gIGVuZFZhbHVlSXNJbnZhbGlkOiB7XG4gICAgaWQ6IFwiYXBwLmVuZFZhbHVlSXNJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBFbmQgdmFsdWUsIHByb3ZpZGUgYSB2YWxpZCBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJlbmRWYWx1ZUlzSW52YWxpZFwiLFxuICB9LFxuICBlbmRWYWx1ZUdyZWF0ZXI6IHtcbiAgICBpZDogXCJhcHAuZW5kVmFsdWVHcmVhdGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRW5kIHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIFN0YXJ0IHZhbHVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZW5kVmFsdWVHcmVhdGVyXCIsXG4gIH0sXG4gIHNvbWV0aGluZ1dlbnRXcm9uZzoge1xuICAgIGlkOiBcImFwcC5zb21ldGhpbmdXZW50V3JvbmdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXcm9uZyB3ZW50IHdyb25nXCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uRW1wdHk6IHtcbiAgICBpZDogXCJhcHAuZGVzY3JpcHRpb25FbXB0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtcHR5IHNwYWNlcyBhcmUgbm90IGFsbG93ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXcm9uZyB3ZW50IHdyb25nXCIsXG4gIH0sXG4gIGJsYW5rU3BhY2U6IHtcbiAgICBpZDogXCJhcHAuYmxhbmtTcGFjZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklucHV0IGlzIEJsYW5rXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYmxhbmtTcGFjZVwiLFxuICB9LFxuICBleGNlZWRMaW1pdDoge1xuICAgIGlkOiBcImFwcC5leGNlZWRMaW1pdFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpbWl0IEV4Y2VlZGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZXhjZWVkTGltaXRcIixcbiAgfSxcbiAgbG9nb0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ29MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvZ29cIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dvXCIsXG4gIH0sXG4gIEhvbWVsb2dvTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuSG9tZWxvZ29MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgUGFnZSBMb2dvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZSBQYWdlIExvZ29cIixcbiAgfSxcbiAgRW1haWxsb2dvTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuRW1haWxsb2dvTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbCBMb2dvXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW1haWwgTG9nb1wiLFxuICB9LFxuICBsb2dvSGVpZ2h0TGFiZWw6IHtcbiAgICBpZDogXCJhcHAubG9nb0hlaWdodExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTG9nbyBIZWlnaHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dvIEhlaWdodFwiLFxuICB9LFxuICBsb2dvV2lkdGhMYWJlbDoge1xuICAgIGlkOiBcImFwcC5sb2dvV2lkdGhMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxvZ28gV2lkdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb2dvIFdpZHRoXCIsXG4gIH0sXG4gIGhvbWVsb2dvSGVpZ2h0OiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVsb2dvSGVpZ2h0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZSBMb2dvIEhlaWdodFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvbWUgTG9nbyBIZWlnaHRcIixcbiAgfSxcbiAgaG9tZWxvZ29XaWR0aDoge1xuICAgIGlkOiBcImFwcC5ob21lbG9nb1dpZHRoXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZSBMb2dvIFdpZHRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZSBMb2dvIFdpZHRoXCIsXG4gIH0sXG4gIHNpdGVOYW1lOiB7XG4gICAgaWQ6IFwiYXBwLnNpdGVOYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2l0ZSBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2l0ZSBOYW1lXCIsXG4gIH0sXG4gIHNpdGVUaXRsZToge1xuICAgIGlkOiBcImFwcC5zaXRlVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTaXRlIFRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2l0ZSBUaXRsZVwiLFxuICB9LFxuICBtZXRhS2V5d29yZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLm1ldGFLZXl3b3JkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRhIEtleXdvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXRhIEtleXdvcmRcIixcbiAgfSxcbiAgbWV0YUtleXdvcmRMYWJlbERlc2M6IHtcbiAgICBpZDogXCJhcHAubWV0YUtleXdvcmRMYWJlbERlc2NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNZXRhIERlc2NyaXB0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWV0YSBEZXNjcmlwdGlvblwiLFxuICB9LFxuICBmYWNlYm9va1VSTDoge1xuICAgIGlkOiBcImFwcC5mYWNlYm9va1VSTFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZhY2Vib29rIFVSTFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZhY2Vib29rIFVSTFwiLFxuICB9LFxuICB0d2l0dGVyVVJMOiB7XG4gICAgaWQ6IFwiYXBwLnR3aXR0ZXJVUkxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJUd2l0dGVyIFVSTFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlR3aXR0ZXIgVVJMXCIsXG4gIH0sXG4gIGluc3RhZ3JhbVVSTDoge1xuICAgIGlkOiBcImFwcC5pbnN0YWdyYW1VUkxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJJbnN0YWdyYW0gVVJMXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFncmFtIFVSTFwiLFxuICB9LFxuICBob21lUGFnZUxheW91dDoge1xuICAgIGlkOiBcImFwcC5ob21lUGFnZUxheW91dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgUGFnZSBMYXlvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIFBhZ2UgTGF5b3V0XCIsXG4gIH0sXG4gIGhvbWVQYWdlTGF5b3V0RGVzYzoge1xuICAgIGlkOiBcImFwcC5ob21lUGFnZUxheW91dERlc2NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYW5uZXIgVGV4dCB3aXRoIEltYWdlIFNsaWRlciBMYXlvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYW5uZXIgVGV4dCB3aXRoIEltYWdlIFNsaWRlciBMYXlvdXRcIixcbiAgfSxcbiAgaG9tZVBhZ2VMYXlvdXREZXNjMToge1xuICAgIGlkOiBcImFwcC5ob21lUGFnZUxheW91dERlc2MxXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFubmVyIFRleHQgT25seSBMYXlvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYW5uZXIgVGV4dCBPbmx5IExheW91dFwiLFxuICB9LFxuICBob21lUGFnZUxheW91dERlc2MyOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVQYWdlTGF5b3V0RGVzYzJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYW5uZXIgVGV4dCBMYXlvdXQgd2l0aCBEZXRhaWxlZCBTZWFyY2ggZm9ybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJhbm5lciBUZXh0IExheW91dCB3aXRoIERldGFpbGVkIFNlYXJjaCBmb3JtXCIsXG4gIH0sXG4gIGhvbWVQYWdlTGF5b3V0RGVzYzM6IHtcbiAgICBpZDogXCJhcHAuaG9tZVBhZ2VMYXlvdXREZXNjM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpbmdsZSBCYW5uZXIgSW1hZ2UgTGF5b3V0IHdpdGggRGV0YWlsZWQgU2VhcmNoIGZvcm1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaW5nbGUgQmFubmVyIEltYWdlIExheW91dCB3aXRoIERldGFpbGVkIFNlYXJjaCBmb3JtXCIsXG4gIH0sXG4gIHBob25lTnVtYmVyRm9ybWF0OiB7XG4gICAgaWQ6IFwiYXBwLnBob25lTnVtYmVyRm9ybWF0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGhvbmUgTnVtYmVyIEZvcm1hdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBob25lIE51bWJlciBGb3JtYXRcIixcbiAgfSxcbiAgdHdpbGlvU01TOiB7XG4gICAgaWQ6IFwiYXBwLnR3aWxpb1NNU1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlR3aWxpbyBTTVNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUd2lsaW8gU01TXCIsXG4gIH0sXG4gIG5vcm1hbFBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLm5vcm1hbFBob25lTnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm9ybWFsIFBob25lIE51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5vcm1hbCBQaG9uZSBOdW1iZXJcIixcbiAgfSxcbiAgYXBwQXZhaWxhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLmFwcEF2YWlsYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcCBBdmFpbGFibGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBcHAgQXZhaWxhYmxlXCIsXG4gIH0sXG4gIHBsYXlTdG9yZVVybDoge1xuICAgIGlkOiBcImFwcC5wbGF5U3RvcmVVcmxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGF5IHN0b3JlIFVSTFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBsYXkgc3RvcmUgVVJMXCIsXG4gIH0sXG4gIGFwcFN0b3JlVXJsOiB7XG4gICAgaWQ6IFwiYXBwLmFwcFN0b3JlVXJsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQXBwIHN0b3JlIFVSTFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFwcCBzdG9yZSBVUkxcIixcbiAgfSxcbiAgZW1haWxJZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmVtYWlsSWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVtYWlsIElkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRW1haWwgSWRcIixcbiAgfSxcbiAgbW9iaWxlTnVtYmVyTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubW9iaWxlTnVtYmVyTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNb2JpbGUgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9iaWxlIE51bWJlclwiLFxuICB9LFxuICBoZWFkZXJUaXRsZToge1xuICAgIGlkOiBcImFwcC5oZWFkZXJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhlYWRlciBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhlYWRlciBUaXRsZVwiLFxuICB9LFxuICBoZWFkZXJUaXRsZUNvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAuaGVhZGVyVGl0bGVDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSGVhZGVyIENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIZWFkZXIgQ29udGVudFwiLFxuICB9LFxuICBpc0FjdGl2ZToge1xuICAgIGlkOiBcImFwcC5pc0FjdGl2ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklzIEFjdGl2ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklzIEFjdGl2ZVwiLFxuICB9LFxuICBibG9ja1RpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmxvY2tUaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmxvY2sgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCbG9jayBUaXRsZVwiLFxuICB9LFxuICBibG9ja0NvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ibG9ja0NvbnRlbnRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJsb2NrIENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCbG9jayBDb250ZW50XCIsXG4gIH0sXG4gIGJsb2NrSW1hZ2VMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ibG9ja0ltYWdlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCbG9jayBJbWFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2NrIEltYWdlXCIsXG4gIH0sXG4gIGFib3V0VXNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5hYm91dFVzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBYm91dCBVc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFib3V0IFVzXCIsXG4gIH0sXG4gIHNldFRvRW5hYmxlOiB7XG4gICAgaWQ6IFwiYXBwLnNldFRvRW5hYmxlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2V0IHRvIGVuYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0byBlbmFibGVcIixcbiAgfSxcbiAgc2V0VG9EaXNhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLnNldFRvRGlzYWJsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCB0byBkaXNhYmxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0IHRvIGRpc2FibGVcIixcbiAgfSxcbiAgY2FuY2VsbGVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsbGVkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDYW5jZWxsZWQgYnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYW5jZWxsZWQgYnlcIixcbiAgfSxcbiAgYm9va2luZ1R5cGU6IHtcbiAgICBpZDogXCJhcHAuYm9va2luZ1R5cGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCb29raW5nIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIFR5cGVcIixcbiAgfSxcbiAgYW1vdW50UGFpZDoge1xuICAgIGlkOiBcImFwcC5hbW91bnRQYWlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQW1vdW50IFBhaWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbW91bnQgUGFpZFwiLFxuICB9LFxuICBndWVzdE5hbWU6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3ROYW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkd1ZXN0IE5hbWVcIixcbiAgfSxcbiAgZ3Vlc3RQaG9uZU51bWJlcjoge1xuICAgIGlkOiBcImFwcC5ndWVzdFBob25lTnVtYmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiR3Vlc3QgUGhvbmUgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgUGhvbmUgTnVtYmVyXCIsXG4gIH0sXG4gIGd1ZXN0RW1haWw6IHtcbiAgICBpZDogXCJhcHAuZ3Vlc3RFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IEVtYWlsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgRW1haWxcIixcbiAgfSxcbiAgaG9zdE5hbWU6IHtcbiAgICBpZDogXCJhcHAuaG9zdE5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0IE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IE5hbWVcIixcbiAgfSxcbiAgaG9zdFBob25lTnVtYmVyOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RQaG9uZU51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgUGhvbmUgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBQaG9uZSBOdW1iZXJcIixcbiAgfSxcbiAgaG9zdEVtYWlsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RFbWFpbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb3N0IEVtYWlsXCIsXG4gIH0sXG4gIGNhbmNlbERhdGU6IHtcbiAgICBpZDogXCJhcHAuY2FuY2VsRGF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhbmNlbCBEYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2FuY2VsIERhdGVcIixcbiAgfSxcbiAgaG9zdEJhbm5lclRpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RCYW5uZXJUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgQmFubmVyIFRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBCYW5uZXIgVGl0bGVcIixcbiAgfSxcbiAgaG9zdEJhbm5lckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RCYW5uZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3QgQmFubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBCYW5uZXJcIixcbiAgfSxcbiAgd2h5QmxvY2tUaXRsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLndoeUJsb2NrVGl0bGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCbG9jayBUaXRsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoeSBCbG9jayBUaXRsZVwiLFxuICB9LFxuICB3aHlCbG9ja0NvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC53aHlCbG9ja0NvbnRlbnRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCbG9jayBDb250ZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2h5IEJsb2NrIENvbnRlbnRcIixcbiAgfSxcbiAgaG9zdGluZ0Jsb2NrVGl0bGVIZWFkaW5nOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RpbmdCbG9ja1RpdGxlSGVhZGluZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvc3RpbmcgQmxvY2sgVGl0bGUgSGVhZGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgQmxvY2sgVGl0bGUgSGVhZGluZ1wiLFxuICB9LFxuICBob3N0aW5nQmxvY2tUaXRsZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RpbmdCbG9ja1RpdGxlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0aW5nIEJsb2NrIFRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdGluZyBCbG9jayBUaXRsZVwiLFxuICB9LFxuICBob3N0aW5nQmxvY2tDb250ZW50TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG9zdGluZ0Jsb2NrQ29udGVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdGluZyBCbG9jayBDb250ZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdGluZyBCbG9jayBDb250ZW50XCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvblRpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY292ZXJTZWN0aW9uVGl0bGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdmVyIFNlY3Rpb24gVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIFRpdGxlXCIsXG4gIH0sXG4gIGNvdmVyU2VjdGlvbkNvbnRlbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25Db250ZW50TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb3ZlciBTZWN0aW9uIENvbnRlbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3ZlciBTZWN0aW9uIENvbnRlbnRcIixcbiAgfSxcbiAgY292ZXJTZWN0aW9uRmVhdHVyZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvdmVyU2VjdGlvbkZlYXR1cmVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdmVyIFNlY3Rpb24gRmVhdHVyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvdmVyIFNlY3Rpb24gRmVhdHVyZVwiLFxuICB9LFxuICBjb3ZlclNlY3Rpb25CYW5uZXJMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb3ZlclNlY3Rpb25CYW5uZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvdmVyIFNlY3Rpb24gQmFubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ292ZXIgU2VjdGlvbiBCYW5uZXJcIixcbiAgfSxcbiAgcGF5bWVudFRpdGxlSGVhZGluZ0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnBheW1lbnRUaXRsZUhlYWRpbmdMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnQgVGl0bGUgSGVhZGluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgVGl0bGUgSGVhZGluZ1wiLFxuICB9LFxuICBwYXltZW50VGl0bGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYXltZW50VGl0bGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnQgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXltZW50IFRpdGxlXCIsXG4gIH0sXG4gIHBheW1lbnRDb250ZW50TGFiZWw6IHtcbiAgICBpZDogXCJhcHAucGF5bWVudENvbnRlbnRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBheW1lbnQgQ29udGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBheW1lbnQgQ29udGVudFwiLFxuICB9LFxuICBxdW90ZVNlY3Rpb25UaXRsZToge1xuICAgIGlkOiBcImFwcC5xdW90ZVNlY3Rpb25UaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlF1b3RlIFNlY3Rpb24gVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSBTZWN0aW9uIFRpdGxlXCIsXG4gIH0sXG4gIHF1b3RlU2VjdGlvbkNvbnRlbnQ6IHtcbiAgICBpZDogXCJhcHAucXVvdGVTZWN0aW9uQ29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlF1b3RlIFNlY3Rpb24gQ29udGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlF1b3RlIFNlY3Rpb24gQ29udGVudFwiLFxuICB9LFxuICBxdW90ZVNlY3Rpb25CdXR0b246IHtcbiAgICBpZDogXCJhcHAucXVvdGVTZWN0aW9uQnV0dG9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUXVvdGUgU2VjdGlvbiBCdXR0b25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSBTZWN0aW9uIEJ1dHRvblwiLFxuICB9LFxuICBxdW90ZVNlY3Rpb25CYW5uZXI6IHtcbiAgICBpZDogXCJhcHAucXVvdGVTZWN0aW9uQmFubmVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUXVvdGUgU2VjdGlvbiBCYW5uZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJRdW90ZSBTZWN0aW9uIEJhbm5lclwiLFxuICB9LFxuICBmYXFCbG9ja1RpdGxlOiB7XG4gICAgaWQ6IFwiYXBwLmZhcUJsb2NrVGl0bGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJGQVEgQmxvY2sgVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGQVEgQmxvY2sgVGl0bGVcIixcbiAgfSxcbiAgZmFxQmxvY2tDb250ZW50OiB7XG4gICAgaWQ6IFwiYXBwLmZhcUJsb2NrQ29udGVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkZBUSBCbG9jayBDb250ZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRkFRIEJsb2NrIENvbnRlbnRcIixcbiAgfSxcbiAgc2l0ZVNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLnNpdGVTZXR0aW5nc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNpdGUgU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaXRlIFNldHRpbmdzXCIsXG4gIH0sXG4gIG1hbmFnZUFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZUFkbWluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIEFkbWluc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBBZG1pbnNcIixcbiAgfSxcbiAgbWFuYWdlQWRtaW5Vc2Vyczoge1xuICAgIGlkOiBcImFwcC5tYW5hZ2VBZG1pblVzZXJzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIEFkbWluIFVzZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIEFkbWluIFVzZXJzXCIsXG4gIH0sXG4gIG1hbmFnZUFkbWluUm9sZXM6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlQWRtaW5Sb2xlc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbmFnZSBBZG1pbiBSb2xlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBBZG1pbiBSb2xlc1wiLFxuICB9LFxuICBtYW5hZ2VVc2VyOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVVzZXJcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgVXNlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgVXNlcnNcIixcbiAgfSxcbiAgbWFuYWdlUmVzZXJ2YXRpb25zOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVJlc2VydmF0aW9uc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbmFnZSBSZXNlcnZhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgUmVzZXJ2YXRpb25zXCIsXG4gIH0sXG4gIHJldmlld01hbmFnZW1lbnQ6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3TWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlld3MgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld3MgTWFuYWdlbWVudFwiLFxuICB9LFxuICBhZG1pblJldmlld3M6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5SZXZpZXdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWRtaW4gUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkbWluIFJldmlld3NcIixcbiAgfSxcbiAgd2VsY29tZUFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLndlbGNvbWVBZG1pblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldlbGNvbWUsIEFkbWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2VsY29tZSwgQWRtaW5cIixcbiAgfSxcbiAgbWFuYWdlUmV2aXdlczoge1xuICAgIGlkOiBcImFwcC5tYW5hZ2VSZXZpd2VzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIFJldmlld3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgUmV2aWV3c1wiLFxuICB9LFxuICB3cml0ZVJldml3ZXM6IHtcbiAgICBpZDogXCJhcHAud3JpdGVSZXZpd2VzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV3JpdGUgYSByZXZpZXdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXcml0ZSBSZXZpZXdcIixcbiAgfSxcbiAgbWFuYWdlU2VydmljZUZlZToge1xuICAgIGlkOiBcImFwcC5tYW5hZ2VTZXJ2aWNlRmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIFNlcnZpY2UgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIFNlcnZpY2UgRmVlXCIsXG4gIH0sXG4gIHJlcG9ydE1hbmFnZW1lbnQ6IHtcbiAgICBpZDogXCJhcHAucmVwb3J0TWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlcG9ydCBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IE1hbmFnZW1lbnRcIixcbiAgfSxcbiAgbWFuYWdlUGF5b3V0OiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVBheW91dFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1hbmFnZSBQYXlvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgUGF5b3V0XCIsXG4gIH0sXG4gIG1hbmFnZUN1cnJlbmN5OiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZUN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFuYWdlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIEN1cnJlbmN5XCIsXG4gIH0sXG4gIHNlYXJjaFNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLnNlYXJjaFNldHRpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VhcmNoIFNldHRpbmdzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VhcmNoIFNldHRpbmdzXCIsXG4gIH0sXG4gIGNoYW5nZVBhc3N3b3JkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuY2hhbmdlUGFzc3dvcmRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoYW5nZSBQYXNzd29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoYW5nZSBQYXNzd29yZFwiLFxuICB9LFxuICBzdGF0aWNDb250ZW50TWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5zdGF0aWNDb250ZW50TWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN0YXRpYyBDb250ZW50IE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0aWMgQ29udGVudCBNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIHN0YXRpY0NvbnRlbnRNYW5hZ2VtZW50OiB7XG4gICAgaWQ6IFwiYXBwLnN0YXRpY0NvbnRlbnRNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGljIENvbnRlbnQgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXRpYyBDb250ZW50IE1hbmFnZW1lbnRcIixcbiAgfSxcbiAgY29udGVudE1hbmFnZW1lbnRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5jb250ZW50TWFuYWdlbWVudExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29udGVudCBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29udGVudCBNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIG1heGltdW1OaWdodHNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tYXhpbXVtTmlnaHRzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIE5pZ2h0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1heGltdW0gTmlnaHRzXCIsXG4gIH0sXG4gIG1pbmltdW1OaWdodHNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5taW5pbXVtTmlnaHRzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNaW5pbXVtIE5pZ2h0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1pbmltdW0gTmlnaHRzXCIsXG4gIH0sXG4gIGJvb2tpbmdOb3RpY2VUaW1lOiB7XG4gICAgaWQ6IFwiYXBwLmJvb2tpbmdOb3RpY2VUaW1lXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyBOb3RpY2UgVGltZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2tpbmcgTm90aWNlIFRpbWVcIixcbiAgfSxcbiAgcmV2aWV3SG93R3Vlc3RCb29rOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld0hvd0d1ZXN0Qm9va1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJldmlldyBIb3cgR3Vlc3RzIEJvb2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXcgSG93IEd1ZXN0cyBCb29rXCIsXG4gIH0sXG4gIGxpc3RTZXR0aW5nU3RlcDoge1xuICAgIGlkOiBcImFwcC5saXN0U2V0dGluZ1N0ZXBcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0IFNldHRpbmdzIGZvciBTdGVwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdCBTZXR0aW5ncyBmb3IgU3RlcFwiLFxuICB9LFxuICBlc3NlbnRpYWxBbWVuaXRpZXM6IHtcbiAgICBpZDogXCJhcHAuZXNzZW50aWFsQW1lbml0aWVzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRXNzZW50aWFsIEFtZW5pdGllc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVzc2VudGlhbCBBbWVuaXRpZXNcIixcbiAgfSxcbiAgYmF0aHJvb21UeXBlOiB7XG4gICAgaWQ6IFwiYXBwLmJhdGhyb29tVHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJhdGhyb29tIFR5cGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXRocm9vbSBUeXBlXCIsXG4gIH0sXG4gIGJlZFR5cGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5iZWRUeXBlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCZWQgVHlwZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZCBUeXBlXCIsXG4gIH0sXG4gIGJlZFJvb21zTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmVkUm9vbXNMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlZCBSb29tc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJlZCBSb29tc1wiLFxuICB9LFxuICBidWlsZGluZ1NpemU6IHtcbiAgICBpZDogXCJhcHAuYnVpbGRpbmdTaXplXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQnVpbGRpbmcgU2l6ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWxkaW5nIFNpemVcIixcbiAgfSxcbiAgaG91c2VUeXBlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaG91c2VUeXBlTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3VzZSBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG91c2UgVHlwZVwiLFxuICB9LFxuICBwZXJzb25DYXBhY2l0eToge1xuICAgIGlkOiBcImFwcC5wZXJzb25DYXBhY2l0eVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBlcnNvbiBDYXBhY2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcnNvbiBDYXBhY2l0eVwiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0UGFnZToge1xuICAgIGlkOiBcImFwcC53aHlCZWNvbWVIb3N0UGFnZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBQYWdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2h5IEJlY29tZSBIb3N0IFBhZ2VcIixcbiAgfSxcbiAgaG9tZUJhbm5lckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVCYW5uZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgQmFubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZSBCYW5uZXJcIixcbiAgfSxcbiAgaG9tZU9mZmVyOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVPZmZlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhvbWUgT2ZmZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIEJhbm5lclwiLFxuICB9LFxuICBmaWVsZENhcjoge1xuICAgIGlkOiBcImFwcC5maWVsZENhclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhclwiLFxuICB9LFxuICBzdGF0aWNJbmZvQmxvY2s6IHtcbiAgICBpZDogXCJhcHAuc3RhdGljSW5mb0Jsb2NrXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGljIEluZm8gQmxvY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0aWMgSW5mbyBCbG9ja1wiLFxuICB9LFxuICBtYW5hZ2VQb3B1bGFyTG9jYXRpb25zOiB7XG4gICAgaWQ6IFwiYXBwLm1hbmFnZVBvcHVsYXJMb2NhdGlvbnNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2UgUG9wdWxhciBMb2NhdGlvbnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYW5hZ2UgUG9wdWxhciBMb2NhdGlvbnNcIixcbiAgfSxcbiAgZm9vdGVyQmxvY2tMYWJlbDoge1xuICAgIGlkOiBcImFwcC5mb290ZXJCbG9ja0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRm9vdGVyIEJsb2NrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9vdGVyIEJsb2NrXCIsXG4gIH0sXG4gIGltYWdlQmFubmVyTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaW1hZ2VCYW5uZXJMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkltYWdlIEJhbm5lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkltYWdlIEJhbm5lclwiLFxuICB9LFxuICBiYW5uZXJDYXB0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmFubmVyQ2FwdGlvbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFubmVyIENhcHRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYW5uZXIgQ2FwdGlvblwiLFxuICB9LFxuICBob21lUGFnZVNldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLmhvbWVQYWdlU2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb21lIFBhZ2UgU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb21lIFBhZ2UgU2V0dGluZ3NcIixcbiAgfSxcbiAgcm9sZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnJvbGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJvbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSb2xlXCIsXG4gIH0sXG4gIGFkbWluVXNlckRlc2M6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5Vc2VyRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJQcm92aWRlIG5ldyBwYXNzd29yZCBvbmx5LiBJZ25vcmUgdGhpcyBmaWVsZCB0byB1c2UgdGhlIGV4aXN0aW5nIHBhc3N3b3JkIGZvciB0aGlzIHVzZXIuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlByb3ZpZGUgbmV3IHBhc3N3b3JkIG9ubHkuIElnbm9yZSB0aGlzIGZpZWxkIHRvIHVzZSB0aGUgZXhpc3RpbmcgcGFzc3dvcmQgZm9yIHRoaXMgdXNlci5cIixcbiAgfSxcbiAgc2VsZWN0cm9sZUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdHJvbGVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNlbGVjdCBSb2xlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VsZWN0IFJvbGVcIixcbiAgfSxcbiAgcm9sZU5hbWVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5yb2xlTmFtZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUm9sZSBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUm9sZSBOYW1lXCIsXG4gIH0sXG4gIHByaXZpbGFnZXNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wcml2aWxhZ2VzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQcml2aWxlZ2VzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpdmlsZWdlc1wiLFxuICB9LFxuICBhZG1pblRpdGxlTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5UaXRsZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZVwiLFxuICB9LFxuICBpbnZhbGlkUGFnZVVybDoge1xuICAgIGlkOiBcImFwcC5pbnZhbGlkUGFnZVVybFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgUGFnZSBVUkxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIFBhZ2UgVVJMXCIsXG4gIH0sXG4gIGxvZ2dlZEluOiB7XG4gICAgaWQ6IFwiYXBwLmxvZ2dlZEluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiWW91IGFyZSBhbHJlYWR5IGxvZ2dlZCBpbiFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJZb3UgYXJlIGFscmVhZHkgTG9nZ2VkLWluXCIsXG4gIH0sXG4gIHVzZXJMb2dnZWRJbjoge1xuICAgIGlkOiBcImFwcC51c2VyTG9nZ2VkSW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTpcbiAgICAgIFwiWW91IGFyZSBhbHJlYWR5IGxvZ2dlZCBpbiBhcyBVc2VyLCBwbGVhc2UgbG9nb3V0IGluIHRoZSBtYWluIHNpdGUgdG8gY29udGludWUhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiWW91IGFyZSBhbHJlYWR5IExvZ2dlZC1pbiBhcyB1c2VyXCIsXG4gIH0sXG4gIHByb3ZpZGVMaXN0SWQ6IHtcbiAgICBpZDogXCJhcHAucHJvdmlkZUxpc3RJZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb3ZpZGUgbGlzdCBJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgbGlzdCBJRFwiLFxuICB9LFxuICBvbmx5TnVtZXJpY0tleToge1xuICAgIGlkOiBcImFwcC5vbmx5TnVtZXJpY0tleVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk9ubHkgbnVtZXJpYyB2YWx1ZXMgYXJlIGFsbG93ZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPbmx5IG51bWVyaWMgdmFsdWVzIGFyZSBhbGxvd2VkXCIsXG4gIH0sXG4gIG5vUmVjb3JkRm91bmQ6IHtcbiAgICBpZDogXCJhcHAubm9SZWNvcmRGb3VuZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk5vIG1hdGNoaW5nIHJlY29yZHMgZm91bmQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZC5cIixcbiAgfSxcbiAgcmF0aW5nUmV2aWV3TGFiZWw6IHtcbiAgICBpZDogXCJhcHAucmF0aW5nUmV2aWV3TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgUmF0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3IFJhdGluZ1wiLFxuICB9LFxuICBkZWxldGVSZXZpZXdMYWJlbDoge1xuICAgIGlkOiBcImFwcC5kZWxldGVSZXZpZXdMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlbGV0aW5nIFJldmlld1wiLFxuICB9LFxuICBleGNlZWRMaW1pdDI1NToge1xuICAgIGlkOiBcImFwcC5leGNlZWRMaW1pdDI1NVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIk1heGltdW0gYWxsb3dlZCBjaGFyYWN0ZXIgaXMgMjU1LlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImV4Y2VlZExpbWl0XCIsXG4gIH0sXG4gIGlkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuaWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSURcIixcbiAgfSxcbiAgZW1haWxCbGFua1NwYWNlQWRtaW46IHtcbiAgICBpZDogXCJhcHAuZW1haWxCbGFua1NwYWNlQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJFbWFpbCBzaG91bGQgbm90IGJlIGJsYW5rIHNwYWNlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImVtYWlsIGFkZHJlc3MgZXJyb3JcIixcbiAgfSxcbiAgcGFzc3dvcmRJbnZhbGlkQWRtaW46IHtcbiAgICBpZDogXCJhcHAucGFzc3dvcmRJbnZhbGlkQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXNzd29yZCBzaG91bGQgYmUgbWluaW11bSA4IGNoYXJhY3RlcnMuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGFzc3dvcmQgbWluaW11bSBjaGFyYWN0ZXJzIGVycm9yXCIsXG4gIH0sXG4gIHBhc3N3b3JkQmxhbmtTcGFjZUFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLnBhc3N3b3JkQmxhbmtTcGFjZUFkbWluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzc3dvcmQgc2hvdWxkIG5vdCBiZSBibGFuayBzcGFjZS5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXNzd29yZCBlcnJvclwiLFxuICB9LFxuICBzTm9MYWJlbDoge1xuICAgIGlkOiBcImFwcC5zTm9MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlMuTm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTLk5vXCIsXG4gIH0sXG4gIGRlbGV0aW5nUGFnZURldGFpbHM6IHtcbiAgICBpZDogXCJhcHAuZGVsZXRpbmdQYWdlRGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFBhZ2UgRGV0YWlsc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlbGV0aW5nIFBhZ2UgRGV0YWlsc1wiLFxuICB9LFxuICBjaGFuZ2VBZG1pblBhc3N3b3JkRGVzYzoge1xuICAgIGlkOiBcImFwcC5jaGFuZ2VBZG1pblBhc3N3b3JkRGVzY1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOlxuICAgICAgXCJMZWF2ZSBlbWFpbCBhZGRyZXNzIGZpZWxkIGJsYW5rIGlmIHlvdSBkb24ndCB3YW50IHRvIGNoYW5nZSB0aGUgZW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTGVhdmUgZW1haWwgYWRkcmVzcyBmaWVsZCBibGFuayBpZiB5b3UgZG9uJ3Qgd2FudCB0byBjaGFuZ2UgdGhlIGVtYWlsXCIsXG4gIH0sXG4gIHBhc3NXb3JkTWlzbWF0Y2g6IHtcbiAgICBpZDogXCJhcHAucGFzc1dvcmRNaXNtYXRjaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBhc3N3b3JkIGlzIG1pc21hdGNoaW5nIHdpdGggQ29uZmlybSBwYXNzd29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhc3N3b3JkIGlzIG1pc21hdGNoaW5nIHdpdGggQ29uZmlybSBwYXNzd29yZFwiLFxuICB9LFxuICBwYXNzV29yZE1pbmltdW06IHtcbiAgICBpZDogXCJhcHAucGFzc1dvcmRNaW5pbXVtXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzc3dvcmQgbXVzdCBiZSBtaW5pbXVtIDggY2hhcmFjdGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBhc3N3b3JkIG11c3QgYmUgbWluaW11bSA4IGNoYXJhY3RlcnNcIixcbiAgfSxcbiAgc3ltYm9sTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc3ltYm9sTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTeW1ib2xcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTeW1ib2xcIixcbiAgfSxcbiAgYmFzZUN1cnJlbmN5TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYmFzZUN1cnJlbmN5TGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYXNlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFzZSBDdXJyZW5jeVwiLFxuICB9LFxuICBzZXRFbmFibGVEaXNhYmxlOiB7XG4gICAgaWQ6IFwiYXBwLnNldEVuYWJsZURpc2FibGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXQgRW5hYmxlIC8gRGlzYWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCBFbmFibGUgLyBEaXNhYmxlXCIsXG4gIH0sXG4gIHNldEN1cnJlbmN5TGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc2V0Q3VycmVuY3lMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldCBCYXNlIEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0IEJhc2UgQ3VycmVuY3lcIixcbiAgfSxcbiAgYWxsb3dlZFBheW1lbnRDdXJyZW5jeToge1xuICAgIGlkOiBcImFwcC5hbGxvd2VkUGF5bWVudEN1cnJlbmN5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWxsb3dlZCBQYXltZW50IEN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dlZCBQYXltZW50IEN1cnJlbmN5XCIsXG4gIH0sXG4gIGhvc3RFTWFpbExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RFTWFpbExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9zdCBFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvc3QgRW1haWxcIixcbiAgfSxcbiAgUmVxdWVzdGVkRmlsZXM6IHtcbiAgICBpZDogXCJhcHAuUmVxdWVzdGVkRmlsZXNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1ZXN0ZWQgRmlsZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXF1ZXN0ZWQgRmlsZXNcIixcbiAgfSxcbiAgYWN0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWN0aW9uTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY3Rpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY3Rpb25cIixcbiAgfSxcbiAgY3JlYXRlZERhdGU6IHtcbiAgICBpZDogXCJhcHAuY3JlYXRlZERhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDcmVhdGVkIERhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGVkIERhdGVcIixcbiAgfSxcbiAgc3RhdGVMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zdGF0ZUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF0ZVwiLFxuICB9LFxuICByZWNvbW1lbmRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5yZWNvbW1lbmRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlY29tbWVuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlY29tbWVuZFwiLFxuICB9LFxuICBzZXRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zZXRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldFwiLFxuICB9LFxuICBwdWJsaXNoZWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wdWJsaXNoZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlB1Ymxpc2hlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlB1Ymxpc2hlZFwiLFxuICB9LFxuICBkZWxldGluZ0xpc3RpbmdUaXRsZToge1xuICAgIGlkOiBcImFwcC5kZWxldGluZ0xpc3RpbmdUaXRsZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIExpc3RpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWxldGluZyBMaXN0aW5nXCIsXG4gIH0sXG4gIHNldHRpbmdzSURMYWJlbDoge1xuICAgIGlkOiBcImFwcC5zZXR0aW5nc0lETGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXR0aW5ncyBJRFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHRpbmdzIElEXCIsXG4gIH0sXG4gIG9wZXJhdGlvbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLm9wZXJhdGlvbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3BlcmF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT3BlcmF0aW9uXCIsXG4gIH0sXG4gIHBheW91dHNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRzTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGF5b3V0c1wiLFxuICB9LFxuICBkYXRhTWlzc2luZzoge1xuICAgIGlkOiBcImFwcC5kYXRhTWlzc2luZ1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3QgaXMgbWlzc2luZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxpc3QgaXMgbWlzc2luZ1wiLFxuICB9LFxuICBob3N0RW1haWxJZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmhvc3RFbWFpbElkTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJIb3N0IEVtYWlsIElEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9zdCBFbWFpbCBJRFwiLFxuICB9LFxuICBndWVzdEVtYWlsSWRMYWJlbDoge1xuICAgIGlkOiBcImFwcC5ndWVzdEVtYWlsSWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkd1ZXN0IEVtYWlsIElEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR3Vlc3QgRW1haWwgSURcIixcbiAgfSxcbiAgbWVzc2FnZXNMYWJlbDoge1xuICAgIGlkOiBcImFwcC5tZXNzYWdlc0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWVzc2FnZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZXNzYWdlc1wiLFxuICB9LFxuICBkZWxldGVQb3B1bGFyTG9jYXRpb25MYWJlbDoge1xuICAgIGlkOiBcImFwcC5kZWxldGVQb3B1bGFyTG9jYXRpb25MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFBvcHVsYXIgTG9jYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWxldGluZyBQb3B1bGFyIExvY2F0aW9uXCIsXG4gIH0sXG4gIHJlcG9ydGVyTmFtZToge1xuICAgIGlkOiBcImFwcC5yZXBvcnRlck5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXBvcnRlciBOYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0ZXIgTmFtZVwiLFxuICB9LFxuICByZXBvcnRlckVtYWlsOiB7XG4gICAgaWQ6IFwiYXBwLnJlcG9ydGVyRW1haWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXBvcnRlciBFbWFpbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydGVyIEVtYWlsXCIsXG4gIH0sXG4gIHVzZXJOYW1lTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXNlck5hbWVMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgTmFtZVwiLFxuICB9LFxuICB1c2VyRW1haWxMYWJlbDoge1xuICAgIGlkOiBcImFwcC51c2VyRW1haWxMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgRW1haWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVc2VyIEVtYWlsXCIsXG4gIH0sXG4gIHJlcG9ydFR5cGU6IHtcbiAgICBpZDogXCJhcHAucmVwb3J0VHlwZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlJlcG9ydCBUeXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVwb3J0IFR5cGVcIixcbiAgfSxcbiAgcmVmdW5kVG9HdWVzdDoge1xuICAgIGlkOiBcImFwcC5yZWZ1bmRUb0d1ZXN0XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVmdW5kIHRvIEd1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVmdW5kIHRvIEd1ZXN0XCIsXG4gIH0sXG4gIHN1YlRvdGFsTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuc3ViVG90YWxMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1YiBUb3RhbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN1YiBUb3RhbFwiLFxuICB9LFxuICBwYXlvdXRMYWJlbEFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dExhYmVsQWRtaW5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYXlvdXRcIixcbiAgfSxcbiAgcGxlYXNlQ2hvb3NlQ3VycmVueToge1xuICAgIGlkOiBcImFwcC5wbGVhc2VDaG9vc2VDdXJyZW55XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIGNob29zZSBhIGN1cnJlbmN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGxlYXNlIGNob29zZSBhIGN1cnJlbmN5XCIsXG4gIH0sXG4gIHByb3ZpZGVGaXhlZEd1ZXN0RmVlOiB7XG4gICAgaWQ6IFwiYXBwLnByb3ZpZGVGaXhlZEd1ZXN0RmVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUHJvdmlkZSBmaXhlZCBhbW91bnQgb3IgcGVyY2VudGFnZSBmb3IgR3Vlc3QgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBmaXhlZCBhbW91bnQgb3IgcGVyY2VudGFnZSBmb3IgR3Vlc3QgRmVlXCIsXG4gIH0sXG4gIHByb3ZpZGVGaXhlZEhvc3RGZWU6IHtcbiAgICBpZDogXCJhcHAucHJvdmlkZUZpeGVkSG9zdEZlZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb3ZpZGUgZml4ZWQgYW1vdW50IG9yIHBlcmNlbnRhZ2UgZm9yIEhvc3QgRmVlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBmaXhlZCBhbW91bnQgb3IgcGVyY2VudGFnZSBmb3IgSG9zdCBGZWVcIixcbiAgfSxcbiAgY3VycmVuY3lSZXF1aXJlZExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmN1cnJlbmN5UmVxdWlyZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkN1cnJlbmN5IGlzIHJlcXVpcmVkIHdoZW4geW91IHVzZSBmaXhlZCBwcmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbmN5IGlzIHJlcXVpcmVkIHdoZW4geW91IHVzZSBmaXhlZCBwcmljZVwiLFxuICB9LFxuICBjaG9vc2VQcmVzZW50YWdlVmFsdWU6IHtcbiAgICBpZDogXCJhcHAuY2hvb3NlUHJlc2VudGFnZVZhbHVlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIHBlcmNlbnRhZ2UgdmFsdWUgYmV0d2VlbiAxIHRvIDk5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hvb3NlIHBlcmNlbnRhZ2UgdmFsdWUgYmV0d2VlbiAxIHRvIDk5XCIsXG4gIH0sXG4gIHJlYXNvbjoge1xuICAgIGlkOiBcImFwcC5yZWFzb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZWFzb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFzb25cIixcbiAgfSxcbiAgYWxsTGFiZWw6IHtcbiAgICBpZDogXCJhcHAuYWxsTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBbGxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxcIixcbiAgfSxcbiAgcHJvZmlsZUlEOiB7XG4gICAgaWQ6IFwiYXBwLnByb2ZpbGVJRFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgSURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9maWxlIElEXCIsXG4gIH0sXG4gIHNlbGVjdExhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnNlbGVjdExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VsZWN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VsZWN0XCIsXG4gIH0sXG4gIGJhbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmJhbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQmFuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFuXCIsXG4gIH0sXG4gIHVuQmFuTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudW5CYW5MYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVuQmFuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVW5CYW5cIixcbiAgfSxcbiAgZGVsZXRpbmdVc2VyOiB7XG4gICAgaWQ6IFwiYXBwLmRlbGV0aW5nVXNlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRlbGV0aW5nIFVzZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZWxldGluZyBVc2VyXCIsXG4gIH0sXG4gIHVzZXJzTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudXNlcnNMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXNlcnNcIixcbiAgfSxcbiAgcGFnZU5hbWU6IHtcbiAgICBpZDogXCJhcHAucGFnZU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYWdlIE5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQYWdlIE5hbWVcIixcbiAgfSxcbiAgcmVzZXJ2YXRpb25Db25maXJtQ29kZToge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbkNvbmZpcm1Db2RlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVzZXJ2YXRpb24gQ29uZmlybWF0aW9uIENvZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbiBDb25maXJtYXRpb24gQ29kZVwiLFxuICB9LFxuICBDaGVja0luRGF0ZToge1xuICAgIGlkOiBcImFwcC5DaGVja0luRGF0ZVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNoZWNrLWluIERhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGVjay1pbiBEYXRlXCIsXG4gIH0sXG4gIENoZWNrT3V0RGF0ZToge1xuICAgIGlkOiBcImFwcC5DaGVja091dERhdGVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGVjay1vdXQgRGF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrLW91dCBEYXRlXCIsXG4gIH0sXG4gIFNlbmRlckxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLlNlbmRlckxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2VuZGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZGVyXCIsXG4gIH0sXG4gIHJldmlld1N0YXR1c0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnJldmlld1N0YXR1c0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmV2aWV3IFN0YXR1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJldmlldyBTdGF0dXNcIixcbiAgfSxcbiAgcmV2aWV3QWN0aW9uTGFiZWw6IHtcbiAgICBpZDogXCJhcHAucmV2aWV3QWN0aW9uTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXZpZXcgQWN0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmV2aWV3IEFjdGlvblwiLFxuICB9LFxuICB3cml0ZVNvbWV0aGlnczoge1xuICAgIGlkOiBcImFwcC53cml0ZVNvbWV0aGlnc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIndyaXRlIHNvbWV0aGluZy4uLi4uLi5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3cml0ZSBzb21ldGhpbmcuLi4uLi4uXCIsXG4gIH0sXG4gIGNvb2tpZVN0YXRpY1BvbGljeToge1xuICAgIGlkOiBcImFwcC5jb29raWVTdGF0aWNQb2xpY3lcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb29raWUgUG9saWN5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29va2llIFBvbGljeVwiLFxuICB9LFxuICB3aXNoTGlzdFNhdmU6IHtcbiAgICBpZDogXCJhcHAud2lzaExpc3RTYXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU2F2ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNhdmUgQnV0dG9uXCIsXG4gIH0sXG4gIG5vUGhvbmVOdW1iZXJFbnRlcmVkOiB7XG4gICAgaWQ6IFwiYXBwLm5vUGhvbmVOdW1iZXJFbnRlcmVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gcGhvbmUgbnVtYmVyIGVudGVyZWQuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gcGhvbmUgbnVtYmVyIGVudGVyZWQuXCIsXG4gIH0sXG4gIHdlbGNvbWVBZG1pbkxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLndlbGNvbWVBZG1pbkxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2VsY29tZSBBZG1pbiAhISFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lIEFkbWluICEhIVwiLFxuICB9LFxuICBzaWRlTWVudToge1xuICAgIGlkOiBcImFwcC5zaWRlTWVudVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkJlY29tZSBIb3N0IFN0YXRpYyBCbG9ja1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZGUgTWVudVwiLFxuICB9LFxuICBleGNlZWRMaW1pdDM1OiB7XG4gICAgaWQ6IFwiYXBwLmV4Y2VlZExpbWl0MzVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYXhpbXVtIDM1IGNoYXJhY3RlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXhpbXVtIDM1IGNoYXJhY3RlcnNcIixcbiAgfSxcbiAgZXhjZWVkTGltaXQ3MDoge1xuICAgIGlkOiBcImFwcC5leGNlZWRMaW1pdDcwXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSA3MCBjaGFyYWN0ZXJzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWF4aW11bSA3MCBjaGFyYWN0ZXJzXCIsXG4gIH0sXG4gIGxpc3REZWxldGVkOiB7XG4gICAgaWQ6IFwiYXBwLmxpc3REZWxldGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXNlciBkZWxldGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXNlciBkZWxldGVkXCIsXG4gIH0sXG4gIHZlcmlmaWVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAudmVyaWZpZWRMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlZlcmlmaWVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwidmVyaWZpZWRCeVwiLFxuICB9LFxuICBsaW5rQ29waWVkTGFiZWw6IHtcbiAgICBpZDogXCJhcHAubGlua0NvcGllZExhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGluayBDb3BpZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaW5rIENvcGllZFwiLFxuICB9LFxuICBjb3B5TGlua0xhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLmNvcHlMaW5rTGFiZWxcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb3B5IExpbmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5IExpbmtcIixcbiAgfSxcbiAgdG9kYXlMYWJlbDoge1xuICAgIGlkOiBcImFwcC50b2RheUxhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVG9kYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ0b2RheUxhYmVsXCIsXG4gIH0sXG4gIGliYW5OdW1iZXI6IHtcbiAgICBpZDogXCJhcHAuaWJhbk51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklCQU4gbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiaWJhbk51bWJlclwiLFxuICB9LFxuICBjb25maXJtSWJhbk51bWJlcjoge1xuICAgIGlkOiBcImFwcC5jb25maXJtSWJhbk51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNvbmZpcm0gSUJBTiBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjb25maXJtSWJhbk51bWJlclwiLFxuICB9LFxuICBpYmFuTnVtYmVySW52YWxpZDoge1xuICAgIGlkOiBcImFwcC5pYmFuTnVtYmVySW52YWxpZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgSUJBTiBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJpYmFuTnVtYmVySW52YWxpZFwiLFxuICB9LFxuICBjb25maXJtSWJhbk51bWJlckludmFsaWQ6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybUliYW5OdW1iZXJJbnZhbGlkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW52YWxpZCBjb25maXJtIElCQU4gbnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29uZmlybUliYW5OdW1iZXJJbnZhbGlkXCIsXG4gIH0sXG4gIGNvbmZpcm1JYmFuTnVtYmVyTWlzbWF0Y2g6IHtcbiAgICBpZDogXCJhcHAuY29uZmlybUliYW5OdW1iZXJNaXNtYXRjaFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIklCQU4gbnVtYmVyIG1pc21hdGNoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29uZmlybUliYW5OdW1iZXJNaXNtYXRjaFwiLFxuICB9LFxuICBzdHJpcGVUb2tlbkluZm8xOiB7XG4gICAgaWQ6IFwiYXBwLnN0cmlwZVRva2VuSW5mbzFcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCeSBjbGlja2luZywgeW91IGFncmVlIHRvIG91ciB0ZXJtcyBhbmQgdGhlIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0cmlwZVRva2VuSW5mbzFcIixcbiAgfSxcbiAgc3RyaXBlVG9rZW5JbmZvMjoge1xuICAgIGlkOiBcImFwcC5zdHJpcGVUb2tlbkluZm8yXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyaXBlIENvbm5lY3RlZCBBY2NvdW50IEFncmVlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0cmlwZVRva2VuSW5mbzJcIixcbiAgfSxcbiAgUGFnaW5hdGlvbk9mQ29udGVudDoge1xuICAgIGlkOiBcImFwcC5QYWdpbmF0aW9uT2ZDb250ZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwib2ZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJvZlwiLFxuICB9LFxuICBhZG1pbkRhc2hib2FyZDoge1xuICAgIGlkOiBcImFwcC5hZG1pbkRhc2hib2FyZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFkbWluIERhc2hib2FyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm9mXCIsXG4gIH0sXG4gIGNsaWNrSGVyZXRvVXBsb2FkTG9nbzoge1xuICAgIGlkOiBcImFwcC5jbGlja0hlcmV0b1VwbG9hZExvZ29cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGljayBoZXJlIHRvIHVwbG9hZCB0aGUgbG9nb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNsaWNrSGVyZXRvVXBsb2FkTG9nb1wiLFxuICB9LFxuICB1c2VyTWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC51c2VyTWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlVzZXIgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInVzZXJNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIHByb2ZpbGVWZXJpZmllZFZpZXc6IHtcbiAgICBpZDogXCJhcHAucHJvZmlsZVZlcmlmaWVkVmlld1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlByb2ZpbGUgVmVyaWZpZWQgVmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInByb2ZpbGVWZXJpZmllZFZpZXdcIixcbiAgfSxcbiAgbGlzdGluZ3NNYW5hZ2VtZW50OiB7XG4gICAgaWQ6IFwiYXBwLmxpc3RpbmdzTWFuYWdlbWVudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkxpc3RpbmdzIE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJsaXN0aW5nc01hbmFnZW1lbnRcIixcbiAgfSxcbiAgcmVhZHlUb3BheToge1xuICAgIGlkOiBcImFwcC5yZWFkeVRvcGF5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVhZHkgVG8gUGF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwicmVhZHlUb3BheVwiLFxuICB9LFxuICB1c2Vyc1Jldmlld3M6IHtcbiAgICBpZDogXCJhcHAudXNlcnNSZXZpZXdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXNlcnMgUmV2aWV3c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInVzZXJzUmV2aWV3c1wiLFxuICB9LFxuICBzZXJ2aWNlZmVlc1NldHRpbmdzOiB7XG4gICAgaWQ6IFwiYXBwLnNlcnZpY2VmZWVzU2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJTZXJ2aWNlIEZlZXMgU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJzZXJ2aWNlZmVlc1NldHRpbmdzXCIsXG4gIH0sXG4gIGRvY3VtZW50VmVyaWZpY2F0aW9uTWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5kb2N1bWVudFZlcmlmaWNhdGlvbk1hbmFnZW1lbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEb2N1bWVudCBWZXJpZmljYXRpb24gTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRvY3VtZW50IFZlcmlmaWNhdGlvbiBNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIHBkZjoge1xuICAgIGlkOiBcImFwcC5wZGZcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQREZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwZGZcIixcbiAgfSxcbiAgcmVwb3J0VXNlck1lc3NhZ2U6IHtcbiAgICBpZDogXCJhcHAucmVwb3J0VXNlck1lc3NhZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXBvcnQgVXNlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInJlcG9ydFVzZXJcIixcbiAgfSxcbiAgcGF5b3V0TWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGF5b3V0IE1hbmFnZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJwYXlvdXRNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIGN1cnJlbmN5TWFuYWdlbWVudDoge1xuICAgIGlkOiBcImFwcC5jdXJyZW5jeU1hbmFnZW1lbnRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDdXJyZW5jeSBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3VycmVuY3kgTWFuYWdlbWVudFwiLFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBpZDogXCJhcHAuYWN0aXZlXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQWN0aXZlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWN0aXZlXCIsXG4gIH0sXG4gIGNoYW5nZUFkbWluRW1haWxQYXNzd29yZDoge1xuICAgIGlkOiBcImFwcC5jaGFuZ2VBZG1pbkVtYWlsUGFzc3dvcmRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDaGFuZ2UgQWRtaW4gRW1haWwvUGFzc3dvcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJjaGFuZ2VBZG1pbkVtYWlsUGFzc3dvcmRcIixcbiAgfSxcbiAgYmFubmVyU2V0dGluZ3M6IHtcbiAgICBpZDogXCJhcHAuYmFubmVyU2V0dGluZ3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJCYW5uZXIgU2V0dGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJiYW5uZXJTZXR0aW5nc1wiLFxuICB9LFxuICBob21lcGFnZUJhbm5lcmVyU2V0dGluZ3M6IHtcbiAgICBpZDogXCJhcHAuaG9tZXBhZ2VCYW5uZXJlclNldHRpbmdzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiSG9tZSBwYWdlIEJhbm5lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImJhbkhvbWUgcGFnZSBCYW5uZXJuZXJTZXR0aW5nc1wiLFxuICB9LFxuICBjbGlja0hlcmV0b1VwbG9hZEltYWdlOiB7XG4gICAgaWQ6IFwiYXBwLmNsaWNrSGVyZXRvVXBsb2FkSW1hZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGljayBIZXJlIHRvIFVwbG9hZCBJbWFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIEhlcmUgdG8gVXBsb2FkIEltYWdlXCIsXG4gIH0sXG4gIHdoeUJlY29tZUhvc3RCbG9jazE6IHtcbiAgICBpZDogXCJhcHAud2h5QmVjb21lSG9zdEJsb2NrMVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBCbG9jayAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2h5IEJlY29tZSBIb3N0IEJsb2NrIDFcIixcbiAgfSxcbiAgd2h5QmVjb21lSG9zdEJsb2NrMjoge1xuICAgIGlkOiBcImFwcC53aHlCZWNvbWVIb3N0QmxvY2syXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEJlY29tZSBIb3N0IEJsb2NrIDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aHlCZWNvbWVIb3N0QmxvY2syXCIsXG4gIH0sXG4gIHdoeUJlY29tZUhvc3RCbG9jazM6IHtcbiAgICBpZDogXCJhcHAud2h5QmVjb21lSG9zdEJsb2NrM1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBCbG9jayAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5QmVjb21lSG9zdEJsb2NrM1wiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0QmxvY2s0OiB7XG4gICAgaWQ6IFwiYXBwLndoeUJlY29tZUhvc3RCbG9jazRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaHkgQmVjb21lIEhvc3QgQmxvY2sgNFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeUJlY29tZUhvc3RCbG9jazRcIixcbiAgfSxcbiAgd2h5QmVjb21lSG9zdEJsb2NrNToge1xuICAgIGlkOiBcImFwcC53aHlCZWNvbWVIb3N0QmxvY2s1XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiV2h5IEJlY29tZSBIb3N0IEJsb2NrIDVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3aHlCZWNvbWVIb3N0QmxvY2s1XCIsXG4gIH0sXG4gIHdoeUJlY29tZUhvc3RCbG9jazY6IHtcbiAgICBpZDogXCJhcHAud2h5QmVjb21lSG9zdEJsb2NrNlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldoeSBCZWNvbWUgSG9zdCBCbG9jayA2XCIsXG4gICAgZGVzY3JpcHRpb246IFwid2h5QmVjb21lSG9zdEJsb2NrNlwiLFxuICB9LFxuICB3aHlCZWNvbWVIb3N0QmxvY2s3OiB7XG4gICAgaWQ6IFwiYXBwLndoeUJlY29tZUhvc3RCbG9jazdcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJXaHkgQmVjb21lIEhvc3QgQmxvY2sgN1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndoeUJlY29tZUhvc3RCbG9jazdcIixcbiAgfSxcbiAgY29udGVudE1hbmFnZW1lbnRTeXN0ZW06IHtcbiAgICBpZDogXCJhcHAuY29udGVudE1hbmFnZW1lbnRTeXN0ZW1cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDb250ZW50IE1hbmFnZW1lbnQgU3lzdGVtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY29udGVudE1hbmFnZW1lbnRTeXN0ZW1cIixcbiAgfSxcbiAgZWRpdFBhZ2VEZXRhaWxzOiB7XG4gICAgaWQ6IFwiYXBwLmVkaXRQYWdlRGV0YWlsc1wiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkVkaXQgUGFnZSBEZXRhaWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZWRpdFBhZ2VEZXRhaWxzXCIsXG4gIH0sXG4gIHN0YXRpY1BhZ2VNYW5hZ2VtZW50OiB7XG4gICAgaWQ6IFwiYXBwLnN0YXRpY1BhZ2VNYW5hZ2VtZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RhdGljIFBhZ2UgTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0YXRpY1BhZ2VNYW5hZ2VtZW50XCIsXG4gIH0sXG4gIGFkbWluQ2F0ZWdvcnk6IHtcbiAgICBpZDogXCJhcHAuYWRtaW5DYXRlZ29yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNhdGVnb3J5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2F0ZWdvcnlcIixcbiAgfSxcbiAgZmllbGRDYXRlZ29yeToge1xuICAgIGlkOiBcImFwcC5maWVsZENhdGVnb3J5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmllbGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXRlZ29yeVwiLFxuICB9LFxuICBmYWlsZWQ6IHtcbiAgICBpZDogXCJhcHAuZmFpbGVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmFpbGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmFpbGVkIFBheW91dCBzdGF0dXNcIixcbiAgfSxcbiAgbWFuYWdlbWVudFJldmlld3M6IHtcbiAgICBpZDogXCJhcHAubWFuYWdlbWVudFJldmlld3NcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJNYW5hZ2VtZW50IFJldmlld3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJtYW5hZ2VtZW50UmV2aWV3c1wiLFxuICB9LFxuICBwYXlvdXREZXRhaWxzOiB7XG4gICAgaWQ6IFwiYXBwLnBheW91dERldGFpbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQYXlvdXQgRGV0YWlsc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcInBheW91dERldGFpbHNcIixcbiAgfSxcbiAgVXBsb2FkSW1hZ2U6IHtcbiAgICBpZDogXCJhcHAuVXBsb2FkSW1hZ2VcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVcGxvYWQgSW1hZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVcGxvYWQgSW1hZ2VcIixcbiAgfSxcbiAgZWRpdFBvcHVsYXJMb2NhdGlvbjoge1xuICAgIGlkOiBcImFwcC5lZGl0UG9wdWxhckxvY2F0aW9uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRWRpdCBQb3B1bGFyIExvY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRWRpdCBQb3B1bGFyIExvY2F0aW9uXCIsXG4gIH0sXG4gIHJlc2VydmF0aW9uRGV0YWlsczoge1xuICAgIGlkOiBcImFwcC5yZXNlcnZhdGlvbkRldGFpbHNcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXNlcnZhdGlvbiBEZXRhaWxzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzZXJ2YXRpb24gRGV0YWlscyBIZWFkZXJcIixcbiAgfSxcbiAgdXJsUmVxdWlyZWQ6IHtcbiAgICBpZDogXCJhcHAudXJsUmVxdWlyZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJVUkwgaXMgcmVxdWlyZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZXNlcnZhdGlvbiBEZXRhaWxzIEhlYWRlclwiLFxuICB9LFxuICBjYWxlbmRhckFkZHJlc3M6IHtcbiAgICBpZDogXCJhcHAuY2FsZW5kYXJBZGRyZXNzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGFzdGUgQ2FsZW5kYXIgQWRkcmVzcyAoVVJMKSBoZXJlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiY2FsZW5kYXJBZGRyZXNzXCIsXG4gIH0sXG4gIGNhbGVuZGFyQ3VzdG9tTmFtZToge1xuICAgIGlkOiBcImFwcC5jYWxlbmRhckN1c3RvbU5hbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDdXN0b20gbmFtZSBmb3IgdGhpcyBjYWxlbmRhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImNhbGVuZGFyQ3VzdG9tTmFtZVwiLFxuICB9LFxuICBtYXhQcmljZUdyZWF0ZXI6IHtcbiAgICBpZDogXCJhcHAubWF4UHJpY2VHcmVhdGVyXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWF4aW11bSBQcmljZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBNaW5pbXVtIFByaWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwibWF4UHJpY2VHcmVhdGVyXCIsXG4gIH0sXG4gIHBheW91dFNvcnROdW1iZXI6IHtcbiAgICBpZDogXCJhcHAucGF5b3V0U29ydE51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlNvcnQgTnVtYmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU29ydCBOdW1iZXIgZm9yIFVuaXRlZCBLaW5nZG9tKEdCKVwiLFxuICB9LFxuICBwYXlvdXRJbnZhbGlkU29ydE51bWJlcjoge1xuICAgIGlkOiBcImFwcC5wYXlvdXRJbnZhbGlkU29ydE51bWJlclwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludmFsaWQgc29ydCBudW1iZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIHNvcnQgbnVtYmVyXCIsXG4gIH0sXG4gIHN0cmlwZVB1Ymxpc2hhYmxlS2V5OiB7XG4gICAgaWQ6IFwiYXBwLnN0cmlwZVB1Ymxpc2hhYmxlS2V5XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiU3RyaXBlIFB1Ymxpc2hhYmxlIEtleVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0cmlwZSBQdWJsaXNoYWJsZSBLZXlcIixcbiAgfSxcbiAgc3VibWl0Rm9yVmVyaWZpY2F0aW9uOiB7XG4gICAgaWQ6IFwiYXBwLnN1Ym1pdEZvclZlcmlmaWNhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1Ym1pdCBmb3IgdmVyaWZpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3VibWl0IFZlcmlmaWNhdGlvbiBidXR0b25cIixcbiAgfSxcbiAgc3VibWl0Rm9yQXBwZWFsOiB7XG4gICAgaWQ6IFwiYXBwLnN1Ym1pdEZvckFwcGVhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1Ym1pdCBmb3IgYXBwZWFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3VibWl0IEFwcGVhbCBidXR0b25cIixcbiAgfSxcbiAgd2FpdGluZ0ZvckFkbWluOiB7XG4gICAgaWQ6IFwiYXBwLndhaXRpbmdGb3JBZG1pblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIldhaXRpbmcgZm9yIHRoZSBhZG1pbiBhcHByb3ZhbC5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJXYWl0aW5nIEZvciBBZG1pblwiLFxuICB9LFxuICByZXF1aXJlOiB7XG4gICAgaWQ6IFwiYXBwLnJlcXVpcmVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJSZXF1aXJlZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVpcmVkXCIsXG4gIH0sXG4gIG9wdGlvbmFsOiB7XG4gICAgaWQ6IFwiYXBwLm9wdGlvbmFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiT3B0aW9uYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPcHRpb25hbFwiLFxuICB9LFxuICBsaXN0aW5nQXBwcm92YWw6IHtcbiAgICBpZDogXCJhcHAubGlzdGluZ0FwcHJvdmFsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiTGlzdGluZyBSZXF1ZXN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTGlzdGluZyBSZXF1ZXN0XCIsXG4gIH0sXG4gIHJlYWR5Rm9yQXBwcm92YWw6IHtcbiAgICBpZDogXCJhcHAucmVhZHlGb3JBcHByb3ZhbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgbGlzdGluZyBpcyBzdWJtaXR0ZWQgZm9yIHZlcmlmaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlYWR5IEZvciBBcHByb3ZhbFwiLFxuICB9LFxuICByZWFkeUZvclZlcmlmaWNhdGlvbjoge1xuICAgIGlkOiBcImFwcC5yZWFkeUZvclZlcmlmaWNhdGlvblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIllvdXIgTGlzdGluZyBpcyByZWFkeSBmb3IgdmVyaWZpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhZHkgRm9yIFZlcmlmaWNhdGlvblwiLFxuICB9LFxuICBzdWJtaXR0ZWRPbjoge1xuICAgIGlkOiBcImFwcC5zdWJtaXR0ZWRPblwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlN1Ym1pdHRlZCBPblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN1Ym1pdHRlZE9uXCIsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGlkOiBcImFwcC5hY3Rpb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJBY3Rpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBY3Rpb25cIixcbiAgfSxcbiAgZmF2SWNvbmxvZ29MYWJlbDoge1xuICAgIGlkOiBcImFwcC5mYXZJY29ubG9nb0xhYmVsXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRmF2IEljb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGYXYgSWNvblwiLFxuICB9LFxuICBhcHByb3ZlZDoge1xuICAgIGlkOiBcImFwcC5hcHByb3ZlZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkFwcHJvdmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYXBwcm92ZWRcIixcbiAgfSxcbiAgZGVjbGluZWQ6IHtcbiAgICBpZDogXCJhcHAuZGVjbGluZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJEZWNsaW5lZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlY2xpbmVkXCIsXG4gIH0sXG4gIGRlY2xpbmVkUmVhc29uOiB7XG4gICAgaWQ6IFwiYXBwLmRlY2xpbmVkUmVhc29uXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiRGVjbGluZWQgcmVhc29uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVjbGluZWRSZWFzb25cIixcbiAgfSxcbiAgY29tbWVudDoge1xuICAgIGlkOiBcImFwcC5jb21tZW50XCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ29tbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbW1lbnRcIixcbiAgfSxcbiAgcG5nT25seUxhYmVsOiB7XG4gICAgaWQ6IFwiYXBwLnBuZ09ubHlMYWJlbFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiogcG5nIGltYWdlcyBvbmx5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiKiBwbmcgaW1hZ2VzIG9ubHlcIixcbiAgfSxcbiAgYm9va2luZ0NvbmZpcm1lZDoge1xuICAgIGlkOiBcImFwcC5ib29raW5nQ29uZmlybWVkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiQm9va2luZyBDb25maXJtZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCb29raW5nIENvbmZpcm1lZFwiLFxuICB9LFxuICBkZWNsaW5lQWRtaW46IHtcbiAgICBpZDogXCJhcHAuZGVjbGluZUFkbWluXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhpcyBMaXN0aW5nIGlzIGRlY2xpbmVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVjbGluZUFkbWluXCIsXG4gIH0sXG4gIHdlZWtseVByaWNlRGlzY291bnQ6IHtcbiAgICBpZDogXCJhcHAud2Vla2x5UHJpY2VEaXNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiUgd2Vla2x5IHByaWNlIGRpc2NvdW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwid2Vla2x5UHJpY2VEaXNjb3VudFwiLFxuICB9LFxuICBtb250aGx5UHJpY2VEaXNjb3VudDoge1xuICAgIGlkOiBcImFwcC5tb250aGx5UHJpY2VEaXNjb3VudFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIiUgbW9udGhseSBwcmljZSBkaXNjb3VudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm1vbnRobHlQcmljZURpc2NvdW50XCIsXG4gIH0sXG4gIGhpc3Rvcnk6IHtcbiAgICBpZDogXCJhcHAuaGlzdG9yeVwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhpc3RvcnlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJoaXN0b3J5XCIsXG4gIH0sXG4gIGxpc3RpbmdSZWplY3RlZDoge1xuICAgIGlkOiBcImFwcC5saXN0aW5nUmVqZWN0ZWRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJMaXN0aW5nIFJlamVjdGVkXCIsXG4gICAgZGVzY3JpcHRpb246IFwibGlzdGluZ1JlamVjdGVkXCIsXG4gIH0sXG4gIHJlcXVlc3RzOiB7XG4gICAgaWQ6IFwiYXBwLnJlcXVlc3RzXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUmVxdWVzdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMaXN0aW5nIFJlcXVlc3RzXCIsXG4gIH0sXG4gIGNsaWNrSGVyZXRvVXBsb2FkRmF2SWNvbjoge1xuICAgIGlkOiBcImFwcC5jbGlja0hlcmV0b1VwbG9hZEZhdkljb25cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJDbGljayBoZXJlIHRvIHVwbG9hZCB0aGUgZmF2aWNvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIGhlcmUgdG8gdXBsb2FkIHRoZSBmYXZpY29uXCIsXG4gIH0sXG4gIHBlcnNvbmFsSG9tZToge1xuICAgIGlkOiBcImFwcC5wZXJzb25hbEhvbWVcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQZXJzb25hbCBob21lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUGVyc29uYWwgaG9tZVwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWgvQkE7QUFzL0JBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQVFBO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQVFBO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9