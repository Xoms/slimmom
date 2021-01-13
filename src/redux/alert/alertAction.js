const alertOff = () => {
  return {
    type: 'alert.off',
    payload: {
      error: null
    }
  }
}

const alertOn = (value) => {
  return {
    type: 'alert.on',
    payload: {
      error: value
    }
  }
}
const alertActions = {alertOff, alertOn}
export default alertActions