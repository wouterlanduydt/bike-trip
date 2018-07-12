import React, { Component } from "react";
import ReactDOM from "react-dom";
import { inject, observer } from "mobx-react";
import mapboxgl from "mapbox-gl";
import Map from "./Map";
import Tooltip from "./Tooltip";
import ShowTotal from "../ShowTotal";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5.16,
      lat: 51.5,
      zoom: 7.4
    };
    this.handleShowTotalClick = this.handleShowTotalClick.bind(this);
  }

  tooltipContainer;

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/wouterlanduydt/cjjfuz86t5lhf2rque6hl4o2l",
      center: [lng, lat],
      zoom
    });

    this.tooltipContainer = document.createElement("div");

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [0, 30]
    })
      .setLngLat([0, 0])
      .addTo(this.map);

    this.map.on("mousemove", e => {
      const features = this.map.queryRenderedFeatures(e.point, {
        layers: ["day_01", "day_02", "day_03", "day_04", "day_05", "day_06"]
      });
      tooltip.setLngLat(e.lngLat);
      this.map.getCanvas().style.cursor = features.length ? "pointer" : "";
      this.setTooltip(features[0]);
    });

    this.map.on("click", e => {
      const features = this.map.queryRenderedFeatures(e.point, {
        layers: ["day_01", "day_02", "day_03", "day_04", "day_05", "day_06"]
      });
      features.length && this.setStats(features[0], this.map, e);
    });
  }

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

  setStats(feature, map, e) {
    const { etapesStore } = this.props;
    const { etapesData, setEtapeStats } = etapesStore;
    map.setZoom(8);
    map.panTo(e.lngLat);
    const stats = etapesData.find(
      etape => etape.id === feature.properties.number
    );
    stats && setEtapeStats(stats);
  }

  handleShowTotalClick = () => {
    const { lng, lat, zoom } = this.state;
    const { etapesStore } = this.props;
    etapesStore.showTotal();
    this.tooltipContainer.innerHTML = "";
    this.map.setZoom(zoom);
    this.map.panTo({ lng: lng, lat: lat });
  };

  render() {
    return (
      <div>
        <ShowTotal onClick={() => this.handleShowTotalClick()} />
        <Map innerRef={el => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default inject(`etapesStore`)(observer(MapContainer));
