interface IRequest {
  url: string
  method?: string
  data?: any
}

const API = {
  serverURL: 'https://fakestoreapi.com',

  async makeRequest(request: IRequest) {
    const res = await fetch(request.url, {
      method: request.method || 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: request.data && JSON.stringify(request.data),
    })

    const dataJSON = await res.json()

    if (dataJSON.status === 'Error') {
      throw dataJSON
    }

    return dataJSON
  },

  login(username: string, password: string) {
    return this.makeRequest({
      url: `${this.serverURL}/auth/login`,
      method: 'POST',
      data: { username, password },
    })
  },

  getAllProducts() {
    return this.makeRequest({
      url: `${this.serverURL}/products`,
    })
  },
}

export default API
