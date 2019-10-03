import React from "react";
import { array, object } from "prop-types";
import { Link, ResponsiveImage } from "@quintype/components";
import { FaBookmark, FaChevronRight } from "react-icons/fa";
import { StoryGrid } from "../story-grid";
import "./three-col-grid.m.css";

// eslint-disable-next-line react/prop-types
function HorizontalStoryCard({ story }) {
  return (
    <Link href={`/${story.slug}`} styleName="horizontal-card">
      <div styleName="card-content">
        <h2 styleName="section-name">{story.sections[0].name}</h2>
        <h3 styleName="card-title">{story.headline}</h3>
        <div styleName="abcd">
          <div>
            <p styleName="author-name">{story["author-name"]}</p>
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
          <div>
            <FaBookmark style={{ color: " rgba(0,0,0,.15)" }} />
          </div>
        </div>
      </div>
      <div styleName="card-image">
        <figure className="qt-image-16x9">
          <ResponsiveImage
            slug={story["hero-image-s3-key"]}
            metadata={story["hero-image-metadata"]}
            aspectRatio={[16, 9]}
            defaultWidth={480}
            widths={[250, 480, 640]}
            sizes="( max-width: 500px ) 98vw, ( max-width: 768px ) 48vw, 23vw"
          />
        </figure>
      </div>
    </Link>
  );
}

export function ThreeColGrid({ collection, stories }) {
  return (
    <div styleName="parent">
      <div style={{ marginRight: 30 }}>
        <div styleName="header">
          <div styleName="headerChild">
            <h3 styleName="heading">{collection.name}</h3>
          </div>
          <h3 styleName="more">
            MORE <FaChevronRight style={{ height: 12 }} />
          </h3>
        </div>

        <div styleName="wrapper">
          {stories.slice(0, 6).map((story, index) => (
            <HorizontalStoryCard story={story} key={`${index}-${story.id}`} />
          ))}
        </div>
      </div>
      {collection.name === "Getting Started" ? (
        <div>
          <h3 styleName="storyGrid sticky">Popular in GeekyAnts</h3>
          <div styleName="storySticky">
            <StoryGrid stories={stories} />
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

ThreeColGrid.propTypes = {
  collection: object,
  stories: array
};
