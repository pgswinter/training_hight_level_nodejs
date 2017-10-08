let reducer = function(state, action){
	switch(action.type){
		case 'HANDLE_MENU':
			return Object.assign({}, state,{
				menus:[{

				}, ...state.menu]
			})
		default:
			return state;
	}
}