let currentUserData = null;

const CurrentUser = {
  set(user) {
    currentUserData = user;
  },

  get() {
    return currentUserData;
  },

  isLoggedIn() {
    if (currentUserData) {
      return true;
    }

    return false;
  },
};

export default CurrentUser;
