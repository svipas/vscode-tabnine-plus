export enum Trigger {
	SPACE = " ",
	DOT = ".",
	LEFT_PAREN = "(",
	RIGHT_PAREN = ")",
	LEFT_CURLY_BRACKET = "{",
	RIGHT_CURLY_BRACKET = "}",
	LEFT_SQUARE_BRACKET = "[",
	RIGHT_SQUARE_BRACKET = "]",
	COMMA = ",",
	COLON = ":",
	SINGLE_QUOTE = "'",
	DOUBLE_QUOTE = '"',
	EQUAL = "=",
	LESS_THAN = "<",
	GREATER_THAN = ">",
	SLASH = "/",
	BACKSLASH = "\\",
	PLUS = "+",
	MINUS = "-",
	PIPE = "|",
	AND = "&",
	ASTERISK = "*",
	PERCENT = "%",
	DOLLAR = "$",
	HASH = "#",
	AT = "@",
	EXCLAMATION = "!",
}

export const allTabNineCompletionTriggers: string[] = Object.values(Trigger);