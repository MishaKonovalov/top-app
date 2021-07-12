import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'
import cn from 'classnames'

export const Ptag = ({ children, size = 'middle', ...props }: PtagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, {
                [styles.big]: size === 'big',
                [styles.small]: size === 'small',
                [styles.middle]: size === 'middle',
            })}
            {...props}
        >
            {children}
        </p>
    )
}
