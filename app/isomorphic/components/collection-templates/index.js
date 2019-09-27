import { wrapCollectionLayout, EagerLoadImages } from "@quintype/components";
import { FourColGrid } from "./four-col-grid";
import { TwoColGrid } from "../two-col-grid";
import { StoryCarousel } from "../storyCarousel";
import React from "react";

function wrapEager(f) {
  return function WrapEager(props) {
    if (props.index === 0) {
      return (
        <EagerLoadImages predicate={token => token === "above-fold"}>{React.createElement(f, props)}</EagerLoadImages>
      );
    } else {
      return React.createElement(f, props);
    }
  };
}

export default {
  FourColGrid: wrapEager(wrapCollectionLayout(FourColGrid)),
  TwoColGrid: wrapEager(wrapCollectionLayout(TwoColGrid)),
  StoryCarousel: wrapEager(wrapCollectionLayout(StoryCarousel)),
  defaultTemplate: wrapEager(wrapCollectionLayout(StoryCarousel))
};
