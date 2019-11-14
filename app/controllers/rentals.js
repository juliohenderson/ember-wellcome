import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByCity(value) {
			if (value !== '') {
				return this.store
					.query('rental', { city: value })
						.then((results) => ({ query: value, results}));
			}

			return this.store
				.findAll('rental')
					.then((results) => ({ query: value, results }));
		}
	}
});
