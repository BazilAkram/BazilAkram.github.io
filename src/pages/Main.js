
const Main = () => {

    const linkedin = "https://www.linkedin.com/in/bazil-akram/";
    const github = "https://github.com/BazilAkram";
    const resume = "";
    return (
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Bazil Akram</h1>
                        <h2 className="subtitle">Harrisburg, PA | 717-409-4050 | MBazilAkram@gmail.com</h2>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="title">About Me</h2>
                    <p>
                        I am a senior Computer Science student at Pennsylvania State University with hands-on experience
                        in software development and a solid foundation in data structures, algorithms, and web-based
                        applications. Here I will be posting my resume and any new projects I work on.
                    </p>
                    <p><strong>Expected graduation: May 2025</strong></p>
                </div>
            </section>

            <div className="buttons container">
                <button onClick={() => window.open('/projects', '_blank')} className="button is-primary is-dark has-text-white">Projects</button>
                <a href={resume} target="_blank" className="button is-danger is-dark has-text-white">Resume PDF</a>
                <a href={linkedin} target="_blank" className="button is-link is-dark has-text-white">LinkedIn</a>
                <a href={github} target="_blank" className="button is-dark">GitHub</a>
            </div>

            <section className="section">
                <div className="container">
                    <h2 className="title">Skills</h2>
                    <div className="tags">
                        <span className="tag is-primary">JavaScript</span>
                        <span className="tag is-info">Typescript</span>
                        <span className="tag is-danger">Python</span>
                        <span className="tag is-warning">C</span>
                        <span className="tag is-primary">C++</span>
                        <span className="tag is-info">Java</span>
                        <span className="tag is-danger">MIPS</span>
                        <span className="tag is-primary">Node.js</span>
                        <span className="tag is-info">Vue</span>
                        <span className="tag is-danger">React</span>
                        <span className="tag is-warning">Angular</span>
                        <span className="tag is-primary">Next.js</span>
                        <span className="tag is-info">SQL</span>
                        <span className="tag is-danger">Oracle</span>
                        <span className="tag is-warning">Microsoft Power Platform</span>
                        <span className="tag is-primary">GIT</span>

                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                <h2 className="title">Experience</h2>
                    <div className="content">
                        <div className="box">
                            <h3 className="title is-4">Software Engineering Intern</h3>
                            <p className="subtitle is-6">Penn State Health - Jan 2024 to Present</p>
                            <ul>
                                <li>
                                    Actively contributed to strategic decision-making by providing valuable
                                    insights into selecting appropriate databases for large scale projects.
                                </li>
                                <li>
                                    Developed a comprehensive user management application designed to streamline the
                                    handling of user data.
                                    This application provides an intuitive interface that allows physicians to
                                    effortlessly access
                                    and edit patient information.
                                </li>
                                <li>
                                    Designed a Cognitive Abilities Measurement Application using the DSST methodology.
                                </li>
                                <li>
                                    Automated tasks to simplify and streamline the workflow.
                                </li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3 className="title is-4">Course Projects</h3>
                            <h5>Data Structures</h5>
                            <ul>
                                <li>Implemented a Queue in C++ using arrays and Linked Lists.</li>
                                <li>Wrote documentation for APIs and workflows.</li>
                                <li>Implemented Huffman encoding in C++, along with its encoders and decoders.</li>
                                <li>Implemented a Binary Search Tree (BST) class in C++ along with insertion, deletion,
                                    and balancing methods.
                                </li>
                                <li>Implemented a Binomial Heap class in C++ along with insert, deleteMin, getMin and
                                    merge methods.
                                </li>
                                <li>Implemented Dictionary classes in C++ using both coalesced chaining and separate
                                    chaining.
                                </li>
                            </ul>
                            <h5>Java Projects</h5>
                            <ul>
                                <li>Calculator App: An application that enables the user to perform basic math
                                    operations.
                                </li>
                                <li>Text Editor App: An application that enables the user to create, modify, and save
                                    text files
                                </li>
                                <li>Sierpinski App: An application that generates a Sierpinski's Triangle of a
                                    user-specified order through drawing
                                </li>
                                <li>Bar Charts: Created bar charts using fixed values.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        Built with <a target="_blank" href="https://bulma.io">Bulma</a> and <a target="_blank" href="https://react.dev/">React</a>.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Main;