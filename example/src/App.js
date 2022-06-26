import React from 'react'

import { ExampleComponent, Button } from 'buttonpublishingpatikadev'
import 'buttonpublishingpatikadev/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button text='Click' type='primary' />
      <Button text='Click' type='dashed' />
      <Button text='Click' type='default' />
    </>
  )
}

export default App
