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

const meta = {
  title: 'Decisions/Page Types',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

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
