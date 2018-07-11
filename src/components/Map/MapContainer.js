import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Map from "./Map";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5.12,
      lat: 51.5,
      zoom: 8.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/wouterlanduydt/cjjfuz86t5lhf2rque6hl4o2l",
      center: [lng, lat],
      zoom
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return <Map innerRef={el => (this.mapContainer = el)} />;
  }
}

export default MapContainer;
