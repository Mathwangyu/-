
const render = (state = {list: []}, action) => {
  const {type, data} = action
  switch (type) {
    case 'changeList':
      return {
        list: data
      }
    default:
    return state
  }
}

export default render