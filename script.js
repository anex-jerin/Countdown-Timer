const daysEl = document.getElementById('days')
const hoursE = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')




function countdown() {
  const dateNow = new Date()
  const dateLocalString = dateNow.toString()
  const date = new Date(dateLocalString)
  const countDownDate = new Date('1/1/2023')

  const totalSeconds = (countDownDate - date)/1000

  const days = Math.floor(totalSeconds/(3600*24))
  const hours = Math.floor(totalSeconds/3600)%24
  const minutes = Math.floor(totalSeconds/60)%60
  const seconds = Math.floor(totalSeconds)%60
  daysEl.innerHTML = days
  hoursE.innerHTML = addZero(hours)
  minsEl.innerHTML =  addZero(minutes)
  secondsEl.innerHTML =  addZero(seconds)  
  

}
countdown()
function addZero(time){
  return time<10 ? `0${time}` : time
}

setInterval(countdown,100)
