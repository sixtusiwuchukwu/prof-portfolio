const expiryDate = new Date(500 + 2 * 24 * 60 * 60 * 5000); // 2 days
const cookieOptions = {
  httpOnly: true,
  maxAge: expiryDate,
};

const AdminMutation = {
  adminUpdateProfile: async (root, { data }, { datasources, req }) => {
    const { Admin } = datasources;
    return await new Admin().adminUpdateProfile(data);
  },

  adminUpdatePassword: async (root, { data }, { datasources, req }) => {
    const { Admin } = datasources;
    return await new Admin().adminUpdatePassword(data);
  },

  adminLogin: async (root, { data }, { datasources, req, res }) => {
    const { Admin } = datasources;
    let result = await new Admin().adminLogin(data, req.user);
    await res.cookie("token", result, cookieOptions);

    return result;
  },
  adminLogout: async (root, args, { datasources, req }) => {
    const { Admin } = datasources;
    return await new Admin().adminLogout(req.user);
    //   const logout = async (req, res) => {
    //     // Set token to none and expire after 1 seconds
    //     res.cookie('token', 'none', {
    //         expires: new Date(Date.now() + 1 * 1000),
    //         httpOnly: true,
    //     })
    //     res
    //         .status(200)
    //         .json({ success: true, message: 'User logged out successfully' })
    // }
  },
};

const AdminQuery = {
  getCurrentUser: async (root, args, { datasources, req }) => {
    const { Admin } = datasources;
    return await new Admin().getCurrentUser(req.user);
  },
};

module.exports = {
  AdminMutation,
  AdminQuery,
};
