import React from "react";
import { Link } from "@quintype/components";
import PT from "prop-types";
import "./story-grid.m.css";

function StoryGridStoryItem(props) {
  return (
    <div>
      <Link href={`/${props.story.slug}`} styleName="parent">
        {/* styleName="story-grid-item" */}
        {/* <figure className="qt-image-16x9" styleName="story-grid-item-image">
          <ResponsiveImage
            slug={props.story["hero-image-s3-key"]}
            metadata={props.story["hero-image-metadata"]}
            aspectRatio={[16, 9]}
            defaultWidth={480}
            widths={[250, 480, 640]}
            sizes="( max-width: 500px ) 98vw, ( max-width: 768px ) 48vw, 23vw"
            imgParams={{ auto: ["format", "compress"] }}
            eager={props.position < 2 ? "above-fold" : "below-fold"}
          />
        </figure> */}
        <div styleName="number">0{props.position + 1}</div>
        <div styleName="child">
          <h2 styleName="title">{props.story.headline}</h2>
          <p styleName="author-name">{props.story["author-name"]}</p>
          <div
            style={{
              fontWeight: "400",
              fontFamily: "medium-content-sans-serif-font",
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.54)",
              marginTop: -10
            }}
          >
            Sept. 27 . 6 min read *
          </div>
        </div>
      </Link>
    </div>
  );
}

const storyPropType = PT.shape({
  id: PT.string,
  slug: PT.string,
  "hero-image-s3-key": PT.string,
  "hero-image-metadata": PT.object,
  headline: PT.string,
  "author-name": PT.string
});

StoryGridStoryItem.propTypes = {
  story: storyPropType,
  position: PT.integer
};

export function StoryGrid(props) {
  return (
    <div>
      {props.stories.map((story, index) => (
        <StoryGridStoryItem story={story} key={`${index}-${story.id}`} position={index} />
      ))}
    </div>
  );
}

StoryGrid.propTypes = {
  stories: PT.arrayOf(storyPropType)
};
