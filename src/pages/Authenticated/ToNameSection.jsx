import classes from "../../assets/6-pages/ToNameSection.module.scss"


const ToNameSection = (props) => {
    return (
        <section className={classes['section']}>
            {props.children}

        </section>
    );
}

export default ToNameSection;