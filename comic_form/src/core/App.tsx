import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './Navbar'
import { About } from '../pages/About'
import ComicView from '../ComicForm/components/ComicView'
import ComicForm from '../ComicForm/components/ComicForm'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={ComicView} exact />
          <Route path="/comicForm" component={ComicForm} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
