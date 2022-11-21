import { combineReducers } from "redux";

//reducer for list of songs
const songsReducer = () => {
  return [
    { title: "Baby got back", duration: "5:14" },
    { title: "Black horse", duration: "7:10" },
    { title: "Boulevard of broken dreams", duration: "4:44" },
    { title: "Billy jean", duration: "6:36" },
  ];
};

//reducer for selected song
const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//combining the reducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer,
});
