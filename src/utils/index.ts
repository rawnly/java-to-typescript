let is_variable = /(public|private|internal|static|abstract|)(\s|)(String|Boolean|int|Integer|Byte|Long|Double)\s\w+/;
let is_func = /(Integer|int|Byte|Long|Double|String|Boolean)\s(\w+)\((.*)\)/gi;

export const transformJavaToTypescript = (text: string) =>
	text
		.split('\n')
		.filter((item) => !item.includes('@'))
		.map((row) =>
			is_variable.test(row) && !is_func.test(row)
				? row
						.replace(';', '')
						.replace(/public|private|internal|static|abstract/gi, '')
						.trim()
						.replace(/String|Boolean|Void/gi, (v) => v.toLowerCase())
						.replace(/Integer|Byte|Long|Double/gi, 'number')
						.replace(/(List|Set)<(.*?)>/, '$2[]')
						.replace(/(\w+)<(.*?)>/gi, '$2')
						.replace(/(\s=.*)/gi, '')
						.split(/(\s{1,}\w+)/gi)
						.reverse()
						.filter((a) => a.trim())
						.join(': ')
				: is_func.test(row)
				? row
						.replace(';', '')
						.replace(/(Integer|Byte|Long|Double|String|Boolean)\s(\w+)\(((.*))\)/gi, `$2: ($3) => $1`)
						.replace(/String|Boolean|Void/gi, (v) => v.toLowerCase())
						.replace(/Integer|Byte|Long|Double/gi, 'number')
						.replace(/(List|Set)<(.*?)>/, '$2[]')
						.replace(/(\w+)<(.*?)>/gi, '$2')
						.replace(/\((.*)\)/gi, (value) => {
							value = value.replace(/\(|\)/gi, '');
							value = value.includes(',')
								? value
										.split(',')
										.map((v) =>
											v
												.split(' ')
												.map((x) => x.trim())
												.filter((a) => a)
												.reverse()
												.join(': '),
										)
										.join(' ')
								: value
										.split(' ')
										.map((x) => x.trim())
										.filter((a) => a)
										.reverse()
										.join(': ');
							return `(${value})`;
						})
				: row.replace(/class/gi, 'interface'),
		)
		.map((row) =>
			/(\{|\})$/gi.test(row) || row.trim() == '' || /class|interface|enum/gi.test(row)
				? row
				: `\t${row.replace(/\s{2,}/, ' ')};`,
		)
		.join('\n');
