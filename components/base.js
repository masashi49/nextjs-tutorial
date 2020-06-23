import styles from "./base.module.css"

export default ( { children } ) => {
    return (
        <div className={ styles.base }>{ children }</div>
    )
}
