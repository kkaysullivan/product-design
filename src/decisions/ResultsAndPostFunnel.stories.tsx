import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  brandPrimary,
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  HeaderBar,
} from '../wireframe/primitives';

const line = '#8a8a8a';
const ink = '#4a4a4a';
const bad = '#c0455e';
const good = '#3f8a5b';

const meta = {
  title: 'Decisions/Results and Post Funnel',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function Arrow() {
  return (
    <div
      style={{
        fontSize: 20,
        color: ink,
        display: 'flex',
        alignItems: 'center',
        padding: '0 6px',
      }}
      aria-hidden="true"
    >
      →
    </div>
  );
}

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

export const SpaOnly: Story = {
  name: 'Results — SPA only, no exceptions',
  render: () => (
    <>
      <Frame label="Funnel handoff" width={520}>
        <div style={{ padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 150 }}>
            <ContentBox label="Modular intake">
              <FieldLine />
              <FieldLine width="60%" />
            </ContentBox>
          </div>
          <Arrow />
          <div style={{ width: 190, border: `1.5px dashed ${line}`, borderRadius: 8, padding: '16px 16px 12px', position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                top: -10,
                left: 10,
                background: '#fafafa',
                padding: '0 6px',
                fontSize: 11,
                color: ink,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              }}
            >
              SPA — results
            </span>
            <FieldLine height={20} />
            <div style={{ marginTop: 8 }}>
              <FieldLine width="70%" />
            </div>
          </div>
        </div>
        <div style={{ padding: '0 24px 20px', display: 'flex', justifyContent: 'center' }}>
          <Badge ok={false}>Results embedded inline in Modular — not allowed</Badge>
        </div>
      </Frame>
      <Callout>
        Results and post-funnel always load in a SPA experience, whether
        intake was SPA or Modular. No exceptions.
      </Callout>
    </>
  ),
};

export const SeparateRuleSet: Story = {
  name: 'Results — separate rule set',
  render: () => (
    <>
      <Frame label="SPA — results (desktop)" width={480}>
        <HeaderBar label="Expanded header — logo goes back" />
        <div
          style={{
            padding: 24,
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
          <ContentBox>
            <FieldLine width="80%" />
            <FieldLine width="50%" />
          </ContentBox>
          <ContentBox>
            <FieldLine height={40} />
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        No stable action bar, no 1-column intake constraint — results and
        dashboards run on completely different layout logic.
      </Callout>
    </>
  ),
};

export const ProConnectRouting: Story = {
  name: 'Pro & service results — routing',
  render: () => (
    <>
      <Frame label="Where pro connection / service results land" width={480}>
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <FieldLine height={20} width="60%" />
            </div>
            <Arrow />
            <div
              style={{
                flex: 1,
                border: `1.5px solid ${good}`,
                borderRadius: 8,
                padding: 12,
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, color: ink }}>
                Ramsey Connect
              </span>
              <div style={{ marginTop: 4 }}>
                <Badge ok>correct destination</Badge>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.5 }}>
            <div style={{ flex: 1 }} />
            <Arrow />
            <div
              style={{
                flex: 1,
                border: `1.5px dashed ${bad}`,
                borderRadius: 8,
                padding: 12,
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, color: ink }}>
                Standalone page on RamseySolutions.com
              </span>
              <div style={{ marginTop: 4 }}>
                <Badge ok={false}>never this</Badge>
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <Callout>
        All pro connection and service results land inside Ramsey Connect —
        never a standalone page on RamseySolutions.com.
      </Callout>
    </>
  ),
};

export const LoaderTransition: Story = {
  name: 'Loader — the transition into results',
  render: () => (
    <>
      <style>{`@keyframes wf-spin { to { transform: rotate(360deg); } }`}</style>
      <Frame label="Intake finishes → results" width={480}>
        <div
          style={{
            padding: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ textAlign: 'center', width: 100 }}>
            <FieldLine height={40} />
            <span style={{ fontSize: 11, color: ink }}>Final intake screen</span>
          </div>
          <Arrow />
          <div style={{ textAlign: 'center', width: 100 }}>
            <div
              style={{
                width: 36,
                height: 36,
                margin: '0 auto',
                borderRadius: '50%',
                border: `3px solid ${line}`,
                borderTopColor: brandPrimary,
                animation: 'wf-spin 900ms linear infinite',
              }}
            />
            <span style={{ fontSize: 11, color: ink, display: 'block', marginTop: 6 }}>
              Loader (the transition)
            </span>
          </div>
          <Arrow />
          <div style={{ textAlign: 'center', width: 100 }}>
            <FieldLine height={40} />
            <span style={{ fontSize: 11, color: ink }}>Results page</span>
          </div>
        </div>
      </Frame>
      <Callout>
        The loader while results generate is the transition — don't stack a
        second one on top of it.
      </Callout>
    </>
  ),
};
