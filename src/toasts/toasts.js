import Toastify from "toastify-js";

export const success = (message) => {
  Toastify({
    text: message,
    duration: 2000,
     close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      
    },
  }).showToast();
};

export const error = (message) => {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #DC143C, #FF0000)",
    },
  }).showToast();
};


export default { success, error};
