import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import {optionType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: optionType[]
    onChangeOption?: (option: number) => void
    selectedOptionId?: number
    style?: any
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    selectedOptionId,
    style,
    ...restProps
}) => {

    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
                  selected={o.id === selectedOptionId}
              >
                  {o.value}
              </option>
          ))
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(+e.currentTarget.value)
        onChange && onChange(e)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            style={style}
            {...restProps}

        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
