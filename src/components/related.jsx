import Card from './cards';

const Related = (props) => {
  const filteredData = props.interviews.filter( item => {
    return item.id.toString() !== props.id
  })
  const news = filteredData.slice(0, 6);
  return (
    <section className="related tab-content">
      <div className="news__items">
        {news.map((item, idx) => (
          <Card data={ item } key={idx} exClass={false} />
        ))}
      </div>
    </section>
  )
}

export default Related;