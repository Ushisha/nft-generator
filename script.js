window.onload = function () {
  let robothead = new Image()
  //number of the diffferent head variation, in this case 3
  let robotheadnum = Math.floor(Math.random() * 3) + 1 //change the number according to the number og the variations
  console.log(robotheadnum)
  let robotheadname = 'head' + robotheadnum + '.png'
  robothead.src = robotheadname
  robothead.onload = function () {
    buildrobot()
  }
  function buildrobot() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 400
    canvas.height = 400
    ctx.drawImage(robothead, (400 - robothead.width) / 2, 50)
  }
}
