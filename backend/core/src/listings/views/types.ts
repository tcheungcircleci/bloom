export enum ListingViewEnum {
  base = "base",
  detail = "detail",
  full = "full",
}

export interface View {
  select?: string[]
  leftJoins?: {
    join: string
    alias: string
  }[]
  leftJoinAndSelect?: [string, string][]
}

export type Views = {
  [key in ListingViewEnum]?: View
}