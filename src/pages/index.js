import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Marker, useMap, Popup } from "react-leaflet";
import { popupContent, popupHead, popupText } from "components/popupStyles";
import L from "leaflet";

import treeMarker from "../assets/images/custom-marker/tree-marker.png";
import markerShadow from "../assets/images/custom-marker/marker-shadow.png";

import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
import Snippet from "components/Snippet";
import LetterPopup from "components/LetterPopup";

import { useLetters } from "hooks";

const LOCATION = {
  lat: 0,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2.3;

/**
const popupContentGatsby = `
  <div class="popup-gatsby">
    <div class="popup-gatsby-image">
      <img class="gatsby-astronaut" src=${gatsby_astronaut} />
    </div>
    <div class="popup-gatsby-content">
      <h1>Gatsby Leaflet Starter</h1>
      <p>Welcome to your new Gatsby site. Now go build something great!</p>
    </div>
  </div>
`;
 */
/**
 * MapEffect
 * @description This is an example of creating an effect used to zoom in and set a popup on load
 */

const MapEffect = ({ markerRef }) => {
  const map = useMap();

  return null;
};

const IndexPage = () => {
  const { letters } = useLetters();
  const [selectedLetter, setSelectedLetter] = useState(null);

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "Mapbox",
    zoom: DEFAULT_ZOOM,
  };

  let parkIcon;
  // Ref for icon: https://leafletjs.com/reference-1.7.1.html#icon
  // Ref for why build failed: https://stackoverflow.com/a/64112971
  if (typeof window !== "undefined") {
    parkIcon = new L.Icon({
      iconUrl: treeMarker,
      iconAnchor: [17, 29],
      iconSize: [32, 32],
      popupAnchor: [0, -35],
      shadowUrl: markerShadow,
      shadowAnchor: [13, 36],
    });
  }

  return (
    <Layout pageName="home">
      <Helmet>
        <title>How is there? Here...</title>
      </Helmet>

      <Map {...mapSettings}>
        {letters.map((letter) => {
          const { id, location } = letter;
          const { latitude, longitude } = location;
          const position = [latitude, longitude];

          return (
            // basically Marker is react component for L.marker
            // so it has the properties (options) of L.marker
            // https://leafletjs.com/reference-1.7.1.html#marker-option
            <Marker
              key={id}
              position={position}
              icon={parkIcon}
              eventHandlers={{
                click: () => setSelectedLetter(letter),
              }}
            ></Marker>
          );
        })}
      </Map>

      <LetterPopup letter={selectedLetter} setLetter={setSelectedLetter} />
    </Layout>
  );
};

export default IndexPage;
