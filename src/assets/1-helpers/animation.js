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

const learning = {
    hidden: {
        y: '100vh'
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: '100vh',
        transition: {
            duration: .35,
        }
    }
}

const models = {
    animationTopSideContainer : {
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
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: .35,
            }
        }
    },

    animationTopSideChild: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: .35,
            }
        }
    },


    animationBottomSide: {
        hidden: {
            y: '100vh'
        },
        visible: {
            y: 0,
            transition: {
                delay: 1.5,
                duration: 1,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: .35,
            }
        }
    }
}

const chooseYourTeacher = {
    animationDesktop: {
        hidden: {
            // opacity: 0,
            y: '-100vh'
        },
        visible: {
            // opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: .35,
            }
        }
    },

    reviewsAnimation: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .75,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: .35,
            }
        }
    },
    animationMobile: {
        hidden: {
            x: '100vw'
        },
        visible: {
            x: 0,
            transition: {
                duration: 1,
            }
        },
        exit: {
            x: '100vw',
            transition: {
                duration: .35,
            }
        }
    }
}

const courses = {
    animationDesktop: {
        hidden: {
            y: '100vh'
        },
        visible: {
            y: 0,
            transition: {
                duration: 1,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: .35,
            }
        }
    },
    animationMobile: {
        hidden: {
            x: '100vw'
        },
        visible: {
            x: 0,
            transition: {
                duration: 1,
            }
        },
        exit: {
            x: '100vw',
            transition: {
                duration: .35,
            }
        }
    }
}
const animations = {
    login,
    signUp,
    dashboard,
    learning,
    models,
    chooseYourTeacher,
    courses,
}

export default animations;



