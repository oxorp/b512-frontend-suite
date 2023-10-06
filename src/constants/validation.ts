export const SUCCESS_VALIDATION_STATUS = 'success' as const
export const WARNING_VALIDATION_STATUS = 'warning' as const
export const FILE_ERROR_VALIDATION_STATUS = 'file_error' as const
export const RECORD_ERROR_VALIDATION_STATUS = 'record_error' as const

export const VALIDATION_STATUSES = [
  SUCCESS_VALIDATION_STATUS,
  WARNING_VALIDATION_STATUS,
  FILE_ERROR_VALIDATION_STATUS,
  RECORD_ERROR_VALIDATION_STATUS,
] as const

export const N_EOL = '\n' as const
export const RN_EOL = '\r\n' as const
export const R_EOL = '\r' as const

export const EOL_TYPES = [N_EOL, RN_EOL, R_EOL] as const
