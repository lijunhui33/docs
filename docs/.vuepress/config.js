module.exports = {
	base: '/docs/',
	title: 'mlioe-ui',
	description: '自己学习用的ui',
	markdown: {
		lineNumbers: true
	},
	 plugins: [
	    ['@vuepress/search', {
	      searchMaxSuggestions: 10
	    }]
	  ],
	themeConfig: {
		nav: [{
				text: 'github',
				link: 'https://github.com/mlioe/ml-ui'
			},
			// {
			// 	text: 'about',
			// 	link: '/about'
			// },
		],
		sidebar: [
			// {title:'demo',path:'/demo'},
			{title:'前言',path:'/about'},
			{title:'开始',path:'/start'},
			{title:'Button按钮',path:'/button'},
			{title:'Icon图标',path:'/icon'},
			{title:'Input输入框',path:'/input'},
		]
	},
	sidebar: [

	]
}
