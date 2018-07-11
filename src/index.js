import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";

mapboxgl.accessToken =
  "pk.eyJ1Ijoid291dGVybGFuZHV5ZHQiLCJhIjoiY2lwMTEyMnJ0MDBncXZrbTI3OHNkdXNhZCJ9.ygWvm76D7cOx3Ev3VLDYjw";

const MapElement = styled.div`
  height: 100vh;
`;

class Application extends React.Component {
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
    return <MapElement innerRef={el => (this.mapContainer = el)} />;
  }
}

ReactDOM.render(<Application />, document.getElementById("app"));
