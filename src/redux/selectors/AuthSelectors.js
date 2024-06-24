export const isAuthenticated = (state) => {
    if (state.auth.auth.apiKey) return true;
    return false;
};
