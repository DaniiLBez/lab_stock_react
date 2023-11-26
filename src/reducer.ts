const defaultState = { tradingList: [] }

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case 'SAVE':
      return { ...state, tradingList: action.tradingList }
    default:
      return state
  }
}
