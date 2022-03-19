import { serverURI } from "./api.config";

export const test = {
    findOne: () => `/test`,
};

export const admin = {
    findOne: () => `/admin`,
};

export const adminTests = {
    findOne: () => `/admin/tests`,
};

export const adminTasks = {
    findOne: () => `/admin/tasks`,
};

export const adminPeople = {
    findOne: () => `/admin/people`,
};


export const productAPIRoutes = {
    findOne: (id: string | number) => `${serverURI}/product/${id}`,
};

export const productBrowserRoutes = {
    findOne: (to: string | number = ":id") => `/product/${to}`,
};
