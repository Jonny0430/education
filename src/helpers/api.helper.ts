export const errorCatch = (error: { response: { data: { message: string | string[]; }; }; message: string; }): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message;