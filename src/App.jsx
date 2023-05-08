import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import {
  Home,
  About,
  Login,
  Signup
} from './pages'

import {
  RecipesList,
  RecipesId,
  NewRecipe,
  RecipesEdit
} from './pages/recipes'

import {
  IngredientsList,
  IngredientsId,
  NewIngredient,
  IngredientsEdit
} from './pages/ingredients'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='recipes'>
          <Route index element={<RecipesList />} />
          <Route path=':id' element={<RecipesId />} />
          <Route path='new' element={<NewRecipe />} />
          <Route path='edit/:id' element={<RecipesEdit />} />
        </Route>
        <Route path='ingredients'>
          <Route index element={<IngredientsList />} />
          <Route path=':id' element={<IngredientsId />} />
          <Route path='new' element={<NewIngredient />} />
          <Route path='edit/:id' element={<IngredientsEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
