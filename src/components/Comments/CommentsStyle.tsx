import styled from 'styled-components';

export const Container = styled.div`
    margin-right: 20px;
    width: 70%;
`

export const ContentWrapper = styled.div`
    margin: auto;
    margin-left: 30px;
    margin-top: 0px;
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(200, 200, 200, 0.1);
    border: 3px solid rgba(200, 200, 200, 0.85);
    border-radius: 10px;
    padding: 30px 30px 30px 30px;
    overflow-y: auto;
`

export const Row = styled.div`
	border: 1px solid white;
	border-radius: 20px;
	//max-height: 10%;
	width: 100%;
	padding: 0.8vw;
	&:hover{
        background-color: rgba(200, 200, 200, 0.5);
    }
	font-size: 0.9vw;
`