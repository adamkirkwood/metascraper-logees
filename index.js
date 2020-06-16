'use strict'

const regex = /unavailable/g;

/**
 * A set of rules we want to declare under `metascraper-logees` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: ({ htmlDom: $, url }) => (($('p.availability').text().match(regex) === null) || false),
    quantity: ({ htmlDom: $, url }) => (parseInt($('div.availability-only').text()) || 0)
  }
  return rules
}