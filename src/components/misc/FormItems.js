export const TextInput = ({
	type,
	name,
	value,
	onChange,
	className,
	placeholder,
	required
}) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			className={className}
			placeholder={placeholder}
			required={required}
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
	onChange,
	required
}) => {
	return (
		<textarea
			id={id}
			name={name}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			className={className}
			required={required}
			value={value}
			onChange={onChange}
		></textarea>
	);
};
