import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='App'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
