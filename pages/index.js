import styles from '../styles/Home.module.css'
import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plant } from '../src/models' // this should have been Plant but having trouble renaming, ugh

export default function Home() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetchPlants()
    async function fetchPlants() {
      const plantData = await DataStore.query(Plant)
      setPlants(plantData)
    }
    const subscription = DataStore.observe(Plant).subscribe(() => fetchPlants())
    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className={styles.container}>
      <h1>Plants</h1>
      {
        plants.map(plant => (
          <Link key={plant.id} href={`/plants/${plant.id}`}>
            <a>
              <h2>{plant.name}</h2>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
