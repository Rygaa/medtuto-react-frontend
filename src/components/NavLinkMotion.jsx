import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"


const NavLinkMotion = (props) => {
    return (
        <motion.div variants={props.variants} className={props.className}>
            <NavLink to={props.path}>{props.children}</NavLink>
        </motion.div>
    )
}


export default NavLinkMotion