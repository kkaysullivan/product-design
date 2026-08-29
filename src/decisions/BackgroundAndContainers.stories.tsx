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
  title: 'Decisions/Background and Containers',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const SpaFloating: Story = {
  name: 'SPA — Floating (no box)',
  render: () => (
    <>
      <Frame label="Browser window (light background)">
        <div
          style={{
            padding: '28px 40px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 420,
            margin: '0 auto',
          }}
        >
          <FieldLine />
          <FieldLine width="70%" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <WireButton variant="subtle">← Back</WireButton>
            <WireButton variant="primary">Continue</WireButton>
          </div>
        </div>
      </Frame>
      <Callout>
        Content floats directly on the light background — no box around it,
        and never a dark background here.
      </Callout>
    </>
  ),
};

export const ModularBoxed: Story = {
  name: 'Modular — Boxed',
  render: () => (
    <>
      <Frame label="Host page (e.g. blog article)" width={420}>
        <div style={{ padding: 20 }}>
          <ContentBox label="Background content box (container)" texture>
            <Inset label="Content area">
              <FieldLine />
              <FieldLine width="70%" />
              <WireButton variant="primary" full>
                Continue
              </WireButton>
              <WireButton variant="subtle" full>
                ← Back
              </WireButton>
            </Inset>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        The container (solid box, brand texture allowed) is not the same as
        the content area inside it (dashed) — padding separates the two.
      </Callout>
    </>
  ),
};

export const EmotionalMoment: Story = {
  name: 'Dark / saturated — key moment only',
  render: () => (
    <>
      <Frame label="Browser window">
        <div style={{ padding: 24, maxWidth: 420, margin: '0 auto' }}>
          <ContentBox tone="dark" label="Reserved: key emotional moment">
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              You&apos;re debt-free!
            </p>
            <WireButton variant="primary" full>
              Continue
            </WireButton>
          </ContentBox>
        </div>
      </Frame>
      <Callout>
        Dark/saturated backgrounds are reserved for key emotional moments
        only — overuse makes them meaningless. Live text must stay
        accessible against the background.
      </Callout>
    </>
  ),
};
