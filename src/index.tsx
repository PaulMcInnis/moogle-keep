// Import deps
import React from 'react'
import { render } from 'react-dom'

// Import components
import { List } from './components/list'

// Import styles
import "./styles/tailwind.css"

// Find div container
const rootElement = document.getElementById('root')

// Render Reminders List component in the DOM
render(<List />, rootElement)
