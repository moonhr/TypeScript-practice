type Log = (message: string, userId?: string) => void

let loggg: Log = (
  message,
  userID = 'Not signed in'
) => {
  let time = new Date().toISOString()
  console.log(time, message, userID)
}