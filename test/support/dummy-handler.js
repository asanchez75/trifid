function factory (options) {
  return {
    get: (req, res, next, iri) => {
      if (options.callback) {
        options.callback(req, res, next, iri)
      }
    }
  }
}

module.exports = factory
