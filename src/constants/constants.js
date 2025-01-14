export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_IMG =
  "https://lh3.googleusercontent.com/ogw/AF2bZyjT-A-pzTL3oD-GOquCnoJikFRu1ksUiBgL_N_uM8NkNys=s32-c-mo";
export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/CA-en-20241125-TRIFECTA-perspective_ddb53a3c-a0df-4db6-85f4-b00321e76f8a_large.jpg";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANG = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "hi",
    label: "Hindi",
  },
  {
    value: "es",
    label: "Spanish",
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
