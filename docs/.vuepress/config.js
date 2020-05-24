module.exports = {
	base:'/docs/',
    title: 'mlioe',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: 'github', link: '/guide/'
        },{
			text:'about',link:'/about'
		}]
    }
}