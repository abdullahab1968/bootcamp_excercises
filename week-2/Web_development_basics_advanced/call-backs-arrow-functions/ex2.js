const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  const getTime = callback => {

    const time = new Date()
    callback(time)
  }
  getTime(returnTime)