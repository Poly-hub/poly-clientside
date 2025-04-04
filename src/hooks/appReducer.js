export const INITIAL_APP_STATE = {
    openedApps: [],
}
export function appReducer(state, action) {
    switch(action.type) {
        case "OPEN_APP":
            if (state.openedApps.find(app => app.name === action.payload.name)) {
                return state;
            }
            return {
                ...state,
                openedApps: [
                    ...state.openedApps,
                    { ...action.payload, minimized: false}
                ],
            };

        case "MINIMIZE_APP":
            return {
                ...state,
                openedApps: state.openedApps.map(app =>
                    app.name === action.payload
                        ? { ...app, minimized: true } : app
                ),
            }
        case "RESTORE_APP":
            return {
                ...state,
                openedApps: state.openedApps.map(app =>
                    app.name === action.payload?
                        { ...app, minimized: false } : app
                ),
            }
        case "CLOSE_APP":
            return {
                ...state,
                openedApps: state.openedApps.filter(
                    app => app.name !== action.payload
                ),
            }
        default:
            return state;
    }
}