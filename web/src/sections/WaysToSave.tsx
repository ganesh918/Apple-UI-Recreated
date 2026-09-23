import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';
import { images } from '../assets/images';
import { revealScaleIn, scrollRevealProps } from '../lib/motion';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import { SectionTitle } from '../components/ui/SectionTitle';
import './WaysToSave.css';

const carriers = [
  { image: images.carrierAtt, credit: 'Get up to $800\ncredit after trade-in' },
  { image: images.carrierTmobile, credit: 'Get up to $400\ncredit after trade-in' },
  { image: images.carrierVerizon, credit: 'Get up to $800\ncredit after trade-in' },
];

export function WaysToSave() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="ways-to-save" aria-labelledby="ways-to-save-heading">
      <SectionTitle id="ways-to-save-heading">Ways to save on iPhone</SectionTitle>

      <div className="ways-to-save__content">
        <Reveal variant="scale" className="ways-to-save__trade-in">
          <div className="ways-to-save__trade-in-copy">
            <h3 className="ways-to-save__trade-in-title">
              Trade in your current phone
              <br />
              for credit toward a new one.
            </h3>
            <p className="ways-to-save__trade-in-body">
              Get $200-$600 in credit when you trade
              <br />
              in iPhone 11 or higher and upgrade to
              <br />
              iPhone 14 or iPhone 14 Pro.
              <sup>1</sup>
            </p>
            <LearnMoreLink size="md" className="ways-to-save__trade-in-link" hideIcon />
          </div>
          <motion.img
            src={images.tradeInPhones}
            alt="Trade in iPhones"
            className="ways-to-save__trade-in-img figma-img"
            width={1380}
            height={410}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
        </Reveal>

        <div className="ways-to-save__row">
          <article className="ways-to-save__promo-card ways-to-save__carrier-card interactive-surface">
            <div className="ways-to-save__carrier-head">
              <h3 className="ways-to-save__carrier-title">
                Save up to $800 with select carrier deals at Apple.
                <sup>8</sup>
              </h3>
              <div className="ways-to-save__carrier-copy">
                <p className="ways-to-save__carrier-body">
                  Get the carrier deals you love and save on a new iPhone when you trade in and purchase right here at Apple.
                </p>
                <LearnMoreLink label="Find your deal" size="md" className="ways-to-save__carrier-link" hideIcon />
              </div>
            </div>
            <div className="ways-to-save__carriers">
              {carriers.map((carrier) => (
                <div key={carrier.image} className="ways-to-save__carrier">
                  <img src={carrier.image} alt="" className="figma-img" width={165} height={76} />
                  <p className="ways-to-save__carrier-credit">
                    {carrier.credit.split('\n').map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="ways-to-save__promo-card ways-to-save__card-card interactive-surface" id="apple-card">
            <div className="ways-to-save__apple-card-copy">
              <h3 className="ways-to-save__apple-card-title">
                Get 3% Daily Cash
                <br />
                back with Apple Card.
              </h3>
              <p className="ways-to-save__apple-card-body">
                And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.**
              </p>
              <LearnMoreLink size="md" className="ways-to-save__apple-card-link" hideIcon />
            </div>
            <img
              src={images.appleCard}
              alt="Apple Card on iPhone"
              className="ways-to-save__apple-card-img figma-img"
              width={675}
              height={357}
            />
          </article>
        </div>

        <motion.article
          className="ways-to-save__why-apple"
          style={{ backgroundImage: `url(${images.whyAppleBg})` }}
          variants={revealScaleIn}
          {...scrollRevealProps(reduceMotion)}
        >
          <div className="ways-to-save__why-apple-copy">
            <h3 className="ways-to-save__why-apple-title">
              Why Apple is the best place to buy iPhone.
            </h3>
            <p className="ways-to-save__why-apple-body">
              You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
              <br />
              You can also chat with a Specialist anytime.
            </p>
            <LearnMoreLink size="md" className="ways-to-save__why-apple-link" hideIcon />
          </div>
          <img
            src={images.whyAppleBg}
            alt=""
            className="ways-to-save__why-apple-art figma-img"
            width={1380}
            height={560}
            aria-hidden="true"
          />
        </motion.article>
      </div>
    </section>
  );
}
