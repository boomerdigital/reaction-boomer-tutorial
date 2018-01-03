import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "boomer",
  name: "boomer",
  autoEnable: true,
  layout: [{
    layout: "boomerLayout",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "products",
      layoutHeader: "NavBar",
      layoutFooter: "Footer",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  },
  {
    layout: "boomerLayout",
    workflow: "coreWorkflow",
    theme: "default",
    enabled: true,
    structure: {
      template: "products",
      layoutHeader: "NavBar",
      layoutFooter: "Footer",
      notFound: "productNotFound",
      dashboardControls: "dashboardControls",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
})
