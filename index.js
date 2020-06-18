'use strict'

const { memoizeOne } = require('@metascraper/helpers')
const { parse } = require('tldts')

const regex = /unavailable/g;

const isValidUrl = memoizeOne(
  ({ url }) => getDomainWithoutSuffix(url) === 'logees'
)

/**
 * A set of rules we want to declare under `metascraper-logees` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: ({ htmlDom: $, url }) => (($('p.availability').text().match(regex) === null) || false),
    quantity: ({ htmlDom: $, url }) => (parseInt($('div.availability-only').text()) || 0)
  }

  rules.test = isValidUrl

  return rules
}

module.exports.isValidUrl = isValidUrl