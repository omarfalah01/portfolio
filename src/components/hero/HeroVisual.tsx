import './HeroVisual.css'

type Layer = {
  id: string
  label: string
  items: string[]
}

/** Reflects the actual stack — no stock illustration, no fake dashboard numbers. */
const layers: Layer[] = [
  { id: 'client', label: 'Client', items: ['React', 'React Native', 'Flutter'] },
  { id: 'api', label: 'API', items: ['Node.js', 'Flask', 'REST'] },
  { id: 'data', label: 'Data', items: ['PostgreSQL', 'SQLite', 'Prisma'] },
]

export function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv__glow" />

      <div className="hv__panel">
        <div className="hv__bar">
          <span className="hv__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="hv__file">system.architecture</span>
        </div>

        <div className="hv__body">
          <div className="hv__spine">
            <span className="hv__spine-flow" />
          </div>

          {layers.map((layer, i) => (
            <div className="hv__layer" key={layer.id} style={{ ['--i' as string]: i }}>
              <span className="hv__node" />
              <div className="hv__layer-main">
                <span className="hv__layer-label">{layer.label}</span>
                <ul className="hv__chips">
                  {layer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="hv__foot">
          <span>designed · built · deployed</span>
          <span className="hv__foot-accent">end to end</span>
        </div>
      </div>
    </div>
  )
}
