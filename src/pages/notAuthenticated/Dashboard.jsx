// import classes from './Header.module.scss'
import { NavLink } from "react-router-dom"
import classes from "./Dashboard.module.scss"
import image01 from '../../img/image01.png'
const Dashboard = (props) => {
    return (
        <section className={classes.dashboard}> 
            <div>
                <p>Welcome to</p>
                <p>TUTORATDZ</p>
                <p>A website aiming to help students <br/>
                with their medical learning <br />
                journey
                </p>
            </div>
            <button>Start Learning</button>
            <img src={image01}/>
     
       </section>
    );
}

export default Dashboard;