import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { getComponent, registerComponent } from "@reactioncommerce/reaction-components";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";

const BoomerLayout = ({ actionViewIsOpen, structure }) => {
  const { layoutHeader, layoutFooter, template } = structure || {};

  const pageClassName = classnames({
    "page": true,
    "show-settings": actionViewIsOpen
  });

  const headerComponent = layoutHeader && getComponent(layoutHeader);
  const footerComponent = layoutFooter && getComponent(layoutFooter);

  return (
    <div className={pageClassName} id="reactionAppContainer">

      {headerComponent && React.createElement(headerComponent, {})}

      <Blaze template="cartDrawer" className="reaction-cart-drawer" />

      {Template[template] &&
        <main>
          <h1>I am overriding the coreLayout with the boomerLayout</h1>
          <Blaze template={template} />
        </main>}

      {footerComponent && React.createElement(footerComponent, {})}
    </div>
  );
};

BoomerLayout.propTypes = {
  actionViewIsOpen: PropTypes.bool,
  data: PropTypes.object,
  structure: PropTypes.object
};

registerComponent("boomerLayout", BoomerLayout);

export default BoomerLayout;
