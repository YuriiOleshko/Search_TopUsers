export default function user(state = [], action) {
  switch (action.type) {
    case "User":
      return [...state, action.data.data];
    case 'Clear':
      return [];
    default:
      return state;
  }
}
