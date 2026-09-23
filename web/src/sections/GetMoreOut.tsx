import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';
import { images } from '../assets/images';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import { defaultViewport, revealScaleIn } from '../lib/motion';
import './GetMoreOut.css';

const linkProps = { hideIcon: true as const, href: '#' };

type GetMoreCardProps = {
  className: string;
  style?: React.CSSProperties;
  index: number;
  children: React.ReactNode;
};

function GetMoreCard({ className, style, index, children }: GetMoreCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <article className={className} style={style}>
        {children}
      </article>
    );
  }

  return (
    <motion.article
      className={className}
      style={style}
      variants={revealScaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay: index * 0.05 }}
    >
      {children}
    </motion.article>
  );
}

export function GetMoreOut() {
  return (
    <section className="get-more-out" aria-labelledby="get-more-heading">
      <Reveal as="h2" id="get-more-heading" variant="blurUp" className="get-more-out__heading">
        Get more out of your iPhone.
      </Reveal>

      <div className="get-more-out__content">
        {/* Apple One — Figma #0:2026 */}
        <GetMoreCard className="get-more-out__card get-more-out__card--apple-one" index={0}>
          <img
            src={images.appleOne}
            alt="Apple One services"
            className="get-more-out__apple-one-img figma-img"
            width={542}
            height={329}
          />
          <div className="get-more-out__apple-one-copy">
            <img
              src={images.appleOneLogo}
              alt="Apple One"
              className="get-more-out__apple-one-logo figma-img"
              width={317}
              height={100}
            />
            <p className="get-more-out__apple-one-subtitle">
              Bundle up to six Apple services. And enjoy more for less.
            </p>
            <div className="get-more-out__apple-one-links">
              <LearnMoreLink {...linkProps} className="get-more-out__link--try-sm try-offset" label="Try it free9" />
              <LearnMoreLink {...linkProps} className="get-more-out__link--md">
                Learn more
              </LearnMoreLink>
            </div>
          </div>
        </GetMoreCard>

        {/* Apple TV+ — Figma #0:2038 / #0:2048 */}
        <GetMoreCard className="get-more-out__card get-more-out__card--tv" index={1}>
          <div className="get-more-out__tv-copy">
            <img
              src={images.appleTvLogo}
              alt="Apple TV+"
              className="get-more-out__tv-logo figma-img"
              width={98}
              height={39}
            />
            <p className="get-more-out__tv-body">
              Get 3 months of Apple TV+ free
              <br />
              when you buy an iPhone.<sup>10</sup>
            </p>
            <div className="get-more-out__tv-links">
              <LearnMoreLink {...linkProps} className="get-more-out__link--light try-offset" variant="light">
                Try it free
              </LearnMoreLink>
              <LearnMoreLink {...linkProps} className="get-more-out__link--light-md" variant="light">
                Learn more
              </LearnMoreLink>
            </div>
          </div>
          <img
            src={images.appleTvShowcase}
            alt=""
            className="get-more-out__tv-showcase figma-img"
            width={675}
            height={344}
            aria-hidden="true"
          />
        </GetMoreCard>

        {/* Apple Music — Figma #0:2082 */}
        <GetMoreCard className="get-more-out__card get-more-out__card--music" index={2}>
          <div className="get-more-out__music-copy">
            <img
              src={images.appleMusicLogo}
              alt="Apple Music"
              className="get-more-out__music-logo figma-img"
              width={154}
              height={37}
            />
            <p className="get-more-out__music-body">
              Over 100 million songs.
              <br />
              Start listening for free today.
            </p>
            <div className="get-more-out__music-links">
              <LearnMoreLink {...linkProps} className="get-more-out__link--try try-offset" label="Try it free11" />
              <LearnMoreLink {...linkProps} className="get-more-out__link--md">
                Learn more
              </LearnMoreLink>
            </div>
          </div>
          <div className="get-more-out__albums">
            <img
              src={images.musicAlbumLeft}
              alt=""
              className="get-more-out__album get-more-out__album--left figma-img"
              width={250}
              height={250}
            />
            <img
              src={images.musicAlbumMiddle}
              alt=""
              className="get-more-out__album get-more-out__album--middle figma-img"
              width={283}
              height={283}
            />
            <img
              src={images.musicAlbumRight}
              alt=""
              className="get-more-out__album get-more-out__album--right figma-img"
              width={250}
              height={250}
            />
          </div>
        </GetMoreCard>

        {/* Apple News+ — Figma #0:2105 */}
        <GetMoreCard
          className="get-more-out__card get-more-out__card--news"
          style={{ backgroundImage: `url(${images.appleNewsBg})` }}
          index={3}
        >
          <div className="get-more-out__news-copy">
            <img
              src={images.appleNewsLogo}
              alt="Apple News+"
              className="get-more-out__news-logo figma-img"
              width={184}
              height={39}
            />
            <p className="get-more-out__news-body">
              Get 3 months of Apple News+ free
              <br />
              when you buy an iPhone.<sup>12</sup>
            </p>
            <LearnMoreLink {...linkProps} className="get-more-out__link--md">
              Learn more
            </LearnMoreLink>
          </div>
          <img
            src={images.appleNewsBg}
            alt=""
            className="get-more-out__news-art figma-img"
            width={675}
            height={616}
            aria-hidden="true"
          />
        </GetMoreCard>

        {/* Apple Arcade — Figma #0:2113 */}
        <GetMoreCard
          className="get-more-out__card get-more-out__card--arcade"
          style={{ backgroundImage: `url(${images.appleArcadeCardBg})` }}
          index={4}
        >
          <div className="get-more-out__arcade-copy">
            <img
              src={images.appleArcadeLogo}
              alt="Apple Arcade"
              className="get-more-out__arcade-logo figma-img"
              width={180}
              height={39}
            />
            <p className="get-more-out__arcade-body">
              Get 3 months of Apple Arcade free when you buy an iPhone.
            </p>
            <div className="get-more-out__arcade-links">
              <LearnMoreLink {...linkProps} className="get-more-out__link--try try-offset" label="Try it free13" />
              <LearnMoreLink {...linkProps} className="get-more-out__link--md">
                Learn more
              </LearnMoreLink>
            </div>
          </div>
          <img
            src={images.appleArcadeCardBg}
            alt=""
            className="get-more-out__arcade-art figma-img"
            width={675}
            height={616}
            aria-hidden="true"
          />
        </GetMoreCard>

        {/* Apple Fitness+ — Figma #0:2126 */}
        <GetMoreCard className="get-more-out__card get-more-out__card--fitness" index={5}>
          <div className="get-more-out__fitness-copy">
            <img
              src={images.fitnessLogo}
              alt="Apple Fitness+"
              className="get-more-out__fitness-logo figma-img"
              width={214}
              height={40}
            />
            <p className="get-more-out__fitness-body">
              Fitness for everyone.
              <br />
              Now all you need is iPhone.
            </p>
            <LearnMoreLink {...linkProps} className="get-more-out__fitness-learn get-more-out__link--md">
              Learn more
            </LearnMoreLink>
            <LearnMoreLink
              {...linkProps}
              className="get-more-out__fitness-try get-more-out__link--try try-offset"
              label="Try it free14"
            />
          </div>
          <img
            src={images.fitnessHero}
            alt="Apple Fitness+"
            className="get-more-out__fitness-img figma-img"
            width={602}
            height={299}
          />
        </GetMoreCard>

        {/* Apple Gift Card — Figma #0:2140 */}
        <GetMoreCard className="get-more-out__card get-more-out__card--gift" index={6}>
          <div className="get-more-out__gift-copy">
            <img
              src={images.giftCardLogo}
              alt="Apple Gift Card"
              className="get-more-out__gift-logo figma-img"
              width={213}
              height={40}
            />
            <p className="get-more-out__gift-body">For everything and everyone.</p>
            <LearnMoreLink {...linkProps} className="get-more-out__gift-learn get-more-out__link--md">
              Learn more
            </LearnMoreLink>
            <LearnMoreLink {...linkProps} className="get-more-out__gift-buy get-more-out__link--md">
              Buy
            </LearnMoreLink>
          </div>
          <img
            src={images.giftCard}
            alt="Apple Gift Card"
            className="get-more-out__gift-img figma-img"
            width={675}
            height={319}
          />
        </GetMoreCard>

        {/* Apple Research app — Figma #0:2151 */}
        <GetMoreCard className="get-more-out__card get-more-out__card--research" index={7}>
          <div className="get-more-out__research-copy">
            <h3 className="get-more-out__research-title">
              <span className="get-more-out__research-title-line">Introducing</span>
              <br />
              <span className="get-more-out__research-title-line">the Apple</span>
              <br />
              <span className="get-more-out__research-title-line">Research app.</span>
            </h3>
            <p className="get-more-out__research-body">The future of health research is you.</p>
            <LearnMoreLink {...linkProps} className="get-more-out__research-link get-more-out__link--md">
              Learn more
            </LearnMoreLink>
          </div>
          <img
            src={images.researchApp}
            alt="Apple Research app"
            className="get-more-out__research-img figma-img"
            width={766}
            height={388}
          />
        </GetMoreCard>
      </div>
    </section>
  );
}
