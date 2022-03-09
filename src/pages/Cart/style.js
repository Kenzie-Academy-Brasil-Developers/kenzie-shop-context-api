import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }
`

export const List = styled.ul`
    display: flex;
    overflow-x:scroll;
    margin-left: 20px;
    ::-webkit-scrollbar {
             display: none;
     }
    @media (min-width: 1024px) {
        overflow: hidden;
        overflow-y: scroll;
        width: 70%;
        max-width: 900px;
        height: 550px;
        flex-direction: column;
    }
    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        @media (min-width: 1024px){
            flex-direction: row;
            align-items: center;
            margin-right: 15px;
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
            @media (min-width: 1024px) {
                max-width: 35ch;
            }
        }
        span {
            font-weight: bold;
            margin-top: 15px;
            @media (min-width: 1024px) {
                margin-top: 0;
            }
        }
    }
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    margin: 0 auto ;
    box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 1);
    width: 250px;
    height: 200px;
    border-radius: 8px;
    h3 {
        margin-top: 5px;
    }
    div {
        display: flex;
        flex-direction: column;
        height: 80px;
        justify-content: space-around;
    }
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 550px;
    h2 {
        color: #808080;
    }
`