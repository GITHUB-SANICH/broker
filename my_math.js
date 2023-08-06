const add = (a, b) => {
	return a + b
}

//const minus = (a, b) => {
//	return a - b
//}

/*1-й способ*/ module.exports.add = add
/*2-й способ*/ module.exports = {
	/*1-й способ записи экспортируемой функции*/add: add,
	/*2-й способ записи экспортируемой функии*/minus: (a, b) => {
		return a - b
	}
}
