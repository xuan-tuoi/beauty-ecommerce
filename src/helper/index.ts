import { letterSpacing } from '@mui/system'

export const formatDate = (date: string) => {
	const dateObj = new Date(date)
	const day =
		dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()
	const month =
		dateObj.getMonth() + 1 < 10
			? `0${dateObj.getMonth() + 1}`
			: dateObj.getMonth() + 1
	const year = dateObj.getFullYear()
	const hour =
		dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours()
	const minute = dateObj.getMinutes()
	return `${day}/${month}/${year} ${hour}:${minute}`
}

export function stringToColor(string: string) {
	let hash = 0
	let i

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash)
	}

	let color = '#'

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff
		color += `00${value.toString(16)}`.slice(-2)
	}
	/* eslint-enable no-bitwise */
	return color
}

export function stringAvatar(name: string) {
	return {
		sx: {
			bgcolor: stringToColor(name)
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
	}
}

export const formatCurrency = (value: any) => {
	// vd: 213000 => 213.000đ
	// money = 435472 -> 435.500đ
	// 1234000 -> 1.234.000đ
	const money = Math.ceil(value / 1000) * 1000 // ceil: làm tròn lên
	let moneyString = money.toString()
	let length = moneyString.length

	const result = []
	while (length > 3) {
		const tmp = moneyString.slice(length - 3, length)
		moneyString = moneyString.slice(0, length - 3)
		result.unshift(tmp)
		length -= 3
	}
	if (moneyString) {
		result.unshift(moneyString)
	}
	return result.join('.') + 'đ'
}

export const getPriceFormat = (value: any) => {
	const money = Math.ceil(value / 1000) * 1000 // ceil: làm tròn lên
	let moneyString = money.toString()
	let length = moneyString.length

	const result = []
	while (length > 3) {
		const tmp = moneyString.slice(length - 3, length)
		moneyString = moneyString.slice(0, length - 3)
		result.unshift(tmp)
		length -= 3
	}
	if (moneyString) {
		result.unshift(moneyString)
	}
	return result.join('')
}
