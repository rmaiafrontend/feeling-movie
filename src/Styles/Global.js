import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;  
        padding:0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Epilogue', sans-serif;;
        font-size: 62.5%;
    }

    body {
        background-color: #000040;
        color: #fff;
    }


`

export default GlobalStyle