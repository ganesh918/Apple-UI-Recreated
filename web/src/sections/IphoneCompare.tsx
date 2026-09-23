import { motion, useReducedMotion } from 'framer-motion';
import { hoverLift, staggerItemUp, staggerStep } from '../lib/motion';
import {
  compareFeatureRowHeights,
  compareHeaderHeight,
  compareProducts,
  type CompareFeature,
  type CompareProduct,
} from '../data/compareData';
import { BuyButton } from '../components/ui/BuyButton';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import { SectionTitle } from '../components/ui/SectionTitle';
import './IphoneCompare.css';

function renderLines(text: string) {
  return text.split('\n').map((line, idx) => (
    <span key={`${line}-${idx}`}>
      {idx > 0 && <br />}
      {line}
    </span>
  ));
}

function renderLineWithFootnote(line: string, footnote: string) {
  return (
    <span className="iphone-compare__footnote-group">
      {line}
      <sup>{footnote}</sup>
    </span>
  );
}

function renderWithFootnote(text: string, footnote?: string) {
  if (!footnote) {
    return renderLines(text);
  }

  const lines = text.split('\n');

  return lines.map((line, lineIdx) => (
    <span key={`${line}-${lineIdx}`}>
      {lineIdx > 0 && <br />}
      {lineIdx === lines.length - 1 ? renderLineWithFootnote(line, footnote) : line}
    </span>
  ));
}

function renderExtra(extra: string) {
  const footnoteMatch = extra.match(/^(.+?)(\d+)$/);
  if (footnoteMatch) {
    return (
      <>
        {footnoteMatch[1]}
        <sup>{footnoteMatch[2]}</sup>
      </>
    );
  }

  return renderLines(extra);
}

function FeatureCell({ feature }: { feature: CompareFeature }) {
  if (feature.placeholder) {
    return (
      <div className="iphone-compare__feature is-placeholder">
        <span className="iphone-compare__feature-dash" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="iphone-compare__feature">
      {feature.icon && (
        <img
          src={feature.icon}
          alt=""
          className="iphone-compare__feature-icon figma-img"
          width={feature.iconWidth}
          height={feature.iconHeight}
          aria-hidden="true"
        />
      )}
      {feature.title && (
        <p
          className={`iphone-compare__feature-title ${
            feature.titleVariant === 'display' ? 'is-display' : ''
          } ${feature.muted ? 'is-muted' : ''}`}
        >
          {renderWithFootnote(feature.title, feature.titleFootnote)}
        </p>
      )}
      {feature.subtitle && (
        <p className={`iphone-compare__feature-sub ${feature.muted ? 'is-muted' : ''}`}>
          {renderWithFootnote(feature.subtitle, feature.subtitleFootnote)}
        </p>
      )}
      {feature.extras?.map((extra, index) => (
        <p key={`${extra}-${index}`} className="iphone-compare__feature-extra">
          {renderExtra(extra)}
        </p>
      ))}
      {feature.specLines?.map((line) => (
        <p key={line.join('-')} className="iphone-compare__feature-spec">
          {line.map((part, partIndex) => (
            <span key={part}>
              {partIndex > 0 && <span className="iphone-compare__feature-spec-sep"> | </span>}
              {part}
            </span>
          ))}
        </p>
      ))}
      {feature.specDash && (
        <span className="iphone-compare__feature-dash iphone-compare__feature-dash--spec" aria-hidden="true" />
      )}
      {feature.details?.map((detail) => (
        <p key={detail} className="iphone-compare__feature-detail">
          {renderLines(detail)}
        </p>
      ))}
    </div>
  );
}

function CompareHeader({ product }: { product: CompareProduct }) {
  return (
    <div className="iphone-compare__header">
      <img
        src={product.phoneImage}
        alt={product.name}
        className="iphone-compare__phone figma-img"
        width={product.phoneWidth}
        height={product.phoneHeight}
      />
      <img
        src={product.colorsImage}
        alt={`${product.name} colors`}
        className="iphone-compare__colors figma-img"
      />
      <div className="iphone-compare__info">
        <div className="iphone-compare__logo-wrap">
          {product.isNew && <span className="iphone-compare__new">New</span>}
          <img
            src={product.logoImage}
            alt={product.name}
            className="iphone-compare__logo figma-img"
            height={20}
          />
        </div>
        <p className="iphone-compare__tagline">{product.tagline}</p>
        <p className="iphone-compare__price">{product.price}</p>
        <div className="iphone-compare__actions">
          <BuyButton variant="small" />
          <LearnMoreLink variant="dark" size="sm" hideIcon />
        </div>
      </div>
    </div>
  );
}

export function IphoneCompare() {
  const rowCount = compareFeatureRowHeights.length;
  const reduceMotion = useReducedMotion();

  return (
    <section className="iphone-compare" id="compare" aria-labelledby="compare-heading">
      <div className="iphone-compare__inner">
        <SectionTitle size="sm" className="iphone-compare__title">
          <span id="compare-heading">Which iPhone is right for you?</span>
        </SectionTitle>

        <div className="iphone-compare__matrix">
          <div
            className="iphone-compare__header-row"
            style={{ height: compareHeaderHeight }}
          >
            {compareProducts.map((product, colIndex) => (
              <motion.article
                key={product.id}
                id={product.id === '13' ? 'iphone-13' : undefined}
                className="iphone-compare__column iphone-compare__column--interactive"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={staggerStep(colIndex, 0.08).transition}
                whileHover={reduceMotion ? undefined : hoverLift.whileHover}
                whileTap={reduceMotion ? undefined : hoverLift.whileTap}
              >
                <CompareHeader product={product} />
              </motion.article>
            ))}
          </div>

          {compareFeatureRowHeights.map((rowHeight, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className={`iphone-compare__feature-row${
                rowIndex === rowCount - 1 ? ' is-last' : ''
              }`}
              style={{ height: rowHeight }}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={staggerStep(rowIndex, 0.035).transition}
            >
              {compareProducts.map((product) => (
                <div key={`${product.id}-r-${rowIndex}`} className="iphone-compare__column">
                  <FeatureCell feature={product.features[rowIndex]} />
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="iphone-compare__footer-links"
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-10%' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={staggerItemUp}>
            <LearnMoreLink label="Compare all iPhone models" size="lg" hideIcon />
          </motion.div>
          <motion.div variants={staggerItemUp}>
            <LearnMoreLink label="Shop iPhone" size="md" hideIcon />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
