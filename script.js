window.onload = function () {
  let modelhead = new Image()
  //number of the diffferent head variation, in this case 3
  let modelheadnum = Math.floor(Math.random() * 3) + 1 //change the number according to the number og the variations
  console.log(modelheadnum)
  let modelheadname = 'head' + modelheadnum + '.png'
  modelhead.src = `./images/${modelheadname}`
  modelhead.onload = function () {
    buildrobot()
  }
  function buildrobot() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 400
    canvas.height = 400
    ctx.drawImage(modelhead, (400 - modelhead.width) / 2, 50)
  }
}
