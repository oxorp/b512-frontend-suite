import { EOL_TYPES, VALIDATION_STATUSES } from '../constants/validation'

export type ValidationStatus = (typeof VALIDATION_STATUSES)[number]
export type EOL = (typeof EOL_TYPES)[number] | null

export type ParserMetaData = {
  eol: EOL
}

export type ParserResult = {
  meta: ParserMetaData
  blocks: string[]
}

export type RecordLevel = '01' | '02' | '03' | '04'

export type RecordDefinition = {
  maxCount: number
  minCount: number
  optional: boolean
  level: RecordLevel
  fields: PositionMapping[]
}
export type B512RecordTypesMap = {
  A00: RecordDefinition
}

export type PositionMapping = {
  optional: boolean
  from: number
  to: number
  length: number
  decimal: number | null
  fieldName: string
  remark: string
}
