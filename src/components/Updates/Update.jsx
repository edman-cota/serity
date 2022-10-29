/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import PropTypes from "prop-types"
import { Flex, Text } from "@chakra-ui/react"
import { BsCheck2 } from "react-icons/bs"

const Update = ({ data }) => (
  <div className="timeline-item">
    <Flex alignItems="center" w="100%">
      <Text className="time" bg="#36B37E">
        <BsCheck2 />
      </Text>

      <div className="content">
        <div className="date-container">
          <p className="date">
            🔥
            {data.date}
          </p>
          {data.isLatest ? <p className="latest">LATEST</p> : null}
        </div>
        {data.lessons.map((lesson) => (
          <p key={lesson.id} className="text">
            -{lesson}
          </p>
        ))}
      </div>
    </Flex>
  </div>
)

Update.propTypes = {
  data: PropTypes.element,
}

Update.defaultProps = {
  data: {},
}

export default Update
