import React, { ReactNode } from 'react'

import { Grid, Table } from '@mantine/core'
import { ParserResult } from '../../types/validation'

type DebugParserResultTableProps = {
  parserResult: ParserResult
}

const renderSpecialChars = (str: string): ReactNode[] => {
  return [...str].map((char, index) => {
    if (char === ' ') {
      return (
        <span
          key={index}
          style={{
            display: 'inline-block',
            width: '1em',
            height: '1em',
            backgroundColor: 'yellow',
          }}
        />
      )
    }
    if (char === '\n' || char === '\r') {
      return (
        <span
          key={index}
          style={{ display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'blue' }}
        />
      )
    }
    return char
  })
}

const DebugParserResultTable = ({
  parserResult,
}: DebugParserResultTableProps): React.ReactElement => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Record</Table.Th>
          <Table.Th>Character count</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {parserResult.blocks.map((record, index) => (
          <Table.Tr key={index}>
            <Table.Td>{renderSpecialChars(record)}</Table.Td>
            <Table.Td>{record.length}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}

export default DebugParserResultTable
