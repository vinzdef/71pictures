import { Router } from 'backbone';
import Regions from './regions.js';
import PageManager from './utils/PageManager.js';

import NTSCPage from './views/pages/NTSCPage.js';
import AboutPage from './views/pages/AboutPage.js';
import ArticlesPage from './views/pages/ArticlesPage.js';

const ApplicationRouter = Router.extend({

	routes: {	
		'': 	'_home',
		'ntsc': '_ntsc',
		'about': '_about',
		'articles': '_articles'
	},

	_home:function () {
		this._getElementFromRoute('ntsc')
			.then(el => Regions.main.show(NTSCPage, {el, scrollToSection: '.intro'}));	
	},

	_ntsc: function () {
		this._getElementFromRoute('ntsc')
			.then(el => Regions.main.show(NTSCPage, {el, scrollToSection: '.page-ntsc'}));
	},

	_about: function () {
		this._getElementFromRoute('about')
			.then(el => Regions.main.show(AboutPage, {el}));	
	},

	_articles: function () {
		this._getElementFromRoute('articles')
			.then(el => Regions.main.show(ArticlesPage, {el}));	
	},

	_getElementFromRoute: function(slug) {
		
		return new Promise((res, rej) => {
			
			if (!this._previousPage) {
				this._previousPage = slug;

				const page = document.querySelector('.js-page');
				PageManager.add(slug, page.cloneNode(true));
				res(page);

			} else {
				
				PageManager.get(slug)
					.then(res)
					.catch(rej)
			
			}

		})
	}
})

export default ApplicationRouter;