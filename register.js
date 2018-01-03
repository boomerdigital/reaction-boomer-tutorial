import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "boomer",
  name: "boomer",
  autoEnable: true,
  layout: [{
    layout: "boomerLayout",
    workflow: "coreWorkflow",
    theme: "default",
    enabled: true,
    priority: 1 // consider adding this and going over it
  }]
})
