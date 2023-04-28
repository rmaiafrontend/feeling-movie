import styled from 'styled-components'
import bg from '../../assets/bg.svg'


export const ContainerApp = styled.div`
        width: 100%;
        max-width: 76.7rem;
        margin: 0 auto;
        font-size: 5rem;

`

export const ContentApp = styled.div`
        pointer-events: ${({searchActive}) => (searchActive) ? 'none' : 'all'};
        position: relative;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url(${bg}) center center no-repeat;
        background-size: cover;
        .top-content {
                margin-top: 20rem;
               display: flex;
               align-items: center;
               justify-content: center;
               flex-direction: column;
                
                h1 {
                    margin-top: 6.8rem;
                    font-size: 60px;
                    text-align: center;
                    width: 100%;
                    max-width: 55.6rem;
                }
                p {
                   margin-top: 3.3rem;
                   font-weight: 300;
                   font-size: 18px;
                   line-height: 136%;
                   text-align: center;
                }
        }
        .input-content {
                margin-top: 4.5rem;
                display: flex;
                align-items: center;
                flex-direction: column;
                span {
                        font-weight: 700;
                        font-size: 20px;
                        color: #00F58E;
                        margin-bottom: 10px;
                        
                }
                p {
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 136%;
                        text-align: center;
                        color: #fff;
                }
                .search {
                        margin-top: 5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        max-width: 64.3rem;
                        height: 5.6rem;
                        border-radius: 12.2rem;
                        border: 1px solid transparent;
                        background-color: #000040;
                        padding-left: 2.5rem;
                        padding-right: 0.7rem;
                        transition: all 1s;
                        &:hover {
                        border-color: #00F58E;
                        box-shadow: 0px 0px 53px -9px #00F58E;
                        }
                        input[type="text"] {
                                font-family: "Epilogue";
                                font-weight: 400;
                                width: 82%;
                                font-size: 15px;
                                line-height: 150%;
                                color: #fff;
                                background-color: transparent;
                                border: 0;
                        &::placeholder {
                                color: rgb(255 255 255 / 53%);
                                font-weight: 300;
                        }
                        }
                        input:focus {
                               outline: none;
                        }
                        button {
                        display: flex;
                        font-weight: 600;
                        align-items: center;
                        justify-content: center;
                        width: 10.2rem;
                        height: 4.2rem;
                        border-radius: 12.2rem;
                        border: 1px solid transparent;
                        background-color: #00F58E;
                        transition: border-color 0.5s;
                        cursor: pointer;
                        &:hover {
                        border-color: #3e75c3;
                        }
                        }
}
              
                
}
`
export const ContentAppActive = styled.div`
        pointer-events: none;
        position: relative;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url(${bg}) center center no-repeat;
        background-size: cover;
        .top-content {
                margin-top: 20rem;
               display: flex;
               align-items: center;
               justify-content: center;
               flex-direction: column;
                
                h1 {
                    margin-top: 6.8rem;
                    font-size: 60px;
                    text-align: center;
                    width: 100%;
                    max-width: 55.6rem;
                }
                p {
                   margin-top: 3.3rem;
                   font-weight: 300;
                   font-size: 18px;
                   line-height: 136%;
                   text-align: center;
                }
        }
        .input-content {
                margin-top: 4.5rem;
                display: flex;
                align-items: center;
                flex-direction: column;
                span {
                        font-weight: 700;
                        font-size: 20px;
                        color: #00F58E;
                        margin-bottom: 5rem;
                }
                input {
                        width: 100%;
                        max-width: 76.7rem;
                        height: 13.8rem;
                        background: rgba(0, 0, 64, 0.54);
                        backdrop-filter: blur(25px);
                        color: #fff;
                        padding: 8px;
                        font-size: 16px;
                        border: 1px solid #ccc;
                        border-radius: 15px;
                        box-shadow: 0 0 5px #ccc;
                        transition: box-shadow 0.2s ease;
                        
                }
                input:focus {
                        border-color: #00F58E;
                        box-shadow: 0 0 5px #00f;
                }
                button {
                        margin-top: 30px;
                        width: 32rem;
                        height: 6rem;
                        border-radius: 10px;
                        border: none;
                        font-weight: 400;
                        font-size: 20px;
                        color: #fff;
                        background: linear-gradient(93.27deg, #00F58E 2.5%, #008E52 37.86%, #005632 69.36%);
                        cursor: pointer;
                }
}
`
export const MoviesContent = styled.div`
        pointer-events: ${({searchActive}) => (searchActive) ? 'all' : 'none'};
        transform: translateY(${({searchActive}) => (searchActive) ? '0' : '100%'});
        transition: transform 2s ease-in;
        position: fixed;
        bottom: 0;
        z-index: 2000;
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        .box {
                padding-bottom: 5.8rem;
                height: 100vh;
                width: 100%;
                background-color: #000040;
                background: rgba(0, 0, 64, 0.74);
                backdrop-filter: blur(9.5px);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                overflow-y: auto;
                button {
                        padding: 15px;
                        width: 100%;
                        background-color: rgb(0, 0, 64);
                        color: #ffff;
                        font-size: 15px;
                        font-weight: 600;
                        border-radius: 5px;
                        border: none;
                        cursor: pointer;
                        margin-bottom: 5rem;
                }
                ::-webkit-scrollbar {
                         width: 0px; 
                         
                }
                h2 {
                        margin-top: 7.4rem;
                        font-size: 4.5rem;
                }
                span {
                    max-width: 47.1rem;
                    margin-top: 22px;
                    font-weight: 300;
                    font-size: 25px;  
                    text-align: center;
                    line-height: 35px;
                    margin-bottom: 4.5rem
                }
        }
`