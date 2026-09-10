import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout, ContentBox, FieldLine, Frame } from '../wireframe/primitives';

const line = '#8a8a8a';
const ink = '#4a4a4a';
const bad = '#c0455e';
const good = '#3f8a5b';

const meta = {
  title: 'Decisions/Form Fields',
  tags: ['Modular'],
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

function RadioRow({ width = '75%' }: { width?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          border: `1.5px solid ${line}`,
          flexShrink: 0,
        }}
      />
      <FieldLine width={width} height={10} />
    </div>
  );
}

function SelectBox({ label = 'Select an option' }: { label?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1.5px solid ${line}`,
        borderRadius: 5,
        padding: '10px 12px',
      }}
    >
      <span style={{ fontSize: 12, color: ink, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
        {label}
      </span>
      <span style={{ fontSize: 12, color: ink }} aria-hidden="true">
        ⌄
      </span>
    </div>
  );
}

export const LongListGrows: Story = {
  name: '5+ options, all expanded — not allowed',
  render: () => (
    <>
      <Frame label="Embedded in a blog article" width={420}>
        <div style={{ padding: 20 }}>
          <ContentBox label="Modular — 7 options, all expanded">
            <FieldLine height={16} width="70%" />
            <RadioRow />
            <RadioRow width="65%" />
            <RadioRow width="80%" />
            <RadioRow width="55%" />
            <RadioRow width="70%" />
            <RadioRow width="60%" />
            <RadioRow width="75%" />
          </ContentBox>
          <div style={{ marginTop: 12 }}>
            <Badge ok={false}>container grows dramatically down the page — not allowed at 5+ options</Badge>
          </div>
        </div>
      </Frame>
      <Callout>
        Once a single-select question has roughly five or more options,
        listing them all out stretches the Modular container well past the
        surrounding content.
      </Callout>
    </>
  ),
};

export const CollapsesToDropdown: Story = {
  name: '5+ options — collapses to a dropdown',
  render: () => (
    <>
      <Frame label="Embedded in a blog article" width={420}>
        <div style={{ padding: 20 }}>
          <ContentBox label="Modular — 7 options, collapsed">
            <FieldLine height={16} width="70%" />
            <SelectBox label="Choose one..." />
          </ContentBox>
          <div style={{ marginTop: 12 }}>
            <Badge ok>same 7 options, one control — container stays compact</Badge>
          </div>
        </div>
      </Frame>
      <Callout>
        A dropdown holds the same options in a single line, so the
        container's height stays roughly the same regardless of how many
        options the question has.
      </Callout>
    </>
  ),
};
