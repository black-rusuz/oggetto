import { serverURI } from "./api.config";

export const test = {
	findOne: () => `/test`,
};


export const productAPIRoutes = {
	findOne: (id: string | number) => `${serverURI}/product/${id}`,
};

export const productBrowserRoutes = {
	findOne: (to: string | number = ":id") => `/product/${to}`,
};
