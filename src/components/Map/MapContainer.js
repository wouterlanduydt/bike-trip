import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import Map from "./Map";
import Tooltip from "./Tooltip";
import etapes from "../../assets/data/etapes";

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
    features.map(feature =>
      console.log(etapes.find(etape => etape.id === feature.properties.number))
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

    this.tooltipContainer = document.createElement("div");

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/wouterlanduydt/cjjfuz86t5lhf2rque6hl4o2l",
      center: [lng, lat],
      zoom
    });

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [0, 0]
    })
      .setLngLat([0, 0])
      .addTo(map);

    map.on("mousemove", e => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["day_01", "day_02", "day_03", "day_04", "day_05", "day_06"]
      });
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
