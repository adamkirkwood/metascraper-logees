'use strict'

const regex = /unavailable/g;

const REGEX_LOGEES_URL = /(https?:\/\/(.+?\.)?logees\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/

const isValidUrl = memoizeOne(({ url }) => REGEX_LOGEES_URL.test(url))

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