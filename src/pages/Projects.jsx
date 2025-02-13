import { useState, useEffect } from 'react'
import ClockLoader from "react-spinners/ClockLoader";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/aldorQlok/repos")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProjects(data);
                    setLoading(false);
                }, 3000)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    if (loading) {

        return (
            <main>
                <section>
                    <h1>Mina projekt!</h1>
                    <div className="project-section">
                        <ClockLoader
                            color="#e57373"
                            size={100}
                        />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <>
            <main>
                <section>
                    <h1>Mina projekt!</h1>
                    <div className="project-section">
                        {projects.map((p) => {
                            return (
                                <article className="card" key={p.name}>
                                    <div className="card-head">
                                        <img src="https://picsum.photos/200/300" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{p.name}</h3>
                                        <p>Språk: {p.language || "Unknown language"}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}