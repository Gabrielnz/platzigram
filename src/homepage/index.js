const Page = require('page')
const homepageTemplate = require('./template')

Page('/', (context, next) => {

  // Usando jQuery para cambiar el titulo de la pagina
  $('title').html('Platzigram')

  let main = $('#main-container')

  let pictures = [
    {
      user: {
        username: 'bladelizard',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: '10',
      liked: true,
      createdAt: new Date()
    },
    {
      user: {
        username: 'bladelizard',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: '3',
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]

  // Limpia el elemento main-container y le inserta el contenido del homepage
  main.empty().append(homepageTemplate(pictures))
})
