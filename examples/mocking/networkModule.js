function fakeNetworkRequest() {
  return new Promise((resolve,reject) => {
    resolve('hey I did a network request!');
  })
}

module.exports = {
  fakeNetworkRequest
}