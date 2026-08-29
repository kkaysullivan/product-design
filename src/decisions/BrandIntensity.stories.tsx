import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  WireButton,
} from '../wireframe/primitives';

const meta = {
  title: 'Decisions/Brand Intensity',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const HighestRisk: Story = {
  name: 'High stakes + low bandwidth — recede',
  render: () => (
    <>
      <Frame label="Browser window — reviewing a denial" width={480}>
        <div style={{ padding: 24 }}>
          <ContentBox texture>
            <FieldLine width="55%" />
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontStyle: 'italic',
                color: '#6b6b6b',
              }}
            >
              plain, direct, empathetic copy carries the weight — not
              decoration
            </p>
            <WireButton variant="primary" full>
              Continue
            </WireButton>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Visuals recede. Only passive, background-only, system-approved
        texture survives here — no illustration, no motion.
      </Callout>
    </>
  ),
};

export const SignatureMoment: Story = {
  name: 'High stakes + high bandwidth — signature moment',
  render: () => (
    <>
      <Frame label="Browser window — debt paid off" width={480}>
        <div style={{ padding: 24 }}>
          <ContentBox tone="dark" label="Signature moment">
            <p
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              🎉 You&apos;re debt-free!
            </p>
            <WireButton variant="primary" full>
              Continue
            </WireButton>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Celebrate out loud. One of the 1-2 signature interactions that get
        to be loud — not scattered everywhere.
      </Callout>
    </>
  ),
};

export const PlainTone: Story = {
  name: 'Low stakes + low bandwidth — plain tone',
  render: () => (
    <>
      <Frame label="Browser window — updating an address" width={480}>
        <div style={{ padding: 24 }}>
          <ContentBox texture>
            <FieldLine />
            <FieldLine width="60%" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <WireButton variant="subtle">← Back</WireButton>
              <WireButton variant="primary">Continue</WireButton>
            </div>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Design-system tokens only — no illustration, no custom motion.
        Ambient texture still OK if it stays passive and background-only.
      </Callout>
    </>
  ),
};

export const LightPresence: Story = {
  name: 'Low stakes + high bandwidth — light presence',
  render: () => (
    <>
      <Frame label="Browser window — browsing options" width={480}>
        <div style={{ padding: 24 }}>
          <ContentBox texture>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1.5px dashed #8a8a8a',
                  flexShrink: 0,
                }}
              />
              <FieldLine />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1.5px dashed #8a8a8a',
                  flexShrink: 0,
                }}
              />
              <FieldLine />
            </div>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Some personality is welcome — a little more room for optional
        illustration accents than the low-bandwidth quadrants get.
      </Callout>
    </>
  ),
};
