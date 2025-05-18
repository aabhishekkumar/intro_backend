class ApiError extends Error {
  constructor(
    statusCode,
    message= "Something went wrong",
    errors = [],
    statck = ""
  ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = false
    this.errors = this.errors
    this.errors = this.errors

    if(statck) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export {ApiError}