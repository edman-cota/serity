import React from 'react'
const queryAttr = "data-rbd-drag-handle-draggable-id";


export const getDraggedDom = (draggableId) => {
  const domQuery = `[${queryAttr}='${draggableId}']`
  const draggedDOM = document.querySelector(domQuery);

  return draggedDOM;
}

export const getClientY = (draggedDOM, sourceIndex) => {
  const clientY =
    parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
    [...draggedDOM.parentNode.children]
      .slice(0, sourceIndex)
      .reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0);

  return clientY;
}

export const getClientX = (draggedDOM) => {
  const clientX = 
    parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)
  
  return clientX;
}

export const getPlaceholderProps = (draggedDOM, event) => {
  const { clientHeight, clientWidth } = draggedDOM;
  const sourceIndex = event.source.index;

  const clientY = getClientY(draggedDOM, sourceIndex);
  const clientX = getClientX(draggedDOM);

  return {
    clientHeight,
    clientWidth,
    clientY,
    clientX,
  }
}

export const getOnDragUpdateClientY = (draggedDOM, updatedArray, destinationIndex) => {
  const clientY = 
    parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
    updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
      const style = curr.currentStyle || window.getComputedStyle(curr);
      const marginBottom = parseFloat(style.marginBottom);
      return total + curr.clientHeight + marginBottom;
    }, 0);

    return clientY;
}

export const getOnDragUpdateClientX = (draggedDOM) => {
  const clientX =
    parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft);
  
  return clientX;
}

export const getOnDragUpdateArray = (draggedDOM, event, destinationIndex) => {
  const sourceIndex = event.source.index;

  const childrenArray = [...draggedDOM.parentNode.children];
  const movedItem = childrenArray[sourceIndex];
  childrenArray.splice(sourceIndex, 1);

  const updatedArray = [
    ...childrenArray.slice(0, destinationIndex),
    movedItem,
    ...childrenArray.slice(destinationIndex + 1),
  ];

  return updatedArray;
}

export const getOnUpdatePlaceholderProps = (draggedDOM, event) => {
  const { clientHeight, clientWidth  } = draggedDOM;
  const destinationIndex = event.destination.index;

  const updatedArray = getOnDragUpdateArray(draggedDOM, event, destinationIndex);

  const clientY = getOnDragUpdateClientY(draggedDOM, updatedArray, destinationIndex);
  const clientX = getOnDragUpdateClientX(draggedDOM);

  return {
    clientHeight,
    clientWidth,
    clientY,
    clientX,
  }
}


