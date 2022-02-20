const login = {
    hidden: {
        y: '100vh',
    },
    visible: {
        y: 0,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            ease: 'easeInOut',
            duration: .35,
        }
    }
}

const signUp = {
    hidden: {
        y: '100vh',
    },
    visible: {
        y: 0,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            ease: 'easeInOut',
            duration: .35,
        }
    }
}


const dashboard = {
    animationRightSide: {
        hidden: {
            x: '100vw',
        },
        visible: {
            x: 0,
            transition: {
                duration: 1.5,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                ease: 'easeInOut',
                duration: .35,
            }
        }

    },
    animationLeftSideContainer : {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 8,
                staggerChildren: .5,
                when: "beforeChildren",
                duration: 1.25,
            },
        },
        exit: {
            y: '100vh',
            transition: {
                ease: 'easeInOut',
                duration: .35,
            }
        }


    },
    childVariants : {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5,
            }
        },

    }
    
}


const animations = {
    login,
    signUp,
    dashboard
}

export default animations;



