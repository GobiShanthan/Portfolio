import React from 'react'
import ReactDom from 'react-dom'


//REDUX SETUP
import {Provider} from 'react-redux'
import store from './store'

//MAIN COMPONENT
import App from './component/App'


//MATERIAL UI THEME
import {ThemeProvider} from "@material-ui/core"
import theme from './theme'






ReactDom.render(

<ThemeProvider theme={theme}>
    <Provider store ={store}>
        <App/>
    </Provider>
</ThemeProvider>
,document.querySelector('#root')
)