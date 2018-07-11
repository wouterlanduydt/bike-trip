import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import Map from "./Map";
import Tooltip from "./Tooltip";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5.12,
      lat: 51.5,
      zoom: 7.4
    };
  }

  tooltipContainer;

  setTooltip(features) {
    features.map(
      feature => feature.layer.id.startsWith("day") && console.log(feature)
    );
    if (features.length) {
      ReactDOM.render(
        React.createElement(Tooltip, {
          features
        }),
        this.tooltipContainer
      );
    } else {
      this.tooltipContainer.innerHTML = "";
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement("div");

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

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [0, 0]
    })
      .setLngLat([0, 0])
      .addTo(map);

    map.on("mousemove", e => {
      const features = map.queryRenderedFeatures(e.point);
      tooltip.setLngLat(e.lngLat);
      map.getCanvas().style.cursor = features.length ? "pointer" : "";
      this.setTooltip(features);
    });
  }

  render() {
    return <Map innerRef={el => (this.mapContainer = el)} />;
  }
}

export default MapContainer;
