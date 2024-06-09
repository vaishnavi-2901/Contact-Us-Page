import Styles from "./navigation.module.css"

const Navigation = () =>{

    console.log(Styles);
    return (
        <nav className={Styles.Navigation}>
            <div>
                <img src="/images/brand_logo.png"></img>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact Us</li>
            </ul>
        </nav>
    );
}

export default Navigation;