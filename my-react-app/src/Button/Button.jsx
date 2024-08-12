import styles from './Button.module.css' //import the css style sheet 

function Button() {
                            //access the style
    return (<button className={styles.button}> Click me! </button>); 
}

export default Button