const yo = require('yo-yo')
const translate = require('../translate')

module.exports = function pictureCard(picture) {
  let element

  function like(liked){
    picture.liked = liked
    
    picture.likes += liked ? 1 : -1

    let newElement = render(picture)
    yo.update(element, newElement)
    // Se retorna false para que no continúe con la navegación hacia la ruta # definida en el anchor en donde se llama esta función
    return false
  }

  function render(pic){

    return yo`<div class="card ${pic.liked ? 'liked' : ''}">
      <div class="card-image">
        <img class="activator" src="${pic.url}">
      </div>
      <div class="card-content">
        <a href="/${pic.user.username}" class="card-title">
          <img src="${pic.user.avatar}" class="avatar" />
          <span class="username">${pic.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(pic.createdAt)}</small>
        <p>
          <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
          <span class="left likes">${translate.message('likes', { likes: pic.likes })}</span>
        </p>
      </div>
    </div>`
  }

  element = render(picture)

  return element
}
