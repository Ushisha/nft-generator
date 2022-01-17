//when window load...
window.onload = function () {
  //HEAD
  //set variables
  const modelhead = new Image()
  const modelheadnum = Math.floor(Math.random() * 3) + 1 //change the number according to the number of the variations
  const modelheadname = 'head' + modelheadnum + '.png'
  modelhead.src = `./images/${modelheadname}`
  //EYES
  const modeleye = new Image()
  const modeleyenum = Math.floor(Math.random() * 3) + 1
  const modeleyename = 'eye' + modeleyenum + '.png'
  modeleye.src = `./images/${modeleyename}`

  //MOUTH
  const modelmouth = new Image()
  const modelmouthnum = Math.floor(Math.random() * 3) + 1
  const modelmouthname = 'mouth' + modelmouthnum + '.png'
  modelmouth.src = `./images/${modelmouthname}`
  //HEAD LOADED
  modelhead.onload = function () {
    buildmodel()
  }
  //EYE LOADED
  modeleye.onload = function () {
    buildmodel()
  }
  //MOUTH LOADED
  modelmouth.onload = function () {
    buildmodel()
  }
  //main build model
  function buildmodel() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 400
    canvas.height = 400

    //ADD RANDOM BACKGROUND COLOR
    const r = Math.floor(Math.random() * (255 - 100 + 1) + 100)
    const g = Math.floor(Math.random() * (255 - 100 + 1) + 100)
    const b = Math.floor(Math.random() * (255 - 100 + 1) + 100)
    const bgcol = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    console.log(bgcol)
    ctx.fillStyle = bgcol
    ctx.fillRect(0, 0, 400, 400)
    //DRAW HEAD
    ctx.drawImage(modelhead, (400 - modelhead.width) / 2, 0) //second argment is how many px you want to reate a gap from top
    //DRAW EYE
    ctx.drawImage(modeleye, (400 - modelhead.width) / 2, 0)
    //DRAW MOUTH
    ctx.drawImage(modelmouth, (400 - modelmouth.width) / 2, 0)
  }
}
