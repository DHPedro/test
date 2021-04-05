import { Box } from '@components'

function FolerPlus({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='24'
      height='24'
      className='folder-plus'
      viewBox='0 0 24 24'
      attrs={attrs}
      {...otherProps}
    >
      <path
        fill='currentColor'
        d='M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z'
      />
    </Box>
  )
}

export default FolerPlus
