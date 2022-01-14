export const getBlogs = (state) => {
  console.log(state.blogs);
  if (localStorage.getItem("blogs") == null) {
    state.blogs=[];
    localStorage.setItem("blogs",JSON.stringify( state.blogs));
  }
  return JSON.parse(localStorage.getItem("blogs"));
};
