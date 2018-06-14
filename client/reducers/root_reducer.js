import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer'; 
import ErrorsReducer from './errors_reducer'; 
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    ui: UIReducer,
    session: SessionReducer,
    errors: ErrorsReducer
});

export default RootReducer;