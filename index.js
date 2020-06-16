'use strict'

/**
 * A set of rules we want to declare under `metascraper-logees` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: [
      ({ htmlDom: $, url }) => $('div.availability').text()
    ]
  }
  return rules
}