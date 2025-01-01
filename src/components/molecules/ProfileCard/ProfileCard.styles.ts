import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 24px;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
  max-width: clamp(320px, 70vw, 740px);
  min-width: 320px;
  min-height: 280px;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: translateY(-10px);
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const Name = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 700;
  margin-bottom: clamp(0.35rem, 2vw, 0.55rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.p`
  font-size: clamp(1rem, 1.75vw, 1.1rem);
  font-weight: 400;
  margin: 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 3 1 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 16px;
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(
    255,
    255,
    255,
    0.7
  );
  color: black;
  opacity: 0;
  z-index: 1; 
  transition: opacity 0.3s ease-in-out;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const Link = styled.a`
  color: #7370f4;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 12px 0px 16px 0px;
`;


export const ActionsButtons = styled.div`
  border-top: 1px solid #eaeaec;
  padding-top: 16px;
  gap: 12px;
  display: flex;
  margin-top: auto;
  flex-wrap: wrap;
`;

export const LinkActionsButtons = styled.a`
  background-color: #29283f;
  color: white;
  padding: 12px;
  text-decoration: none;
  border-radius: 12px;
  outline: none;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  flex: 1 0 240px;
  max-width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
