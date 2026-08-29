import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  Inset,
  WireButton,
} from '../wireframe/primitives';

const meta = {
  title: 'Decisions/Layout and Columns',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const IntakeOneColumn: Story = {
  name: 'Intake — always 1 column',
  render: () => (
    <>
      <Frame label="Any breakpoint — SPA or Modular" width={380}>
        <div
          style={{
            padding: '24px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FieldLine height={20} />
            <Callout>most important info sits at top</Callout>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <FieldLine width="80%" />
            <FieldLine width="60%" />
            <Callout>less important info stacks below</Callout>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <WireButton variant="subtle">← Back</WireButton>
            <WireButton variant="primary">Continue</WireButton>
          </div>
        </div>
      </Frame>
      <Callout>
        Single column, no exceptions — SPA or Modular, mobile or desktop.
        The action bar sits above/below this stack the same way at every
        breakpoint.
      </Callout>
    </>
  ),
};

export const SplashTwoColumn: Story = {
  name: 'Splash/intro — SPA desktop, 2 column',
  render: () => (
    <>
      <Frame label="Browser window — SPA desktop" width={720}>
        <div style={{ padding: 28, display: 'flex', gap: 24 }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Callout>left column — always a form</Callout>
            <FieldLine />
            <FieldLine width="70%" />
            <WireButton variant="primary" full>
              Get started
            </WireButton>
          </div>
          <Inset label="Contextual content">
            <FieldLine height={80} />
            <FieldLine width="50%" />
          </Inset>
        </div>
      </Frame>
      <Callout>
        SPA desktop only — can flex between 1 and 2 columns. Left is always
        the form; right is contextual. Every other case stays 1 column.
      </Callout>
    </>
  ),
};

export const ModularDesktopNotApplicable: Story = {
  name: 'Modular desktop — not applicable',
  render: () => (
    <>
      <Frame label="Desktop browser window" width={860}>
        <div style={{ padding: '32px 0 28px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 360 }}>
            <ContentBox label="Modular content — mobile sizing, unchanged">
              <FieldLine />
              <FieldLine width="60%" />
              <WireButton variant="primary" full>
                Continue
              </WireButton>
            </ContentBox>
          </div>
        </div>
      </Frame>
      <Callout>
        Modular always defaults to mobile sizing and treatment, even on a
        wide desktop viewport — there is no distinct desktop layout.
      </Callout>
    </>
  ),
};
