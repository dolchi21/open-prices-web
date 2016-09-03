SystemJS.config({
	map : {
		'axios' : '/node_modules/axios/dist/axios.js',
		'react' : '/node_modules/react/dist/react.js',
		'react-dom' : '/node_modules/react-dom/dist/react-dom.js',
		'react-redux' : '/node_modules/react-redux/dist/react-redux.js',
		'redux' : '/node_modules/redux/dist/redux.js',
		'redux-logger' : '/node_modules/redux-logger/dist/index.js',
		'redux-thunk' : '/node_modules/redux-thunk/dist/redux-thunk.js',
		'store' : '/node_modules/store/store.js'
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
	},
	meta: {
		'*.less': { loader: 'less' }
	}
});
