export interface ResponseData {
  data: any
}

export interface Peoples {
  count: number,
  next: string | null,
  previous: null | boolean,
  results: Array<object>
}
