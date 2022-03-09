import styled from 'styled-components'

export const Container = styled.section`
        display:  flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        margin-left: 20px;
`

export const List = styled.ul`
    display: flex;
    overflow-x: scroll;
    width: 1120px;
    transition: ease-out 0.5s;

    ::-webkit-scrollbar {
             display: none;
     }
    @media (min-width: 1024px){
        overflow-x: hidden;
        flex-wrap: wrap;
        justify-content: center;
    }
    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 15px;
        border-radius: 10px;
        transition: ease-out 0.5s;
        @media (min-width: 1024px){
            width: 250px;
        }
        img {
            width: 220px;
            height: 220px;
            object-fit: contain;
        }
        h3 {
            max-width: 20ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        button {
            margin-bottom: 15px;
            cursor: pointer;
        }
        p{
            font-size: 0.8rem;
            text-align: center;
            margin-top: 10px;
        }
        span {
            font-weight: bold;
            margin-top: 15px;
        }
        :hover{
            box-shadow: 2px 6px 7px 0px rgba(0, 0, 0, 0.59);
        }        
    }
`