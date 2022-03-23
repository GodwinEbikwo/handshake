import { Root, RootInner, RootTitle } from "./Four.styles";

export default function Four() {
  return (
    <Root>
      <RootInner>
        <div className="flex relative">
          <div className="absolute text-uppercase small-text">Our work</div>
          <RootTitle>
            With over two decades of work to show, we’re devoted to helping our
            clients build a better, more beautiful world.
          </RootTitle>
        </div>
      </RootInner>
    </Root>
  );
}
