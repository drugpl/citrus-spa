class InMemoryStreamingSource
  startStreaming: =>
    console.log("started streaming")
    clearInterval()
    setInterval((=> @newData("#{new Date().toLocaleTimeString()}\n")), 1000)


  newData: (string) =>
    console.log("new data received: #{string}")



