import React from 'react'
import noneIcon from '../imgs/arrows.png'
import upIcon from '../imgs/up.png'
import downIcon from '../imgs/down.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case down:
            return up
        case up:
            return ''
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            style={{
                cursor: 'pointer'
            }}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{ verticalAlign: 'middle' }}
                alt='sort indicator'
            />
        </span>
    )
}

export default SuperSort
