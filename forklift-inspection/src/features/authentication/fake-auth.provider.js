//
// Represents any generic authentication provider backend
//
export const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signOut(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default fakeAuthProvider;
