import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout, FieldLine, Frame, WireButton } from '../wireframe/primitives';

const line = '#8a8a8a';
const fill = '#e3e3e3';
const ease = 'cubic-bezier(0.4, 0, 0.2, 1)';

const meta = {
  title: 'Decisions/Motion',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function EntrySpaDemo() {
  const [run, setRun] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(false);
    const id = setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(id);
  }, [run]);

  return (
    <>
      <Frame label="Arriving from RS.com" width={420}>
        <div
          style={{
            padding: 24,
            background: entered ? '#fafafa' : '#2a2a2a',
            transition: `background-color 700ms ${ease}`,
          }}
        >
          <div
            style={{
              opacity: entered ? 1 : 0,
              transition: `opacity 700ms ${ease} 100ms`,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <FieldLine />
            <FieldLine width="60%" />
            <WireButton variant="primary" full>
              Continue
            </WireButton>
          </div>
        </div>
      </Frame>
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <WireButton variant="subtle" onClick={() => setRun((r) => r + 1)}>
          ↻ Replay entry
        </WireButton>
      </div>
      <Callout>
        One big transition, once, at entry — dark-to-light coming from
        RS.com. Everything after this point stays subtle.
      </Callout>
    </>
  );
}

function EntryModularDemo() {
  return (
    <>
      <Frame label="Embedded inline on a host page" width={420}>
        <div
          style={{
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <FieldLine />
          <FieldLine width="60%" />
          <WireButton variant="primary" full>
            Continue
          </WireButton>
        </div>
      </Frame>
      <Callout>
        No big transition — content is just there. Motion stays at a
        minimum except on special screens.
      </Callout>
    </>
  );
}

function EasingDemo() {
  const [run, setRun] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    const id = setTimeout(() => setActive(true), 60);
    return () => clearTimeout(id);
  }, [run]);

  return (
    <>
      <Frame label="Three different moves, one curve" width={420}>
        <div
          style={{
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            style={{
              width: 90,
              height: 14,
              borderRadius: 3,
              background: fill,
              border: `1px solid ${line}`,
              transform: active ? 'translateX(0)' : 'translateX(-140px)',
              transition: `transform 650ms ${ease}`,
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: fill,
              border: `1px solid ${line}`,
              opacity: active ? 1 : 0,
              transition: `opacity 650ms ${ease}`,
            }}
          />
          <div
            style={{
              width: 60,
              height: 14,
              borderRadius: 3,
              background: fill,
              border: `1px solid ${line}`,
              transform: active ? 'scaleX(1)' : 'scaleX(0.2)',
              transformOrigin: 'left',
              transition: `transform 650ms ${ease}`,
            }}
          />
        </div>
      </Frame>
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <WireButton variant="subtle" onClick={() => setRun((r) => r + 1)}>
          ↻ Replay
        </WireButton>
      </div>
      <Callout>
        Slide, fade, scale — different properties, same curve and duration.
        The curve shown here is a stand-in; swap in the exact Ramsey ease
        curve already running in the portal.
      </Callout>
    </>
  );
}

function ContinuityDemo() {
  const [screen, setScreen] = useState<'a' | 'b'>('a');
  const onB = screen === 'b';

  return (
    <>
      <Frame label="Page to page" width={420}>
        <div
          style={{
            position: 'relative',
            height: 200,
            margin: 16,
            border: `1.5px dashed ${line}`,
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: onB ? '50%' : 16,
              transform: onB ? 'translateX(-50%)' : 'none',
              width: onB ? 100 : 56,
              height: onB ? 32 : 22,
              borderRadius: 4,
              background: fill,
              border: `1.5px solid ${line}`,
              transition: `all 500ms ${ease}`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: '60px 20px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              opacity: onB ? 1 : 0,
              transition: `opacity 400ms ${ease} 150ms`,
            }}
          >
            <FieldLine />
            <FieldLine width="70%" />
          </div>
        </div>
      </Frame>
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <WireButton
          variant="subtle"
          onClick={() => setScreen(onB ? 'a' : 'b')}
        >
          {onB ? '← Back' : 'Next screen →'}
        </WireButton>
      </div>
      <Callout>
        The logo carries across the transition instead of cutting — same
        element, new position and size — so it reads as continuity, not a
        flip.
      </Callout>
    </>
  );
}

export const EntrySpa: Story = {
  name: 'Entry transition — SPA',
  render: () => <EntrySpaDemo />,
};

export const EntryModular: Story = {
  name: 'Entry transition — Modular',
  render: () => <EntryModularDemo />,
};

export const Easing: Story = {
  name: 'One easing curve',
  render: () => <EasingDemo />,
};

export const Continuity: Story = {
  name: 'Continuity across pages',
  render: () => <ContinuityDemo />,
};
