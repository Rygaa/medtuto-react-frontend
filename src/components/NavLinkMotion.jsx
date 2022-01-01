import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"


const NavLinkMotion = (props) => {
    return (
        <motion.div variants={props.variants} className={props.className}>
            <NavLink style={{width: "100%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} to={props.path}>{props.children}</NavLink>
        </motion.div>
    )
}


export default NavLinkMotion