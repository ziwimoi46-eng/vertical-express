import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageReveal, Reveal } from '@/components/reveal';
import { veeAssetsBase } from '@/lib/site-data';

const directorCards = [
  {
    name: 'Quazi Tafazzuluddin',
    image: 'team/director-quazi.jpg',
    qualifications: [
      'Bachelor of Business Administration (BBA)',
      'Master of Business Administration (MBA), Marketing',
    ],
  },
  {
    name: 'Mohd Shoeb',
    image: 'team/director-shoeb.jpg',
    qualifications: [
      'Diploma in Mechanical Engineering',
      'Bachelor of Engineering (BE), Mechanical Engineering',
      'Master of Business Administration (MBA), Operations Research',
    ],
  },
] as const;

const galleryPhotos = [
  { src: 'team/team-photo.jpg', alt: 'The Vertical Express team' },
  { src: 'team/directors-photo.jpg', alt: 'The directors of Vertical Express Elevators' },
  { src: 'gallery/gallery-03-office-visit.jpg', alt: 'Office visit at Vertical Express Elevators' },
  { src: 'gallery/gallery-04-office-visit.jpg', alt: 'Office visit and presentation at Vertical Express Elevators' },
  { src: 'gallery/gallery-05-felicitation.jpg', alt: 'Felicitation ceremony honoring guest with bouquet' },
  { src: 'gallery/gallery-06-meeting.jpg', alt: 'Business meeting and discussion in executive lounge' },
  { src: 'gallery/gallery-07-felicitation.jpg', alt: 'Felicitation and honoring distinguished guest with floral basket and shawl' },
  { src: 'gallery/gallery-08-felicitation.jpg', alt: 'Felicitation ceremony with partner and directors' },
  { src: 'gallery/gallery-09-felicitation.jpg', alt: 'Executive directors felicitating honored guest' },
] as const;

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-[78px] bg-white py-20 md:py-28">
      <div className="page-wrap">
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="display-font mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-[#202b34] sm:text-5xl">Meet the <span className="text-[#f4511e]">Directors</span> &amp; Team</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
          {directorCards.map((director, index) => (
            <Reveal key={director.name} className={`reveal-delay-${index + 1}`}>
              <article>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={`${veeAssetsBase}${director.image}`} alt={director.name} className="block h-full w-full object-cover" />
                </div>
                <div className="mt-6">
                  <h3 className="display-font text-2xl font-semibold tracking-[-.03em] text-[#202b34] sm:text-3xl">{director.name}</h3>
                  <p className="mono-font mt-2 text-[10px] uppercase tracking-[.14em] text-[#89949a]">Director</p>
                  <ul className="mt-5 space-y-2">
                    {director.qualifications.map((qualification) => (
                      <li key={qualification} className="flex gap-3 text-sm leading-6 text-[#667279]">
                        <span aria-hidden="true" className="mt-0.5 text-[#f4511e]">•</span>
                        <span>{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20">
          <h3 className="display-font text-3xl font-semibold tracking-[-.04em] text-[#202b34] sm:text-4xl">Our <span className="text-[#f4511e]">Team</span></h3>
          <figure className="mt-6">
            <div className="overflow-hidden border border-[#d3dade]">
              <img src={`${veeAssetsBase}team/team-photo.jpg`} alt="The Vertical Express family" className="block h-auto w-full object-cover" />
            </div>
            <figcaption className="mono-font mt-3 text-[10px] uppercase tracking-[.14em] text-[#89949a]">The Vertical Express Family</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  function moveGallery(step: number) {
    setActiveIndex((current) => current === null
      ? current
      : (current + step + galleryPhotos.length) % galleryPhotos.length);
  }

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') moveGallery(-1);
      if (event.key === 'ArrowRight') moveGallery(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <section id="gallery" className="scroll-mt-[78px] bg-[#eef1f2] py-20 md:py-28">
        <div className="page-wrap">
          <Reveal className="flex flex-col justify-between gap-5 border-b border-[#d3dade] pb-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Photo gallery</p>
              <h2 className="display-font mt-4 text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-[#202b34] sm:text-5xl">Our <span className="text-[#f4511e]">Gallery</span></h2>
            </div>
            <span className="mono-font text-[10px] uppercase tracking-[.16em] text-[#89949a]">{String(galleryPhotos.length).padStart(2, '0')} photographs</span>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryPhotos.map((photo, index) => (
              <Reveal key={photo.src} className={`reveal-delay-${(index % 3) + 1}`}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open ${photo.alt}`}
                  className="group block aspect-[4/5] w-full cursor-zoom-in overflow-hidden text-left bg-[#e8ecee]"
                >
                  <ImageReveal
                    src={`${veeAssetsBase}${photo.src}`}
                    alt={photo.alt}
                    className="h-full w-full"
                    imageClassName="object-cover h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
          onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            const start = touchStartX.current;
            touchStartX.current = null;
            if (start === null) return;
            const distance = event.changedTouches[0].clientX - start;
            if (Math.abs(distance) > 45) moveGallery(distance < 0 ? 1 : -1);
          }}
        >
          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-70">
            <X size={28} />
          </button>
          <button type="button" onClick={() => moveGallery(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:left-6">
            <ChevronLeft size={34} />
          </button>
          <img src={`${veeAssetsBase}${galleryPhotos[activeIndex].src}`} alt={galleryPhotos[activeIndex].alt} className="max-h-[86vh] max-w-[82vw] select-none object-contain" draggable={false} />
          <button type="button" onClick={() => moveGallery(1)} aria-label="Next photo" className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:right-6">
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </>
  );
}
