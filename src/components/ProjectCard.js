import React               from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 pt-5 pb-3">
            <div className="card mx-auto" style={{ maxWidth: 400 }}>
                <div className="mb-0" style={{ height: 290, overflow: 'hidden' }}>
                    <img alt="Demo" className="img-fluid rounded-top" src={props.imageLink}
                         style={{ verticalAlign: "middle", minHeight: "100%" }}>
                    </img>
                </div>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="row">
                        <div className="col-6">
                            <a className="btn btn-outline-secondary"
                               href={props.pageLink}>View Project</a>
                        </div>
                        <div className="col-6">
                            <a className="btn btn-outline-secondary"
                               href={props.repoLink}>
                                <FontAwesomeIcon icon={['fab', props.gitHost.toLowerCase()]}/> {props.gitHost}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GitHubProjectCard(props) {
    return <ProjectCard
        title={props.title}
        description={props.description}
        imageLink={props.imageLink}
        pageLink={props.pageLink}
        repoLink={"https://github.com/JakeJMattson/" + props.title}
        gitHost="GitHub"
    />
}

export function GitLabProjectCard(props) {
    return <ProjectCard
        title={props.title}
        description={props.description}
        imageLink={props.imageLink}
        pageLink={props.pageLink}
        repoLink={props.repoLink}
        gitHost="GitLab"
    />
}