//doing a named export
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
