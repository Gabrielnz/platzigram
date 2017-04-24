const yo = require('yo-yo')
const layout = require('../layout')
const picture = require('../picture-card')
const translate = require('../translate').message
const axios = require('axios')

module.exports = function (pictures) {

  const template = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-2 center-align">
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onSubmit}>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate('upload-picture')}</span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onchange}/>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function (pic) {
        	return picture(pic)
        })}
      </div>
    </div>
  </div>`

  function toggleButtons() {
    // Le hace toggle a la clase hide de los botones, para mostrarlos o esconderlos, segun toque
    document.getElementById('fileName').classList.toggle('hide')
    document.getElementById('btnUpload').classList.toggle('hide')
    document.getElementById('btnCancel').classList.toggle('hide')
  }

  function cancel() {
    toggleButtons()
    document.getElementById('formUpload').reset()
  }

  function onchange(ev) {
    toggleButtons()
  }

function onSubmit(ev) {
    
    ev.preventDefault()

    // this hace referencia al formulario, ya que este evento es disparado por el mismo formulario
    const data = new FormData(this)

    axios
      .post('/api/pictures', data)
      .then(res => console.log('response', res))
      .catch(err => console.log('error', err))
  }

  return layout(template)
}
