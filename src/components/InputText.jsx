import React from 'react';

const InputText = ({ placeholder, changeFunction, textValue, id, defaultValue }) => {
	return (
		<div className="container">
			<div className="bx--form-item">
				<input
					id={id}
					type="text"
					className="bx--text-input"
					placeholder={placeholder}
					onChange={changeFunction}
					value={textValue}
					defaultValue={defaultValue}
				/>
			</div>
		</div>
	);
};

export default InputText;
