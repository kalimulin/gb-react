import "./Breadcrumbs.scss"

const Breadcrumbs = ({title, path}) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__title">{title}</div>
        <div className="breadcrumbs__path" dangerouslySetInnerHTML={{ __html: path }}></div>
      </div>
    </div>
  )
}

export default Breadcrumbs
