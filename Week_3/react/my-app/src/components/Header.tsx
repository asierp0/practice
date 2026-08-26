export default function Header(){



    return(
        <div className="header">
            <header>
                <h1>This is a heading</h1>
                <nav>
                    <ul className="nav-link-container">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#courses">Courses</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}