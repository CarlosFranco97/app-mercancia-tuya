function Card({ info }) {
  return (
    <section className="panel-control-card">
      <div>
        <h2># Pedido: {info.id}</h2>
        <h3>Destino: {info.destino}</h3>
        <h3>Origen: {info.origen}</h3>
      </div>
      <div>
        <p>Ver</p>
      </div>
    </section>
  )
}

export default Card