import { TagProps } from './Tag.props'
import styles from './Tag.module.css'
import cn from 'classnames'

export const Tag = ({ children, size = 'middle', color = 'ghost', href, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, {
                [styles.small]: size === 'small',
                [styles.middle]: size === 'middle',
                [styles.ghost]: color === 'ghost',
                [styles.primary]: color === 'primary',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.grey]: color === 'grey',
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
}
