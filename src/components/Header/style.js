import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 6px -5px rgba(0, 0, 0, 1);
    h1 {
        font-size: 15px;
        cursor: pointer;
    }
    nav {
        p {
            width: 15px;
            height: 15px;
            position: relative;
            top: -6px;
            left: -8px;
            background: #725AC1;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            margin: 0;
            font-size: 13px;
            font-weight: bold;
        }
        button {
            width: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
`