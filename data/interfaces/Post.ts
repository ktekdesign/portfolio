export type Category = {
  name: string
  link?: string
}
export type Post = {
  title: string
  image: string
  date: string
  video?: string
  category?: Category
  shortText: string
  readMoreLink: string
  aosDelay?: string
}
