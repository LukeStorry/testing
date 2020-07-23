import React from "react"
import PropTypes from "prop-types"

const IndexPageTemplate = ({ groups }) => (
  <>
    <div className="columns is-multiline">
      {groups.map((group, id) => (
        <>
          <h2 className="title" key={id}>
            {group.title}
          </h2>
          {group.subgroups.map((subgroup, id) => (
            <p className="subtitle" key={id}>
              {subgroup.subtitle}
            </p>
          ))}
        </>
      ))}
    </div>
  </>
)

IndexPageTemplate.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subgroups: PropTypes.arrayOf(
        PropTypes.shape({
          subtitle: PropTypes.string,
        })
      ),
    })
  ),
}

export default IndexPageTemplate
