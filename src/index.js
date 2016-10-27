import { fromJS } from 'immutable';

export default engine => {
    return {
        ...engine,

        load() {
            return engine.load().then(result => fromJS(result));
        },
    };
};
