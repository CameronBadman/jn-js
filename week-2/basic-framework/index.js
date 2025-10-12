import React from 'https://esm.sh/react@18'
import ReactDOM from 'https://esm.sh/react-dom@18'

const AppCode = await fetch('./app.jsx').then(r => r.text())
const transformed = Babel.transform(AppCode, { presets: ['react'] }).code
const AppModule = new Function('React', `${transformed}; return App`)
const App = AppModule(React)

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App))
