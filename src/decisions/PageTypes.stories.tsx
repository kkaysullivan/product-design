import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  HeaderBar,
  ProgressTrack,
  WireButton,
} from '../wireframe/primitives';

const bad = '#c0455e';
const good = '#3f8a5b';

const meta = {
  title: 'Decisions/Page Types',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function Badge({ ok, children }: { ok: boolean; children: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 11,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        color: ok ? good : bad,
      }}
    >
      {ok ? '✓' : '✕'} {children}
    </span>
  );
}

export const IntakeSpa: Story = {
  name: 'Intake — SPA',
  render: () => (
    <>
      <Frame label="SPA — intake page" width={420}>
        <HeaderBar label="Narrow header — task nav only" />
        <div
          style={{
            padding: '20px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ProgressTrack />
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <FieldLine height={20} />
            <FieldLine width="80%" />
            <FieldLine width="60%" />
          </div>
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <WireButton variant="subtle">← Back</WireButton>
            <WireButton variant="primary">Continue</WireButton>
          </div>
        </div>
      </Frame>
      <Callout>
        Narrow header, no chevron on desktop, 1 column, content floats (no
        box), action row matches content width — every intake decision on
        one page.
      </Callout>
    </>
  ),
};

export const IntakeModular: Story = {
  name: 'Intake — Modular',
  render: () => (
    <>
      <Frame label="Modular — intake, embedded on a host page" width={420}>
        <HeaderBar label="Narrow header — indicates the experience" />
        <div style={{ padding: 20 }}>
          <ContentBox label="Background content box">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ProgressTrack chevron />
              <div
                style={{
                  marginTop: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <FieldLine height={20} />
                <FieldLine width="80%" />
                <FieldLine width="60%" />
              </div>
              <div
                style={{
                  marginTop: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <WireButton variant="primary" full>
                  Continue
                </WireButton>
                <WireButton variant="subtle" full>
                  ← Back
                </WireButton>
              </div>
            </div>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Narrow header, boxed content with the progress bar at top of the
        box, primary then subtle stacked below — mobile sizing regardless
        of viewport.
      </Callout>
    </>
  ),
};

export const LowBrand: Story = {
  name: 'Intentionally low-brand',
  render: () => (
    <>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ width: 220 }}>
          <ContentBox label="Intake — correct">
            <FieldLine height={20} width="80%" />
            <FieldLine width="60%" />
            <WireButton variant="primary" full>
              Continue
            </WireButton>
          </ContentBox>
          <div style={{ marginTop: 10 }}>
            <Badge ok>design-system tokens only, no illustration</Badge>
          </div>
        </div>
        <div style={{ width: 220 }}>
          <ContentBox texture>
            <FieldLine height={20} width="80%" />
            <FieldLine width="60%" />
            <WireButton variant="primary" full>
              Continue
            </WireButton>
          </ContentBox>
          <div style={{ marginTop: 10 }}>
            <Badge ok={false}>illustration/texture competing with the task — not this</Badge>
          </div>
        </div>
      </div>
      <Callout>
        Intake is the most constrained page type — branding stays limited
        so the experience reads as focused, clean, clear, and easy to move
        through. Same on SPA and Modular.
      </Callout>
    </>
  ),
};
