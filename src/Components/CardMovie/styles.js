import styled from 'styled-components'

export const Box = styled.div`
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
        width: 100%;
        max-width: 269px;
        height: 100%;
        overflow: hidden;
        border-radius: 10px 0 0 10px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content{
        max-width: 63rem;
        height: 100%;
        padding: 30px 30px 30px 20px;
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
    @media (max-width: 1000px) {
        flex-direction: column;
        .image {
            border-radius: 10px 10px 0 0;
            max-width: 63rem;
            max-height: 636px;
        }
        .content {
            height: auto;
            h4 {
               font-size: 30px;
            }
        }
    }
`