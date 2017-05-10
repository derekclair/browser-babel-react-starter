
import {
	action,
	// computed,
	extendObservable,
	// observable,
} from 'mobx';

class Store {
	// extendObservable(this, { count: 0 });
	constructor(init) {
		// super();
		extendObservable(this, { count: init || 0 });
	}

	// extendObservable(this, { click: 0 });

	// increment = action(() => this.click++);
	increment = action(() => {
		console.log('INC:', this.count, '+ 1');
		this.count++;
	});
}

export default Store;
// export default new Store();
