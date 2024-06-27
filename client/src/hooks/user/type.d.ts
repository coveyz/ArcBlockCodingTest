import type { FormRules } from "element-plus";

export type ProfileState = {
    formData: ProfileFromDataState,
    rules: FormRules<ProfileFromDataState>
}

export type ProfileFromDataState = {
    name: string,
    email: string,
    phone: string,
    id: number
}