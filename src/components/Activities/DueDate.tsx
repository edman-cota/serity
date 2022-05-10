import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

interface DueProps {
  due: string;
}

const DueDate = ({ due }: DueProps): JSX.Element => {
  return (
    <span>
      <span style={{ paddingRight: "7px" }}>
        <FormattedMessage id="to" />
      </span>
      <FormattedDate value={due} month="short" day="2-digit" />
    </span>
  );
};

export default DueDate;
