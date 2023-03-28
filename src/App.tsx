import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BaseLayout } from './components/common'
import { EarnPage, HomePage, NotFoundPage } from './pages'
import { DicePage, GamesPage, GamesPageLayout, RoulettePage } from './pages/games'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path='earn' element={<EarnPage />} />
          <Route path='games' element={<GamesPageLayout />}>
            <Route index element={<GamesPage />} />
            <Route path='roulette' element={<RoulettePage />} />
            <Route path='dice' element={<DicePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
