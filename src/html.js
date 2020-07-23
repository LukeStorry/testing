import React, { Component } from "react"

export default class HTML extends Component {
  render() {
    return (
      <html>
        <head>{this.props.headComponents}</head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
