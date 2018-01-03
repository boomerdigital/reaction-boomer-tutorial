import { Session } from "meteor/session";

Session.set("DEFAULT_LAYOUT", "boomerLayout");
Session.set("INDEX_OPTIONS", {
  layout: "boomerLayout",
  template: "products",
  layoutHeader: "NavBar",
  layoutFooter: "Footer",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});
