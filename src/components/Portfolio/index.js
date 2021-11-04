import React, { useState } from "react";
import data from "./portfolio.json";
import portCard from "../Gallery"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Portfolio () {
const [projects, setProjects] = useState(data)

    return (
        <div>
            {projects.map( (project) => (
                <portCard title={project.title}></portCard>
            )) }

        </div>
    )
}

export default Portfolio;