import { Dropzone } from '@mantine/dropzone'

const HomePage = (): React.ReactElement => {
  return (
    <div>
      <Dropzone
        accept={['file/txt']}
        onDrop={(s): void => {
          console.log(s)
        }}
      />
    </div>
  )
}

export default HomePage
