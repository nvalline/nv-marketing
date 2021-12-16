export const TextInput = ({
	type,
	name,
	value,
	onChange,
	className,
	placeholder
}) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			className={className}
			placeholder={placeholder}
		/>
	);
};

export const Textarea = ({
	id,
	name,
	cols,
	rows,
	placeholder,
	className,
	value,
	onChange
}) => {
	return (
		<textarea
			id={id}
			name={name}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			className={className}
			value={value}
			onChange={onChange}
		></textarea>
	);
};
