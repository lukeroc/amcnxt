export default {
  each (obj, callback) {
    for (let i in obj) {
      if (callback(obj[i], i, obj) === false) break
    }

    return obj
  }
}
