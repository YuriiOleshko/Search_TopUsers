export default function users(state = [], action) {
  switch (action.type) {
    case "DOWNLOADED":
      return action.data.data.items;
    default:
      return state;
  }
}
