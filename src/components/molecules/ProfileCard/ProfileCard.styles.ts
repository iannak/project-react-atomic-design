import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 350px;
    background-color: #fff;
`;

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const Name = styled.h3`
    font-size: 18px;
    color: #333;
`;

export const Info = styled.p`
    font-size: 14px;
    color: #666;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;