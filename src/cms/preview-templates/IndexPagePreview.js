import React from "react"
import PropTypes from "prop-types"
import IndexPageTemplate from "../../components/templates/IndexPageTemplate"

const IndexPagePreview = ({ entry }) => {
  const entryGroups = entry.getIn(["data", "groups"])
  const groups = entryGroups ? entryGroups.toJS() : []

  return <IndexPageTemplate groups={groups} />
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
