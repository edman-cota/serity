import React from 'react'
import { motion } from 'framer-motion'
import Activity from './Activity'
import { TimelineActivity } from '../../models/Activity.model'

interface ActivitiesProps {
  activities: TimelineActivity[]
}

const TimelineBody = ({ activities }: ActivitiesProps) => {
  return (
    <div className='timeline'>
      <motion.ul className='timeline-body'>
        {activities &&
          activities
            .slice(0)
            .reverse()
            .map((data) => (
              <Activity
                key={data.createdAt}
                username={data.username}
                content={data.content}
                description={data.description}
                type={data.type}
                priority={data.priority}
                due={data.due}
                createdAt={data.createdAt}
              />
            ))}
      </motion.ul>
    </div>
  )
}

export default TimelineBody
