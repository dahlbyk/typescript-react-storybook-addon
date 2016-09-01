import * as React from "react"; // tslint:disable-line
import addons from "@kadira/storybook-addons";

// import MyPanelAddon from "./MyPanelAddon";

const ADDON_ID = "storybook-addon-mypanel";
const PANEL_ID = `${ADDON_ID}/mypanel-panel`;

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: "MyPanelAddon",
    render: () => (
      // <MyPanelAddon channel={channel} />
      <div style={{ padding: "20px"}}><h4>MyPanelAddon</h4></div>
    ),
  });
});
