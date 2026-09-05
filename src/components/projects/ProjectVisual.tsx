import type { ProjectVisualKind } from '../../data/portfolio'
import './ProjectVisual.css'

/**
 * Abstract, generated UI illustrations — one per project type.
 * Deliberately schematic: they show the shape of each system without
 * presenting invented data as a real screenshot. Pure CSS, no image weight.
 * Swap in a real screenshot by setting `image` on the project.
 */

function Chrome({ label }: { label: string }) {
  return (
    <div className="pv__chrome">
      <span className="pv__dots">
        <i />
        <i />
        <i />
      </span>
      <span className="pv__url">{label}</span>
    </div>
  )
}

function Lines({ count, widths }: { count: number; widths: number[] }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="pv-line"
          style={{ width: `${widths[i % widths.length]}%` }}
        />
      ))}
    </>
  )
}

function Reader() {
  return (
    <div className="pv__phones">
      <div className="pv__phone pv__phone--back">
        <div className="pv__phone-screen">
          <span className="pv-line pv-line--title" style={{ width: '55%' }} />
          <div className="pv__covers pv__covers--sm">
            <span className="pv-cover" />
            <span className="pv-cover pv-cover--accent" />
            <span className="pv-cover" />
            <span className="pv-cover" />
          </div>
        </div>
      </div>

      <div className="pv__phone pv__phone--front">
        <span className="pv__notch" />
        <div className="pv__phone-screen">
          <div className="pv__phone-head">
            <span className="pv-line pv-line--title" style={{ width: '45%' }} />
            <span className="pv-dot-btn" />
          </div>
          <span className="pv-search" />
          <div className="pv__chips">
            <span className="pv-chip pv-chip--accent">All</span>
            <span className="pv-chip">Audio</span>
            <span className="pv-chip">Shorts</span>
          </div>
          <div className="pv__covers">
            <span className="pv-cover pv-cover--accent" />
            <span className="pv-cover" />
            <span className="pv-cover" />
            <span className="pv-cover pv-cover--accent" />
          </div>
          <div className="pv__player">
            <span className="pv-play" />
            <span className="pv__player-track">
              <span className="pv__player-fill" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Documents() {
  return (
    <>
      <Chrome label="documents" />
      <div className="pv__screen pv__screen--split">
        <aside className="pv__side">
          <span className="pv-line pv-line--label" style={{ width: '60%' }} />
          <span className="pv-tree pv-tree--active" />
          <span className="pv-tree pv-tree--in1" />
          <span className="pv-tree pv-tree--in1" />
          <span className="pv-tree pv-tree--in2" />
          <span className="pv-tree" />
          <span className="pv-tree pv-tree--in1" />
        </aside>
        <div className="pv__main">
          <div className="pv__toolbar">
            <span className="pv-search pv-search--sm" />
            <span className="pv-chip pv-chip--accent">Archive</span>
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div className="pv-row" key={i}>
              <span className="pv-doc" />
              <span className="pv-row__lines">
                <Lines count={2} widths={[72 - i * 8, 44]} />
              </span>
              <span className={`pv-pill${i === 0 ? ' pv-pill--accent' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function People() {
  return (
    <>
      <Chrome label="hrms" />
      <div className="pv__screen">
        <div className="pv__org">
          <span className="pv-node pv-node--root" />
          <span className="pv__org-stem" />
          <span className="pv__org-bar" />
          <div className="pv__org-children">
            <span className="pv-node" />
            <span className="pv-node pv-node--accent" />
            <span className="pv-node" />
          </div>
        </div>
        <div className="pv__list">
          {[0, 1, 2, 3].map((i) => (
            <div className="pv-row" key={i}>
              <span className="pv-avatar" />
              <span className="pv-row__lines">
                <Lines count={2} widths={[60 - i * 6, 38]} />
              </span>
              <span className={`pv-pill${i === 1 ? ' pv-pill--accent' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Pos() {
  return (
    <>
      <Chrome label="point of sale" />
      <div className="pv__screen pv__screen--split">
        <div className="pv__main">
          <span className="pv-search pv-search--sm" />
          <div className="pv__tiles">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`pv-tile${i === 2 ? ' pv-tile--accent' : ''}`} />
            ))}
          </div>
        </div>
        <aside className="pv__cart">
          <span className="pv-line pv-line--label" style={{ width: '50%' }} />
          {[0, 1, 2].map((i) => (
            <div className="pv-cart-row" key={i}>
              <span className="pv-line" style={{ width: `${58 - i * 10}%` }} />
              <span className="pv-line pv-line--price" />
            </div>
          ))}
          <span className="pv-total" />
          <span className="pv-barcode" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <i key={i} style={{ width: i % 3 === 0 ? '3px' : '1.5px' }} />
            ))}
          </span>
        </aside>
      </div>
    </>
  )
}

function Fleet() {
  return (
    <>
      <Chrome label="vehicles" />
      <div className="pv__screen">
        <div className="pv__toolbar">
          <span className="pv-search pv-search--sm" />
          <span className="pv-chip">Dept</span>
          <span className="pv-chip pv-chip--accent">Type</span>
        </div>
        <div className="pv__table">
          <div className="pv-trow pv-trow--head">
            <span />
            <span />
            <span />
            <span />
          </div>
          {[0, 1, 2, 3, 4].map((i) => (
            <div className="pv-trow" key={i}>
              <span style={{ width: `${80 - i * 6}%` }} />
              <span style={{ width: `${60 + i * 5}%` }} />
              <span style={{ width: '45%' }} />
              <span className={i === 1 ? 'pv-cell--accent' : undefined} style={{ width: '70%' }} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Registry() {
  return (
    <>
      <Chrome label="land registry" />
      <div className="pv__screen pv__screen--split">
        <div className="pv__parcels" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className={`pv-parcel${i === 4 || i === 9 ? ' pv-parcel--accent' : ''}`}
            />
          ))}
        </div>
        <aside className="pv__side pv__side--wide">
          <span className="pv-line pv-line--label" style={{ width: '55%' }} />
          {[0, 1, 2, 3].map((i) => (
            <div className="pv-record" key={i}>
              <span className="pv-line" style={{ width: `${70 - i * 7}%` }} />
              <span className="pv-line pv-line--faint" style={{ width: `${44 + i * 4}%` }} />
            </div>
          ))}
        </aside>
      </div>
    </>
  )
}

const VISUALS: Record<ProjectVisualKind, () => React.JSX.Element> = {
  reader: Reader,
  documents: Documents,
  people: People,
  pos: Pos,
  fleet: Fleet,
  registry: Registry,
}

type Props = {
  kind: ProjectVisualKind
  accent: string
  className?: string
}

export function ProjectVisual({ kind, accent, className = '' }: Props) {
  const Visual = VISUALS[kind]

  return (
    <div
      className={`pv pv--${kind} ${className}`.trim()}
      style={{ ['--pv-accent' as string]: accent }}
      aria-hidden="true"
    >
      <Visual />
    </div>
  )
}
