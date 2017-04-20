import page from 'page'
import header from '../header'
import template from './template'

page('/:username', header, loadUser, function (context, next) {
	let main = $('#main-container')

	$('title').html(`Platzigram - ${context.params.username}`)
	main.empty().append(template(context.user))
})

async function loadUser(context, next) {

	try
	{
		const res = await fetch(`api/user/${context.params.username}`)
		context.user = await res.json()
		next()
	}
	catch (err)
	{
		console.log(err)
	}
}