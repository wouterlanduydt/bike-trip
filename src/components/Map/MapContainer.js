import React, { Component } from "react";
import ReactDOM from "react-dom";
import { inject, observer } from "mobx-react";
import mapboxgl from "mapbox-gl";
import Map from "./Map";
import Tooltip from "./Tooltip";
import etapes from "../../assets/data/etapes";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5.16,
      lat: 51.5,
      zoom: 7.4
    };
  }

  tooltipContainer;

  setTooltip(feature) {
    feature
      ? ReactDOM.render(
          React.createElement(Tooltip, {
            feature
          }),
          this.tooltipContainer
        )
      : (this.tooltipContainer.innerHTML = "");
  }

  setStats(feature) {
    const { etapesStore } = this.props;
    const stats = etapes.find(etape => etape.id === feature.properties.number);
    stats && etapesStore.setEtapeStats(stats);
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
      offset: [0, 30]
    })
      .setLngLat([0, 0])
      .addTo(map);

    map.on("mousemove", e => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["day_01", "day_02", "day_03", "day_04", "day_05", "day_06"]
      });
      tooltip.setLngLat(e.lngLat);
      map.getCanvas().style.cursor = features.length ? "pointer" : "";
      this.setTooltip(features[0]);
    });

    map.on("click", e => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["day_01", "day_02", "day_03", "day_04", "day_05", "day_06"]
      });
      features.length && this.setStats(features[0]);
    });
  }

  render() {
    return <Map innerRef={el => (this.mapContainer = el)} />;
  }
}

export default inject(`etapesStore`)(observer(MapContainer));
