import React from "react";
import Layout from "../../components/Layout";
import WhyHostsNew from "./WhyHostsNew";

const title = "whyhost";

export default function action() {
  return {
    title,
    component: (
      <Layout>
        <WhyHostsNew title={title} />
      </Layout>
    ),
  };
}
