SystemJS.config({
	map : {
		'axios' : '/node_modules/axios/dist/axios.min.js',
		'react' : '/node_modules/react/dist/react.js',
		'react-dom' : '/node_modules/react-dom/dist/react-dom.js'
	}
});
SystemJS.config({
	map: {
		css: '/node_modules/systemjs-plugin-css',
		less: '/node_modules/systemjs-plugin-less',
		lesscss: '/node_modules/less'
	},
	packages: {
		lesscss: {
			main: {
				browser: './dist/less.min.js',
				node: '@node/less'
			}
		},
		css: { main: 'css.js' },
		less: { main: 'less.js' }
	}
});
SystemJS.config({
	meta: {
		'*.less': { loader: 'less' }
	}
});