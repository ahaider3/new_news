import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

class WorldMap extends Component {
  constructor() {
    super()
    this.state = {
      worldData: [],
    }
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/d3/d3.github.com/master/world-110m.v1.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worldData => {
          this.setState({
            worldData: feature(worldData, worldData.objects.countries).features,
          })
        })
      })
  }
  render() {

    var points = []
    var num_points = 100;
    var max_long = 180;
 
    for (var i = 0; i < num_points; i ++){
       points.push([(Math.random() * 360) -180, (Math.random() * 180) -90, Math.random() * 10]);
    }
    return (
      <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
        <g className="countries">
          {
            this.state.worldData.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                className="country"
                fill={ `rgba(38,50,56,${1 / this.state.worldData.length * i})` }
                stroke="#FFFFFF"
                strokeWidth={ 0.5 }
              />
            ))
          }
        </g>
        <g className="markers">
         {
          points.map((point, ind) => (
          <circle
            cx={ this.projection()([point[0],point[1]])[0] }
            cy={ this.projection()([point[0],point[1]])[1] }
            r={ point[2] }
            fill="#E91E63"
            className="marker"
          />
        ))
        }
        </g>
      </svg>
    )
  }
}

export default WorldMap

