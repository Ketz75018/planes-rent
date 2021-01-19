import vehicles from './vehicles.json'

/** True = 65%, False = 35% */
const rejectByChance = () => {
  return Math.random() <= 0.35
}

/** Emulate request */
export default () =>
  new Promise((resolve, reject) => {
    if (rejectByChance()) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject({
        error: 'Server error',
      })
    }
    const delay = parseInt(Math.random() * 1000)
    setTimeout(() => {
      resolve(vehicles)
    }, delay)
  })
