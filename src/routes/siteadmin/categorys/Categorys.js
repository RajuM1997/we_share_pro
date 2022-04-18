// import React from "react";

// Style
// import withStyles from "isomorphic-style-loader/lib/withStyles";
// Component
// import Category from "../../../components/siteadmin/Category/Category";

// class Categorys extends React.Component {
//   render() {
//     return <div>hello</div>;
//   }
// }

// export default Categorys;
// import React from "react";
// import AdminLayout from "../../../components/Layout/AdminLayout";
// import Category from "../../../components/siteadmin/Category/Category";
// // import EditPopularLocation from "./EditPopularLocation";
// import { restrictUrls } from "../../../helpers/adminPrivileges";
// import EditPopularLocation from "../editPopularLocation/EditPopularLocation";

// const title = "Edit Popular Location";

// export default async function action({ store, params }) {
//   // From Redux Store
//   let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
//   let adminPrivileges =
//     store.getState().adminPrevileges.privileges &&
//     store.getState().adminPrevileges.privileges.privileges;

//   if (!isAdminAuthenticated) {
//     return { redirect: "/siteadmin/login" };
//   }

//   // Admin restriction
//   if (!restrictUrls("/siteadmin/edit/popularlocation/", adminPrivileges)) {
//     return { redirect: "/siteadmin" };
//   }

//   const locationId = Number(params.locationId);

//   return {
//     title,
//     component: (
//       <AdminLayout>
//         {/* <EditPopularLocation title={title} locationId={locationId} /> */}
//         <Category />
//       </AdminLayout>
//     ),
//   };
// }
import React, { Component } from "react";

class Categorys extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default Categorys;
