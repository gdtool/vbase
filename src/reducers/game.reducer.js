import { GAME } from '../utils/constants'

const initialState = {
  isLoading: false,
  hasFailed: false,
  gameId: null,
  seriesGames: {},
  info: {}
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME.REQUESTEDINFO:
      return { ...state, isLoading: true, gameId: action.id }

      // case GAME.FAILEDONURL - only on saga // has a rawQuery object as well

    case GAME.FAILEDLOADING:
      return { ...state, isLoading: false, hasFailed: action.feedback }

    case GAME.INFORETRIEVED:
      return { ...state, isLoading: false, info: action.info }

    case GAME.RELATEDGAMESRETRIEVED:
      return { ...state, seriesGames: action.info }

    default:
      return state
  }
}

export default contactReducer
