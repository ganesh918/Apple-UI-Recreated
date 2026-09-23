import { images } from '../assets/images';
import { Reveal } from '../components/motion/Reveal';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import { SectionTitle } from '../components/ui/SectionTitle';
import './WhatMakesIphone.css';

export function WhatMakesIphone() {
  return (
    <section className="what-makes-iphone" aria-labelledby="what-makes-heading">
      <SectionTitle id="what-makes-heading">What makes an iPhone an iPhone?</SectionTitle>

      <div className="what-makes-iphone__cards">
        <Reveal as="figure" id="ios-16" variant="scale" className="what-makes-iphone__ios">
          <img
            src={images.ios16CardFull}
            alt="iOS 16. Personal is powerful."
            className="what-makes-iphone__ios-visual figma-img"
            width={1380}
            height={600}
          />
          <figcaption className="visually-hidden">
            iOS 16. Personal is powerful.{' '}
            <LearnMoreLink className="what-makes-iphone__ios-link">Learn more</LearnMoreLink>
          </figcaption>
        </Reveal>

        <Reveal as="article" variant="blurUp" className="what-makes-iphone__switch" delay={0.08}>
          <div className="what-makes-iphone__switch-inner">
            <div className="what-makes-iphone__switch-copy">
              <h3 className="what-makes-iphone__switch-title">
                <span className="what-makes-iphone__switch-title-line">Switching to iPhone</span>
                <br />
                is super simple.
              </h3>
              <LearnMoreLink className="what-makes-iphone__switch-link">Learn more</LearnMoreLink>
            </div>
            <img
              src={images.switchingIphone}
              alt="Switching to iPhone"
              className="what-makes-iphone__switch-img figma-img"
              width={675}
              height={357}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
