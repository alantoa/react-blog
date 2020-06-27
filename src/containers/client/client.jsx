import React from "react";
import Layout from "./Layout";
import RouterView from "routes/clientRouterView";

export default function Client() {
  return (
    <>
      <Layout>
        <RouterView />
      </Layout>
    </>
  );
}
