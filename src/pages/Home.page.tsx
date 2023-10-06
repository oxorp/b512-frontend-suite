import { Alert, Container, Table, Text } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { useState } from 'react'
import { parseUploadedFile } from '../utils'
import { ParserResult } from '../types/validation'
import DebugParserResultTable from '../components/DebugParserResultTable'

const HomePage = (): React.ReactElement => {
  const [parserResult, setParserResult] = useState<ParserResult | null>(null)

  const [parseError, setParseError] = useState(false)
  return (
    <Container size="xl">
      <Dropzone
        maxFiles={1}
        onDrop={async (files): Promise<void> => {
          try {
            setParseError(false)
            const result = await parseUploadedFile(files[0])
            setParserResult(result)
          } catch (_e) {
            setParseError(true)
          }
        }}
      />
      {parseError && <Alert title="Error!">Unable to parse</Alert>}

      {parserResult && <DebugParserResultTable parserResult={parserResult} />}
    </Container>
  )
}

export default HomePage
