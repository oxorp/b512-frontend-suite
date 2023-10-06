import '@mantine/core/styles.css'
import '@mantine/dropzone/styles.css'
import { MantineProvider } from '@mantine/core'
import { Router } from './Router'
import { theme } from './theme'

const App = (): React.ReactElement => {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  )
}

export default App
