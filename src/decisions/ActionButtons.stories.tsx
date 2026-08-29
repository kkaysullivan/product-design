import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  WireButton,
} from '../wireframe/primitives';

const meta = {
  title: 'Decisions/Action Buttons',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const SpaDesktop: Story = {
  name: 'SPA — Desktop',
  render: () => (
    <>
      <Frame label="Browser window">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 28,
            padding: '28px 0 24px',
            minHeight: 300,
            justifyContent: 'space-between',
          }}
        >
          <div style={{ width: 420, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FieldLine />
            <FieldLine />
            <FieldLine width="60%" />
          </div>
          <div style={{ width: 420, display: 'flex', justifyContent: 'space-between' }}>
            <WireButton variant="subtle">← Back</WireButton>
            <WireButton variant="primary">Continue</WireButton>
          </div>
        </div>
      </Frame>
      <Callout>
        Action row width matches the content area (420px here), not the
        browser window — stuck to the bottom of the window, centered with
        room to spare on either side.
      </Callout>
    </>
  ),
};

export const Modular: Story = {
  name: 'Modular',
  render: () => (
    <>
      <Frame label="Host page (e.g. blog article)" width={420}>
        <div style={{ padding: 20 }}>
          <ContentBox label="Background content box">
            <FieldLine />
            <FieldLine width="70%" />
            <WireButton variant="primary" full>
              Continue
            </WireButton>
            <WireButton variant="subtle" full>
              ← Back
            </WireButton>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Primary sits directly below content, tertiary directly below
        primary — both inside the background content box.
      </Callout>
    </>
  ),
};
