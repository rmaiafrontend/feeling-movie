import styled from 'styled-components'
import bg from '../../assets/bg.svg'
import bgmobile from '../../assets/bgmobile.svg'


export const ContainerApp = styled.div`
        width: 100%;
        max-width: 76.7rem;
        padding: 0 20px;
        margin: 0 auto;
        font-size: 5rem;

`

export const ContentApp = styled.div`
        pointer-events: ${({searchActive}) => (searchActive) ? 'none' : 'all'};
        opacity: ${({isLoader}) => (isLoader) ? '.1' : '1'};
        overflow-y:  ${({searchActive}) => (searchActive) ? 'hidden' : 'auto'};
        transition: all .5s;
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
                        transition: all 0.8s;
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
        @media (max-width: 450px) {
                background: url(${bgmobile}) center center no-repeat;
                background-size: cover;
                .top-content {
                        margin-top: 2rem;
                        h1 {
                            font-size: 45px;
                        }
                        p {
                           font-size: 14px;
                        }
                }
                .input-content {
                        .search{
                                input[type="text"] {
                                        width: 68%;
                                    &::placeholder {
                                    font-size:12px;
                                }
                                }
                                
                        }
                }
        }
`

export const MoviesContent = styled.div`
        pointer-events: ${({searchActive}) => (searchActive) ? 'all' : 'none'};
        transform: translateY(${({searchActive}) => (searchActive) ? '0' : '100%'});
        transition: transform 0.3s ease-in;
        position: fixed;
        bottom: 0;
        z-index: 2000;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        .box {
                padding: 2rem 1.5rem 5.8rem 1.5rem;
                height: 92%;
                width: 98%;
                border-radius: 15px 15px 0 0;
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
                        color: #00F58E;
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
        @media (max-width: 450px){
                .box {
                        h2 {
                                text-align: center;
                                font-size: 30px;
                        }
                        span {
                                font-size: 18px;
                                line-height: 25px;
                        }
                }
        } 
`
export const Loader = styled.div`
       position: absolute;
       width: 100%;
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
.lds-roller {
  z-index: 2000;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00F58E;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`