import { Layout } from '../../components/Layout'
import { Register } from '../../components/Register'
import { Testimonies } from '../../components/Testimonies'

export const Home = () => {
  return (
    <Layout>
      <Register />
      <Testimonies />
    </Layout>
  )
}
