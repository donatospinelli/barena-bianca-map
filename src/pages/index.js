import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Marker, useMap, Popup } from "react-leaflet";
import { popupContent, popupHead, popupText } from "components/popupStyles";

import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
import Snippet from "components/Snippet";

import { useLetters } from 'hooks';


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

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Barena Bianca Map</title>
      </Helmet>

      <Map {...mapSettings}>
        {letters.map(letter => {
          const {id, location, title, text} = letter;
          const {latitude, longitude} = location;
          const position = [latitude, longitude];

            return(
              <Marker key={id} position={position}>
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
            )
          })}
      </Map>
    </Layout>
  );
};

export default IndexPage;
