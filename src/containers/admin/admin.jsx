import React from "react";
import Dashboard from "./Layout";
import RouterView from "@/routes/adminRouterConfig.js";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
const containerStyle = {
  minHeight: "calc(100vh - 150px)",
};

export default function Admin() {
  return (
    <>
      <Dashboard>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div style={containerStyle}>
            <RouterView />
          </div>
        </MuiPickersUtilsProvider>
      </Dashboard>
    </>
  );
}
