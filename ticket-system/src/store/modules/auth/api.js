export const login = ({name, password}) => {
  return new Promise((resolve, reject) => {
    if (name === 'alex' && password === '123') {
      resolve({
        name: 'alex'
      })
    } else {
      reject('Incorrect name or password')
    }
  })
}
