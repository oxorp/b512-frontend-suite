import '@mantine/core/styles.css'
import '@mantine/dropzone/styles.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { Router } from './Router'
import { theme } from './theme'

const App = (): React.ReactElement => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell p="xl">
        <Router />
      </AppShell>
    </MantineProvider>
  )
}

export default App
