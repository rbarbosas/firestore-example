export class DatabaseError extends Error {
  constructor () {
    super('You are not allowed to access this resource')
    this.name = 'AccessDeniedError'
  }
}
