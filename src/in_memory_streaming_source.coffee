class InMemoryStreamingSource
  startStreaming: =>
    console.log("started streaming")
    intervalId = setInterval((=> @newData("#{new Date().toLocaleTimeString()}\n")), 1000)
    setTimeout(( => clearInterval(intervalId)), 20000)


  newData: (string) =>
    console.log("new data received: #{string}")



