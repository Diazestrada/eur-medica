const env = 'dev'
//const env = 'prod'

const params = {
  paths: {
    getEpsAll: 'eps/getAllEps',
    createPerson: 'person/create',
    getAllPerson: 'person/getAllPerson'

  },
}



const dev = {
  ...params,
  apiUrl: 'http://localhost:3000/api/',
  environment: 'dev',
}

const config = {
  dev
}

export const CONFIG = config[env];
