import { withSSRContext } from 'aws-amplify'
import { Plant } from '../src/models'
import { useRouter } from 'next/router'

export default function PlantComponent({ plant }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>{plant.name}</h1>
    </div>
  )
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req)
  const plants = await DataStore.query(Plant)
  const paths = plants.map(plant => ({ params: { id: plant.id }}))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps (req) {
  const { DataStore } = withSSRContext(req)
  const { params } = req
  const { id } = params
  const plant = await DataStore.query(plant, id)

  return {
    props: {
      plant: JSON.parse(JSON.stringify(plant))
    },
    revalidate: 1
  }

}