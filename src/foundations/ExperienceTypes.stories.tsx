import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  brandPrimary,
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  HeaderBar,
  ProgressTrack,
  WireButton,
} from '../wireframe/primitives';

const line = '#8a8a8a';

const meta = {
  title: 'Foundations/Experience Types',
  tags: ['SPA', 'Modular'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function CheckboxRow({ width = '75%' }: { width?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          width: 16,
          height: 16,
          border: `1.5px solid ${line}`,
          borderRadius: 3,
          flexShrink: 0,
        }}
      />
      <FieldLine width={width} height={10} />
    </div>
  );
}

function TocItem({ width = '80%', active = false }: { width?: string; active?: boolean }) {
  return (
    <div
      style={{
        borderLeft: active ? `2px solid ${brandPrimary}` : '2px solid transparent',
        paddingLeft: 8,
      }}
    >
      <FieldLine width={width} height={8} />
    </div>
  );
}

function Chip({ width = '100%' }: { width?: string }) {
  return (
    <div style={{ border: `1.5px solid ${line}`, borderRadius: 8, padding: 10 }}>
      <FieldLine width={width} height={8} />
    </div>
  );
}

export const SpaExample: Story = {
  name: 'SPA — dedicated page',
  render: () => (
    <>
      <Frame label="SPA — own dedicated page" width={640}>
        <HeaderBar label="Narrow header — logo only, no global nav" />
        <div style={{ padding: '20px 32px 28px', display: 'flex', flexDirection: 'column' }}>
          <ProgressTrack percent={15} />
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <FieldLine height={22} width="70%" />
            <FieldLine height={10} width="55%" />
          </div>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <CheckboxRow />
            <CheckboxRow width="65%" />
            <CheckboxRow width="55%" />
            <CheckboxRow width="60%" />
            <CheckboxRow width="50%" />
            <CheckboxRow width="70%" />
            <CheckboxRow width="80%" />
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'flex-end' }}>
            <WireButton variant="primary">Next</WireButton>
          </div>
        </div>
      </Frame>
      <Callout>
        The team controls the whole page — logo-only header, progress bar,
        content floating with no box, action row on its own. No outside
        page context to work around.
      </Callout>
    </>
  ),
};

export const ModularExample: Story = {
  name: 'Modular — embedded on a host page',
  render: () => (
    <>
      <Frame label="Modular — embedded in a blog article" width={860}>
        <div style={{ padding: 24, display: 'flex', gap: 24 }}>
          <div style={{ width: 130, display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <FieldLine height={10} width="60%" />
            <TocItem />
            <TocItem width="70%" />
            <TocItem width="85%" active />
            <TocItem width="65%" />
            <TocItem width="75%" />
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FieldLine height={10} />
            <FieldLine height={10} width="80%" />
            <FieldLine height={20} width="55%" />

            <ContentBox>
              <div
                style={{
                  height: 4,
                  margin: '-16px -16px 4px',
                  background: brandPrimary,
                  borderRadius: '6px 6px 0 0',
                }}
              />
              <FieldLine height={20} width="75%" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <FieldLine height={8} width="40%" />
                <FieldLine height={16} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <FieldLine height={8} width="40%" />
                <FieldLine height={16} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <FieldLine height={8} width="30%" />
                <FieldLine height={16} />
              </div>
              <CheckboxRow width="60%" />
              <CheckboxRow width="65%" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <FieldLine height={8} width="20%" />
                <FieldLine height={16} />
              </div>
              <WireButton variant="primary" full>
                See Your Results
              </WireButton>
              <FieldLine height={6} width="90%" />
            </ContentBox>
          </div>

          <div style={{ width: 160, display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <FieldLine height={10} width="60%" />
            <Chip />
            <Chip width="90%" />
            <Chip width="95%" />
            <ContentBox>
              <FieldLine height={40} />
              <FieldLine height={8} />
              <WireButton variant="primary" full>
                Get Term Life
              </WireButton>
            </ContentBox>
          </div>
        </div>
      </Frame>
      <Callout>
        The calculator is one boxed component inside a page it doesn't
        control — TOC sidebar, article copy, and a promo rail all sit
        outside the team's ownership.
      </Callout>
    </>
  ),
};
