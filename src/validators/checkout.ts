const validateCreateDeliveryAddress = (address :Record<string,any>) => {
	const v_info = {
		is_valid: false,
		v_msg: "",
	}
	if (address.street.length == 0) {
		v_info.v_msg = "Введите название улицы"
		return v_info
	}
	if (address.house_number.length == 0) {
		v_info.v_msg = "Укажите номер дома"
		return v_info
	}
	v_info.is_valid = true	
	return v_info
}

export { validateCreateDeliveryAddress }
