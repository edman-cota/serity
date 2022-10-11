import React from "react";
import { motion } from "framer-motion";
import Activity from "./Activity";

interface DataProps {
  id: string;
  username: string;
  content: string;
  description: string;
  type: number;
  priority: number;
  due: string;
  createdAt: string;
}

const TimelineBody = ({ activities }: any) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div className="timeline">
      <motion.ul variants={variants} className="timeline-body">
        {activities &&
          activities
            .slice(0)
            .reverse()
            .map((data: DataProps) => (
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
  );
};

export default TimelineBody;