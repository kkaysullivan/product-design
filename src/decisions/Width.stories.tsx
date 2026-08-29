import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout, ContentBox, FieldLine, Frame } from '../wireframe/primitives';

const line = '#8a8a8a';
const ink = '#4a4a4a';

const meta = {
  title: 'Decisions/Width',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/** Faint 12-column grid, shown as a reference behind the content it constrains. */
function GridOverlay() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        gap: 6,
        padding: '0 4px',
        pointerEvents: 'none',
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{ flex: 1, background: 'rgba(0,115,185,0.07)' }} />
      ))}
    </div>
  );
}

function CapLabel({ children }: { children: string }) {
  return (
    <span
      style={{
        position: 'absolute',
        top: -10,
        left: 12,
        background: '#fafafa',
        padding: '0 6px',
        fontSize: 11,
        color: ink,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      }}
    >
      {children}
    </span>
  );
}

export const SpaOneColumn: Story = {
  name: 'SPA — 1 column, ≤800px',
  render: () => (
    <>
      <Frame label="SPA — intake form, desktop, wide viewport" width={960}>
        <div style={{ position: 'relative', padding: '28px 0', minHeight: 220 }}>
          <GridOverlay />
          <div
            style={{
              width: 800,
              maxWidth: '100%',
              margin: '0 auto',
              border: `1.5px dashed ${line}`,
              borderRadius: 6,
              background: 'rgba(255,255,255,0.85)',
              padding: '20px 24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span
                style={{
                  fontSize: 11,
                  color: ink,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                content — capped at 800px
              </span>
              <FieldLine height={20} />
              <FieldLine width="70%" />
            </div>
          </div>
        </div>
      </Frame>
      <Callout>
        Sits on a 12-column grid; intake page forms never exceed 800px on
        desktop, however wide the viewport gets.
      </Callout>
    </>
  ),
};

export const SpaTwoColumn: Story = {
  name: 'SPA — 2 column, within the grid',
  render: () => (
    <>
      <Frame label="SPA — desktop, splash/intro" width={960}>
        <div style={{ position: 'relative', padding: '28px 40px', minHeight: 220 }}>
          <GridOverlay />
          <div style={{ position: 'relative', display: 'flex', gap: 24 }}>
            <div
              style={{
                flexBasis: '58%',
                border: `1.5px dashed ${line}`,
                borderRadius: 6,
                background: 'rgba(255,255,255,0.85)',
                padding: '20px 20px 16px',
                position: 'relative',
              }}
            >
              <CapLabel>form — ~7 of 12 cols</CapLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <FieldLine />
                <FieldLine width="70%" />
              </div>
            </div>
            <div
              style={{
                flexBasis: '38%',
                border: `1.5px dashed ${line}`,
                borderRadius: 6,
                background: 'rgba(255,255,255,0.85)',
                padding: '20px 20px 16px',
                position: 'relative',
              }}
            >
              <CapLabel>contextual — ~5 of 12 cols</CapLabel>
              <FieldLine height={80} />
            </div>
          </div>
        </div>
      </Frame>
      <Callout>
        Column widths are best judgement — as long as both fit inside the
        12-column grid. Left is always the form.
      </Callout>
    </>
  ),
};

export const SpaResultsCap: Story = {
  name: 'SPA — results, ≤800px',
  render: () => (
    <>
      <Frame label="SPA — results, wide viewport" width={960}>
        <div style={{ padding: '28px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 800, maxWidth: '100%' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <ContentBox>
                <FieldLine height={20} />
                <FieldLine width="70%" />
              </ContentBox>
              <ContentBox>
                <FieldLine height={40} />
              </ContentBox>
            </div>
          </div>
        </div>
      </Frame>
      <Callout>
        Results only — not intake. Content area caps at 800px and never
        stretches wider, no matter how wide the viewport gets.
      </Callout>
    </>
  ),
};

export const ModularFluid: Story = {
  name: 'Modular — fluid, 320–600px',
  render: () => (
    <>
      <Frame label="320px — minimum (e.g. sidebar)" width={320}>
        <div style={{ padding: 16 }}>
          <ContentBox>
            <FieldLine />
            <FieldLine width="60%" />
          </ContentBox>
        </div>
      </Frame>
      <Frame label="600px — maximum (e.g. blog article)" width={600}>
        <div style={{ padding: 16 }}>
          <ContentBox>
            <FieldLine />
            <FieldLine width="60%" />
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Fluid based on where it's placed — never narrower than 320px, never
        wider than 600px.
      </Callout>
    </>
  ),
};
