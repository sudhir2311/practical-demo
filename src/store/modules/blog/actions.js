import toasts from "../../../toasts/toasts";
export   const addBlog=({ commit }, {name})=> {
        commit("ADD_BLOG",{name});
          toasts.success("Blog added successfully");
}

export const clearBlogs = ({ commit }) => {
        commit("CLEAR_BLOGS");
};
