import { configureStore } from '@reduxjs/toolkit'
import roulette from '../slices/roulette'

const store = configureStore({
  reducer: {
    roulette: roulette,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
