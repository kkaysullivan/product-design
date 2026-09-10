import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import {
  Callout,
  ContentBox,
  FieldLine,
  Frame,
  WireButton,
} from '../wireframe/primitives';

const line = '#8a8a8a';
const ink = '#4a4a4a';
const bad = '#c0455e';
const good = '#3f8a5b';

const meta = {
  title: 'Decisions/Modular Handoff',
  tags: ['Modular', 'Hybrid'],
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

function ArticleShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div style={{ width: 90, display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
        <FieldLine height={8} width="70%" />
        <FieldLine height={8} width="85%" />
        <FieldLine height={8} width="60%" />
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

export const SingleStepInline: Story = {
  name: 'One step — stays inline',
  render: () => (
    <>
      <Frame label="Embedded in a blog article" width={480}>
        <div style={{ padding: 20 }}>
          <ArticleShell>
            <ContentBox label="Modular — single step">
              <FieldLine height={16} width="70%" />
              <FieldLine height={30} />
              <WireButton variant="primary" full>
                See My Rate
              </WireButton>
            </ContentBox>
          </ArticleShell>
          <div style={{ marginTop: 12 }}>
            <Badge ok>one step, completes inline — fine</Badge>
          </div>
        </div>
      </Frame>
      <Callout>
        A single-step Modular piece — one question, one answer — is fine to
        complete right where it's embedded.
      </Callout>
    </>
  ),
};

export const LauncherPattern: Story = {
  name: 'Multi-step — launcher into SPA',
  render: () => (
    <>
      <Frame label="Embedded in a blog article" width={620}>
        <div style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <ArticleShell>
              <ContentBox label="Modular — launcher">
                <FieldLine height={16} width="60%" />
                <WireButton variant="primary" full>
                  Get Started
                </WireButton>
              </ContentBox>
            </ArticleShell>
          </div>
          <Arrow />
          <div
            style={{
              width: 140,
              border: `1.5px dashed ${line}`,
              borderRadius: 8,
              padding: '16px 12px 12px',
              position: 'relative',
              flexShrink: 0,
            }}
          >
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
              SPA — full flow
            </span>
            <FieldLine height={10} />
            <div style={{ marginTop: 8 }}>
              <FieldLine width="70%" />
            </div>
          </div>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <Badge ok>2+ steps — launcher hands off to SPA, same as Real Estate</Badge>
        </div>
      </Frame>
      <Callout>
        The embedded piece is a lightweight launcher, not the flow itself —
        clicking it opens a focused SPA to complete the remaining steps.
      </Callout>
    </>
  ),
};

export const MultiStepNotAllowed: Story = {
  name: 'Multi-step inline — not allowed',
  render: () => (
    <>
      <Frame label="Embedded in a blog article" width={480}>
        <div style={{ padding: 20 }}>
          <ArticleShell>
            <ContentBox label="Modular — step 2 of 5">
              <FieldLine height={16} width="70%" />
              <FieldLine height={30} />
              <FieldLine height={30} />
              <WireButton variant="primary" full>
                Next
              </WireButton>
            </ContentBox>
          </ArticleShell>
          <div style={{ marginTop: 12 }}>
            <Badge ok={false}>running a multi-step flow to completion inline — not allowed</Badge>
          </div>
        </div>
      </Frame>
      <Callout>
        Once an intake/referral experience needs more than one step, it
        doesn't get to stay inside the article — it hands off to a SPA.
      </Callout>
    </>
  ),
};

export const AssessmentTrigger: Story = {
  name: 'Assessment — hands off regardless of step count',
  render: () => (
    <>
      <Frame label="Embedded on a busy landing page" width={640}>
        <div style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, display: 'flex', gap: 12 }}>
            <div style={{ width: 70, display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
              <FieldLine height={8} width="70%" />
              <FieldLine height={8} width="60%" />
              <FieldLine height={8} width="80%" />
            </div>
            <div style={{ flex: 1 }}>
              <ContentBox label="Modular — assessment, 1 question">
                <FieldLine height={16} width="70%" />
                <FieldLine height={20} />
              </ContentBox>
            </div>
            <div style={{ width: 60, display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
              <FieldLine height={40} />
            </div>
          </div>
          <Arrow />
          <div
            style={{
              width: 150,
              border: `1.5px dashed ${line}`,
              borderRadius: 8,
              padding: '16px 12px 12px',
              position: 'relative',
              flexShrink: 0,
            }}
          >
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
              SPA — assessment
            </span>
            <FieldLine height={10} />
            <div style={{ marginTop: 8 }}>
              <FieldLine height={40} />
            </div>
          </div>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <Badge ok>assessment moves to a focused SPA, even at one question</Badge>
        </div>
      </Frame>
      <Callout>
        Assessments ask for attention and honest, sometimes stressful
        answers — they shouldn't have to compete with a TOC, article copy,
        and a promo rail at the same time.
      </Callout>
    </>
  ),
};

export const ToolsException: Story = {
  name: 'Calculators & tools — exempt, stay embedded',
  render: () => (
    <>
      <Frame label="Embedded in a blog article" width={480}>
        <div style={{ padding: 20 }}>
          <ArticleShell>
            <ContentBox label="Modular — calculator, several inputs">
              <FieldLine height={16} width="60%" />
              <FieldLine height={16} width="60%" />
              <FieldLine height={16} width="60%" />
              <WireButton variant="primary" full>
                Calculate
              </WireButton>
            </ContentBox>
          </ArticleShell>
          <div style={{ marginTop: 12 }}>
            <Badge ok>tool — exempt from both triggers, stays embedded</Badge>
          </div>
        </div>
      </Frame>
      <Callout>
        A calculator's intent and interaction model differ from an
        intake/referral/assessment flow — it stays embedded even with
        several inputs.
      </Callout>
    </>
  ),
};
