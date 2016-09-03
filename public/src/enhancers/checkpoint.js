import storage from 'store';

var defaultOptions = {
	key : 'redux'
}

function Checkpoint(options = defaultOptions){

	return function checkpoint(store){

		return function(next){

			return function(action){
				
				storage.set(options.key, store.getState());
				return next(action);

			}

		}

	}

}

export default Checkpoint;
