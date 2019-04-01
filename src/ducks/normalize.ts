export const DATA_NORMALIZED = "DATA_NORMALIZED";

export const dataNormalized = ({ feature }:any) => ({
	type: `${feature} ${DATA_NORMALIZED}`,
})