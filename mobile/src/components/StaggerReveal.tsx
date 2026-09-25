import { type ReactNode } from 'react';
import { Reveal } from './Reveal';
import { staggerDelay } from '../motion/presets';

type Props = {
  index: number;
  children: ReactNode;
  stepMs?: number;
};

export function StaggerReveal({ index, children, stepMs = 70 }: Props) {
  return (
    <Reveal variant="scale" delay={staggerDelay(index, stepMs)}>
      {children}
    </Reveal>
  );
}
