// @flow
export const selectTeam = (id:String) => { localStorage.team = id; };

export const teamSelected = () => !!localStorage.team;

export const getTeam = () => localStorage.team;

export const requiredTeam = (nextState: Object, replace: Function) => {
    if (!teamSelected()) {
        replace({
            pathname: '/admin',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};
