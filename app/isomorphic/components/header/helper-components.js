import React from "react";
import PT from "prop-types";
import { Link } from "@quintype/components";

function MenuItem(props) {
  // TODO: Add submenu support
  return props.item.isExternalLink ? (
    <a href={props.item.completeUrl} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
      {props.item.title}
    </a>
  ) : (
    <Link href={props.item.completeUrl} style={{ color: "rgba(0, 0, 0, 0.54)" }}>
      {props.item.title}
    </Link>
  );
}

MenuItem.propTypes = {
  item: PT.shape({
    isExternalLink: PT.bool,
    completeUrl: PT.string,
    title: PT.string
  })
};

export { MenuItem };
