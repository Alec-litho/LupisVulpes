import { useEffect, useRef, useState } from "react";
import "../../css/components/ProjectReview.scss";
import anime from 'animejs/lib/anime.es.js';

interface IProjectPreview {
  image: string
  name: string
  priority: number
}
interface IProjectPreviewComponent {
  image: string
  name: string
  number: string
  priority: number
  projectsDOM: any
  indx: number

}

export default function ProjectReviewComponent() {
  const previewPriorityClasses = ["primaryImage", "secondaryImage", "tertiaryImage"] //["primaryImage", "secondaryImage", "tertiaryImage"]
  const projectsDOM = useRef<HTMLElement[] | []>([])
  const [projects, setProjects] = useState<IProjectPreview[]>([
    {image:"https://i.ibb.co/N6NqhCB/The-Audience.png", name:"The Audience", priority:2},//2 - 0 - 1
    {image:"https://i.ibb.co/nB42FcV/Home-grown-dogs.png", name:"Home Grown Dogs", priority:1},//1 - 2 - 0
    {image:"https://i.ibb.co/tx7NR8y/Captain-and-his-crew.png", name:"Captain And His Crew", priority:0}//0 - 1 - 2
  ])
    const [currentPreview,setCurrentPreview] = useState(0)

    useEffect(() => {

      let timer = setInterval(() =>{
        setCurrentPreview(prev=>prev===2? 0 : prev+1)
        setProjects(prev => prev.map((project) => {
              return { ...project, priority:project.priority+1==3?0:project.priority+1} 
        }))
        projectsDOM.current.forEach((project,indx) => {

          anime({
            target: project,
            left: '240px',
          })
        })
      }, 10000);
      return () => clearInterval(timer)
    },[])

    return ( 
        <div className="ProjectReviewComponent">
          <div className="wrapper">
            {projects.map(({image,name,priority},indx) => {
              return <ProjectPreview image={image} 
              name={name} key={Math.random()*10*indx} 
              number={previewPriorityClasses[indx]} 
              priority={priority}
              projectsDOM={projectsDOM}
              indx={indx}
              />
            })}
          </div>
        </div>
    )
}

function ProjectPreview({image, name, number, priority, projectsDOM, indx}:IProjectPreviewComponent) {
  const measurements = ["10%","20%","70%"]
  return (
    <div className={number} style={{zIndex:priority,width:measurements[priority]}} ref={(ref)=>projectsDOM.current[indx]=ref} >
      <img src={image}></img>
      <h1 className="showName">{name}</h1>
    </div>
  )
}