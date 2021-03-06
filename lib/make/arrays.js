/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const make = require('../make')
const random = require('../random')

class arrays extends make {
  static filledArray (fn, limit) {
    let array = []
    let size = limit || random.number(make.number.tiny()) + 1

    for (let i = 0; i < size; i++) {
      let value = random.pick(fn)
      if (value !== undefined) {
        array.push(value)
      }
    }

    return array
  }
}

module.exports = arrays
