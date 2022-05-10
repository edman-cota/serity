import React from "react";
import { FormattedMessage } from "react-intl";

interface TypeProps {
  type: number;
}

const Verbose = ({ type }: TypeProps): JSX.Element => {
  switch (type) {
    case 1:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="added" />
        </span>
      );
    case 2:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="set_the_priority_of" />
        </span>
      );
    case 3:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="set_the_due_date_of" />
        </span>
      );
    case 4:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="unset_the_due_date_of" />
        </span>
      );
    case 5:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="completed" />
        </span>
      );
    case 6:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="reopen" />
        </span>
      );
    case 7:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="rename_the_task_to" />
        </span>
      );
    case 8:
      return (
        <span style={{ paddingRight: "7px" }}>
          <FormattedMessage id="edit_description" />
        </span>
      );
    default:
      return <span>default</span>;
  }
};

export default Verbose;
