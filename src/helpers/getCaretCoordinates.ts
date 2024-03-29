const getCaretCoordinates = (fromStart = true) => {
  let x = 0,
    y = 0
  const isSupported = typeof window.getSelection !== 'undefined'
  if (isSupported) {
    const selection = window.getSelection()
    if (selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0).cloneRange()
      range.collapse(true)
      const rect = range.getClientRects()[0]
      if (rect) {
        x = rect.left
        y = rect.top
      }
    }
  }
  return { x, y }

  // let x, y
  // const isSupported = typeof window.getSelection !== 'undefined'
  // if (isSupported) {
  //   const selection = window.getSelection()
  //   if (selection.rangeCount !== 0) {
  //     const range = selection.getRangeAt(0).cloneRange()
  //     range.collapse(fromStart ? true : false)
  //     const rect = range.getClientRects()[0]
  //     if (rect) {
  //       x = rect.left
  //       y = rect.top
  //     }
  //   }
  // }
  // return { x, y }
}

export default getCaretCoordinates
