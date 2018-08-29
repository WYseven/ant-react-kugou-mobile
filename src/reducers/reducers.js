export default function (state={},action) {
  switch (action.type) {
    case 'updateHash':
      return {
        ...state,
        hash: action.hash
      }
      break;
    case 'updateSongList':
      return {
        ...state,
        songList: action.songList
      }
      break;  
    default:
      return state;
      break;
  }
}