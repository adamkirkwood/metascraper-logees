'use strict'

/**
 * A set of rules we want to declare under `metascraper-logees` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: ({ htmlDom: $, url }) => $('p.availability').text(),
    quantity: ({ htmlDom: $, url }) => $('div.availability-only').text()
  }
  return rules
}