
export function addAccessToken(accessToken) {
  return {
    type: 'ADD_ACCESS_TOKEN',
    payload: {
      accessToken
    }
  }
}

export function removeAccessToken() {
  return {
    type: 'REMOVE_ACCESS_TOKEN',
    payload: {}
  }
}
