const Context = ({data}) => {
  return (
    <section className="context tab-content">
      <div className="context__text" dangerouslySetInnerHTML={{__html: data.contextual ? data.contextual : 'There is no context!'}} />
    </section>
  )
}

export default Context;