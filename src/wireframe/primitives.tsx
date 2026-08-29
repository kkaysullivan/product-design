import type { CSSProperties, ReactNode } from 'react';

const ink = '#6b6b6b';
const inkStrong = '#4a4a4a';
const line = '#8a8a8a';
const fill = '#e3e3e3';
const paper = '#fafafa';
export const brandPrimary = '#0073b9'; // Ramsey primary brand color

const labelStyle: CSSProperties = {
  position: 'absolute',
  top: -10,
  left: 12,
  background: paper,
  padding: '0 6px',
  fontSize: 11,
  color: ink,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  letterSpacing: 0.2,
};

/** Outer frame standing in for a browser window or page. */
export function Frame({
  label,
  width = 760,
  children,
}: {
  label: string;
  width?: number | string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        position: 'relative',
        width,
        maxWidth: '100%',
        border: `1.5px dashed ${line}`,
        background: paper,
        boxSizing: 'border-box',
        margin: '20px auto',
        padding: '18px 0 0',
      }}
    >
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

/** Solid box standing in for a Modular "background content box". */
export function ContentBox({
  label,
  tone = 'light',
  texture = false,
  children,
}: {
  label?: string;
  tone?: 'light' | 'dark';
  texture?: boolean;
  children: ReactNode;
}) {
  const isDark = tone === 'dark';
  return (
    <div
      style={{
        position: 'relative',
        border: `1.5px solid ${isDark ? '#222' : line}`,
        borderRadius: 8,
        background: isDark ? '#3a3a3a' : '#fff',
        backgroundImage: texture
          ? `repeating-linear-gradient(135deg, ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'} 0 2px, transparent 2px 10px)`
          : undefined,
        color: isDark ? '#f5f5f5' : inkStrong,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      {label && <span style={labelStyle}>{label}</span>}
      {children}
    </div>
  );
}

/** Dashed inset box, used to distinguish a content area from the container around it. */
export function Inset({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        border: `1.5px dashed ${line}`,
        borderRadius: 6,
        padding: '16px 12px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

/** Placeholder line standing in for a form field or text row. */
export function FieldLine({
  width = '100%',
  height = 14,
}: {
  width?: number | string;
  height?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 3,
        background: fill,
        border: `1px solid ${line}`,
      }}
    />
  );
}

/** Wireframe button — greyscale, except the primary, which uses the brand color. */
export function WireButton({
  variant,
  full = false,
  onClick,
  children,
}: {
  variant: 'primary' | 'tertiary' | 'subtle';
  full?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  const isPrimary = variant === 'primary';
  const isSubtle = variant === 'subtle';
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: full ? '100%' : 'fit-content',
        boxSizing: 'border-box',
        textAlign: 'center',
        padding: isSubtle ? '10px 0' : '10px 20px',
        borderRadius: 5,
        border: isSubtle ? 'none' : `1.5px solid ${isPrimary ? brandPrimary : line}`,
        background: isPrimary ? brandPrimary : 'transparent',
        color: isPrimary ? '#fff' : inkStrong,
        fontSize: 13,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontWeight: 600,
        cursor: onClick ? 'pointer' : 'default',
        margin: 0,
      }}
    >
      {children}
    </button>
  );
}

/** Small annotation caption placed near a wireframe to call out a rule. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 12,
        color: ink,
        fontStyle: 'italic',
        textAlign: 'center',
        margin: '6px 0 0',
      }}
    >
      {children}
    </p>
  );
}

/** Dashed vertical guide, used to show alignment against a wider frame. */
export function EdgeGuide() {
  return (
    <div
      style={{
        flex: 1,
        borderTop: `1px dashed ${line}`,
        alignSelf: 'center',
      }}
    />
  );
}

/** Progress track with a brand-color fill and an optional mobile back chevron. */
export function ProgressTrack({
  percent = 45,
  chevron = false,
}: {
  percent?: number;
  chevron?: boolean;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {chevron && (
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: `1.5px solid ${line}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            color: inkStrong,
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          ‹
        </span>
      )}
      <div
        style={{
          flex: 1,
          height: 8,
          borderRadius: 4,
          background: fill,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            background: brandPrimary,
          }}
        />
      </div>
    </div>
  );
}

/** Narrow header bar with a logo placeholder — standing in for a focused task header. */
export function HeaderBar({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 16px',
        borderBottom: `1.5px solid ${line}`,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 4,
          border: `1.5px solid ${line}`,
          background: fill,
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: 11, color: ink }}>{label}</span>
    </div>
  );
}

/** Vertical stack of placeholder nav items — standing in for a results side nav. */
export function SideNav() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 110 }}>
      <FieldLine height={10} />
      <FieldLine height={10} width="80%" />
      <FieldLine height={10} width="65%" />
    </div>
  );
}
