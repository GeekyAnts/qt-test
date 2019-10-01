/* eslint-disable react/prop-types */
import React from "react";
import { ResponsiveImage, StoryElement } from "@quintype/components";

function StoryCard(props) {
  return (
    <div style={{ marginTop: 50 }}>
      {props.card["story-elements"].map(element => (
        <div
          key={element.id}
          style={{
            fontSize: 21,
            fontFamily: "medium-content-serif-font",
            lineHeight: 1.58,
            color: "rgba(0, 0, 0, 0.84)",
            fontWeight: "400"
          }}
        >
          <StoryElement element={element} key={element.id} story={props.story} />
        </div>
      ))}
    </div>
  );
}

function BlankStoryTemplate(props) {
  return (
    <div className="blank-story" style={{ width: "70%", marginLeft: 155 }}>
      <hr style={{ width: "100%", marginBottom: 30 }} />
      <figure className="blank-story-image qt-image-16x9">
        <ResponsiveImage
          slug={props.story["hero-image-s3-key"]}
          metadata={props.story["hero-image-metadata"]}
          aspectRatio={[16, 9]}
          defaultWidth={480}
          widths={[250, 480, 640]}
          imgParams={{ auto: ["format", "compress"] }}
        />
      </figure>

      <p style={{ fontWeight: "400", fontFamily: "medium-content-title-font", fontSize: 40 }}>{props.story.headline}</p>
      <div style={{ marginTop: -25 }}>
        <div style={{ height: 40, width: 40, backgroundColor: "black", borderRadius: "50%" }} />
        <div style={{ marginTop: -35, marginLeft: 50 }}>
          <span
            style={{
              fontWeight: "400",
              fontFamily: "medium-content-sans-serif-font",
              fontSize: 16,
              color: "rgba(0, 0, 0, 0.84)"
            }}
          >
            {props.story["author-name"]}
          </span>

          <button
            style={{
              marginLeft: 8,
              borderColor: "black",
              padding: 4,
              fontSize: 10,
              borderRadius: 4,
              fontFamily: "medium-content-sans-serif-font",
              fontWeight: "initial"
            }}
          >
            FOLLOW
          </button>
        </div>
      </div>
      <span
        style={{
          marginLeft: 50,
          fontWeight: "400",
          fontFamily: "medium-content-sans-serif-font",
          fontSize: 15,
          color: "rgba(0, 0, 0, 0.54)"
        }}
      >
        Sept. 27 . 6 min read
      </span>
      {props.story.cards.map(card => (
        <StoryCard key={card.id} card={card} story={props.story} />
      ))}
      <div className="space-before-next-story" style={{ minHeight: 100 }} />
    </div>
  );
}

function BlankStory(props) {
  return (
    <div className="story-grid">
      <BlankStoryTemplate story={props.story} />
    </div>
  );
}

export { BlankStory };
