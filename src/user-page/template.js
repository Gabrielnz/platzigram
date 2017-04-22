import yo from 'yo-yo'
import layout from '../layout'
import translate from '../translate'

export default function userPageTemplate(user) {
  const element = yo`<div class="container user-page">
    <div class="row">
      <div class="col s12 m10 offset-m1 18 offset-l2 center-align heading">
        <div class="row">
          <div class="col s12 m10 offset-m1 l3 offset-l3 center">
            <img src="${user.avatar}" class="responsive-img circle">
          </div>
          <div class="col s12 m10 offset-m1 l6 left-align">
            <h2 class="hide-on-large-only center-align">${user.username}</h2>
            <h2 class="hide-on-med-and-down left-align">${user.username}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        ${user.pictures.map((pic) => {
          return yo`<div class="col s12 m6 l4">
            <a href="/${user.username}/${pic.id}" class="picture-container">
              <img class="picture" src="${pic.src}" />
              <div class="likes">
                <i class="fa fa-heart" aria-hidden="true"></i> ${pic.likes}
              </div>
            </a>
            <div id="modal${pic.id}" class="modal modal-fixed-footer">
              <div class="modal-content center">
                <img src="${pic.src}" />
              </div>
              <div class="modal-footer">
                <div class="btn btn-flat likes">
                  <i class="fa fa-heart" aria-hidden="true"></i> ${translate.message('likes', { likes: pic.likes })}
                </div>
              </div>
            </div>
          </div>`
        })}
      </div>
    </div>
  </div>`

  return layout(element)
}
