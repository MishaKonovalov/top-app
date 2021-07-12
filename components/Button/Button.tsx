import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = ({ children, appearence, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: appearence == 'primary',
                [styles.ghost]: appearence == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow === 'none' ? null : (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    )
}
