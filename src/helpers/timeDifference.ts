// previous: miliseconds
export const timeDifference = (previous: number, locale: string): string => {
  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365

  const current = Date.now()
  var elapsed = current - previous

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  if (elapsed < msPerMinute) {
    // return <FormattedMessage id="just_now" />;
    return "just now"
  } else if (elapsed < msPerHour) {
    return rtf.format(-Math.floor(elapsed / msPerMinute), "minutes")
  } else if (elapsed < msPerDay) {
    return rtf.format(-Math.floor(elapsed / msPerHour), "hours")
  } else if (elapsed < msPerMonth) {
    // return Math.round(elapsed / msPerDay) + " days ago";
    return rtf.format(-Math.floor(elapsed / msPerDay), "days")
  } else if (elapsed < msPerYear) {
    // return Math.round(elapsed / msPerMonth) + " months ago";
    return rtf.format(-Math.floor(elapsed / msPerMonth), "months")
  } else {
    // return Math.round(elapsed / msPerYear) + " years ago";
    return rtf.format(-Math.floor(elapsed / msPerYear), "years")
  }
}
