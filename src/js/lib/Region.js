import { isFunction } from 'underscore';

export default class Region {
	constructor(selector) {
		this.el = document.querySelector(selector);
	}

	show(NextView, options) {
		if (this._currentView && this._currentView.constructor === NextView) return;

		var nextView = new NextView(options);
		var prevView = this._currentView;
		this._currentView = nextView;
		var isAttached = false;

		const attach = () => {
			if (isAttached) return;
			isAttached = true;

			this.el.appendChild(nextView.el);
			nextView.trigger('attached');
		}

		const immediateTransitionIn = () => {
			if (isFunction(nextView.immediateTransitionIn)) {
				attach();
				nextView.immediateTransitionIn();
			}
		}

		const transitionIn = () => {
			attach();
			if (isFunction(nextView.transitionIn)) nextView.transitionIn();
		}

		const disposePrevView = () => {
		 	prevView.remove();
			transitionIn();
		}

		immediateTransitionIn();

		if (prevView) {
			if (isFunction(prevView.transitionOut)) {
				prevView.transitionOut(disposePrevView);
			} else {
				disposePrevView();
			}
		} else {			
			transitionIn();
		}
	}
}