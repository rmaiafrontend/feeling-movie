import styled from 'styled-components'

export const Box = styled.div`
    padding: 37px 101px;
    width: 100%;
    max-width: 90rem;
    background: rgba(41, 46, 157, 0.26);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:first-child){
        margin-top: 2rem;
    }
    .image {
        width: 18.9rem;
        height: 27.3rem;
        overflow: hidden;
        border-radius: 10px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content{
        max-width: 47.6rem;
        margin-left: 4.3rem;
        h4 {
            font-weight: 600;
            font-size: 35px;
            line-height: 36px;
            margin-bottom: 10px;
        }
        span {
            font-weight: 300;
            font-size: 15px;
            :not(:first-child) {
                margin-left: 2rem
            }
        }
        p {
            margin-top: 20px;
            font-weight: 300;
            font-size: 14px;
            line-height: 135.5%;
        }
    }
`