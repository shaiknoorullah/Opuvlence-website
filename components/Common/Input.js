/** @format */

import React from "react"

const Input = ({
	className,
	label,
	labelClass,
	error,
	placeholder,
	name,
	register,
}) => {
	return (
		<div className="flex flex-col">
			<label
				className={
					labelClass ? labelClass : "text-[17px] font-normal leading-[33px]"
				}
			>
				{label}
			</label>
			<input
				{...register(name)}
				placeholder={placeholder ? placeholder : ""}
				className={
					className
						? className
						: `h-[44px] overflow-clip border p-2 w-[min(468px,max(24.375vw,320px))] ${
								error
									? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
									: "border-black"
						  } rounded-[3px] bg-transparent placeholder:text-black-300`
				}
			/>
			{error && <p className="text-red-600">{error.message}</p>}
		</div>
	)
}

export default Input
