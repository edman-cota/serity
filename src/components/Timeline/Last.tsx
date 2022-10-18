import Priority from "./Priority";
import DueDate from "./DueDate";

interface Props {
  type: number;
  priority: number;
  due: string;
}

const Last = ({ type, priority, due }: Props) => {
  switch (type) {
    case 2:
      return <Priority priority={priority} />;
    case 3:
      return <DueDate due={due} />;
    default:
      return null;
  }
};

export default Last;
