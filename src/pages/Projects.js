

const Projects = () => {

    const target = "_blank";

    const personalSite = "https://github.com/BazilAkram/BazilAkram.github.io";
    const sunLabAccessSystem = "https://github.com/BazilAkram/SUN-Lab-Access-System";
    const tenantApp = "https://github.com/BazilAkram/Maintenance-Request-System";
    const tetraGenRep = "https://github.com/BazilAkram/tetrahedron-generator";
    const tetraGenInteractive = "https://bazilakram.github.io/tetrahedron-generator";

    return (
        <>
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Projects</h1>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="box">
                        <h3 className="title is-4">Personal Site</h3>
                        <p>The site you are on.</p>
                        <br/>
                        <div className="tags">
                            <span className="tag is-info">JavaScript</span>
                            <span className="tag is-danger">React</span>
                            <span className="tag is-primary">GIT</span>
                        </div>
                        <a href={personalSite} target={target}>Github Repository</a>
                    </div>

                    <div className="box">
                        <h3 className="title is-4">SUN Lab Access System</h3>
                        <p>Class project for CMPSC487W designed to track student access to the school's Computer Lab.
                            The
                            software
                            includes a database that stores student IDs and sign-in/out details, a frontend interface
                            for
                            students to sign in and out, and an admin panel to view access history. It also provides
                            functionalities for the admin to suspend, unsuspend, and add users.</p>
                        <br/>
                        <div className="tags">
                            <span className="tag is-warning">SQL</span>
                            <span className="tag is-info">Python</span>
                            <span className="tag is-primary">Tkinter</span>
                        </div>
                        <a href={sunLabAccessSystem} target={target}>Github Repository</a>
                    </div>

                    <div className="box">
                        <h3 className="title is-4">Tenant Maintenance Request Web App</h3>
                        <p>This is the second class project for CMPSC487W, designed to simulate a Tenant Maintenance
                            Request
                            System. Tenants can file requests through a request modal, which are then stored in a
                            database.
                            Team members can view and resolve all requests. The admin has the ability to add or delete
                            tenants and team members, as well as transfer tenants to different apartments.</p>
                        <br/>
                        <div className="tags">
                            <span className="tag is-warning">SQL</span>
                            <span className="tag is-info">JavaScript</span>
                            <span className="tag is-danger">React</span>
                        </div>
                        <a href={tenantApp} target={target}>Github Repository</a>
                    </div>

                    <div className="box">
                        <h3 className="title is-4">Tetrahedron Generator</h3>
                        <p>Created a recursive generator for stacked tetrahedrons, marking my first real project using
                            three.js.</p>
                        <br/>
                        <div className="tags">
                            <span className="tag is-info">JavaScript</span>
                            <span className="tag is-danger">Vite</span>
                            <span className="tag is-danger">Three.js</span>
                        </div>
                        <a href={tetraGenRep} target={target}>Github Repository</a>
                        <br/>
                        <a href={tetraGenInteractive} target={target}>Interactive</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;