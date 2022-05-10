/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/self-closing-comp */
import React from "react";
import "firebase/database";
import "./item-completed.scss";

import RenderStatus from "../RenderStatus/RenderStatus";

const ItemCompleted = (props) => (
  <li className="tree-item-completed">
    <div className="tree-row">
      <div className="tree-row-front">
        <RenderStatus taskId={props.taskId} completed={props.completed} />
      </div>
      <div className="tree-row-content">
        <div className="task-menu-bar"></div>
        <div className="task-name-wrapper">
          <div className="task-name-frame">
            <div className="task-name-frame-border">
              <span className="task-name-completed">{props.taskName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default ItemCompleted;
