import { N_EOL, RN_EOL, R_EOL } from './constants/validation'
import { EOL, ParserResult } from './types/validation'

export const detectEol = ({ content }: { content: string }): EOL => {
  let eol: EOL = null
  if (content.includes(RN_EOL)) eol = RN_EOL
  else if (content.includes(N_EOL)) eol = N_EOL
  else if (content.includes(R_EOL)) eol = R_EOL

  return eol
}

const splitIntoBlocks = ({ content }: { content: string }): string[] => {
  const blockSize = 512
  const blocks: string[] = []
  let currentBlock = ''

  for (let i = 0; i < content.length; i += 1) {
    currentBlock += content[i]

    // If the current block is at least blockSize in size or we're at a line break
    // Add the current block to the blocks array and reset the current block
    if (currentBlock.length >= blockSize || content[i] === '\n') {
      blocks.push(currentBlock)
      currentBlock = ''
    }
  }

  // If there's any content left in the current block, add it to the blocks array
  if (currentBlock) {
    blocks.push(currentBlock)
  }

  return blocks
}

export const parseUploadedFile = (file: File): Promise<ParserResult> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event): void => {
      if (!event.target) {
        reject(new Error('No event target'))
      }

      const content = event.target?.result?.toString() ?? ''

      const eol = detectEol({ content })
      const blocks = splitIntoBlocks({ content })

      const result: ParserResult = {
        meta: {
          eol,
        },
        blocks,
      }

      resolve(result)
    }

    reader.onerror = (error): void => {
      reject(error)
    }

    reader.readAsText(file)
  })
}
