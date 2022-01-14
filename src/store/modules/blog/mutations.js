export const ADD_BLOG = (state, { name }) => {
  // localStorage.removeItem("blogs");
  state.blogs.unshift({
    name,createdAt:new Date().toUTCString()
  })
  localStorage.setItem("blogs",JSON.stringify( state.blogs));
}

export const CLEAR_BLOGS = (state) => {
  state.blogs = [];
};