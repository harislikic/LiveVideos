import styled from 'styled-components';

export const Paper = styled.div`
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 25px;
`;

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div<{ img: string }>`
 
  width: 100%;
  height: 400px;
 
  background-image: ${(props: any) => `url(${props.img})`};
  background-size:  contain;
  background-repeat: no-repeat;
`;

export const CarouselContainer = styled.div<{ sliding: boolean }>`
  display: flex;
 
  width: 100%;
  
  transition: ${(props: any) => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${(props: any) => {
    if (!props.sliding) return 'translateX(calc(-80% - 20px))';
    if (props.dir === PREV) return 'translateX(calc(2 * (-80% - 20px)))';
    return 'translateX(0%)';
  }};
`;

export const Wrapper = styled.div`
 
  width: 100%;
  height: 430px;
  overflow: hidden;
 
`;

export const CarouselSlot = styled.div<{ order: number }>`
  flex: 1 0   ;
  flex-basis: 80%;
  margin-right: 110px;
  


  order: ${props => props.order};
`;

