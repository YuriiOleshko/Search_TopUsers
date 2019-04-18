export default function stars(state = [], action) {
  switch (action.type) {
    case "addStard":
      console.log(action.data);
      let arr = action.data.reduce((acc, el) => acc + el.stargazers_count, 0);
      console.log(arr);
      return [...state, arr];
      case 'ClearStars':
      return []
    default:
      return state;
  }
}
