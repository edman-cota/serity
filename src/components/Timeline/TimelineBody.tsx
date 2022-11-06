import { motion } from 'framer-motion'
import Activity from './Activity'
import { Activity as ActivityProps } from '../../types/activity.model'

interface ActivitiesProps {
  activities: ActivityProps[]
}

const TimelineBody = ({ activities }: ActivitiesProps) => {
  return (
    <div className='timeline'>
      <motion.ul className='timeline-body'>
        {activities &&
          activities
            .slice(0)
            .reverse()
            .map((data: ActivityProps) => (
              <Activity
                key={data.id}
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
