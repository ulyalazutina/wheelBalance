import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    justify-content: space-between;
    align-items: center;
    
    `;

export const Wrap = styled.div`   
    height: 100vh;
    display: grid;
    align-items: center;
`;

export const WrapInner = styled.div`
        display: grid;
    justify-items: center;
    gap: 50px;
`;

export const H2 = styled.h2`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    line-height: 45px;
`;