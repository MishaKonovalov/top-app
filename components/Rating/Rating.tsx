import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import StarIcon from './star.svg'

export const Rating = ({ isEditable, setRating, rating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<></>))

    useEffect(() => {
        construct(rating)
    }, [rating])

    const construct = (currentRating: number) => {
        const uppdatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.aditable]: isEditable === true,
                    })}
                    onMouseEnter={() => chengeDisplay(i + 1)}
                    onMouseLeave={() => chengeDisplay(rating)}
                    onClick={() => onClickHandler(i + 1)}
                />
            )
        })
        setRatingArray(uppdatedArray)
    }

    const onClickHandler = (rating: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(rating)
    }
    const chengeDisplay = (rating: number) => {
        if (!isEditable) {
            return
        }
        construct(rating)
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <i key={i}>{r}</i>
            ))}
        </div>
    )
}
