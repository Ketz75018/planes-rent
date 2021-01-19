export default (array) => {
  return array.reduce((result, item) => {
    if (!result.includes(item.type)) {
      result.push(item.type)
    }
    return result
  }, [])
}
