/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { array, object } from "prop-types";
import { Link, ResponsiveImage } from "@quintype/components";

import ItemsCarousel from "react-items-carousel";
import "./storyCarousel.m.css";

function HorizontalStoryCarousel({ stories, collection }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: "0 60px", maxWidth: 800, margin: "0 auto" }}>
      <ItemsCarousel
        gutter={30}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={2}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={true}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {stories.slice(0, 6).map((story, index) => (
          <div
            style={{
              padding: "15px 25px",
              maxWidth: 800,
              margin: "0 auto",
              height: 300,
              width: 280,
              backgroundColor: "skyblue",
              marginBottom: 40,
              paddingRight: 40
            }}
          >
            <Link href={`/${story.slug}`} key={`${index}-${story.id}`}>
              <div>
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
              <div styleName="card-content">
                <h2 styleName="section-name">{story.sections[0].name}</h2>
                <h3 styleName="card-title">{story.headline}</h3>
                <p styleName="author-name"> {story["author-name"]}</p>
              </div>
            </Link>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
}

export function StoryCarousel({ collection, stories }) {
  console.log("collection", collection, "stories", stories);
  return (
    <div>
      <h3 styleName="heading">{collection.name}</h3>
      <div styleName="wrapper">
        <HorizontalStoryCarousel stories={stories} collection={collection} />
        {/* {stories.slice(0, 6).map((story, index) => (
          <HorizontalStoryCarousel story={story} key={`${index}-${story.id}`} />
        ))} */}
      </div>
    </div>
  );
}

StoryCarousel.propTypes = {
  collection: object,
  stories: array
};
