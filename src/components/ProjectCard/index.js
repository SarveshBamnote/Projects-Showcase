import './index.css'

const ProjectCard = props => {
  const {eachDetail} = props
  const {imageUrl, name} = eachDetail

  return (
    <li className="project-item">
      <img className="project-image" src={imageUrl} alt={name} />
      <p className="project-name">{name}</p>
    </li>
  )
}

export default ProjectCard
