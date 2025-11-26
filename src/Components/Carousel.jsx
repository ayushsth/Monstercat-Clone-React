import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../style/Carousel.css'
import { useState, useEffect, useCallback } from 'react'

import { PrevButton, NextButton, DotButton } from "./EmblaCarouselButtons";


export function EmblaCarousel({ images }) {
  const [emblaRef,embla] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);


  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);


  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div className="embla__slide" key={index}>
            <div className={`carousel-card ${ index === selectedIndex ? 'carousel-card-active' : ''
              }`}>
              <div
                className="carousel-bg"
                style={{ backgroundImage: `url(${image.image})` }}
              />

              <img className="card-foreground" src={image.image} alt="" />

              <div className="details">
                <p className='album'><span style={{ color: image.color }}>{image.album}</span> - <i>{image.release_date}</i></p>
              </div>

              <div className="card-overlay">
                <h2 className="card-title truncated-text">{image.title}</h2>
                <h2 className="card-artist truncated-text">{image.artist}</h2>
                <button className="view_release" 
                style={{"--btn-color":image.color}}>VIEW RELEASE</button>
                <button className='listen_on_player'>LISTEN ON PLAYER</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
       </div>

       <div>
         <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
       </div>

       <div className="embla__dots">
         {scrollSnaps.map((_, index) => (
          <div  key={index} className="embla__dot-container">
           <DotButton
             selected={index === selectedIndex}
             onClick={() => scrollTo(index)} 
           />
           <div
            className={`music-info ${index === selectedIndex ? "active": "" }`}
            onClick={() => scrollTo(index)}
           >
            <p className='truncated-text-embla'>{images[index].title}</p>
            <p className='truncated-text-embla'>{images[index].artist}</p>
           </div>
          </div>
        ))}
       </div> 
    </div>
  )
}
