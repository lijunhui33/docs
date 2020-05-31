module.exports = {
	base: '/docs/',
	title: 'mlioe-ui',
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
				link: '/guide/'
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
			{title:'按钮',path:'/button'},
			{title:'图标',path:'/icon'},
			{title:'输入框',path:'/input'},
		]
	},
	sidebar: [

	]
}
