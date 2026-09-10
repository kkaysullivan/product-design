import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout } from '../wireframe/primitives';
import spaImg from './images/Experience-Spa.png';
import modularImg from './images/Experience-modular.png';
import hybridImg from './images/Experience-Hybrid.png';

const line = '#8a8a8a';

const meta = {
  title: 'Foundations/Experience Types',
  tags: ['SPA', 'Modular', 'Hybrid'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        display: 'block',
        margin: '0 auto',
        borderRadius: 8,
        border: `1px solid ${line}`,
      }}
    />
  );
}

export const SpaExample: Story = {
  name: 'SPA — dedicated page',
  render: () => (
    <>
      <Screenshot
        src={spaImg}
        alt="SPA intake — a take-home-pay question, mobile and desktop. Narrow header with no global nav, progress bar above the content, content floats with no box."
      />
      <Callout>
        Real example: a standalone take-home-pay question. Narrow header, no
        global nav, progress bar above the content, no box around the
        form — the team controls the whole page.
      </Callout>
    </>
  ),
};

export const ModularExample: Story = {
  name: 'Modular — embedded on a host page',
  render: () => (
    <>
      <Screenshot
        src={modularImg}
        alt="Modular life insurance widget embedded on a RamseySolutions.com page, mobile and desktop. Full global nav surrounds it, and a dark background box holds the question."
      />
      <Callout>
        Real example: the life insurance intake widget embedded on a
        RamseySolutions.com page — full global nav, dark boxed container
        holding the question, host page fully outside the team's control.
      </Callout>
    </>
  ),
};

export const HybridExample: Story = {
  name: 'Modular → SPA — handoff at results',
  render: () => (
    <>
      <Screenshot
        src={hybridImg}
        alt="Real Estate's modular widget embedded on a host page (mobile and desktop), handing off into a focused screen for the remaining question."
      />
      <Callout>
        Real example: Real Estate's modular widget — embedded on the page
        for the zip-code launcher step, then handing off to a focused
        screen for "What best describes you?"
      </Callout>
    </>
  ),
};
