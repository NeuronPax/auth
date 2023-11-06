import Header from './components/Header'
import Content from './components/Content'
import Login from './pages/Login'

const App =() => {
  return (
    <div>
      <Header />
      <Content>
        <Login />
      </Content>
    </div>
  )
}

export default App