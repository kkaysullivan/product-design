import type { Meta, StoryObj } from '@storybook/react-vite';
import { brandPrimary, Callout, Frame, WireButton } from '../wireframe/primitives';

const line = '#8a8a8a';
const track = '#e3e3e3';
const ink = '#4a4a4a';

const meta = {
  title: 'Decisions/Reachability',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const zoneLabelStyle = {
  fontSize: 10,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  color: ink,
  letterSpacing: 0.3,
  textTransform: 'uppercase' as const,
};

function ThumbZonePhone() {
  return (
    <div style={{ position: 'relative', width: 200, height: 340, margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          border: `2px solid ${line}`,
          borderRadius: 26,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            flex: 1,
            background: 'rgba(214, 84, 110, 0.16)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={zoneLabelStyle}>hard to reach</span>
        </div>
        <div
          style={{
            flex: 1,
            background: 'rgba(224, 168, 60, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={zoneLabelStyle}>stretch</span>
        </div>
        <div
          style={{
            flex: 1.3,
            background: 'rgba(88, 168, 108, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: '0 20px',
          }}
        >
          <span style={zoneLabelStyle}>easy reach</span>
          <WireButton variant="primary" full>
            Continue
          </WireButton>
        </div>
      </div>
      <svg
        viewBox="0 0 200 340"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <path
          d="M188,330 C 40,300 8,170 26,100"
          fill="none"
          stroke={line}
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

function ThumbZonePhoneArc() {
  return (
    <div style={{ position: 'relative', width: 200, height: 340, margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          border: `2px solid ${line}`,
          borderRadius: 26,
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 200 340"
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        >
          <rect x={0} y={0} width={200} height={340} fill="rgba(214, 84, 110, 0.16)" />
          <rect x={0} y={136} width={200} height={204} fill="rgba(224, 168, 60, 0.18)" />
          <path
            d="M20,340 C20,260 60,150 100,150 C140,150 180,260 180,340 Z"
            fill="rgba(88, 168, 108, 0.28)"
          />
        </svg>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 26,
          transform: 'translateX(-50%)',
          width: 130,
        }}
      >
        <WireButton variant="primary" full>
          View report
        </WireButton>
      </div>
    </div>
  );
}

function HoldingStats() {
  const rows = [
    { label: 'One-handed', pct: 49, emphasize: true },
    { label: 'Cradled', pct: 36, emphasize: false },
    { label: 'Two-handed', pct: 15, emphasize: false },
  ];
  return (
    <div style={{ width: 320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {rows.map((r) => (
        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 90,
              fontSize: 12,
              color: ink,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            {r.label}
          </span>
          <div
            style={{
              flex: 1,
              height: 14,
              borderRadius: 4,
              background: track,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${r.pct}%`,
                height: '100%',
                background: r.emphasize ? brandPrimary : line,
              }}
            />
          </div>
          <span style={{ width: 34, fontSize: 12, textAlign: 'right', color: ink }}>
            {r.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}

export const HowUsersHold: Story = {
  name: 'How users hold mobile devices',
  render: () => (
    <>
      <Frame label="General reference — not intake-specific" width={420}>
        <div style={{ padding: '28px 24px' }}>
          <HoldingStats />
        </div>
      </Frame>
      <Callout>
        Nearly half of users hold their phone one-handed — the rest split
        between cradling and two hands. This is the "why" behind
        reachability.
      </Callout>
    </>
  ),
};

export const ThumbZoneSplash: Story = {
  name: 'Thumb zones — splash',
  render: () => (
    <>
      <Frame label="Mobile / Modular — splash" width={280}>
        <div style={{ padding: '24px 0' }}>
          <ThumbZonePhone />
        </div>
      </Frame>
      <Callout>
        Content and CTAs sit low, in the easy-reach zone toward the thumb.
      </Callout>
    </>
  ),
};

export const ThumbZoneIntake: Story = {
  name: 'Thumb zones — intake',
  render: () => (
    <>
      <Frame label="Mobile / Modular — intake" width={280}>
        <div style={{ padding: '24px 0' }}>
          <ThumbZonePhone />
        </div>
      </Frame>
      <Callout>
        Same easy-reach placement holds throughout the intake flow — no
        change from splash. Desktop doesn't apply here — use{' '}
        <a href="https://lawsofux.com/fittss-law/" target="_blank" rel="noreferrer">
          Fitt's Law
        </a>{' '}
        instead.
      </Callout>
    </>
  ),
};

export const ThumbZoneResultsDashboard: Story = {
  name: 'Thumb zones — results & dashboard',
  render: () => (
    <>
      <Frame label="Mobile / Modular — results & dashboard" width={280}>
        <div style={{ padding: '24px 0' }}>
          <ThumbZonePhoneArc />
        </div>
      </Frame>
      <Callout>
        Mostly scroll-and-view, so most of the screen reads as comfortable
        reach — the true easy-reach arc is reserved for the bottom action.
      </Callout>
    </>
  ),
};
