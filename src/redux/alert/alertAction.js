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

export default {alertOff, alertOn}