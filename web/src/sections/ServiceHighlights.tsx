import { motion, useReducedMotion } from 'framer-motion';
import { hoverLift, staggerItemBlur, staggerStep } from '../lib/motion';
import { StaggerGroup } from '../components/motion/StaggerGroup';
import { images } from '../assets/images';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import './ServiceHighlights.css';

const services = [
  {
    id: 'delivery',
    icon: images.iconDelivery,
    width: 51,
    height: 75,
    title: 'Fast, free delivery',
    body: (
      <>
        Or pick up available items at
        <br />
        an Apple Store.
      </>
    ),
  },
  {
    id: 'financing',
    icon: images.iconFinancing,
    width: 55,
    height: 75,
    title: 'Pay monthly at 0% APR',
    body: (
      <>
        You can pay over time when
        <br />
        you choose to check out with
        <br />
        Apple Card Monthly
        <br />
        Installments.**
      </>
    ),
  },
  {
    id: 'support',
    icon: images.iconSupport,
    width: 71,
    height: 75,
    title: 'Get help buying',
    body: (
      <>
        Have a question? Call a
        <br />
        Specialist or chat online.
        <br />
        Call 1‑800‑MY‑APPLE.
      </>
    ),
  },
] as const;

export function ServiceHighlights() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="service-highlights" aria-label="Shopping services">
      <StaggerGroup className="service-highlights__grid">
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            className={`service-highlights__item service-highlights__item--${service.id}`}
            variants={staggerItemBlur}
            transition={staggerStep(index, 0).transition}
            whileHover={reduceMotion ? undefined : hoverLift.whileHover}
            whileTap={reduceMotion ? undefined : hoverLift.whileTap}
          >
            <img
              src={service.icon}
              alt=""
              className="service-highlights__icon figma-img"
              width={service.width}
              height={service.height}
              aria-hidden="true"
            />
            <h3 className="service-highlights__title">{service.title}</h3>
            <div className="service-highlights__copy">
              <p className="service-highlights__body">{service.body}</p>
              <LearnMoreLink className="service-highlights__link">Learn more</LearnMoreLink>
            </div>
          </motion.article>
        ))}
      </StaggerGroup>
    </section>
  );
}
