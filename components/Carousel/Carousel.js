import { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./CarouselBtns";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Root, RootInner, imgData } from "./Carousel.styles";

const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    loop: true,
    speed: 4,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <Root>
      <RootInner>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {imgData.map((img, i) => (
                <div className="embla__slide" key={i}>
                  <div className="embla__slide__inner">
                    <Image
                      src={img.src}
                      width={450}
                      height={600}
                      alt="chairs"
                    />
                    <div className="flex space-between">
                      <h4 className="name">{img.name}</h4>
                      <div className="date">{img.id + 2014}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn_container">
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </div>
        </div>
      </RootInner>
    </Root>
  );
};

export default Carousel;
