import type { Meta, StoryObj } from '@storybook/react-vite';
import { brandPrimary, Callout, FieldLine, Frame, WireButton } from '../wireframe/primitives';

const line = '#8a8a8a';
const ink = '#4a4a4a';
const muted = '#8a8a8a';

const meta = {
  title: 'Decisions/Spacing and Padding',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function GutterColumn({ px }: { px: number }) {
  return (
    <div
      style={{
        position: 'relative',
        width: px,
        minWidth: px,
        alignSelf: 'stretch',
        background:
          'repeating-linear-gradient(45deg, rgba(0,115,185,0.12) 0 4px, transparent 4px 8px)',
        borderLeft: `1px dashed ${line}`,
        borderRight: `1px dashed ${line}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: 9,
          color: ink,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          whiteSpace: 'nowrap',
          transform: 'rotate(-90deg)',
        }}
      >
        {px}px
      </span>
    </div>
  );
}

/** Horizontal scale of the only allowed stops, with the popular ones emphasized. */
function ValueScale({ values, popular }: { values: number[]; popular: number[] }) {
  return (
    <div style={{ position: 'relative', padding: '4px 4px 0' }}>
      <div
        style={{
          position: 'absolute',
          left: 4,
          right: 4,
          top: 11,
          height: 1,
          background: line,
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: values.length > 6 ? 10 : 24,
          position: 'relative',
          overflowX: 'auto',
        }}
      >
        {values.map((v) => {
          const isPopular = popular.includes(v);
          return (
            <div
              key={v}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                flex: '0 0 auto',
              }}
            >
              <div style={{ height: 14, display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: isPopular ? 14 : 8,
                    height: isPopular ? 14 : 8,
                    borderRadius: '50%',
                    background: isPopular ? brandPrimary : '#fff',
                    border: isPopular ? 'none' : `1.5px solid ${muted}`,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  color: isPopular ? ink : muted,
                  fontWeight: isPopular ? 700 : 400,
                }}
              >
                {v}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PaddingRow({ px, height = 180 }: { px: number; height?: number }) {
  return (
    <div style={{ display: 'flex', height }}>
      <GutterColumn px={px} />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 10,
          padding: '0 20px',
        }}
      >
        <FieldLine height={20} />
        <FieldLine width="70%" />
        <FieldLine width="50%" />
        <div style={{ marginTop: 10 }}>
          <WireButton variant="primary">Continue</WireButton>
        </div>
      </div>
      <GutterColumn px={px} />
    </div>
  );
}

export const SpaMobile: Story = {
  name: 'SPA — mobile (8 / 16 / 24px)',
  render: () => (
    <>
      <Frame label="SPA — mobile" width={360}>
        <div style={{ padding: '16px 20px 4px' }}>
          <ValueScale values={[8, 16, 24]} popular={[16, 24]} />
        </div>
        <PaddingRow px={16} />
      </Frame>
      <Callout>
        Only 3 options — 8, 16, or 24px. 16px and 24px (filled) are the most
        common; 8px is allowed but rare. Shown here at 16px. Same value
        reused for padding inside the content area.
      </Callout>
    </>
  ),
};

export const SpaDesktop: Story = {
  name: 'SPA — desktop (32–128px, 8px steps)',
  render: () => (
    <>
      <Frame label="SPA — desktop" width={860}>
        <div style={{ padding: '16px 24px 4px' }}>
          <ValueScale
            values={[32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128]}
            popular={[32, 48]}
          />
        </div>
        <PaddingRow px={64} height={220} />
      </Frame>
      <Callout>
        13 options only, in 8px steps from 32 to 128. 32px and 48px (filled)
        are the most common. Shown here at 64px, one of the other valid
        stops.
      </Callout>
    </>
  ),
};

export const Modular: Story = {
  name: 'Modular — mobile & desktop (8 / 16 / 24px)',
  render: () => (
    <>
      <Frame label="Modular — mobile & desktop" width={400}>
        <div style={{ padding: '16px 20px 4px' }}>
          <ValueScale values={[8, 16, 24]} popular={[]} />
        </div>
        <PaddingRow px={16} />
      </Frame>
      <Callout>
        Only 3 options — 8, 16, or 24px, same set at every breakpoint.
        Shown here at 16px.
      </Callout>
    </>
  ),
};
