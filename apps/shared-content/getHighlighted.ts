import { callContentful } from './callContentful'

const getHighlighted = async (by: string) => {
  const contentful = await callContentful(
    `query {
      tagsCollection(where: { name: "Highlighted" }) {
        items {
          linkedFrom {
            projectCollection(limit: 10) {
              items {
                title
                key {
                  key
                }
                byCollection(limit: 5) {
                  items {
                    name
                  }
                }
                thumbnail {
                  image {
                    url
                    description
                  }
                  imageLight {
                    url
                    description
                  }
                }
                intro
              }
            }
          }
        }
      }
    }
    `,
    {},
  )

  const { items } =
    contentful.data.tagsCollection.items[0].linkedFrom.projectCollection
  const highlighted = items.filter((item: any) => {
    let answer = false
    item.byCollection.items.forEach(({ name }: any) => {
      if (name === by) answer = true
    })

    return answer
  })

  return highlighted
}

export default getHighlighted
