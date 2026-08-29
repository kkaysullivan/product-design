import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  HeaderBar,
  ProgressTrack,
  SideNav,
  WireButton,
} from '../wireframe/primitives';

const line = '#8a8a8a';

const meta = {
  title: 'Decisions/Navigation and Progress',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProgressBarSpa: Story = {
  name: 'Progress bar — SPA',
  render: () => (
    <>
      <Frame label="SPA — mobile & desktop" width={420}>
        <div style={{ padding: '18px 24px 24px', display: 'flex', flexDirection: 'column' }}>
          <ProgressTrack />
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FieldLine />
            <FieldLine width="60%" />
          </div>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between' }}>
            <WireButton variant="subtle">← Back</WireButton>
            <WireButton variant="primary">Continue</WireButton>
          </div>
        </div>
      </Frame>
      <Callout>
        Sits above the main content area, matching the content width — not
        inside a content box. Fill uses the Ramsey primary brand color. No
        top chevron on SPA desktop.
      </Callout>
    </>
  ),
};

export const ProgressBarModular: Story = {
  name: 'Progress bar — Modular',
  render: () => (
    <>
      <Frame label="Modular — mobile & desktop" width={420}>
        <div style={{ padding: 20 }}>
          <ContentBox label="Background content box">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ProgressTrack chevron />
              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <FieldLine />
                <FieldLine width="60%" />
              </div>
              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <WireButton variant="primary" full>
                  Continue
                </WireButton>
                <div
                  style={{
                    opacity: 0.5,
                    border: `1.5px dashed ${line}`,
                    borderRadius: 6,
                  }}
                >
                  <WireButton variant="subtle" full>
                    ← Back (optional on mobile)
                  </WireButton>
                </div>
              </div>
            </div>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Sits at the very top of the background content box, directly above
        the main content. Same brand-color fill as SPA — Modular can also
        use the top chevron. On mobile, once the chevron is showing, the
        tertiary Back button underneath primary is optional (dashed here).
      </Callout>
    </>
  ),
};

export const HeaderSpaIntake: Story = {
  name: 'Header & nav — SPA intake/splash',
  render: () => (
    <>
      <Frame label="SPA — intake/splash" width={420}>
        <HeaderBar label="Narrow header — task nav only" />
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <FieldLine />
          <FieldLine width="60%" />
        </div>
      </Frame>
      <Callout>
        Narrow header, no global nav, focused task nav only — no layout or
        nav variation once a user is inside the funnel.
      </Callout>
    </>
  ),
};

export const HeaderSpaResults: Story = {
  name: 'Header & nav — SPA results',
  render: () => (
    <>
      <Frame label="SPA — results (desktop)" width={620}>
        <HeaderBar label="Expanded header — logo goes back" />
        <div style={{ padding: 24, display: 'flex', gap: 24 }}>
          <SideNav />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FieldLine height={20} />
            <FieldLine width="70%" />
          </div>
        </div>
      </Frame>
      <Callout>
        Header can expand. Desktop uses a side experience nav, no global
        nav — the Ramsey logo goes back.
      </Callout>
    </>
  ),
};

export const HeaderModular: Story = {
  name: 'Header & nav — Modular intake/splash',
  render: () => (
    <>
      <Frame label="Modular — intake/splash" width={420}>
        <HeaderBar label="Narrow header — indicates the experience" />
        <div style={{ padding: 20 }}>
          <ContentBox>
            <FieldLine />
            <FieldLine width="60%" />
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        No global nav — a narrow header indicates which experience the user
        is in. Results is not applicable; Modular results open in a SPA
        environment.
      </Callout>
    </>
  ),
};
