import React, { FunctionComponent, ReactNode } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  PREV,
  NEXT,
} from './Components';

type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

type CarouselAction =
  | { type: Direction; numItems: number }
  | { type: 'stopSliding' };

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const getInitialState = (numItems: number): CarouselState => ({
  pos: numItems - 1,
  sliding: false,
  dir: NEXT,
});

const Carousel: FunctionComponent<{ children: ReactNode }> = props => {
  const numItems = React.Children.count(props.children);
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialState(numItems),
  );

  const slide = (dir: Direction) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className=" w-4/5   flex flex-row justify-center items-center">
      <MdChevronLeft
        className="opacity-50  cursor-pointer hover:opacity-100"
        onClick={() => slide(PREV)}
        size={50}
      >
       
      </MdChevronLeft>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot order={getOrder(index, state.pos, numItems)}>
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>

      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={() => slide(NEXT)}
        size={50}
      >
        
      </MdChevronRight>
    </div>
  );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  if(state.pos < 0) state.pos =1;
  switch (action.type) {
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
