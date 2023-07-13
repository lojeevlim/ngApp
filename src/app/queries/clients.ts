export const  getClient = `
    query Clients {
    clients {
      createdAt
      email
      fullname
      id
      password
      publishedAt
      updatedAt
      username
    }
  }`