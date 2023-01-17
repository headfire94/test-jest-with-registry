
let target

const setTarget = (value) => {
  target = value
}

const client = new Proxy(
  {},
  {
    get: (obj, key) => {
      if (!target) {
        if (key === '$$typeof') {
          return
        }

        if (key === 'setTarget') {
          return setTarget
        }

        throw new Error(`target isn't ready yet, please initialize the \`actions\` module. ${key}`)
      }

      return target[key]
    }
  }
)

module.exports = {
  client
}
