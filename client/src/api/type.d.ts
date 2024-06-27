/** 🕹️ 接口返回 基础 类型 */
export type BaseResult<T> = Promise<
    {
        data: T
        msg?: any
        code?: any
        status: number
    }
>

export type QueryPageParams = {
    currentPage?: number
    pageSize?: number
}