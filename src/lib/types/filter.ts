export interface FilterProps {
  tags: TagProps[]
  colors: ColorProps[]
}

export interface ColorProps {
  id: number
  name: string
}

export interface TagProps {
  id: number
  name: string
}
