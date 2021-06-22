import React, { useEffect } from "react";
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

import { useLetters } from "hooks";

const LOCATION = {
  lat: 0,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2.5;

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

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "Mapbox",
    zoom: DEFAULT_ZOOM,
  };

  // Ref: https://leafletjs.com/reference-1.7.1.html#icon
  const parkIcon = new L.Icon({
    iconUrl: treeMarker,
    iconSize: [30, 30],
    popupAnchor: [0, -15],
    shadowUrl: markerShadow,
    shadowAnchor: [13, 28],
  });

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Barena Bianca Map</title>
      </Helmet>

      <Map {...mapSettings}>
        {letters.map((letter) => {
          const { id, location, title, text } = letter;
          const { latitude, longitude } = location;
          const position = [latitude, longitude];

          return (
            // basically Marker is react component for L.marker
            // so it has the properties (options) of L.marker
            // https://leafletjs.com/reference-1.7.1.html#marker-option
            <Marker key={id} position={position} icon={parkIcon}>
              <Popup className="request-popup">
                <div style={popupContent}>
                  <div style={popupHead}> {title} </div>
                  <img
                    src="https://www.cheapflights.com/news/wp-content/uploads/sites/136/2019/04/landscape1.jpg"
                    width="500"
                    height="320"
                    alt="no img"
                  />
                  <span style={popupText}> {text} </span>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </Layout>
  );
};

export default IndexPage;
